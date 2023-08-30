import runGame from '../index.js';

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
  const randomNumber1 = (Math.floor(Math.random() * 19));
  const randomNumber2 = (Math.floor(Math.random() * 19));

  const rightAnswer = String(findGCD(randomNumber1, randomNumber2));
  const question = (`${randomNumber1} ${randomNumber2}`);
  return [question, rightAnswer];
};

export default () => {
  runGame(gameRules, startRound);
};
