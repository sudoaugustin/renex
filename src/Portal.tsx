import { CProps } from '../types';
import useIsBrowser from './hooks/useIsBrowser';
import { element } from './utils';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = CProps & { root?: string; children: ReactNode; fallback?: boolean };

export default function Portal({ root = 'body', fallback, ...rest }: Props) {
  const node = element(rest);
  const isBrowser = useIsBrowser();
  const portalEle = isBrowser && document.querySelector(root);

  return portalEle ? createPortal(node, portalEle) : fallback ? node : null;
}
