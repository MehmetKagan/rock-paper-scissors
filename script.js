function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
let computerChoice = getComputerChoice();

let playerSelection = prompt("Rock, Paper or Scissors?");

if (playerSelection.toLowerCase = "rock") {
    if (computerChoice = "Paper") { alert("You Lose! Paper beats Rock") }
    else if (computerChoice = "Scissors") { alert("You Win! Rock beats Scissors") }
    else { alert ("It's  a tie!")}
}
