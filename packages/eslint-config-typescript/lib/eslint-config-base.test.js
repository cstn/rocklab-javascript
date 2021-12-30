const config = require('./eslint-config-base');

describe('eslint-config-base', () => {
  it('should have base rules', () => {
    expect(config.extends).toEqual(expect.arrayContaining([
      '@rocklab/eslint-config-javascript/base',
      './lib/rules/stylistic-issues.js',
    ]));
  });
});
