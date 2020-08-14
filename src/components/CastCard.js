export const castCard = ({ name, character, episodeCount }, profileImgUrl, genderStr) => {
  const episodeSpan = episodeCount !== null ?
    `<span class="cast__episode_count">
      ${episodeCount}${episodeCount > 1 ? ' Episodes' : ' Episode'}
    </span>` : '';

  const profileImg = profileImgUrl ?
    `<img src=${profileImgUrl} alt=${name}>` :
    `<div class="profile-placeholder" style="background-image:url('/src/assets/${genderStr}_placeholder_tmdb.svg')"></div>`;

  const card =
    `
    <li class="cast__card card">
      <a class="cast__card-link" href="#">
        ${profileImg}
      </a>
      <span class="cast__name"><a href="#">${name}</a></span>
      <span class="cast__character">${character}</span>
      ${episodeSpan}
    </li>
  `;

  return card;
}
