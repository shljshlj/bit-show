function setupModal(bodyEl, modalOverlay) {

  function startModal() {
    showModal();
    setupModalListeners();
  }

  function getIframePlayer() {
    return document.querySelector('#modal-player');
  }

  function setupModalListeners() {
    // Setup event listeners for closing modal
    modalOverlay.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', clickOutsideToCloseModal);
    modalOverlay.addEventListener('animationend', removeModalOnAnimationend);
    modalOverlay.addEventListener('animationend', showHidePlayer);
  }

  function removeModalListeners() {
    modalOverlay.removeEventListener('click', closeModal);
    modalOverlay.removeEventListener('click', clickOutsideToCloseModal);
    modalOverlay.removeEventListener('animationend', removeModalOnAnimationend);
    modalOverlay.removeEventListener('animationend', showHidePlayer);
  }

  /* Modal event handlers */

  function closeModal(event) {
    event.preventDefault();
    if (!event.target.closest('.modal__close-button')) return;
    hideModal();
  }

  function clickOutsideToCloseModal(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      hideModal();
    }
  }

  function removeModalOnAnimationend(event) {
    if (event.animationName === 'fadeOut') {
      bodyEl.classList.remove('hide-modal');
      removeModalListeners();
      modalOverlay.innerHTML = '';
    }
  }

  function showHidePlayer(event) {
    if (!event.target.closest('.modal__content')) return;

    if (event.animationName === 'scaleIn') showPlayer();
    if (event.animationName === 'scaleOut') hidePlayer();
  }

  /* Modal style functions  */

  function showModal() {
    bodyEl.classList.add('show-modal');
  }

  function hideModal() {
    const iframe = getIframePlayer();
    iframe.src = '';
    bodyEl.classList.remove('show-modal');
    bodyEl.classList.add('hide-modal');

  }

  function showPlayer() {
    const iframe = getIframePlayer();
    iframe.classList.add('show');
  }

  function hidePlayer() {
    const iframe = getIframePlayer();
    iframe.classList.remove('show');
  }

  return {
    startModal
  }
}

export {
  setupModal
}