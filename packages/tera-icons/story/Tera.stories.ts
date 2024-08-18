import { type Meta, type StoryObj } from '@storybook/react';

import { Tera } from '../src';

const meta = {
  component: Tera,
  parameters: {
    layout: 'centered',
  },
  title: 'Tera',
} satisfies Meta<typeof Tera>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = {} satisfies Story;
