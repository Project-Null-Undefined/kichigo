import type { ReactElement } from 'react';
import styles from './page.module.scss';

export default function Home(): ReactElement {
  return (
    <main className={styles.main}>
      <p>Hello</p>
    </main>
  );
}
