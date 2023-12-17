import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

export const Featured: Story = {
  args: {
    title: "Title Card",
    content: "This is description place.",
    featured: true,
  },
};

export const ImageCard: Story = {
  args: {
    title: "Title",
    content: "description.",
    imageUrl: "data:image/jpeg;base64,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",
  },
};
