import { CProps } from '../types';
import { Fragment, ReactNode, createElement, useMemo } from 'react';

type Props = CProps & { deps: unknown[]; children: ReactNode };

export default function Memo({ as = 'div', deps, children, ...rest }: Props) {
  const $children = useMemo(() => createElement(as || Fragment, rest, children), deps);
  return $children;
}
