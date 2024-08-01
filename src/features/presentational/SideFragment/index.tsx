import React, { type ReactElement } from 'react';
import styles from './index.module.scss';
import Tag from '@/elements/Tag';

type SidePostType = {
  title: string;
  tags: string[];
  date: string;
};

type Props = {
  sidePosts: SidePostType[];
};

export default function SidePost({ sidePosts }: Props): ReactElement {
  return (
    <ul className={styles.postList}>
      {sidePosts.map((post) => (
        <div key={post.title} className={styles.postContainer}>
          <li className={styles.contentContainer}>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.tagContainer}>
              {post.tags.map((tag) => (
                <Tag key={post.title}>{tag}</Tag>
              ))}
            </div>
            <div className={styles.date}>{post.date}</div>
          </li>
        </div>
      ))}
    </ul>
  );
}
