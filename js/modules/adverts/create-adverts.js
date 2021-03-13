import createSingleAdvert from './create-single-advert.js';

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
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const advertData = {
  TITLES,
  DESCRIPTIONS,
  TYPES,
  TIMES,
  FEATURES,
  PHOTOS,
};

const createAdverts = function() {
  let adverts = [];

  for (let i = 0; i < 10; i++) {
    const advert = createSingleAdvert(advertData);

    adverts.push(advert);
  }

  return adverts;
};

export default createAdverts;
