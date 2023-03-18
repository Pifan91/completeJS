'use strict';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;

const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const startingScore = 20;
let currentScore;
let randomNumber;

const generateRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const uploadHighscore = () => {
  const currentHighscore = Number(highscore.textContent);
  highscore.textContent = '';
  highscore.textContent = currentHighscore + Number(score.textContent);
};

const onCheckButtonClick = () => {
  const guessValue = +guess.value;
  if (!guessValue || guessValue < MIN_NUMBER || guessValue > MAX_NUMBER) {
    message.textContent = `Введите число от ${MIN_NUMBER} до ${MAX_NUMBER}`
  } else if (guessValue < randomNumber) {
    score.textContent = --currentScore;
    message.textContent = `Маловато будет! =)`
  } else if (guessValue > randomNumber) {
    score.textContent = --currentScore;
    message.textContent = `Поменьше, поменьше надо...`
  } else if (guessValue === randomNumber) {
    number.textContent = randomNumber;
    message.textContent = `Бингоооо!!!!`
    uploadHighscore();
  }
};

const onAgainButtonClick = () => {
  number.textContent = `?`;
  guess.value = '';
  message.textContent = `Start guessing...`;
  currentScore = startingScore;
  score.textContent = startingScore;
  randomNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
};

const initModule = () => {
  currentScore = startingScore;
  randomNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
  checkButton.addEventListener('click', onCheckButtonClick);
  againButton.addEventListener('click', onAgainButtonClick);
}

initModule();


// let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
// animals.sort(new Intl.Collator().compare);
// console.log(animals);