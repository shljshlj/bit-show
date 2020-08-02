export const recommendedCard = (posterUrl, title, rating) => {
  const ratingSpan = rating ? `<span>${rating}&#37;</span>` : '';

  const card =
    `
      <li class="recommended__item">
        <div class="recommended__item-image">
          <a href="#">
            <img src=${posterUrl} alt="">
          </a>
        </div>
        <div class="recommended__item-info">
          <a href="#">${title}</a>
          ${ratingSpan}
        </div>
      </li>
    `;

  return card;
};