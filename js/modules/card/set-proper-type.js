import preferencesAdvertForm from '../../constants/preferences-advert-form.js';

const { TYPES } = preferencesAdvertForm;

export default function setProperType(type) {
  switch(type) {
    case TYPES[0]:
      type = 'Бунгало';
      break;
    case TYPES[1]:
      type = 'Квартира';
      break;
    case TYPES[2]:
      type = 'Дом';
      break;
    case TYPES[3]:
      type = 'Дворец';
      break;
    default:
      type;
  }

  return type;
}
