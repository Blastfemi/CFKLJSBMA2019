// Assign Variables
let output = document.getElementById("output");
let input = document.getElementById("input");
let button = document.getElementById("button");

// Update output
output.innerHTML = "Type in a color, then press Go.";

// Points button to function
button.onclick = clickHandler;

// Function to change the color of the text
function clickHandler() {
  let color = input.value;
  output.style.color = color;
}
