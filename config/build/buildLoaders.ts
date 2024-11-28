import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  // const svgLoader = {
  //   test: /\.svg$/i,
  //   issuer: /\.[jt]sx?$/,
  //   use: ['@svgr/webpack'],
  // };
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  // const babelLoader = {
  //   test: /\.(js|jsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: "babel-loader",
  //     options: {
  //       presets: [
  //         '@babel/preset-env',
  //         '@babel/preset-react',
  //       ]
  //     }
  //   }
  // }
  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      },
    },
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
            exportLocalsConvention: 'camelCase',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  //Если не использовать typeScript - нужен babel-loader
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };
  const typescriptLoader = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
