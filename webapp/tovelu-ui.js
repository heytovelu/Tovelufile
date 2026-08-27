/**
 * TOVELU DESIGN SYSTEM (TDS-1.0) COMPONENT CONTROLLER
 * Universal JavaScript helper for interactive pickers, gauges, and theme toggling
 */

const ToveluUI = (() => {
  // Theme Manager
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.className = theme === 'dark' ? 'tds-theme-dark' : '';
    localStorage.setItem('tovelu_theme', theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    return next;
  }

  function initTheme() {
    const saved = localStorage.getItem('tovelu_theme') || 'light';
    setTheme(saved);
  }

  // Visual Option Card Handlers
  function selectOption(cardEl, groupClass = '.tds-option-card') {
    const parent = cardEl.closest('.tds-option-group') || document;
    parent.querySelectorAll(groupClass).forEach(c => {
      c.classList.remove('selected');
      const check = c.querySelector('.tds-check-circle');
      if (check) check.innerText = '';
    });

    cardEl.classList.add('selected');
    const check = cardEl.querySelector('.tds-check-circle');
    if (check) check.innerText = '✓';
  }

  function toggleMultiOption(cardEl) {
    cardEl.classList.toggle('selected');
    const check = cardEl.querySelector('.tds-check-circle');
    if (cardEl.classList.contains('selected')) {
      if (check) check.innerText = '✓';
    } else {
      if (check) check.innerText = '';
    }
  }

  // Preset Time Chip Selector
  function selectPresetChip(chipEl, targetInputId, groupClass = '.tds-preset-chip') {
    const parent = chipEl.parentElement;
    parent.querySelectorAll(groupClass).forEach(c => c.classList.remove('active'));
    chipEl.classList.add('active');
    
    if (targetInputId) {
      const input = document.getElementById(targetInputId);
      if (input) input.value = chipEl.innerText.trim();
    }
  }

  return {
    setTheme,
    toggleTheme,
    initTheme,
    selectOption,
    toggleMultiOption,
    selectPresetChip
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  ToveluUI.initTheme();
});
