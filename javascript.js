const rock = 'rock';
const paper = 'paper';
const scissors = "scissors";
let PlayerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let num = Math.floor((Math.random()*3));
    if (num === 0) {
        return rock;
    }
    else if (num === 1) {
        return paper;
    }
    else {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === rock && computerSelection === rock) {
        alert("Player: rock, Computer: rock / Player: " + PlayerWins + ", Computer: " + computerWins);
    }
    else if (playerSelection.toLowerCase() === rock && computerSelection === paper) {
        computerWins++; 
        alert("Player: rock, Computer: paper / Player: " + PlayerWins + ", Computer: " + computerWins);
    }
    else if (playerSelection.toLowerCase() === rock && computerSelection === scissors) {
        PlayerWins++;
        alert("Player: rock, Computer: scissors / Player: " + PlayerWins + ", Computer: " + computerWins);
    }

    if (playerSelection.toLowerCase() === paper && computerSelection === rock) {
        PlayerWins++;
        alert("Player: paper, Computer: rock / Player: " + PlayerWins + ", Computer: " + computerWins);
    }
    else if (playerSelection.toLowerCase() === paper && computerSelection === paper) {
        alert("Player: paper, Computer: paper / Player: " + PlayerWins + ", Computer: " + computerWins);
    }
    else if (playerSelection.toLowerCase() === paper && computerSelection === scissors) {
        computerWins++;
        alert('Player: paper, Computer: scissors / Player: ' + PlayerWins + ', Computer: ' + computerWins);
    }

    if (playerSelection.toLowerCase() === scissors && computerSelection === rock) {
        computerWins++;
        alert('Player: scissors, Computer: rock / Player: ' + PlayerWins + ', Computer: ' + computerWins);
    }
    else if (playerSelection.toLowerCase() === scissors && computerSelection === paper) {
        PlayerWins++;
        alert('Player: scissors, Computer: paper / Player: ' + PlayerWins + ', Computer: ' + computerWins);
    }
    else if (playerSelection.toLowerCase() === scissors && computerSelection === scissors) {
        alert('Player: scissors, Computer: scissors / Player: ' + PlayerWins + ', Computer: ' + computerWins);
    }
}



function game() {
    while (PlayerWins < 3 && computerWins < 3) {
        let playerSelection = prompt('Choose: rock, paper, or scissors');
    
        playRound(playerSelection, getComputerChoice());
    }
}

game();