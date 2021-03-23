import setProperType from './set-proper-type.js';
import setPhotos from './set-photos.js';
import setFeatures from './set-features.js';

export default function createNewCard(template, data) {
  const { author, offer } = data;
  
  const newCardElement = template.querySelector('.popup');
  const avatarElement = newCardElement.querySelector('.popup__avatar');
  const titleElement = newCardElement.querySelector('.popup__title');
  const addressElement = newCardElement.querySelector('.popup__text--address');
  const priceElement = newCardElement.querySelector('.popup__text--price');
  const typeElement = newCardElement.querySelector('.popup__type');
  const capacityElement = newCardElement.querySelector('.popup__text--capacity');
  const timeElement = newCardElement.querySelector('.popup__text--time');
  const featuresElement = newCardElement.querySelector('.popup__features');
  const descriptionElement = newCardElement.querySelector('.popup__description');
  const photosElement = newCardElement.querySelector('.popup__photos');

  avatarElement.src = author.avatar;
  titleElement.textContent = offer.title;
  addressElement.textContent = offer.address;
  priceElement.innerHTML = `${offer.price} <span>₽/ночь</span>`;
  typeElement.textContent = setProperType(offer.type);
  capacityElement.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  timeElement.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  descriptionElement.textContent = offer.description;

  setPhotos(photosElement, offer.photos);
  setFeatures(featuresElement, offer.features);
  
  return newCardElement;
}
