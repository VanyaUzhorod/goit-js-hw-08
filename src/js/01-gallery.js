import { galleryItems } from "./gallery-items.js";
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";


const galleryList = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", markup);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}"/>
        </a>
      </li>`;
    })
    .join("");
}

const lightboxModal = new SimpleLightbox('.gallery a',
    {
    optionsData: 'alt',
    optionsPosition: 'bottom',
    captionDelay: 250,
});