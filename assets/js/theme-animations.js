/* ==========================================================================
   ENGPRO — ANIMAÇÕES TEMÁTICAS POR SEÇÃO
   Cada área: ecossistema visual próprio e temático
   Indústria 4.0 • Lean • Six Sigma • Robótica • ERP • PCP
   ========================================================================== */

(function () {
  'use strict';

  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) return;

  function init() {
    initTopicVisuals();
    initGauges();
    initGanttTimeline();
    initNeuralNetwork();
    initConveyorBelts();
    initLaserScanner();
    initGaussianCurve();
    initRobotArmIK();
    initSynchronizedGears();
  }

  /* === Topic Cards: holographic floating + sensor blink === */
  function initTopicVisuals() {
    $$('.topic-card').forEach((card, i) => {
      card.classList.add('sensor-blink');
      gsap.to(card, {
        y: i % 2 === 0 ? -3 : 3,
        duration: 4 + i * 0.1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        scrollTrigger: { trigger: card, start: 'top 90%' }
      });
    });
  }

  /* === Gauges: SVG circular gauges animate on scroll === */
  function initGauges() {
    const targets = $$('[data-gauge]');
    targets.forEach(t => {
      const val = parseInt(t.dataset.gauge) || 75;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 100 100');
      svg.style.cssText = 'width:60px;height:60px;position:absolute;top:12px;right:12px;opacity:0.8';
      svg.innerHTML = `
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="3"/>
        <circle class="gauge-prog" cx="50" cy="50" r="42" fill="none" stroke="var(--c-laser-cyan)" stroke-width="3" stroke-linecap="round" stroke-dasharray="264" stroke-dashoffset="264" transform="rotate(-90 50 50)" style="filter:drop-shadow(0 0 4px var(--c-laser-cyan))"/>
        <text x="50" y="56" text-anchor="middle" fill="var(--c-laser-cyan)" font-family="var(--font-mono)" font-size="12" font-weight="600">${val}%</text>
      `;
      t.style.position = 'relative';
      t.appendChild(svg);
      ScrollTrigger.create({
        trigger: t, start: 'top 85%', once: true,
        onEnter: () => {
          gsap.to(svg.querySelector('.gauge-prog'), {
            strokeDashoffset: 264 - (264 * val / 100),
            duration: 1.8, ease: 'power4.out'
          });
        }
      });
    });
  }

  /* === Gantt Timeline: animated bars with elastic physics === */
  function initGanttTimeline() {
    const gantt = $('[data-gantt]');
    if (!gantt) return;
    const bars = $$('.gantt-bar', gantt);
    bars.forEach((bar, i) => {
      gsap.fromTo(bar,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 1.2, ease: 'elastic.out(1, 0.6)', delay: i * 0.1,
          scrollTrigger: { trigger: gantt, start: 'top 80%' }
        }
      );
    });
  }

  /* === Neural Network Background: canvas nodes + connections === */
  function initNeuralNetwork() {
    const target = $('[data-theme-bg="neural"]');
    if (!target || isMobile) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;opacity:0.4;z-index:0';
    target.style.position = 'relative';
    target.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let w = target.offsetWidth, h = target.offsetHeight;
    canvas.width = w; canvas.height = h;

    const nodes = [];
    const N = 25;
    for (let i = 0; i < N; i++) {
      nodes.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 });
    }

    let mx = -1000, my = -1000;
    target.addEventListener('mousemove', e => {
      const r = target.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    });

    let visible = true;
    new IntersectionObserver(es => es.forEach(e => visible = e.isIntersecting)).observe(target);

    function render() {
      requestAnimationFrame(render);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const d = Math.hypot(mx - n.x, my - n.y);
        if (d < 150) { n.vx += (n.x - mx) / d * 0.02; n.vy += (n.y - my) / d * 0.02; }
        n.vx *= 0.99; n.vy *= 0.99;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,229,255,0.6)';
        ctx.fill();
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,85,255,${0.15 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }
    render();

    window.addEventListener('resize', () => {
      w = target.offsetWidth; h = target.offsetHeight;
      canvas.width = w; canvas.height = h;
    });
  }

  /* === Conveyor Belts: animated flow pieces === */
  function initConveyorBelts() {
    $$('[data-conveyor]').forEach(c => {
      const pieces = 6;
      for (let i = 0; i < pieces; i++) {
        const p = document.createElement('div');
        p.style.cssText = `position:absolute;width:8px;height:8px;background:var(--c-copper);border-radius:1px;opacity:0.5;top:50%;left:${i * (100 / pieces)}%;transform:translateY(-50%);box-shadow:0 0 4px var(--c-copper);`;
        c.appendChild(p);
        gsap.to(p, {
          x: c.offsetWidth || 200, duration: 5 + i * 0.3, repeat: -1, ease: 'none', delay: i * 0.5,
          scrollTrigger: { trigger: c, start: 'top 90%' }
        });
      }
    });
  }

  /* === Laser Scanner: section pass-through reveal === */
  function initLaserScanner() {
    $$('[data-laser-section]').forEach(s => {
      const laser = document.createElement('div');
      laser.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,transparent,var(--c-laser-cyan),transparent);box-shadow:0 0 20px var(--c-laser-cyan);opacity:0;pointer-events:none;z-index:2;';
      s.style.position = 'relative';
      s.appendChild(laser);
      ScrollTrigger.create({
        trigger: s, start: 'top 70%', end: 'bottom 30%', scrub: 1,
        onUpdate: self => {
          laser.style.opacity = '0.6';
          laser.style.top = (self.progress * 100) + '%';
        },
        onLeave: () => laser.style.opacity = '0',
        onLeaveBack: () => laser.style.opacity = '0'
      });
    });
  }

  /* === Gaussian Curve: SVG path draw for Six Sigma === */
  function initGaussianCurve() {
    $$('[data-gaussian]').forEach(el => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 300 120');
      svg.style.cssText = 'width:100%;max-width:300px;height:120px;margin:12px 0';
      const path = `M0,110 C40,110 80,40 150,40 C220,40 260,110 300,110`;
      svg.innerHTML = `<path d="${path}" fill="none" stroke="var(--c-laser-cyan)" stroke-width="1.5" stroke-dasharray="400" stroke-dashoffset="400" class="gauss-path" style="filter:drop-shadow(0 0 3px var(--c-laser-cyan))"/><line x1="150" y1="0" x2="150" y2="120" stroke="var(--c-copper)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.4"/>`;
      el.appendChild(svg);
      ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter: () => {
          gsap.to(svg.querySelector('.gauss-path'), { strokeDashoffset: 0, duration: 2.5, ease: 'power4.out' });
        }
      });
    });
  }

  /* === Robot Arm IK: SVG follows mouse === */
  function initRobotArmIK() {
    const arm = $('[data-robot-arm]');
    if (!arm || isMobile) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 200');
    svg.style.cssText = 'width:100%;height:200px;max-width:300px';
    svg.innerHTML = `
      <line x1="100" y1="200" x2="100" y2="140" stroke="var(--c-silver)" stroke-width="3" stroke-linecap="round" class="seg1"/>
      <line x1="100" y1="140" x2="140" y2="90" stroke="var(--c-silver)" stroke-width="3" stroke-linecap="round" class="seg2"/>
      <line x1="140" y1="90" x2="170" y2="60" stroke="var(--c-copper)" stroke-width="2" stroke-linecap="round" class="seg3"/>
      <circle cx="100" cy="140" r="4" fill="var(--c-laser-cyan)" style="filter:drop-shadow(0 0 3px var(--c-laser-cyan))"/>
      <circle cx="140" cy="90" r="3" fill="var(--c-laser-cyan)"/>
      <circle cx="170" cy="60" r="3" fill="var(--c-copper)" class="end-effector"/>
    `;
    arm.appendChild(svg);

    let mx = 170, my = 60;
    arm.addEventListener('mousemove', e => {
      const r = arm.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 200;
      my = ((e.clientY - r.top) / r.height) * 200;
    });

    let visible = true;
    new IntersectionObserver(es => es.forEach(e => visible = e.isIntersecting)).observe(arm);

    function update() {
      requestAnimationFrame(update);
      if (!visible) return;
      const seg2 = svg.querySelector('.seg2');
      const seg3 = svg.querySelector('.seg3');
      const ee = svg.querySelector('.end-effector');
      const tx = Math.max(40, Math.min(180, mx));
      const ty = Math.max(30, Math.min(160, my));
      seg2.setAttribute('x2', (100 + (tx - 100) * 0.6).toFixed(1));
      seg2.setAttribute('y2', (140 + (ty - 140) * 0.6).toFixed(1));
      seg3.setAttribute('x1', seg2.getAttribute('x2'));
      seg3.setAttribute('y1', seg2.getAttribute('y2'));
      seg3.setAttribute('x2', tx.toFixed(1));
      seg3.setAttribute('y2', ty.toFixed(1));
      ee.setAttribute('cx', tx.toFixed(1));
      ee.setAttribute('cy', ty.toFixed(1));
    }
    update();
  }

  /* === Synchronized Gears: rotate on scroll === */
  function initSynchronizedGears() {
    $$('[data-gears-sync]').forEach(host => {
      const gears = $$('.gear', host);
      ScrollTrigger.create({
        trigger: host, start: 'top bottom', end: 'bottom top', scrub: 1,
        onUpdate: self => {
          gears.forEach((g, i) => {
            gsap.set(g, { rotation: self.progress * 360 * (i % 2 === 0 ? 1 : -1) });
          });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  document.addEventListener('content:loaded', init);
})();
