const enableForms = function(formNode) {
  formNode.classList.remove('ad-form--disabled');
  for (const childNode of formNode.children) {
    childNode.removeAttribute('disabled');
  }
};

export default enableForms;