/** DAY 12 **/
interface Point {
    x: number;
    y: number;
}

const day12 = function (input: string[]): number {

    let coords: Point = { x: 0, y: 0 };
    let facing = 'E';
    for (let line of input) {
        let direction = line[0];
        let amount = Number.parseInt(line.substring(1));

        let directions = ['E', 'S', 'W', 'N'];

        if (direction === 'R') {
            let idx = ((directions.findIndex(x => x == facing) + (amount / 90)) % directions.length);
            facing = directions[idx];
        } else if (direction === 'L') {
            let idx = (directions.length + (directions.findIndex(x => x == facing) - (amount / 90))) % directions.length;
            facing = directions[idx];
        } else if (direction === 'F') {
            move(facing, coords, amount);
        } else {
            move(direction, coords, amount);
        }
    }

    let distance = Math.abs(coords.x) + Math.abs(coords.y);
    return distance;
}

const day12_2 = function (input: string[]): number {

    let shipCoords: Point = { x: 0, y: 0 };
    let waypoint: Point = { x: 10, y: 1 };

    for (let line of input) {
        let direction = line[0];
        let amount = Number.parseInt(line.substring(1));

        if (direction === 'R' || direction === 'L') {
            [...Array(amount / 90)].forEach(x => rotate(waypoint, direction));
        } else if (direction === 'F') {
            shipCoords.x += waypoint.x * amount;
            shipCoords.y += waypoint.y * amount;
        } else {
            move(direction, waypoint, amount);
        }
    }

    let distance = Math.abs(shipCoords.x) + Math.abs(shipCoords.y);
    return distance;
}

const move = function (direction: string, coords: Point, amount: number) {
    switch (direction) {
        case 'N':
            coords.y += amount;
            break;

        case 'S':
            coords.y -= amount;
            break;

        case 'E':
            coords.x += amount;
            break;

        case 'W':
            coords.x -= amount;
            break;
    }
}

const rotate = function (waypoint: Point, direction: String) {
    let x = waypoint.x;
    let y = waypoint.y;

    if (direction === 'R') {
        waypoint.x = y;
        waypoint.y = -x;
    } else if (direction === 'L') {
        waypoint.x = -y;
        waypoint.y = x;
    }
}

module.exports = { day12, day12_2 };
