/** DAY 8 **/
const day8 = function (input: string[]): number {
    let accumulator = 0;
    let indexSet = new Set();
    let i = 0;

    while (i < input.length) {
        if (indexSet.has(i)) return accumulator;

        indexSet.add(i);
        const instruction = input[i].substring(0, 3);
        const argument = Number.parseInt(input[i].substring(4));

        if (instruction === 'acc') {
            accumulator += argument;
        }
        if (instruction === 'jmp') {
            i += argument;
        } else {
            i++;
        }
    }
}


const day8_2 = function (input: string[]) {

    const masterCopy = [...input];
    let indexes = getIndexes(input);

    //change an instruction
    while (indexes.length) {
        let newProgram = programModder(input, indexes.shift());

        // run the program
        let result = programRunner(newProgram);

        if (result) return result;
        else {
            input = [...masterCopy];
        }
    }
}

const getIndexes = function (input: string[]) {
    let i = 0;
    let indexes = [];
    while (i < input.length) {
        const instruction = input[i].substring(0, 3);
        const argument = Number.parseInt(input[i].substring(4));

        if (instruction === 'jmp') {
            indexes.push(i);
        }
        if (instruction === 'nop' && argument !== 0) {
            indexes.push(i);
        }

        i++;
    }

    return indexes;
}

const programModder = function (program: string[], indexToChange: number) {

    const instruction = program[indexToChange].substring(0, 3);

    if (instruction === 'jmp') {
        program[indexToChange] = program[indexToChange].replace('jmp', 'nop');
    }
    if (instruction === 'nop') {
        program[indexToChange] = program[indexToChange].replace('nop', 'jmp');
    }

    return program;
}

const programRunner = function (input: string[]) {
    let accumulator = 0;
    let indexSet = new Set();
    let i = 0;

    while (i <= input.length) {
        if (i === input.length) return accumulator;

        // restart
        if (indexSet.has(i)) {
            return null;
        }

        indexSet.add(i);

        const instruction = input[i].substring(0, 3);
        const argument = Number.parseInt(input[i].substring(4));

        if (instruction === 'acc') {
            accumulator += argument;
        }
        if (instruction === 'jmp') {
            i += argument;
        } else {
            i++;
        }
    }
}



module.exports = { day8, day8_2 };
