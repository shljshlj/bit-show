export const externalLinksPreview = (externalIds, homepage, title, media) => {
  const facebook = externalIds.getExternalUrl('facebook');
  const instagram = externalIds.getExternalUrl('instagram');
  const twitter = externalIds.getExternalUrl('twitter');
  const imdb = externalIds.getExternalUrl('imdb');
  const imgAlt = `${media === 'tv' ? 'TV Show' : 'Film'} ${title} on IMDB`;

  const facebookLink = facebook ?
    `
      <li class="links__item">
        <a title="Visit Facebook" href=${facebook} target="_blank">
          <span><i class="fab fa-facebook-square"></i></span>
        </a>
      </li>
    ` : '';

  const twitterLink = twitter ?
    `
      <li class="links__item">
        <a title="Visit Twitter" href=${twitter} target="_blank">
          <span><i class="fab fa-twitter"></i></span>
        </a>
      </li>
    ` : '';

  const instagramLink = instagram ?
    `
      <li class="links__item">
        <a title="Visit Instagram" href=${instagram} target="_blank">
          <span><i class="fab fa-instagram"></i></span>
        </a>
      </li>
    ` : '';

  const homepageLink = homepage ?
    `
        <li class="links__item">
          <a title="Visit homepage" href=${homepage} target="_blank">
            <span>
              <i class="fas fa-link"></i>
            </span>
          </a>
        </li>
      ` : '';


  const imdbSection = imdb ?
    `
      <section class="links__imdb">
        <span class="imdbRatingPlugin" data-title=${externalIds.imdb} data-style="t1">
          <a href="https://www.imdb.com/title/${externalIds.imdb}/?ref_=tt_plg_rt" target="_blank">
            <img alt="${imgAlt}"
              src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" />
          </a>
        </span>
      </section>
    ` : '';

  const linksPreview =
    `
      <section class="panel links__panel">
        <ul class="links__list">
          ${facebookLink}
          ${twitterLink}
          ${instagramLink}
          ${homepageLink}
        </ul>
      </section>
      ${imdbSection}
    `;

  return linksPreview;
}