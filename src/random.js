const getRandomInt = (max) => Math.floor(Math.random() * max);

function getRandomIntInterval(start, end) {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min) + min);
}

export { getRandomInt, getRandomIntInterval };
