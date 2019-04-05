// Given coordinate and nDigits as numbers,
// return coordinate as string with specific number of digits after point.
const getFixed = (coordinate, nDigits) => coordinate.toFixed(nDigits);

const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
  1 /3,
];

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];
  console.log(getFixed(example, 2), example);
}
/*
Results for original code:
0.500 0.5
0.250 0.25
0.875 0.875
0.460 0.4603174603174603

Expected output if you change second argument of function call:
4 = 0.5000
  = 0.2500
  = 0.8750
  = 0.4603

2 = 0.50
  = 0.25
  = 0.88
  = 0.46

1 = 0.5
  = 0.3
  = 0.9
  = 0.5
*/