export default function setPhotos(photoBlock, offerPhotos) {
  const clonePhoto = photoBlock.querySelector('.popup__photo');
  photoBlock.removeChild(photoBlock.children[0]);

  offerPhotos.forEach(url => {
    let newPhoto = clonePhoto.cloneNode();
    newPhoto.src = url;

    photoBlock.appendChild( newPhoto );
  });
}
