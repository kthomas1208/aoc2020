/** DAY 3 **/

const day3 = function (input: string[]) {
  const lineLength = input[0].length;
  let x = 0;
  let treeCount = 0;

  for (let i = 1; i < input.length; i++) {
    x = (x + 3) % lineLength;

    if (input[i][x] === '#')
      treeCount++;
  }

  return treeCount;
}

const day3_2 = function (input: string[]) {

  let treeCount = 1;
  //Right 1, down 1
  treeCount *= treeCounter(1, 1, input);

  //Right 3, down 1
  treeCount *= treeCounter(3, 1, input);

  //Right 5, down 1
  treeCount *= treeCounter(5, 1, input);

  //Right 7, down 1
  treeCount *= treeCounter(7, 1, input);

  //Right 1, down 2
  treeCount *= treeCounter(1, 2, input);

  return treeCount;
}

const treeCounter = function (right: number, down: number, input: string[]) {
  const lineLength = input[0].length;
  let treeCount = 0;
  let index = 0;
  for (let i = down; i < input.length; i += down) {
    index = (index + right) % lineLength;

    if (input[i][index] === '#')
      treeCount++;
  }

  return treeCount;
}

module.exports = { day3, day3_2 };
