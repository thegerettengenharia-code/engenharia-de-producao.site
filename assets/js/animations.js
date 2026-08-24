(function(){
  'use strict';

  if (typeof gsap === 'undefined') return console.warn('GSAP not loaded');

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const deviceFactor = isMobile ? 0.5 : 1;

  /* ─── Hero Animations ─── */
  function initHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const eyebrow = hero.querySelector('.hero-eyebrow');
    const title = hero.querySelector('.hero-title');
    const subtitle = hero.querySelector('.hero-subtitle');
    const purpose = hero.querySelector('.hero-purpose');
    const stats = hero.querySelector('.hero-stats');
    const cta = hero.querySelector('.hero-cta');

    /* Texto do hero visível de imediato ao abrir — sem esmaecimento nem
       revelação por rolagem. */
    [eyebrow, title, subtitle, purpose, stats, cta].filter(Boolean).forEach(function (el) {
      gsap.set(el, { opacity: 1, y: 0 });
    });
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
    gsap.utils.toArray('.btn, .course-link, .form-download, .cta-link').forEach(btn => {
      if (isTouch) {
        btn.addEventListener('touchstart', e => {
          gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power4.out' });
        }, { passive: true });
        btn.addEventListener('touchend', () => {
          gsap.to(btn, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.3)' });
        });
      } else {
        btn.addEventListener('mousemove', e => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);
          gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.5, ease: 'power4.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
        });
      }
    });
  }

  /* ─── Card 3D Tilt ─── */
  function initCardTilt() {
    gsap.utils.toArray('.visual-card, .topic-card, .course-card, .resource-card, .form-card, .about-card, .stat-card, .news-card').forEach(card => {
      if (isTouch) {
        card.addEventListener('touchstart', e => {
          gsap.to(card, { scale: 0.97, rotateX: 2, duration: 0.3, ease: 'power4.out', transformPerspective: 1200 });
        }, { passive: true });
        card.addEventListener('touchend', () => {
          gsap.to(card, { scale: 1, rotateX: 0, rotateY: 0, duration: 0.4, ease: 'power4.out' });
        });
      } else {
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
      }
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
        if (!t) return;
        if (window.__lenis) window.__lenis.scrollTo(t, { offset: 0, duration: 1.4 });
        else t.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    const els = [eyebrow, h1, p].filter(Boolean);
    if (eyebrow) gsap.set(eyebrow, { y: 20, opacity: 0 });
    if (h1) gsap.set(h1, { y: 40, opacity: 0 });
    if (p) gsap.set(p, { y: 20, opacity: 0 });
    if (eyebrow) gsap.to(eyebrow, { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out', delay: 0.2 });
    if (h1) gsap.to(h1, { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.3 });
    if (p) gsap.to(p, { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out', delay: 0.45 });
    /* Rede de segurança: garante título visível mesmo se o rAF
       for suspenso (aba em segundo plano) ou a timeline interrompida. */
    setTimeout(() => els.forEach(el => gsap.set(el, { y: 0, opacity: 1 })), 2500);
  }

  /* ─── Card Stagger Reveals ─── */
  function initCardReveals() {
    const selectors = '.topic-card, .course-card, .resource-card, .form-card, .about-card, .stat-card, .news-card, .visual-card';
    gsap.utils.toArray(selectors).forEach((card, i) => {
      if (card.hasAttribute('data-reveal-item')) return;
      gsap.from(card, {
        y: 40, opacity: 0, duration: 0.7, ease: 'power4.out',
        scrollTrigger: { trigger: card, start: 'top 88%' }
      });
    });
  }

  /* ─── Init ─── */
  function init() {
    setTimeout(() => {
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