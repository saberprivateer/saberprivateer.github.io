// Simple carousel functionality

// All initialization is now handled by window.afterContentLoad for SPA compatibility.

window.afterContentLoad = function(page) {
  // Only run company card logic on home page
  if (page === 'index.html') {
    renderCompanyCards().then(() => {
      setupCompanyFilters();
      setupCompanySort();
      setupSummaryClose();
      initializeCarousels();
    });
  } else if (page === 'pages/about.html') {
    // about page logic
  } else if (page === 'pages/future.html') {
    // future page logic
  }
  // Add any other per-page JS here as needed
};

function renderCompanyCards() {
  return fetch('./companies.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch companies.json: ' + response.status);
      }
      return response.json();
    })
    .then(companies => {
      if (!Array.isArray(companies)) {
        throw new Error('companies.json does not contain an array!');
      }
      console.log('Fetched companies:', companies);
      const grid = document.querySelector('.company-grid');
      if (!grid) return;
      grid.innerHTML = '';
      companies.forEach(company => {
        // Defensive: check required fields
        if (!company.name) {
          console.warn('Company missing name:', company);
          return;
        }
        const card = document.createElement('div');
        card.className = 'company-card';
        card.setAttribute('data-status', company.status || 'unknown');
        card.setAttribute('data-type', company.type || 'other');
        card.innerHTML = `
          <div class="card-header">
            <img src="${company.logo || ''}" alt="${company.name} Logo" class="company-logo">
            <div class="company-name">
              <h2>${company.name}</h2>
              <div class="funding">${company.funding || ''}</div>
              ${(company.statuses || []).map(status => `<div class="status status-${status.toLowerCase()} status-chip" data-status-chip="${status.toLowerCase()}">${status}</div>`).join('')}
            </div>
          </div>
          <div class="card-body">
            <div class="founders">
              <div class="founders-label">Founders with Riot History</div>
              <div class="founders-list">
                ${(company.founders || []).map(f => `<a href="${f.linkedin}" target="_blank" class="founder-link">${f.name}</a>`).join('')}
              </div>
            </div>
            <div class="games-list">
              <div class="games-label">${company.type === 'content' ? 'Content' : 'Video Games'}</div>
              <div class="games-names">${(company.games || []).map(g => g.title).join(', ')}</div>
              <div class="carousel">
                ${(company.games || []).map((g, idx) => `<img src="${g.image}" alt="${g.title}" class="${idx === 0 ? 'active' : ''}">`).join('')}
                <button class="carousel-prev"><i class="fas fa-chevron-left"></i></button>
                <button class="carousel-next"><i class="fas fa-chevron-right"></i></button>
              </div>
            </div>
            <div class="more-info">
              <div class="more-info-header">
                <h3>More Info</h3>
                <i class="fas fa-chevron-down"></i>
              </div>
              <div class="more-info-content">
                <p>${company.moreInfo || ''}</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <a href="${company.website}" target="_blank" class="website-link">Visit Website <i class="fas fa-external-link-alt"></i></a>
          </div>
        `;
        grid.appendChild(card);
      });
      // After rendering, update cards variable for filtering/sorting
      window.cards = Array.from(document.querySelectorAll('.company-card'));
    })
    .catch(err => {
      console.error('Error loading or rendering companies:', err);
      const grid = document.querySelector('.company-grid');
      if (grid) grid.innerHTML = '<div style="color: red;">Failed to load company data. See console for details.</div>';
    });
}

function setupCompanyFilters() {
  const filterSelect = document.getElementById('filterSelect');
  const typeSelect = document.getElementById('typeSelect');
  if (!filterSelect || !typeSelect) return;
  filterSelect.addEventListener('change', applyFilters);
  typeSelect.addEventListener('change', applyFilters);
  function applyFilters() {
    const statusFilter = filterSelect.value;
    const typeFilter = typeSelect.value;
    document.querySelectorAll('.company-card').forEach(card => {
      const statusMatch = statusFilter === 'all' || card.getAttribute('data-status') === statusFilter;
      const typeMatch = typeFilter === 'all' || card.getAttribute('data-type') === typeFilter;
      card.style.display = (statusMatch && typeMatch) ? 'flex' : 'none';
    });
  }
}

