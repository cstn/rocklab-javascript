module.exports = {
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'func-call-spacing': ['error', 'never'],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'max-len': ['error', { code: 120 }],
    'new-parens': 'error',
    'no-whitespace-before-property': 'error',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'var', next: 'return' }],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
