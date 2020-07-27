let question = prompt("Ask me a yes or no question and I'll predict the answer.");
let fortune = Math.floor(Math.random() * 5);

if (fortune === 0) {
  alert("Definitely.");
} else if (fortune === 1) {
  alert("Probably not.");
} else if (fortune === 2) {
  alert("The stars are cloudy and the answer is uncertain.");
} else if (fortune === 3) {
  alert("Outlook not good.");
} else if (fortune === 4) {
  alert("You can count on it.");
}