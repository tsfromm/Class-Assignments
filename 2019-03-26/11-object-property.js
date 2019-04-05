const pointsJ = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y:  7 /  8 },
  { x: 1 / 4, y:  7 /  8 },
];
console.log(pointsJ);

console.log(pointsJ.defineProperty());



//var pointsJString = pointsJ.toString();
//console.log(pointsJString);

//const keys = Object.keys(pointsJString);

//keys.forEach((key, i) => {
  //console.log(key.length.toPrecision(3));
  //console.log(i, key, pointsJString[key]);
//});



//const points = pointsFormattedJ.toString().join();
//console.log(points);


/*

points ------> [object Object] [object Object] [object Object]

pointsFormattedJ--------> 
[ { x: 0.5, y: 0.46 },
  { x: 0.5, y: 0.875 },
  { x: 0.25, y: 0.875 } ]

  pointsJ---------->
[ { x: 0.5, y: 0.4603174603174603 },
  { x: 0.5, y: 0.875 },
  { x: 0.25, y: 0.875 } ]

*/