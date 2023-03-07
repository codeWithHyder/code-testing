const strLen = require('./stringLength.js');
test('properly length of  the string', () => {
  expect (strLen('hello')).toBe(5);
  expect(strLen('hell')).toBeGreaterThanOrEqual(1); 
  expect(strLen('greater123')).toBeLessThanOrEqual(10);
});
