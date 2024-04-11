import game from '../index.js';
import { getRandomInt } from '../random.js';

const RULES = 'Find the greatest common divisor of given numbers.';
const MAX_RANGE = 100;

const task = () => {
  let a = getRandomInt(MAX_RANGE);
  let b = getRandomInt(MAX_RANGE);
  const question = `${a} ${b}`;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const answer = `${a + b}`;

  return [question, answer];
};

export default () => game(RULES, task);
