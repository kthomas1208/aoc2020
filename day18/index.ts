/** DAY 18 **/

const day18 = function (input: string[], part1: boolean = true): number {

    let total = 0;
    for (let line of input) {
        const stack: string[] = [];
        const innerStack: string[] = [];

        let equation = line.replace(/\s/g, '').split('');

        for (let c of equation) {
            if (c === ')') {
                //pop off til you get to (
                while (stack[stack.length - 1] !== '(') {
                    innerStack.unshift(stack.pop());
                }

                // pop off the (
                stack.pop();

                //evaluate expression and add it back to the stack
                let exp = part1 ? evaluateExpression(innerStack).toString() : evaluateExpressionAdvanced(innerStack).toString();
                stack.push(exp);
                continue;
            }
            stack.push(c);
        }

        total += part1 ? evaluateExpression(stack) : evaluateExpressionAdvanced(stack);
    }

    return total;
}

const evaluateExpression = function (expression: string[]): number {

    let total = Number(expression.shift());
    while (expression.length) {
        let x = expression.shift();
        if (x === '+') {
            total += Number(expression.shift());
        } else if (x === '*') {
            total *= Number(expression.shift());
        }
    }

    return total;
}

const evaluateExpressionAdvanced = function (expression: string[]): number {

    let stack: string[] = [];
    let total = 1;
    stack.push(expression.shift());
    while (expression.length) {
        let x = expression.shift();
        if (x === '+') {
            let add1 = Number(stack.pop());
            let add2 = Number(expression.shift());
            stack.push((add1 + add2).toString());
        } else {
            stack.push(expression.shift());
        }
    }

    stack.filter(x => x !== '*').map(x => total *= Number(x));

    return total;
}

const day18_2 = function (input: string[]): number {

    return day18(input, false);
}

module.exports = { day18, day18_2 };
