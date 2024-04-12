import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}`);
  return name;
};

export default greet;
