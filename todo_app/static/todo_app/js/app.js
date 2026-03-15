(function () {
  'use strict';

  function addAnimateIn(el, delayMs) {
    if (!el) return;
    delayMs = delayMs == null ? 50 : delayMs;
    window.setTimeout(function () {
      el.classList.add('animate-in');
    }, delayMs);
  }

  function runPageLoadAnimations() {
    var appCard = document.querySelector('.app-card');
    var emptyState = document.querySelector('.empty-state');

    if (appCard) {
      addAnimateIn(appCard, 50);
    }

    if (emptyState) {
      addAnimateIn(emptyState, 120);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runPageLoadAnimations);
  } else {
    runPageLoadAnimations();
  }
})();
