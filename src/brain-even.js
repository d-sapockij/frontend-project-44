import readlineSync from 'readline-sync';

const maxRandomRange = 10;
const attemptCount = 3;

const getName = () => readlineSync.question('May I have your name? ');
const getAnswer = () => readlineSync.question('Your answer: ');

const getRandomInt = (max) => Math.floor(Math.random() * max);
const isEven = (int) => int % 2 === 0;

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < attemptCount; i += 1) {
    const number = getRandomInt(maxRandomRange);
    console.log(`Question: ${number}`);

    const answer = getAnswer();
    const expectedAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');

    if (i === attemptCount - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default game;
