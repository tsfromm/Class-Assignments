var hands =["rock","paper","scissors"];
function getHand() {
        return hands[parseInt(Math.random()*10)%3]
    }     
    var player1 = {
        name: "You",
        hand: "",
        score: 0   
    };
    var player2 = {
        name: "Dolores",
        hand: getHand(),
        score: 0   
    };
    function player1choice () {
        player1.hand = prompt("Choose rock paper or scissors");
    }  

    document.getElementById("gameButton") //Play Game Button
    .addEventListener ("click",function(){playRound(player1, player2)})
    
    function playRound(player1, player2) {
        player1choice(), player2.hand = getHand();
        
        if (player1.hand === "rock" && player2.hand === "scissors" || player1.hand === "scissors" && player2.hand === "paper" || player1.hand === "paper" && player2.hand === "rock") 
                    {
                console.log(player1.name+" played "+ player1.hand+" and Dolores played "+ player2.hand+" ...User wins this round! ")
                return player1.score++,
                console.log("User-",player1.score,"Dolores-",player2.score),
                document.getElementById("round").innerHTML="You played "+ player1.hand+" and Dolores played "+ player2.hand+" ...You win this round! You-"+player1.score+" Dolores-"+player2.score;
                    }

        else if (player2.hand === "rock" && player1.hand === "scissors" || player2.hand === "scissors" && player1.hand === "paper" || player2.hand === "paper" && player1.hand === "rock") 
                    {
                console.log(player1.name+" played "+ player1.hand+" and "+player2.name+" played "+ player2.hand+ " ...Dolores wins this round! ")
                return player2.score++,
                console.log("User-",player1.score,"Dolores-",player2.score),
                document.getElementById("round").innerHTML="You played "+ player1.hand+" and Dolores played "+ player2.hand+" ...Dolores wins this round! You-"+player1.score+" Dolores-"+player2.score;
                } //end else if

        else (player1.hand === "rock" && player2.hand === "rock" || player1.hand === "scissors" && player2.hand === "scissors" || player1.hand === "paper" && player2.hand === "paper")
            {console.log(player1.name+" played "+ player1.hand+" and "+player2.name+" played "+ player2.hand+" ...It's a tie!"),
            document.getElementById("round").innerHTML="You played "+ player1.hand+" and Dolores played "+ player2.hand+" ...It's a tie! You-"+player1.score+" Dolores-"+player2.score;
            } //end else
} //end playRound