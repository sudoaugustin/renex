import { CProps } from '../types';
import { DependencyList, Fragment, ReactNode, createElement, useMemo } from 'react';

type Props<T> = CProps & { deps: T; children: (deps: T) => ReactNode };

export default function Memo<T extends DependencyList>({ as = 'div', deps, children, ...rest }: Props<T>) {
  const $children = useMemo(() => children(deps), deps);
  return createElement(as || Fragment, rest, $children);
}
