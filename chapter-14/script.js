let explanation = document.getElementById("explanation");
let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");

// Explanation
explanation.innerHTML = "Enter teh cost of your meal. ";
explanation.innerHTML += "Then press Calculate. ";

// What does the button do
button.onclick = calculateTip;

// CalculateTip function
function calculateTip() {
  let cost = parseFloat(input.value)
  let percent = 15;
  let tip = cost * percent / 100;
  tip = tip.toFixed(2);
  let text = "A " + percent + "% tip is $" + tip;
  output.innerHTML = text;
}