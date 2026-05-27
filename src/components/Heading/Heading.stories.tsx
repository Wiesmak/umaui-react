import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

const defaultTemplate = `
  <Heading>
    <h3>Graphics</h3>
  </Heading>
`.trim();

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: defaultTemplate,
      },
    },
  },
  render: () => (
    <Heading>
      <h3>Graphics</h3>
    </Heading>
  ),
};
