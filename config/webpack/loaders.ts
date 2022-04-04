import {RuleSetRule} from 'webpack';
import resolvePath from './path';

export const ts: RuleSetRule = {
  loader: 'ts-loader',
  options: {
    transpileOnly: true,
  },
};

export const style: RuleSetRule = {
  loader: 'style-loader',
};

export const cssModule = (isBuilding: boolean): RuleSetRule => ({
  loader: 'css-loader',
  options: {
    sourceMap: !isBuilding,
    module: true,
  },
});

export const css = (isBuilding: boolean): RuleSetRule => ({
  loader: 'css-loader',
  options: {
    sourceMap: !isBuilding,
  },
});

export const sass = (isBuilding: boolean): RuleSetRule => ({
  loader: 'sass-loader',
  options: {
    sourceMap: !isBuilding,
    sassOptions: {
      includePaths: [resolvePath('src', 'styles')],
    },
  },
});

export const resolveUrl: RuleSetRule = {
  loader: 'resolve-url-loader',
};

export const file = (path: string): RuleSetRule => ({
  loader: 'file-loader',
  options: {
    name: '[name]_[hash].[ext]',
    outputPath: path,
  },
});

export const image: RuleSetRule = {
  loader: 'image-webpack-loader',
  options: {
    mozjpeg: {
      progressive: true,
      quality: 65,
    },
    optipng: {
      enabled: true,
    },
    pngquant: {
      quality: [0.65, 0.9],
      speed: 4,
    },
    gifsicle: {
      enabled: false,
      interlaced: false,
    },
  },
};
