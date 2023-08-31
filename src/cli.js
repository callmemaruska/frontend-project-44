import readlineSync from 'readline-sync';

const userName = () => {
    console.log('Welcome to the brain games!');
    console.log(readlineSync.question('May I have your name? '));
    console.log(`Hello, ${userName}!`);
};

export default userName;
