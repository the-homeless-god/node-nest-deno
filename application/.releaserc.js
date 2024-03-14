module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: [
          'packages/node/dist/*.{tgz,zip}',
          'packages/nest/dist/*.{tgz,zip}',
          'packages/deno/dist/*.{tgz,zip}',
          'packages/common/dist/*.{tgz,zip}',
        ],
        npmPublish: false,
        tarballDir: 'dist',
        registryUrl: 'https://npm.pkg.github.com',
      },
    ],
  ],
};
