import preferencesAdvertForm from '../../constants/preferences-advert-form.js';

const { TYPES } = preferencesAdvertForm;

export default function setProperType(type) {
  switch(type) {
    case TYPES.values[0]:
      type = TYPES.titles[0];
      break;
    case TYPES.values[1]:
      type = TYPES.titles[1];
      break;
    case TYPES.values[2]:
      type = TYPES.titles[2];
      break;
    case TYPES.values[3]:
      type = TYPES.titles[3];
      break;
    default:
      type;
  }

  return type;
}
