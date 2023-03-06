var computerScore = 0;
var playerScore = 0;

function game() {
    function playRound() {
        function getComputerChoice() {
            let choices = ["Rock", "Paper", "Scissors"];
            return choices[Math.floor(Math.random() * choices.length)];
        }
        let computerChoice = getComputerChoice();
        
        let playerSelection = prompt("Rock, Paper or Scissors?");
        
        
        if (playerSelection.toLowerCase() === "rock") {
            if (computerChoice === "Paper") { alert("You Lose! Paper beats Rock"); computerScore = ++computerScore; }
            else if (computerChoice === "Scissors") { alert("You Win! Rock beats Scissors"); playerScore = ++playerScore; }
            else { alert("It's  a tie!") }
            
        }
        else if (playerSelection.toLowerCase() === "paper") {
            if (computerChoice === "Scissors") { alert("You Lose! Scissors beats paper!"); computerScore = ++computerScore; }
            else if (computerChoice === "Rock") { alert("You Win! Paper beats Rock"); playerScore = ++playerScore; }
            else { alert("It's  a tie!") }
        }
            
        else if (playerSelection.toLowerCase() === "scissors") {
            if (computerChoice === "Rock") { alert("You Lose! Rock beats scissors!"); computerScore = ++computerScore; }
            else if (computerChoice === "Paper") { alert("You Win! Scissors beats Rock"); playerScore = ++playerScore; }
            else { alert("It's  a tie!") }
        }
        else { alert("Please enter a valid choice.") }

        console.log(computerScore + " - " + playerScore);
        /* 
               Declare variable for scores 
               increment for wins
               Console.log or alert score after every round
               Repeat 5 rounds 
               show score
               Alert ("Player / computer win")
               */
    }
    
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    var win;
        if (computerScore > playerScore) { win ="Computer Win!" }
        else if (playerScore > computerScore) {win ="Player Win!"}
        else { win = "It's a Tie!"}
    alert ( `Score is ${playerScore} - ${computerScore} ${win}` )
}
game();
