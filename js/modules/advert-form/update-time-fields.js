export default function updateTimeFields(timeFieldId) {
  const firstField = document.querySelector(`#${timeFieldId}`);
  const siblings = firstField.parentNode.children;

  const getSecondField = function() {
    for (const node of siblings) {
      if (node.tagName === 'SELECT' && node.id !== firstField.id) {
        return node;
      }
    }
  };
  
  const secondField = getSecondField();

  secondField.value = firstField.value;

  return secondField;
}
