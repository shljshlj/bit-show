export const castCard = ({ name, character, episodeCount }, profileImgUrl) => {
  const episodeSpan = episodeCount !== null ?
    `<span class="cast__episode_count">
      ${episodeCount}${episodeCount > 1 ? ' Episodes' : ' Episode'}
    </span>` : '';

  const card =
    `
    <li class="cast__card card">
      <a class="cast__card-link" href="#">
        <img src=${profileImgUrl}
          alt=${name}>
      </a>
      <span class="cast__name"><a href="#">${name}</a></span>
      <span class="cast__character">${character}</span>
      ${episodeSpan}
    </li>
  `;

  return card;
}