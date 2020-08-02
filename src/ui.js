import { cardPreview } from './components/CardPreview';

import { pageHeaderPreview } from './components/PageHeaderPreview';
import { castPreview } from './components/CastPreview';
import { seasonsPreview } from './components/SeasonsPreview';
import { videosPreview } from './components/VideosPreview';
import { recommendedPreview } from './components/RecommendedPreview';
import { detailsPreview } from './components/DetailsPreview';

function displayPreview(items, container) {
  items.forEach((item) => {
    const card = cardPreview(item);
    container.insertAdjacentHTML('beforeend', card);
  });
}

function displaySingleItem(item, headerContainer, gridContainer) {
  console.log(item);

  const {
    media,
    id,
    title,
    episodeRuntime,
    firstAirDate,
    lastAirDate,
    voteAverage,
    voteCount,
    overview,
    status,
    type,
    numOfEpisodes,
    numOfSeasons,
    seasons,
    originCountry,
    originalLanguage,
    videos,
    cast,
    homepage,
    externalIds,
    keywords,
    recommendedShows
  } = item;

  /* Header */

  const itemRuntime = episodeRuntime + 'min';
  const itemGenres = item.getGenreList();
  const itemCreators = item.getCreatorsList();
  const posterUrl = item.getPosterUrl();
  const backdropUrl = item.getBackdropUrl();
  const itemDateFormat = item.getDateFormat();

  const headerPanel = pageHeaderPreview(
    media,
    title,
    itemRuntime,
    itemGenres,
    itemDateFormat,
    voteAverage,
    voteCount,
    itemCreators,
    overview,
    posterUrl,
    backdropUrl
  );

  /* Cast Panel */

  const castPanel = castPreview(media, cast);

  /* Seasons Panel */

  const seasonsPanel = seasonsPreview(title, seasons);


  const videosPanel = videosPreview();
  const recommendedPanel = recommendedPreview();
  const detailsPanel = detailsPreview();



  headerContainer.insertAdjacentHTML('beforeend', headerPanel);
  gridContainer.insertAdjacentHTML('beforeend', castPanel);
  gridContainer.insertAdjacentHTML('beforeend', seasonsPanel);
  gridContainer.insertAdjacentHTML('beforeend', videosPanel);
  gridContainer.insertAdjacentHTML('beforeend', recommendedPanel);
  gridContainer.insertAdjacentHTML('beforeend', detailsPanel);
}

export {
  displayPreview,
  displaySingleItem
};
