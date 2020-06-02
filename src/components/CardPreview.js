export const cardPreview = (posterUrl, title, releaseDate) => {
  const card =
    `
    <div class="card">
      <div class="img-container">
        <img
          alt="movie poster"
          src=${posterUrl}
        />
      </div>
      <div class="card-content">
        <header class="card-header">
          <div class="card-rating">9.6</div>
          <h2 class="card-title">${title}</h2>
        </header>
        <div class="card-content-expanded">
          <div class="card-genre">Drama, Science Fiction</div>
          <div class="divider"></div>
          <div class="card-year">${releaseDate}</div>
        </div>
      </div>
    </div>
  `;

  return card;
}