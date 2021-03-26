import updatePriceField from './update-price-field.js';
import updateTimeFields from './update-time-fields.js';

export default function advertForm(formElement) {
  const addressElement = formElement.querySelector('input[name=address]');
  addressElement.setAttribute('readonly', true);

  const onFormElementChange = function(event) {
    const target = event.target;

    switch (target.id) {
      case 'type':
        updatePriceField(formElement, target.value);
        break;
        
      case 'timein':
        updateTimeFields(target.id);
        break;
        
      case 'timeout':
        updateTimeFields(target.id);
        break;
    }
  };

  formElement.addEventListener('change', onFormElementChange);

  return formElement;
}
