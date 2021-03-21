import preferencesAdvertForm from '../../constants/preferences-advert-form.js';

export default function updatePriceField(form, typeValue) {
  const priceInput = form.querySelector('#price');
  let updatedPrice = 0;

  switch (typeValue) {
    case preferencesAdvertForm.TYPES[1]:
      updatedPrice = 1000;
      break;
  
    case preferencesAdvertForm.TYPES[2]:
      updatedPrice = 5000;
      break;
  
    case preferencesAdvertForm.TYPES[3]:
      updatedPrice = 10000;
      break;
  
    default:
      break;
  }

  priceInput.placeholder = updatedPrice;
  priceInput.min = updatedPrice;

  return priceInput;
}
