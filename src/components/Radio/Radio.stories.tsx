import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: "Standard",
  },
  render: (args) => {
    const [value, setValue] = useState<string | number | null>("standard");

    return (
      <>
        <Radio
          {...args}
          value="standard"
          modelValue={value}
          onChange={setValue}
        >
          Standard
        </Radio>
        <Radio
          {...args}
          value="basic"
          modelValue={value}
          onChange={setValue}
        >
          Basic
        </Radio>
      </>
    );
  },
};
