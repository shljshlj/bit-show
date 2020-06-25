import { movieService } from './services/MovieServices';
import { showService } from './services/ShowService';

async function getPopularMoviesAndShows(onSuccess) {
  const movies = await movieService.fetchPopular();
  const shows = await showService.fetchPopular();

  onSuccess(movies, shows);
}

async function getSingleShow(id, onSuccess) {
  const show = await showService.fetchShow(id);
}

async function getSingleMovie(id, onSuccess) {
  const movie = await movieService.fetchDetails(id);
}

export {
  getPopularMoviesAndShows,
  getSingleShow,
  getSingleMovie
};