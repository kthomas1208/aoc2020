const { passwordCracker, checkSingleDuplicate } = require('./index.js');

/** PART 1 --------------------------------------------*/
test('should return number of possible passwords', () => {
  expect(passwordCracker('125730-579381', false)).toEqual(2081);
});

/** PART 2 --------------------------------------------*/
test('should return number of possible passwords without repeated duplicates', () => {
  expect(passwordCracker('125730-579381', true)).toEqual(1411);
});

test('test adjacency - all doubles', () => {
  expect(checkSingleDuplicate(112233)).toBeTruthy();
});

test('test adjacency - no doubles', () => {
  expect(checkSingleDuplicate(123444)).toBeFalsy();
});

test('test adjacency - double in the middle', () => {
  expect(checkSingleDuplicate(123345)).toBeTruthy();
});

test('test adjacency - two doubles', () => {
  expect(checkSingleDuplicate(123344)).toBeTruthy();
});

test('test adjacency - one double', () => {
  expect(checkSingleDuplicate(111122)).toBeTruthy();
});
