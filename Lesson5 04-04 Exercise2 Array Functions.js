var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2} 
];

/*
Find a player with the name 'Mike'
- Get an array of all players with position 'RB'
- Get an array of all the players lastNames
- Get an array of the full names of all the runningbacks with more than 5 touchdowns
- Get the number of touchdowns scored by Runningbacks
*/
var findMike = players.find(function(players) {
    return players.firstName = 'Mike'   
});

var filterPositionRB = players.filter(function(players){
	return players.position === 'RB';
});

var lastNames = players.map(function(players){
	return players.lastName;
});

var filteredRunningbacks = filterPositionRB.filter(function(filterPositionRB){
	return filterPositionRB.touchdowns > 5; 
});	
/*SIMPLER ANSWER: to get array of ...5 touchdowns: const fullNamesRB = players.filter(function(players) {
															return players.touchdowns >5 && players.position ==='RB';
															}
															).map(function(players){
																return players.firstName+' '+players.lastName;
															}) 
	*/


var fullNamesRB = filteredRunningbacks.map(function(filteredRunningbacks){
    return filteredRunningbacks.firstName+' '+filteredRunningbacks.lastName
});

var totalTouchdowns = filterPositionRB.reduce(function(sum,filterPositionRB){
    return sum + filterPositionRB.touchdowns
}, 0
);

console.log(findMike);
console.log(filterPositionRB);
console.log(lastNames);
//console.log(filteredRunningbacks);
console.log(fullNamesRB);
console.log(totalTouchdowns);