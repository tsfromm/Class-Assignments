// Given number and configuration object for noun,
// return phrase for that number of the noun.
//Adapt the template literal and ternary expression in the previous file.
const pluralize = (number, configuration) => configuration.plural
  ? `${number} ${number === 1 ? configuration.singular : configuration.plural}`
  : `${number} ${configuration.singular}${number === 1 ? '' : configuration.suffix}`;
  

const thing = {
  singular: 'thing',
  suffix: 's',
};
console.log(pluralize(1, thing));
console.log(pluralize(0, thing));
console.log(pluralize(2, thing));

const sheep = {
  singular: 'sheep',
  suffix: '',
};
console.log(pluralize(1, sheep));
console.log(pluralize(3, sheep));

const ox = {
  singular: 'ox',
  suffix: 'en',
};
console.log(pluralize(1, ox));
console.log(pluralize(2, ox));

const inch = {
  singular: 'inch',
  suffix: 'es',
};
console.log(pluralize(1.0, inch));
console.log(pluralize(1.5, inch));

const goose = {
  singular: 'goose',
  plural: 'geese',
};
console.log(pluralize(1, goose));
console.log(pluralize(6, goose));

/*
Result in console log:
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