/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  roots: ['src'],
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js)'],
  transform: { '^.+\\.tsx$': 'esbuild-jest' },
  testEnvironment: 'jsdom',
};
