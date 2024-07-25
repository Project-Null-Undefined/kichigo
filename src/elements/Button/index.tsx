import React, { type ButtonHTMLAttributes, type CSSProperties, type ReactElement } from 'react';
import styles from './index.module.scss';
import { COLOR, type ColorKey } from '@/consts/color';
import { FONT_SIZE_MAP, type Size } from '@/consts/size';

type Props = {
  size?: Size;
  children: string;
  color?: ColorKey;
  outline?: ColorKey;
  backgroundColor?: ColorKey;
  icon?: ReactElement;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

export default function Button({
  size = 'md',
  children,
  color = 'primary',
  backgroundColor = 'transparent',
  outline,
  icon,
  ...props
}: Props): ReactElement {
  const buttonStyle: CSSProperties = {
    color: COLOR[color],
    backgroundColor: COLOR[backgroundColor],
    fontSize: FONT_SIZE_MAP[size],
    borderColor: outline === undefined ? undefined : COLOR[outline],
    borderStyle: outline === undefined ? undefined : 'solid',
  };

  const iconStyle: CSSProperties = { fill: COLOR[color] };

  const Icon =
    icon === undefined
      ? undefined
      : () =>
          React.cloneElement(icon, {
            style: iconStyle,
            height: FONT_SIZE_MAP[size],
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
