(function(){
  'use strict';

  const S = window.SITE_DATA;

  /* ─── Theme ─── */
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const mbnTheme = document.getElementById('mbnTheme');
  const html = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', theme);

  function applyTheme(next) {
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#0B0E11' : '#F8F9FA');
    const sunIcon = next === 'dark' ? 'none' : 'block';
    const moonIcon = next === 'dark' ? 'block' : 'none';
    document.querySelectorAll('.icon-sun').forEach(el => el.style.display = sunIcon);
    document.querySelectorAll('.icon-moon').forEach(el => el.style.display = moonIcon);
    updateMbnThemeIcon(next);
  }

  function updateMbnThemeIcon(t) {
    if (!mbnTheme) return;
    if (t === 'dark') {
      mbnTheme.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><span>Tema</span>';
    } else {
      mbnTheme.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg><span>Tema</span>';
    }
  }

  themeToggle?.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
  mobileThemeToggle?.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
  mbnTheme?.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
  applyTheme(theme);

  /* ─── Progress Bar ─── */
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && h > 0) progressBar.style.width = Math.min(window.scrollY / h * 100, 100) + '%';
  }, { passive: true });

  /* ─── Navbar scroll ─── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ─── Mobile Nav ─── */
  const navToggle = document.getElementById('navToggle');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    mobileOverlay?.classList.toggle('open', !open);
    mobileOverlay?.removeAttribute('hidden');
    document.body.style.overflow = open ? '' : 'hidden';
  });
  mobileOverlay?.addEventListener('click', (e) => {
    if (e.target === mobileOverlay || e.target.closest('[data-close-nav]')) {
      navToggle?.setAttribute('aria-expanded', 'false');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  document.querySelectorAll('[data-close-nav]').forEach(el => {
    el.addEventListener('click', () => {
      navToggle?.setAttribute('aria-expanded', 'false');
      mobileOverlay?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ─── MBN Search → scroll to search section ─── */
  const mbnSearch = document.getElementById('mbnSearch');
  mbnSearch?.addEventListener('click', () => {
    const section = document.getElementById('topicos');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      const input = document.getElementById('searchInput');
      if (input) input.focus();
    }, 600);
  });
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]:not([hidden])');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 150) current = s.id;
    });
    navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === current));
  }, { passive: true });

  /* ─── Index Grid ─── */
  const indexGrid = document.getElementById('indexGrid');
  if (indexGrid && S && S.categorias) {
    indexGrid.innerHTML = S.categorias.map((c, i) => `
      <div class="index-item" role="listitem" tabindex="0" data-category="${c.id}" aria-label="${c.nome}">
        <div class="index-item-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="index-item-text">
          <div class="index-item-name">${c.nome}</div>
          <div class="index-item-meta">${c.subtopicos?.length || 0} topicos</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="flex-shrink:0;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    `).join('');
    indexGrid.querySelectorAll('.index-item').forEach(item => {
      const handler = () => {
        openDetail(item.dataset.category);
        const panel = document.getElementById('topicDetail');
        if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      item.addEventListener('click', handler);
      item.addEventListener('keydown', e => { if (e.key === 'Enter') handler(); });
    });
  }

  /* ─── Topics Grid ─── */
  const grid = document.getElementById('topicsGrid');
  const searchInput = document.getElementById('searchInput');
  const searchHint = document.getElementById('searchHint');
  const searchEmpty = document.getElementById('searchEmpty');
  const searchSuggestions = document.getElementById('searchSuggestions');
  const searchClear = document.getElementById('searchClear');
  const searchBackdrop = document.getElementById('searchBackdrop');

  function closeSuggestions() {
    searchSuggestions?.classList.remove('open');
    searchBackdrop?.classList.remove('open');
  }

  function openSuggestions() {
    searchSuggestions?.classList.add('open');
    searchBackdrop?.classList.add('open');
  }

  searchClear?.addEventListener('click', () => {
    if (searchInput) { searchInput.value = ''; searchInput.focus(); }
    searchClear.hidden = true; renderTopics();
    if (searchHint) searchHint.textContent = '';
    closeSuggestions();
  });

  searchBackdrop?.addEventListener('click', closeSuggestions);

  function renderTopics(filter) {
    if (!grid) return;
    const cats = (S && S.categorias) || [];
    const filtered = filter
      ? cats.filter(c =>
          c.nome.toLowerCase().includes(filter.toLowerCase()) ||
          c.subtopicos?.some(s => {
            const texto = typeof s === 'string' ? s : (s.titulo || '');
            return texto.toLowerCase().includes(filter.toLowerCase());
          })
        )
      : cats;
    if (filtered.length === 0) { grid.innerHTML = ''; if (searchEmpty) searchEmpty.hidden = false; return; }
    if (searchEmpty) searchEmpty.hidden = true;
    grid.innerHTML = filtered.map(c => `
      <article class="topic-card" style="--card-accent:${c.cor};--card-accent-light:${c.cor}22" data-category="${c.id}" tabindex="0" role="button" aria-label="${c.nome}">
        <div class="topic-card-icon">${getIcon(c.icone)}</div>
        <h3>${c.nome}</h3>
        <p>${c.descricao || ''}</p>
        <span class="topic-count">${c.subtopicos?.length || 0} topicos</span>
      </article>
    `).join('');
    grid.querySelectorAll('.topic-card').forEach(card => {
      card.addEventListener('click', () => openDetail(card.dataset.category));
      card.addEventListener('keydown', e => { if (e.key === 'Enter') openDetail(card.dataset.category); });
    });
  }

  function getIcon(name) {
    const icons = {
      'calendar-clock': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      'badge-check': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4"/><path d="M12 2l3.09 3.09 4.36-.73.73 4.36L22 12l-1.82 3.09.73 4.36-4.36.73L12 22l-3.09-3.09-4.36.73-.73-4.36L2 12l1.82-3.09-.73-4.36 4.36-.73L12 2z"/></svg>',
      'package': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
      'truck': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
      'layers': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
      'archive': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>',
      'coins': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M9 10h4a2 2 0 0 1 0 4H9"/></svg>',
      'trending-up': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
      'git-branch': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
      'sigma': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 7V4H6l6 8-6 8h12v-3"/></svg>',
      'bar-chart': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
      'database': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
      'cpu': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M20 9h3M1 15h3M20 15h3"/></svg>',
      'zap': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      'tool': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      'users': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      'leaf': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
      'folder-kanban': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="3 7 9 3 15 7 21 3 21 17 15 21 9 17 3 21 3 7"/><line x1="9" y1="3" x2="9" y2="17"/><line x1="15" y1="7" x2="15" y2="21"/></svg>',
      'briefcase': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
      'ruler': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 3l4 4-8 8-4-4 8-8z"/><path d="M9 10l-5 5 4 4 5-5"/><path d="M14 15l-4 4 3 3 4-4-3-3z"/></svg>',
      'factory': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 20V4l8 4v-2l8 4v4"/><rect x="2" y="16" width="20" height="4" rx="1"/><path d="M14 10v4"/><path d="M18 10v4"/><path d="M6 14v4"/><path d="M10 14v4"/></svg>',
      'stopwatch': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/></svg>',
      'monitor': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
      'lightbulb': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
      'gauge': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 15l3.5-3.5"/><path d="M20.3 18.3A10 10 0 0 0 3.7 5.7"/><circle cx="12" cy="12" r="10"/></svg>',
      'book-open': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
      'book': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M20 3H6.5A2.5 2.5 0 0 0 4 5.5v13"/><path d="M20 3v17H6.5A2.5 2.5 0 0 1 4 17.5V5.5"/></svg>',
      'hammer': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9"/><path d="M17.64 15l1.36-1.36a2.12 2.12 0 0 0 0-3L16 8"/><path d="M20 3l-3 3"/></svg>',
      'heart-handshake': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
      'shield': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      'rotate-ccw': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
      'brain': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.08 2.5 2.5 0 0 1 1.3-4.44 2.5 2.5 0 0 1 4.46-2.34Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.08 2.5 2.5 0 0 0-1.3-4.44 2.5 2.5 0 0 0-4.46-2.34Z"/></svg>'
    };
    return icons[name] || '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>';
  }

  renderTopics();

  /* ─── Search ─── */
  let highlightedIndex = -1;

  searchInput?.addEventListener('input', () => {
    const q = searchInput.value.trim();
    renderTopics(q);
    if (searchClear) searchClear.hidden = !q;
    highlightedIndex = -1;
    if (q.length >= 2) {
      const suggestions = getSuggestions(q, 8);
      if (suggestions.length > 0 && searchSuggestions) {
        searchSuggestions.innerHTML = suggestions.map((s, i) => `
          <div class="suggestion-item" data-idx="${i}" data-category="${s.categoryId}">
            <div class="suggestion-item-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            <div class="suggestion-item-text">
              <div class="suggestion-item-title">${highlightMatch(s.title, q)}</div>
              <div class="suggestion-item-parent">${s.parent}</div>
            </div>
          </div>
        `).join('');
        openSuggestions();
        searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
          item.addEventListener('click', () => {
            openDetail(item.dataset.category);
            closeSuggestions();
          });
        });
      } else { closeSuggestions(); }
    } else { closeSuggestions(); }
    if (searchHint) {
      const count = grid?.querySelectorAll('.topic-card').length || 0;
      searchHint.textContent = q ? `${count} resultado${count !== 1 ? 's' : ''} para "${q}"` : '';
    }
  });

  searchInput?.addEventListener('keydown', (e) => {
    const items = searchSuggestions?.querySelectorAll('.suggestion-item');
    if (!items || !items.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1); items.forEach((el, i) => el.classList.toggle('highlighted', i === highlightedIndex)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); highlightedIndex = Math.max(highlightedIndex - 1, 0); items.forEach((el, i) => el.classList.toggle('highlighted', i === highlightedIndex)); }
    else if (e.key === 'Enter' && highlightedIndex >= 0) { e.preventDefault(); openDetail(items[highlightedIndex].dataset.category); closeSuggestions(); }
    else if (e.key === 'Escape') { closeSuggestions(); }
  });

  function getSuggestions(query, maxResults) {
    const results = []; const q = query.toLowerCase();
    (S && S.categorias || []).forEach(cat => {
      if (cat.nome.toLowerCase().includes(q)) results.push({ title: cat.nome, parent: 'Area', categoryId: cat.id });
      (cat.subtopicos || []).forEach((sub, i) => {
        const titulo = typeof sub === 'string' ? sub : (sub.titulo || '');
        if (titulo.toLowerCase().includes(q)) results.push({ title: titulo, parent: cat.nome, categoryId: cat.id });
      });
    });
    return results.slice(0, maxResults);
  }

  function highlightMatch(text, query) {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<strong class="search-highlight">$1</strong>');
  }

  /* ─── Topic Detail Panel ─── */
  const detail = document.getElementById('topicDetail');
  const detailBackdrop = document.getElementById('topicDetailBackdrop');
  const detailClose = document.getElementById('detailClose');
  const detailBack = document.getElementById('detailBack');
  const detailTag = document.getElementById('detailTag');
  const detailTitle = document.getElementById('detailTitle');
  const detailDesc = document.getElementById('detailDesc');
  const detailContent = document.getElementById('detailContent');

  function openDetail(id) {
    const cat = (S && S.categorias || []).find(c => c.id === id);
    if (!cat || !detail) return;
    if (detailTag) detailTag.textContent = cat.nome;
    if (detailTitle) detailTitle.textContent = cat.nome;
    if (detailDesc) detailDesc.textContent = cat.descricao || '';
    if (detailContent) {
      detailContent.innerHTML = (cat.subtopicos || []).map((s, i) => {
        const titulo = typeof s === 'string' ? s : (s.titulo || '');
        const definicao = typeof s === 'object' ? (s.definicao || '') : '';
        const topicosLista = typeof s === 'object' ? (s.topicos || []) : [];
        const formula = typeof s === 'object' ? (s.formula || '') : '';
        const aplicacoes = typeof s === 'object' ? (s.aplicacoes || []) : '';
        const temDetalhes = definicao || topicosLista.length || formula || aplicacoes;
        return `
          <div class="detail-item" data-index="${i}">
            <button class="detail-item-header" onclick="toggleDetail(this)" aria-expanded="false">
              <div class="detail-item-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h4>${titulo}</h4>
              ${temDetalhes ? '<svg class="detail-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>' : ''}
            </button>
            ${temDetalhes ? `<div class="detail-item-body">
              ${definicao ? `<p class="detail-definicao">${definicao}</p>` : ''}
              ${topicosLista.length ? `<div class="detail-section"><h5>Topicos Relacionados</h5><ul>${topicosLista.map(t => {
  const tnome = typeof t === 'string' ? t : (t.nome || '');
  const tdesc = typeof t === 'object' && t.descricao ? t.descricao : '';
  return `<li><strong>${tnome}</strong>${tdesc ? `<br><small>${tdesc}</small>` : ''}</li>`;
}).join('')}</ul></div>` : ''}
              ${formula ? `<div class="detail-section"><h5>Formula / Expressao</h5><code class="detail-formula">${formula}</code></div>` : ''}
              ${aplicacoes.length ? `<div class="detail-section"><h5>Aplicacoes Praticas</h5><ul>${aplicacoes.map(a => `<li>${a}</li>`).join('')}</ul></div>` : ''}
            </div>` : ''}
          </div>`;
      }).join('') + (cat.referencias && cat.referencias.length ? `
        <div class="detail-references">
          <h5 class="detail-references-title">Referencias Academicas</h5>
          <ul class="detail-references-list">
            ${cat.referencias.map(r => `<li><span class="ref-tipo">${r.tipo}</span> ${r.ref}</li>`).join('')}
          </ul>
        </div>` : '');
    }
    detail.hidden = false;
    requestAnimationFrame(() => detail.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }

  function closeDetail() {
    if (!detail) return;
    detail.classList.remove('open');
    setTimeout(() => { detail.hidden = true; document.body.style.overflow = ''; }, 400);
  }

  detailBackdrop?.addEventListener('click', closeDetail);
  detailClose?.addEventListener('click', closeDetail);
  detailBack?.addEventListener('click', closeDetail);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

  window.toggleDetail = function(btn) {
    const item = btn.closest('.detail-item');
    if (!item) return;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    item.classList.toggle('expanded', !expanded);
  };

  /* ─── Scroll To Top ─── */
  const scrollTop = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollTop?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  scrollTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ─── Homepage: Courses Grid ─── */
  const courseGrid = document.getElementById('courseGrid');
  if (courseGrid && S && S.cursosGratuitos) {
    const pc = { 'SENAI':'senai','Fundação Bradesco':'bradesco','SEBRAE':'sebrae','Coursera':'coursera','Microsoft Learn':'microsoft' };
    courseGrid.innerHTML = S.cursosGratuitos.slice(0, 6).map(c => `
      <article class="course-card">
        <span class="course-platform ${pc[c.plataforma] || ''}">${c.plataforma}</span>
        <h3>${c.nome}</h3>
        <p>${c.descricao}</p>
        <div class="course-meta"><span>${c.carga}</span><span>${c.tipo}</span></div>
        <a href="${c.url}" target="_blank" rel="noopener" class="course-link">
          Acessar Curso
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9-9M7 7h9v9"/></svg>
        </a>
      </article>
    `).join('');
  }

  /* ─── Logo Effects: Vibrate + Metallic Particles ─── */
  const heroLogo = document.getElementById('heroLogoImg');
  const heroLogoWrapper = document.getElementById('heroLogoWrapper');
  const navLogo = document.getElementById('navLogoImg');

  function createMetallicParticles(x, y, count) {
    const colors = [
      'linear-gradient(135deg, #C0C0C0, #E8E8E8, #A0A0A0)',
      'linear-gradient(135deg, #B0B0B0, #D0D0D0, #909090)',
      'linear-gradient(135deg, #D4D4D4, #F0F0F0, #B8B8B8)',
      'linear-gradient(135deg, #A8A8A8, #C8C8C8, #888888)',
      'linear-gradient(135deg, #E0E0E0, #FFFFFF, #C0C0C0)',
    ];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'metallic-particle';
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.5 - 0.25);
      const distance = 40 + Math.random() * 80;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      p.style.setProperty('--tx', tx + 'px');
      p.style.setProperty('--ty', ty + 'px');
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.width = (2 + Math.random() * 4) + 'px';
      p.style.height = p.style.width;
      p.style.animation = 'particleFade ' + (0.5 + Math.random() * 0.6) + 's ease-out forwards';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1200);
    }
  }

  if (heroLogo) {
    heroLogo.addEventListener('mouseenter', () => {
      heroLogo.classList.add('logo-vibrate');
    });
    heroLogo.addEventListener('animationend', () => {
      heroLogo.classList.remove('logo-vibrate');
    });
    heroLogo.addEventListener('click', (e) => {
      const rect = heroLogo.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      createMetallicParticles(cx, cy, 24);
    });
  }

  if (navLogo) {
    navLogo.addEventListener('mouseenter', () => {
      navLogo.classList.add('logo-vibrate');
      setTimeout(() => navLogo.classList.remove('logo-vibrate'), 400);
    });
    navLogo.addEventListener('click', (e) => {
      e.preventDefault();
      const rect = navLogo.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      createMetallicParticles(cx, cy, 18);
      setTimeout(() => { window.location.href = 'index.html'; }, 300);
    });
  }

  /* ─── Rede de Contatos (Networking) ─── */
  var CONTACTS_KEY = 'gerett_contacts';

  function getContacts() {
    try { return JSON.parse(localStorage.getItem(CONTACTS_KEY)) || []; }
    catch(e) { return []; }
  }

  function saveContacts(contacts) {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }

  function renderContacts(filter) {
    var grid = document.getElementById('contactsGrid');
    var countEl = document.getElementById('contactsCount');
    if (!grid) return;
    var contacts = getContacts();
    if (filter) contacts = contacts.filter(function(c) { return c.area === filter; });
    if (countEl) countEl.textContent = contacts.length + ' contato' + (contacts.length !== 1 ? 's' : '');
    if (contacts.length === 0) {
      grid.innerHTML = '<div class="contacts-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><h3>Nenhum contato encontrado</h3><p>' + (filter ? 'Nenhum contato nesta área. Tente outro filtro.' : 'Seja o primeiro a cadastrar-se no diretório de networking profissional.') + '</p></div>';
      return;
    }
    grid.innerHTML = contacts.map(function(c) {
      var initials = (c.nome || '').split(' ').map(function(w) { return w.charAt(0); }).slice(0, 2).join('').toUpperCase();
      var avatarColors = ['#0055FF','#00E5FF','#6C5CE7','#E040FB','#FF6D00','#00C853','#2979FF','#D500F9','#FF3D00','#00BFA5'];
      var avatarColor = avatarColors[c.id ? c.id.split('').reduce(function(a,b){return a+b.charCodeAt(0);},0) % avatarColors.length : 0];
      return '<div class="contact-card" data-reveal-item>' +
        '<div class="contact-avatar" style="background:' + avatarColor + '">' + initials + '</div>' +
        '<div class="contact-info">' +
          '<h4 class="contact-name">' + escapeHtml(c.nome) + '</h4>' +
          '<span class="contact-role">' + escapeHtml(c.cargo) + '</span>' +
          '<span class="contact-area">' + escapeHtml(c.area) + '</span>' +
        '</div>' +
        '<div class="contact-links">' +
          (c.email ? '<a href="mailto:' + encodeURIComponent(c.email) + '" class="contact-link" title="Enviar e-mail" aria-label="Enviar e-mail para ' + escapeHtml(c.nome) + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg></a>' : '') +
          (c.linkedin ? '<a href="' + escapeHtml(c.linkedin) + '" target="_blank" rel="noopener" class="contact-link" title="LinkedIn" aria-label="LinkedIn de ' + escapeHtml(c.nome) + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>' : '') +
          (c.especialidades ? '<span class="contact-badge" title="' + escapeHtml(c.especialidades) + '"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 3.09 4.36-.73.73 4.36L22 12l-1.82 3.09.73 4.36-4.36.73L12 22l-3.09-3.09-4.36.73-.73-4.36L2 12l1.82-3.09-.73-4.36 4.36-.73L12 2z"/></svg></span>' : '') +
        '</div>' +
      '</div>';
    }).join('');
  }

  function escapeHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // Form submission
  var contactForm = document.getElementById('contactForm');
  var feedback = document.getElementById('contactFeedback');

  contactForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    var nome = document.getElementById('contactNome').value.trim();
    var area = document.getElementById('contactArea').value;
    var cargo = document.getElementById('contactCargo').value.trim();
    var email = document.getElementById('contactEmail').value.trim();
    var linkedin = document.getElementById('contactLinkedin').value.trim();
    var espec = document.getElementById('contactEspec').value.trim();
    var consent = document.getElementById('contactConsent').checked;

    if (!nome || !area || !cargo || !email || !consent) {
      if (feedback) { feedback.textContent = 'Preencha todos os campos obrigatórios e aceite os termos.'; feedback.className = 'networking-feedback error'; feedback.hidden = false; }
      return;
    }

    var contacts = getContacts();
    // Check duplicate email
    if (contacts.some(function(c) { return c.email.toLowerCase() === email.toLowerCase(); })) {
      if (feedback) { feedback.textContent = 'Este e-mail já está cadastrado na rede.'; feedback.className = 'networking-feedback error'; feedback.hidden = false; }
      return;
    }

    var newContact = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      nome: nome,
      area: area,
      cargo: cargo,
      email: email,
      linkedin: linkedin || '',
      especialidades: espec || '',
      createdAt: new Date().toISOString()
    };

    contacts.push(newContact);
    saveContacts(contacts);
    contactForm.reset();
    if (feedback) { feedback.textContent = 'Contato publicado com sucesso!'; feedback.className = 'networking-feedback success'; feedback.hidden = false; setTimeout(function() { feedback.hidden = true; }, 4000); }
    renderContacts(document.getElementById('filterArea')?.value || '');
  });

  // Filter change
  var filterArea = document.getElementById('filterArea');
  filterArea?.addEventListener('change', function() {
    renderContacts(this.value);
  });

  // Trigger: scroll to section when card is clicked
  var redeTrigger = document.getElementById('redeCardTrigger');
  redeTrigger?.addEventListener('click', function() {
    var section = document.getElementById('rede-contatos');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  redeTrigger?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); var section = document.getElementById('rede-contatos'); if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });

  // Initial render
  renderContacts('');

  console.log('%c Gerett v4.0 ', 'background:linear-gradient(135deg,#0055FF,#00E5FF);color:#fff;font-size:14px;padding:8px 16px;border-radius:6px;font-weight:bold;');
})();
