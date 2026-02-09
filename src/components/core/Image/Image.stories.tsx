import { Image } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const SAMPLE_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";

const meta = {
  title: "Components/Core/Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    src: SAMPLE_IMAGE,
    alt: "Mountain landscape",
    width: 800,
    height: 600,
  },
};

export const Rounded: Story = {
  args: {
    ...Default.args,
    rounded: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    src: SAMPLE_IMAGE,
    alt: "Mountain landscape",
    layout: "fullWidth",
    height: 400,
  },
};

export const Fixed: Story = {
  args: {
    src: SAMPLE_IMAGE,
    alt: "Mountain landscape",
    layout: "fixed",
    width: 300,
    height: 200,
    rounded: "md",
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    rounded: "lg",
  },
};

export const Priority: Story = {
  args: {
    ...Default.args,
    priority: true,
  },
};

export default meta;
