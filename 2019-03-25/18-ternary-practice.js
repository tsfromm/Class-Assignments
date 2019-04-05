const input = prompt('length in cm or mm');

const unit = input.slice(-2);
const length = parseFloat(input.slice(0, -2));

console.log(length, unit);

const lengthMeter = unit === 'cm' ? length/100 : length/1000;

console.log(`${length}${unit} is equal to ${lengthMeter}m`);