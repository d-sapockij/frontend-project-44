import game, { getRandomInt } from '../index.js';

const RULES = 'What is the result of the expression?';
const MAX_RANGE = 20;
const SIGNS = ['+', '-', '*'];

const question = () => {
  const a = getRandomInt(MAX_RANGE);
  const b = getRandomInt(MAX_RANGE);
  const signsLength = SIGNS.length;
  const signIndex = getRandomInt(signsLength - 1);
  const sign = SIGNS[signIndex];

  return `${a} ${sign} ${b}`;
};

const answer = (str) => {
  const [first, sign, second] = str.split(' ');
  const a = +first;
  const b = +second;
  let result = 0;
  if (sign === '+') result = a + b;
  if (sign === '-') result = a - b;
  if (sign === '*') result = a * b;

  return `${result}`;
};

export default () => game(RULES, question, answer);
