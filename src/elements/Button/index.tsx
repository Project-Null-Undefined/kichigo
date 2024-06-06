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

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  size?: Size;
  children: string;
  color?: ColorKey;
  outline?: ColorKey;
  backgroundColor?: ColorKey;
  icon?: ReactElement;
}

export default function Button({
  size = 'md',
  children,
  color = 'background',
  outline,
  backgroundColor,
  icon,
  ...props
}: Props): ReactElement {
  const buttonStyle: CSSProperties = {
    backgroundColor: COLOR[backgroundColor ?? 'primary'],
    color: COLOR[color ?? 'background'],
    fontSize: BUTTON_SIZE[size ?? 'md'],
    borderColor: outline === undefined ? undefined : COLOR[outline],
    borderStyle: outline === undefined ? undefined : 'solid',
  };

  const iconStyle: CSSProperties = {
    fill: COLOR[color ?? 'background'],
  };

  const Icon =
    icon === undefined
      ? undefined
      : () =>
          React.cloneElement(icon, {
            style: iconStyle,
            height: BUTTON_SIZE[size ?? 'md'],
            width: 'auto',
            className: styles.icon,
          });

  return (
    <button {...props} className={styles.button} style={buttonStyle} type="button">
      {Icon !== undefined && <Icon />}
      <span className={styles.text}>{children}</span>
    </button>
  );
}
