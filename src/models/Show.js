import { POSTER_PATH_L } from '../shared/constants';
import { POSTER_PATH_M } from '../shared/constants';
import { POSTER_BACKDROP } from '../shared/constants';
import { IMDB_URL } from '../shared/constants';

export class Show {
  constructor(
    id,
    name,
    episode_run_time,
    genres,
    first_air_date,
    vote_average,
    vote_count,
    overview,
    status,
    type,
    number_of_episodes,
    number_of_seasons,
    seasons,
    imdb_id,
    original_language,
    keywords,
    poster_path,
    backdrop_path,
    videos,
    cast,
    recommendedShows
  ) {
    this.id = id;
    this.title = name;
    this.episodeRunTime = episode_run_time[0];
    this.genres = genres;
    this.firstAirDate = first_air_date;
    this.voteAverage = vote_average;
    this.voteCount = vote_count;
    this.overview = overview;
    this.status = status;
    this.type = type;
    this.numOfEpisodes = number_of_episodes;
    this.numOfSeasons = number_of_seasons;
    this.seasons = seasons;
    this.imdbUrl = `${IMDB_URL}${imdb_id}`;
    this.original_language = original_language;
    this.keywords = keywords;
    this.posterUrl = {
      poster_large: `${POSTER_PATH_L}${poster_path}`,
      poster_medium: `${POSTER_PATH_M}${poster_path}`,
    };
    this.backdropUrl = `${POSTER_BACKDROP}${backdrop_path}`;
    this.videos = videos;
    this.cast = cast;
    this.recommendedShows = recommendedShows;
  }
}