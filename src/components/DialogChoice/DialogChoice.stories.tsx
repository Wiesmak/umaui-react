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

export const greenWithImage: Story = {
  args: {
    color: "green",
    label: "Agnes Tachyon",
    image: (
        <img src="https://static.wikia.nocookie.net/omniversal-battlefield/images/e/e6/Agnes_Tachyon.webp/revision/latest/scale-to-width-down/600?cb=20260204211504" alt="Agnes Tachyon" />
    ),
  },
}

export const yellowWithImage: Story = {
  args: {
    color: "yellow",
    label: "Agnes Tachyon",
    image: (
        <img src="https://static.wikia.nocookie.net/omniversal-battlefield/images/e/e6/Agnes_Tachyon.webp/revision/latest/scale-to-width-down/600?cb=20260204211504" alt="Agnes Tachyon" />
    ),
  },
}

export const pinkWithImage: Story = {
  args: {
    color: "pink",
    label: "Agnes Tachyon",
    image: (
        <img src="https://static.wikia.nocookie.net/omniversal-battlefield/images/e/e6/Agnes_Tachyon.webp/revision/latest/scale-to-width-down/600?cb=20260204211504" alt="Agnes Tachyon" />
    ),
  },
}