/** DAY 1 **/

function day1(input) {
  let sum = 0;

  input.forEach(x => {
    let fuelWeight = 0;
    fuelWeight = getFuel(x);
    sum += fuelWeight;
  });

  return sum;
}

function day1_2(input) {
  let sum = 0;

  input.forEach(x => {
    let fuelWeight = x;
    do {
      fuelWeight = getFuel(fuelWeight);
      sum += fuelWeight > 0 ? fuelWeight : 0;
    } while (fuelWeight > 0);
  });

  return sum;
}

function getFuel(module) {
  return Math.floor(module / 3) - 2;
}

module.exports = { day1, day1_2 };
