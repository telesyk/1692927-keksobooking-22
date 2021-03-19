import setProperType from './set-proper-type.js';
import setPhotos from './set-photos.js';
import setFeatures from './set-features.js';
// import utils from '../../utils/index.js';

export default function createNewCard(template, data) {
  const { author, offer, location } = data;
  
  const elementNewCard = template.querySelector('.popup');
  const elementAvatar = elementNewCard.querySelector('.popup__avatar');
  const elementTitle = elementNewCard.querySelector('.popup__title');
  const elementAddress = elementNewCard.querySelector('.popup__text--address');
  const elementPrice = elementNewCard.querySelector('.popup__text--price');
  const elementType = elementNewCard.querySelector('.popup__type');
  const elementCapacity = elementNewCard.querySelector('.popup__text--capacity');
  const elementtTime = elementNewCard.querySelector('.popup__text--time');
  const elementFeatures = elementNewCard.querySelector('.popup__features');
  const elementDescription = elementNewCard.querySelector('.popup__description');
  const elementPhotos = elementNewCard.querySelector('.popup__photos');

  // utils.hideEmptyElement(author.avatar, elementAvatar);
  elementAvatar.src = author.avatar;
  elementTitle.textContent = offer.title;
  elementAddress.textContent = offer.address;
  elementPrice.innerHTML = `${offer.price} ₽/ночь`;
  elementType.textContent = setProperType(offer.type);
  elementCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  elementtTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  elementDescription.textContent = offer.description;

  setPhotos(elementPhotos, offer.photos);
  setFeatures(elementFeatures, offer.features);
  
  return elementNewCard;
};
