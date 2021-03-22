import modules from './modules/index.js';

const {
  adverts,
  card,
  advertForm,
} = modules;

/* For module 5 task 1 */
const testAdvertData = adverts.advertDataStructure(adverts.advertsData);
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild( card(testAdvertData) );

/* Form module 5 task 2 */
const form = document.querySelector('.ad-form');
advertForm(form);
