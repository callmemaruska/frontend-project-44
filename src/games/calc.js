import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(`Hello, ${userName}!`);

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

const calc = () => {
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = (Math.floor(Math.random() * 10));
    const randomNumber2 = (Math.floor(Math.random() * 10));
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * 3)
    const randomOperator = operators[randomIndex];

    const rightAnswer = String(calculate(randomNumber1, randomNumber2, randomOperator));
    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');
     
    

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
return console.log(`Congratulations, ${userName}!`);
};

export default calc;