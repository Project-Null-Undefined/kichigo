import Image from 'next/image';
import { type ReactElement, type ButtonHTMLAttributes, type CSSProperties } from 'react';
import styles from './index.module.scss';
import { RADIUS, type RadiusKey } from '@/consts/variables';

type Props = {
  src: string;
  radius: RadiusKey | 'circle';
  width: number;
  height: number;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'name' | 'id'>;

export default function ImageButton({ src, radius, width, height, ...props }: Props): ReactElement {
  const buttonStyle: CSSProperties = {
    width,
    height,
    borderRadius: radius === 'circle' ? 'calc(infinity * 1px)' : RADIUS[radius],
  };

  return (
    <button {...props} className={styles.button} style={buttonStyle} type="button">
      <Image alt="button" height={height} src={src} width={width} />
    </button>
  );
}
