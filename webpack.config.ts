import {rules, plugins, constants, resolvePath} from './config/webpack';
import {WebpackAppConfig} from './config/webpack/types';

const config = ({WEBPACK_BUILD, WEBPACK_BUNDLE, production}): WebpackAppConfig => {
  const isBuilding = !!WEBPACK_BUILD || !!WEBPACK_BUNDLE;
  const isProdOrDev = !!production ? 'production' : 'development';
  return {
    entry: resolvePath('src', 'index.tsx'),
    ...(isBuilding ? {} : {devtool: 'eval-source-map'}),
    mode: isProdOrDev,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss', '.css', '.sass', '.json', '.svg'],
      plugins: [plugins.ts],
    },
    output: {
      publicPath: '/',
      path: resolvePath('build'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[id].[contenthash].js',
    },
    module: {
      rules: [rules.ts, rules.cssModule(isBuilding), rules.css(isBuilding), rules.fonts, rules.images],
    },
    plugins: [
      plugins.html,
      plugins.css(isBuilding),
      plugins.env(constants.envFileExt[isProdOrDev]),
      plugins.fork,
      plugins.hotReload,
    ],
    optimization: {
      emitOnErrors: true,
      splitChunks: {
        chunks: 'all',
      },
      minimize: true,
      minimizer: [plugins.terser],
    },
    performance: {
      hints: false,
    },
    devServer: {
      port: 3000,
      host: 'localhost',
      open: true,
      headers: {'Access-Control-Allow-Origin': '*'},
      static: {
        directory: resolvePath('public'),
      },
      historyApiFallback: true,
    },
  };
};

export default config;
