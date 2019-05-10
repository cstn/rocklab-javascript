module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'testcafe'],
  extends: [
    'eslint-config-airbnb-base',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testcafe/recommended',
  ],
  rules: {
    'arrow-parens': 0,
    'arrow-spacing': 'error',
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'consistent-return': 'error',
    'default-case': 'error',
    eqeqeq: 'warn',
    'func-call-spacing': ['error', 'never'],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'new-parens': 'error',
    'newline-before-return': 'warn',
    'no-console': 1,
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'prefer-const': 'error',
    'prefer-template': 'error',
    radix: ['warn', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
    'react/button-has-type': ['error'],
    'react/destructuring-assignment': [1, 'always'],
    'react/no-array-index-key': ['error'],
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 1,
    'react/prefer-stateless-function': 2,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-no-bind': 1,
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
        ignoreCase: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
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
