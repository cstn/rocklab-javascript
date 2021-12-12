const config = require('./eslint-config-react');

describe('eslint-config-react', () => {
  it('should have react rules', () => {
    expect(config.extends).toEqual(expect.arrayContaining([
      './lib/rules/possible-errors.js',
      './lib/rules/best-practises.js',
      './lib/rules/stylistic-issues.js',
      './lib/rules/es6.js',
      './lib/rules/react.js',
      './lib/rules/hooks.js',
      './lib/rules/a11y.js',
      './lib/rules/testing-library.js',
      './lib/rules/testcafe.js',
    ]));
  });
});
