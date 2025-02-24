import type { Meta, StoryObj } from '@storybook/react';

import { AvatarList } from './AvatarList';

const meta = {
  title: 'Design System/AvatarList',
  component: AvatarList,
  /*  tags: ['autodocs'], */
} satisfies Meta<typeof AvatarList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
  args: {
    users: [
      {
        id: '1',
        name: 'Dominic Nguyen',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
      },
      {
        id: '2',
        name: 'Tom Coleman',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
      },
    ],
  },
};
