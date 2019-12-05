const { passwordCracker, checkSingleAdjacency } = require('./index.js');

/** PART 1 --------------------------------------------*/
// test('should return number of possible passwords', () => {
//   expect(passwordCracker('125730-579381')).toEqual(2081);
// });

/** PART 2 --------------------------------------------*/
// test('should return number of possible passwords without repeated adjacency', () => {
//   expect(passwordCracker('125730-579381')).toEqual(0);
// });

test('test adjacency - all doubles', () => {
  expect(checkSingleAdjacency(112233)).toBeTruthy();
});

test('test adjacency - no doubles', () => {
  expect(checkSingleAdjacency(123444)).toBeFalsy();
});

test('test adjacency - one double', () => {
  expect(checkSingleAdjacency(111122)).toBeTruthy();
});
