import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const cssLoaderWithModules = (isDev: boolean) => {
  return {
    loader: 'css-loader',
    options: {
      modules: {
        namedExport: false,
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
        exportLocalsConvention: 'camelCase',
      },
    },
  };
};

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

      cssLoaderWithModules(isDev),

      // Compiles Sass to CSS
      // 'sass-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true, // Включить source maps для Sass
        },
      },
    ],
    // exclude: /node_modules(?!\/@amplio)/,
    exclude: /node_modules/,
  };
}
