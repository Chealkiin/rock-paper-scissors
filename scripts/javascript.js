/* rock paper scissors coded by Chealkiin */

let playerChoice = prompt('Choose: Rock, Paper or Scissors?').toLowerCase();

let computerChoice = computerSelection(generateSelection());

function generateSelection() {
  return generatedNumber = Math.floor(Math.random() * 3);
}

function computerSelection(n) {
  if (n === 0) {
    n = 'rock';
  } else if (n === 1) {
    n = 'paper';
  } else {
    n = 'scissors';
  }
  return n;
}

function playRound(userChoice, computerChoice) {
  let playerScore = 0;
  let computerScore = 0;
  if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    return playerScore ++,
    alert(`Congratulations, you win! ` + userChoice + ` beats ` + computerChoice + `.\n Your score: ` + playerScore + ` Computer's score: ` + computerScore);
  } else if (userChoice === computerChoice) {
    return alert(`It is a tie! You both picked ` + userChoice);
  } else {
    return computerScore++,
    alert(`Oh man, you lose! ` + userChoice + ` does not beat ` + computerChoice + `.\n Your score: ` + playerScore + ` Computer's score: ` + computerScore);
  }
}



playRound(playerChoice, 'paper');