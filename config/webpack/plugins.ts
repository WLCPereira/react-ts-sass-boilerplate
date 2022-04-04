import {HotModuleReplacementPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import DotEnv from 'dotenv-webpack';
import resolvePath from './path';

export const html = new HtmlWebpackPlugin({
  // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
  template: resolvePath('public', 'index.html'),
});

export const css = (isBuilding: boolean) =>
  new MiniCssExtractPlugin({
    filename: !isBuilding ? '[name].css' : '[name].[hash].css',
    chunkFilename: !isBuilding ? '[id].css' : '[id].[hash].css',
  });

export const fork = new ForkTsCheckerWebpackPlugin();

export const terser = new TerserPlugin({
  extractComments: false,
  parallel: true,
  terserOptions: {},
});

export const ts = new TsconfigPathsPlugin({
  configFile: resolvePath('tsconfig.json'),
});

export const hotReload = new HotModuleReplacementPlugin();

export const env = (envExt: string) => new DotEnv({
  path: resolvePath(`.env.${envExt}`),
  safe: true,
  allowEmptyValues: true,
});
