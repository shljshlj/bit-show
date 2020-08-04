export default class Video {
  constructor({ name, key }) {
    this.title = name;
    this.ytKey = key;
  }

  getImgUrl() {
    return `https://i.ytimg.com/vi/${this.ytKey}/hqdefault.jpg`;
  }

  getVideoUrl() {
    return `https://www.youtube.com/embed/${this.ytKey}`;
  }
}