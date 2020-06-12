import { POSTER_PATH_M } from '../shared/constants';

export default class PreviewItem {
  constructor(type, id, name, genres, vote_average, release_date, poster_path) {
    this.type = type;
    this.id = id;
    this.title = name;
    this.genres = genres;
    this.voteRating = vote_average;
    this.releaseDate = new Date(release_date);
    this.posterUrl = `${POSTER_PATH_M}${poster_path}`;
  }

  getReleaseYear() {
    return this.releaseDate.getFullYear();
  }

  getGenresFormat() {
    return this.genres.join(' &bull; ');
  }
};