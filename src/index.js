import { initHomePage, initDetailsPage } from './app';

// Init app
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
  console.log('Init app');
  console.log(window.location.pathname)

  if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    initHomePage();
  }

  if (window.location.pathname === '/details.html') {
    initDetailsPage();
  }
});
