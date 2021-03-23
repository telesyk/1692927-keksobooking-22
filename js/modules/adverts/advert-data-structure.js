import utils from '../../utils/index.js';

const createStringList = function(incomeArray) {
  let list = [];

  for (let i = incomeArray.length; i > 0; i--) {
    const item = incomeArray[utils.randomInteger(0, incomeArray.length - 1)];

    const isCloneItem = list.find(value => item === value);

    if (!isCloneItem) list.push(item);
  }
  
  return list;
};


const advertDataStructure = function(data) {
  const { TITLES, DESCRIPTIONS, TYPES, TIMES, FEATURES, PHOTOS } = data;

  const avatar = `img/avatars/user0${utils.randomInteger(1, 8)}.png`;
  const title = TITLES[utils.randomInteger(0, TITLES.length - 1)];
  const description = DESCRIPTIONS[utils.randomInteger(0, DESCRIPTIONS.length - 1)];
  const price = utils.randomInteger(500, 100000);
  const type = TYPES[utils.randomInteger(0, TYPES.length - 1)];
  const rooms = utils.randomInteger(1, 5);
  const guests = utils.randomInteger(1, 15);
  const checkin = TIMES[utils.randomInteger(0, TIMES.length - 1)];
  const checkout = TIMES[utils.randomInteger(0, TIMES.length - 1)];
  const features = createStringList(FEATURES);
  const photos = createStringList(PHOTOS);
  const latitude = utils.randomFloat(35.65000, 35.70000, 5);
  const longitude = utils.randomFloat(139.70000, 139.80000, 5);
  const address = `Address ${latitude}, ${longitude}`;

  return {
    author: {
      avatar: avatar,
    },
    offer: {
      title: title,
      address: address,
      price: price,
      type: type,
      rooms: rooms,
      guests: guests,
      checkin: checkin,
      checkout: checkout,
      features: features,
      description: description,
      photos: photos,
    },
    location: {
      x: latitude,
      y: longitude,
    },
  };
};

export default advertDataStructure;
