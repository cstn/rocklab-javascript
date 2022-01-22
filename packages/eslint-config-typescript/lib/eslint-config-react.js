module.exports = {
  extends: [
    'eslint-config-airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@rocklab/eslint-config-javascript',
    'eslint-config-airbnb-typescript',
    './lib/rules/stylistic-issues.js',
  ],
  rules: {
  },
  env: {
    amd: true,
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '16',
    },
  },
};
