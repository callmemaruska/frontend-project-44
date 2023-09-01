import readlineSync from 'readline-sync';

const greetUser = () => {
  const userName = readlineSync.question('Welcome to the brain games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greetUser;
