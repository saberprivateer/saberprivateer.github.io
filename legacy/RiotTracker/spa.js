// Simple SPA navigation for Riot Tracker
// Loads main content dynamically without reloading the header

// Security Helpers
function escapeHTML(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function sanitizeHTML(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Remove all script tags
  const scripts = doc.querySelectorAll('script');
  scripts.forEach(s => s.remove());

  // Remove all on* event handlers and javascript: links
  const allElements = doc.querySelectorAll('*');
  allElements.forEach(el => {
    // Remove on* attributes
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.toLowerCase().startsWith('on')) {
        el.removeAttribute(attr.name);
      }
    });

    // Remove javascript: links
    if (el.tagName === 'A' && el.hasAttribute('href')) {
      const href = el.getAttribute('href').trim().toLowerCase();
      if (href.startsWith('javascript:')) {
        el.removeAttribute('href');
      }
    }
  });

  return doc.body.innerHTML;
}

function injectSanitizedHTML(target, html) {
  if (typeof target === 'string') {
    target = document.querySelector(target);
  }
  if (target) {
    target.innerHTML = sanitizeHTML(html);
  }
}

// Make helpers available globally
window.escapeHTML = escapeHTML;
window.sanitizeHTML = sanitizeHTML;
window.injectSanitizedHTML = injectSanitizedHTML;

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
      injectSanitizedHTML('#site-header', html);
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
      injectSanitizedHTML(main, html);
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
