import { getPopularMoviesAndShows } from './data';
import * as ui from './ui';

import './scss/main.scss';


const $moviePopularContainer = document.querySelector('.grid-container.movies-popular');
const $showPopularContainer = document.querySelector('.grid-container.shows-popular');

function init() {
  getPopularMoviesAndShows(onSuccessHomePage);
}

function onSuccessHomePage(movies, shows) {
  ui.displayPreview(movies, $moviePopularContainer);
  ui.displayPreview(shows, $showPopularContainer);
}

// INIT
// 1. fetch popular movies and shows
// 2. on success ->
// 3. display popular movies and shows
// 4. add event listeners to items (movies and shows)

// Init app
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
  console.log('Init app');

  init();
});
