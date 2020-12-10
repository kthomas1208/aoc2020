import { day10, day10_2 } from "./index.ts";

const finalInput =
  `99
3
1
11
48
113
131
43
82
19
4
153
105
52
56
109
27
119
147
31
34
13
129
17
61
10
29
24
12
104
152
103
80
116
79
73
21
133
44
18
74
112
136
30
146
100
39
130
91
124
70
115
81
28
151
2
122
87
143
62
7
126
95
75
20
123
63
125
53
45
141
14
67
69
60
114
57
142
150
42
78
132
66
88
140
139
106
38
85
37
51
94
98
86
68`;

const testInput =
  `16
10
15
5
1
11
7
19
6
12
4`;

const testInput2 =
  `28
  33
  18
  42
  31
  14
  46
  20
  48
  47
  24
  23
  49
  45
  19
  38
  39
  11
  1
  32
  25
  35
  8
  17
  7
  9
  4
  2
  34
  10
  3`;

/** PART 1 --------------------------------------------*/
test("1.1 - should return value", () => {
  let result = day10(testInput.split('\n'));
  expect(result).toBe(35);
});

test("1.1 - should return value", () => {
  let result = day10(testInput2.split('\n'));
  expect(result).toBe(220);
});

test("1.2 - should return value", () => {
  let result = day10(finalInput.split('\n'));
  expect(result).toBe(1980);
});

/** PART 2 --------------------------------------------*/
test("2.1 - should return value", () => {
  let result = day10_2(testInput.split('\n'));
  expect(result).toBe(8);
});

test("2.1 - should return value", () => {
  let result = day10_2(testInput2.split('\n'));
  expect(result).toBe(19208);
});

test("2.2 - should return value", () => {
  let result = day10_2(finalInput.split('\n'));
  expect(result).toBe(4628074479616);
});