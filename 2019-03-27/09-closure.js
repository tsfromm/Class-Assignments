// Given configuration for noun,
// return function which given number,
// returns phrase for that number of the noun.
const getPluralizer = noun => noun.plural
  ? number => `${number} ${number === 1 ? noun.singular : noun.plural}`
  : number => `${number} ${noun.singular}${number === 1 ? '' : noun.suffix}`;

const pluralizeThing = getPluralizer({
  singular: 'thing',
  suffix: 's',
});
console.log(pluralizeThing(1));   //1 thing
console.log(pluralizeThing(0));   //0 things
console.log(pluralizeThing(2));   //2 things

const pluralizeSheep = getPluralizer({
  singular: 'sheep',
  suffix: '',
});
console.log(pluralizeSheep(1));  //1 sheep
console.log(pluralizeSheep(3));  //3 sheep

const pluralizeOx = getPluralizer({
  singular: 'ox',
  suffix: 'en',
});
console.log(pluralizeOx(1));
console.log(pluralizeOx(2));

const pluralizeInch = getPluralizer({
  singular: 'inch',
  suffix: 'es',
});
console.log(pluralizeInch(1.0));
console.log(pluralizeInch(1.5));

const pluralizeGoose = getPluralizer({
  singular: 'goose',
  plural: 'geese',
});
console.log(pluralizeGoose(1));      //1 goose
console.log(pluralizeGoose(6));      //6 geese

/*
Results in console log:
1 thing
0 things
2 things
1 sheep
3 sheep
1 ox
2 oxen
1 inch
1.5 inches
1 goose
6 geese
*/