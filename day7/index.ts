/** DAY 7 **/

const day7 = function (input: string[]): number {
    let bagMap = new Map();
    let bagCount = 0;

    // create map
    for (let line of input) {
        let innerBags = [];
        let innerBagText = line.match(/(?<=contain ).*/g)
            .toString().replace('.', '')
            .split(',');
        innerBagText.forEach(x => innerBags.push(x.trim().split(' ')[1] + ' ' + x.trim().split(' ')[2]));

        let isEmptyBag = false;
        if (line.endsWith('no other bags.')) {
            isEmptyBag = true;
        }
        bagMap.set(line.split(' ')[0] + ' ' + line.split(' ')[1], isEmptyBag ? [] : innerBags);
    }

    // check each outer bag
    Array.from(bagMap.keys()).forEach(bag => {
        if (checkContainsShinyGold(bag, bagMap))
            bagCount++;
    });

    return bagCount;
}

const checkContainsShinyGold = function (bag: string, bagMap: Map<string, string[]>): boolean {

    // if any of the inner bags are shiny gold, we found it
    if (bagMap.get(bag).find(x => x === 'shiny gold')) {
        return true;
    } else {
        // otherwise, loop through each inner bag and see if it will eventually 
        // lead to shiny gold
        for (let innerBag of bagMap.get(bag)) {
            if (checkContainsShinyGold(innerBag, bagMap)) return true;
        }
        return false;
    }

}

const day7_2 = function (input: string[]) {
    let bagMap = new Map();
    let bagCount = 0;

    // create map
    for (let line of input) {
        let innerBags = [];
        let innerBagText = line.match(/(?<=contain ).*/g)
            .toString().replace('.', '')
            .split(',');
        innerBagText.forEach(x => {
            let count = Number.parseInt(x.trim().split(' ')[0]);
            while (count) {
                innerBags.push(x.trim().split(' ')[1] + ' ' + x.trim().split(' ')[2]);
                count--;
            }
        });

        let isEmptyBag = false;
        if (line.endsWith('no other bags.')) {
            isEmptyBag = true;
        }
        bagMap.set(line.split(' ')[0] + ' ' + line.split(' ')[1], isEmptyBag ? [] : innerBags);
    }

    // count each leaf of shiny gold
    bagCount = countBags('shiny gold', bagMap);

    return bagCount;
}

const countBags = function (bag: string, bagMap: Map<string, string[]>): number {
    let count = 0;

    count = bagMap.get(bag).length;
    for (let innerBag of bagMap.get(bag)) {
        count += countBags(innerBag, bagMap);
    }

    return count;
}

module.exports = { day7, day7_2 };
