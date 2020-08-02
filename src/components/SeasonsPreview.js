import { seasonCard } from './SeasonCard';

export const seasonsPreview = (title, seasons) => {
  const seasonsInOrder = seasons.sort((a, b) => b.seasonNumber - a.seasonNumber);
  const seasonsList = seasons.length > 8 ? seasonsInOrder.slice(0, 8) : seasonsInOrder;

  const seasonCardList = seasonsList.map(season => {
    const posterUrl = season.getPosterUrl();
    const releaseYear = season.getReleaseYear();

    return seasonCard(season, posterUrl, releaseYear, title)
  });

  const seasonsPanel =
    `
    <section class="panel season__panel">
      <div class="panel__heading season__heading">
        <h3>Seasons</h3>
      </div>
      <div class="season_wrapper">
        <ol class="season__list">
          ${seasonCardList.join('\n')}
        </ol>
      </div>
    </section>
  `;

  return seasonsPanel;
}