import { type Meta, type StoryObj } from '@storybook/react';

import { ThemeSwitch } from '../src';

const meta = {
  args: {
    style: {
      height: 32,
      width: 32,
    },
  },
  component: ThemeSwitch,
  parameters: {
    layout: 'centered',
  },
  title: 'ThemeSwitch',
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = {} satisfies Story;
