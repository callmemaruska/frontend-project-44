import runGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (x) => {
  const sqrt = Math.sqrt(x);
  if (x < 2) {
    return 'no';
  }
  for (let i = 2; i <= sqrt; i += 1) {
    if (x % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const startRound = () => {
  const guessNumber = generateRandomNumber(0, 25);
  const rightAnswer = isPrime(guessNumber);
  const question = (`${guessNumber}`);
  return [question, rightAnswer];
};

export default () => {
  runGame(gameRules, startRound);
};
