import { TYPES } from '../../constants/index.js';

export default function setProperType(option) {
  for (const [type, properType] of TYPES ) {
    if (option === type) {
      return properType;
    }
  }
}
