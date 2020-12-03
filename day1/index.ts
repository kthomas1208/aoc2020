/** DAY 1 **/

const day1 = function(input: number[], sum: number) {
  let subMap = new Set();
  for(let i of input) {
    let temp = sum - i;
    if(subMap.has(temp)) {
      return i*temp;
    } else {
      subMap.add(i);
    }
  }
}

const day1_2 = function(input: number[], sum: number) {
  for(let i = 0; i < input.length; i++) {
    for(let j = 1; j < input.length; j++) {
      for(let k = 2; k < input.length; k++) {
        if(input[i] + input[j] + input[k] == sum)
          return input[i]*input[j]*input[k];
      }
    }
  }
}

module.exports = { day1, day1_2 };
