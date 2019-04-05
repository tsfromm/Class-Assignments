const FREEZING_F = 32;
const ABSOLUTE_ZERO_C = -273.15;

const input = prompt('temperature in C or K or F');

const unitInput = input.slice(-1);
const temperature = parseFloat(input.slice(0, -1));

                    

let temperatureC = temperature;                             //Master Branch statement goal: "convert from any temperature unit to Celsius"
switch (unitInput) {                                        //first switch
  case 'K':                                                 //if K is the input unit
    temperatureC = temperature + ABSOLUTE_ZERO_C;           //conversion equation for K to C
    break;                                                  // switch is done

  case 'F':                                                 //if F is the input unit
    temperatureC = (temperature - FREEZING_F) / 1.8;        //conversion equation for F to C
    break;                                                  // switch is done
}
console.log(temperature+ '°' +unitInput+ ' is equal to ' +temperatureC +'°C'); //result statement for switch 1

const unitOutput = prompt('convert to unit C or K or F');

let temperatureOutput = temperatureC;                        //convert from Celsius to any unit of K or F or C
switch (unitOutput) {                                        //second switch
  case 'K':                                                  //if K is the input unit           
    temperatureOutput = temperatureC - ABSOLUTE_ZERO_C;      //conversion equation from C to K
    break;                                                   // switch is done
  case 'F':                                                  //if F is the input unit
    temperatureOutput = FREEZING_F + temperatureC * 1.8;     //conversion equation from C to F
    break;                                                   // switch is done
  case 'C':                                                  //if C is the input unit
    temperatureOutput = temperatureC + unitOutput;           //maintain value
    break;                                                   //switch is done
}

console.log(temperatureC+'°C is equal to '+temperatureOutput+'°'+unitOutput);  //result of switch 2

/*In original Master code, I typed in first input box: 32F then in second input box F:
Results in console were as follows:
32"F"
32 °F is equal to 0 °C
Console did not compute a conversion to C or otherwise in first switch as suggested.

Made edits shown above.
Typed in: 32F, then K
Results:

32°F is equal to 0°C
0°C is equal to 273.15°K
*/