import { type CSSProperties, type ReactElement } from 'react';
import { FONT_SIZE_MAP, type Size } from '@/consts/size';

type Props = {
  size?: Size;
  children: string;
  bold?: boolean;
};

export default function TextBox({ size = 'md', children, bold = false }: Props): ReactElement {
  const textStyle: CSSProperties = {
    fontSize: FONT_SIZE_MAP[size],
    fontWeight: bold ? 'bold' : 'normal',
  };

  return <p style={textStyle}>{children}</p>;
}
