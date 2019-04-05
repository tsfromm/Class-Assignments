const FREEZING_F = 32;

const temperatureF = prompt('temperature in Fahrenheit');

const temperatureC = (temperatureF - FREEZING_F) / 1.8;

console.log(`${temperatureF} °F is approximately equal to ${temperatureC} °C`);
console.log(`${temperatureF} °F is approximately equal to ${temperatureC.toFixed(3)} °C`);
console.log(`${temperatureF} °F is approximately equal to ${temperatureC.toFixed(2)} °C`);
console.log(`${temperatureF} °F is approximately equal to ${temperatureC.toFixed(1)} °C`);
console.log(`${temperatureF} °F is approximately equal to ${temperatureC.toFixed(0)} °C`);

/*I type 6 in input text box. Console log reads

6 °F is approximately equal to -14.444444444444445 °C
08-toFixed.js:8 6 °F is approximately equal to -14.444 °C
08-toFixed.js:9 6 °F is approximately equal to -14.44 °C
08-toFixed.js:10 6 °F is approximately equal to -14.4 °C
08-toFixed.js:11 6 °F is approximately equal to -14 °C
*/