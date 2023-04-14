import { CProps } from '../../types';
import { ElementType, Fragment, ReactNode, createElement } from 'react';

export function element<T extends ElementType>({ as, children, ...rest }: CProps<T> & { children: ReactNode }) {
  return createElement(as || Fragment, rest, children);
}
