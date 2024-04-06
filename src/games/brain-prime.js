import game, { getRandomInt } from '../index.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MAX_RANGE = 100;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const task = () => {
  const num = getRandomInt(MAX_RANGE);
  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(RULES, task);
