import { type ReactElement } from 'react';
import styles from './index.module.scss';

export default function Penguin(): ReactElement {
  return <div className={styles.penguin}>Penguin is cute!</div>;
}
