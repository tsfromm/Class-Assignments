// Given number, singular noun stem, and plural suffix,
// return phrase for that number of the noun.
const pluralize = (number, stem, suffix = 's') =>
  `${number} ${stem}${number === 1 ? '' : suffix}`;

console.log(pluralize(1, 'thing', 's')); // function call has all arguments
console.log(pluralize(0, 'thing')); // default suffix for omitted argument
console.log(pluralize(2, 'thing', undefined)); // explicit undefined argument
console.log(pluralize(3, 'sheep', '')); // suffix is empty string
console.log(pluralize(2, 'ox', 'en')); // suffix is non-empty string
console.log(pluralize(1.5, 'inch', 'es')); // number is non-integer

/*
Result in console log:
1 thing
0 things
2 things
3 sheep
2 oxen
1.5 inches

This would not be able to compute cactus to cacti.
*/