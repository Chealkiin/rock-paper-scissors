/* rock paper scissors coded by Chealkiin */
const playerRock = document.getElementById('rock');
const playerPaper = document.getElementById('paper');
const playerScissors = document.getElementById('scissors');
const animation = document.querySelector('#animated');
const playerScoreDisplay = document.querySelector('#playerScore');
const compScoreDisplay = document.querySelector('#computerScore');
const resultsDisplay = document.querySelector('#result');
const resultsContainer = document.querySelector('#resultsContainer');
let playerScore = 0;
let computerScore = 0;
let computerChoice;
playerRock.addEventListener('click', playRock);
playerPaper.addEventListener('click', playPaper);
playerScissors.addEventListener('click', playScissors);

function generateNumber() {
  return Math.floor(Math.random() * 3);
}

function computerSelection(n) {
  if (n === 0) {
    n = 'rock';
  } else if (n === 1) {
    n = 'paper';
  } else if (n === 2) {
    n = 'scissors';
  }
  return n;
}

function animateComputer() {
  animation.src = 'img/rock.png';
  animation.classList.toggle('animate');
  setTimeout(function() {
    animation.classList.toggle('animate');
  }, 1600);
  if (computerChoice === 'rock') {
    animation.addEventListener('animationend', updateRock);
  } else if (computerChoice === 'paper') {
    animation.addEventListener('animationend', updatePaper);
  } else if (computerChoice === 'scissors') {
    animation.addEventListener('animationend', updateScissors);
  }
}

function updatePaper() {
  animation.src = 'img/paper.png';
}
function updateRock() {
  animation.src = 'img/rock.png';
}
function updateScissors() {
  animation.src = 'img/scissors.png';
}

function playRock() {
  computerChoice = computerSelection(generateNumber());
  if (computerChoice === 'scissors') {
    return playerScore++,
    setTimeout(function() {
      resultsContainer.style.backgroundColor = '#9aa5bd';
      playerScoreDisplay.textContent = `Player Score: ${playerScore}` ,
      compScoreDisplay.textContent = `Player Score: ${computerScore}`,
      resultsDisplay.textContent = `WIN!`  }, 1600),
    animateComputer();
  } else if (computerChoice === 'rock') {
    setTimeout(function() {
      resultsContainer.style.backgroundColor = '#9aa5bd';
      playerScoreDisplay.textContent = `Player Score: ${playerScore}`,
      compScoreDisplay.textContent = `Player Score: ${computerScore}`,
      resultsDisplay.textContent = `DRAW!`
    }, 1600),
    animateComputer();
  } else  if (computerChoice === 'paper') {
    computerScore++,
    setTimeout(function() {
      resultsContainer.style.backgroundColor = '#9aa5bd';
      playerScoreDisplay.textContent = `Player Score: ${playerScore}`,
      compScoreDisplay.textContent = `Player Score: ${computerScore}`,
      resultsDisplay.textContent = `LOSE!`
    }, 1600),
    animateComputer();
  } else {
    console.log(`I have no idea what you've done here...`);
  }
}

function playPaper() {
  computerChoice = computerSelection(generateNumber());
  if (computerChoice === 'rock') {
    return playerScore++,
      setTimeout(function() {
        resultsContainer.style.backgroundColor = '#9aa5bd';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}` ,
        compScoreDisplay.textContent = `Player Score: ${computerScore}`,
        resultsDisplay.textContent = `WIN!`
      }, 1600),
      animateComputer();
  } else if (computerChoice === 'paper') {
      setTimeout(function() {
        resultsContainer.style.backgroundColor = '#9aa5bd';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`,
        compScoreDisplay.textContent = `Player Score: ${computerScore}`,
        resultsDisplay.textContent = `DRAW!`
      }, 1600),
      animateComputer();
  } else  if (computerChoice === 'scissors') {
    computerScore++,
    setTimeout(function() {
      resultsContainer.style.backgroundColor = '#9aa5bd';
      playerScoreDisplay.textContent = `Player Score: ${playerScore}`,
      compScoreDisplay.textContent = `Player Score: ${computerScore}`,
      resultsDisplay.textContent = `LOSE!`
    }, 1600),
    animateComputer();
  } else {
    console.log(`I have no idea what you've done here...`);
  }
}

function playScissors() {
  computerChoice = computerSelection(generateNumber());
  if (computerChoice === 'paper') {
    return playerScore++,
    setTimeout(function() {
      resultsContainer.style.backgroundColor = '#9aa5bd';
      playerScoreDisplay.textContent = `Player Score: ${playerScore}` ,
      compScoreDisplay.textContent = `Player Score: ${computerScore}`,
      resultsDisplay.textContent = `WIN!`
    }, 1600),
    animateComputer();
  } else if (computerChoice === 'scissors') {
      setTimeout(function() {
        resultsContainer.style.backgroundColor = '#9aa5bd';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`,
        compScoreDisplay.textContent = `Player Score: ${computerScore}`,
        resultsDisplay.textContent = `DRAW!`
      }, 1600),
      animateComputer();
  } else  if (computerChoice === 'rock') {
    computerScore++,
    setTimeout(function() {
      resultsContainer.style.backgroundColor = '#9aa5bd';
      playerScoreDisplay.textContent = `Player Score: ${playerScore}`,
      compScoreDisplay.textContent = `Player Score: ${computerScore}`,
      resultsDisplay.textContent = `LOSE!`
    }, 1600),
    animateComputer();
  } else {
    console.log(`I have no idea what you've done here...`);
  }
}