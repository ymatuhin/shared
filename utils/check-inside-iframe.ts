export function checkInsideIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
