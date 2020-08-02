import { POSTER_PATH_L } from '../shared/constants';
import { POSTER_PATH_M } from '../shared/constants';
import { POSTER_BACKDROP } from '../shared/constants';

export class Movie {
  constructor(
    id,
    title,
    genres,
    release_date,
    runtime,
    tagline,
    vote_average,
    vote_count,
    overview,
    status,
    original_language,
    spoken_languages,
    poster_path,
    backdrop_path,
    videos,
    cast,
    homepage,
    externalIds,
    keywords,
    recommendedMovies,
  ) {
    this.media = 'movie';
    this.id = id;
    this.title = title;
    this.genres = genres;
    this.releaseDate = release_date;
    this.runtime = runtime;
    this.tagline = tagline;
    this.voteAverage = vote_average;
    this.voteCount = vote_count;
    this.overview = overview;
    this.status = status;
    this.originalLanguage = original_language;
    this.spoken_languages = spoken_languages;
    this.posterPath = poster_path;
    this.backdropPath = backdrop_path;
    this.videos = videos;
    this.cast = cast;
    this.homepage = homepage;
    this.externalIds = externalIds;
    this.keywords = keywords;
    this.recommendedMovies = recommendedMovies;
  }

  getGenreList() {
    let genreList = '';
    for (let i = 0; i < this.genres.length; i++) {
      if (i === this.genres.length - 1) genreList += this.genres[i].name;
      else genreList += this.genres[i].name + ', ';
    }

    return genreList;
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
};