import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Modal } from "./Modal";
import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '01_app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: action("clicked") },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: "Some content for modal window",
  },
};
export const Dark: Story = {
  args: {
    isOpen: true,
    children: "Some content for modal window",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};