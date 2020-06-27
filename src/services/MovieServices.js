import { movieApi } from '../shared/api';
import { genreService } from './GenreService';
import PreviewItem from '../models/PreviewItem';
import { API_KEY } from '../shared/constants';

class MovieService {
  async fetchPopular(page = 1, language = 'en-US', numOfMovies = 4) {
    const options = {
      params: {
        page,
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await movieApi.get('/popular', options);

    return data.results.slice(0, numOfMovies);
  }

  async createMoviePreviews(fetchedMovies) {
    const allGenres = await genreService.fetchAllGenres('movie');

    return fetchedMovies.map((movie) => {
      const {
        id,
        title,
        genre_ids,
        vote_average,
        release_date,
        poster_path,
      } = movie;

      const genres = genreService.findGenres(allGenres, genre_ids);

      return new PreviewItem(
        'movie',
        id,
        title,
        genres,
        vote_average,
        release_date,
        poster_path
      );
    });
  }
}

export const movieService = new MovieService();
