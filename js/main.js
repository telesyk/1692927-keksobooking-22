import { INITIALIZED, MAP_INIT } from './constants/index.js';
import modules from './modules/index.js';

const formElement = document.querySelector('.ad-form');
const advertsList = modules.adverts.createTestAdvertsData();
const advertCardElement = modules.card;
// console.debug(advertsList);
const mapParams = {
  mapState: !INITIALIZED,
  initConf: MAP_INIT,
  advertsList,
  advertCardElement,
};

modules.initialView(INITIALIZED);
modules.mapInitialization(mapParams);
modules.advertForm.form(formElement);
modules.advertForm.updateLocationField(MAP_INIT);

