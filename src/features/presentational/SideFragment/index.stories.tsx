import type { Meta, StoryObj } from '@storybook/react';
import SidePost from '.';

const meta: Meta<typeof SidePost> = {
  component: SidePost,
};

export default meta;
type Story = StoryObj<typeof SidePost>;

export const Default: Story = {
  args: {
    sidePosts: [
      { title: '投稿のタイトル', tags: ['タグ1', 'タグ2', 'タグ3'], date: '2005年1月5日' },
      { title: '投稿のタイトル', tags: ['タグ1', 'タグ2'], date: '2005年1月5日' },
      { title: '投稿のタイトル', tags: ['タグ1', 'タグ2'], date: '2005年1月5日' },
      { title: '投稿のタイトル', tags: ['タグ1', 'タグ2'], date: '2005年1月5日' },
      { title: '投稿のタイトル', tags: ['タグ1', 'タグ2'], date: '2005年1月5日' },
    ],
  },
};
