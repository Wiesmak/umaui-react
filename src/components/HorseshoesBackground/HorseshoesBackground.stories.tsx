import type { Meta, StoryObj } from '@storybook/react';
import HorseshoesBackground from './HorseshoesBackground';

const meta: Meta<typeof HorseshoesBackground> = {
  title: 'Components/HorseshoesBackground',
  component: HorseshoesBackground,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HorseshoesBackground>;

export const Default: Story = {
  args: {
    config: {
      count: 35,
      min: 20,
      max: 70,
      opacity: 0.6,
    },
  },
  render: (args) => (
    <HorseshoesBackground {...args} >
      <div style={{ width: 500, height: 500 }} />
    </HorseshoesBackground>
  ),
};
