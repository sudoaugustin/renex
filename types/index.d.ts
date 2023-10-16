import { HTMLProps, ReactHTML } from 'react';

export type StateConsumer<TState, TChild> = (
  state: TState,
  setState: (newState: TState | ((oldState: TState) => TState)) => void,
) => TChild;

export type CProps = { as?: keyof ReactHTML } & Omit<HTMLProps<HTMLElement>, 'ref' | 'children'>;
