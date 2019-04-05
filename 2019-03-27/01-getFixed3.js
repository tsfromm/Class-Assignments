// Given coordinate as number,
// return as string with 3 digits after point.
const getFixed3 = coordinate => coordinate.toFixed(3);

const examples = [   //Lines 6-9 between these brackets will result in the calculations shown in the console log.
  1 / 2,             
  1 / 4,
  7 / 8,
  29 / 63,
];

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];
  console.log(getFixed3(example), example);
}
/*
Result in console log:
0.500 0.5
0.250 0.25
0.875 0.875
0.460 0.4603174603174603 
*/