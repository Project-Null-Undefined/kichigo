import type { Meta, StoryObj } from '@storybook/react';
import Link from '.';

const meta: Meta<typeof Link> = {
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'This is Link',
    href: '/',
  },
};

export const External: Story = {
  args: {
    children: 'This is External Link',
    href: '/',
    isExternal: true,
  },
};
