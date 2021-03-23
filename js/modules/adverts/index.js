import advertDataStructure from './advert-data-structure.js';
import advertsData from './adverts-data.js';

const createTestAdvertsData = function() {
  let adverts = [];

  for (let i = 0; i < advertsData.ADVERTS_QUANTITY; i++) {
    const advert = advertDataStructure(advertsData);

    adverts.push(advert);
  }

  return adverts;
};

export default { 
  advertsData,
  advertDataStructure,
  createTestAdvertsData,
};
