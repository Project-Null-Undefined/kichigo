import { type ButtonHTMLAttributes, type CSSProperties, type ReactElement } from 'react';
import styles from './index.module.scss';
import { COLOR, type ColorKey } from '@/consts/color';

type Props = {
  children: string;
  color?: ColorKey;
  backgroundColor?: ColorKey;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'name' | 'id'>;

export default function Tag({ children, color, backgroundColor, ...props }: Props): ReactElement {
  const buttonStyle: CSSProperties = {
    color: COLOR[color ?? 'background'],
    backgroundColor: COLOR[backgroundColor ?? 'tag'],
  };

  return (
    <button {...props} className={styles.tag} style={buttonStyle} type="button">
      {children}
    </button>
  );
}
