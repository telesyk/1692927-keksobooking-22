import advertDataStructure from './advert-data-structure.js';
import advertsData from './adverts-data.js';

const createAdvertsArray = function() {
  let adverts = [];

  for (let i = 0; i < 10; i++) {
    const advert = advertDataStructure(advertsData);

    adverts.push(advert);
  }

  return adverts;
};

export { createAdvertsArray as  adverts };
