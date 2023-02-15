import { HTMLProps, ReactHTML, ReactNode } from 'react';

// HTMLProps are available only if `headless` is `false` or `undefined`
export type CProps<T> = ({ as?: '' } | ({ as?: keyof ReactHTML } & Omit<HTMLProps<HTMLElement>, 'children'>)) & {
  children: StateConsumer<T, ReactNode>;
};

export type StateConsumer<T, R> = (state: T, setState: (newState: T | ((oldState: T) => T)) => void) => R;
