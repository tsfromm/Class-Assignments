const n = prompt('positive integer number');

let sum = 0;

for (let i = 1; i <= n; i += 1) {
  
  sum+= Math.pow(i,2);
}; 

console.log(`${sum} is sum of squares of integers up to and including ${n}`);
//when n=2, sum=5; 1^2 + 2^2 = 5
//                    1+4=5
//when n=3, sum=14; 1^2 + 2^2 + 3^2 =14
//                    1+4+9=14
//when n=4, sum=30; 1^2 + 2^2 + 3^2 + 4^2 =30
//                    1+4+9+16=30
