import { CProps } from '../types';
import { Fragment, ReactNode, createElement } from 'react';

export function element({ as = 'div', children, ...rest }: CProps & { children: ReactNode }) {
  return createElement(as || Fragment, rest, children);
}
