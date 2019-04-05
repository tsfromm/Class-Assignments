const hearts = ['A♥', '7♥', '6♥'];
const diamonds = [];
const clubs = ['10♣', '9♣', '5♣', '2♣'];
const spades = ['J♠', '9♠', '8♠', '7♠', '5♠', '2♠'];

const cards = [...hearts, ...diamonds, ...clubs, ...spades];

console.log(hearts.length, hearts);
console.log(diamonds.length, diamonds);
console.log(clubs.length, clubs);
console.log(spades.length, spades);
console.log(cards.length, cards);

/*
Result:
3 [ 'A♥', '7♥', '6♥' ]
0 []
4 [ '10♣', '9♣', '5♣', '2♣' ]
6 [ 'J♠', '9♠', '8♠', '7♠', '5♠', '2♠' ]
13 [ 'A♥',
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
*/