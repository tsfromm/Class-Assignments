const n = prompt('positive integer number');

let sum = 0;

// Compute the sum of integers up to and including n
for (let i = 1; i <= n; i += 1) {
  sum += i;
}

console.log(`${sum} is sum of integers up to and including ${n}`);

/*I typed a value of 6 in the prompt.
The console log read: 21 is sum of squares of integers up to and including 6
As per the math above
n=6
sum begins at zero.
i=1
1<=6
1+2+3+4+5+6=21 and is the sum of integers up to and including 6
*/