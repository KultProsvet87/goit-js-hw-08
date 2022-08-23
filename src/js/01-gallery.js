// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkUp = makeGalleryMarkup(galleryItems);
galleryEl.innerHTML = galleryMarkUp;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox');

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    )
    .join('');
}
