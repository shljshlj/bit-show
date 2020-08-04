export const videoCard = (video) => {
  const imgUrl = video.getImgUrl();

  const card =
    `
      <div class="video__card" style="background-image: url(${imgUrl})">
        <a class="video__play" href="#">
          <div class="play-background">
            <span class="play-background__icon"></span>
          </div>
        </a>
      </div>
    `;

  return card;
};