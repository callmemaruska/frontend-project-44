import readlineSync from 'readline-sync';

const greetUser = () => {
    console.log('Welcome to the brain games!');
    console.log(readlineSync.question('May I have your name? '));
    console.log(`Hello, ${userName}!`);
};

export default greetUser;
