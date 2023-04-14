import { ElementType } from 'react';

export type StateConsumer<TState, TChild> = (
  state: TState,
  setState: (newState: TState | ((oldState: TState) => TState)) => void,
) => TChild;

export type CProps<T extends ElementType> = { as?: T } & (T extends keyof JSX.IntrinsicElements
  ? Omit<JSX.IntrinsicElements[T], 'children'>
  : unknown);
