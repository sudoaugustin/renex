import { CProps } from '../types';
import { element } from './utils';
import { DependencyList, ElementType, ReactNode, useMemo } from 'react';

type Props<T> = { deps: T; children: (deps: T) => ReactNode };

export default function Memo<T extends DependencyList, TTag extends ElementType>({ deps, children, ...rest }: Props<T> & CProps<TTag>) {
  const $children = useMemo(() => children(deps), deps);

  return element({ ...rest, children: $children });
}
