import { getPopularMoviesAndShows, getSingleMovie, getSingleShow } from './data';
import * as ui from './ui';

/* HOME PAGE */

const $moviePopularContainer = document.querySelector('.grid-container.movies-popular');
const $showPopularContainer = document.querySelector('.grid-container.shows-popular');

export function initHomePage() {
  getPopularMoviesAndShows(onSuccessHomePage);
}

function onSuccessHomePage(movies, shows) {
  ui.displayPreview(movies, $moviePopularContainer);
  ui.displayPreview(shows, $showPopularContainer);

  document.addEventListener('click', setupEventListeners, false);
}

function setupEventListeners(event) {
  if (!event.target.closest('[data-id]')) return;

  const el = event.target.closest('[data-id]');
  const id = el.getAttribute('data-id');
  const type = el.getAttribute('data-type');

  localStorage.setItem('id', id);
  localStorage.setItem('type', type);

  window.location.href = './details.html';
}

function handleCardClick(event) {
  console.log(event);
}

/* DETAILS PAGE */

export function initDetailsPage() {
  const id = localStorage.getItem('id');
  const type = localStorage.getItem('type');

  if (type === 'movie') {
    getSingleMovie(id);
  } else {
    getSingleShow(id);
  }
}





// INIT 
// 1. fetch popular movies and shows
// 2. on success ->
// 3. display popular movies and shows
// 4. add event listeners to items(movies and shows)

// Init app
// document.addEventListener('DOMContentLoaded', function (event) {
//   console.log('DOM fully loaded and parsed');
//   console.log('Init app');
//   console.log(window.location.pathname)

//   if (window.location.pathname === '/index.html') {
//     initHomePage();
//   }

//   if (window.location.pathname === '/details.html') {
//     initDetailsPage();
//   }
// });
