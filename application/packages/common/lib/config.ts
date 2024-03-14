import packageJson from '../package.json';

export const config = {
  version: {
    common: packageJson?.version,
  },
  api: {
    version: 'v1',
    prefix: 'api',
    url: `/api/v1`,
  },
};

export const servers = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:5174',
];

export const getEnvironmentConfiguration = () => {
  return {
    nest: {
      local: {
        host: 'localhost',
        port: 3000,
        protocol: 'http://',
      },
    },

    node: {
      local: {
        host: 'localhost',
        port: 3001,
        protocol: 'http://',
      },
    },

    deno: {
      local: {
        host: 'localhost',
        port: 3002,
        protocol: 'http://',
      },
    },
    isDevelopment: process.env.NODE_ENV === 'development',
    isTest: process.env.NODE_ENV === 'test',
    isLocal: process.env.IS_LOCAL === 'true',
  };
};
