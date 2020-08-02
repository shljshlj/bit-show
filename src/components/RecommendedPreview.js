import { recommendedCard } from './RecommendedCard';

export const recommendedPreview = (recommended) => {
  const recommendedList = recommended.map(item => {
    const { title, rating } = item;
    const posterUrl = item.getPosterUrl();
    const ratingPercent = rating ? rating * 10 : '';

    return recommendedCard(posterUrl, title, ratingPercent);
  });

  const recommendedPanel =
    `
      <section class="panel recommended__panel">
        <div class="panel__heading recommended__heading">
          <h3>More Like This</h3>
        </div>
        <ul class="recommended__list">
          ${recommendedList.join('\n')}
        </ul>
      </section>
    `;

  return recommendedPanel;
};