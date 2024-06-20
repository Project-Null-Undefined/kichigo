import type { Meta, StoryObj } from '@storybook/react';
import logo from 'public/logo/logo.png';
import ImageButton from '.';

const meta: Meta<typeof ImageButton> = {
  component: ImageButton,
};

export default meta;
type Story = StoryObj<typeof ImageButton>;

export const Circle: Story = {
  args: {
    radius: 'circle',
    src: logo.src,
    width: 100,
    height: 100,
  },
};

export const Rounded: Story = {
  args: {
    radius: 'md',
    src: logo.src,
    width: 100,
    height: 100,
  },
};

export const RoundedSmall: Story = {
  args: {
    radius: 'sm',
    src: logo.src,
    width: 100,
    height: 100,
  },
};
