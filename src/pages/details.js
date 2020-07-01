import { initDetailsPage } from '../app';

import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
  console.log('Init app');
  console.log(window.location.pathname)

  initDetailsPage();

});
