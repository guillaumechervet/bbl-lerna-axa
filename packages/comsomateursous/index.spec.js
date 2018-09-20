const lib = require('./index');

test('adds 1 + 2 to equal 3', () => {
  const result = lib.Consomer(20);
  expect(result).toBe(40);
});
