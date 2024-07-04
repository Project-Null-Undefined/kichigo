import { useState, type ReactElement } from 'react';
import styles from './index.module.scss';
import ImageButton from '@/elements/ImageButton';

type Props = {
  onClick: (input: string) => void;
};

export default function FragmentSearch({ onClick }: Props): ReactElement {
  const [searchInput, setSearchInput] = useState('');

  const performSearch = (): void => {
    onClick(searchInput);
  };

  return (
    <div className={styles.searchBox}>
      <ImageButton
        height={32}
        onClick={performSearch}
        radius="circle"
        src="M10 2a8 8 0 0 1 8 8 8 8 0 0 1-1.738 4.889l4.581 4.58-1.414 1.414-4.58-4.581A8 8 0 1 1 10 2m0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
        type="svg"
        width={32}
      />
      <input onChange={(e) => setSearchInput} placeholder="検索ワードを入力" type="text" />
    </div>
  );
}
