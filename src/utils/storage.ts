import { element } from '.';
import { CProps } from '../../types';
import { ReactNode, useSyncExternalStore } from 'react';

type Set<T> = (v: T) => void;

type Remove = () => void;

type Common<T> = CProps & {
  name: string;
  serializer?: (value: T) => string;
};

type Props<T> = Common<T> & {
  initial?: T;
  children: (value: T | undefined, set: Set<T>, remove: Remove) => ReactNode;
  deserializer?: (value: string) => T;
};

type SetProps<T> = Common<T> & { children: (set: Set<T>) => ReactNode };

type RemoveProps<T> = Common<T> & { children: (remove: Remove) => ReactNode };

type ActionProps<T> = Common<T> & { children: (set: Set<T>, remove: Remove) => ReactNode };

export default function storage(isSession: boolean) {
  const ename = isSession ? 'renex-session-storage' : 'renex-local-storage';
  const event = new Event(ename);
  const storage = isSession ? globalThis.sessionStorage : globalThis.localStorage; //globalThis to SSR error

  const setItem = (name: string, serializer: Function) => (value: unknown) => {
    storage.setItem(name, serializer(value));
    window.dispatchEvent(event);
  };

  const removeItem = (name: string) => {
    storage.removeItem(name);
    window.dispatchEvent(event);
  };

  const subscriber = (callback: EventListener) => {
    window.addEventListener(ename, callback);
    !isSession && window.addEventListener('storage', callback);
    return () => {
      window.removeEventListener(ename, callback);
      !isSession && window.addEventListener('storage', callback);
    };
  };

  function Storage<TState = string>({
    name,
    initial,
    children,
    serializer = JSON.stringify,
    deserializer = JSON.parse,
    ...rest
  }: Props<TState>) {
    const value = useSyncExternalStore(
      subscriber,
      () => storage.getItem(name),
      () => null,
    );

    return element({
      ...rest,
      // Handle server-rendering and deserializing here to avoid useSyncExternalStore with immutable data.
      children: children(value === null ? initial : deserializer(value), setItem(name, serializer), () => removeItem(name)),
    });
  }

  function SetStorage<TState = string>({ name, children, serializer = JSON.stringify, ...rest }: SetProps<TState>) {
    return element({ ...rest, children: children(setItem(name, serializer)) });
  }

  function RemoveStorage<TState = string>({ name, children, serializer = JSON.stringify, ...rest }: RemoveProps<TState>) {
    return element({ ...rest, children: children(() => removeItem(name)) });
  }

  function ActionStorage<TState = string>({ name, children, serializer = JSON.stringify, ...rest }: ActionProps<TState>) {
    return element({ ...rest, children: children(setItem(name, serializer), () => removeItem(name)) });
  }

  Storage.Set = SetStorage;
  Storage.Remove = RemoveStorage;
  Storage.Action = ActionStorage;

  return Storage;
}
