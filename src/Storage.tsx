import { CProps } from '../types';
import { element } from './utils';
import { ElementType, ReactNode, useLayoutEffect, useSyncExternalStore } from 'react';

type Props<T> = {
  name: string;
  initial?: T;
  children: (value: T | undefined, set: (v: T) => void, remove: () => void) => ReactNode;
};

function setItem(name: string) {
  return (value: unknown) => localStorage.setItem(name, JSON.stringify(value));
}

function removeItem(name: string) {
  localStorage.removeItem(name);
}

function subscriber(callback: EventListener) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export default function Storage<TState = string, TTag extends ElementType = ElementType>({
  name,
  initial,
  children,
  ...rest
}: Props<TState> & CProps<TTag>) {
  const set = setItem(name);

  const value = useSyncExternalStore<TState | null>(subscriber, () => JSON.parse(localStorage.getItem(name) as string));

  useLayoutEffect(() => {
    const value = localStorage.getItem(name);
    value === null && initial !== undefined && set(initial);
  }, [name, initial]);

  return element({
    ...rest,
    children: children(value === null ? initial : value, set, () => removeItem(name)),
  });
}
