// Game intro
let text = "You're on a deserted island, looking for treasure. ";
text += "You have a special compass that tells you how far away you are from the nearest treasure. ";
text += "You can travel north, south, east, or west. ";
text += "Find that treasure! ";
alert(text);

// Treasure Generator
let treasures = ["bar of gold", "sapphire necklace", "ruby ring", "platinum coin", "string of pearls", "pair of emerald earrings", "opal bracelet"];

// Select the treasure
let index = Math.floor(Math.random() * treasures.length);
let treasure = treasures[index];

// Set position & distance from treasure north & east
let playerX = Math.floor(Math.random() * 5) + 3;
let playerY = Math.floor(Math.random() * 5) + 3;

// Random chance to start from the west
if (Math.random() < 0.5) {
  playerX = -playerX;
}

// Random chance to start from the south
if (Math.random() < 0.5) {
  playerY = -playerY;
}

// Track number of steps taken to find the treasure
let steps = [];

// Initial distance from the treasure
let distance = getDistance(playerX, playerY);

// Game loop
while (distance !== 0) {

  // Prompt player for move by selecting direction
  let direction = prompt("You are " + distance + " meters away from the treasure. Will you go north, east, south, or west?");

  // detects direction by taking the 0 index of the players input and then converts to lowercase
  direction = direction[0].toLowerCase();

  // Directional movement
  if (direction === "n") {
    playerY++;
    steps.push("north")
  } else if (direction === "s") {
    playerY--;
    steps.push("south")
  } else if (direction === "e") {
    playerX++;
    steps.push("east")
  } else if (direction === "w") {
    playerX--;
    steps.push("west")
  } else {
    alert("That's an invalid direction.")
  }
  // Check players distance again
  distance = getDistance(playerX, playerY);
}

// Alert when treasure is found
alert("You found the " + treasure + "!");
//  Displays the full path taken 
alert("Your path was " + steps.join(" --> ") + ".");

// 
function getDistance(x, y) {
  // Calculates the current distance from the treasure
  let distance = Math.sqrt(x ** 2 + y ** 2);
  // Determines the number of decimal places
  distance = Number(distance.toFixed(2));
  return distance;
}