module.exports = {
  cacheDirectory: '.jest-cache',
  collectCoverageFrom: ['src/lib.ts'],
  coverageReporters: ['html', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  displayName: 'wordscapes-helper',
  reporters: ['jest-standard-reporter'],
  roots: ['<rootDir>/src', '<rootDir>/test'],
  transform: {
    '\\.[t|j]sx?$': 'babel-jest',
  },
};
