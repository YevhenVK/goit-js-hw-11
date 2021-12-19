import './sass/main.scss';
import { Notify } from 'notiflix';

import pictureItems from './picture-item';
import ButtonLoadMore from './button-loadmore';
import ImageApi from './pixabay';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// const totalHits = 500;

const imageSearchForm = document.querySelector('.search-form');
// const imageBox = document.querySelector('.box');

const galleryImages = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a');

// const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: "alt",
//     captionDelay: 250,
//     captionPosition: 'bottom'
// });

const pixabayItem = new ImageApi();
const buttonLoadMore = new ButtonLoadMore({
  selector: '.load-more',
  hidden: true,
});


imageSearchForm.addEventListener('submit', submitForm);
buttonLoadMore.refs.button.addEventListener('click', fetchPicture);


function addImageList(photos) {
  galleryImages.insertAdjacentHTML('beforeend', pictureItems(photos));
}

function clearImageList() {
  galleryImages.innerHTML = '';
}

function submitForm(event) {
  event.preventDefault();
  pixabayItem.query = event.currentTarget.elements.searchQuery.value.trim();

  if (pixabayItem.query === '') {
    buttonLoadMore.hideButton();
    clearImageList();
    return Notify.info('Nothing has been entered here yet');
  }
  pixabayItem.resetPage();

  clearImageList();
  fetchPicture();
}



function fetchPicture(event) {
  buttonLoadMore.hideButton();
  pixabayItem
    .fetchPicture()
    .then(photos => {
      addImageList(photos.data.hits);
      getGallery();
      searchTotalHits(photos.data.totalHits);
      buttonLoadMore.showButton();
      emptyPicture(photos.data.hits);
      endOfSearch();
    })
    .catch(error => {
      console.log('error');
    });
}




function emptyPicture(array) {
  if (array.length === 0) {
    buttonLoadMore.hideButton();
    Notify.failure('Sorry, there are no images matching your search query. Please try again.');
  }
}

function endOfSearch() {
  if (galleryImages.children.length >= totalHits) {
    buttonLoadMore.hideButton();
    Notify.failure("We're sorry, but you've reached the end of search results.");
  }
  if (galleryImages.children.length > 40) {
    addScroll()
  }
}

function searchTotalHits(totalHits) {
  if (totalHits > 0) {
    return Notify.info(`Hooray! We found ${totalHits} images.`);
  }
}

function getGallery() {
  let lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

function addScroll() {
  const { height: cardHeight } = document
    .querySelector(".gallery")
    .firstElementChild.getBoundingClientRect();
  
  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });
}

