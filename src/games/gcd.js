import runGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (number1, number2) => {
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
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
