module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-no-important': true,
    'max-line-length': [100, { ignore: ['non-comments'] }],
    'max-nesting-depth': 3,
  },
};
