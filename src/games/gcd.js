import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(`Hello, ${userName}!`);

const getGCD = (x, y) => {
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

const gcd = () => {
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = (Math.floor(Math.random() * 20));
    const randomNumber2 = (Math.floor(Math.random() * 20));

    const rightAnswer = String(getGCD(randomNumber1, randomNumber2));
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
return console.log(`Congratulations, ${userName}!`);
};

export default gcd;
