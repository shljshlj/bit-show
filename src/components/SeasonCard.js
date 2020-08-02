export const seasonCard = ({ title, episodeCount, overview }, posterUrl, releaseYear, showTitle) => {
  const seasonTitle = `${showTitle}: ${title}`;
  const seasonOverview = overview ?
    `
      <div class="season__overview">
        <p>
          ${overview}
        </p>
    </div>
    ` : '';

  const card =
    `
    <li class="season__card card">
      <div class="season__card-poster">
        <img src=${posterUrl}>
      </div>
      <div class="season__content">
        <h2 class="season__title">${seasonTitle}</h2>
        <h4 class="season__subheading">
          <span>${releaseYear} &vert; ${episodeCount}${episodeCount > 1 ? ' Episodes' : ' Episode'}</span>
        </h4>
        ${seasonOverview}
      </div>
    </li>
    `;

  return card;
};