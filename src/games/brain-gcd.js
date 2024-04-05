import game, { getRandomInt } from '../index.js';

const RULES = 'Find the greatest common divisor of given numbers.';
const MAX_RANGE = 100;

const question = () => {
  const a = getRandomInt(MAX_RANGE);
  const b = getRandomInt(MAX_RANGE);

  return `${a} ${b}`;
};

const answer = (str) => {
  let [a, b] = str.split(' ');
  a = parseInt(a, 10);
  b = parseInt(b, 10);

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  const result = a + b;
  return `${result}`;
};

export default () => game(RULES, question, answer);
