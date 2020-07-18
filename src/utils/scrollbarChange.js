/**
 * TODO:
 * 1. Register when scrollbar becomes visible
 * 2. Add fade-out ::after element with class 'is_fading'
 * 3. Register when user scrolls
 * 4. After a sec, change ::after opacity to 0 with class 'is_hidden'
 * 5. If scrolled to the begining, show fade-out element again
 * 6. When scrollbar is not visible, remove fade-out element
 */


function isScrollbarVisible(element) {
  return element.scrollWidth > element.clientWidth;
}

function addFade(element) {
  console.log(element);
}

// function setupResizeListeners(elements, resizeFunc) {
//   for (const el of elements) {
//     el.addEventListener('resize', resizeFunc.bind(null, event, el))
//   }
// }

function setupScrollListener(el) {
  console.log('inside scroll setup listener');

  let ticking = false;

  el.addEventListener('scroll', function (e) {

    if (!ticking) {
      window.requestAnimationFrame(function () {
        console.dir(el);
        ticking = false;
      });

      ticking = true;
    }
  });
}