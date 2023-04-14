import { CProps } from '../types';
import useIsBrowser from './hooks/useIsBrowser';
import { element } from './utils';
import { ElementType, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = { root?: string; children: ReactNode };

export default function Portal<TTag extends ElementType>({ root = 'body', ...rest }: Props & CProps<TTag>) {
  const isBrowser = useIsBrowser();
  return isBrowser ? createPortal(element(rest), document.querySelector(root) as HTMLElement) : null;
}
