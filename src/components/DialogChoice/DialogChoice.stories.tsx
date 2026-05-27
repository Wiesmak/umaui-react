import type { Meta, StoryObj } from "@storybook/react";

import DialogChoice from "./DialogChoice";

const meta = {
  title: "Components/DialogChoice",
  component: DialogChoice,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DialogChoice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    color: "green",
    label: "Let's go shopping.",
  },
};
export const Yellow: Story = {
  args: {
    color: "yellow",
    label: "Let's go to the movies.",
  },
};
export const Pink: Story = {
  args: {
    color: "pink",
    label: "Let's go to the park.",
  },
};
