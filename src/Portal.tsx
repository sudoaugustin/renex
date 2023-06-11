import { CProps } from '../types';
import useIsBrowser from './hooks/useIsBrowser';
import { element } from './utils';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = CProps & { root?: string; children: ReactNode };

export default function Portal({ root = 'body', ...rest }: Props) {
  const isBrowser = useIsBrowser();
  return isBrowser ? createPortal(element(rest), document.querySelector(root) as HTMLElement) : null;
}
