export default {
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/**/*.(test|spec).[jt]s?(x)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }]
  }
};
