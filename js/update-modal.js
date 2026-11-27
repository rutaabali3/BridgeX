(() => {
  const currentScript = document.currentScript;
  const updatesHref = currentScript?.getAttribute('data-updates-href') || 'updates.html';
  const categoryName = currentScript?.getAttribute('data-category') || 'this category';

  document.addEventListener('DOMContentLoaded', () => {
    const MODAL_KEY = 'bridgexUpdateModalShown';

    if (!window.bootstrap?.Modal) {
      return;
    }

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(MODAL_KEY) === 'true';
    } catch {
      alreadyShown = false;
    }

    if (alreadyShown) {
      return;
    }

    let modalElement = document.getElementById('bridgeUpdateModal');
    if (!modalElement) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <div class="modal fade" id="bridgeUpdateModal" tabindex="-1" aria-labelledby="bridgeUpdateModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="bridgeUpdateModalLabel">Bridge Details &amp; Rankings Updated</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <img src="./images/Bridge Img.webp" alt="BridgeX Updates Notice" class="update-modal-img">
                <div><span class="update-modal-badge">Changelog · Nov 2026</span></div>
                <h3 class="update-modal-name">Details &amp; Rankings Have Changed</h3>
                <p class="update-modal-desc">Bridge details, measurements, and rankings in ${categoryName} have been verified and updated. Check the changelog to see what changed and when.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href="${updatesHref}" class="btn btn-read-more">Read Updates</a>
              </div>
            </div>
          </div>
        </div>
      `;
      modalElement = wrapper.firstElementChild;
      document.body.appendChild(modalElement);
    }

    const updateModal = new window.bootstrap.Modal(modalElement);
    updateModal.show();

    try {
      sessionStorage.setItem(MODAL_KEY, 'true');
    } catch {
      // Ignore storage errors when sessionStorage is unavailable.
    }
  });
})();
