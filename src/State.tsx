import { CProps, StateConsumer } from '../types';
import { Fragment, ReactNode, createElement, useState } from 'react';

type Props<T> = CProps & {
  initial: T;
  children: StateConsumer<T, ReactNode>;
};

export default function State<T>({ as = 'div', initial, children, ...rest }: Props<T>) {
  const [state, setState] = useState(initial);

  return createElement(as || Fragment, rest, children(state, setState));
}
