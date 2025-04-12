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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDM5MGE5YWQzNDUwZTQyYTc5OWI5YTdjOGYzMDI1YyIsInN1YiI6IjY1ODk0OTc0YmU4MDAyMDBhOGFjNzU1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WABMO4BdT2rGPCFi2wwSKUB1X1uIfxOMZEtQ-ZOSnU8'
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
