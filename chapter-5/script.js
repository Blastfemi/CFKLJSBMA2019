let question = prompt(
  "Ask me a yes or no question and I'll predict the answer."
)
let length = question.length
let fortune = Math.floor(Math.random() * length)
let numberOfFortunes = 6
fortune = fortune % numberOfFortunes

switch (fortune) {
  case 0:
    alert('Definitely.');
    break;
  case 1:
    alert('Probably not.');
    break;
  case 2:
    alert('The stars are cloudy and the answer is uncertain.');
    break;
  case 3:
    alert('Outlook not good.');
    break;
  case 4:
    alert('You can count on it.');
    break;
  default:
    alert('It is likely.');
}
