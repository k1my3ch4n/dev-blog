import { Meta, StoryObj } from '@storybook/react';
import Bold from './Bold';

const meta: Meta<typeof Bold> = {
  title: 'Typography/Bold',
  component: Bold,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '텍스트 혹은 다른 컴포넌트를 강조할 때 사용됩니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Bold>;

export const Default: Story = {
  args: {
    children: 'Bold Example 예시',
  },
};
