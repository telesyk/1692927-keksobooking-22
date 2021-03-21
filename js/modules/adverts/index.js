import advertDataStructure from './advert-data-structure.js';
import advertsData from './adverts-data.js';

const createAdvertsData = function() {
  let adverts = [];

  for (let i = 0; i < 10; i++) {
    const advert = advertDataStructure(advertsData);

    adverts.push(advert);
  }

  return adverts;
};

export { createAdvertsData as adverts };
