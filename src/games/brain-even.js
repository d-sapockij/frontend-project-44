import game from '../index.js';
import { getRandomInt } from '../random.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_RANGE = 10;

const isEven = (int) => int % 2 === 0;

const task = () => {
  const num = getRandomInt(MAX_RANGE);
  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(RULES, task);
