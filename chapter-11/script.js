// Run the program first
// Then type the function call into the console
//  Example volumeCube(33)

function pi() {
  let pi = 355 / 113;
  return pi;
}

function areaSquare(side) {
  let area = side * side;
  alert(area);
  return area;
}

function areaCircle(radius) {
  let area = Math.PI * radius * radius;
  alert(area);
  return area;
}

function areaRectangle(length, width) {
  let area = length * width;
  alert(area);
  return area;
}

function areaTriangle(base, height) {
  let area = 0.5 * base * height;
  alert(area);
  return area;
}

// Perimeter
function perimeterSquare(side) {
  let perimeter = side * 4;
  alert(perimeter);
  return perimeter;
}

function perimeterCircle(radius) {
  let perimeter = 2 * Math.PI * radius;
  alert(perimeter);
  return perimeter;
}

function perimeterRectangle(length, width) {
  let perimeter = (2 * length) + (2 * width);
  alert(perimeter);
  return perimeter;
}

function perimeterTriangle(side1, side2, side3) {
  let perimeter = side1 * side2 * side3;
  alert(perimeter);
  return (perimeter);
}

// Volume
function volumeCube(side) {
  let volume = side ** 3;
  alert(volume);
  return volume;
}

function volumeCone(radius, height) {
  let area = areaCircle(radius);
  let volume = area * height;
  alert(volume);
  return volume;
}

function volumeRectanglePrism(length, width, height) {
  let volume = length * width * height;
  alert(volume);
  return volume;
}

function volumeSphere(radius) {
  let volume = 4 / 3 * Math.PI * (radius ** 3);
  alert(volume);
  return volume;
}