import { CProps } from '../types';
import { CSSProperties } from 'react';

type Key = keyof CSSProperties | (string & {});

type CSS = { [K in Key]?: string };

type Props = CProps & {
  children: CSS;
};

const CSS = (
  <StyleSheet>
    {{
      color: '',
      '@media': '',
    }}
  </StyleSheet>
);

export default function StyleSheet(props: Props) {
  return <div>Helloworld</div>;
}
