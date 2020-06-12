import API from '../shared/api';

class GenreService {
  async fetchGenres(typeOfContent = '', language = 'en-US') {
    const options = {
      params: {
        language,
        api_key: process.env.TMDB_API_KEY
      }
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
}

export const genreService = new GenreService();