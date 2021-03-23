export default function updateTimeFields(timeElementId) {
  const currentTimeElement = document.querySelector(`#${timeElementId}`);
  const siblings = currentTimeElement.parentNode.children;

  const getSiblingTimeElement = function() {
    for (const siblingElement of siblings) {
      if (siblingElement.tagName === currentTimeElement.tagName
          && siblingElement.id !== currentTimeElement.id) {
        return siblingElement;
      }
    }
  };
  
  const siblingTimeElement = getSiblingTimeElement();

  siblingTimeElement.value = currentTimeElement.value;

  return siblingTimeElement;
}
