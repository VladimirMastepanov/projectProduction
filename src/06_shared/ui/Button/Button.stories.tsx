import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '01_app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: action('clicked') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};
export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};
export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
