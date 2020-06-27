import { movieService } from './services/MovieServices';
import { showService } from './services/ShowService';

async function getPopularMoviesAndShows(onSuccess) {
  const fetchedMovies = await movieService.fetchPopular();
  const fetchedShows = await showService.fetchPopular();

  const popularMovies = await movieService.createMoviePreviews(fetchedMovies);
  const popularShows = await showService.createShowPreviews(fetchedShows);

  onSuccess(popularMovies, popularShows);
}

async function getSingleShow(id, onSuccess) {
  const show = await showService.fetchShow(id);
}

async function getSingleMovie(id, onSuccess) {
  const movie = await movieService.fetchDetails(id);
}

export { getPopularMoviesAndShows, getSingleShow, getSingleMovie };
