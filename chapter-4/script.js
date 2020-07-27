let score1 = prompt("First score?");
let score2 = prompt("Second score?");
let score3 = prompt("Third score?");

score1 = parseInt(score1);
score2 = parseInt(score2);
score3 = parseInt(score3);

let sum = score1 + score2 + score3;
alert("The sum is " + sum);
let average = Math.round(sum / 3);
alert("Your average is " + average);

if (average === 100){
  alert("That's perfect!");
} else if (average >= 100) {
  alert("Awesome! You went above and Beyond!");
} else if (average >= 90) {
  alert("Wow! Great Job!");
} else if (average >= 80) {
  alert("Good Job!");
} else if (average >= 70) {
  alert("Keep up the good work!");
} else if (average >= 65){
  alert("You passed!");
} else if (average >= 55){
  alert("Almost, study harder.");
} else {
  alert("You didn't pass. Keep studying.");
}