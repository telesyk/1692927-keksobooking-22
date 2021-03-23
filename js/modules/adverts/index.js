import advertDataStructure from './advert-data-structure.js';
import data from '../../constants/index.js';

const createTestAdvertsData = function() {
  let adverts = [];

  for (let i = 0; i < data.ADVERTS_QUANTITY; i++) {
    const advert = advertDataStructure(data);

    adverts.push(advert);
  }

  return adverts;
};

export default {
  data,
  advertDataStructure,
  createTestAdvertsData,
};
