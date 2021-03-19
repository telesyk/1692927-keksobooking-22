import modules from './modules/index.js';

const {adverts, card} = modules;

const advertsData = adverts()[0];
// /* debug */console.debug('main js', advertsData );

const canvasBlock = document.querySelector('#map-canvas');
canvasBlock.appendChild( card(advertsData) );
