const testObj1 = {
  find_list: 'hello, hello1, goodbye, goodbye1',
  replace_list: 'response, response1, response2, response3',
  text: 'Lorem ipsum dolor sit amet, hello hello1 elit, sed do goodbye goodbye1 incididunt ut labore et dolore magna aliqua.'
}

const testObj2 = {
  find_list: 'hello, hello1, goodbye, goodbye1',
  replace_list: 'response, response1, response2, response3',
  text: 'Lorem ipsum dolor sit amet, hello, hello1, elit, sed do $"goodbye, goodbye1!" incididunt ut labore et dolore magna aliqua.'
}

module.exports = {
  testObj1,
  testObj2
}