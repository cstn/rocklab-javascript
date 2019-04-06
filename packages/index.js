module.exports = {
  extends: [
    'eslint-config-airbnb-base'
  ],
  rules: {
    "arrow-parens": 0,
    "arrow-spacing": "error",
    "arrow-body-style": [ 2, "as-needed" ],
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "consistent-return": "error",
    "default-case": "error",
    "eqeqeq": "warn",
    "func-call-spacing": ["error", "never"],
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "new-parens": "error",
    "newline-before-return": "warn",
    "no-console": 1,
    "no-var": "error",
    "no-whitespace-before-property": "error",
    "quotes": ["error", "single", { "avoidEscape": true }],
    "prefer-const": "error",
    "prefer-template": "error",
    "radix": ["warn", "always"],
  },
};
