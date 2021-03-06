import { MIN_PRICES } from '../../constants/index.js';

export default function updatePriceField(formElement, typeValue) {
  const priceInputElement = formElement.querySelector('#price');
  let updatedPrice = 0;

  for (const type in MIN_PRICES) {
    if (typeValue === type) {
      updatedPrice = MIN_PRICES[type];
    }
  }

  priceInputElement.placeholder = updatedPrice;
  priceInputElement.min = updatedPrice;

  return priceInputElement;
}
