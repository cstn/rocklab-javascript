const Configuration = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'footer-max-length': [2, 'always', 72],
    'subject-case': [2, 'always', 'sentence-case'],
    'type-enum': [2, 'always', ['chore', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
  },
};

module.exports = Configuration;
