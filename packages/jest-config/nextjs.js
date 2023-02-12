/** @type {import('jest').Config} */
module.exports = {
  ...require('./common'),
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '@testing-library/react',
    '@testing-library/jest-dom',
    '@testing-library/jest-dom/extend-expect',
  ],
  collectCoverageFrom: [
    '**/src/**/*.{js,ts,jsx,tsx}',
    '!**/src/**/*.stories.{js,ts,jsx,tsx}',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/pages'],
  coverageThreshold: null,
}
