(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const themeGlyph = document.querySelector('.theme-glyph');
  const themeLabel = document.querySelector('.theme-label');
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  function setTheme(theme, persist = true) {
    const normalized = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = normalized;
    if (metaTheme) metaTheme.content = normalized === 'dark' ? '#07111f' : '#f4f8fb';
    if (toggle) toggle.setAttribute('aria-label', normalized === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    if (themeGlyph) themeGlyph.textContent = normalized === 'dark' ? '☼' : '☾';
    if (themeLabel) themeLabel.textContent = normalized === 'dark' ? 'Light' : 'Dark';
    if (persist) {
      try { localStorage.setItem('ntac-theme', normalized); } catch (_) { /* Storage may be disabled. */ }
    }
  }

  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('ntac-theme') || 'dark'; } catch (_) { /* Storage may be disabled. */ }
  setTheme(savedTheme, false);
  toggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const progress = document.getElementById('progress-bar');
  function updateProgress() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    if (progress) progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  const revealItems = document.querySelectorAll('.service-card, .learning-card, .process-item, .data-capabilities > div');
  revealItems.forEach(item => item.classList.add('reveal'));
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }
})();
