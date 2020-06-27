import { movieApi } from '../shared/api';
import { genreService } from './GenreService';
import { API_KEY } from '../shared/constants';

import PreviewItem from '../models/PreviewItem';
import ExternalIds from '../models/ExternalIds';
import Keywords from '../models/Keywords';
import PreviewPerson from '../models/PreviewPerson';

class MovieService {
  async fetchPopular(numOfMovies = 4, page = 1, language = 'en-US') {
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
        overview,
      } = movie;

      const genres = genreService.findGenres(allGenres, genre_ids);

      return new PreviewItem(
        'movie',
        id,
        title,
        release_date,
        genres,
        overview,
        vote_average,
        poster_path
      );
    });
  }

  async fetchDetails(id, language = 'en-US') {
    const options = {
      params: {
        language,
        append_to_response: 'videos',
        api_key: API_KEY,
      },
    };

    const { data } = await movieApi.get(`/${id}`, options);

    console.log(data);

    return data;
  }

  async fetchCredits(id, language = 'en-US') {
    const options = {
      params: {
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await movieApi.get(`/${id}/credits`, options);
    console.log(data.cast);

    return data.cast.map((person) => new PreviewPerson(person));
  }

  async fetchExternalIds(id, language = 'en-US') {
    const options = {
      params: {
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await movieApi.get(`/${id}/external_ids`, options);
    console.log(data);

    return new ExternalIds(data);
  }

  async fetchKeywords(id, language = 'en-US') {
    const options = {
      params: {
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await movieApi.get(`/${id}/keywords`, options);
    const keywords = data.keywords;
    console.log(keywords);

    return new Keywords(keywords);
  }

  async fetchRecommended(id, page = 1, language = 'en-US') {
    const options = {
      params: {
        page,
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await movieApi.get(`/${id}/recommendations`, options);
    console.log(data);

    return data.results;
  }

  async fetchMovie(id, page, language) {
    const details = await this.fetchDetails(id, language);
    const cast = await this.fetchCredits(id, language);
    const externalIds = await this.fetchExternalIds(id, language);
    const keywords = await this.fetchKeywords(id, language);
    const recommended = await this.fetchRecommended(id, page, language);
    const recommendedMovies = await this.createMoviePreviews(recommended);

    console.log(recommendedMovies);

    const movieId = details.id;

    const {
      backdrop_path,
      created_by,
      episode_run_time,
      first_air_date,
      genres,
      homepage,
      last_air_date,
      name,
      number_of_episodes,
      number_of_seasons,
      origin_country,
      original_language,
      overview,
      poster_path,
      status,
      videos,
      vote_average,
    } = details;
  }
}

export const movieService = new MovieService();
