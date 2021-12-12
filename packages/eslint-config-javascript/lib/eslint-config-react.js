module.exports = {
  extends: [
    'eslint-config-airbnb',
    './lib/rules/possible-errors.js',
    './lib/rules/best-practises.js',
    './lib/rules/stylistic-issues.js',
    './lib/rules/es6.js',
    './lib/rules/react.js',
    './lib/rules/hooks.js',
    './lib/rules/a11y.js',
    './lib/rules/testing-library.js',
    './lib/rules/testcafe.js',
  ],
  rules: {
    // add additional rules here
  },
  env: {
    amd: true,
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
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
