import { CProps } from '../../types';
import { Fragment, createElement, useState } from 'react';

type Props<T> = CProps<T> & { initial: T };

export default function State<T>({ as = 'div', initial, children, ...rest }: Props<T>) {
  const [state, setState] = useState(initial);
  return createElement(as || Fragment, { ...rest }, children(state, setState));
}
