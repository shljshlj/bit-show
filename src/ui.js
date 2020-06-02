import { cardPreview } from './components/CardPreview';
import { POSTER_PATH_M } from './shared/constants';

const $moviePopularContainer = document.querySelector('.grid-container.movies-popular');
console.dir($moviePopularContainer);

function displayMoviesPopular(movies) {
  movies.forEach(movie => {
    const posterUrl = POSTER_PATH_M + movie.poster_path;
    const card = cardPreview(posterUrl, movie.title, movie.release_date);
    $moviePopularContainer.insertAdjacentHTML('beforeend', card);
  });
}

export {
  displayMoviesPopular
};