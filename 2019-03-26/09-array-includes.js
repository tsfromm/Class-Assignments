const cards = ['A♥', '7♥', '6♥', '10♣', '9♣', '5♣', '2♣', 'J♠', '9♠', '8♠', '7♠', '5♠', '2♠'];

const options = process.argv.slice(2); 
//const options = process.argv[2];      

/*
process.argv == [node, filename.js, a, b, c]
therefore,
process.argv.slice(2) == a, b, c
process.argv[2] == a
*/

console.log(cards);
console.log(options);

/*
In terminal, typed: node 09-array-includes.js 7♥

Results in:
[ 'A♥',
  '7♥',
  '6♥',
  '10♣',
  '9♣',
  '5♣',
  '2♣',
  'J♠',
  '9♠',
  '8♠',
  '7♠',
  '5♠',
  '2♠' ]
[ '7♥' ]

*/
