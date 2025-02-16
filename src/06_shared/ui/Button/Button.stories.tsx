// import type { Meta, StoryObj } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { Button, ButtonSize, ButtonTheme } from './Button';
// import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from '01_app/providers/ThemeProvider';

// const meta: Meta<typeof Button> = {
//   title: 'shared/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   args: { onClick: action('clicked') },
// };

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Clear: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.CLEAR,
//   },
// };
// export const ClearInverted: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.CLEAR_INVERTED,
//   },
// };
// export const ClearDark: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.CLEAR,
//   },
//   decorators: [ThemeDecorator(Theme.DARK)],
// };

// export const Outline: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//   },
// };
// export const OutlineSizeL: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     size: ButtonSize.L,
//   },
// };
// export const OutlineSizeXL: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     size: ButtonSize.XL,
//   },
// };
// export const OutlineDark: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//   },
//   decorators: [ThemeDecorator(Theme.DARK)],
// };

// export const BackgroundTheme: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.BACKGROUND,
//   },
// };
// export const BackgroundInverted: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//   },
// };

// export const Square: Story = {
//   args: {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//   },
// };
// export const SquareSizeL: Story = {
//   args: {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.L,
//   },
// };
// export const SquareSizeXL: Story = {
//   args: {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.XL,
//   },
// };

// export const Disabled: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     disabled: true,
//   },
// };
