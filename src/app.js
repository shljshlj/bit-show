import { getShows } from './data';

import './scss/main.scss';

const form = document.querySelector('.search-form');
const searchButton = document.querySelector('.search-button');

function init() {
  searchButton.addEventListener('click', (e) => e.preventDefault());

  console.log('init');
  getShows();
}

// Init app
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
  console.log('Init app');

  init();
});
