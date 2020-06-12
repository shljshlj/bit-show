import { cardPreview } from './components/CardPreview';


function displayPreview(items, container) {
  items.forEach((item) => {
    // const { id, title, genres, vote_rating, release_year, posterUrl } = item;
    const card = cardPreview(item);
    container.insertAdjacentHTML('beforeend', card);
  });
}

export {
  displayPreview
};