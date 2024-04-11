import game from '../index.js';
import { getRandomInt, getRandomIntInterval } from '../random.js';

const RULES = 'What number is missing in the progression?';
const MAX_RANGE = 100;
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 15;
const MAX_PROGRESSION_STEP = 5;

const getProgression = () => {
  const progressionLength = getRandomIntInterval(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const progressionStep = getRandomIntInterval(1, MAX_PROGRESSION_STEP);
  const hiddenItemIndex = getRandomInt(progressionLength);

  let item = getRandomInt(MAX_RANGE);
  const progression = [];
  let hiddenItem = 0;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenItemIndex) {
      progression.push('..');
      hiddenItem = item;
    } else {
      progression.push(item);
    }
    item += progressionStep;
  }

  return [progression, hiddenItem];
};

const task = () => {
  const [progression, hiddenItem] = getProgression();

  const question = progression.join(' ');
  const answer = `${hiddenItem}`;

  return [question, answer];
};

export default () => game(RULES, task);
