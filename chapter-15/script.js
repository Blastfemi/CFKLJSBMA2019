// Run the program first
// Then type the function call into the console
//  Example volumeCube(33)

function pi() {
  let pi = 355 / 113;
  return pi;
}

function areaSquare(side) {
  let area = side * side;
  return area;
}

function areaCircle(radius) {
  let area = Math.PI * radius * radius;
  return area;
}

function areaRectangle(length, width) {
  let area = length * width;
  return area;
}

function areaTriangle(base, height) {
  let area = 0.5 * base * height;
  return area;
}

// Perimeter
function perimeterSquare(side) {
  let perimeter = side * 4;
  return perimeter;
}

function perimeterCircle(radius) {
  let perimeter = 2 * Math.PI * radius;
  return perimeter;
}

function perimeterRectangle(length, width) {
  let perimeter = (2 * length) + (2 * width);
  return perimeter;
}

function perimeterTriangle(side1, side2, side3) {
  let perimeter = side1 * side2 * side3;
  return (perimeter);
}

// Volume
function volumeCube(side) {
  let volume = side ** 3;
  return volume;
}

function volumeCone(radius, height) {
  let area = areaCircle(radius);
  let volume = area * height;
  return volume;
}

function volumeRectangularPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}

function volumeSphere(radius) {
  let volume = 4 / 3 * Math.PI * (radius ** 3);
  return volume;
}

let select = document.getElementById("select-function");
let inputs = document.getElementById("inputs");
let output = document.getElementById("output");
let formulas = {
  pi: [],
  areaSquare: ["side"],
  areaCircle: ["radius"],
  areaRectangle: ["length", "width"],
  areaTriangle: ["base", "height"],
  perimeterSquare: ["side"],
  perimeterCircle: ["radius"],
  perimeterRectangle: ["length", "width"],
  perimeterTriangle: ["side1", "side2", "side3"],
  volumeCube: ["side"],
  volumeSphere: ["radius"],
  volumeRectangularPrism: ["length", "width", "height"],
  volumeCone: ["radius", "height"],
};

// * The getInputs function
function updateInputs() {
  let value = select.value;
  let dimensions = formulas[value];
  // * Clear inputs & output
  inputs.innerHTML = "";
  output.innerHTML = "";
  
  // * Create teh inputs boxes
  for (let i = 0; i < dimensions.length; i++) {
    let text = dimensions[i];
    text += ": <input id='input" +i;
    text += "' oninput='calculate();'>";
    text += "<br>";
    inputs.innerHTML += text;
  }
  calculate();
}

// * Calculate Function
function calculate() {
  let value = select.value;
  let input0 = document.getElementById("input0");
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let param0, param1, param2;
  param0 = input0 ? parseFloat(input0.value) : 0;
  param1 = input1 ? parseFloat(input1.value) : 0;
  param2 = input2 ? parseFloat(input2.value) : 0;
  let answer = 0;

  if (value === "pi") {
    answer = pi();
  } else if (value === "areaSquare") {
    answer = areaSquare(param0);
  } else if (value === "areaCircle") {
    answer = areaCircle(param0);
  } else if (value === "areaRectangle") {
    answer = areaRectangle(param0, param1);
  } else if (value === "areaTriangle") {
    answer = areaTriangle(param0, param1);
  } else if (value === "perimeterSquare") {
    answer = perimeterSquare(param0);
  } else if (value === "perimeterCircle") {
    answer = perimeterCircle(param0);
  } else if (value === "perimeterRectangle") {
    answer = perimeterRectangle(param0, param1);
  } else if (value === "perimeterTriangle") {
    answer = perimeterTriangle(param0, param1, param2);
  } else if (value === "volumeCube") {
    answer = volumeCube(param0);
  } else if (value === "volumeSphere") {
    answer = volumeSphere(param0);
  } else if (value === "volumeRectangularPrism") {
    answer = volumeRectangularPrism(param0, param1, param2);
  } else if (value === "volumeCone") {
    answer = volumeCone(param0, param1);
  }
  output.innerHTML = "Answer: " + answer;
}