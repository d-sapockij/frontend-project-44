import readlineSync from 'readline-sync';
import greet from './greet.js';

const ATTEMT_COUNT = 3;

const getUserAnswer = () => readlineSync.question('Your answer: ');

const game = (rules, task) => {
  const name = greet(rules);
  let mistake = false;

  for (let i = 0; i < ATTEMT_COUNT; i += 1) {
    const [question, expectedAnswer] = task();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      mistake = true;
      break;
    }

    console.log('Correct!');
  }

  if (mistake) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export default game;
