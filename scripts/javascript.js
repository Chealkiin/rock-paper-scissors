/* rock paper scissors coded by Chealkiin */
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerChoice;
  let computerChoice;

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
    computerChoice = computerSelection(generateSelection());
    if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
      return playerScore ++,
      alert(`Congratulations, you win! ` + userChoice + ` beats ` + computerChoice + `.\n Your score: ` + playerScore + ` Computer's score: ` + computerScore);
    } else if (userChoice === computerChoice) {
      return alert(`It is a tie! You both picked ` + userChoice + `.\n Your score: ` + playerScore + ` Computer's score: ` + computerScore);
    } else  if ((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper')) {
      return computerScore++,
      alert(`Oh man, you lose! ` + userChoice + ` does not beat ` + computerChoice + `.\n Your score: ` + playerScore + ` Computer's score: ` + computerScore);
    } else {
      return alert('You must pick "Rock", "Paper" or "Scissors"!!');
    }
  }

  while ((playerScore < 5) && (computerScore < 5)) {
    playerChoice = prompt('Choose: Rock, Paper or Scissors?').toLowerCase();
    playRound(playerChoice, computerChoice);
  }

  if (playerScore === 5 || computerScore === 5) {
    if (confirm('Do you want to play again?')) {
      game();
    } else {
      alert('Nice playing, see you next time!');
    }
  }

}

game();