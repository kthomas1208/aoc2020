var OpCodes = {
  ADD: 1,
  MULTIPLY: 2,
  INPUT: 3,
  OUTPUT: 4,
  HALT: 99
};

function day5(instruction) {
  const userInput = 1;
  let cursor = 0;
  let diagnosticCode = 0;
  while (cursor < instruction.length) {
    let opcode = instruction[cursor];
    switch (opcode) {
      case OpCodes.ADD:
        add(instruction, cursor);
        cursor += 4;
        break;
      case OpCodes.MULTIPLY:
        multiply(instruction, cursor);
        cursor += 4;
        break;
      case OpCodes.INPUT:
        input(instruction, cursor, userInput);
        cursor += 2;
        break;
      case OpCodes.OUTPUT:
        diagnosticCode = output(instruction, cursor);
        if (diagnosticCode) return diagnosticCode;
        cursor += 2;
        break;
      case OpCodes.HALT:
        return;
      default:
        diagnosticCode = parameterMode(instruction, cursor, userInput);
        if (diagnosticCode) return diagnosticCode;
        cursor += 4;
        break;
    }
  }
  return diagnosticCode;
}

function add(instruction, cursor) {
  const in1 = instruction[cursor + 1];
  const in2 = instruction[cursor + 2];
  const out = instruction[cursor + 3];

  instruction[out] = instruction[in1] + instruction[in2];
}

function multiply(instruction, cursor) {
  const in1 = instruction[cursor + 1];
  const in2 = instruction[cursor + 2];
  const out = instruction[cursor + 3];

  instruction[out] = instruction[in1] * instruction[in2];
}

function input(instruction, cursor, userInput) {
  instruction[instruction[cursor + 1]] = userInput;
}

function output(instruction, cursor) {
  const diagnosticCode = instruction[instruction[cursor + 1]];
  console.log(`Test Result: ${diagnosticCode}`);
  return diagnosticCode;
}

function parameterMode(instruction, cursor, userInput) {
  const in0 = instruction[cursor].toString();
  const opCode = Number(in0.slice(-2));
  const in1Mode = Number(in0.slice(-3, -2));
  const in2Mode = Number(in0.slice(-4, -3));

  const in1 = in1Mode
    ? instruction[cursor + 1]
    : instruction[instruction[cursor + 1]];
  const in2 = in2Mode
    ? instruction[cursor + 2]
    : instruction[instruction[cursor + 2]];
  const out = instruction[cursor + 3];

  if (opCode === OpCodes.ADD) {
    instruction[out] = in1 + in2;
  } else if (opCode === OpCodes.MULTIPLY) {
    instruction[out] = in1 * in2;
  } else if (opCode === OpCodes.OUTPUT) {
    console.log(`Test Result: ${in1}`);
    return in1;
  } else if (opCode === OpCodes.INPUT) {
    input(instruction, cursor, userInput);
  }
}

// function day2(input) {
//   for (let i = 0; i + 4 < input.length; i += 4) {
//     let instruction = input.slice(i, i + 4);
//     processInstruction(instruction, input);
//   }

//   return input;
// }

// function processInstruction(instruction, input) {
//   const opcode = instruction[0];
//   const in1 = instruction[1];
//   const in2 = instruction[2];
//   const out = instruction[3];

//   if (opcode === 1) {
//     input[out] = input[in1] + input[in2];
//   } else if (opcode === 2) {
//     input[out] = input[in1] * input[in2];
//   } else if (opcode === 99) return;
// }

module.exports = { day5 };
