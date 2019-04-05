const cards = ['10♣', '5♠', '9♣', 'A♥', '2♠', '9♠', '7♥', '5♣', '8♠', '2♣', '6♥', '7♠', 'J♠'];

const index = Math.floor(Math.random() * cards.length);

//console.log(index);
//console.log(cards.slice(0, index));
//console.log(cards.slice(index));
//console.log(cards);

const deck = (cards.slice(7,13))
console.log (deck.concat(cards.slice(0,7)))

/*
Original result: 
2
[ '10♣', '5♠' ]
[ '9♣', 'A♥', '2♠', '9♠', '7♥', '5♣', '8♠', '2♣', '6♥', '7♠', 'J♠' ]
[ '10♣',
  '5♠',
  '9♣',
  'A♥',
  '2♠',
  '9♠',
  '7♥',
  '5♣',
  '8♠',
  '2♣',
  '6♥',
  '7♠',
  'J♠' ]

  Result of new code:
[ '5♣',
  '8♠',
  '2♣',
  '6♥',
  '7♠',
  'J♠',
  '10♣',
  '5♠',
  '9♣',
  'A♥',
  '2♠',
  '9♠',
  '7♥' ]

*/
