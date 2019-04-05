//set constant Freezing_F to 32
const FREEZING_F = 32;

//set temperatureC to display prompt that says "temperature in Celsius"
//in this prompt, type in value =temp
const temperatureC = prompt('temperature in Celsius');

//set constant temperatureF to = (degrees in celsius *1.8  +32). This displays in console log.
const temperatureF = FREEZING_F + temperatureC * 1.8;
console.log(temperatureF);

//suggested input value to test: 6 (this being the degrees in Celsius)
//Tested: typed 6 in input text box and console log read 42.8
// 42.8 = 6(1.8) +32
//10.8 = 6(1.8)
//10.8 =10.8 so calulations are correct.

