import { CProps } from '../types';
import { element } from './utils';
import { ElementType, ReactNode, useEffect, useSyncExternalStore } from 'react';

type Set<T> = (v: T) => void;

type Remove = () => void;

type Props<T> = {
  name: string;
  initial?: T;
  children: (value: T | undefined, set: Set<T>, remove: Remove) => ReactNode;
};

type ActionProps<T> = {
  name: string;
  children: (set: Set<T>, remove: Remove) => ReactNode;
};

const event = new Event('renex-storage');

const setItem = (name: string) => (value: unknown) => {
  localStorage.setItem(name, JSON.stringify(value));
  window.dispatchEvent(event);
};

const removeItem = (name: string) => {
  localStorage.removeItem(name);
  window.dispatchEvent(event);
};

function subscriber(callback: EventListener) {
  window.addEventListener('renex-storage', callback);
  return () => window.removeEventListener('renex-storage', callback);
}

function Storage<TState = string, TTag extends ElementType = ElementType>({
  name,
  initial,
  children,
  ...rest
}: Props<TState> & CProps<TTag>) {
  const value = useSyncExternalStore<TState | null>(
    subscriber,
    () => JSON.parse(localStorage.getItem(name) as string),
    () => initial || null,
  );

  useEffect(() => {
    window.dispatchEvent(event);
  }, []);

  return element({
    ...rest,
    children: children(value === null ? initial : value, setItem(name), () => removeItem(name)),
  });
}

function Action<TState = string, TTag extends ElementType = ElementType>({ name, children, ...rest }: ActionProps<TState> & CProps<TTag>) {
  return element({
    ...rest,
    children: children(setItem(name), () => removeItem(name)),
  });
}

Storage.Action = Action;

export default Storage;
