let word = prompt("Enter a word or leave blank for a random word.");

if (!word) {
  let words = ["benefit", "between", "biggest", "billion", "brother", "brought", "browser", "buttons", "calling", "cameras", "capable", "capital", "captain", "capture", "careful", "carried", "causing", "centers"];
  let index = Math.floor(Math.random() * words.length);
  word = words[index];
}

word = word.toUpperCase();

let playerWord = [];

for (let i = 0; i < word.length; i++) {
  playerWord.push("-");
}

while (playerWord.indexOf("-") >= 0) {
  let message = playerWord.join(" ");
  message += " Guess a letter."
  let guess = prompt(message);
  guess = guess[0].toUpperCase();

  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      playerWord[j] = guess;
    }
  }
};

alert("The word was " + word + ".")