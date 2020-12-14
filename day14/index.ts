/** DAY 14 **/

const day14 = function (input: string[]): number {
    let andMask = 0;
    let orMask = 0;
    let mem = new Map();
    let sum = 0;
    for (let line of input) {
        if (line.startsWith('mask')) {
            let mask = Array.from(line.substring(7));
            let andArr = mask.map(x => {
                if (x === 'X')
                    return '1'
                else return '0';
            });
            andMask = parseInt(andArr.join(''), 2);

            let orArr = mask.map(x => {
                if (x === 'X')
                    return '0'
                else return x;
            });
            orMask = parseInt(orArr.join(''), 2);
        } else {
            let address = Number.parseInt(line.match(/(?<=\[)(.*?)(?=\])/g)[0]);
            let value = Number.parseInt(line.split(' = ')[1]);
            value = and(value, andMask);
            value = or(value, orMask);
            mem.set(address, value);
        }
    }

    Array.from(mem.values()).forEach(x => sum += x);

    return sum;
}

/**
 * Taken from https://stackoverflow.com/a/43666199/636240
 */
function and(v1, v2) {
    var hi = 0x80000000;
    var low = 0x7fffffff;
    var hi1 = ~~(v1 / hi);
    var hi2 = ~~(v2 / hi);
    var low1 = v1 & low;
    var low2 = v2 & low;
    var h = hi1 & hi2;
    var l = low1 & low2;
    return h * hi + l;
}

function or(v1, v2) {
    var hi = 0x80000000;
    var low = 0x7fffffff;
    var hi1 = ~~(v1 / hi);
    var hi2 = ~~(v2 / hi);
    var low1 = v1 & low;
    var low2 = v2 & low;
    var h = hi1 | hi2;
    var l = low1 | low2;
    return h * hi + l;
}

const day14_2 = function (input: string): number {

    let sum = 0;
    let mem = new Map();
    let mask = [];
    for (let line of input) {
        if (line.startsWith('mask')) {
            mask = Array.from(line.substring(7));
        }
        else {
            let value = Number.parseInt(line.split(' = ')[1]);
            let address = (Number(line.match(/(?<=\[)(.*?)(?=\])/g)[0]) >>> 0).toString(2).padStart(36, '0');
            let result = Array.from(address).map((x, i) => {
                if (mask[i] === '0') return x;
                return mask[i];
            });

            // create new addresses from result
            let newAddresses: string[][] = [];
            for (let bit of result) {
                const n = newAddresses.length;
                if (bit === 'X') {
                    //add new
                    if (n) {
                        for (let i = 0; i < n; i++) {
                            let copy = [...newAddresses[i]];
                            copy.push('0');
                            newAddresses.push(copy);
                            newAddresses[i].push('1');
                        }
                    } else {
                        newAddresses.push(['0']);
                        newAddresses.push(['1']);
                    }
                } else {
                    if (n) {
                        newAddresses.forEach(x => x.push(bit));
                    } else {
                        newAddresses.push([bit]);
                    }
                }
            }

            for (let address of newAddresses) {
                let addr = parseInt(address.join(''), 2);
                mem.set(addr, value);
            }
        }
    }

    Array.from(mem.values()).forEach(x => sum += x);
    return sum;
};

module.exports = { day14, day14_2 };
