let numberPennies = 23;
let info = document.getElementById("info");
let feedback = document.getElementById("feedback");
let pieces = document.getElementById("pieces");

let intro = "<h3>23 Pennies</h3>";
intro += "Take turns removing 1, 2, or 3 pennies. ";
intro += "Whoever takes the last penny loses. ";
intro.innerHtml = intro;

displayPennies();

function displayPennies() {
  pieces.innerHTML = "";
  for (let i = 0; i < numberPennies; i++) {
    let penny = "<div class='penny'></div>";
    pieces.innerHTML += penny;
  }
}

function take(num) {
  if (num > numberPennies) {
    feedback.innerHTML = "There aren't enough pennies.";
    return;
  }
  if (num === numberPennies) {
    feedback.innerHTML = "You took the last penny. You lose.";
    numberPennies -= num;
    displayPennies();
    return;
  }

  numberPennies -= num;
  feedback.innerHTML = "You took " + num;
  if (num === 1) {
    feedback.innerHTML += " penny. ";
  } else {
    feedback.innerHTML += " pennies. "
  }
  displayPennies();
}

function computerTurn() {
  let num;
  while (true) {
    num = Math.floor(Math.random() * 3) + 1;
    if (num <= numberPennies) {
      break;
    }
  }
  if (num === numberPennies) {
    feedback.innerHTML += "You took the last penny. You lose.";
    numberPennies -= num;
    displayPennies();
    return;
  }

  numberPennies -= num;
  feedback.innerHTML += "You took " + num;
  if (num === 1) {
    feedback.innerHTML += " penny. ";
  } else {
    feedback.innerHTML += " pennies. "
  }
  displayPennies();
}