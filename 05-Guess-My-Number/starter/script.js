// eslint-disable-next-line strict
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
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// eslint-disable-next-line no-return-assign
const setTextContent = (element, text) => element.textContent = text;

const onAgainButtonClick = () => {
  document.body.style.backgroundColor = '#222222';
  number.style.width = '15rem';
  setTextContent(number, '?');
  guess.value = '';
  setTextContent(message, 'Start guessing...');
  currentScore = startingScore;
  setTextContent(score, startingScore);
  randomNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
};

const uploadHighscore = () => {
  const bestResult = Number(highscore.textContent);
  const currentResult = Number(score.textContent);
  if (currentResult > bestResult) {
    highscore.textContent = currentResult;
  }
};

const onCheckButtonClick = () => {
  const guessValue = Number(guess.value);
  if (!guessValue || guessValue < MIN_NUMBER || guessValue > MAX_NUMBER) {
    message.textContent = `Введите число от ${MIN_NUMBER} до ${MAX_NUMBER}`;
  } else if (guessValue !== randomNumber) {
    if (currentScore > 1) {
      setTextContent(score, --currentScore);
      setTextContent(message, guessValue > randomNumber ? 'Поменьше, поменьше надо...' : 'Маловато будет! =)');
    } else {
      setTextContent(message, 'Проиграл! =((((');
      setTextContent(score, 0);
      setTimeout(onAgainButtonClick, 3000);
    }
  } else if (guessValue === randomNumber) {
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    setTextContent(number, randomNumber);
    setTextContent(message, 'Бингоооо!!!!');
    uploadHighscore();
    setTimeout(onAgainButtonClick, 3000);
  }
};

const initModule = () => {
  currentScore = startingScore;
  randomNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
  checkButton.addEventListener('click', onCheckButtonClick);
  againButton.addEventListener('click', onAgainButtonClick);
};

initModule();


// let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
// animals.sort(new Intl.Collator().compare);
// console.log(animals);
