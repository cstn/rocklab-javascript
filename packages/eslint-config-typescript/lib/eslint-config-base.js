module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@rocklab/eslint-config-javascript/base',
    'eslint-config-airbnb-typescript/base',
    './lib/rules/stylistic-issues.js',
  ],
  rules: {},
  env: {
    amd: true,
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
};
