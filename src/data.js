import { movieService } from './services/MovieServices';
import { showService } from './services/ShowService';

async function getPopularMoviesAndShows(onSuccess) {
  const movies = await movieService.fetchPopular();
  const shows = await showService.fetchPopular();

  onSuccess(movies, shows);
}

export {
  getPopularMoviesAndShows
};