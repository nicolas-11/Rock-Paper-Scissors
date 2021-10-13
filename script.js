let playerSelection = prompt("Please select one: Rock // Paper // Scissors");
let playerChoice = playerSelection.toLowerCase();
console.log(playerChoice);


let computerSelection = Math.floor(Math.random()* 3);    
    if (computerSelection === 1){
        computerSelection = "rock";
    }else if(computerSelection === 2){
        computerSelection = "paper";
    } else{
        computerSelection = "scissors";
    }
    console.log(computerSelection);

function playRound(){
    if(playerChoice === computerSelection){
        return "It is a TIE";
    }
    if (playerChoice === "rock"){
        if(computerSelection === "scissors"){
            return "You Win";
        } else {
            return "Computer Wins";
        }
    }
    if(playerChoice === "paper"){
        if(computerSelection === "scissors"){
            return "Computer Wins"
        } else{
            return "You Wins"
        }
    }if(playerChoice === "scissors"){
        if(computerSelection === "rock"){
            return "Computers Wins"
        } else{
            return "You Win"
        }
    }
}
