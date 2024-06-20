import { type CSSProperties, type ReactElement } from 'react';
import styles from './index.module.scss';
import { COLOR, type ColorKey } from '@/consts/color';

type Props = {
  children: string;
  color?: ColorKey;
  backgroundColor?: ColorKey;
};

export default function Tag({ children, color, backgroundColor }: Props): ReactElement {
  const style: CSSProperties = {
    color: COLOR[color ?? 'background'],
    backgroundColor: COLOR[backgroundColor ?? 'tag'],
  };

  return (
    <span className={styles.tag} style={style}>
      {children}
    </span>
  );
}
