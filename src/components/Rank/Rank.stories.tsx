import type { Meta, StoryObj } from "@storybook/react";

import Rank from "./Rank";

const ranks = ["A", "B", "C", "D", "E", "F", "G", "S", "SS"] as const;
type RankType = (typeof ranks)[number];

const meta = {
  title: "Components/Rank",
  component: Rank,
  tags: ["autodocs"],
  argTypes: {
    rank: {
      control: { type: "select" },
      options: ranks,
      defaultValue: "A",
    },
  },
  args: {},
} satisfies Meta<typeof Rank>;

export default meta;
type Story = StoryObj<typeof meta>;

const make = (rank: RankType): Story => ({
  args: { rank },
  render: (args) => <Rank {...args} />,
});
export const A = make("A");
export const B = make("B");
export const C = make("C");
export const D = make("D");
export const E = make("E");
export const F = make("F");
export const G = make("G");
export const S = make("S");
export const SS = make("SS");
