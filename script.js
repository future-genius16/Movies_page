const moviesEl = document.querySelector('#movies');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('#closePopup');
const popupTitle = document.querySelector('#popupTitle');
const popupOverview = document.querySelector('#popupOverview');
const popupRating = document.querySelector('#popupRating');

const API_URL = 'https://api.themoviedb.org/3/search/movie?query=mafia';

fetch(API_URL, {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer f31c67771e8ce14539ccde4f7c2c4c73'
  }
})
  .then(res => res.json())
  .then(data => {
    data.results.forEach(movie => {
      if (movie.poster_path) {
        const div = document.createElement('div');
        div.classList.add('movie');
        div.innerHTML = `<img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />`;
        div.addEventListener('click', () => showMovie(movie));
        moviesEl.appendChild(div);
      }
    });
  });

function showMovie(movie) {
  popupTitle.textContent = movie.title;
  popupOverview.textContent = movie.overview || 'No description available.';
  popupRating.textContent = `Rating: ${movie.vote_average}`;
  popup.classList.remove('hidden');
}

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});
