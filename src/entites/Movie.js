import { POSTER_PATH_L } from '../shared/constants';
import { POSTER_PATH_M } from '../shared/constants';
import { POSTER_BACKDROP } from '../shared/constants';
import { IDMB_URL } from '../shared/constants';

export class Movie {
  constructor(id, title, genres, runtime, tagline, overview, homepage, imdb_id, original_language, spoken_languages, poster_path, backdrop_path, status, release_date, videos) {
    this.id = id;
    this.title = title;
    this.genres = genres;
    this.runtime = runtime;
    this.tagline = tagline;
    this.overview = overview;
    this.homepage = homepage;
    this.imdbUrl = `${IDMB_URL}${imdb_id}`;
    this.original_language = original_language;
    this.spoken_languages = spoken_languages;
    this.posterUrl = {
      poster_large: `${POSTER_PATH_L}${poster_path}`,
      poster_medium: `${POSTER_PATH_M}${poster_path}`,
    };
    this.backdropUrl = `${POSTER_BACKDROP}${backdrop_path}`
    this.status = status;
    this.release_date = release_date;
    this.videos = videos;
  }
};