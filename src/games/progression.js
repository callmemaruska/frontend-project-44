import runGame from '../index.js';
import randomNumber from '../randomNumber.js';

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
  const length = randomNumber(5, 10);
  const firstNumber = randomNumber(1, 20);
  const step = randomNumber(2, 10);
  const progressionArr = getArrayProgression(length, firstNumber, step);
  const guessNumber = randomArrIndex(progressionArr);
  const rightAnswer = String(progressionArr[guessNumber]);
  progressionArr[guessNumber] = '..';
  const question = (`${progressionArr}`);
  return [question, rightAnswer];
};

export default () => {
  runGame(gameRules, startRound);
};
