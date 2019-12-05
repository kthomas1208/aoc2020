/**
 * A few key facts about the password:
 * - It is a six-digit number.
 * - The value is within the range given in your puzzle input.
 * - Two adjacent digits are the same (like 22 in 122345).
 * - Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
 *
 * Other than the range rule, the following are true:
 * - 111111 meets these criteria (double 11, never decreases).
 * - 223450 does not meet these criteria (decreasing pair of digits 50).
 * - 123789 does not meet these criteria (no double).
 * How many different passwords within the range given in your puzzle input meet these criteria?
 *
 * @param {*} input range of numbers for possible password
 */
function passwordCracker(input, isAdvanced) {
  input = input.split('-');
  const lowerLimit = Number(input[0]);
  const upperLimit = Number(input[1]);
  let possiblePasswords = 0;

  for (let i = lowerLimit; i <= upperLimit; i++) {
    if (
      isNeverDecreasing(i) &&
      (isAdvanced ? checkSingleDuplicate(i) : checkDuplicate(i))
    )
      possiblePasswords++;
  }
  return possiblePasswords;
}

function isNeverDecreasing(number) {
  let splitNums = number
    .toString()
    .split('')
    .map(Number);
  for (let i = 0; i < splitNums.length - 1; i++) {
    if (splitNums[i] > splitNums[i + 1]) return false;
  }
  return true;
}

function checkDuplicate(number) {
  let splitNums = number
    .toString()
    .split('')
    .map(Number);
  for (let i = 0; i < splitNums.length - 1; i++) {
    if (splitNums[i] === splitNums[i + 1]) return true;
  }
  return false;
}

//112233
function checkSingleDuplicate(number) {
  let splitNums = number
    .toString()
    .split('')
    .map(Number);

  let count = 0;
  let lo = 0;
  let hi = lo + 1;

  while (hi < splitNums.length) {
    if (splitNums[lo] === splitNums[hi]) {
      count++;
      hi++;
    } else {
      if (count == 1) return true;
      count = 0;
      lo = hi;
      hi++;
    }
  }
  return count === 1;
}

module.exports = { passwordCracker, checkSingleDuplicate };
