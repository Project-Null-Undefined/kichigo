import type { Meta, StoryObj } from '@storybook/react';
import CardFrame from '.';

const meta: Meta<typeof CardFrame> = {
  component: CardFrame,
};

export default meta;
type Story = StoryObj<typeof CardFrame>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1>CardFrame</h1>
        <p>box-shadow とかを統一するためのエレメント</p>
      </div>
    ),
  },
};