function setupCompanySort() {
  const sortSelect = document.getElementById('sortSelect');
  const sortDirectionBtn = document.getElementById('sortDirection');
  if (!sortSelect || !sortDirectionBtn) return;
  let sortDirection = 'asc';
  sortSelect.addEventListener('change', sortCards);
  sortDirectionBtn.addEventListener('click', () => {
    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    sortDirectionBtn.querySelector('i').className = 
      sortDirection === 'asc' ? 'fas fa-sort-amount-down' : 'fas fa-sort-amount-up';
    sortCards();
  });
  function sortCards() {
    const sortType = sortSelect.value;
    const cards = Array.from(document.querySelectorAll('.company-card'));
    const grid = document.querySelector('.company-grid');
    cards.sort((a, b) => {
      let valueA, valueB;
      switch(sortType) {
        case 'name':
          valueA = a.querySelector('h2').textContent;
          valueB = b.querySelector('h2').textContent;
          break;
        case 'funding':
          valueA = parseInt(a.querySelector('.funding').textContent.match(/\d+/)?.[0] || 0);
          valueB = parseInt(b.querySelector('.funding').textContent.match(/\d+/)?.[0] || 0);
          break;
        case 'year':
          valueA = parseInt(a.querySelector('.funding').textContent.match(/\d{4}$/)?.[0] || 0);
          valueB = parseInt(b.querySelector('.funding').textContent.match(/\d{4}$/)?.[0] || 0);
          break;
      }
      if (sortDirection === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
    cards.forEach(card => grid.appendChild(card));
  }
}

function setupSummaryClose() {
  document.querySelectorAll('.summary-close').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.summary').style.display = 'none';
      localStorage.setItem('summaryDismissed', '1');
      // Add padding to filters when summary is dismissed
      const filters = document.querySelector('.filters');
      if (filters) filters.style.paddingTop = '1.2rem';
    });
  });
}

// Add click listeners to status chips for filtering
document.querySelectorAll('.status-chip').forEach(chip => {
  chip.style.cursor = 'pointer';
  chip.title = 'Click to filter by this status';
  chip.addEventListener('click', function(e) {
    const status = chip.getAttribute('data-status-chip');
    // Set filter select to this status and trigger change
    const filterSelect = document.getElementById('filterSelect');
    if (filterSelect) {
      filterSelect.value = status;
      filterSelect.dispatchEvent(new Event('change'));
    }
  });
});

function initializeCarousels() {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const slides = carousel.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    let currentSlide = 0;
    // Hide arrows if only one slide
    if (slides.length <= 1) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    } else {
      if (prevBtn) prevBtn.style.display = '';
      if (nextBtn) nextBtn.style.display = '';
    }
    if (slides.length > 0) slides[0].classList.add('active');
    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }
    if (prevBtn) {
      prevBtn.onclick = () => showSlide(currentSlide - 1);
    }
    if (nextBtn) {
      nextBtn.onclick = () => showSlide(currentSlide + 1);
    }
  });
}

// More Info section functionality
const moreInfoHeaders = document.querySelectorAll('.more-info-header');
moreInfoHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    header.classList.toggle('expanded');
    content.classList.toggle('expanded');
  });
});

// Dismiss summary card functionality with persistence
const summaryCloseBtn = document.querySelector('.summary-close');
const summary = document.querySelector('.summary');
if (summaryCloseBtn && summary) {
  summaryCloseBtn.addEventListener('click', () => {
    summary.style.display = 'none';
    localStorage.setItem('summaryDismissed', '1');
    // Add padding to filters when summary is dismissed
    const filters = document.querySelector('.filters');
    if (filters) filters.style.paddingTop = '1.2rem';
  });
}

// On load, check if summary should be hidden
if (summary && localStorage.getItem('summaryDismissed') === '1') {
  summary.style.display = 'none';
  const filters = document.querySelector('.filters');
  if (filters) filters.style.paddingTop = '1.2rem';
}
