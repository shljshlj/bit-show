export const cardPreview = (item) => {
  const { media, id, title, rating } = item;
  const posterUrl = item.getPosterUrl();
  const releaseYear = item.getReleaseYear();
  const genres = item.getGenresFormat();

  const card =
    `
    <div data-id=${id} data-media=${media} class="grid__card card">
      <div class="grid__card-poster">
        <img
          alt="movie poster"
          src=${posterUrl}
        />
      </div>
      <div class="grid__card-content">
        <header class="grid__card-header">
          <div class="grid__card-rating">${rating}</div>
          <h2 class="grid__card-title">${title}</h2>
        </header>
        <div class="grid__card-content-expanded">
          <div class="grid__card-genre">${genres}</div>
          <div class="grid__card-year">(${releaseYear})</div>
        </div>
      </div>
    </div>
  `;

  return card;
}