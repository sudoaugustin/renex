/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  roots: ['tests'],
  testMatch: ['**/?(*.)+(test).+(ts|tsx)'],
  transform: { '^.+\\.tsx$': 'esbuild-jest' },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.globals.js'],
};
