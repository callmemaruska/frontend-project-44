import runGame from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (x) => {
  return (x % 2 === 0) ? 'yes' : 'no';
};

const startRound = () => {
  const number = randomNumber(0, 100);
  const rightAnswer = String(isEven(number));
  const question = (`${number}`);
  return [question, rightAnswer];
};

export default () => {
  runGame(gameRules, startRound);
};
