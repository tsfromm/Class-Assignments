var hands =["rock","paper","scissors"];
    function getHand() {
        return hands[parseInt(Math.random()*10)%3]
    }
    var player1 = {
        name: "Karl",
        hand: getHand(),
        score: 0   
    };
    var player2 = {
        name: "Delilah",
        hand: getHand(),
        score: 0   
    };
 
    function playRound(player1, player2) {
                    player1.hand = getHand(), player2.hand = getHand()
        if (player1.hand === "rock" && player2.hand === "scissors" || player1.hand === "scissors" && player2.hand === "paper" || player1.hand === "paper" && player2.hand === "rock") 
                    {
                console.log("Karl played "+ player1.hand+" and Delilah played "+ player2.hand+" ...Karl wins this round! ")
                return player1.score++,
                console.log("Karl-",player1.score,"Delilah-",player2.score);
                    }
        else if (player2.hand === "rock" && player1.hand === "scissors" || player2.hand === "scissors" && player1.hand === "paper" || player2.hand === "paper" && player1.hand === "rock") 
                    {
                console.log(player1.name+" played "+ player1.hand+" and "+player2.name+" played "+ player2.hand+ " ...Delilah wins this round! ")
                return player2.score++,
                console.log("Karl-",player1.score,"Delilah-",player2.score);
                } //end else if

        else (player1.hand === "rock" && player2.hand === "rock" || player1.hand === "scissors" && player2.hand === "scissors" || player1.hand === "paper" && player2.hand === "paper")
            {console.log(player1.name+" played "+ player1.hand+" and "+player2.name+" played "+ player2.hand+" ...It's a tie!")
            } //end else

        } //end playRound

function playGame (player1, player2, playUntil) {
    while (player1.score<playUntil && player2.score<playUntil){
        playRound(player1, player2);
    } //end while
    if (player1.score === playUntil) {
        return player1.name+" WINS THE GAME!"
        } //end if
    else if (player2.score === playUntil) {
        return player2.name+" WINS THE GAME!"
        
        }  //end else if
       
} //end playGame

playGame(player1, player2, 5);


