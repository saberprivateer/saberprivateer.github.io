(function() {
  const isGhPages = window.location.hostname.endsWith('github.io');
  const base = isGhPages ? '/RiotTracker/' : '/';
  document.getElementById('nav-home').setAttribute('href', base + 'index.html');
  document.getElementById('nav-about').setAttribute('href', base + 'pages/about.html');
  document.getElementById('nav-future').setAttribute('href', base + 'pages/future.html');
})();
