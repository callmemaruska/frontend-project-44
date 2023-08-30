import runGame from '../index.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const startRound = () => {
  const randomNumber1 = (Math.floor(Math.random() * 10));
  const randomNumber2 = (Math.floor(Math.random() * 10));
  const randomIndex = Math.floor(Math.random() * 3);
  const randomOperator = operators[randomIndex];

  const rightAnswer = String(calculate(randomNumber1, randomNumber2, randomOperator));
  const question = (`${randomNumber1} ${randomOperator} ${randomNumber2}`);
  return [question, rightAnswer];
};

export default () => {
  runGame(gameRules, startRound);
};
