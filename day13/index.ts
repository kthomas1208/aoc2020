/** DAY 13 **/

const day13 = function (input: string[]): number {

    let earliestDeparture = Number.parseInt(input[0]);
    let busIds = input[1].split(',')
        .filter(busId => busId !== 'x')
        .map(busId => Number.parseInt(busId));

    let departureTable = [...busIds];

    let minTime = Number.MAX_VALUE;
    let minBusIdx = departureTable.length;
    for (let i = 0; i < departureTable.length; i++) {
        while (true) {
            departureTable[i] += busIds[i];
            if (departureTable[i] >= earliestDeparture) {
                if (departureTable[i] - earliestDeparture < minTime) {
                    minTime = departureTable[i] - earliestDeparture;
                    minBusIdx = i;
                }
                break;
            }
        }
    }

    return (departureTable[minBusIdx] - earliestDeparture) * busIds[minBusIdx];
}

/** 
 * not my solution, but I ain't gonna learn no Chinese Remainder Theorem
 * https://github.com/cs-cordero/advent_of_code/blob/master/rs/2020/day13/src/main.rs
 * @param input 
 */
const day13_2 = function (input: string) {
    const busIds = input.split(',').map(x => Number.parseInt(x));

    let t = 1;
    let mode = 1;
    for (let i = 0; i < busIds.length; i++) {
        if (busIds[i]) {
            while ((t + i) % busIds[i] != 0) {
                t += mode;
            }
            mode *= busIds[i];
        }
    }
    return t
};

/**
 * brute force (if you have an ultra super computer)
 * will probably take hours
 */
// const day13_2 = function (input: string): number {
//     const busIds = input.split(',').map(x => Number.parseInt(x));
//     let t = busIds[0];
//     const firstBus = t;
//     let isSuccess = false;
//     while (true) {
//         let timestamp = t + 1;

//         for (let i = 1; i < busIds.length; i++) {
//             if (!busIds[i]) {
//                 timestamp++;
//                 continue;
//             } else {
//                 if (timestamp % busIds[i] === 0) {
//                     isSuccess = true;
//                     timestamp++;
//                     continue;
//                 } else {
//                     isSuccess = false;
//                     break;
//                 }
//             }
//         }

//         if (isSuccess) {
//             return t;
//         } else {
//             t += firstBus;
//         }
//     }
// }

module.exports = { day13, day13_2 };
