import { NAMES, MESSAGES, DESCRIPTIONS, SOME_USERS } from './setup.js';
import { generateCommentId, generatePhotoId, getRandomInteger, getRandomArrayElement } from './util.js';

function getRandomCommentArray() {
  const commentsArray = [];
  let object = {};
  for (let i = 0; i < getRandomInteger(0,30); i++) {
    object = {
      id: generateCommentId(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)
    };
    commentsArray.push(object);
  }
  return commentsArray;
}


const createDescription = (index) => ({
  id: index + 1,
  url: `photos/${generatePhotoId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(5, 200),
  comments: getRandomCommentArray()
});

const someUsers = () => Array.from({ length: SOME_USERS}, (_el, index) => createDescription(index));


export {someUsers};
