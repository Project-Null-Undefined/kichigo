import { BellIcon } from '@radix-ui/react-icons';
import logo from 'public/logo/kiichigo.svg';
import { type ReactElement } from 'react';
import styles from './index.module.scss';
import ImageButton from '@/elements/ImageButton';
import Link from '@/elements/Link';
import FragmentSearch from '@/features/presentational/FragmentSearch';

type Props = {
  showTabs?: boolean;
};

export default function Header({ showTabs = true }: Props): ReactElement {
  const openNotification = (): void => {
    console.log('Open notification');
  };

  const openUserMenu = (): void => {
    console.log('Open user menu');
  };

  return (
    <header className={styles.header}>
      <ImageButton className={styles.logo} height={100} radius="xs" src={logo.src} type="png" width={100} />

      <FragmentSearch
        className={styles.searchBox}
        onClick={() => {
          console.log('Search');
        }}
      />

      <BellIcon className={styles.notification} height={26} onClick={openNotification} width={26} />
      <ImageButton
        height={36}
        onClick={openUserMenu}
        radius="circle"
        src="https://placehold.jp/3d4070/ffffff/150x150.png?text=アイコン"
        type="png"
        width={36}
      />
      <Link backgroundColor="primary" color="background" href="/fragment" isExternal={false}>
        フラグメント
      </Link>
    </header>
  );
}
