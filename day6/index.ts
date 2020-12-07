/** DAY 6 **/

const day6 = function (input: string[]) {

    let answerCount = 0;
    for (let group of input) {
        let answerSet = new Set();
        let answers = group.match(/([a-z]){1}/g);
        answers.forEach(x => answerSet.add(x));
        answerCount += answerSet.size;
    }

    return answerCount;
}

const day6_2 = function (input: string[]) {
    let answerCount = 0;
    for (let group of input) {
        let answerMap = new Map();
        let answers = group.split('\n');
        const numberOfPeople = answers.length;

        answers.forEach(x => {
            let answer = x.match(/([a-z]){1}/g);
            answer.forEach(letter =>
                answerMap.set(letter, answerMap.get(letter) + 1 || 1)
            );
        });

        Array.from(answerMap.values())
            .forEach(count => {
                if (count === numberOfPeople)
                    answerCount++
            });
    }

    return answerCount;
}

module.exports = { day6, day6_2 };
