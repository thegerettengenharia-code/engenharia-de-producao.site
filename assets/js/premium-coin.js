/* ==========================================================================
   ENGPRO — PREMIUM SILVER COIN 3D + MAGNETIC EMBLEMS
   Awwwards-tier cinematic loading with realistic silver coin
   ========================================================================== */
(function () {
  'use strict';

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = !isMobile && !isTouch && window.matchMedia('(min-width: 1025px)').matches;

  /* ========================================================================
     1. SILVER COIN — Three.js ultra-realistic spinning coin
     ======================================================================== */
  function initSilverCoin() {
    if (typeof THREE === 'undefined') return;
    if (isReduced) return;

    const wrap = document.getElementById('coinCanvasWrap');
    if (!wrap) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'silverCoinCanvas';
    wrap.appendChild(canvas);

    const w = 280, h = 280;
    const renderer = new THREE.WebGLRenderer({
      canvas, alpha: true, antialias: true, powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100);
    camera.position.set(0, 0.5, 6);
    camera.lookAt(0, 0, 0);

    /* — Environment for reflections — */
    const envScene = new THREE.Scene();
    const envSize = 256;
    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    // Simple gradient environment
    const envCanvas = document.createElement('canvas');
    envCanvas.width = envSize; envCanvas.height = envSize;
    const ectx = envCanvas.getContext('2d');
    const grad = ectx.createLinearGradient(0, 0, envSize, envSize);
    grad.addColorStop(0, '#1a1a22');
    grad.addColorStop(0.3, '#2a2a36');
    grad.addColorStop(0.5, '#0a0a0e');
    grad.addColorStop(0.7, '#1e1e28');
    grad.addColorStop(1, '#050508');
    ectx.fillStyle = grad;
    ectx.fillRect(0, 0, envSize, envSize);
    // Add highlight streaks
    ectx.fillStyle = 'rgba(255,255,255,0.04)';
    ectx.fillRect(0, envSize * 0.2, envSize, 4);
    ectx.fillStyle = 'rgba(255,255,255,0.02)';
    ectx.fillRect(0, envSize * 0.7, envSize, 6);

    const envTexture = new THREE.CanvasTexture(envCanvas);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    const envMap = pmremGenerator.fromEquirectangular(envTexture).texture;
    scene.environment = envMap;

    /* — Coin geometry: cylinder with beveled edges — */
    const coinGroup = new THREE.Group();
    const radius = 1.5;
    const thickness = 0.18;
    const segments = 128;

    const coinGeo = new THREE.CylinderGeometry(radius, radius, thickness, segments, 1, false);

    // Bevel top and bottom edges
    const positions = coinGeo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const y = positions.getY(i);
      const x = positions.getX(i);
      const z = positions.getZ(i);
      const dist = Math.sqrt(x * x + z * z);
      if (dist > radius * 0.97) {
        if (y > 0) positions.setY(i, y * 0.88);
        else positions.setY(i, y * 0.88);
      }
    }
    coinGeo.computeVertexNormals();

    /* — Silver material with MeshStandardMaterial for realism — */
    const silverMat = new THREE.MeshStandardMaterial({
      color: 0xc8c8d0,
      metalness: 1.0,
      roughness: 0.18,
      envMap: envMap,
      envMapIntensity: 1.4,
    });

    const coin = new THREE.Mesh(coinGeo, silverMat);
    coin.rotation.x = Math.PI / 2; // Lay flat
    coin.rotation.z = 0.3;
    coinGroup.add(coin);

    /* — Engraved face details using normal map canvas — */
    function createCoinFaceTexture(isFront) {
      const cv = document.createElement('canvas');
      cv.width = 512; cv.height = 512;
      const ctx = cv.getContext('2d');

      // Base silver
      ctx.fillStyle = '#9a9aa6';
      ctx.fillRect(0, 0, 512, 512);

      // Radial gradient for depth
      const rg = ctx.createRadialGradient(256, 256, 50, 256, 256, 250);
      rg.addColorStop(0, 'rgba(255,255,255,0.08)');
      rg.addColorStop(0.7, 'rgba(0,0,0,0)');
      rg.addColorStop(1, 'rgba(0,0,0,0.25)');
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, 512, 512);

      // Concentric rings (engraving)
      ctx.strokeStyle = 'rgba(0,0,0,0.25)';
      ctx.lineWidth = 1.5;
      for (let r = 200; r >= 80; r -= 20) {
        ctx.beginPath();
        ctx.arc(256, 256, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      // Inner highlight rings
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      for (let r = 205; r >= 85; r -= 20) {
        ctx.beginPath();
        ctx.arc(254, 254, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Center emblem text
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.font = 'bold 140px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isFront ? 'EP' : '4.0', 256, 256);

      // Outer text ring
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      ctx.font = '500 22px monospace';
      const text = isFront ? 'ENGENHARIA DE PRODUÇÃO • ENGENHARIA DE PRODUÇÃO' : 'INDÚSTRIA 4.0 • INDÚSTRIA 4.0';
      const textRadius = 220;
      for (let i = 0; i < text.length; i++) {
        const angle = (i / text.length) * Math.PI * 2 - Math.PI / 2;
        ctx.save();
        ctx.translate(256, 256);
        ctx.rotate(angle);
        ctx.fillText(text[i], 0, -textRadius);
        ctx.restore();
      }

      // Tick marks around edge
      ctx.strokeStyle = 'rgba(0,0,0,0.2)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 60; i++) {
        const angle = (i / 60) * Math.PI * 2;
        const x1 = Math.cos(angle) * 240, y1 = Math.sin(angle) * 240;
        const x2 = Math.cos(angle) * 248, y2 = Math.sin(angle) * 248;
        ctx.beginPath();
        ctx.moveTo(256 + x1, 256 + y1);
        ctx.lineTo(256 + x2, 256 + y2);
        ctx.stroke();
      }

      return new THREE.CanvasTexture(cv);
    }

    const frontTex = createCoinFaceTexture(true);
    const backTex = createCoinFaceTexture(false);
    frontTex.anisotropy = 8;
    backTex.anisotropy = 8;

    // Face plates (top and bottom)
    const faceGeo = new THREE.CircleGeometry(radius * 0.96, segments);
    const frontFaceMat = new THREE.MeshStandardMaterial({
      map: frontTex, metalness: 0.95, roughness: 0.22, envMap: envMap, envMapIntensity: 1.2
    });
    const backFaceMat = new THREE.MeshStandardMaterial({
      map: backTex, metalness: 0.95, roughness: 0.22, envMap: envMap, envMapIntensity: 1.2
    });

    const frontFace = new THREE.Mesh(faceGeo, frontFaceMat);
    frontFace.position.z = thickness / 2 + 0.001;
    coinGroup.add(frontFace);

    const backFace = new THREE.Mesh(faceGeo, backFaceMat);
    backFace.position.z = -thickness / 2 - 0.001;
    backFace.rotation.y = Math.PI;
    coinGroup.add(backFace);

    scene.add(coinGroup);

    /* — Lighting — */
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x6080ff, 1.2);
    rimLight.position.set(-5, -2, -4);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xffeecc, 0.6);
    fillLight.position.set(0, -3, 3);
    scene.add(fillLight);

    const ambient = new THREE.AmbientLight(0x202028, 0.3);
    scene.add(ambient);

    /* — Animation loop — */
    let angle = 0;
    let tiltY = 0.3;
    let mouseX = 0, mouseY = 0;
    let tMouseX = 0, tMouseY = 0;

    if (isDesktop) {
      document.addEventListener('mousemove', e => {
        tMouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
        tMouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
      }, { passive: true });
    }

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const dt = clock.getDelta();
      angle += dt * 0.6;
      mouseX += (tMouseX - mouseX) * 0.04;
      mouseY += (tMouseY - mouseY) * 0.04;

      if (coinGroup) {
        coinGroup.rotation.y = angle;
        coinGroup.rotation.x = Math.PI / 2 + mouseY * 0.3;
        coinGroup.rotation.z = 0.3 + mouseX * 0.2;
      }
      renderer.render(scene, camera);
    }
    animate();

    return renderer;
  }

  /* ========================================================================
     2. COIN LOADING SCREEN — replaces default loading
     ======================================================================== */
  function initCoinLoading() {
    const old = document.getElementById('loadingScreen');
    if (!old) return;

    const ls = document.createElement('div');
    ls.className = 'loading-screen-premium-coin visible';
    ls.id = 'coinLoadingScreen';
    ls.setAttribute('role', 'status');
    ls.setAttribute('aria-label', 'Carregando sistema EngPro');
    ls.innerHTML = `
      <div class="coin-canvas-wrap" id="coinCanvasWrap">
        <div class="coin-ambient-glow"></div>
        <div class="coin-orbit">
          <div class="coin-orbit-ring"></div>
          <div class="coin-orbit-ring"></div>
          <div class="coin-orbit-ring"></div>
        </div>
      </div>
      <div class="coin-loading-text">Inicializando sistema</div>
      <div class="coin-progress-track"><div class="coin-progress-fill" id="coinBarFill"></div></div>
      <div class="coin-progress-pct" id="coinPct">0%</div>
    `;
    document.body.appendChild(ls);

    // Hide old loading immediately
    old.style.opacity = '0';
    setTimeout(() => { old.remove(); }, 300);

    // Initialize coin
    initSilverCoin();

    const fill = ls.querySelector('#coinBarFill');
    const pct = ls.querySelector('#coinPct');
    const txt = ls.querySelector('.coin-loading-text');
    const messages = [
      'Inicializando sistema',
      'Calibrando sensores',
      'Carregando módulos',
      'Sincronizando dados',
      'Montando interface',
      'Sistema pronto'
    ];
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 10 + 3;
      if (p > 100) p = 100;
      if (fill) fill.style.width = p + '%';
      if (pct) pct.textContent = Math.round(p) + '%';
      if (txt) txt.textContent = messages[Math.min(Math.floor(p / (100 / messages.length)), messages.length - 1)];
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(() => {
          ls.classList.add('hidden');
          setTimeout(() => ls.remove(), 700);
          document.dispatchEvent(new CustomEvent('loading:complete'));
          revealMagneticEmblems();
        }, 500);
      }
    }, 220);
    setTimeout(() => { if (p < 100) p = 100; }, 6000);
  }

  /* ========================================================================
     3. MAGNETIC EMBLEMS — interactive 3D-feel logos on hero canvas
     ======================================================================== */
  function initMagneticEmblems() {
    if (!isDesktop) return;
    const hero = document.querySelector('.hero');
    if (!hero) return;
    if (document.querySelector('.magnetic-emblems')) return;

    const container = document.createElement('div');
    container.className = 'magnetic-emblems';
    container.setAttribute('aria-hidden', 'true');

    const emblems = [
      { pos: '1', svg: '<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>', label: 'Engenharia' },
      { pos: '2', svg: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>', label: 'Precisão' },
      { pos: '3', svg: '<svg viewBox="0 0 24 24"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>', label: 'Qualidade' },
      { pos: '4', svg: '<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>', label: 'Indústria 4.0' },
      { pos: '5', svg: '<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>', label: 'Performance' },
      { pos: '6', svg: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>', label: 'Sistemas' },
      { pos: '7', svg: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>', label: 'Eficiência' },
      { pos: '8', svg: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>', label: 'Inovação' },
    ];

    emblems.forEach(e => {
      const el = document.createElement('div');
      el.className = `emblem emblem-${e.pos}`;
      el.innerHTML = e.svg + `<span class="emblem-label">${e.label}</span>`;
      container.appendChild(el);
    });

    hero.style.position = hero.style.position || 'relative';
    hero.appendChild(container);

    // Magnetic interaction
    const emblemEls = container.querySelectorAll('.emblem');
    emblemElems.forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * 0.4;
        const dy = (e.clientY - cy) * 0.4;
        el.style.transform = `translate(${dx}px, ${dy}px) scale(1.15)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  function revealMagneticEmblems() {
    const m = document.querySelector('.magnetic-emblems');
    if (m) m.classList.add('revealed');
  }

  /* ========================================================================
     INIT
     ======================================================================== */
  function init() {
    initCoinLoading();
    initMagneticEmblems();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
