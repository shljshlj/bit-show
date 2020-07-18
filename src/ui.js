import { cardPreview } from './components/CardPreview';

function displayPreview(items, container) {
  items.forEach((item) => {
    const card = cardPreview(item);
    container.insertAdjacentHTML('beforeend', card);
  });
}

function displaySingleItem(item, container) {
  console.log(item);
}

export {
  displayPreview,
  displaySingleItem
};
