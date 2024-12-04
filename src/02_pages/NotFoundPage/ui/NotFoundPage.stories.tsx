import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { NotFoundPage } from "./NotFoundPage";
import { ThemeDecorator } from "06_shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "01_app/providers/ThemeProvider";

const meta: Meta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: action("clicked") },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
