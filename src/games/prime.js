import newGame from '../index.js';

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
  const randomNumber = Math.floor(Math.random() * 25);
  const rightAnswer = String(isPrime(randomNumber));
  const question = (`${randomNumber}`);
  return [question, rightAnswer];
};

export default () => {
  newGame(gameRules, startRound);
};
