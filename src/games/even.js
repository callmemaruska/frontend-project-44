import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(`Hello, ${userName}!`);

const isEven = () => {
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);
    let rightAnswer = '';
    if (randomNumber % 2 === 0) {
      rightAnswer = 'yes';
    } else if (randomNumber % 2 !== 0) {
      rightAnswer = 'no';
    }

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default isEven;
