const regexFromExtensions = require('../src');

describe('simple', () => {
  it('should return regex', () => {
    expect(String(regexFromExtensions(['js', 'jsx']))).toBe('/.(js|jsx)$/');
  });
});
