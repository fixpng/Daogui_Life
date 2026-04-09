/* === Day/Night Theme Toggle === */
export function initTheme() {
  var btn = document.getElementById('theme-toggle')
  var STORAGE_KEY = 'daogui_theme'

  function applyTheme(mode: string) {
    if (mode === 'day') {
      document.body.classList.add('theme-day')
      btn!.textContent = '\u2600\uFE0F'
      btn!.title = '\u5207\u6362\u9ED1\u591C\u6A21\u5F0F'
    } else {
      document.body.classList.remove('theme-day')
      btn!.textContent = '\uD83C\uDF19'
      btn!.title = '\u5207\u6362\u767D\u5929\u6A21\u5F0F'
    }
  }

  var saved = localStorage.getItem(STORAGE_KEY)
  if (saved) applyTheme(saved)

  btn!.addEventListener('click', function () {
    var isDayNow = document.body.classList.contains('theme-day')
    var next = isDayNow ? 'night' : 'day'
    applyTheme(next)
    localStorage.setItem(STORAGE_KEY, next)
  })
}
