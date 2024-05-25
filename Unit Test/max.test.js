import { max } from './max.js';

test('Should return the greater of two arguments', () => {
  expect(max(1, 3)).toBe(3);
  expect(max(3, 1)).toBe(3);
  expect(max(2, 2)).toBe(2);
});
