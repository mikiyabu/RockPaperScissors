const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const botWins = document.querySelector('.botWins');
const youWins = document.querySelector('.youWins');

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
    if (PlayerWins < 3 && computerWins < 3) {
            
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) return;
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
            botWins++;
            return botWins.textContent(botWins);
        }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
            youWins++;
            youWins.textContent(youWins);
        }

        if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
            youWins++;
            youWins.textContent(youWins);
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
            botWins++;
            botWins.textContent(botWins);
        }

        if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
            botWins++;
            botWins.textContent(botWins);
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
            youWins++;
            youWins.textContent(youWins);
        }
    }
    else {
        return;
    }
}