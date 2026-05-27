import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    label: "Cancel",
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    label: "Next",
  },
};

export const medium: Story = {
  args: {
    label: "Exchange",
    primary: true,
    medium: true,
  },
};

export const disabled: Story = {
  args: {
    label: "Exchange",
    primary: true,
    medium: true,
    disabled: true,
  },
};

export const small: Story = {
  args: {
    label: "Details",
    small: true,
  },
};

const withIconTemplate = `
  <Button icon={<div style={{ fontSize: '3.75rem' }}>🥕</div>}>
    Purchase Carats
  </Button>
`.trim();

export const withIcon: Story = {
  args: {
    label: "Purchase Carats",
  },
  parameters: {
    docs: {
      source: {
        code: withIconTemplate,
      },
    },
  },
  render: (args) => (
    <Button icon={<div style={{ fontSize: "3.75rem" }}>🥕</div>}>
      {args.label}
    </Button>
  ),
};
