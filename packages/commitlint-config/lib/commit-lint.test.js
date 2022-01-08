const config = require('./commitlint-config');

describe('commitlint-config', () => {
  it('should extend base config', () => {
    expect(config.extends).toEqual(expect.arrayContaining([
      '@commitlint/config-conventional',
    ]));
  });
})
