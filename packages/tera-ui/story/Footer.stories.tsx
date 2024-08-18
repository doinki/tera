import { type Meta, type StoryObj } from '@storybook/react';

import { Footer } from '../src';

const meta = {
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Footer',
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = {} satisfies Story;
