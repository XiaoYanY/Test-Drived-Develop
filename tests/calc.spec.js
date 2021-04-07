const sum = require('../src/calc');
test("calc plus", () => {
  expect(sum(1, 2)).toBe(3)
})