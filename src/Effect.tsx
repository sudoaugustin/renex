import { CProps, StateConsumer } from '../types';
import { element } from './utils';
import { ElementType, ReactNode, useEffect, useState } from 'react';

type Props<T> = {
  initial: T;
  callback: StateConsumer<T, void | Function>;
  children: StateConsumer<T, ReactNode>;
};

export default function Effect<TState, TTag extends ElementType>({ initial, callback, children, ...rest }: Props<TState> & CProps<TTag>) {
  const [state, setState] = useState(initial);

  useEffect(() => {
    const cleanup = callback(state, setState);
    if (cleanup) return cleanup();
  }, [state]);

  return element({ ...rest, children: children(state, setState) });
}
