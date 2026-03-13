/**
 * Django To-do — Micro-animations (Vanilla JS)
 * Fade-in + slide-up on load and for empty-state message.
 */

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

    // 1. App card: fade-in + slide-up on load
    if (appCard) {
      addAnimateIn(appCard, 50);
    }

    // 2. Empty-state message (e.g. "You have no lists!"): same animation when visible
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
