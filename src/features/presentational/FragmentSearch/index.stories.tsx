import type { Meta, StoryObj } from '@storybook/react';
import FragmentSearchPresentational from '.';

const meta: Meta<typeof FragmentSearchPresentational> = {
  component: FragmentSearchPresentational,
};

export default meta;
type Story = StoryObj<typeof FragmentSearchPresentational>;

export const Default: Story = {
  args: {},
};
