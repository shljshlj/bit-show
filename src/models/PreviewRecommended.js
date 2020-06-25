import { POSTER_PATH_S } from '../shared/constants';

export default class PreviewRecommended {
  constructor(type, id, title, year, overview, rating, poster_path) {
    this.type = type;
    this.id = id;
    this.title = title;
    this.year = year;
    this.overview = overview;
    this.rating = rating;
    this.posterUrl = `${POSTER_PATH_S}${poster_path}`;
  }
};
