const NAMES = [
  'Николай',
  'Екатерина',
  'Максим',
  'Никита',
  'Сергей',
  'Татьяна',
  'Андрей',
  'Людмила'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Моё лучшее фото!',
  'Лето 2023 года',
  'Первый раз в первый класс',
  'Когда то это казалось весёлым',
  'Сколько можно?',
  'До свидания',
  'Это был прекрасный день'
];
const SOME_USERS = 25;
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // eslint-disable-next-line no-console
      console.error(`Перебраны все числа из диапозона от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min.max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const createDescription = () => ({
  id: createRandomIdFromRangeGenerator(1, 25),
  url: `photos/${createRandomIdFromRangeGenerator(1,6)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(5, 200),
  comments: {
    id: createRandomIdFromRangeGenerator(),
    avatar: `img/avatar-${createRandomIdFromRangeGenerator(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  }
});

const someUsers = Array.from({ length: SOME_USERS}, createDescription);

