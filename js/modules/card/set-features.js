export default function setFeatures(blockElement, features) {
  const className = 'popup__feature';
  const featuresList = blockElement.children;
  const newClassNames = features.map(item => `${className}--${item}`);

  for (const feature of featuresList) {
    feature.classList.add('hidden');
  }

  for (const key in newClassNames) {
    const featureElement = blockElement.querySelector(`.${newClassNames[key]}`);
    featureElement.classList.remove('hidden');
  }
}
