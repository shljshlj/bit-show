export const videoModal = (videoTitle, videoId) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const modal =
    `
      <div class="modal__content">
        <div class="modal__titlebar">
          <span class="modal__title">${videoTitle}</span>
          <div class="modal__close">
            <a role="button" class="modal__close-button" href="#">
              <span class="modal__close-icon">
                <i class="fas fa-times"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="modal__player-container">
          <iframe id="modal-player" class="modal__player" type="text/html" src="${videoSrc}" frameborder="0" allow="autoplay"
            allowfullscreen></iframe>
        </div>
      </div>
    `;

  return modal;
}