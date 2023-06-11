import { CProps } from '../types';
import { element } from './utils';
import { ReactNode, useEffect, useSyncExternalStore } from 'react';

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

const event = new Event('renex-storage');

const setItem = (name: string, serializer: Function) => (value: unknown) => {
  localStorage.setItem(name, serializer(value));
  window.dispatchEvent(event);
};

const removeItem = (name: string) => {
  localStorage.removeItem(name);
  window.dispatchEvent(event);
};

function subscriber(callback: EventListener) {
  window.addEventListener('storage', callback);
  window.addEventListener('renex-storage', callback);
  return () => {
    window.addEventListener('storage', callback);
    window.removeEventListener('renex-storage', callback);
  };
}

function Storage<TState = string>({
  name,
  initial,
  children,
  serializer = JSON.stringify,
  deserializer = JSON.parse,
  ...rest
}: Props<TState>) {
  const value = useSyncExternalStore<null | string>(
    subscriber,
    () => localStorage.getItem(name),
    () => null,
  );

  return element({
    ...rest,
    // Handle server-rendering and deserializing here to avoid useSyncExternalStore with immutable data.
    children: children(value === null ? initial : deserializer(value), setItem(name, serializer), () => removeItem(name)),
  });
}

function StorageAction<TState = string>({ name, children, serializer = JSON.stringify, ...rest }: ActionProps<TState>) {
  return element({
    ...rest,
    children: children(setItem(name, serializer), () => removeItem(name)),
  });
}

Storage.Action = StorageAction;

export default Storage;
