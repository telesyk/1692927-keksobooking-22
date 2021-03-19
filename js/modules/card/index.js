import createNewCard from './create-new-card.js';

export default function(data) {
  const template = document.querySelector('#card').content;
  const clonedTemplate = template.cloneNode(true);

  return createNewCard(clonedTemplate, data);
}