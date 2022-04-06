/* eslint-disable global-require */
describe('config', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should have a config object', () => {
    const config = require('../config').default;
    expect(config).toBeDefined();
  });

  it('should have an example property', () => {
    const config = require('../config').default;
    expect(config.example).toBeDefined();
  });

  it('should have an example property that is a string', () => {
    const config = require('../config').default;
    expect(typeof config.example).toBe('string');
  });

  it('should have an example property set to "default"', () => {
    const config = require('../config').default;
    expect(config.example).toBe('default');
  });

  it('should have an example property set to "test_value"', () => {
    process.env.EXAMPLE = 'test_value';
    const config = require('../config').default;
    expect(config.example).toBe('test_value');
  });
});
