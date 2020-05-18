import { api_key } from './data.js';

const form = document.querySelector('.search-form');
const searchButton = document.querySelector('.search-button');

function init() {
  searchButton.addEventListener('click', (e) => e.preventDefault());

  console.log('init');
  console.log(api_key);
}

export { init };

