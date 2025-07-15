import baseConfig from '../../packages/jest-config/jest.config.base.mjs';
export default {
  ...baseConfig,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
