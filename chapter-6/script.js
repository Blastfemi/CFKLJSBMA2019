let max = 10;
let computerPick = Math.floor(Math.random() * max) + 1;

let keepGuessing = true;
while (keepGuessing) {

  let playerPick = prompt("Pick a number between 1 and " + max + ".");
  playerPick = parseInt(playerPick);
  
  if (playerPick < 1 || playerPick > max){
    alert('That is an invalid choice!');
  } else if (playerPick === computerPick) {
    alert('Correct!');
    keepGuessing = false;
  } else if (playerPick < computerPick) {
    alert('Your guess is to low.');
  } else if (playerPick > computerPick) {
    alert('Your guess is to high.');
  }
}