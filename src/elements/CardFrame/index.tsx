import { type HTMLAttributes, type ReactElement, type ReactNode } from 'react';
import styles from './index.module.scss';

type Props = {
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

export default function CardFrame({ children, ...props }: Props): ReactElement {
  return (
    <div {...props} className={styles.cardFrame}>
      {children}
    </div>
  );
}
