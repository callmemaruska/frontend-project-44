import runGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (number1, number2) => {
  let x = number1;
  let y = number2;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

const startRound = () => {
  const number1 = generateRandomNumber(1, 19);
  const number2 = generateRandomNumber(1, 19);

  const rightAnswer = String(findGCD(number1, number2));
  const question = (`${number1} ${number2}`);
  return [question, rightAnswer];
};

export default () => {
  runGame(gameRules, startRound);
};
