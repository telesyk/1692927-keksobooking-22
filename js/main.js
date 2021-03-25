import { INITIALIZED, MAP_INIT } from './constants/index.js';
import modules from './modules/index.js';

const formElement = document.querySelector('.ad-form');
let mapState = !INITIALIZED;

modules.initialView(INITIALIZED);
modules.mapInitialization({ mapState, MAP_INIT })
modules.advertForm.form(formElement);
modules.advertForm.updateLocationField(formElement, MAP_INIT);

