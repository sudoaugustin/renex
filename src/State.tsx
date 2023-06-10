'use client';
import { CProps, StateConsumer } from '../types';
import { element } from './utils';
import { ElementType, ReactNode, useState } from 'react';

type Props<T> = {
  initial: T;
  children: StateConsumer<T, ReactNode>;
};

export default function State<TState, TTag extends ElementType>({ initial, children, ...rest }: Props<TState> & CProps<TTag>) {
  const [state, setState] = useState(initial);
  return element({ ...rest, children: children(state, setState) });
}
