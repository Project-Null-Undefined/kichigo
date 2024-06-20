

import type { Meta, StoryObj } from '@storybook/react';
import TextBox from '.';


const meta: Meta<typeof TextBox> = {
  component: TextBox,
};


export default meta;
type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  args: {
    children: <>This is TextBox</>,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: <>This is TextBox</>,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: <>This is TextBox</>,
  },
};

export const Middle: Story = {
  args: {
    size: 'md',
    children: <>This is TextBox</>,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <>This is TextBox</>,
  },
};