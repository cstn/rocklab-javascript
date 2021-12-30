const config = require('./eslint-config-react');

describe('eslint-config-react', () => {
  it('should have react rules', () => {
    expect(config.extends).toEqual(expect.arrayContaining([
      '@rocklab/eslint-config-javascript',
      './lib/rules/stylistic-issues.js',
    ]));
  });
});
