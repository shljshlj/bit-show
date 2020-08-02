export const detailsPreview = () => {
  const moreInfoPanel =
    `
      <div class="more-info">
      <section class="panel details__panel">
        <div class="panel__heading details__heading">
          <h4>Series Details</h4>
        </div>
        <table class="details__table">
          <tbody>
            <tr>
              <td>Country:</td>
              <td>USA</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Release Date:</td>
              <td>2 December 2013</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>Returning</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="panel keywords__panel">
        <div class="panel__heading facts__heading">
          <h4>Keywords</h4>
        </div>
        <ul class="keywords__list">
          <li class="keywords__item">dc comics</li>
          <li class="keywords__item">superhero</li>
          <li class="keywords__item">speed</li>
          <li class="keywords__item">based on comic</li>
          <li class="keywords__item">masked superhero</li>
          <li class="keywords__item">supervillain</li>
        </ul>
      </section>

      <section class="panel links__panel">
        <ul class="links__list">
          <li class="links__item">
            <a title="Visit Facebook" href="#" target="_blank">
              <span><i class="fab fa-facebook-square"></i></span>
            </a>
          </li>
          <li class="links__item">
            <a href="#">
              <span><i class="fab fa-twitter"></i></span>
            </a>
          </li>
          <li class="links__item">
            <a href="#">
              <span><i class="fab fa-instagram"></i></span>
            </a>
          </li>
          <li class="links__item">
            <a href="#">
              <span>
                <i class="fas fa-link"></i>
              </span>
            </a>
          </li>
        </ul>
      </section>

      <section class="links__imdb">
        <span class="imdbRatingPlugin" data-title="tt0090798" data-style="t1">
          <a href="https://www.imdb.com/title/tt0090798/?ref_=tt_plg_rt">
            <img alt="Caravaggio (1986) on IMDb"
              src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" />
          </a>
        </span>
      </section>
    </div>
      `;

  return moreInfoPanel;
}