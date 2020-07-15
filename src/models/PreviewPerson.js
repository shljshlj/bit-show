import { PROFILE_IMG_M } from '../shared/constants';

export default class PreviewPerson {
  constructor({ id, name, character, order, credit_id, profile_path }, episodeCount) {
    this.id = id;
    this.name = name;
    this.character = character;
    this.order = order;
    this.creditId = credit_id;
    this.episodeCount = episodeCount;
    this.profileImageUrl = `${PROFILE_IMG_M}${profile_path}`;
  }
};