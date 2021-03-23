import preferencesAdvertForm from '../../constants/index.js';

const TYPES = Object.entries(preferencesAdvertForm.TYPES);

export default function setProperType(option) {
  for (const [type, properType] of TYPES ) {
    if (option === type) {
      return properType;
    }
  }
}
