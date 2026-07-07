(function(){
  'use strict';

  if (typeof gsap === 'undefined') return console.warn('GSAP not loaded');

  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) return;

  const deviceFactor = isMobile ? 0.5 : 1;

  /* ─── Magnetic Cursor ─── */
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
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    document.addEventListener('mousedown', () => ring.classList.add('cursor-ring-down'));
    document.addEventListener('mouseup', () => ring.classList.remove('cursor-ring-down'));

    gsap.ticker.add(() => {
      dx += (mx - dx) * 0.4;
      dy += (my - dy) * 0.4;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      gsap.set(dot, { x: dx - 4, y: dy - 4 });
      gsap.set(ring, { x: rx - 20, y: ry - 20 });
    });

    const interactives = document.querySelectorAll(
      'a, button, .topic-card, .visual-card, .btn, .nav-link, .course-card, .resource-card, .form-card, .scroll-top, .theme-toggle, .nav-toggle, .search-clear, .footer-link'
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

  /* ─── Hero Animations ─── */
  function initHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    const eyebrow = hero.querySelector('.hero-eyebrow');
    const title = hero.querySelector('.hero-title');
    const subtitle = hero.querySelector('.hero-subtitle');
    const purpose = hero.querySelector('.hero-purpose');
    const stats = hero.querySelector('.hero-stats');
    const cta = hero.querySelector('.hero-cta');

    if (eyebrow) tl.from(eyebrow, { y: 40, opacity: 0 }, 0.15);
    if (title) tl.from(title, { y: 50, opacity: 0 }, 0.25);
    if (subtitle) tl.from(subtitle, { y: 30, opacity: 0 }, 0.4);
    if (purpose) tl.from(purpose, { y: 20, opacity: 0, duration: 0.9 }, 0.5);
    if (stats) {
      const items = stats.querySelectorAll('.stat');
      tl.from(items, { y: 30, opacity: 0, stagger: 0.08 }, 0.5);
    }
    if (cta) tl.from(cta, { y: 20, opacity: 0 }, 0.6);
  }

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
    gsap.utils.toArray('.btn, .course-link, .form-download, .cta-link').forEach(btn => {
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
    gsap.utils.toArray('.visual-card, .topic-card, .course-card, .resource-card, .form-card, .about-card, .stat-card, .news-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotateX: y * -5, rotateY: x * 5, duration: 0.4, ease: 'power4.out',
          transformPerspective: 1200
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.4, ease: 'power4.out' });
      });
    });
  }

  /* ─── Footer Hover ─── */
  function initFooterFX() {
    gsap.utils.toArray('.footer-nav-group a, .footer-link').forEach(link => {
      link.addEventListener('mouseenter', () => gsap.to(link, { x: 5, duration: 0.3, ease: 'power4.out' }));
      link.addEventListener('mouseleave', () => gsap.to(link, { x: 0, duration: 0.3, ease: 'power4.out' }));
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

  /* ─── Page Header Entrance ─── */
  function initPageHeaders() {
    const header = document.querySelector('.page-header');
    if (!header) return;
    const h1 = header.querySelector('h1');
    const p = header.querySelector('p');
    const eyebrow = header.querySelector('.eyebrow');
    if (eyebrow) gsap.from(eyebrow, { y: 20, opacity: 0, duration: 0.8, ease: 'power4.out', delay: 0.2 });
    if (h1) gsap.from(h1, { y: 40, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.3 });
    if (p) gsap.from(p, { y: 20, opacity: 0, duration: 0.8, ease: 'power4.out', delay: 0.45 });
  }

  /* ─── Card Stagger Reveals ─── */
  function initCardReveals() {
    const selectors = '.topic-card, .course-card, .resource-card, .form-card, .about-card, .stat-card, .news-card, .visual-card';
    gsap.utils.toArray(selectors).forEach((card, i) => {
      gsap.from(card, {
        y: 40, opacity: 0, duration: 0.7, ease: 'power4.out',
        scrollTrigger: { trigger: card, start: 'top 88%' }
      });
    });
  }

  /* ─── Init ─── */
  function init() {
    setTimeout(() => {
      initCursor();
      initHero();
      initScrollReveals();
      initParallax();
      initCounters();
      initMagneticButtons();
      initCardTilt();
      initFooterFX();
      initSmoothScroll();
      initPageHeaders();
      initCardReveals();
      setTimeout(() => {
        ScrollTrigger.refresh();
        document.dispatchEvent(new CustomEvent('animations:ready'));
      }, 500);
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();