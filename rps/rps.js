//Array for R P S choices

const rps = ["rock", "paper", "scissors"];

//variables to hold scores

let playerScore = 0;

let computerScore = 0;
                    
function game() {

//loop

for (let i = 0; i < 10; i++) {

//Choosing a random value from the Array    

let computerSelection = rps[Math.floor(Math.random()*rps.length)]; 

//prompt for player choice, forcing it into lowercase to allow for case insensitivity

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();       

//function to play the round using CPU  vs Player variables

 function playRound(playerSelection, computerSelection) {


    if(playerSelection === computerSelection) {
        return 'tie';
    } 

    else if(playerSelection == 'rock') {

        if(computerSelection == 'paper') {
            computerScore++;
            checkWinner();
            return `You lost! ${computerSelection} beats ${playerSelection}`;
            
        } else {
            playerScore++;
            checkWinner();
            return `You won! ${playerSelection} beats ${computerSelection}`;
            
        }
    }
    else if(playerSelection == 'scissors') {

        if (computerSelection == 'rock') {
            computerScore++;
            checkWinner();
            return `You lost! ${computerSelection} beats ${playerSelection}`;
           
        } else {
            playerScore++;
            checkWinner();
            return `You won! ${playerSelection} beats ${computerSelection}`;
            
        }
    }
    else if(playerSelection == 'paper') {
        
        if(computerSelection == 'scissors') {
            computerScore++;
            checkWinner();
            return `You lost! ${computerSelection} beats ${playerSelection}`;

        } else {
            playerScore++;
            checkWinner();
            return `You won! ${playerSelection} beats ${computerSelection}`;
            
        }
    }
}
//Print the outcome text 

console.log(playRound(playerSelection, computerSelection));

//function to find and declare a winner

function checkWinner() {

    if (playerScore < 5 && computerScore < 5) {
    console.log(`score is ${playerScore} to ${computerScore}`);

} else if (playerScore === 5) {
    console.log(`You won the game!!!`);

} else {
    (computerScore === 5)
     console.log(`You lost...?`);
   }
}

}
}