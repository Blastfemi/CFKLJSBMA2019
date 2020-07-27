let computerPick = Math.floor(Math.random() * 10) + 1;
console.log(computerPick);

let playerPick = prompt("Pick a number 1-10.");
playerPick = parseInt(playerPick);

if (playerPick === computerPick) {
  alert('Correct!');
} else {
  alert('Too bad. Better luck next time.');
}