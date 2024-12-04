// import { buildCssLoader } from '../build/loaders/buildCssLoader';
// // import { BuildPaths } from '../build/types/config';
// import path from 'path';
// // import type { Configuration } from 'webpack';

// // export default ({ config }: { config: Configuration }) => {

// //   const paths: BuildPaths = {
// //     build: '',
// //     html: '',
// //     entry: '',
// //     src: path.resolve(__dirname, '..', '..', 'src'),
// //   };
// //   config.resolve.modules?.push(paths.src);
// //   config.resolve.extensions?.push('.ts', '.tsx');
// //   config.module.rules?.push(buildCssLoader(true));

// //   return config;
// // };

// import type { StorybookConfig } from '@storybook/react-webpack5'; // для webpack5

// const config: StorybookConfig = {
//   framework: '@storybook/react-webpack5', // указываем фреймворк
//   stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'], // указываем расположение сторис
//   addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'], // добавляем необходимые аддоны
//   webpackFinal: (config) => {
//     const paths: BuildPaths = {
//       build: '',
//       html: '',
//       entry: '',
//       src: path.resolve(__dirname, '..', '..', 'src'),
//     };
//     // Переопределение настроек Webpack
//     config.resolve.modules = [...config.resolve.modules, paths.src];
//     config.resolve?.extensions?.push('.ts', '.tsx');
//     config.module?.rules?.push(buildCssLoader(true));
//     return config;
//   },
// };

// export default config;
