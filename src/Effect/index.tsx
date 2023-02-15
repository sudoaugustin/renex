import { CProps, StateConsumer } from '../../types';
import { Fragment, createElement, useEffect, useState } from 'react';

type Props<T> = CProps<T> & { initial: T; callback: StateConsumer<T, void | Function> };

export default function Effect<T>({ as = 'div', initial, callback, children, ...rest }: Props<T>) {
  const [state, setState] = useState(initial);

  useEffect(() => {
    const cleanup = callback(state, setState);
    if (cleanup) return cleanup();
  }, [state]);

  return createElement(as || Fragment, { ...rest }, children(state, setState));
}
