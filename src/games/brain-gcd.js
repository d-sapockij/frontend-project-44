import game from '../index.js';
import { getRandomInt } from '../random.js';

const RULES = 'Find the greatest common divisor of given numbers.';
const MAX_RANGE = 100;

const getGreatestDividor = (first, second) => {
  let a = first;
  let b = second;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

const task = () => {
  const a = getRandomInt(MAX_RANGE);
  const b = getRandomInt(MAX_RANGE);

  const question = `${a} ${b}`;

  const divider = getGreatestDividor(a, b);
  const answer = `${divider}`;

  return [question, answer];
};

export default () => game(RULES, task);
