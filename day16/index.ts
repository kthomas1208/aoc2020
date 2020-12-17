/** DAY 16 **/

//yes, I know this is redundant
interface FieldRange {
    name?: string;
    lo?: number;
    hi?: number;
}

interface DepartureField {
    fieldName?: string;
    ranges?: string[];
    pos?: number[];
    idx?: number;
}

const day16 = function (input: string[]): number {
    let RANGES: FieldRange[] = [];

    let errorRate = 0;
    let fields = input[0];
    fields.match(/(?<=\: ).*/g).forEach(field => {
        field.split(' or ')
            .forEach(x => {
                let lo = Number(x.split('-')[0]);
                let hi = Number(x.split('-')[1]);
                RANGES.push({ lo, hi });
            });
    })

    let nearbyTickets = input[2].split('\n');
    for (let i = 1; i < nearbyTickets.length; i++) {
        nearbyTickets[i].split(',').forEach(x => {
            const n = Number(x);
            if (!isInRange(n, RANGES)) errorRate += n;
        })
    }

    return errorRate;
}

const isInRange = function (n: number, RANGES: FieldRange[]): boolean {

    for (const [i, range] of RANGES.entries()) {
        if ((range.lo <= n && n <= range.hi)) {
            return true;
        }
    }

    return false;
}

// SORRY FOR THIS REPEATED METHOD
const isInDepartureRange = function (n: number, field: DepartureField) {
    for (let range of field.ranges) {
        let lo = Number(range.split('-')[0]);
        let hi = Number(range.split('-')[1]);

        if (lo <= n && n <= hi) {
            return true;
        }
    }

    return false;
}

const day16_2 = function (input: string): number {

    let RANGES: FieldRange[] = [];
    let validTickets: number[][] = [];
    let departureFields: DepartureField[] = [];

    let total = 1;
    let fields = input[0];

    fields.split('\n').forEach(field => {
        let name = field.split(': ')[0];
        field.split(': ')[1].split(' or ')
            .forEach(x => {
                let lo = Number(x.split('-')[0]);
                let hi = Number(x.split('-')[1]);
                RANGES.push({ name, lo, hi });
            });
    });

    // please don't judge me, i was mad stressed
    // i know I could've just combined this with 
    // the split above
    fields.split('\n').forEach(field => {
        let name = field.split(': ')[0];
        let ranges = field.split(': ')[1].split(' or ')

        departureFields.push({ fieldName: name, ranges: ranges, pos: [], idx: undefined });
    });

    let yourTicket = input[1].split('\n')[1].split(',').map(x => Number(x));

    let nearbyTickets = input[2].split('\n');
    for (let i = 1; i < nearbyTickets.length; i++) {
        let values = nearbyTickets[i].split(',').map(x => Number(x));
        let isValid = true;
        for (let value of values) {
            if (!isInRange(value, RANGES)) {
                isValid = false;
                break;
            }
        }

        if (isValid) validTickets.push(values);
    }

    // determine ALL the potential fields
    for (let col = 0; col < validTickets[0].length; col++) {
        for (let field of departureFields) {
            let valid = true;
            for (let row = 0; row < validTickets.length; row++) {
                // if any isn't valid, probably not the right field
                if (!isInDepartureRange(validTickets[row][col], field)) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                field.pos.push(col);
            }
        }
    }

    // now narrow down the fields so only 1 field matches to one column
    while (departureFields.some(field => field.idx === undefined)) {
        for (let field of departureFields) {
            if (field.pos.length === 1) {
                let idx = field.pos[0];
                field.idx = idx;

                departureFields.filter(field => field.pos.includes(idx))
                    .forEach(field => field.pos.splice(field.pos.indexOf(idx), 1));
            }
        }
    }

    departureFields.filter(field => field.fieldName.startsWith('departure')).forEach(field => {
        total *= yourTicket[field.idx];
    })

    return total;
};

module.exports = { day16, day16_2 };
