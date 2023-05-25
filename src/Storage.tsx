import { CProps } from '../types';
import { element } from './utils';
import { ElementType, ReactNode, useLayoutEffect, useSyncExternalStore } from 'react';

type Props<T> = {
  name: string;
  children: (state: T, setState: (v: T) => void) => ReactNode;
};

const event = new Event('renex-storage');

function getValue<TState>(name: string) {
  const value = localStorage.getItem(name);
  return value as TState;
}

function subscriber(callback: EventListener) {
  document.addEventListener('renex-storage', callback);
  return () => document.removeEventListener('renex-storage', callback);
}

export default function Storage<TState = string, TTag extends ElementType = ElementType>({
  name,
  children,
  ...rest
}: Props<TState> & CProps<TTag>) {
  const state = useSyncExternalStore<TState>(subscriber, () => getValue(name));

  useLayoutEffect(() => {
    document.dispatchEvent(event);
  }, []);

  const setState = (value: TState) => {
    const newValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(name, newValue);
    document.dispatchEvent(event);
  };

  return element({ ...rest, children: children(state, setState) });
}
