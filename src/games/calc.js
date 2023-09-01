import runGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

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
  const number1 = generateRandomNumber(0, 10);
  const number2 = generateRandomNumber(0, 10);
  const randomIndex = generateRandomNumber(0, operators.length);
  const randomOperator = operators[randomIndex];

  const rightAnswer = String(calculate(number1, number2, randomOperator));
  const question = (`${number1} ${randomOperator} ${number2}`);
  return [question, rightAnswer];
};

export default () => {
  runGame(gameRules, startRound);
};
