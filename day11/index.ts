/** DAY 11 **/
const day11 = function (input: string[]): number {

    let seats = [];
    for (let line of input) {
        seats.push(line.split(''));
    }

    while (true) {
        let masterCopy = seats.map(x => x.slice());

        let changed = false;
        for (let row = 0; row < seats.length; row++) {
            for (let col = 0; col < seats[0].length; col++) {
                if (masterCopy[row][col] === 'L') {
                    if (checkOccupied(row, col, masterCopy) === 0) {
                        seats[row][col] = '#';
                        changed = true;
                    }
                }
                if (masterCopy[row][col] === '#') {
                    if (checkOccupied(row, col, masterCopy) >= 4) {
                        seats[row][col] = 'L';
                        changed = true;
                    }
                }
            }
        }

        if (!changed) {
            return countOccupied(seats);
        }
    }
}

const checkOccupied = function (row: number, col: number, grid: any[]): number {

    //row-1 col-1
    //row-1 col
    //row-1 col+1

    //row col-1
    //row col+1

    //row+1 col-1
    //row+1 col
    //row+1 col+1

    let count = 0;
    for (let x = row - 1; x <= row + 1; x++) {
        if (grid[x] === undefined) continue;
        for (let y = col - 1; y <= col + 1; y++) {
            if (x === row && y === col) continue;
            if (grid[x][y] === undefined) continue;
            if (grid[x][y] === '#') count++;
        }
    }

    return count;
}

const countOccupied = function (grid: any[]): number {
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '#') {
                count++;
            }
        }
    }

    return count;
}

const day11_2 = function (input: string[]): number {

    let seats = [];
    for (let line of input) {
        seats.push(line.split(''));
    }

    while (true) {
        let masterCopy = seats.map(x => x.slice());

        let changed = false;
        for (let row = 0; row < seats.length; row++) {
            for (let col = 0; col < seats[0].length; col++) {
                if (masterCopy[row][col] === 'L') {
                    if (checkOccupiedAdvanceWars(row, col, masterCopy) === 0) {
                        seats[row][col] = '#';
                        changed = true;
                    }
                }
                if (masterCopy[row][col] === '#') {
                    if (checkOccupiedAdvanceWars(row, col, masterCopy) >= 5) {
                        seats[row][col] = 'L';
                        changed = true;
                    }
                }
            }
        }

        if (!changed) {
            return countOccupied(seats);
        }
    }
}

/**
 * Okay, this is really bad because I should be using recursion or something. 
 * Also, I'm sorry for making x vertical and y horizontal
 * Also, I'm sorry for mixing fors and whiles
 * @param row 
 * @param col 
 * @param grid 
 */
const checkOccupiedAdvanceWars = function (row: number, col: number, grid: any[]): number {
    let totalCount = 0;

    // top left
    let x = row - 1, y = col - 1;
    while (x >= 0 && y >= 0) {
        let result = findOccupiedSeat(x, y, grid);
        if (result === 1) {
            totalCount++;
            break;
        } else if (result === -1) {
            break;
        }
        x--; y--;
    }

    // top
    for (let x = row - 1; x >= 0; x--) {
        let result = findOccupiedSeat(x, col, grid);
        if (result === 1) {
            totalCount++;
            break;
        } else if (result === -1) {
            break;
        }
    }

    // top right
    x = row - 1, y = col + 1;
    while (x >= 0 && y < grid[0].length) {
        let result = findOccupiedSeat(x, y, grid);
        if (result === 1) {
            totalCount++;
            break;
        } else if (result === -1) {
            break;
        }

        x--; y++;
    }

    // left
    for (let y = col - 1; y >= 0; y--) {
        let result = findOccupiedSeat(row, y, grid);
        if (result === 1) {
            totalCount++;
            break;
        } else if (result === -1) {
            break;
        }
    }

    // bottom left
    x = row + 1, y = col - 1;
    while (x < grid.length && y >= 0) {
        let result = findOccupiedSeat(x, y, grid);
        if (result === 1) {
            totalCount++;
            break;
        } else if (result === -1) {
            break;
        }

        x++; y--;
    }

    // bottom
    for (let x = row + 1; x < grid.length; x++) {
        let result = findOccupiedSeat(x, col, grid);
        if (result === 1) {
            totalCount++;
            break;
        } else if (result === -1) {
            break;
        }
    }

    // bottom right
    x = row + 1, y = col + 1;
    while (x < grid.length && y < grid[0].length) {
        let result = findOccupiedSeat(x, y, grid);
        if (result === 1) {
            totalCount++;
            break;
        } else if (result === -1) {
            break;
        }

        x++; y++;
    }

    // right
    for (let y = col + 1; y < grid[0].length; y++) {
        let result = findOccupiedSeat(row, y, grid);
        if (result === 1) {
            totalCount++;
            break;
        } else if (result === -1) {
            break;
        }
    }

    return totalCount;
}

const findOccupiedSeat = function (x: number, y: number, grid: any[]): number {
    if (grid[x] === undefined) return -1;
    if (grid[x][y] === undefined) return -1;
    if (grid[x][y] === '#') {
        return 1;
    } else if (grid[x][y] === 'L') {
        return -1;
    } else {
        return 0;
    }
}

module.exports = { day11, day11_2 };
