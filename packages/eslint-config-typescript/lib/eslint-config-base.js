module.exports = {
  extends: [
    '@rocklab/eslint-config-javascript/base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
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
