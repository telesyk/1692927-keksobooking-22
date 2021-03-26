import initialView from '../initial-view/index.js';
import updateLocationField from '../advert-form/update-location-field.js';

const attributionContent = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const mapInitialization = function(params) {
  const { mapState, initConf, advertsList, advertCardElement } = params;

  const initPos = {
    lat: initConf.latitude,
    lng: initConf.longitude,
    zoom: initConf.zoom,
  };
  
  const mainPinIcon = L.icon({
    iconUrl: initConf.icon.url,
    iconSize: [initConf.icon.width, initConf.icon.height],
    iconAnchor: [(initConf.icon.width / 2), initConf.icon.height],
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
    { attribution: attributionContent },
  ).addTo(map);

  mainPinMarker
    .addTo(map)
    .on('moveend', (evt) => {
      const { lat, lng } = evt.target.getLatLng();
      updateLocationField({latitude:lat.toFixed(5), longitude:lng.toFixed(5)});
    });

  advertsList.forEach(advert => {
    const advertIcon = L.icon({
      iconUrl: initConf.customIcon.url,
      iconSize: [initConf.customIcon.width, initConf.customIcon.height],
      iconAnchor: [(initConf.customIcon.width / 2), initConf.customIcon.height],
    });
    const marker = L.marker({
      lat: advert.location.x,
      lng: advert.location.y,
    }, { icon: advertIcon });

    marker
      .addTo(map)
      .bindPopup( advertCardElement(advert) );
  });
};

export default mapInitialization;