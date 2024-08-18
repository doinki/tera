import { type Meta, type StoryObj } from '@storybook/react';

import { Header } from '../src';

const meta = {
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200vh' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Header',
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = {} satisfies Story;
