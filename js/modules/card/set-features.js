export default function setFeatures(block, features) {
  const className = 'popup__feature';
  const featuresList = block.children;
  const newClassNames = features.map(item => `${className}--${item}`);

  for (const feature of featuresList) {
    const unicClass = feature.classList[1];
    const isAvailable = newClassNames.includes(unicClass);
    if (!isAvailable) feature.classList.add('hidden');
  }
};
