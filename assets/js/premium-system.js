/* ==========================================================================
   ENGPRO — PREMIUM CINEMATIC SYSTEM (main)
   Cursor Magnético • Lenis Smooth Scroll • Loading Cinematográfico
   GSAP ScrollTrigger • 3D Card Tilt • Magnetic Buttons • Mask Reveals
   ========================================================================== */

(function () {
  'use strict';

  /* === Environment Detection === */
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isTablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = !isMobile && !isTouch && window.matchMedia('(min-width: 1025px)').matches;
  const hasWebGL = (() => {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) { return false; }
  })();
  const perfTier = (navigator.hardwareConcurrency || 4) >= 8 && !isMobile ? 'high' : 'medium';

  if (isReduced) {
    document.documentElement.classList.add('reduced-motion');
    return;
  }

  /* === GSAP Setup === */
  if (typeof gsap === 'undefined') return console.warn('[Premium] GSAP not loaded');
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ========================================================================
     1. PREMIUM CURSOR — magnetic lerp + morphing + text label
     ======================================================================== */
  function initPremiumCursor() {
    if (isMobile || isTouch) return;

    const dot = document.createElement('div');
    const ring = document.createElement('div');
    const label = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    label.className = 'cursor-ring-text';
    document.body.append(dot, ring, label);
    document.documentElement.classList.add('has-cursor');

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let dx = mx, dy = my, rx = mx, ry = my;
    let down = false;

    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
    window.addEventListener('mousedown', () => { down = true; ring.classList.add('cursor-ring-down'); });
    window.addEventListener('mouseup', () => { down = false; ring.classList.remove('cursor-ring-down'); });

    function tick() {
      dx += (mx - dx) * 0.45;
      dy += (my - dy) * 0.45;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      dot.style.transform = `translate3d(${dx - 3}px, ${dy - 3}px, 0)`;
      ring.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      label.style.transform = `translate3d(${rx + 24}px, ${ry - 8}px, 0)`;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    function attach() {
      const interact = $$('a, button, .topic-card, .visual-card, .btn, .nav-link, .course-card, .resource-card, .form-card, .scroll-top, .theme-toggle, .nav-toggle, .search-clear, .footer-link, .card-icon, [data-cursor]');
      interact.forEach(el => {
        el.addEventListener('mouseenter', () => {
          ring.classList.add('cursor-ring-active');
          dot.classList.add('cursor-dot-active');
          const t = el.dataset.cursor;
          if (t) { label.textContent = t; label.classList.add('visible'); }
        });
        el.addEventListener('mouseleave', () => {
          ring.classList.remove('cursor-ring-active');
          dot.classList.remove('cursor-dot-active');
          label.classList.remove('visible');
        });
      });
    }
    attach();
    document.addEventListener('content:loaded', attach);
  }

  /* ========================================================================
     2. PREMIUM LOADING — mechanical assembly + laser scan
     ======================================================================== */
  function initPremiumLoading() {
    const old = document.getElementById('loadingScreen');
    if (old) old.remove();

    const ls = document.createElement('div');
    ls.className = 'loading-screen-premium';
    ls.id = 'loadingScreenPremium';
    ls.setAttribute('role', 'status');
    ls.setAttribute('aria-label', 'Carregando sistema');
    ls.innerHTML = `
      <div class="ls-grid"></div>
      <div class="ls-laser"></div>
      <div class="ls-corner ls-corner-tl"></div>
      <div class="ls-corner ls-corner-tr"></div>
      <div class="ls-corner ls-corner-bl"></div>
      <div class="ls-corner ls-corner-br"></div>
      <div class="ls-assembly">
        <div class="ls-ring"></div>
        <div class="ls-ring"></div>
        <div class="ls-ring"></div>
        <div class="ls-core">
          <svg viewBox="0 0 56 56">
            <path class="ls-path" d="M28 4 L48 16 L48 40 L28 52 L8 40 L8 16 Z M28 16 L38 22 L38 34 L28 40 L18 34 L18 22 Z"/>
            <circle class="ls-path" cx="28" cy="28" r="4" style="animation-delay:0.5s"/>
          </svg>
        </div>
      </div>
      <div class="ls-info">
        <div class="ls-bar-track"><div class="ls-bar-fill" id="lsBarFill"></div></div>
        <div class="ls-pct" id="lsPct">0%</div>
        <div class="ls-status" id="lsStatus">INICIALIZANDO SISTEMAS</div>
      </div>
    `;
    document.body.appendChild(ls);

    const fill = ls.querySelector('#lsBarFill');
    const pct = ls.querySelector('#lsPct');
    const status = ls.querySelector('#lsStatus');
    const messages = [
      'INICIALIZANDO SISTEMAS',
      'CALIBRANDO SENSSORES',
      'CARREGANDO MÓDULOS',
      'SINCRONIZANDO DADOS',
      'MONTANDO INTERFACE',
      'SISTEMA PRONTO'
    ];
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 14 + 4;
      if (p > 100) p = 100;
      fill.style.width = p + '%';
      pct.textContent = Math.round(p) + '%';
      status.textContent = messages[Math.min(Math.floor(p / (100 / messages.length)), messages.length - 1)];
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(() => {
          ls.classList.add('hidden');
          setTimeout(() => ls.remove(), 900);
          document.dispatchEvent(new CustomEvent('loading:complete'));
          initHeroCinematic();
        }, 500);
      }
    }, 200);
    setTimeout(() => { if (p < 100) p = 100; }, 6000);
  }

  /* ========================================================================
     3. LENIS SMOOTH SCROLL
     ======================================================================== */
  let lenis = null;
  function initLenis() {
    if (isMobile || isTouch || typeof Lenis === 'undefined') return;
    lenis = new Lenis({
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }

  /* ========================================================================
     4. INDUSTRIAL BACKGROUND — grid + hex + decorative gears
     ======================================================================== */
  function initIndustrialBackground() {
    const grid = document.createElement('div');
    grid.className = 'industrial-grid';
    document.body.appendChild(grid);

    if (isDesktop && perfTier === 'high') {
      const hex = document.createElement('div');
      hex.className = 'hex-pattern';
      document.body.appendChild(hex);
    }
  }

  /* ========================================================================
     5. WEBGL BACKGROUND — Three.js particles reactive to mouse
     ======================================================================== */
  function initWebGLBackground() {
    if (!isDesktop || !hasWebGL || perfTier !== 'high') return;
    if (typeof THREE === 'undefined') return;

    const canvas = document.createElement('canvas');
    canvas.id = 'webgl-bg';
    document.body.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const count = isDesktop ? 400 : 150;
    const positions = new Float32Array(count * 3);
    const aColors = new Float32Array(count * 3);
    const aSizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      const blue = Math.random() > 0.7;
      if (blue) { aColors[i * 3] = 0; aColors[i * 3 + 1] = 0.9; aColors[i * 3 + 2] = 1; }
      else { aColors[i * 3] = 0; aColors[i * 3 + 1] = 0.5; aColors[i * 3 + 2] = 1; }
      aSizes[i] = Math.random() * 1.5 + 0.5;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(aColors, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(aSizes, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) } },
      vertexShader: `
        attribute vec3 aColor;
        attribute float aSize;
        varying vec3 vColor;
        uniform float uTime;
        uniform float uPixelRatio;
        void main() {
          vec3 pos = position;
          pos.y += sin(uTime * 0.3 + position.x * 0.05) * 1.5;
          vec4 mv = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aSize * uPixelRatio * (40.0 / -mv.z);
          vColor = aColor;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          vec2 c = gl_PointCoord - vec2(0.5);
          float d = length(c);
          if (d > 0.5) discard;
          float a = 1.0 - smoothstep(0.0, 0.5, d);
          gl_FragColor = vec4(vColor, a * 0.85);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let mx = 0, my = 0;
    window.addEventListener('mousemove', e => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(es => { es.forEach(e => visible = e.isIntersecting); });
    io.observe(canvas);

    const clock = new THREE.Clock();
    function render() {
      requestAnimationFrame(render);
      if (!visible) return;
      mat.uniforms.uTime.value = clock.getElapsedTime();
      const pos = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];
        const dx = mx * 60 - pos[i * 3];
        const dy = my * 40 - pos[i * 3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 20) {
          velocities[i * 3] -= dx / dist * 0.04;
          velocities[i * 3 + 1] -= dy / dist * 0.04;
        }
        velocities[i * 3] *= 0.97;
        velocities[i * 3 + 1] *= 0.97;
        velocities[i * 3 + 2] *= 0.97;
        if (Math.abs(pos[i * 3]) > 70) velocities[i * 3] *= -0.5;
        if (Math.abs(pos[i * 3 + 1]) > 50) velocities[i * 3 + 1] *= -0.5;
      }
      geo.attributes.position.needsUpdate = true;
      camera.position.x += (mx * 8 - camera.position.x) * 0.04;
      camera.position.y += (my * 5 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }
    render();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return { scene, camera, renderer };
  }

  /* ========================================================================
     6. HERO CINEMATIC — mask-reveal + parallax 3D + counters
     ======================================================================== */
  function initHeroCinematic() {
    const hero = $('.hero');
    if (!hero) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    const title = $('.hero-title');
    if (title) {
      splitChars(title);
      const chars = $$('.char', title);
      tl.from(chars, { y: '110%', rotateZ: 6, opacity: 0, filter: 'blur(8px)', stagger: 0.04, duration: 1.0 }, 0.2);
    }

    const subtitle = $('.hero-subtitle');
    if (subtitle) tl.from(subtitle, { x: 40, opacity: 0, filter: 'blur(12px)', duration: 1.2 }, 0.6);

    const eyebrow = $('.eyebrow', hero);
    if (eyebrow) tl.from(eyebrow, { y: 20, opacity: 0, duration: 0.8 }, 0.1);

    const stats = $('.hero-stats');
    if (stats) tl.from($$('.stat', stats), { y: 30, opacity: 0, stagger: 0.1, duration: 0.7 }, 0.9);

    const cta = $('.hero-cta');
    if (cta) tl.from($$('a', cta), { scale: 0.85, opacity: 0, stagger: 0.12, duration: 0.8 }, 1.1);

    const right = $('.hero-right');
    if (right) tl.from(right, { x: 60, opacity: 0, filter: 'blur(10px)', duration: 1.4 }, 0.5);

    const indicator = $('.hero-scroll-indicator');
    if (indicator) tl.from(indicator, { y: 20, opacity: 0, duration: 0.8 }, 1.4);

    const bg = $('.hero-bg-image');
    if (bg) {
      gsap.to(bg, {
        scale: 1.12, ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.5 }
      });
    }

    $$('.visual-card').forEach((card, i) => {
      gsap.to(card, {
        y: () => -(card.offsetHeight * (0.15 + i * 0.08)),
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.2 }
      });
    });

    $$('.stat-num').forEach(s => {
      const txt = s.textContent.replace(/[^0-9]/g, '');
      const target = parseInt(txt);
      if (target) {
        gsap.from(s, {
          textContent: 0, duration: 2.5, ease: 'power4.out', snap: { textContent: 1 },
          scrollTrigger: { trigger: s, start: 'top 90%' }
        });
      }
    });
  }

  function splitChars(el) {
    const text = el.textContent;
    el.innerHTML = '';
    const words = text.split(/(\s+)/);
    let idx = 0;
    words.forEach(w => {
      if (/\s+/.test(w)) { el.appendChild(document.createTextNode(w)); return; }
      const wrap = document.createElement('span');
      wrap.className = 'letter-reveal';
      w.split('').forEach(c => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = c;
        span.style.setProperty('--char-index', idx++);
        wrap.appendChild(span);
      });
      el.appendChild(wrap);
    });
  }

  /* ========================================================================
     7. SCROLL REVEALS — blur-focus + mask-reveal + clip-reveal
     ======================================================================== */
  function initScrollReveals() {
    $$('[data-reveal]').forEach(el => {
      const dir = el.dataset.revealDir || 'up';
      const dist = parseInt(el.dataset.revealDist) || 50;
      const delay = parseFloat(el.dataset.revealDelay) || 0;
      const dur = parseFloat(el.dataset.revealDur) || 1.1;

      const v = { opacity: 0, ease: 'power4.out', duration: dur, delay, filter: 'blur(10px)' };
      if (dir === 'up') v.y = dist;
      else if (dir === 'down') v.y = -dist;
      else if (dir === 'left') v.x = dist;
      else if (dir === 'right') v.x = -dist;
      else if (dir === 'scale') { v.scale = 0.92; v.y = dist; }
      else if (dir === 'fade') {}

      gsap.from(el, { ...v, scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' } });
    });

    $$('[data-reveal-item]').forEach(el => {
      const parent = el.closest('[data-reveal-stagger]') || el.parentElement;
      const siblings = $$('[data-reveal-item]', parent);
      const idx = siblings.indexOf(el);
      const sd = parseFloat(parent.dataset.revealStaggerDelay) || 0.08;
      gsap.from(el, {
        y: 40, opacity: 0, filter: 'blur(8px)', duration: 0.9, ease: 'power4.out', delay: idx * sd,
        scrollTrigger: { trigger: parent, start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });

    $$('.mask-reveal').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 92%',
        onEnter: () => el.classList.add('in-view'),
        onLeaveBack: () => el.classList.remove('in-view')
      });
    });

    $$('.blur-focus').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 90%',
        onEnter: () => el.classList.add('in-view'),
        onLeaveBack: () => el.classList.remove('in-view')
      });
    });

    $$('.clip-reveal').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 90%',
        onEnter: () => el.classList.add('in-view'),
        onLeaveBack: () => el.classList.remove('in-view')
      });
    });
  }

  /* ========================================================================
     8. MAGNETIC BUTTONS — physics spring-based
     ======================================================================== */
  function initMagneticButtons() {
    if (isMobile || isTouch) return;
    $$('.btn, .btn-premium, .nav-link, .course-link, .form-download').forEach(btn => {
      let raf = null;
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.5, ease: 'power4.out' });
        });
      });
      btn.addEventListener('mouseleave', () => {
        if (raf) cancelAnimationFrame(raf);
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.35)' });
      });
    });
  }

  /* ========================================================================
     9. 3D CARD TILT — Apple VisionOS style with dynamic glow
     ======================================================================== */
  function initCardTilt3D() {
    if (isMobile || isTouch) return;
    const cards = $$('.visual-card, .topic-card, .course-card, .resource-card, .form-card, .about-card, .card-premium');
    cards.forEach(card => {
      const reflection = document.createElement('div');
      reflection.className = 'card-reflection';
      card.appendChild(reflection);

      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * -8;
        const ry = (px - 0.5) * 8;
        card.style.setProperty('--mx', (px * 100) + '%');
        card.style.setProperty('--my', (py * 100) + '%');
        gsap.to(card, { rotateX: rx, rotateY: ry, duration: 0.4, ease: 'power4.out', transformPerspective: 1200, force3D: true });
        if (card.classList.contains('card-premium')) card.style.boxShadow = `0 24px 64px rgba(0,0,0,0.4), ${(px-0.5)*30}px ${(0.5-py)*30}px 40px rgba(0,229,255,0.08)`;
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power4.out' });
      });
    });
  }

  /* ========================================================================
     10. PROGRESS BAR + NAVBAR + NAV ACTIVE
     ======================================================================== */
  function initProgressNav() {
    const bar = $('#progressBar');
    if (bar) {
      ScrollTrigger.create({
        trigger: document.body, start: 'top top', end: 'bottom bottom',
        onUpdate: self => { bar.style.width = (self.progress * 100) + '%'; }
      });
    }

    const navbar = $('#navbar');
    if (navbar) {
      ScrollTrigger.create({
        trigger: document.body, start: 'top -60px',
        onUpdate: self => navbar.classList.toggle('scrolled', self.progress > 0)
      });
    }

    const navLinks = $$('.nav-link');
    const sections = $$('section[id]');
    if (navLinks.length && sections.length) {
      sections.forEach(s => {
        ScrollTrigger.create({
          trigger: s, start: 'top center', end: 'bottom center',
          onEnter: () => setActive(s.id), onEnterBack: () => setActive(s.id)
        });
      });
      function setActive(id) {
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
      }
    }
  }

  function initFooterFX() {
    $$('.footer-nav-group a, .footer-link').forEach(link => {
      link.addEventListener('mouseenter', () => gsap.to(link, { x: 5, duration: 0.3, ease: 'power4.out' }));
      link.addEventListener('mouseleave', () => gsap.to(link, { x: 0, duration: 0.3, ease: 'power4.out' }));
    });
  }

  function initSmoothAnchor() {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const h = a.getAttribute('href');
        if (h === '#') return;
        e.preventDefault();
        const t = $(h);
        if (!t) return;
        if (lenis) lenis.scrollTo(t, { offset: -100 });
        else t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ========================================================================
     11. PAGE TRANSITIONS — cinematic fade + blur + scale
     ======================================================================== */
  function initPageTransitions() {
    $$('a[data-href], a[href$=".html"]:not([target="_blank"])').forEach(a => {
      const href = a.dataset.href || a.getAttribute('href');
      if (!href || href.includes('#') || href.startsWith('http') || href.startsWith('mailto')) return;
      a.addEventListener('click', e => {
        e.preventDefault();
        const overlay = document.createElement('div');
        overlay.style.cssText = `position:fixed;inset:0;z-index:${getComputedStyle(document.documentElement).getPropertyValue('--z-overlay')};background:var(--c-matte-black);opacity:0;pointer-events:none;transition:opacity 0.5s;backdrop-filter:blur(20px);`;
        document.body.appendChild(overlay);
        requestAnimationFrame(() => {
          overlay.style.opacity = '1';
          gsap.to('main, .navbar', { opacity: 0, scale: 0.96, filter: 'blur(20px)', duration: 0.5, ease: 'power4.out' });
        });
        setTimeout(() => { window.location.href = href; }, 500);
      });
    });
  }

  /* ========================================================================
     12. COUNTERS — animated number incrementation
     ======================================================================== */
  function initCounters() {
    $$('[data-count]').forEach(el => {
      const raw = el.textContent.replace(/[^0-9]/g, '');
      const target = parseInt(raw);
      const suffix = el.dataset.countSuffix || el.textContent.replace(/[0-9]/g, '');
      if (!target) return;
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target, duration: 2.5, ease: 'power4.out',
            onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
            onComplete: () => { el.textContent = target + suffix; }
          });
        }
      });
    });
  }

  /* ========================================================================
     13. PARALLAX — multilayer depth
     ======================================================================== */
  function initParallax() {
    const factor = isMobile ? 0.5 : 1;
    $$('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      gsap.to(el, {
        y: () => -(el.offsetHeight * speed * factor), ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1.2 }
      });
    });
  }

  /* ========================================================================
     14. DECORATIVE GEARS — rotative industrial elements
     ======================================================================== */
  function addDecorativeGears() {
    if (!isDesktop) return;
    const places = [
      { sel: '.hero', size: 180, pos: 'top:10%;right:-60px', cls: 'slow' },
      { sel: '.section.topics', size: 140, pos: 'bottom:20%;left:-70px', cls: 'reverse fast' },
      { sel: '.about', size: 200, pos: 'top:30%;right:-80px', cls: '' },
    ];
    places.forEach(p => {
      const host = $(p.sel);
      if (!host) return;
      host.style.position = host.style.position || 'relative';
      const g = document.createElement('div');
      g.className = 'gear-deco ' + p.cls;
      g.style.cssText = p.pos + `;width:${p.size}px;height:${p.size}px;opacity:0.06`;
      g.innerHTML = `<svg viewBox="0 0 100 100" width="100%" height="100%"><g fill="none" stroke="currentColor" stroke-width="1"><circle cx="50" cy="50" r="20"/><circle cx="50" cy="50" r="8"/>${Array.from({length:12},(_,i)=>{const a=(i/12)*Math.PI*2;const x1=50+Math.cos(a)*28,y1=50+Math.sin(a)*28,x2=50+Math.cos(a)*38,y2=50+Math.sin(a)*38;return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;}).join('')}</g></svg>`;
      g.style.color = 'var(--c-laser-cyan)';
      host.appendChild(g);
    });
  }

  /* ========================================================================
     15. FLOW LINES — animated industrial flow
     ======================================================================== */
  function addFlowLines() {
    if (!isDesktop) return;
    const targets = $$('.section, .hero');
    targets.forEach((s, i) => {
      if (i % 2 !== 0) return;
      const f = document.createElement('div');
      f.className = 'flow-line';
      f.style.cssText = `top:${20 + Math.random() * 60}%;left:0;width:100%;opacity:0.12;`;
      s.style.position = s.style.position || 'relative';
      s.appendChild(f);
    });
  }

  /* ========================================================================
     INIT
     ======================================================================== */
  function init() {
    initPremiumLoading();
    setTimeout(() => {
      initPremiumCursor();
      initIndustrialBackground();
      initWebGLBackground();
      initLenis();
      initHeroCinematic();
      initScrollReveals();
      initMagneticButtons();
      initCardTilt3D();
      initProgressNav();
      initFooterFX();
      initSmoothAnchor();
      initPageTransitions();
      initCounters();
      initParallax();
      addDecorativeGears();
      addFlowLines();
      document.dispatchEvent(new CustomEvent('animations:ready'));
      document.dispatchEvent(new CustomEvent('content:loaded'));
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for page-specific scripts
  window.EngProPremium = { gsap, ScrollTrigger, lenis: () => lenis, isDesktop, isMobile, hasWebGL };
})();
