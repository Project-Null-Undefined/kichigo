import { ExternalLinkIcon } from '@radix-ui/react-icons';
import NextLink, { type LinkProps } from 'next/link';
import { type ReactNode, type ReactElement, type CSSProperties } from 'react';
import styles from './index.module.scss';
import { COLOR, type ColorKey } from '@/consts/color';
import { FONT_SIZE_MAP, type Size } from '@/consts/size';

type Props = LinkProps & {
  size?: Size;
  children: ReactNode;
  color?: ColorKey;
  backgroundColor?: ColorKey;
  isExternal: boolean;
  className?: string;
};

export default function Link({
  children,
  size = 'md',
  color = 'primary',
  backgroundColor = 'transparent',
  isExternal = false,
  className,
  ...props
}: Props): ReactElement {
  const style: CSSProperties = {
    color: COLOR[color],
    backgroundColor: COLOR[backgroundColor],
    fontSize: FONT_SIZE_MAP[size],
  };

  return (
    <NextLink
      {...props}
      className={`${className ?? ''} ${styles.link}`}
      rel="noopener noreferrer"
      style={style}
      target={isExternal ? '_blank' : '_self'}
    >
      {children}
      {isExternal && <ExternalLinkIcon className={styles.icon} />}
    </NextLink>
  );
}
