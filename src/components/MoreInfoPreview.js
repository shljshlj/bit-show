import { detailsPreview } from './DetailsPreview';
import { keywordsPreview } from './KeywordsPreview';

export const moreInfoPreview = (
  itemCountry,
  itemLanguage,
  releaseDateFormated,
  status,
  homepage,
  externalIds,
  keywords
) => {

  const detailsPanel = detailsPreview(
    itemCountry,
    itemLanguage,
    releaseDateFormated,
    status
  );

  const keywordsPanel = keywordsPreview(keywords);

  const moreInfoPanel =
    `
      <div class="more-info">
      ${detailsPanel}
      ${keywordsPanel}

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