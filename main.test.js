const MFR = require('./main');


const findlist1 = 'hello, goodbye';
const replacelist1 = 'lorem, find';
const text =
	'Lorem ipsum dolor hello amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit goodbye cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non goodbye, sunt in culpa qui officia hello mollit anim id est laborum.';

describe("Configuration Testing", () => {
  const testProp = {};
  it("Sums up two plus two", () => {
    expect(2 + 2).toBe(4);
  });

  describe("Returns an error if find_list is incorrect", () => {
    //not a string
    testProp.find_list = 345;
    it('Prooduced an error if find list is not a string', () => {
      expect(() => {
        MFR({}, testProp.find_list, {});
      }).toThrow();
    });
  });


});