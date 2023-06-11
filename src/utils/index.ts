import { CProps } from '../../types';
import { ElementType, Fragment, ReactNode, createElement } from 'react';

export function element({ as, children, ...rest }: CProps & { children: ReactNode }) {
  return createElement(as || Fragment, rest, children);
}
