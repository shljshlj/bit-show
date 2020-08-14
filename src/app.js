import * as data from './data';
import * as ui from './ui';
import { setupModal } from './utils/modalFunctions';

// 1. fetch popular movies and shows
// 2. on success ->
// 3. display popular movies and shows
// 4. add event listeners to items(movies and shows)

/////////////////////
//////* HOME PAGE */

const $moviePopularContainer = document.querySelector(
  '.main__section-grid.movies-popular'
);
const $showPopularContainer = document.querySelector(
  '.main__section-grid.shows-popular'
);

export function initHomePage() {
  data.getPopularMoviesAndShows(onSuccessHomePage);
}

function onSuccessHomePage(movies, shows) {
  ui.displayPreview(movies, $moviePopularContainer);
  ui.displayPreview(shows, $showPopularContainer);

  document.addEventListener('click', setupHomePageEventListeners, false);
}

function setupHomePageEventListeners(event) {
  if (!event.target.closest('[data-id]')) return;

  const el = event.target.closest('[data-id]');
  const id = el.getAttribute('data-id');
  const media = el.getAttribute('data-media');

  localStorage.setItem('id', id);
  localStorage.setItem('media', media);

  window.location.href = './details.html';
}

function handleCardClick(event) {
  console.log(event);
}


////////////////////////
//////* DETAILS PAGE */

const $pageHeader = document.querySelector('.page-header-container');
const $pageGrid = document.querySelector('.single-page__grid');
const $modalOverlay = document.querySelector('.modal__overlay');


function onSuccessDetailsPage(item) {
  ui.displaySingleItem(item, $pageHeader, $pageGrid);

  const $videoSection = document.querySelector('.video_wrapper');
  $videoSection.addEventListener('click', handleVideoPreviewClick);
}

function handleVideoPreviewClick(event) {
  event.preventDefault();

  if (!event.target.closest('.video__play')) return;

  const elem = event.target.closest('.video__play');
  const videoId = elem.getAttribute('data-video-id');
  const videoTitle = elem.getAttribute('data-title');

  createModalOnVideoClick(videoTitle, videoId);
}

function createModalOnVideoClick(videoTitle, videoId) {
  const $bodyEl = document.querySelector('body');

  ui.createModal($modalOverlay, videoTitle, videoId);
  setupModal($bodyEl, $modalOverlay).startModal();
}


export function initDetailsPage() {
  const id = localStorage.getItem('id');
  const media = localStorage.getItem('media');

  if (media === 'movie') {
    data.getSingleMovie(id, onSuccessDetailsPage);
  } else {
    data.getSingleShow(id, onSuccessDetailsPage);
  }
}
