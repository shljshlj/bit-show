import { POSTER_PATH_XS } from '../shared/constants';

export default class PreviewSeason {
  constructor({
    air_date,
    episode_count,
    id,
    name,
    overview,
    poster_path,
    season_number,
  }) {
    this.airDate = air_date;
    this.episodeCount = episode_count;
    this.id = id;
    this.title = name;
    this.overview = overview;
    this.posterPath = poster_path;
    this.seasonNumber = season_number;
  }

  getReleaseYear() {
    if (!this.airDate) return null;
    return this.airDate.getFullYear();
  }

  getPosterUrl() {
    if (!this.posterPath) return null;
    return `${POSTER_PATH_XS}${this.posterPath}`;
  }
}

// air_date: null / "2005-09-13"
// episode_count: 3
// id: 6902
// name: "Specials"
// overview: ""
// poster_path: "/6VmmiImmxcspyjcm4qKLGVYlPh6.jpg"
// season_number: 0