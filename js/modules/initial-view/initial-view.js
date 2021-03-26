import enableForms from './enable-forms.js';
import disableForms from './disable-forms.js';

const initialView = function(init) {
  const formElements = document.querySelectorAll('form');

  for (const parentNode of formElements) {
    init ? enableForms(parentNode) : disableForms(parentNode);
  }
};

export default initialView;