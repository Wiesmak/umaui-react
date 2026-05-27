import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Skills", value: "skills" },
      { label: "Inspiration", value: "inspiration" },
      { label: "Career Info", value: "career-info" },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState(args.items?.[0]?.value ?? "");
    return <Tabs items={args.items} value={value} onChange={setValue} />;
  },
};
