import Image from 'next/image';
import { type ReactElement, type ButtonHTMLAttributes, type CSSProperties, type HTMLAttributes } from 'react';
import styles from './index.module.scss';
import { COLOR, type ColorKey } from '@/consts/color';
import { RADIUS, type RadiusKey } from '@/consts/variables';

type Props = {
  src: string;
  className?: HTMLAttributes<HTMLButtonElement>['className'];
  bgColor?: ColorKey;
  type: 'png' | 'svg';
  radius: RadiusKey | 'circle';
  width: number;
  height: number;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'name' | 'id'>;

export default function ImageButton({
  src,
  bgColor = 'transparent',
  className,
  type,
  radius,
  width,
  height,
  ...props
}: Props): ReactElement {
  const buttonStyle: CSSProperties = {
    width,
    height,
    backgroundColor: COLOR[bgColor],
    borderRadius: radius === 'circle' ? 'calc(infinity * 1px)' : RADIUS[radius],
  };

  return (
    <button {...props} className={`${styles.button} ${className}`} style={buttonStyle} type="button">
      {type === 'svg' ? (
        <svg height={height} viewBox="0 0 24 24" width={width}>
          <path d={src} />
        </svg>
      ) : (
        <Image alt="button" height={height} src={src} width={width} />
      )}
    </button>
  );
}
