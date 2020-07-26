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