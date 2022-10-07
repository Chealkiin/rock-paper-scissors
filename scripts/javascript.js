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
  console.log(computerChoice);
  animation.src = 'img/rock.png';
  animation.classList.toggle('animate');
  setTimeout(function() {
    animation.classList.toggle('animate');
  }, 1600);
  
  switch (computerChoice) {
    case 'rock':
      animation.addEventListener('animationend', updateRock);
      setTimeout(function() {
        animation.removeEventListener('animationend', updateRock);
      }, 1600);
      break;
    case 'paper':
      animation.addEventListener('animationend', updatePaper);
      setTimeout(function() {
        animation.removeEventListener('animationend', updatePaper);
      }, 1600);
      break;
    case 'scissors':
      animation.addEventListener('animationend', updateScissors);
      setTimeout(function() {
        animation.removeEventListener('animationend', updateScissors);
      }, 1600);
      break;
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
  switch (computerChoice) {
    case 'scissors':
      playerScore++;
      setTimeout(function() {
        resultsContainer.style.backgroundColor = '#9aa5bd';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        compScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        resultsDisplay.textContent = `WIN!`
      }, 1600);
      animateComputer();
      break;

    case 'paper':
      computerScore++;
      setTimeout(function() {
        resultsContainer.style.backgroundColor = '#9aa5bd';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        compScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        resultsDisplay.textContent = `LOSE!`
      }, 1600);
      animateComputer();
      break;

      case 'rock':
        setTimeout(function() {
          resultsContainer.style.backgroundColor = '#9aa5bd';
          playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
          compScoreDisplay.textContent = `Computer Score: ${computerScore}`;
          resultsDisplay.textContent = `DRAW!`
        }, 1600);
        animateComputer();
        break;
      }
}

function playPaper() {
  computerChoice = computerSelection(generateNumber());
  switch (computerChoice) {
    case 'rock':
      playerScore++;
      setTimeout(function() {
        resultsContainer.style.backgroundColor = '#9aa5bd';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}` ;
        compScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        resultsDisplay.textContent = `WIN!`
      }, 1600);
      animateComputer();
      break;

    case 'scissors':
    computerScore++;
    setTimeout(function() {
      resultsContainer.style.backgroundColor = '#9aa5bd';
      playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
      compScoreDisplay.textContent = `Computer Score: ${computerScore}`;
      resultsDisplay.textContent = `LOSE!`
    }, 1600);
    animateComputer();
    break;

    case 'paper':
      setTimeout(function() {
        resultsContainer.style.backgroundColor = '#9aa5bd';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        compScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        resultsDisplay.textContent = `DRAW!`
      }, 1600);
      animateComputer();
      break;
  }
}

function playScissors() {
  computerChoice = computerSelection(generateNumber());
  switch (computerChoice) {
    case 'paper':
      playerScore++;
      setTimeout(function() {
        resultsContainer.style.backgroundColor = '#9aa5bd';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}` ;
        compScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        resultsDisplay.textContent = `WIN!`
      }, 1600);
      animateComputer();
      break;

    case 'rock':
      computerScore++;
      setTimeout(function() {
        resultsContainer.style.backgroundColor = '#9aa5bd';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        compScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        resultsDisplay.textContent = `LOSE!`
      }, 1600);
      animateComputer();
      break;

      case 'scissors':
          setTimeout(function() {
            resultsContainer.style.backgroundColor = '#9aa5bd';
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
            compScoreDisplay.textContent = `Computer Score: ${computerScore}`;
            resultsDisplay.textContent = `DRAW!`
          }, 1600);
          animateComputer();
          break;
  }
}