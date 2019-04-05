const pointsJ = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y:  7 /  8 },
  { x: 1 / 4, y:  7 /  8 },
];

const pointsFormattedJ = [];
for (let i = 0; i < pointsJ.length; i += 1) {
   var [x, y] = pointsJ;
  const xToString = pointsJ.toString(x);
  const yToString = pointsJ.toString(y);


  const xToFixed3 = TODO;
  const yToFixed3 = TODO;

  
  const xShorter //the shorter string xToString or xToFixed3
  const yShorter //the shorter string yToString or yToFixed3

  pointsFormattedJ[i] = `${xShorter},${yShorter}`;
}

const points = pointsFormattedJ.join(' ');
console.log(points);
