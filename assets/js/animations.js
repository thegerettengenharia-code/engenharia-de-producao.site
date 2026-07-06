(function(){
  'use strict';

  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isReduced) return;

  /* ─── Custom Magnetic Cursor ─── */
  function initCursor() {
    if (isMobile) return;

    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    document.documentElement.classList.add('has-cursor');

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
      dotX += (mouseX - dotX) * 0.45;
      dotY += (mouseY - dotY) * 0.45;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      gsap.set(dot, { x: dotX - 4, y: dotY - 4 });
      gsap.set(ring, { x: ringX - 16, y: ringY - 16 });
    });

    const magnets = document.querySelectorAll('a, button, .topic-card, .visual-card, .btn, .nav-link, .course-card, .resource-card, .form-card, .scroll-top, .theme-toggle, .nav-toggle, .search-clear');
    magnets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('cursor-ring-active');
        dot.classList.add('cursor-dot-active');
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('cursor-ring-active');
        dot.classList.remove('cursor-dot-active');
      });
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        el.style.setProperty('--mx', x + 'px');
        el.style.setProperty('--my', y + 'px');
      });
    });
  }

  /* ─── Hero Background Zoom ─── */
  function initHeroBg() {
    const bg = document.querySelector('.hero-bg-image');
    if (!bg) return;

    gsap.to(bg, {
      scale: 1.08,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      }
    });

    const overlay = document.querySelector('.hero-bg-overlay');
    if (overlay) {
      gsap.to(overlay, {
        opacity: 0.7,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }
  }

  /* ─── Hero Content Stagger ─── */
  function initHeroReveal() {
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');

    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    if (heroLeft) {
      const children = heroLeft.querySelectorAll('.eyebrow, .hero-title, .hero-subtitle, .hero-stats, .hero-cta');
      tl.from(children, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
      }, 0.2);
    }

    if (heroRight) {
      tl.from(heroRight, {
        x: 80,
        opacity: 0,
        duration: 1.4,
      }, 0.3);
    }

    if (scrollIndicator) {
      tl.from(scrollIndicator, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, 0.8);
    }
  }

  /* ─── Scroll-Triggered Reveals (replaces IntersectionObserver) ─── */
  function initScrollReveals() {
    gsap.utils.toArray('[data-reveal]').forEach(el => {
      const direction = el.dataset.revealDir || 'up';
      const distance = parseInt(el.dataset.revealDist) || 60;
      const delay = parseFloat(el.dataset.revealDelay) || 0;
      const duration = parseFloat(el.dataset.revealDur) || 1.2;

      const vars = {
        opacity: 0,
        ease: 'power4.out',
        duration: duration,
        delay: delay,
      };

      if (direction === 'up') vars.y = distance;
      else if (direction === 'down') vars.y = -distance;
      else if (direction === 'left') vars.x = distance;
      else if (direction === 'right') vars.x = -distance;
      else if (direction === 'scale') { vars.scale = 0.9; vars.y = distance; }

      gsap.from(el, {
        ...vars,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      });
    });

    gsap.utils.toArray('[data-reveal-item]').forEach(el => {
      const parent = el.closest('[data-reveal-stagger]') || el.parentElement;
      const siblings = parent.querySelectorAll('[data-reveal-item]');
      const idx = Array.from(siblings).indexOf(el);
      const baseDelay = parseFloat(parent.dataset.revealStaggerDelay) || 0.08;

      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power4.out',
        delay: idx * baseDelay,
        scrollTrigger: {
          trigger: parent,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        }
      });
    });
  }

  /* ─── Enhanced Parallax ─── */
  function initParallax() {
    gsap.utils.toArray('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      gsap.to(el, {
        y: () => -(el.offsetHeight * speed),
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });
    });
  }

  /* ─── Counter Animation ─── */
  function initCounters() {
    gsap.utils.toArray('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.countSuffix || '';
      const obj = { val: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 2.5,
            ease: 'power4.out',
            onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
          });
        },
        once: true,
      });
    });
  }

  /* ─── Button Magnetic Effect ─── */
  function initMagneticButtons() {
    if (isMobile) return;

    gsap.utils.toArray('.btn, .course-link, .form-download, .nav-link').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        gsap.to(btn, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.6,
          ease: 'power4.out',
        });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)',
        });
      });
    });
  }

  /* ─── Card Hover 3D Tilt ─── */
  function initCardTilt() {
    if (isMobile) return;

    gsap.utils.toArray('.visual-card, .topic-card, .course-card, .resource-card, .form-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotateX: y * -6,
          rotateY: x * 6,
          duration: 0.5,
          ease: 'power4.out',
          transformPerspective: 1000,
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power4.out',
        });
      });
    });
  }

  /* ─── Smooth Anchor Scroll (native) ─── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ─── Section Link Hover Effect ─── */
  function initSectionLinkFX() {
    gsap.utils.toArray('.footer-nav-group a, .footer-link').forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          x: 6,
          duration: 0.4,
          ease: 'power4.out',
        });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          x: 0,
          duration: 0.4,
          ease: 'power4.out',
        });
      });
    });
  }

  /* ─── Progress Bar Enhance ─── */
  function initProgressBar() {
    const bar = document.getElementById('progressBar');
    if (!bar) return;

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        bar.style.width = (self.progress * 100) + '%';
      },
    });
  }

  /* ─── Navbar Scroll ─── */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top -60px',
      onUpdate: (self) => {
        navbar.classList.toggle('scrolled', self.progress > 0);
      },
    });
  }

  /* ─── Nav Link Active ─── */
  function initNavActive() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    if (!navLinks.length || !sections.length) return;

    sections.forEach(s => {
      ScrollTrigger.create({
        trigger: s,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(s.id),
        onEnterBack: () => setActive(s.id),
      });
    });

    function setActive(id) {
      navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
    }
  }

  /* ─── Init All ─── */
  function init() {
    const isHome = document.querySelector('.hero');

    initCursor();

    if (isHome) {
      initHeroBg();
      initHeroReveal();
    }

    initScrollReveals();
    initParallax();
    initCounters();
    initMagneticButtons();
    initCardTilt();
    initSmoothScroll();
    initSectionLinkFX();
    initProgressBar();
    initNavbar();
    initNavActive();

    document.dispatchEvent(new CustomEvent('animations:ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
