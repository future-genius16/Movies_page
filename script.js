const moviesEl = document.querySelector('#movies');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('#closePopup');
const popupTitle = document.querySelector('#popupTitle');
const popupOverview = document.querySelector('#popupOverview');
const popupRating = document.querySelector('#popupRating');

const API_KEY = '5d390a9ad3450e42a799b9a7c8f3025c';
const API_URL = `https://api.themoviedb.org/3/search/movie?query=mafia&api_key=${API_KEY}`;

fetch(API_URL)
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
