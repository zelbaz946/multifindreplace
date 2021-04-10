const MFR = require('./main');

describe('Configuration Testing', () => {
  const testProp = {};
  it('Sums up two plus two', () => {
    expect(2 + 2).toBe(4);
  });

  describe('Returns an error if find_list is incorrect', () => {
    // not a string
    testProp.find_list = 345;
    it('Prooduced an error if find list is not a string', () => {
      expect(() => {
        MFR({}, testProp.find_list, {});
      }).toThrow();
    });
  });
});
