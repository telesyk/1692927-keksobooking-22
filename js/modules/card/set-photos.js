export default function setPhotos(photoBlockElement, offerPhotos) {
  const clonePhotoElement = photoBlockElement.querySelector('.popup__photo');
  photoBlockElement.removeChild(photoBlockElement.children[0]);

  offerPhotos.forEach(url => {
    let newPhotoNode = clonePhotoElement.cloneNode();
    newPhotoNode.src = url;

    photoBlockElement.appendChild( newPhotoNode );
  });
}
