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
    function player1choice() {
        player1.hand = prompt("Choose rock paper or scissors");
    }  

    document.getElementById("gameButton") //Play Game Button
    .addEventListener("click",function(){playRound(player1, player2)})
    
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
//******Doesn't work below, so green comments */         
  //function clearScores()  {
        //player1.score = 0
        //player2.score = 0
        //document.getElementById("game").innerHTML= "Your score is ", player1.score;
        //document.getElementById("game").innerHTML= "Dolores' score is ", player2.score;
        //document.getElementById("game").innerHTML= "It doesn't look like anything to me... End of game. Play again."
    //}
    //if (player1.score === 3) {
        //window.alert("You win!!!")
        //clearScores()
       // } //end if
   // else if (player2.score === 3) {
       // window.alert(player2.name+" wins the game. The maze wasn't meant for you.")
      //  clearScores()
      //  }  //end else if