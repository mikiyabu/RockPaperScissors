let PlayerWins = 0;
let computerWins = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const h1 = document.querySelector('h1');
const p2 = document.querySelector('.score');

rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    playRound(playerSelection, getComputerChoice());
});

paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    playRound(playerSelection, getComputerChoice());
});

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    playRound(playerSelection, getComputerChoice());
});

function game() {
    while (PlayerWins < 3 && computerWins < 3) {
        playRound(playerSelection, getComputerChoice());
    }
}


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
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        p2.textContent(("Player " + PlayerWins + ", Computer: " + computerWins));
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        computerWins++; 
        p2.textContent(("Player: rock, Computer: paper / Player: " + PlayerWins + ", Computer: " + computerWins));
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        PlayerWins++;
        p2.textContent(("Player: rock, Computer: scissors / Player: " + PlayerWins + ", Computer: " + computerWins));
    }

    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        PlayerWins++;
        p2.textContent(("Player: paper, Computer: rock / Player: " + PlayerWins + ", Computer: " + computerWins));
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        p2.textContent(("Player: paper, Computer: paper / Player: " + PlayerWins + ", Computer: " + computerWins));
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        computerWins++;
        p2.textContent(('Player: paper, Computer: scissors / Player: ' + PlayerWins + ', Computer: ' + computerWins));
    }

    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        computerWins++;
        p2.textContent(('Player: scissors, Computer: rock / Player: ' + PlayerWins + ', Computer: ' + computerWins));
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        PlayerWins++;
        p2.textContent(('Player: scissors, Computer: paper / Player: ' + PlayerWins + ', Computer: ' + computerWins));
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        p2.textContent(('Player: scissors, Computer: scissors / Player: ' + PlayerWins + ', Computer: ' + computerWins));
    }
}