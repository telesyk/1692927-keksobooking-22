import modules from './modules/index.js';

const {
  adverts,
  card,
  advertForm,
} = modules;

const formElement = document.querySelector('.ad-form');
advertForm(formElement);

/* should be moved to separate modules */
const INIT_STATE = true;

/* INIT module */
const setFormDisabled = function(formNode) {
  formNode.classList.add('ad-form--disabled');
  /* debug */console.debug('Forms disabled');
  for (const childNode of formNode.children) {
    childNode.setAttribute('disabled', true);
  }
};
const setFormEnabled = function(formNode) {
  formNode.classList.remove('ad-form--disabled');
  for (const childNode of formNode.children) {
    childNode.removeAttribute('disabled');
  }
};

const afterPageLoaded = function(init) {
  const formElements = document.querySelectorAll('form');
  for (const parentNode of formElements) {
    if (!init) {
      setFormEnabled(parentNode);
    } else {
      setFormDisabled(parentNode);
    }
  }
};

afterPageLoaded(INIT_STATE);

/* MAP module */
const mapElementId = 'map-canvas';

const mapInit = function() {
  const initPos = {
    lat: 35.6864,
    lng: 139.7650,
    zoom: 13,
  };
  const map = L.map(mapElementId)
    .on('load', () => {
      // afterPageLoaded(!INIT_STATE);
      /* debug */console.debug('Карта инициализирована');
      afterPageLoaded(!INIT_STATE);
    })
    .setView({
      lat: initPos.lat, 
      lng: initPos.lng,
    }, initPos.zoom);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '/img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker({
      lat: initPos.lat, 
      lng: initPos.lng,
    },
    {
      icon: mainPinIcon,
      draggable: true,
    },
  );

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    /* debug */console.debug(evt.target.getLatLng());
  });
};

setTimeout(mapInit, 500);
