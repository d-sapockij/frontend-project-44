import game from '../index.js';
import { getRandomInt } from '../random.js';

const RULES = 'What is the result of the expression?';
const MAX_RANGE = 20;
const SIGNS = ['+', '-', '*'];

const task = () => {
  const a = getRandomInt(MAX_RANGE);
  const b = getRandomInt(MAX_RANGE);
  const signsLength = SIGNS.length;
  const signIndex = getRandomInt(signsLength);
  const sign = SIGNS[signIndex];

  let result = 0;

  if (sign === '+') result = a + b;
  if (sign === '-') result = a - b;
  if (sign === '*') result = a * b;

  const question = `${a} ${sign} ${b}`;
  const answer = `${result}`;

  return [question, answer];
};

export default () => game(RULES, task);
