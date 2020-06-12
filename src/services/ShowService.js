import API from '../shared/api';
import { genreService } from './GenreService';
import PreviewItem from '../entites/PreviewItem';
import { API_KEY } from '../shared/constants';

class ShowService {
  async fetchPopular(page = 1, language = 'en-US', numOfShows = 4) {
    const options = {
      params: {
        page,
        language,
        api_key: API_KEY
      }
    };

    const { data } = await API.get('/tv/popular', options);
    const genreRes = await genreService.fetchGenres('tv');

    const shows = data.results.slice(0, numOfShows);
    const showPreviews = shows.map(show => {
      const { id, name, genre_ids, vote_average, first_air_date, poster_path } = show;

      const genres = [];
      genre_ids.forEach(id => {
        genres.push(genreRes.filter(genre => genre.id === id)[0].name);
      });

      return new PreviewItem('tv', id, name, genres, vote_average, first_air_date, poster_path);
    });

    return showPreviews;
  }
}

export const showService = new ShowService();