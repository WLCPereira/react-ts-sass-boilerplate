import {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as loaders from './loaders';

export const ts: RuleSetRule = {
  test: /\.tsx?$/,
  use: [loaders.ts],
  exclude: [/node_modules/, /build/],
};

export const cssModule = (isBuilding: boolean): RuleSetRule => ({
  test: /\.module.s(a|c)ss$/,
  use: [loaders.cssModule(isBuilding), loaders.sass(isBuilding)],
});

export const css = (isBuilding: boolean): RuleSetRule => ({
  test: /\.(s(a|c)ss)$/,
  exclude: /\.module.s(a|c)ss$/,
  use: isBuilding
    ? [loaders.style, loaders.css(isBuilding), loaders.sass(isBuilding), loaders.resolveUrl]
    : [MiniCssExtractPlugin.loader, loaders.css(isBuilding), loaders.sass(isBuilding)],
});

export const fonts: RuleSetRule = {
  test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  use: [loaders.file('fonts/')],
};

export const images: RuleSetRule = {
  test: /\.(gif|png|svg)$/i,
  use: [loaders.file('images/'), loaders.image],
};
