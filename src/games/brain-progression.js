import game, { getRandomInt, getRandomIntInterval } from '../index.js';

const RULES = 'What number is missing in the progression?';
const MAX_RANGE = 100;
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 15;
const MAX_PROGRESSION_STEP = 5;

const task = () => {
  const progressionLength = getRandomIntInterval(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const progressionStep = getRandomIntInterval(1, MAX_PROGRESSION_STEP);
  const hiddenItemIndex = getRandomInt(progressionLength);

  let item = getRandomInt(MAX_RANGE);
  const progression = [];
  let result = 0;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenItemIndex) {
      progression.push('..');
      result = item;
    } else {
      progression.push(item);
    }
    item += progressionStep;
  }

  const question = progression.join(' ');
  const answer = `${result}`;

  return [question, answer];
};

export default () => game(RULES, task);
