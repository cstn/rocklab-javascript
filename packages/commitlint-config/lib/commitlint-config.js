const Configuration = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'footer-max-length': [2, 'always', 72],
  },
};

module.exports = Configuration;
