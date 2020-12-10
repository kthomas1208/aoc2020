/** DAY 10 **/
const day10 = function (input: string[]): number {
    let adapters = input.map(x => Number.parseInt(x)).sort((a, b) => a - b);
    adapters.unshift(0);
    let oneJolt = 0;
    let threeJolts = 1;

    for (let i = 0; i < adapters.length - 1; i++) {
        if (adapters[i + 1] - adapters[i] === 3) {
            threeJolts++;
        } else if (adapters[i + 1] - adapters[i] === 1) {
            oneJolt++;
        }
    }

    return oneJolt * threeJolts;
}

const day10_2 = function (input: string[]): number {
    let count = 1;

    let adapters = input.map(x => Number.parseInt(x)).sort((a, b) => a - b);
    adapters.unshift(0);
    adapters.push(adapters[adapters.length - 1] + 3);

    let consecutiveCount = 1;
    for (let i = 0; i < adapters.length - 1; i++) {
        if (adapters[i + 1] - adapters[i] === 1) {
            consecutiveCount++;
        } else {
            count *= getMultiplier(consecutiveCount);
            consecutiveCount = 1;
        }
    }

    return count;
}

// Tribonacci 
const getMultiplier = function (n: number): number {
    switch (n) {
        case 0:
            return 1;
        case 1:
            return 1;
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
            return 4;
        case 5:
            return 7;
        default:
            return 1;
    }
}

module.exports = { day10, day10_2 };
