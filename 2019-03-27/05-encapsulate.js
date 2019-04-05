// Given coordinate and nDigits as numbers,
// return coordinate as string whichever is shorter:
// with specific number of digits after point
// with default number of digits after point
const getFixed = (coordinate, nDigits) => {
const gotFixed = coordinate.toFixed(nDigits); 
const gotString = coordinate.toString();   
return gotFixed.length < gotString.length         
? gotFixed
: gotString
          
};

const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
];

const n = 3;

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];
  console.log(getFixed(example,n), example);                           
}
/*
Result of original code before editing:
undefined 0.5
undefined 0.25
undefined 0.875
undefined 0.4603174603174603
*/