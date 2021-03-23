import modules from './modules/index.js';

const {
  adverts,
  card,
  advertForm,
} = modules;

const testAdvertData = adverts.advertDataStructure(adverts.data);
const mapCanvasElement = document.querySelector('#map-canvas');
mapCanvasElement.appendChild( card(testAdvertData) );

const formElement = document.querySelector('.ad-form');
advertForm(formElement);
