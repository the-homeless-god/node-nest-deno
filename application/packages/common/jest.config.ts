module.exports = {
  coverageThreshold: {
    global: {
      lines: 10,
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'lib',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
