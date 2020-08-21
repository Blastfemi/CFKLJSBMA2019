// button colors 
const xColor = "blue";
const oColor = "red";
const emptyColor = "silver";

// reset scores
let xWins = 0;
let oWins = 0;
let draws = 0;

// call functions
let buttons = getButtonIds(); 
clearButtons();

let text = "<h3>Let's Play Tic-Tac-Toe</h3>";
text += "You're player X. ";
text += "Try to get three Xs in a row. ";
text += "The computer, player O, will try to stop you.  ";
text += "It's your job to block the computer ";
text += "and try to win. ";
text += "<h3>Good luck!</h3>";
document.getElementById("info").innerHTML = text;

// getButtonIds function
function getButtonIds () {
  let buttonArray = [];
  for (let b = 0; b < 9; b++) {
    let buttonId = document.getElementById("button" + b);
    buttonArray.push(buttonId);
  }
  return buttonArray;
}

// clearButtons function
function clearButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "-";
    buttons[i].style.color = emptyColor;
    buttons[i].style.backgroundColor = emptyColor;
  }
  updateScores();
}

function buttonClick(buttonNumber) {
  let button = buttons[buttonNumber];

  if (button.innerHTML === "-") {
    button.innerHTML = "X";
    button.style.backgroundColor = xColor;
  } else {
    return;
  } if (checkForWin("X")) {
    xWins++;
    alert("X Wins!");
    clearButtons();
  } else if (checkForDraw()) {
    draws++;
    alert("It's a draw!");
    clearButtons();
  } 
  computerTakesATurn();
}

function checkForWin(player) {
  if (
    buttons[0].innerHTML === player &&
    buttons[1].innerHTML === player &&
    buttons[2].innerHTML === player 
  ) 
  {
    return true;
  }
  else if (
    buttons[3].innerHTML === player &&
    buttons[4].innerHTML === player &&
    buttons[5].innerHTML === player 
  ) 
  {
    return true;
  }
  else if (
    buttons[6].innerHTML === player &&
    buttons[7].innerHTML === player &&
    buttons[8].innerHTML === player 
  ) 
  {
    return true;
  }
  else if (
    buttons[0].innerHTML === player &&
    buttons[3].innerHTML === player &&
    buttons[6].innerHTML === player 
  ) 
  {
    return true;
  }
  else if (
    buttons[1].innerHTML === player &&
    buttons[4].innerHTML === player &&
    buttons[7].innerHTML === player 
  ) 
  {
    return true;
  }
  else if (
    buttons[2].innerHTML === player &&
    buttons[5].innerHTML === player &&
    buttons[8].innerHTML === player 
  ) 
  {
    return true;
  }
  else if (
    buttons[0].innerHTML === player &&
    buttons[4].innerHTML === player &&
    buttons[8].innerHTML === player 
  ) 
  {
    return true;
  }
  else if (
    buttons[2].innerHTML === player &&
    buttons[4].innerHTML === player &&
    buttons[6].innerHTML === player 
  ) 
  {
    return true;
  }
  return false;
}

function checkForDraw() {
  for (let b = 0; b < buttons.length; b++) {
    if (buttons[b].innerHTML === "-") {
      return false;
    }
  }
  return true;
}

function computerTakesATurn() {
  let pickingASquare = true;
  while (pickingASquare) {
    let randomButton = Math.floor(Math.random() * buttons.length);
    let button = buttons[randomButton];

    if (button.innerHTML === "-") {
      button.innerHTML = "O";
      button.style.backgroundColor = oColor;
      pickingASquare = false;
    }
  } if (checkForWin("O")) {
    oWins++;
    alert("O Wins!");
    clearButtons();
  } else if (checkForDraw()) {
    draws++;
    alert("It's a draw!");
    clearButtons();
  } 
}

function updateScores() {
  let result = document.getElementById("result");

  let text = "";
  text += "X Wins: " + xWins + "<br>";
  text += "O Wins: " + oWins + "<br>";
  text += "Draws: " + draws + "<br>";

  result.innerHTML = text;
  
}