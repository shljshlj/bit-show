export const cardPreview = (item) => {
  const { type, id, title, rating, posterUrl } = item;
  const releaseYear = item.getReleaseYear();
  const genres = item.getGenresFormat();

  const card =
    `
    <div data-id=${id} data-type=${type} class="card">
      <div class="img-container">
        <img
          alt="movie poster"
          src=${posterUrl}
        />
      </div>
      <div class="card-content">
        <header class="card-header">
          <div class="card-rating">${rating}</div>
          <h2 class="card-title">${title}</h2>
        </header>
        <div class="card-content-expanded">
          <div class="card-genre">${genres}</div>
          <div class="card-year">(${releaseYear})</div>
        </div>
      </div>
    </div>
  `;

  return card;
}