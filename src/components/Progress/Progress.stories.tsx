import type { Meta, StoryObj } from "@storybook/react";
import Progress from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    min: 0,
    max: 40,
    value: 35,
    showProgressText: false,
  },
  render: (args) => <Progress {...args} />,
};
