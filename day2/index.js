/** DAY 2 **/
function day2(input) {
  for (let i = 0; i + 4 < input.length; i += 4) {
    let instruction = input.slice(i, i + 4);
    processInstruction(instruction, input);
  }

  return input;
}

function processInstruction(instruction, input) {
  const opcode = instruction[0];
  const in1 = instruction[1];
  const in2 = instruction[2];
  const out = instruction[3];

  if (opcode === 1) {
    input[out] = input[in1] + input[in2];
  } else if (opcode === 2) {
    input[out] = input[in1] * input[in2];
  } else if (opcode === 99) return;
}

function day2_2(testInput, targetValue) {
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
      let input = [...testInput];
      input[1] = i;
      input[2] = j;
      day2(input);
      if (input[0] === targetValue) {
        let output = 100 * i + j;
        console.log(`noun:${i} verb:${j} answer:${output}`);
        return output;
      }
    }
  }
}

module.exports = { day2, day2_2 };
