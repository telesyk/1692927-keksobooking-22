import preferencesAdvertForm from '../../constants/preferences-advert-form.js';
const { TYPES, MIN_PRICES } = preferencesAdvertForm;

export default function updatePriceField(form, typeValue) {
  const priceInput = form.querySelector('#price');
  let updatedPrice = 0;

  switch (typeValue) {
    case TYPES.values[1]:
      updatedPrice = MIN_PRICES[0];
      break;
  
    case TYPES.values[2]:
      updatedPrice = MIN_PRICES[1];
      break;
  
    case TYPES.values[3]:
      updatedPrice = MIN_PRICES[2];
      break;
  
    default:
      break;
  }

  priceInput.placeholder = updatedPrice;
  priceInput.min = updatedPrice;

  return priceInput;
}
