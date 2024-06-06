import { ButtonIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'This is Button',
  },
};

export const Outline: Story = {
  args: {
    children: 'This is Button',
    backgroundColor: 'background',
    color: 'primary',
    outline: 'primary',
  },
};

export const Small: Story = {
  args: {
    children: 'This is Button',
    size: 'sm',
  },
};

export const IconButton: Story = {
  args: {
    children: 'This is Button',
    icon: <ButtonIcon />,
  },
};

export const SmallIconButton: Story = {
  args: {
    children: 'This is Button',
    icon: <ButtonIcon />,
    size: 'sm',
  },
};
