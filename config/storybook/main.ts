import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@newhighsco/storybook-addon-svgr',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.resolve = config.resolve || {};
    config.resolve.modules = config.resolve.modules || [];
    // Переопределение настроек Webpack
    config.resolve.modules = [...config.resolve.modules, paths.src];
    config.resolve.extensions?.push('.ts', '.tsx');
    config.module.rules = config.module.rules.map((rule) => {
      if (rule?.['test']?.test('.svg')) {
        rule!['exclude'] = /\.svg$/;
      }

      return rule;
    });

    config.module?.rules?.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push(buildCssLoader(true));
    return config;
  },
};
export default config;
