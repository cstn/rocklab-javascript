const config = require('./stylelint-config');

describe('stylelint-config', () => {
  it('should have stylerules', () => {
    expect(config.extends).toEqual(expect.arrayContaining([
      './lib/rules/limit-language-features'
    ]));
  });
});
