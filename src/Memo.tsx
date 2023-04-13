import { CProps } from '../types';
import { element } from '../utils';
import { DependencyList, ReactNode, useMemo } from 'react';

type Props<T> = CProps & { deps: T; children: (deps: T) => ReactNode };

export default function Memo<T extends DependencyList>({ deps, children, ...rest }: Props<T>) {
  const $children = useMemo(() => children(deps), deps);

  return element({ ...rest, children: $children });
}
