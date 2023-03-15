var computerScore = 0;
var playerScore = 0;

const rock = document.getElementById('rock');
rock.addEventListener('click', playRound);

const paper = document.getElementById('paper');
paper.addEventListener('click', playRound);

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', playRound);

const results = document.getElementById('results');

function playRound() {
    function getComputerChoice() {
        let choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }
    let computerChoice = getComputerChoice();
    let playerSelection = this.id;

        
    if (playerSelection === "rock") {
        if (computerChoice === "Paper") { results.textContent = "You Lose! Paper beats Rock"; computerScore = ++computerScore; }
        else if (computerChoice === "Scissors") { results.textContent = "You Win! Rock beats Scissors"; playerScore = ++playerScore; }
        else { results.textContent = "It's  a tie!"; }
            
    }
    else if (playerSelection === "paper") {
        if (computerChoice === "Scissors") { results.textContent = "You Lose! Scissors beats paper!"; computerScore = ++computerScore; }
        else if (computerChoice === "Rock") { results.textContent = "You Win! Paper beats Rock"; playerScore = ++playerScore; }
        else { results.textContent = "It's  a tie!" }
    }
            
    else if (playerSelection === "scissors") {
        if (computerChoice === "Rock") { results.textContent = "You Lose! Rock beats scissors!"; computerScore = ++computerScore; }
        else if (computerChoice === "Paper") { results.textContent = "You Win! Scissors beats Rock"; playerScore = ++playerScore; }
        else { results.textContent = "It's  a tie!" }
    }
    else { results.textContent = "Please enter a valid choice." }

    results.textContent += ` Score is ${computerScore} - ${playerScore} `;

    if (computerScore === 5) { results.textContent += " Computer Wins the Game!"; computerScore = 0; playerScore = 0; }
    else if (playerScore === 5) { results.textContent += " Player Wins the Game!";  computerScore = 0; playerScore = 0;}
    
}
    
        

   