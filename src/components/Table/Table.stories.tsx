import type { Meta, StoryObj } from "@storybook/react";

import Table from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const verticalSlotTemplate = `
  <thead>
    <tr>
      <th>🥾 Speed</th>
      <th>🧡 Stamina</th>
      <th>💪 Power</th>
      <th>🔥 Guts</th>
      <th>🎓 Wit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>F</td>
      <td>D</td>
      <td>C</td>
      <td>B</td>
      <td>A</td>
    </tr>
  </tbody>`.trim();

export const Vertical: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<Table orientation="vertical">
  ${verticalSlotTemplate}
</Table>`,
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <thead>
        <tr>
          <th>🥾 Speed</th>
          <th>🧡 Stamina</th>
          <th>💪 Power</th>
          <th>🔥 Guts</th>
          <th>🎓 Wit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>F</td>
          <td>D</td>
          <td>C</td>
          <td>B</td>
          <td>A</td>
        </tr>
      </tbody>
    </Table>
  ),
};

const horizontalTemplate = `
  <Table orientation="horizontal">
    <tbody>
      <tr>
        <th>Track</th>
        <td>Turf A</td>
        <td>Dirt G</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>Distance</th>
        <td>Turf A</td>
        <td>Mile B</td>
        <td>Medium G</td>
        <td>Long G</td>
      </tr>
      <tr>
        <th>Style</th>
        <td>Front A</td>
        <td>Pace A</td>
        <td>Late F</td>
        <td>End G</td>
      </tr>
    </tbody>
  </Table>`.trim();

export const Horizontal: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: horizontalTemplate,
      },
    },
  },
  render: (args) => (
    <Table {...args} orientation="horizontal">
      <tbody>
        <tr>
          <th>Track</th>
          <td>Turf A</td>
          <td>Dirt G</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Distance</th>
          <td>Turf A</td>
          <td>Mile B</td>
          <td>Medium G</td>
          <td>Long G</td>
        </tr>
        <tr>
          <th>Style</th>
          <td>Front A</td>
          <td>Pace A</td>
          <td>Late F</td>
          <td>End G</td>
        </tr>
      </tbody>
    </Table>
  ),
};
