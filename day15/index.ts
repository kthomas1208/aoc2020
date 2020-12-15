/** DAY 15 **/

const day15 = function (input: string): number {
    let startingNumbers = input.split(',').map(x => Number(x));
    const startingLength = startingNumbers.length;

    let numberSet = new Set();
    for (let i = 0; i < startingNumbers.length; i++) {
        if (i === 2019) return startingNumbers[i];
        if (i < startingLength - 1) {
            numberSet.add(startingNumbers[i]);
            continue
        };

        if (numberSet.has(startingNumbers[i])) {
            const nextNum = i - startingNumbers.lastIndexOf(startingNumbers[i], i - 1);
            startingNumbers.push(nextNum);
        } else {
            startingNumbers.push(0);
            numberSet.add(startingNumbers[i]);
        }
    }

    return -1;
}

const day15_2 = function (input: string): number {
    let startingNumbers = input.split(',').map(x => Number(x));
    const startingLength = startingNumbers.length;

    let numberMap = new Map();
    for (let i = 0; i < startingNumbers.length; i++) {
        if (i === 30000000 - 1) return startingNumbers[i];
        if (i < startingLength - 1) {
            numberMap.set(startingNumbers[i], i);
            continue
        };

        if (numberMap.has(startingNumbers[i])) {
            const nextNum = i - numberMap.get(startingNumbers[i]);
            startingNumbers.push(nextNum);
            numberMap.set(startingNumbers[i], i);
        } else {
            startingNumbers.push(0);
            numberMap.set(startingNumbers[i], i);
        }
    }

    return -1;
};

module.exports = { day15, day15_2 };
