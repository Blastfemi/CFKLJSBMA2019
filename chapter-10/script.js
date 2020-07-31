let q1 = {
  question: "What planet has humans?" ,
  answer: "Earth"
};
let q2 = {
  question: "What is 13 times 3?",
  answer: "39"
};
let q3 = {
  question: "Who was the first President?",
  answer: "George Washington"
};
let q4 = {
  question: "What has an orbit of 27 days?",
  answer: "moon"
};
let q5 = {
  question: "You're learning JavaScript, true or false.",
  answer: "true"
};

let questions = [q1, q2, q3, q4, q5];
let score = 0;
let numQuestions = questions.length;

for (let i = 0; i < numQuestions; i++) {

  
  let index = Math.floor(Math.random() * questions.length);
  let pickedQuestion = questions[index];
  
  questions.splice(index, 1);
  
  let playerAnswer = prompt(pickedQuestion.question);
  
  if (playerAnswer === pickedQuestion.answer) {
    alert('Correct!');
    score++
  } else {
    alert('No, the answer was ' + pickedQuestion.answer)
  }
}
  
  let percent = score / numQuestions * 100;
  alert("Score: " + score + " Max: " + numQuestions + " Percent Correct: " + percent + "%");