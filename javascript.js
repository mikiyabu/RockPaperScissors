const form = document.querySelector('form');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const you = document.querySelector('.you');
const bot = document.querySelector('.bot');
const botWins = document.querySelector('.botWins');
const youWins = document.querySelector('.youWins');
const h1 = document.querySelector('#header');
const restart = document.querySelector('.restart');

const playAgain = document.createElement('button');
playAgain.textContent = 'Play again?';
playAgain.classList.add('.playAgain');

const miniRock = document.createElement('img');
miniRock.src = "./pics/rock.png";
miniRock.style.height = '40px';
const miniRock2 = document.createElement('img');
miniRock2.src = "./pics/rock.png";
miniRock2.style.height = '40px';

const miniPaper = document.createElement('img');
miniPaper.src = "./pics/paper.png";
miniPaper.style.height = '40px';
const miniPaper2 = document.createElement('img');
miniPaper2.src = "./pics/paper.png";
miniPaper2.style.height = '40px';

const miniScissors = document.createElement('img');
miniScissors.src = "./pics/scissors.png";
miniScissors.style.height = '40px';
const miniScissors2 = document.createElement('img');
miniScissors2.src = "./pics/scissors.png";
miniScissors2.style.height = '40px';

let youCounter = 0;
let botCounter = 0;

youWins.textContent = youCounter;
botWins.textContent = botCounter;

you.textContent = 'You';
bot.textContent = 'Bot';

form.addEventListener('submit', preventDefault);

playAgain.addEventListener('click', () => {
    youCounter = 0;
    botCounter = 0;
});

rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    playRound(playerSelection, getComputerChoice());

    if (youCounter === 3) {
        you.textContent = 'You win!'; 
        restart.appendChild(playAgain);
        return;
    }
    else if (botCounter === 3) { 
        bot.textContent = 'Bot wins';
        restart.appendChild(playAgain);
        return;
    }
});

paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    playRound(playerSelection, getComputerChoice());

    if (youCounter === 3) {
        you.textContent = 'You win!'; 
        restart.appendChild(playAgain);
        return;
    }
    else if (botCounter === 3) {
        bot.textContent = 'Bot wins';
        restart.appendChild(playAgain);
        return;
    }
});

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    playRound(playerSelection, getComputerChoice());

    if (youCounter === 3) {
        you.textContent = 'You win'; 
        restart.appendChild(playAgain);
        return;
    }
    else if (botCounter === 3) {
        bot.textContent = 'Bot wins';
        restart.appendChild(playAgain);
        return;
    }
});

function preventDefault(e) {
    e.preventDefault();
}

function getComputerChoice() {
    let num = Math.floor((Math.random()*3));
    if (num === 0) {
        return 'rock';
    }
    else if (num === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    you.textContent = 'You: ';
    bot.textContent = 'Bot: ';
    
    if (youCounter != 3 && botCounter != 3) {
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            you.appendChild(miniRock);
            bot.appendChild(miniRock2);
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            botCounter++;
            botWins.textContent = botCounter;
            you.appendChild(miniRock);
            bot.appendChild(miniPaper);
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            youCounter++;
            youWins.textContent = youCounter;
            you.appendChild(miniRock);
            bot.appendChild(miniScissors);
        }

        if (playerSelection === 'paper' && computerSelection === 'paper') {
            you.appendChild(miniPaper);
            bot.appendChild(miniPaper2);
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            youCounter++;
            youWins.textContent = youCounter;
            you.appendChild(miniPaper);
            bot.appendChild(miniRock);
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            botCounter++;
            botWins.textContent = botCounter;
            you.appendChild(miniPaper);
            bot.appendChild(miniScissors);
        }

        if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            you.appendChild(miniScissors);
            bot.appendChild(miniScissors2);
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            botCounter++;
            botWins.textContent = botCounter;
            you.appendChild(miniScissors);
            bot.appendChild(miniRock);
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            youCounter++;
            youWins.textContent = youCounter;
            you.appendChild(miniScissors);
            bot.appendChild(miniPaper);
        }
    }
}