let rounds = prompt(
  'How many rounds of rock, paper, scissors do you want to play?'
);
rounds = parseInt(rounds);
let wins = 0;
let losses = 0;
let draws = 0;

for (let i = 0; i < rounds; i++) {
  let computerMove;
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    computerMove = 'r';
  } else if (computerChoice === 1) {
    computerMove = 'p';
  } else {
    computerMove = 's';
  }

  let playerChoice = prompt('Choose rock, paper, or scissors.');
  let playerMove = playerChoice[0].toLowerCase();

  if (playerMove === computerMove) {
    alert("It's a draw.");
    draws++;
  } else if (playerMove === 'r') {
    if (computerMove === 'p') {
      alert('Computer picked paper. You lose.');
      losses++;
    } else if (computerMove === 's') {
      alert('Computer picked scissors. You win!');
      wins++;
    }
  } else if (playerMove === 'p') {
    if (computerMove === 's') {
      alert('Computer picked scissors. You lose.');
      losses++;
    } else if (computerMove === 'r') {
      alert('Computer picked rock. You win!');
      wins++;
    }
  } else if (playerMove === 's') {
    if (computerMove === 'r') {
      alert('Computer picked rock. You lose.');
      losses++;
    } else if (computerMove === 'p') {
      alert('Computer picked paper. You win!');
      wins++;
    }
  }
}

alert(
  'You had ' + wins + ' wins, ' + losses + ' losses, and ' + draws + ' draws.'
);

if (wins > losses) {
  alert('You win!');
} else if (wins < losses) {
  alert('You lose!');
} else {
  alert("It's a draw!");
}
