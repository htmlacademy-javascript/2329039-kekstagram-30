const createIdGenerator = () => {
  let lastGenerated = 0;
  return () => {
    lastGenerated += 1;
    return lastGenerated;
  };
};

const generateCommentId = createIdGenerator();

const generatePhotoId = createIdGenerator();

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

export { generateCommentId, generatePhotoId, getRandomInteger, getRandomArrayElement };
