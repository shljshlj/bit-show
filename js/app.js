const form = document.querySelector('.search-form');
const searchButton = document.querySelector('.search-button');

function init() {
  searchButton.addEventListener('click', (e) => e.preventDefault());

  console.log('init');
}

export { init };

