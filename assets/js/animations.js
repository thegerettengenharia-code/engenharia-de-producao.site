(function(){
  'use strict';

  if (typeof gsap === 'undefined') return console.warn('GSAP not loaded');

  gsap.registerPlugin(ScrollTrigger);

  /* ─── Environment ─── */
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isReduced) return;

  const deviceFactor = isMobile ? 0.5 : 1;

  /* ─── Page ID ─── */
  const pageSlug = document.body.dataset.page || (() => {
    const p = window.location.pathname.split('/').pop() || 'index';
    return p.replace('.html', '');
  })();

  /* ─── Loading Screen ─── */
  function initLoading() {
    const screen = document.getElementById('loadingScreen');
    if (!screen) return;

    const fill = screen.querySelector('.loading-bar-fill');
    const pct = screen.querySelector('.loading-progress-pct');
    const status = screen.querySelector('.loading-status');
    const messages = [
      'Inicializando sistemas', 'Carregando módulos',
      'Calibrando sensores', 'Sincronizando dados',
      'Preparando interface', 'Sistema pronto'
    ];

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 12 + 3;
      if (progress > 100) progress = 100;
      if (fill) fill.style.width = progress + '%';
      if (pct) pct.textContent = Math.round(progress) + '%';
      const msgIdx = Math.min(Math.floor(progress / (100 / messages.length)), messages.length - 1);
      if (status) status.textContent = messages[msgIdx];

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          screen.classList.add('hidden');
          setTimeout(() => screen.remove(), 1000);
          document.dispatchEvent(new CustomEvent('loading:complete'));
        }, 400);
      }
    }, 180);

    setTimeout(() => {
      if (progress < 100) { progress = 100; }
    }, 5000);
  }

  /* ─── Custom Magnetic Cursor ─── */
  let cursorCleanup = null;
  function initCursor() {
    if (isMobile || isTouch) return;

    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.documentElement.classList.add('has-cursor');

    let mx = 0, my = 0, dx = 0, dy = 0, rx = 0, ry = 0;
    let isDown = false;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    document.addEventListener('mousedown', () => { isDown = true; ring.classList.add('cursor-ring-down'); });
    document.addEventListener('mouseup', () => { isDown = false; ring.classList.remove('cursor-ring-down'); });

    gsap.ticker.add(() => {
      dx += (mx - dx) * 0.4;
      dy += (my - dy) * 0.4;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      gsap.set(dot, { x: dx - 4, y: dy - 4 });
      gsap.set(ring, { x: rx - 20, y: ry - 20 });
    });

    const interactives = document.querySelectorAll(
      'a, button, .topic-card, .visual-card, .btn, .nav-link, .course-card, .resource-card, .form-card, .scroll-top, .theme-toggle, .nav-toggle, .search-clear, .footer-link, .card-icon'
    );

    const onEnter = () => { ring.classList.add('cursor-ring-active'); dot.classList.add('cursor-dot-active'); };
    const onLeave = () => { ring.classList.remove('cursor-ring-active'); dot.classList.remove('cursor-dot-active'); };

    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    cursorCleanup = () => {
      dot.remove(); ring.remove();
      document.documentElement.classList.remove('has-cursor');
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }

  /* ─── Hero Cinematic ─── */
  function initHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    /* BG Zoom */
    const bg = hero.querySelector('.hero-bg-image');
    if (bg) {
      gsap.to(bg, {
        scale: 1.08,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.5 }
      });
      const overlay = hero.querySelector('.hero-bg-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0.6, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1 } });
    }

    /* Three.js Enhanced */
    const canvas = document.getElementById('three-canvas');
    if (canvas && typeof THREE !== 'undefined') {
      gsap.to(canvas, { opacity: 0.7, duration: 0.8 });
    }

    /* Content Stagger */
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    const left = hero.querySelector('.hero-left');
    if (left) {
      const items = left.querySelectorAll('.eyebrow, .hero-title, .hero-subtitle, .hero-stats, .hero-cta');
      tl.from(items, { y: 60, opacity: 0, stagger: 0.15 }, 0.3);
    }

    const right = hero.querySelector('.hero-right');
    if (right) tl.from(right, { x: 80, opacity: 0, duration: 1.4 }, 0.4);

    const indicator = hero.querySelector('.hero-scroll-indicator');
    if (indicator) tl.from(indicator, { y: 20, opacity: 0, duration: 0.8 }, 0.9);

    /* Hero Stats Counter */
    const stats = hero.querySelectorAll('.stat-num');
    stats.forEach(s => {
      const txt = s.textContent.replace(/[^0-9]/g, '');
      const target = parseInt(txt);
      if (target) {
        gsap.from(s, {
          textContent: 0,
          duration: 2,
          ease: 'power4.out',
          snap: { textContent: 1 },
          scrollTrigger: { trigger: s, start: 'top 85%' }
        });
      }
    });
  }

  /* ─── Engineering Particle Background ─── */
  function initParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    hero.insertBefore(canvas, hero.firstChild);

    const ctx = canvas.getContext('2d');
    let w = hero.offsetWidth;
    let h = hero.offsetHeight;
    canvas.width = w; canvas.height = h;

    const count = isMobile ? 30 : 60;
    const particles = [];
    const shapes = ['circle', 'hexagon', 'line', 'dot'];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        alpha: Math.random() * 0.4 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01,
      });
    }

    let mousePx = w / 2, mousePy = h / 2;
    document.addEventListener('mousemove', e => {
      const rect = hero.getBoundingClientRect();
      mousePx = e.clientX - rect.left;
      mousePy = e.clientY - rect.top;
    });

    function drawHex(ctx, x, y, size, rot) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = rot + (Math.PI / 3) * i;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;

        const dx = mousePx - p.x;
        const dy = mousePy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx -= dx / dist * 0.002;
          p.vy -= dy / dist * 0.002;
        }

        const maxSpeed = 0.5;
        if (Math.abs(p.vx) > maxSpeed) p.vx = Math.sign(p.vx) * maxSpeed;
        if (Math.abs(p.vy) > maxSpeed) p.vy = Math.sign(p.vy) * maxSpeed;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.strokeStyle = brandColor;
        ctx.lineWidth = 0.5;

        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 2, 0, Math.PI * 2);
          ctx.stroke();
        } else if (p.shape === 'hexagon') {
          drawHex(ctx, 0, 0, p.size * 3, p.rotation);
          ctx.stroke();
        } else if (p.shape === 'dot') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = brandColor;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(-p.size * 3, 0);
          ctx.lineTo(p.size * 3, 0);
          ctx.stroke();
        }

        ctx.restore();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      w = hero.offsetWidth;
      h = hero.offsetHeight;
      canvas.width = w; canvas.height = h;
    });
  }

  const brandH = getComputedStyle(document.documentElement).getPropertyValue('--brand-h').trim() || '210';
  const brandColor = `hsl(${brandH}, 60%, 50%)`;

  /* ─── Scroll-Triggered Reveals ─── */
  function initScrollReveals() {
    gsap.utils.toArray('[data-reveal]').forEach(el => {
      const dir = el.dataset.revealDir || 'up';
      const dist = parseInt(el.dataset.revealDist) || 50;
      const d = parseFloat(el.dataset.revealDelay) || 0;
      const dur = parseFloat(el.dataset.revealDur) || 1.1;

      const v = { opacity: 0, ease: 'power4.out', duration: dur, delay: d };
      if (dir === 'up') v.y = dist;
      else if (dir === 'down') v.y = -dist;
      else if (dir === 'left') v.x = dist;
      else if (dir === 'right') v.x = -dist;
      else if (dir === 'scale') { v.scale = 0.92; v.y = dist; }
      else if (dir === 'fade') {}
      else v.y = dist;

      gsap.from(el, { ...v, scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' } });
    });

    gsap.utils.toArray('[data-reveal-item]').forEach(el => {
      const parent = el.closest('[data-reveal-stagger]') || el.parentElement;
      const siblings = parent.querySelectorAll('[data-reveal-item]');
      const idx = Array.from(siblings).indexOf(el);
      const baseDelay = parseFloat(parent.dataset.revealStaggerDelay) || 0.07;

      gsap.from(el, {
        y: 35, opacity: 0, duration: 0.85, ease: 'power4.out',
        delay: idx * baseDelay,
        scrollTrigger: { trigger: parent, start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });
  }

  /* ─── Parallax ─── */
  function initParallax() {
    gsap.utils.toArray('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      gsap.to(el, {
        y: () => -(el.offsetHeight * speed * deviceFactor),
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1.2 }
      });
    });
  }

  /* ─── Counters ─── */
  function initCounters() {
    gsap.utils.toArray('[data-count]').forEach(el => {
      const raw = el.textContent.replace(/[^0-9]/g, '');
      const target = parseInt(raw);
      const suffix = el.dataset.countSuffix || el.textContent.replace(/[0-9]/g, '');
      if (!target) return;
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el, start: 'top 85%',
        onEnter: () => {
          gsap.to(obj, {
            val: target, duration: 2.5, ease: 'power4.out',
            onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
            onComplete: () => { el.textContent = target + suffix; }
          });
        }, once: true
      });
    });
  }

  /* ─── Magnetic Buttons ─── */
  function initMagneticButtons() {
    if (isMobile) return;
    gsap.utils.toArray('.btn, .course-link, .form-download').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.5, ease: 'power4.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      });
    });
  }

  /* ─── Card 3D Tilt ─── */
  function initCardTilt() {
    if (isMobile) return;
    gsap.utils.toArray('.visual-card, .topic-card, .course-card, .resource-card, .form-card, .about-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotateX: y * -5, rotateY: x * 5, duration: 0.4, ease: 'power4.out', transformPerspective: 1200,
          boxShadow: `${x * 20}px ${y * 20}px 40px rgba(0,0,0,0.1)`
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.4, ease: 'power4.out', boxShadow: 'none' });
      });
    });
  }

  /* ─── Progress Bar ─── */
  function initProgressBar() {
    const bar = document.getElementById('progressBar');
    if (!bar) return;
    ScrollTrigger.create({
      trigger: document.body, start: 'top top', end: 'bottom bottom',
      onUpdate: self => { bar.style.width = (self.progress * 100) + '%'; }
    });
  }

  /* ─── Navbar ─── */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    ScrollTrigger.create({
      trigger: document.body, start: 'top -60px',
      onUpdate: self => { navbar.classList.toggle('scrolled', self.progress > 0); }
    });
  }

  /* ─── Nav Active ─── */
  function initNavActive() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    if (!navLinks.length || !sections.length) return;
    sections.forEach(s => {
      ScrollTrigger.create({
        trigger: s, start: 'top center', end: 'bottom center',
        onEnter: () => setActive(s.id), onEnterBack: () => setActive(s.id)
      });
    });
    function setActive(id) { navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id)); }
  }

  /* ─── Footer Link Hover ─── */
  function initFooterFX() {
    gsap.utils.toArray('.footer-nav-group a, .footer-link').forEach(link => {
      link.addEventListener('mouseenter', () => { gsap.to(link, { x: 5, duration: 0.3, ease: 'power4.out' }); });
      link.addEventListener('mouseleave', () => { gsap.to(link, { x: 0, duration: 0.3, ease: 'power4.out' }); });
    });
  }

  /* ─── Smooth Anchor Scroll ─── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const h = a.getAttribute('href');
        if (h === '#') return;
        e.preventDefault();
        const t = document.querySelector(h);
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ─── Page-Specific Animations ─── */
  function initPageSpecific() {
    switch (pageSlug) {
      case 'topicos':
        animateTopicosPage();
        break;
      case 'cursos':
        animateCursosPage();
        break;
      case 'modelos-cad':
        animateCADPage();
        break;
      case 'biblioteca':
        animateBibliotecaPage();
        break;
      case 'sobre':
        animateSobrePage();
        break;
    }
  }

  function animateTopicosPage() {
    const header = document.querySelector('.page-header');
    if (header) {
      gsap.from(header.querySelector('h1'), { y: 40, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.2 });
      gsap.from(header.querySelector('p'), { y: 20, opacity: 0, duration: 0.8, ease: 'power4.out', delay: 0.4 });
    }
  }

  function animateCursosPage() {
    const header = document.querySelector('.page-header');
    if (header) {
      gsap.from(header.querySelector('h1'), { scale: 0.9, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.2 });
      gsap.from(header.querySelector('p'), { y: 20, opacity: 0, duration: 0.8, ease: 'power4.out', delay: 0.4 });
    }
    gsap.utils.toArray('.course-card').forEach((card, i) => {
      gsap.from(card, {
        y: 40, opacity: 0, duration: 0.7, ease: 'power4.out', delay: i * 0.1,
        scrollTrigger: { trigger: card, start: 'top 88%' }
      });
    });
  }

  function animateCADPage() {
    const header = document.querySelector('.page-header');
    if (header) {
      gsap.from(header.querySelector('h1'), { x: -40, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.2 });
      gsap.from(header.querySelector('p'), { x: -20, opacity: 0, duration: 0.8, ease: 'power4.out', delay: 0.4 });
    }
    gsap.utils.toArray('.resource-card').forEach((card, i) => {
      gsap.from(card, {
        y: 40, opacity: 0, duration: 0.7, ease: 'power4.out', delay: i * 0.1,
        scrollTrigger: { trigger: card, start: 'top 88%' }
      });
    });
  }

  function animateBibliotecaPage() {
    const header = document.querySelector('.page-header');
    if (header) {
      gsap.from(header.querySelector('h1'), { y: 40, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.2 });
      gsap.from(header.querySelector('p'), { opacity: 0, duration: 0.8, ease: 'power4.out', delay: 0.4 });
    }
    gsap.utils.toArray('.form-card').forEach((card, i) => {
      gsap.from(card, {
        y: 40, opacity: 0, duration: 0.7, ease: 'power4.out', delay: i * 0.1,
        scrollTrigger: { trigger: card, start: 'top 88%' }
      });
    });
  }

  function animateSobrePage() {
    const header = document.querySelector('.page-header');
    if (header) {
      gsap.from(header.querySelector('h1'), { y: 40, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.2 });
      gsap.from(header.querySelector('p'), { y: 20, opacity: 0, duration: 0.8, ease: 'power4.out', delay: 0.4 });
    }
    gsap.utils.toArray('.about-card').forEach((card, i) => {
      gsap.from(card, {
        y: 50, opacity: 0, duration: 0.8, ease: 'power4.out', delay: i * 0.12,
        scrollTrigger: { trigger: card, start: 'top 88%' }
      });
    });
  }

  /* ─── Init ─── */
  function init() {
    const tl = gsap.timeline();

    initLoading();

    setTimeout(() => {
      initCursor();
      initHero();
      initParticles();
      initScrollReveals();
      initParallax();
      initCounters();
      initMagneticButtons();
      initCardTilt();
      initProgressBar();
      initNavbar();
      initNavActive();
      initFooterFX();
      initSmoothScroll();
      initPageSpecific();

      document.dispatchEvent(new CustomEvent('animations:ready'));
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
