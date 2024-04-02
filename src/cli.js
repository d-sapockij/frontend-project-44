import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const greet = () => {
  const name = getName();
  console.log(`Hello, ${name}`);
};

export default greet;
