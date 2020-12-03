/** DAY 2 **/

const day2 = function (input: string[]) {
  let validPasswords = 0;

  for (let line of input) {
    let splitLine = line.split(':');

    let min = Number.parseInt(splitLine[0].split(' ')[0].split('-')[0]);
    let max = Number.parseInt(splitLine[0].split(' ')[0].split('-')[1]);
    let letter = splitLine[0].split(' ')[1].trim();
    let password = splitLine[1].trim();

    let charCount = 0;
    for (let c of password) {
      if (c === letter) {
        charCount++;
      }
    }

    if (charCount >= min && charCount <= max)
      validPasswords++;
  }

  return validPasswords;
}

const day2_2 = function (input: string[]) {
  let validPasswords = 0;

  for (let line of input) {
    let splitLine = line.split(':');

    let pos1 = Number.parseInt(splitLine[0].split(' ')[0].split('-')[0]);
    let pos2 = Number.parseInt(splitLine[0].split(' ')[0].split('-')[1]);
    let letter = splitLine[0].split(' ')[1].trim();
    let password = splitLine[1].trim();

    if (password[pos1 - 1] === letter || password[pos2 - 1] === letter) {
      if (!(password[pos1 - 1] === letter && password[pos2 - 1] === letter)) {
        validPasswords++;
      }
    }
  }

  return validPasswords;
}

module.exports = { day2, day2_2 };
