import { tvApi } from '../shared/api';
import { API_KEY } from '../shared/constants';
import { genreService } from './GenreService';

import PreviewItem from '../models/PreviewItem';
import ExternalIds from '../models/ExternalIds';
import Keywords from '../models/Keywords';
import PreviewPerson from '../models/PreviewPerson';
import PreviewRecommended from '../models/PreviewRecommended';
import Show from '../models/Show';

class ShowService {
  async fetchPopular(page = 1, language = 'en-US', numOfShows = 4) {
    const options = {
      params: {
        page,
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await tvApi.get('/popular', options);

    return data.results.slice(0, numOfShows);
  }

  async createShowPreviews(fetchedShows) {
    const allGenres = await genreService.fetchAllGenres('tv');

    return fetchedShows.map((show) => {
      const {
        id,
        name,
        genre_ids,
        vote_average,
        first_air_date,
        poster_path,
      } = show;

      const genres = genreService.findGenres(allGenres, genre_ids);

      return new PreviewItem(
        'tv',
        id,
        name,
        genres,
        vote_average,
        first_air_date,
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

    const { data } = await tvApi.get(`/${id}`, options);

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

    const { data } = await tvApi.get(`/${id}/credits`, options);
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

    const { data } = await tvApi.get(`/${id}/external_ids`, options);
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

    const { data } = await tvApi.get(`/${id}/keywords`, options);
    const keywords = data.results;
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

    const { data } = await tvApi.get(`/${id}/recommendations`, options);
    console.log(data);

    return data.results;
  }

  async fetchShow(id, page, language) {
    const details = await this.fetchDetails(id, language);
    const cast = await this.fetchCredits(id, language);
    const externalIds = await this.fetchExternalIds(id, language);
    const keywords = await this.fetchKeywords(id, language);
    const recommended = await this.fetchRecommended(id, page, language);

    const tvId = details.id;

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

async function createRecommended(fetchedRecommend) {
  const {
    first_air_date,
    genre_ids,
    id,
    name,
    overview,
    poster_path,
    vote_average,
  } = fetchedRecommend;
}

export const showService = new ShowService();
