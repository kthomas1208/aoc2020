import { day13, day13_2 } from "./index.ts";

const finalInput =
  `1011416
41,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,911,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,x,x,x,x,23,x,x,x,x,x,29,x,827,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19`;

const testInput =
  `939
7,13,x,x,59,x,31,19`;

const testInput2 =
  `939
17,x,13,19`;

const testInput3 =
  `939
67,7,59,61`;

const testInput4 =
  `939
67,x,7,59,61`;

const testInput5 =
  `939
67,7,x,59,61`;

const testInput6 =
  `939
1789,37,47,1889`;

/** PART 1 --------------------------------------------*/
// test("1.1 - should return value", () => {
//   let result = day13(testInput.split('\n'));
//   expect(result).toBe(295);
// });

// test("1.2 - should return value", () => {
//   let result = day13(finalInput.split('\n'));
//   expect(result).toBe(4135);
// });

/** PART 2 --------------------------------------------*/
test("2.1 - should return value", () => {
  let result = day13_2(testInput.split('\n')[1]);
  expect(result).toBe(1068781);
});

test("2.2 - should return value", () => {
  let result = day13_2(testInput2.split('\n')[1]);
  expect(result).toBe(3417);
});

test("2.3 - should return value", () => {
  let result = day13_2(testInput3.split('\n')[1]);
  expect(result).toBe(754018);
});

test("2.4 - should return value", () => {
  let result = day13_2(testInput4.split('\n')[1]);
  expect(result).toBe(779210);
});

test("2.5 - should return value", () => {
  let result = day13_2(testInput5.split('\n')[1]);
  expect(result).toBe(1261476);
});

test("2.6 - should return value", () => {
  let result = day13_2(testInput6.split('\n')[1]);
  expect(result).toBe(1202161486);
});

test("2.Final - should return value", () => {
  let result = day13_2(finalInput.split('\n')[1]);
  expect(result).toBe(640856202464541);
});