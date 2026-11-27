document.addEventListener('DOMContentLoaded', () => {
  const MODAL_KEY = 'bridgexHighestUpdateModalShown';
  const modalElement = document.getElementById('highestBridgeUpdateModal');

  if (!modalElement || !window.bootstrap?.Modal) {
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

  const updateModal = new window.bootstrap.Modal(modalElement);
  updateModal.show();

  try {
    sessionStorage.setItem(MODAL_KEY, 'true');
  } catch {
    // Ignore storage errors when sessionStorage is unavailable.
  }
});
