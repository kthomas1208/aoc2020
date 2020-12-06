/** DAY 5 **/

const day5 = function (input: string[]) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let line of input) {
        const row = findRowOrColumn(0, 127, line.substring(0, line.length - 3), 'F', 'B');
        const col = findRowOrColumn(0, 7, line.substring(line.length - 3), 'L', 'R');
        max = Math.max(row * 8 + col, max);
    }

    return max;
}

const day5_2 = function (input: string[]) {
    let seatIds = [];

    for (let line of input) {
        const row = findRowOrColumn(0, 127, line.substring(0, line.length - 3), 'F', 'B');
        const col = findRowOrColumn(0, 7, line.substring(line.length - 3), 'L', 'R');
        seatIds.push(row * 8 + col);
    }

    const sortedSeats = seatIds.sort((a, b) => a - b);

    for (let i = 0; i < sortedSeats.length; i++) {
        if (sortedSeats[i] + 1 !== sortedSeats[i + 1])
            return sortedSeats[i] + 1;
    }
}

const findRowOrColumn = function (low: number, high: number, pass: string, lowChar: string, highChar: string) {
    const rowChar = pass.substr(0, 1);

    if (rowChar === lowChar) {
        if (pass.length === 1) return low;
        const mid = Math.floor((high + low) / 2);
        return findRowOrColumn(low, mid, pass.substring(1), lowChar, highChar);
    } else if (rowChar === highChar) {
        if (pass.length === 1) return high;
        const mid = Math.ceil((high + low) / 2);
        return findRowOrColumn(mid, high, pass.substring(1), lowChar, highChar);
    }
}

module.exports = { day5, day5_2, findRowOrColumn };
