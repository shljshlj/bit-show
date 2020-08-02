import { POSTER_PATH_M } from '../shared/constants';

export default class PreviewItem {
  constructor(
    media,
    id,
    title,
    releaseDate,
    genres,
    overview,
    rating,
    poster_path
  ) {
    this.media = media;
    this.id = id;
    this.title = title;
    this.releaseDate = new Date(releaseDate);
    this.genres = genres;
    this.overview = overview;
    this.rating = rating;
    this.posterPath = poster_path;
  }

  getPosterUrl() {
    if (!this.posterPath) return null;
    return `${POSTER_PATH_M}${this.posterPath}`;
  }

  getReleaseYear() {
    if (!this.releaseDate) return null;
    return new Date(this.releaseDate).getFullYear();
  }

  getGenreNames() {
    return this.genres.reduce((acc, cur) => {
      if (cur) return [...acc, cur.name];
      return acc;
    }, []);
  }

  getGenresFormat() {
    const genreNames = this.getGenreNames();
    return genreNames.join(' &bull; ');
  }
}
