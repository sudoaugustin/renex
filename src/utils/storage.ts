import { CProps } from '../../types';
import { ReactNode } from 'react';

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

type ActionProps<T> = Common<T> & {
  children: (set: Set<T>, remove: Remove) => ReactNode;
};

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

  return {
    getItem: (name: string) => storage.getItem(name),
    setItem,
    removeItem,
    subscriber,
    getServerSnap: () => null,
  };
}

export type { Props, ActionProps };
