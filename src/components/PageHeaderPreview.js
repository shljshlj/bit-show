export const pageHeaderPreview = (media, title, runtime, genres, dateFormat, voteAverage, voteCount, creators, overview, posterUrl, backdropUrl) => {
  const { numOfCreators, creatorsList } = creators;

  const dateSpan = media === 'tv' ?
    `<span>TV Series ${dateFormat}</span>` :
    `<span>${dateFormat}</span>`;


  const header =
    `
    <section class="page-header page-header--backdrop_poster">
      <div class="page-header--linear_gradient">
        <div class="content_wrapper page-header_wrapper">
          <div class="poster_wrapper">
            <div class="poster">
              <img src=${posterUrl} alt="Poster for ${title} show">
            </div>
          </div>
          <div class="overview">
            <div class="title_wrapper">
              <h1 class="title">${title}</h1>
              <div class="title__subtext">
                <span>${runtime}</span>
                <span class="title__divider">&vert;</span>
                <span>${genres}</span>
                <span class="title__divider">&vert;</span>
                ${dateSpan}
              </div>
            </div>
            <div class="rating_wrapper">
              <div class="rating--icon">
              </div>
              <div class="rating--value">
                <strong title="${voteAverage} based on ${voteCount} user ratings">
                  <span>${voteAverage}</span>
                </strong>
              </div>
            </div>
            <div class="summary">
              <h3>Overview</h3>
              <p>${overview}</p>
            </div>
            <div class="creators">
              <h4>${numOfCreators > 1 ? 'Creators:' : 'Creator:'}</h4>
              <span>${creatorsList}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return header;
}