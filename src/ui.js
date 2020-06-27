import { cardPreview } from './components/CardPreview';

function displayPreview(items, container) {
  items.forEach((item) => {
    const card = cardPreview(item);
    container.insertAdjacentHTML('beforeend', card);
  });
}

export { displayPreview };
