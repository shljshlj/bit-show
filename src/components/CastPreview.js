import { castCard } from './CastCard';

export const castPreview = (media, cast) => {
  const castInOrder = cast.sort((a, b) => a.order - b.order);

  const castCardList = castInOrder.map(person => {
    const profileImgUrl = person.getProfileImgUrl();
    const genderStr = person.getGenderStr();
    return castCard(person, profileImgUrl, genderStr);
  });

  const castDescription = media === 'tv' ? 'Series Cast Summary:' : 'Top Billed Cast:';

  const castPanel =
    `
      <section class="panel cast__panel">
        <div class="panel__heading cast__heading">
          <h3>Cast</h3>
          <span class="cast__heading-label">${castDescription}</span>
        </div>
        <div class="cast-scroller should_fade is_fading">
          <ol class="cast__list">
            ${castCardList.join('\n')}
          </ol>
        </div>
      </section>
    `;

  return castPanel;
}