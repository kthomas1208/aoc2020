/** DAY 17 **/

interface Coordinate {
    x: number;
    y: number;
    z: number;
    w?: number;
}
const CANVAS_SIZE = 25;

const day17 = function (input: string[]): number {

    let grid: string[][][] = [];
    let activeCubes = 0

    // create an empty grid template we'll map our input to
    // and use for padding later
    let EMPTY_GRID = '';
    for (let i = 0; i < CANVAS_SIZE; i++) {
        EMPTY_GRID += '.'.repeat(CANVAS_SIZE) + '\n';
    }

    // set up our empty grids
    const ys: string[][] = [];
    for (let line of EMPTY_GRID.split('\n')) {
        let xs = line.split('');
        ys.push(xs);
    }

    // parse the test input into the empty grid template
    let inputGrid = EMPTY_GRID.split('\n');
    const startingPoint = (inputGrid.length - input.length) / 2;
    let j = 0;
    for (let [i, line] of inputGrid.entries()) {
        if (j === input.length) break;
        if (i >= startingPoint) {
            let a = line.split('');
            a.splice(startingPoint, input.length, ...input[j]);
            inputGrid[i] = a.join('');
            j++;
        }
    }

    let y1: string[][] = [];
    for (let line of inputGrid) {
        let xs = line.split('');
        y1.push(xs);
    }

    // now add everything to our main grid
    grid.push(ys.map(y => y.slice()), y1, ys.map(y => y.slice()));

    // iterate through the grid, check neighbors, and flip if necessary
    let step = 0;
    while (step < 6) {
        const masterCopy = grid.map(z => z.map(x => x.slice()));
        for (let z = 0; z < grid.length; z++) {
            for (let y = 0; y < CANVAS_SIZE; y++) {
                for (let x = 0; x < CANVAS_SIZE; x++) {
                    let point = masterCopy[z][y][x];
                    let activeNeighbors = checkNeighbors({ x, y, z }, masterCopy);

                    if (point === '#' && (activeNeighbors < 2 || activeNeighbors > 3)) {
                        grid[z][y][x] = '.';
                    }
                    if (point === '.' && activeNeighbors === 3) {
                        grid[z][y][x] = '#';
                    }
                }
            }
        }

        step++;

        // add some padding to the Z space
        // to check neighbors next round
        grid.unshift(ys.map(y => y.slice()));
        grid.push(ys.map(y => y.slice()));
    }

    // count up all active points
    grid.forEach(z => z
        .forEach(y => y
            .forEach(x => {
                if (x === '#') activeCubes++
            })));
    return activeCubes;
}

const checkNeighbors = function (coord: Coordinate, grid: string[][][]): number {
    let count = 0;
    for (let z = -1; z <= 1; z++) {
        if (grid[coord.z + z] === undefined) continue;
        for (let y = -1; y <= 1; y++) {
            if (grid[coord.z + z][coord.y + y] === undefined) continue;
            for (let x = -1; x <= 1; x++) {
                if (z === 0 && y === 0 && x === 0) continue;
                if (grid[coord.z + z][coord.y + y][coord.x + x] === '#') count++;
            }
        }
    }

    return count
}

const day17_2 = function (input: string[]): number {

    let grid: string[][][][] = [];
    let activeCubes = 0

    // create an empty grid template we'll map our input to
    // and use for padding later
    let EMPTY_GRID = '';
    for (let i = 0; i < CANVAS_SIZE; i++) {
        EMPTY_GRID += '.'.repeat(CANVAS_SIZE) + (i < CANVAS_SIZE - 1 ? '\n' : '');
    }

    // set up empty grids
    const ys: string[][] = [];
    for (let line of EMPTY_GRID.split('\n')) {
        let xs = line.split('');
        ys.push(xs);
    }

    const zs: string[][][] = [];
    zs.push(ys.map(y => y.slice()), ys.map(y => y.slice()), ys.map(y => y.slice()));

    // parse the test input into the empty grid template
    let inputGrid = EMPTY_GRID.split('\n');
    const startingPoint = (inputGrid.length - input.length) / 2;
    let j = 0;
    for (let [i, line] of inputGrid.entries()) {
        if (j === input.length) break;
        if (i >= startingPoint) {
            let a = line.split('');
            a.splice(startingPoint, input.length, ...input[j]);
            inputGrid[i] = a.join('');
            j++;
        }
    }

    let y1: string[][] = [];
    for (let line of inputGrid) {
        let xs = line.split('');
        y1.push(xs);
    }

    let z1: string[][][] = [];
    z1.push(ys.map(y => y.slice()), y1, ys.map(y => y.slice()));

    // now add everything to our main grid
    grid.push(zs.map(z => z.map(y => y.slice())), z1, zs.map(z => z.map(y => y.slice())));

    // iterate through the grid, check neighbors, and flip if necessary
    let step = 0;
    while (step < 6) {
        const masterCopy = grid.map(w => w.map(z => z.map(x => x.slice())));
        for (let w = 0; w < grid.length; w++) {
            for (let z = 0; z < grid[0].length; z++) {
                for (let y = 0; y < CANVAS_SIZE; y++) {
                    for (let x = 0; x < CANVAS_SIZE; x++) {
                        let point = masterCopy[w][z][y][x];
                        let activeNeighbors = checkNeighbors4D({ x, y, z, w }, masterCopy);

                        if (point === '#' && (activeNeighbors < 2 || activeNeighbors > 3)) {
                            grid[w][z][y][x] = '.';
                        }
                        if (point === '.' && activeNeighbors === 3) {
                            grid[w][z][y][x] = '#';
                        }
                    }
                }
            }
        }

        step++;

        // add some padding to the grid for the next round
        grid.unshift(zs.map(z => z.map(y => y.slice())));
        grid.push(zs.map(z => z.map(y => y.slice())));
        zs.unshift(ys.map(y => y.slice()));
        zs.push(ys.map(y => y.slice()));

        grid.forEach(z => {
            z.unshift(ys.map(y => y.slice()));
            z.push(ys.map(y => y.slice()));
        });
    }

    // count up all active points
    grid.forEach(w => w
        .forEach(z => z
            .forEach(y => y
                .forEach(x => {
                    if (x === '#') activeCubes++
                }))));

    return activeCubes;
}

const checkNeighbors4D = function (coord: Coordinate, grid: string[][][][]): number {
    let count = 0;
    for (let w = -1; w <= 1; w++) {
        if (grid[coord.w + w] === undefined) continue;
        for (let z = -1; z <= 1; z++) {
            if (grid[coord.w + w][coord.z + z] === undefined) continue;
            for (let y = -1; y <= 1; y++) {
                if (grid[coord.w + w][coord.z + z][coord.y + y] === undefined) continue;
                for (let x = -1; x <= 1; x++) {
                    if (w === 0 && z === 0 && y === 0 && x === 0) continue;
                    if (grid[coord.w + w][coord.z + z][coord.y + y][coord.x + x] === '#') count++;
                }
            }
        }
    }

    return count
}

module.exports = { day17, day17_2 };
