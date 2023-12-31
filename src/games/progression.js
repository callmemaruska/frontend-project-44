import runGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gameRules = 'What number is missing in the progression?';

const getArrayProgression = (length, firstNumber, step) => {
  const progressionArr = [];
  let currentNumber = firstNumber;
  for (let i = 0; i < length; i += 1) {
    progressionArr.push(currentNumber);
    currentNumber += step;
  }
  return progressionArr;
};
const randomArrIndex = (arr) => {
  const indexArr = Math.floor(Math.random() * arr.length);
  return indexArr;
};

const startRound = () => {
  const length = generateRandomNumber(6, 10);
  const firstNumber = generateRandomNumber(1, 20);
  const step = generateRandomNumber(2, 10);
  const progressionArr = getArrayProgression(length, firstNumber, step);
  const guessNumber = randomArrIndex(progressionArr);
  const rightAnswer = String(progressionArr[guessNumber]);

  const progressionString = progressionArr.join(' ');
  const question = progressionString.replace(rightAnswer, '..');

  return [question, rightAnswer];
};

export default () => {
  runGame(gameRules, startRound);
};
