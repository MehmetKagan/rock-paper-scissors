function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
let computerChoice = getComputerChoice();

let playerSelection = prompt("Rock, Paper or Scissors?");

if (playerSelection.toLowerCase() === "rock") {
    if (computerChoice === "Paper") { alert("You Lose! Paper beats Rock") }
    else if (computerChoice === "Scissors") { alert("You Win! Rock beats Scissors") }
    else { alert("It's  a tie!") }
}
else if (playerSelection.toLowerCase() === "paper") {
    if (computerChoice === "Scissors") { alert("You Lose! Scissors beats paper!") }
    else if (computerChoice === "Rock") { alert("You Win! Paper beats Rock") }
    else { alert("It's  a tie!") }
}
    
else if (playerSelection.toLowerCase() === "scissors") {
        if (computerChoice === "Rock") { alert("You Lose! Rock beats scissors!") }
        else if (computerChoice === "Paper") { alert("You Win! Scissors beats Rock") }
        else { alert("It's  a tie!") }
}
    else {alert ("Please enter a valid choice.")}
