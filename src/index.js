import readlineSync from 'readline-sync';

const ATTEMT_COUNT = 3;

const getRandomInt = (max) => Math.floor(Math.random() * max);

function getRandomIntInterval(start, end) {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min) + min);
}

const getUserName = () => readlineSync.question('May I have your name? ');
const getUserAnswer = () => readlineSync.question('Your answer: ');

const greet = (rules) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}`);
  console.log(rules);

  return name;
};

const game = (rules, task) => {
  const name = greet(rules);

  for (let i = 0; i < ATTEMT_COUNT; i += 1) {
    const [question, expectedAnswer] = task();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');

    if (i === ATTEMT_COUNT - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export { getRandomInt, getRandomIntInterval };
export default game;
