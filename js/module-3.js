/* Module 3
* https://up.htmlacademy.ru/javascript/22/tasks/3
*/

import { randomInteger, randomFloat } from './module-2.js';

const TITLES = [
  'Two-Bedroom Apartment With Terrace',
  'Perfectly Located 1 Br Apartment',
  'Private Furnished Room With Balcony',
  'Holiday Rental San Lorenzo District Studio',
  'Elegant Apartment With A Panoramic View',
];
const DESCRIPTIONS = [
  'Apartment Stylishly decorated, apartments feature a spacious living area with sofas and a flat-screen TV. Equipped with all needed cooking facilities, the open kitchen includes a dishwasher and a microwave. Featuring a bath or shower, the bathroom also comes with a hairdryer and free toiletries',
  'Apartment Begin and end your travels in an elegantly furnished apartment with all the amenities of home. Beautifully furnished and with all the necessities for an enjoyable night in, this apartment is an easy, yet luxurious way to spend your stay in the city.',
  'Coliving "The Lanes" Managed by Common | All utilities, wifi, and a bi-monthly cleaning service of shared spaces included',
  'Rental basis: Entire house or apartment. Number of bedrooms: 1; Number of other rooms with beds: 0',
  'Number of bedrooms: 3; Number of other rooms with beds: 0 This appartment is truly in the perfect location – slightly away from the hubbub of the historical centre, but close enough to walk there and to the famous avenida da Liberdade as well as Restauradores and Rossio squares.',
];
const TIMES = ['12:00', '13:00', '14:00'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];


const createStringList = function(incomeArray) {
  let list = [];

  for (let i = incomeArray.length; i > 0; i--) {
    const item = incomeArray[randomInteger(0, incomeArray.length - 1)];

    const isCloneItem = list.find(value => item === value);

    if (!isCloneItem) list.push(item);
  }
  
  return list;
};


const generateSingleAdvert = function() {
  const avatar = `img/avatars/user0${randomInteger(1, 8)}.png`;
  const title = TITLES[randomInteger(0, TITLES.length - 1)];
  const description = DESCRIPTIONS[randomInteger(0, DESCRIPTIONS.length - 1)];
  const price = randomInteger(500, 3500);
  const type = TYPES[randomInteger(0, TYPES.length - 1)];
  const rooms = randomInteger(1, 5);
  const guests = randomInteger(1, 15);
  const checkin = TIMES[randomInteger(0, TIMES.length - 1)];
  const checkout = TIMES[randomInteger(0, TIMES.length - 1)];
  const features = createStringList(FEATURES);
  const photos = createStringList(PHOTOS);
  const latitude = randomFloat(35.65000, 35.70000, 5);
  const longitude = randomFloat(139.70000, 139.80000, 5);
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
    }
  };
};


const generateAdverts = function() {
  let adverts = new Array(10);

  for (let i = 0; i <= adverts.length - 1; i++) {
    const advert = generateSingleAdvert();

    adverts[i] = advert;
  }

  return adverts;
};

export { generateAdverts, generateSingleAdvert };
