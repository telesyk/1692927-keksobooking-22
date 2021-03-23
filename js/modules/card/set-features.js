export default function setFeatures(block, features) {
  const className = 'popup__feature';
  const featuresList = block.children;
  const newClassNames = features.map(item => `${className}--${item}`);

  for (const feature of featuresList) {
    let unicClass = null;
    for (const classListItem of feature.classList) {
      if (classListItem !== className) unicClass = classListItem;
    }
    const isAvailable = newClassNames.includes(unicClass);
    if (!isAvailable) feature.classList.add('hidden');
  }
}
