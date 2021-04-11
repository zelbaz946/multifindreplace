const MFR = require('./main');
const {testObj1, testObj2} = require('./testdata.js')

describe('Configuration Testing', () => {
  it('changes an exact match with no attached punctuation', () => {
    const run1 = MFR({}, testObj1, {})
    const input = run1.textArr
    const expected = []
    run1.finds.map((e) => {expected.push(e.trim())})
    expect(input).not.toEqual(expect.arrayContaining(expected))
    console.log(run1.result)
  })

  it('changes an exact match with attached punctuation', () => {
    const run2 = MFR({}, testObj2, {})
    const input = run2.textArr
    const expected = []
    run2.finds.map((e) => {expected.push(e.trim())})
    expect(input).not.toEqual(expect.arrayContaining(expected))
    console.log(run2.result)
  })


});
