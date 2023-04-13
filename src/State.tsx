import { CProps, StateConsumer } from '../types';
import { element } from '../utils';
import { ReactNode, useState } from 'react';

type Props<T> = CProps & {
  initial: T;
  children: StateConsumer<T, ReactNode>;
};

export default function State<T>({ initial, children, ...rest }: Props<T>) {
  const [state, setState] = useState(initial);
  return element({ ...rest, children: children(state, setState) });
}
