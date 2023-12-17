import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/Text/Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children:
      "lorum ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
};
