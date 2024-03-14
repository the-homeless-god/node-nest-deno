import {
  config as commonConfig,
  getEnvironmentConfiguration,
} from '@the-homeless-god/node-nest-common';

const environmentConfig = getEnvironmentConfiguration();

export const config = {
  version: commonConfig.api.version,
  prefix: commonConfig.api.prefix,
  environment: process.env.NODE_ENV || 'development',
  ...environmentConfig,
};
