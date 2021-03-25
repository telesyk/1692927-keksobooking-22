const disableForms = function(formNode) {
  formNode.classList.add('ad-form--disabled');
  /* debug */console.debug('Forms Disabled');
  for (const childNode of formNode.children) {
    childNode.setAttribute('disabled', true);
  }
};

export default disableForms;