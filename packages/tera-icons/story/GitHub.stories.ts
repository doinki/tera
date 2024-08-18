import { type Meta, type StoryObj } from '@storybook/react';

import { GitHub } from '../src';

const meta = {
  component: GitHub,
  parameters: {
    layout: 'centered',
  },
  title: 'GitHub',
} satisfies Meta<typeof GitHub>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = {} satisfies Story;
