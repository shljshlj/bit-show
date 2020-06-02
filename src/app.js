import { getMovies } from './data';
import * as ui from './ui';

import './scss/main.scss';


function init() {
  getMovies(onSuccessHomePage);
}

function onSuccessHomePage(movies) {
  ui.displayMoviesPopular(movies);
}


// Init app
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
  console.log('Init app');

  init();
});
