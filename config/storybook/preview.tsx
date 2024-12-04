import { StyleDecorator } from '../../src/06_shared/config/storybook/StyleDecorator/StyleDecorator';
import type { Preview } from '@storybook/react';
import '../../src/01_app/styles/index.scss';
import { ThemeDecorator } from '../../src/06_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '01_app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/06_shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator, StyleDecorator, ThemeDecorator(Theme.LIGHT)],
};

export default preview;
