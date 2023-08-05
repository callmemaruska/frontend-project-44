import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(`Hello, ${userName}!`);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

const getArrayProgression = (length, firstNumber, step) => {
    const progressionArr = [];
    let currentNumber = firstNumber;
    for (let i = 0; i < length; i += 1) {
      progressionArr.push(currentNumber);
      currentNumber += step;
    }
    return progressionArr;
  
};
const randomArrIndex = (arr) => {
    const indexArr = Math.floor(Math.random() * arr.length);
    return indexArr;
};
 
const progression = () => {
  for (let i = 1; i <= 3; i +=1) {

  
    const length = randomNumber(5, 10);
    const firstNumber = randomNumber(1, 20);
    const step = randomNumber(2, 10);
    const progressionArr = getArrayProgression(length, firstNumber, step);
    const guessNumber = randomArrIndex(progressionArr);
    
    const rightAnswer = String(progressionArr[guessNumber]);
    progressionArr[guessNumber] = '..';
    console.log(`Question: ${progressionArr}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
return console.log(`Congratulations, ${userName}!`);
}


export default progression;