import API from '../shared/api';
import { API_KEY } from '../shared/constants';

class GenreService {
  async fetchAllGenres(typeOfContent = '', language = 'en-US') {
    const options = {
      params: {
        language,
        api_key: API_KEY,
      },
    };

    let endpoint;

    switch (typeOfContent) {
      case 'film':
      case 'movie':
        endpoint = '/genre/movie/list';
        break;
      case 'show':
      case 'tv':
        endpoint = '/genre/tv/list';
        break;
      default:
        endpoint = '/genre/movie/list';
    }

    const { data } = await API.get(endpoint, options);

    return data.genres;
  }

  findGenres(allGenres, genreIds) {
    return genreIds.map((id) => allGenres.find((el) => el.id === id));
  }
}

export const genreService = new GenreService();
