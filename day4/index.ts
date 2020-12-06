/** DAY 4 **/

const VALID_EYE_COLOR = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);
const VALID_FIELDS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; //cid optional

const validateBirthYear = function (value: string) {
  const year = Number.parseInt(value);
  if (1920 <= year && year <= 2002) return true;
  return false;
}

const validateIssueYear = function (value: string) {
  const year = Number.parseInt(value);
  if (2010 <= year && year <= 2020) return true;
  return false;
}

const validateExpirationYear = function (value: string) {
  const year = Number.parseInt(value);
  if (2020 <= year && year <= 2030) return true;
  return false;
}

const validateHeight = function (value: string) {
  const metric = value.substring(value.length - 2);
  let height = 0;
  if (metric === 'in') {
    height = Number.parseInt(value.substring(0, value.length - 2));
    if (59 <= height && height <= 76) return true;
  } else if (metric === 'cm') {
    height = Number.parseInt(value.substring(0, value.length - 2));
    if (150 <= height && height <= 193) return true;
  } else {
    return false;
  }

  return false;
}

const validateHairColor = function (value: string) {
  return /^#[0-9A-F]{6}$/i.test(value)
}

const validateEyeColor = function (value: string) {
  return VALID_EYE_COLOR.has(value);
}

const validatePassportId = function (value: string) {
  if (value.length !== 9) return false;
  if (Number.parseInt(value)) return true;
}

const validator = new Map([
  ['byr', validateBirthYear],
  ['iyr', validateIssueYear],
  ['eyr', validateExpirationYear],
  ['hgt', validateHeight],
  ['hcl', validateHairColor],
  ['ecl', validateEyeColor],
  ['pid', validatePassportId],
  ['cid', () => true],
]);

const day4 = function (input: string[]) {
  let validPassports = 0;
  for (let line of input) {

    let fields = line.replace(/\n/g, ' ').split(' ');
    let passportFields = new Set<string>();

    for (let field of fields) {
      passportFields.add(field.split(':')[0]);
    }

    if (VALID_FIELDS.every(x => passportFields.has(x)))
      validPassports++;
  }

  return validPassports;
}

const day4_2 = function (input: string[]) {
  let validPassports = 0;
  for (let line of input) {

    let fieldMap = new Map();
    let fields = line.replace(/\n/g, ' ').split(' ');

    for (let field of fields) {
      fieldMap.set(field.split(':')[0], field.split(':')[1]);
    }

    if (VALID_FIELDS.every(x => fieldMap.has(x))) {
      let valid = true;
      for (let [key, value] of fieldMap) {
        if (!validator.get(key)(value))
          valid = false;
      }

      if (valid)
        validPassports++;
    }
  }

  return validPassports;
}

module.exports = { day4, day4_2 };
