(function(){
  'use strict';

  const S = window.SITE_DATA;
  if (!S) return console.warn('SITE_DATA not loaded');

  /* --- Theme --- */
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', theme);
  themeToggle?.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  themeToggle?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
  });

  /* --- Progress Bar --- */
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.min(scroll / height * 100, 100);
    if (progressBar) progressBar.style.width = pct + '%';
  }, { passive: true });

  /* --- Navbar scroll effect --- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* --- Mobile Nav --- */
  const navToggle = document.getElementById('navToggle');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    mobileOverlay?.classList.toggle('open', !open);
    mobileOverlay?.removeAttribute('hidden');
  });
  mobileOverlay?.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) {
      navToggle?.setAttribute('aria-expanded', 'false');
      mobileOverlay.classList.remove('open');
    }
  });

  /* --- Scroll Reveal --- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

  /* --- Scroll Reveal Items (staggered) --- */
  const revealItemObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.delay) || 0;
        setTimeout(() => e.target.classList.add('revealed'), delay);
        revealItemObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-reveal-item]').forEach((el, i) => {
    el.dataset.delay = i * 80;
    revealItemObs.observe(el);
  });

  /* --- Nav Link Active --- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      const top = s.offsetTop - 150;
      if (window.scrollY >= top) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.dataset.section === current);
    });
  }, { passive: true });

  /* --- Topics Grid Rendering --- */
  const grid = document.getElementById('topicsGrid');
  const searchInput = document.getElementById('searchInput');
  const searchHint = document.getElementById('searchHint');
  const searchEmpty = document.getElementById('searchEmpty');

  function renderTopics(filter = '') {
    if (!grid) return;
    const cats = S.categorias || [];
    const filtered = filter
      ? cats.filter(c =>
          c.nome.toLowerCase().includes(filter.toLowerCase()) ||
          c.subtopicos?.some(s => s.toLowerCase().includes(filter.toLowerCase()))
        )
      : cats;

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (searchEmpty) searchEmpty.hidden = false;
      return;
    }
    if (searchEmpty) searchEmpty.hidden = true;

    grid.innerHTML = filtered.map(c => `
      <article class="topic-card" style="--card-accent:${c.cor};--card-accent-light:${c.cor}22" data-category="${c.id}" tabindex="0" role="button" aria-label="${c.nome}">
        <div class="topic-card-icon">
          ${getIcon(c.icone)}
        </div>
        <h3>${c.nome}</h3>
        <p>${c.descricao || ''}</p>
        <span class="topic-count">${c.subtopicos?.length || 0} tópicos</span>
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
      'brain': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.08 2.5 2.5 0 0 1 1.3-4.44 2.5 2.5 0 0 1 4.46-2.34Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.08 2.5 2.5 0 0 0-1.3-4.44 2.5 2.5 0 0 0-4.46-2.34Z"/></svg>'
    };
    return icons[name] || '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>';
  }

  renderTopics();

  /* --- Search --- */
  searchInput?.addEventListener('input', () => {
    const q = searchInput.value.trim();
    renderTopics(q);
    if (searchClear) searchClear.hidden = !q;
    if (searchHint) {
      const count = grid?.querySelectorAll('.topic-card').length || 0;
      searchHint.textContent = q ? `${count} resultado${count !== 1 ? 's' : ''} para "${q}"` : '';
    }
  });
  const searchClear = document.getElementById('searchClear');
  searchClear?.addEventListener('click', () => {
    if (searchInput) { searchInput.value = ''; searchInput.focus(); }
    searchClear.hidden = true;
    renderTopics();
    if (searchHint) searchHint.textContent = '';
  });

  /* --- Topic Detail Panel --- */
  const detail = document.getElementById('topicDetail');
  const detailBackdrop = document.getElementById('topicDetailBackdrop');
  const detailClose = document.getElementById('detailClose');
  const detailTag = document.getElementById('detailTag');
  const detailTitle = document.getElementById('detailTitle');
  const detailDesc = document.getElementById('detailDesc');
  const detailContent = document.getElementById('detailContent');

  function openDetail(id) {
    const cat = S.categorias?.find(c => c.id === id);
    if (!cat || !detail) return;
    if (detailTag) detailTag.textContent = cat.nome;
    if (detailTitle) detailTitle.textContent = cat.nome;
    if (detailDesc) detailDesc.textContent = cat.descricao || '';
    if (detailContent) {
      detailContent.innerHTML = (cat.subtopicos || []).map(s => `
        <div class="detail-item">
          <div class="detail-item-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <h4>${s}</h4>
            <p>Conceito fundamental em ${cat.nome}. Aplicação direta no ambiente organizacional industrial para melhoria de processos, redução de custos e aumento da produtividade.</p>
          </div>
        </div>
      `).join('');
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
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

  /* --- Buttons --- */
  document.querySelectorAll('[data-href]').forEach(btn => {
    btn.addEventListener('click', () => {
      const href = btn.dataset.href;
      if (href.startsWith('#')) {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    });
  });

  /* --- Scroll To Top --- */
  const scrollTop = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollTop?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  scrollTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* --- 3D Animation (Three.js) --- */
  function initThree() {
    if (typeof THREE === 'undefined') return;
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.IcosahedronGeometry(2.5, 2);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x2563eb,
      metalness: 0.3,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      emissive: 0x2563eb,
      emissiveIntensity: 0.05,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 400;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x2563eb,
      transparent: true,
      opacity: 0.4,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    camera.position.z = 6;

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.004;
      mesh.position.x += (mouseX * 0.5 - mesh.position.x) * 0.02;
      mesh.position.y += (mouseY * 0.5 - mesh.position.y) * 0.02;
      particlesMesh.rotation.y += 0.0003;
      particlesMesh.rotation.x += 0.0001;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  if (document.querySelector('#three-canvas')) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = initThree;
    document.head.appendChild(script);
  }

  /* --- Stat Counters --- */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.unobserve(el);
      const dur = 2000;
      const start = performance.now();
      function update(now) {
        const progress = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  /* --- CTA buttons on topic cards --- */
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.topic-card');
    if (card) {
      const id = card.dataset.category;
      if (id) openDetail(id);
    }
  });

  /* --- Homepage: CAD Models Grid --- */
  const cadGrid = document.getElementById('cadGrid');
  if (cadGrid && S.modelosCAD) {
    cadGrid.innerHTML = S.modelosCAD.slice(0, 4).map(m => `
      <article class="resource-card">
        <span class="resource-type ${m.tipo.toLowerCase()}">${m.tipo}</span>
        <h3>${m.nome}</h3>
        <p>${m.descricao}</p>
        <div class="resource-meta">
          <span>${m.arquivo}</span>
          <span>${m.tamanho}</span>
        </div>
      </article>
    `).join('');
  }

  /* --- Homepage: Courses Grid --- */
  const courseGrid = document.getElementById('courseGrid');
  if (courseGrid && S.cursosGratuitos) {
    const platformClass = { 'SENAI':'senai','Fundação Bradesco':'bradesco','SEBRAE':'sebrae','Coursera':'coursera','Microsoft Learn':'microsoft' };
    courseGrid.innerHTML = S.cursosGratuitos.slice(0, 6).map(c => `
      <article class="course-card">
        <span class="course-platform ${platformClass[c.plataforma] || ''}">${c.plataforma}</span>
        <h3>${c.nome}</h3>
        <p>${c.descricao}</p>
        <div class="course-meta">
          <span>${c.carga}</span>
          <span>${c.tipo}</span>
        </div>
        <a href="${c.url}" target="_blank" rel="noopener" class="course-link">
          Acessar Curso
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9-9M7 7h9v9"/></svg>
        </a>
      </article>
    `).join('');
  }

  console.log(`%c EngPro v2.0 `, `background:#2563eb;color:#fff;font-size:14px;padding:8px 16px;border-radius:4px;font-weight:bold;`);
  console.log(`📦 ${S.categorias?.length || 0} categorias carregadas`);
  console.log(`📚 ${S.categorias?.reduce((a,c) => a + (c.subtopicos?.length || 0), 0) || 0} tópicos técnicos`);
})();
