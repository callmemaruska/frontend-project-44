import newGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (x) => {
  if (x % 2 === 0) {
    return 'yes';
  } return 'no';
};

const startRound = () => {
  const randomNumber = (Math.floor(Math.random() * 10));
  const rightAnswer = String(isEven(randomNumber));
  const question = (`${randomNumber}`);
  return [question, rightAnswer];
};

export default () => {
  newGame(gameRules, startRound);
};
