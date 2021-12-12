const config = require('./eslint-config-base');

describe('eslint-config-base', () => {
  it('should have base rules', () => {
    expect(config.extends).toEqual(expect.arrayContaining([
      './lib/rules/possible-errors.js',
      './lib/rules/best-practises.js',
      './lib/rules/stylistic-issues.js',
      './lib/rules/es6.js',
    ]));
  });
});
