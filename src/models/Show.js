import { POSTER_PATH_L } from '../shared/constants';
import { POSTER_PATH_M } from '../shared/constants';
import { POSTER_BACKDROP } from '../shared/constants';

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
    this.posterUrl = {
      poster_large: `${POSTER_PATH_L}${poster_path}`,
      poster_medium: `${POSTER_PATH_M}${poster_path}`,
    };
    this.backdropUrl = `${POSTER_BACKDROP}${backdrop_path}`;
    this.videos = videos;
    this.creators = creators;
    this.cast = cast;
    this.homepage = homepage;
    this.externalIds = externalIds;
    this.keywords = keywords;
    this.recommendedShows = recommendedShows;
  }
}
