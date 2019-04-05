    /*Use a while loop to run the game until one player has 3 wins
    Use the following code to randomly select a weapon
    var weapons = ["rock", "paper", "scissors"];
    var weaponOfChoice = weapons[Math.floor(Math.random() * weapons.length)];
    Output each players hand to the console
    Use an if or switch statement to determine a winner of the round
    Output the round winner's name to the console
    Create a way to track how many rounds each player has won
    When one player wins 3 rounds, announce that player's name as the game winner
    */

var weapons = ["rock", "paper", "scissors"];
var players = ["Karl","Delilah"];
var karlWins= 0;
var delilahWins= 0;
var karlWeapon= "";
var delilahWeapon= "";

for (let i=0; i<20; i++) {

    var karlWeapon=weapons[Math.floor(Math.random() * weapons.length)];
    var delilahWeapon=weapons[Math.floor(Math.random() * weapons.length)];

    if (karlWeapon === "rock" && delilahWeapon === "scissors" || karlWeapon === "scissors" && delilahWeapon === "paper") {
        console.log("Karl chose",karlWeapon,"and Delilah chose",delilahWeapon);
        console.log("Karl wins this round!");
        karlwins ++;
        console.log("Karl-",karlWins,"Delilah-",delilahWins);
    }
    else if (delilahWeapon === "rock" && karlWeapon === "scissors" || delilahWeapon === "scissors" && karlWeapon === "paper") {
        console.log("Karl chose",karlWeapon,"and Delilah chose",delilahWeapon);
        console.log("Delilah wins this round!")
        delilahWins ++;
        console.log("Karl-",karlWins,"Delilah-",delilahWins);
    }
    else {
        console.log("Karl chose",karlWeapon,"and Delilah chose",delilahWeapon);
        console.log("It's a tie!");
    }
    if (karlWins>2) {
        console.log("KARL WINS THE GAME!");
        break;}
    else if(delilahWins>2) {
        console.log("DELILAH WINS THE GAME!")
    }
    } //end for statement

