import { CProps } from '../types';
import { element } from './utils';
import { ReactNode, useState } from 'react';

type Type = string | number | boolean;

type Props<T extends ReadonlyArray<Type>> = CProps & {
  options?: T;
  initial?: T[number];
  children: (value: T[number], toggle: () => void) => ReactNode;
  onValueChange?: (value: T[number]) => void;
};

export default function Toggle<T extends ReadonlyArray<Type> = boolean[]>({
  initial,
  children,
  //@ts-ignore
  options = [false, true],
  onValueChange,
  ...rest
}: Props<T>) {
  const [index, setIndex] = useState(initial === undefined ? 0 : options.findIndex((option) => option === initial));

  const toggle = () => {
    const newIndex = index + 1 === options.length ? 0 : index + 1;
    setIndex(newIndex);
    onValueChange?.(options[newIndex]);
  };

  return element({ ...rest, children: children(options[index], toggle) });
}
