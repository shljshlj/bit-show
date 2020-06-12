import API from '../shared/api';
import { genreService } from './GenreService';
import PreviewItem from '../entites/PreviewItem';
import { API_KEY } from '../shared/constants';

class MovieService {
  async fetchPopular(page = 1, language = 'en-US', numOfMovies = 4) {
    const options = {
      params: {
        page,
        language,
        api_key: API_KEY
      }
    };

    const { data } = await API.get('/movie/popular', options);
    const genreRes = await genreService.fetchGenres('movie');

    const movies = data.results.slice(0, numOfMovies);
    console.log(movies)
    const moviePreviews = movies.map(movie => {
      const { id, title, genre_ids, vote_average, release_date, poster_path } = movie;

      const genres = [];
      genre_ids.forEach(id => {
        genres.push(genreRes.filter(genre => genre.id === id)[0].name);
      });

      return new PreviewItem('movie', id, title, genres, vote_average, release_date, poster_path);
    });

    console.log(moviePreviews);
    return moviePreviews;
  }
}

export const movieService = new MovieService();