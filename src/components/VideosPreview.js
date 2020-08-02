import { videoCard } from './VideoCard';

export const videosPreview = (videos) => {
  // const videoList = videos ?
  //   videos.map(video => {
  //     return videoCard(video);
  //   }).join('\n') : '';


  // const videoPanel =
  //   `
  //     <section class="panel video__panel">
  //       <div class="panel__heading video__heading">
  //         <h3>Videos</h3>
  //       </div>
  //       <div class="video_wrapper">
  //         ${videoList}
  //       </div>
  //     </section>
  //   `;

  // return videoPanel;
  return '<div class="panel video__panel">Videos</div>'
}