import { HTMLProps, ReactHTML } from 'react';

type StateConsumer<TState, TChild> = (state: TState, setState: (newState: TState | ((oldState: TState) => TState)) => void) => TChild;

type CProps = { as?: keyof ReactHTML } & Omit<HTMLProps<HTMLElement>, 'ref' | 'children'>;
