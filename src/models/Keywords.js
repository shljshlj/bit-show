export default class Keywords {
  constructor(keywords) {
    this.keywords = keywords;
  }

  getKeywordsArray() {
    return Array.from(this.keywords, keywordObj => keywordObj.name);
  }
};