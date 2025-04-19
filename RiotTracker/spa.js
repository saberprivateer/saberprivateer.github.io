// Simple SPA navigation for Riot Tracker
// Loads main content dynamically without reloading the header

const PAGE_MAP = {
  'index.html': 'index-content.html',
  'about.html': 'about-content.html',
  'future.html': 'future-content.html'
};

function loadPageContent(page) {
  const main = document.querySelector('main');
  if (!main) return;
  fetch(PAGE_MAP[page] || PAGE_MAP['index.html'])
    .then(r => r.text())
    .then(html => {
      main.innerHTML = html;
      window.history.pushState({page}, '', page);
      highlightActiveNav(page);
      window.afterContentLoad && window.afterContentLoad(page);
    });
}

function highlightActiveNav(page) {
  document.querySelectorAll('.main-nav .nav-link').forEach(link => {
    if (link.getAttribute('data-nav') === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.main-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const page = this.getAttribute('data-nav');
      if (PAGE_MAP[page]) {
        e.preventDefault();
        loadPageContent(page);
      }
    });
  });
  // Support browser back/forward
  window.addEventListener('popstate', e => {
    const page = (e.state && e.state.page) || 'index.html';
    loadPageContent(page);
  });
});

// Initial load (for direct visits/bookmarks)
(function(){
  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (PAGE_MAP[page]) {
    loadPageContent(page);
  }
})();
