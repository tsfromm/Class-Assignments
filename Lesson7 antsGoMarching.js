var littleOne = [0,1,2,3,4,5,6,7,8,9]
		littleOne[0] = "The little one stops to suck her thumb";
		littleOne[1] = "The little one stops to tie his shoe";
		littleOne[2] = "The little one stops to climb a tree";
		littleOne[3] = "The little one stops to shut the door";
		littleOne[4] = "The little one stops to take a dive";
		littleOne[5] = "The little one stops to pick up sticks";
		littleOne[6] = "The little one stops to pray to heaven";
		littleOne[7] = "The little one stops to roll a skate";
		littleOne[8] = "The little one stops to check the time";
		littleOne[9] = "The little one stops to shut The End";

var howTheyMarch = ["one by one", "two by two", "three by three", "four by four", "five by five", "six by six", "seven by seven", "eight by eight", "nine by nine", "ten by ten"];

function theAntsGoMarching(){ //define function
		howManyByHowMany();  //execute	
	}

theAntsGoMarching(); //execute

function howManyByHowMany(){ //define function
	for (i = 0; i < howTheyMarch.length; i++){
	var numbers = howTheyMarch[i]
	var hurrah = " hurrah, hurrah \n";
	var march = "The ants go marching " + numbers;
  //debugger
	console.log(march + hurrah + march + hurrah + march +"\n"+littleOne[i]);
	console.log("And they all go marching down to the ground to get out of the rain, BOOM! BOOM! BOOM!\n");
}}