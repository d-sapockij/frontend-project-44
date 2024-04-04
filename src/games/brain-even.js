import game, { getRandomInt } from '../index.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_RANGE = 10;

const isEven = (int) => int % 2 === 0;

const question = () => getRandomInt(MAX_RANGE);

const answer = (num) => (isEven(num) ? 'yes' : 'no');

export default () => game(RULES, question, answer);
