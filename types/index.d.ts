import { HTMLProps, ReactHTML } from 'react';

export type CProps = { as?: '' } | ({ as?: keyof ReactHTML } & Omit<HTMLProps<HTMLElement>, 'children'>);

export type StateConsumer<T, R> = (state: T, setState: (newState: T | ((oldState: T) => T)) => void) => R;
