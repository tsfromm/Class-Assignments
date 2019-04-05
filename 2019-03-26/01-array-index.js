const fibonacci = [0, 1];

for (let i = fibonacci.length; i < 8; i += 1) {
 // fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  console.log(fibonacci[i] / fibonacci[i - 1]); // computed ratio
}

console.log((1 + Math.sqrt(5)) / 2); // golden ratio

console.log(fibonacci);

/*
Original result in console:
1
2
1.5
1.6666666666666667
1.6
1.625
1.618033988749895
[ 0, 1, 1, 2, 3, 5, 8, 13 ]

After replacing with push code:
1
2
1.5
1.6666666666666667
1.6
1.625
1.618033988749895
[ 0, 1, 1, 2, 3, 5, 8, 13 ]

Same results!



*/
