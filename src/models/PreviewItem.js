import { POSTER_PATH_M } from '../shared/constants';

export default class PreviewItem {
  constructor(
    type,
    id,
    title,
    releaseDate,
    genres,
    overview,
    rating,
    poster_path
  ) {
    this.type = type;
    this.id = id;
    this.title = title;
    this.releaseDate = new Date(releaseDate);
    this.genres = genres;
    this.overview = overview;
    this.rating = rating;
    this.posterUrl = `${POSTER_PATH_M}${poster_path}`;
  }

  getReleaseYear() {
    return this.releaseDate.getFullYear();
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
