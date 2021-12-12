import './sass/main.scss';
import pictureItem from './picture-item';
import PixabayItem from './pixabay';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a');
const pixabayItem = new PixabayItem();

const refs = {
  imageSearchForm: document.querySelector('.search-form'),
  galleryImages: document.querySelector('.gallery'),
  loadMoreImage: document.querySelector('.load-more'),
  imageBox: document.querySelector('.box'),
}


// function galleryContainer(data) {
//   galleryContainer.insertAdjacentHTML('afterbegin', elementsFromGallery);
// } 
// const elementsFromGallery = pictureItem(data);

refs.imageSearchForm.addEventListener('submit', submitForm);
refs.loadMoreImage.addEventListener('click', submitForm);



function submitForm(event) {
  evt.preventDefault();

  clearList();
  refs.loadMoreImage = evt.currentTarget.elements.searchQuery.value;
  
  pixabayItem.resetPage


}

function clearList() {
  refs.galleryImages.innerHTML = '';
}


// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });



// const { height: cardHeight } = document
//   .querySelector(".gallery")
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: "smooth",
// });

