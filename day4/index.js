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
function passwordCracker(input) {
  input = input.split('-');
  const lowerLimit = Number(input[0]);
  const upperLimit = Number(input[1]);
  let possiblePasswords = 0;

  for (let i = lowerLimit; i <= upperLimit; i++) {
    if (isNeverDecreasing(i) && checkAdjacency(i)) possiblePasswords++;
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

function checkAdjacency(number) {
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

// dupes: 2
// count: 1
// pass: true
function checkSingleAdjacency(number) {
  let splitNums = number
    .toString()
    .split('')
    .map(Number);

  let pass = false;
  let duplicates = new Set();
  let count = 0;
  for (let i = 0; i < splitNums.length; i++) {
    let current = splitNums[i];
    if (duplicates.has(current)) {
      if (count < 2) {
        count++;
        pass = true;
      } else {
        //pass = ;
      }
      false;
    } else {
      duplicates.clear();
      duplicates.add(current);
      count = 1;
    }
  }
  return pass;
}

module.exports = { passwordCracker, checkSingleAdjacency };
