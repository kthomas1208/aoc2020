/** DAY 9 **/
const day9 = function (input: string[]): number {

    let xmas = input.map(x => Number.parseInt(x));

    let hi = 25;
    let lo = 0;

    while (hi < input.length) {
        if (!isValid(xmas.slice(lo, hi), xmas[hi]))
            return xmas[hi];
        hi++;
        lo++;
    }
}

const isValid = function (input: number[], sum: number): boolean {
    let subMap = new Set();
    for (let i of input) {
        let temp = sum - i;
        if (subMap.has(temp)) {
            return true;
        } else {
            subMap.add(i);
        }
    }
    return false;
}

const day9_2 = function (input: string[], invalidNumber: number): number {
    let xmas = input.map(x => Number.parseInt(x));
    const sum = invalidNumber;//29221323;
    let lo = 0;
    let hi = lo;

    let count = 0;
    while (lo < xmas.length) {
        count += xmas[hi]

        if (count === sum) {
            let range = xmas.slice(lo, hi + 1);
            let min = Number.MAX_SAFE_INTEGER;
            let max = Number.MIN_SAFE_INTEGER;

            range.forEach(x => min = Math.min(x, min));
            range.forEach(x => max = Math.max(x, max));

            return min + max;
        } else if (count > sum || hi + 1 === xmas.length) {
            lo++;
            hi = lo;
            count = 0;
        } else {
            hi++;
        }
    }
}

module.exports = { day9, day9_2 };
