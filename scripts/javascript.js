/* rock paper scissors coded by Chealkiin */

let playerChoice = prompt('Choose: Rock, Paper or Scissors?');
let generateSelection = function() {
  return generatedNumber = Math.floor(Math.random() * 3);
}
let computerChoice = computerSelection(generateSelection());

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
  if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    return alert(`Congratulations, you win! ` + userChoice + ` beats ` + computerChoice);
  } else if (userChoice === computerChoice) {
    return alert(`It is a tie! You both picked ` + userChoice);
  } else {
    return alert(`Oh man, you lose! ` + userChoice + ` does not beat ` + computerChoice);
  }
}

console.log(computerChoice);
console.log(playRound(playerChoice, 'scissors'));