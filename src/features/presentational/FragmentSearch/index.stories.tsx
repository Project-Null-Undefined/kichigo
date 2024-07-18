import type { Meta, StoryObj } from '@storybook/react';
import FragmentSearch from '.';

const meta: Meta<typeof FragmentSearch> = {
  component: FragmentSearch,
};

export default meta;
type Story = StoryObj<typeof FragmentSearch>;

export const Default: Story = {
  args: {
    onClick: (input: string) => {
      // eslint-disable-next-line no-console
      console.log(input);
    },
  },
};
