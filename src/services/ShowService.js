import { tvApi } from '../shared/api';
import { personApi } from '../shared/api';
import { API_KEY } from '../shared/constants';
import { genreService } from './GenreService';

import PreviewItem from '../models/PreviewItem';
import ExternalIds from '../models/ExternalIds';
import Keywords from '../models/Keywords';
import PreviewPerson from '../models/PreviewPerson';
import Show from '../models/Show';

class ShowService {
  async fetchPopular(numOfShows = 4, page = 1, language = 'en-US') {
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
        overview,
      } = show;

      const genres = genreService.findGenres(allGenres, genre_ids);

      return new PreviewItem(
        'tv',
        id,
        name,
        first_air_date,
        genres,
        overview,
        vote_average,
        poster_path
      );
    });
  }

  async fetchDetails(tvId, language = 'en-US') {
    const options = {
      params: {
        language,
        append_to_response: 'videos',
        api_key: API_KEY,
      },
    };

    const { data } = await tvApi.get(`/${tvId}`, options);

    return data;
  }

  async fetchCredits(tvId, language = 'en-US') {
    const options = {
      params: {
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await tvApi.get(`/${tvId}/credits`, options);

    return data.cast;
  }

  async fetchEpisodeCount(personId, creditId, language = 'en-US') {
    const options = {
      params: {
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await personApi.get(`/${personId}/tv_credits`, options);
    const show = data.cast.filter(obj => obj.credit_id === creditId)[0];

    let episodeCount;

    if (show) episodeCount = show.episode_count;
    else episodeCount = null;

    return episodeCount;
  }

  async createCastWithEpisodes(cast) {

    return await Promise.all(cast.map(async person => {
      const personId = person.id;
      const creditId = person.credit_id;
      const episodeCount = await this.fetchEpisodeCount(personId, creditId);

      return new PreviewPerson(person, episodeCount);
    }))
  }

  async fetchExternalIds(tvId, language = 'en-US') {
    const options = {
      params: {
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await tvApi.get(`/${tvId}/external_ids`, options);

    return new ExternalIds(data);
  }

  async fetchKeywords(tvId, language = 'en-US') {
    const options = {
      params: {
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await tvApi.get(`/${tvId}/keywords`, options);
    const keywords = data.results;
    console.log(keywords);

    return new Keywords(keywords);
  }

  async fetchRecommended(tvId, page = 1, language = 'en-US') {
    const options = {
      params: {
        page,
        language,
        api_key: API_KEY,
      },
    };

    const { data } = await tvApi.get(`/${tvId}/recommendations`, options);

    return data.results;
  }

  async fetchShow(tvId, page, language) {
    const details = await this.fetchDetails(tvId, language);
    const cast = await this.fetchCredits(tvId, language);
    const externalIds = await this.fetchExternalIds(tvId, language);
    const keywords = await this.fetchKeywords(tvId, language);
    const recommended = await this.fetchRecommended(tvId, page, language);
    const recommendedShows = await this.createShowPreviews(recommended);

    let castWithEpisodes;
    if (cast.length !== 0) castWithEpisodes = await this.createCastWithEpisodes(cast);
    else castWithEpisodes = null;


    const {
      id,
      name,
      episode_run_time,
      genres,
      first_air_date,
      last_air_date,
      vote_average,
      vote_count,
      overview,
      status,
      type,
      number_of_episodes,
      number_of_seasons,
      seasons,
      origin_country,
      original_language,
      poster_path,
      backdrop_path,
      videos,
      homepage,
      created_by,
    } = details;

    const creators = created_by.map(creator => creator.name);

    return new Show(
      id,
      name,
      episode_run_time,
      genres,
      first_air_date,
      last_air_date,
      vote_average,
      vote_count,
      overview,
      status,
      type,
      number_of_episodes,
      number_of_seasons,
      seasons,
      origin_country,
      original_language,
      poster_path,
      backdrop_path,
      videos,
      creators,
      castWithEpisodes,
      homepage,
      externalIds,
      keywords,
      recommendedShows
    );
  }
}

export const showService = new ShowService();
