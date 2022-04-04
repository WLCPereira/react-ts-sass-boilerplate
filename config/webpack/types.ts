import { Configuration as WebpackConfig } from 'webpack';
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';


type Configuration = WebpackConfig & WebpackDevServerConfig;

export type WebpackAppConfig = Configuration

