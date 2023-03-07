const revString = require('./reverseString.js');
test('properly reverse of the string', () => {
  expect(revString('olleh')).toBe('hello');
});
