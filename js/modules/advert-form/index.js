import updatePriceField from './update-price-field.js';
import updateTimeFields from './update-time-fields.js';

export default function advertForm(form) {
  const handleChange = function(event) {
    const target = event.target;

    switch (target.id) {
      case 'type':
        updatePriceField(form, target.value);
        break;
        
      case 'timein':
        updateTimeFields(target.id);
        break;
        
      case 'timeout':
        updateTimeFields(target.id);
        break;
    
      default:
        break;
    }
  };

  form.addEventListener('change', handleChange);

  return form;
}
