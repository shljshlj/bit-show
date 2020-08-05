export const videoModal = (video) => {
  const videoUrl = video.getVideoUrl();

  const modal =
    `
      <iframe width="737" height="414" src=${videoUrl} frameborder="0"
      allowfullscreen></iframe>
    `;

  return modal;
}