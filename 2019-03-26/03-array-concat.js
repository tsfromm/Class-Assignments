const clubs = ['10♣', '9♣'];

console.log(clubs);

const clubs2 = clubs.concat('5♣', '2♣');   
//const clubs1 = clubs.concat(['5♣', '2♣']);  
clubs.push(['5♣', '2♣']);

console.log(clubs);

console.log(clubs2);
//console.log(clubs1);
console.log(clubs === clubs2);


/*
Result of original code:

[ '10♣', '9♣' ]                   
[ '10♣', '9♣' ]                   
[ '10♣', '9♣', '5♣', '2♣' ]       
[ '10♣', '9♣', '5♣', '2♣' ]       
false                             

*/

//add // at beginning of const clubs1 = clubs.concat(['5♣', '2♣']);
//paste a new line following it clubs.push(['5♣', '2♣']);

/*
Result of change in code:
[ '10♣', '9♣' ]
[ '10♣', '9♣', [ '5♣', '2♣' ] ]      This pushes ['5','2'] as an entire unit into the clubs array
[ '10♣', '9♣', '5♣', '2♣' ]          Whereas this adds the values only into the club array seamlessly
false



Suggest how .push(['5♣', '2♣']) differs from .concat(['5♣', '2♣'])
Explain why I asked you to paste new line after instead of before assignment to clubs2
*/