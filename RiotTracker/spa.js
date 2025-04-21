// Simple SPA navigation for Riot Tracker
// Loads main content dynamically without reloading the header

const PAGE_MAP = {
  'index.html': 'partials/index-content.html',
  'pages/about.html': 'partials/about-content.html',
  'pages/future.html': 'partials/future-content.html'
};

// --- HEADER INJECTION FOR SPA ---
function injectHeader() {
  fetch('partials/header.html')
    .then(r => {
      if (!r.ok) {
        // Try relative path for subpages
        return fetch('../partials/header.html');
      }
      return r;
    })
    .then(r => r.text())
    .then(html => {
      // Parse and extract only the <header> content (for safety)
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const headerContent = doc.body.innerHTML || html;
      document.getElementById('site-header').innerHTML = headerContent;
      highlightActiveNav(window.location.pathname.split('/').pop() || 'index.html');
    });
}

function loadPageContent(page) {
  const main = document.querySelector('main');
  if (!main) return;
  
  // Determine if we're in a subpage
  const inSubpage = window.location.pathname.includes('/pages/');
  const contentPath = inSubpage ? '../' + PAGE_MAP[page] : PAGE_MAP[page];
  
  fetch(contentPath)
    .then(r => {
      if (!r.ok) {
        console.error('Failed to load content:', contentPath);
        return '<div class="container"><h2>Content not found</h2></div>';
      }
      return r.text();
    })
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

// Make loadPageContent available globally for the header script
window.loadPageContent = loadPageContent;

document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  
  // Initial load (for direct visits/bookmarks)
  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (PAGE_MAP[page]) {
    loadPageContent(page);
  } else if (PAGE_MAP['index.html']) {
    loadPageContent('index.html');
  }
});
