import { day17, day17_2 } from "./index.ts";

const finalInput =
  `#.......
.#..#..#
....#.#.
.##..#.#
#######.
#...####
###.##..
.##.#.#.`;
const testInput =
  `.#.
..#
###`;

/** PART 1 --------------------------------------------*/
// test("1.1 - should return value", () => {
//   let result = day17(testInput.split('\n'));
//   expect(result).toBe(112);
// });

// test("1.Final - should return value", () => {
//   let result = day17(finalInput.split('\n'));
//   expect(result).toBe(218);
// });

/** PART 2 --------------------------------------------*/
test("2.1 - should return value", () => {
  let result = day17_2(testInput.split('\n'));
  expect(result).toBe(848);
});

// test("2.Final - should return value", () => {
//   let result = day17_2(finalInput.split('\n'));
//   expect(result).toBe(0);
// });