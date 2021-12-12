

export default function pictureItem(data) {
  return pictureMurkup.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
    <a class="gallery__item" href="${largeImageURL}>
      <div class="photo-card">
        <img class="picture-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        
        <div class="info">
          <p class="info-item">
           <b>Likes: ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${downloads}</b>
          </p>
        </div>
    </div>
  </a>`;
  }).join('');
}



// const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: "alt",
//     captionDelay: 250,
//     captionPosition: 'bottom'
// });
