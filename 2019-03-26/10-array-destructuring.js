const cards = ['A♥', '7♥', '6♥', '10♣', '9♣', '5♣', '2♣', 'J♠', '9♠', '8♠', '7♠', '5♠', '2♠'];

const [firstCard, restCards] = [cards[0], cards.slice([1])];

console.log(firstCard); // A♥
console.log(restCards); // ['7♥', '6♥', '10♣', '9♣', '5♣', '2♣', 'J♠', '9♠', '8♠', '7♠', '5♠', '2♠']
