const names = [
  'Jeff',
  'Jimmy',
  'Danica',
  'Dale, Jr.',
];
var outputString = names.join(', ');
console.log(outputString);

var splitString = outputString.split(',');
console.log(splitString);

/*Result is
Jeff, Jimmy, Danica, Dale, Jr.
[ 'Jeff', ' Jimmy', ' Danica', ' Dale', ' Jr.' ]

Problem with this is that it counts "Dale, Jr." as 2 items instead of 1.
*/

const seasons = [
  'autumn',
  'winter',
  'summer',
  'spring',
];
var joinedString = seasons.join(', ');
console.log(joinedString);

var splitSeasons = joinedString.split(',');
console.log(splitSeasons);                      //this works better because each item does not have a comma within it

/*Result:
autumn, winter, summer, spring
[ 'autumn', ' winter', ' summer', ' spring' ]
*/


