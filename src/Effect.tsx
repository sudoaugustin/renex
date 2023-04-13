import { CProps, StateConsumer } from '../types';
import { element } from '../utils';
import { Fragment, ReactNode, createElement, useEffect, useState } from 'react';

type Props<T> = CProps & {
  initial: T;
  callback: StateConsumer<T, void | Function>;
  children: StateConsumer<T, ReactNode>;
};

export default function Effect<T>({ initial, callback, children, ...rest }: Props<T>) {
  const [state, setState] = useState(initial);

  useEffect(() => {
    const cleanup = callback(state, setState);
    if (cleanup) return cleanup();
  }, [state]);

  return element({ ...rest, children: children(state, setState) });
}
