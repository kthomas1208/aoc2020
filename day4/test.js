const { passwordCracker } = require('./index.js');

/** PART 1 --------------------------------------------*/
test('should return number of possible passwords', () => {
  expect(passwordCracker('125730-579381')).toEqual(10);
});

/** PART 2 --------------------------------------------*/
