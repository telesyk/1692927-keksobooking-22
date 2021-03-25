import initialView from '../initial-view/index.js';

const mapInitialization = function(params) {
  const { mapState, MAP_INIT } = params;

  const initPos = {
    lat: MAP_INIT.latitude,
    lng: MAP_INIT.longitude,
    zoom: MAP_INIT.zoom,
  };
  
  const mainPinIcon = L.icon({
    iconUrl: MAP_INIT.icon.url,
    iconSize: [MAP_INIT.icon.width, MAP_INIT.icon.height],
    iconAnchor: [(MAP_INIT.icon.width / 2), MAP_INIT.icon.height],
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

  const map = L.map('map-canvas')
    .on('load', () => {
      initialView(mapState);
    })
    .setView({
      lat: initPos.lat, 
      lng: initPos.lng,
    }, initPos.zoom);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' },
  ).addTo(map);

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    /* debug */console.debug(evt.target.getLatLng());
  });
};

export default mapInitialization;