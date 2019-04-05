const ABSOLUTE_ZERO_C = -273.15;

const temperatureC = prompt('temperature in Celsius');

const temperatureK = temperatureC - ABSOLUTE_ZERO_C;

const output = temperatureC + ' °C is equal to ' + temperatureK + ' K';


console.log(output);
/* When 'b' + 'a' + +'a' + 'a' is typed into the console log of the html page,
the resulting console log line reads " baNaNa ". This is because in string
concatenation, you can't combine strings of words and numbers the same way you can add numbers.

When I type 6 in the prompt box the console reads "6 °C is equal to 279.15 K"
Then I type 'b' + 'a' + +'a' + 'a' 
The console log reads baNaNa
                              

*/
