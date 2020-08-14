export const videoCard = (video) => {
  const imgUrl = video.getImgUrl();
  const { title, videoId } = video;

  const card =
    `
      <div class="video__card" style="background-image: url(${imgUrl})">
        <a class="video__play" href="#" data-site="YouTube" data-video-id="${videoId}" data-title="${title}">
          <div class="play-background">
            <span class="play-background__icon"></span>
          </div>
        </a>
      </div>
    `;

  return card;
};