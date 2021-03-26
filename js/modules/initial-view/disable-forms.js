const disableForms = function(formNode) {
  formNode.classList.add('ad-form--disabled');
  for (const childNode of formNode.children) {
    childNode.setAttribute('disabled', true);
  }
};

export default disableForms;