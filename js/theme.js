/* === Day/Night Theme Toggle === */
(function () {
  var btn = document.getElementById('theme-toggle');
  var STORAGE_KEY = 'daogui_theme';

  function applyTheme(mode) {
    if (mode === 'day') {
      document.body.classList.add('theme-day');
      btn.textContent = '☀️';
      btn.title = '切换黑夜模式';
    } else {
      document.body.classList.remove('theme-day');
      btn.textContent = '🌙';
      btn.title = '切换白天模式';
    }
  }

  // Load saved preference
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    applyTheme(saved);
  }

  btn.addEventListener('click', function () {
    var isDayNow = document.body.classList.contains('theme-day');
    var next = isDayNow ? 'night' : 'day';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
})();
