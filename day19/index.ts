/** DAY 19 **/

const day19 = function (input: string[]): number {

    let totalMatch = 0;
    let ruleMap = new Map<string, string>();

    // parse rules into Map
    let rules = input[0].split('\n');
    for (let rule of rules) {
        ruleMap.set(rule.split(': ')[0], rule.split(': ')[1]);
    }

    // Run rules to create regex expression
    let res = runRules('0', ruleMap);
    var regex = new RegExp(`\\b${res}\\b`, 'g');

    // iterate through received messages and see if
    // they match the regex
    let receivedMessages = input[1].split('\n');
    for (let message of receivedMessages) {
        if (message.match(regex)) totalMatch++;
    }

    return totalMatch;
}

const runRules = function (ruleNum: string, ruleMap: Map<string, string>) {
    let rule = ruleMap.get(ruleNum);
    if (rule.includes('|')) {
        let possibleString = '(';
        for (let r of rule.split(' | ')[0].split(' ')) {
            possibleString += runRules(r, ruleMap);
        }
        possibleString += '|';
        for (let r of rule.split(' | ')[1].split(' ')) {
            possibleString += runRules(r, ruleMap);
        }
        return possibleString += ')';
    } else if (rule.includes("\"")) {
        return rule.match(/[ab]/g)[0];
    } else {
        let possibleString = '';
        for (let r of rule.split(' ')) {
            possibleString += runRules(r, ruleMap);
        }
        return possibleString;
    }
}

const day19_2 = function (input: string[]): number {

    return -1;
}

module.exports = { day19, day19_2 };
