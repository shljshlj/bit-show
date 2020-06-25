import { PROFILE_IMG_M } from '../shared/constants';

export default class PreviewPerson {
  constructor({ id, name, character, profile_path }) {
    this.id = id;
    this.name = name;
    this.character = character;
    this.profileImageUrl = `${PROFILE_IMG_M}${profile_path}`;
  }
};