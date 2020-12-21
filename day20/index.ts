/** DAY 20 **/
interface Tile {
    id: number;
    borders: string[];
    matches?: number;
}

const day20 = function (input: string[]): number {

    let tiles: Tile[] = [];
    let product = 1;
    for (let tileInput of input) {
        let t = tileInput.split('\n');
        let borders: string[] = [];

        borders.push(t[1]);
        borders.push(t[10]);
        let leftBorder = '';
        let rightBorder = '';
        for (let i = 1; i < 11; i++) {
            leftBorder += t[i][0]
            rightBorder += t[i][9];
        }
        borders.push(leftBorder, rightBorder);

        let id = Number(t[0].match(/([0-9])+/g));
        tiles.push({ id, borders, matches: 0 });
    }

    for (let i = 0; i < tiles.length; i++) {
        for (let j = tiles.length - 1; j > i; j--) {
            for (let x = 0; x < 5; x++) {
                for (let y = 0; y < 5; y++) {
                    if (tiles[i].borders[x] === tiles[j].borders[y]) {
                        tiles[i].matches++;
                        tiles[j].matches++;
                    }
                }
            }
        }
    }

    let cornerTiles = tiles.filter(tile => tile.matches === 2);
    cornerTiles.forEach(tile => product *= tile.id);
    return product;
}

const day20_2 = function (input: string[]): number {

    return -1;
}

module.exports = { day20, day20_2 };
