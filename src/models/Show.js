import { POSTER_PATH_L } from '../shared/constants';
import { POSTER_PATH_M } from '../shared/constants';
import { POSTER_BACKDROP } from '../shared/constants';

import findLanguageName from '../utils/findLanguageName';
import findCountryName from '../utils/findCountryName';

export default class Show {
  constructor(
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
    cast,
    homepage,
    externalIds,
    keywords,
    recommendedShows
  ) {
    this.id = id;
    this.title = name;
    this.episodeRunTime = episode_run_time[0];
    this.genres = genres;
    this.firstAirDate = first_air_date;
    this.lastAirDate = last_air_date;
    this.voteAverage = vote_average;
    this.voteCount = vote_count;
    this.overview = overview;
    this.status = status;
    this.type = type;
    this.numOfEpisodes = number_of_episodes;
    this.numOfSeasons = number_of_seasons;
    this.seasons = seasons;
    this.originCountry = origin_country;
    this.originalLanguage = original_language;
    this.posterPath = poster_path;
    this.backdropPath = backdrop_path;
    this.videos = videos;
    this.creators = creators;
    this.cast = cast;
    this.homepage = homepage;
    this.externalIds = externalIds;
    this.keywords = keywords;
    this.recommendedShows = recommendedShows;
  }

  getBackdropUrl() {
    if (!this.backdropPath) return null;
    return `${POSTER_BACKDROP}${this.backdropPath}`
  }

  getPosterUrl(size = 'medium') {
    if (!this.posterPath) return null;

    const posterSizes = {
      large: `${POSTER_PATH_L}${this.posterPath}`,
      medium: `${POSTER_PATH_M}${this.posterPath}`,
    };

    return posterSizes[size];
  }

  getOriginalLanguageName() {
    if (!this.originalLanguage) return null;
    return findLanguageName(this.originalLanguage);
  }

  getCountryOfOrigin() {
    if (this.originCountry.length === 0) return null;

    return this.originCountry.map(country => findCountryName(country));
  }
}
