import React, { type ButtonHTMLAttributes, type CSSProperties, type ReactElement } from 'react';
import styles from './index.module.scss';
import { COLOR, type ColorKey } from '@/consts/color';
import { type Size } from '@/consts/size';

const BUTTON_SIZE = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.25rem',
} as const;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  children: string;
  color?: ColorKey;
  outline?: ColorKey;
  backgroundColor?: ColorKey;
}

export default function Button({
  size = 'md',
  children,
  color = 'background',
  outline,
  backgroundColor,
  ...props
}: Props): ReactElement {
  const style: CSSProperties = {
    backgroundColor: COLOR[backgroundColor ?? 'primary'],
    color: COLOR[color ?? 'background'],
    fontSize: BUTTON_SIZE[size ?? 'md'],
    borderColor: outline === undefined ? undefined : COLOR[outline],
    borderStyle: outline === undefined ? undefined : 'solid',
  };

  return (
    <button {...props} className={styles.button} style={style} type="button">
      {children}
    </button>
  );
}
