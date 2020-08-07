let explanation = document.getElementById("explanation");
let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");
let select = document.getElementById("service");

// Explanation
explanation.innerHTML = "Enter the cost of your meal. ";
explanation.innerHTML += "Then press Calculate. ";

// What does the button do
button.onclick = calculateTip;

// CalculateTip function
function calculateTip() {
  let cost = parseFloat(input.value);
  let percent = parseFloat(select.value);
  let tip = cost * percent / 100;
  tip = tip.toFixed(2);
  let text = "A " + percent + "% tip is $" + tip;
  output.innerHTML = text;
  let total = cost + parseFloat(tip);
  output.innerHTML += "<br>The total cost is $" + total;
}

