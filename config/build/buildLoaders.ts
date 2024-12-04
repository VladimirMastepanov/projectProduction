import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          '@babel/preset-react',
        ],
      },
    },
  };

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
        transpileOnly: isDev,
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [cssLoader, fileLoader, svgLoader, babelLoader, typescriptLoader];
};
