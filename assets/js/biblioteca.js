/* =========================================================
   Biblioteca Digital — lógica da página
   Depende de: assets/data/biblioteca.js (window.SITE_BIBLIOTECA)
   ========================================================= */
(function () {
  'use strict';

  if (!window.SITE_BIBLIOTECA) return;
  const DB = window.SITE_BIBLIOTECA;
  const MATERIAIS = DB.materiais || [];
  const CATEGORIAS = DB.categorias || [];
  const EMAIL = DB.emailContato || 'thegerett@gmail.com';
  const PAGE_SIZE = 12;
  const DESTAQUES_IDS = [
    'intechopen-lean-manufacturing-six-sigma',
    'ufsc-pcp-saas-dissertacao',
    'normas-regulamentadoras-nrs',
    'planalto-pnrs-lei-12305',
    'ufv-apostila-gestao-logistica',
    'ifsc-nbr-iso-9001',
    'unicamp-industria-40',
    'fia-usp-gestao-projetos',
    'leite-consolidade-leis-trabalho',
    'elsevier-lean-journal',
    'unicamp-gestao-qualidade-total',
    'sebrae-lideranca-pessoas'
  ];

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const catById = (id) => CATEGORIAS.find((c) => c.id === id);

  /* ---------- Estado ---------- */
  const state = {
    query: '',
    cat: 'all',
    type: 'all',
    sort: 'relevancia',
    onlyPdf: false,
    onlyOpen: false,
    shown: PAGE_SIZE
  };

  /* ---------- Render helpers ---------- */
  const ICON_BUILD = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></svg>';

  function typeClass(type) {
    const map = { norma: 'is-norma', lei: 'is-lei', curso: 'is-curso', periodico: 'is-periodico', revista: 'is-revista', documento: 'is-doc', cartilha: 'is-doc', manual: 'is-doc', guia: 'is-doc', apostila: 'is-doc' };
    return map[type] || '';
  }

  function typeLabel(type) {
    const map = { livro: 'Livro', 'e-book': 'E-book', apostila: 'Apostila', dissertacao: 'Dissertação', tese: 'Tese', artigo: 'Artigo', cartilha: 'Cartilha', norma: 'Norma', guia: 'Guia', curso: 'Curso', manual: 'Manual', lei: 'Lei', periodico: 'Periódico', revista: 'Revista', documento: 'Documento', portal: 'Portal' };
    return map[type] || esc(type);
  }

  function cardHTML(m, isDestaque) {
    const tags = (m.keywords || []).slice(0, 3).map((t) => '<span class="bd-card-tag">' + esc(t) + '</span>').join('');
    const meta = [esc(m.institution)].filter(Boolean).join(' · ');
    const pdf = m.has_pdf ? '<span class="bd-card-pdf">PDF</span>' : '';
    const badge = isDestaque ? '<span class="bd-card-pdf" style="background:#F2994A22;color:#F2994A;border-color:#F2994A44">Destaque</span>' : '';
    return (
      '<article class="bd-card' + (isDestaque ? ' is-destaque' : '') + '" role="listitem">' +
        '<div class="bd-card-head">' +
          '<span class="bd-card-type' + typeClass(m.type) + '">' + typeLabel(m.type) + '</span>' +
          pdf + badge +
          '<button class="bd-card-report" type="button" data-report-id="' + esc(m.id) + '" data-report-title="' + esc(m.title) + '" data-report-url="' + esc(m.url) + '" aria-label="Reportar problema: ' + esc(m.title) + '" title="Reportar problema">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>' +
          '</button>' +
        '</div>' +
        '<h3 class="bd-card-title"><a href="' + esc(m.url) + '" target="_blank" rel="noopener noreferrer">' + esc(m.title) + '</a></h3>' +
        '<p class="bd-card-desc">' + esc(m.description) + '</p>' +
        '<div class="bd-card-meta">' +
          '<span class="bd-card-inst" title="' + esc(meta) + '">' + ICON_BUILD + esc(meta) + '</span>' +
          (m.year ? '<span class="bd-card-year">' + esc(m.year) + '</span>' : '') +
        '</div>' +
        '<div class="bd-card-tags">' + tags + '</div>' +
        '<a class="bd-card-fc" href="flashcards.html?topico=' + encodeURIComponent(m.title) + '" aria-label="Estudar ' + esc(m.title) + ' com flashcards">' +
          '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="5" width="14" height="15" rx="2"/><path d="M20 3h-9a2 2 0 0 0-2 2"/><path d="M6 10h6M6 14h6M6 18h4"/></svg>' +
          'Flashcards</a>' +
        '<a class="bd-card-cta" href="' + esc(m.url) + '" target="_blank" rel="noopener noreferrer">Acessar material <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>' +
      '</article>'
    );
  }

  /* ---------- Destaques ---------- */
  function renderDestaques() {
    const wrap = $('#bdDestaques');
    const count = $('#destaquesCount');
    if (!wrap) return;
    const items = MATERIAIS.filter((m) => DESTAQUES_IDS.includes(m.id));
    wrap.innerHTML = items.map((m) => cardHTML(m, true)).join('');
    if (count) count.textContent = items.length + ' materiais';
  }

  /* ---------- Vitrine da página inicial ---------- */
  function renderHome() {
    const wrap = $('#bdHomeGrid');
    if (!wrap) return;
    const items = MATERIAIS.filter((m) => DESTAQUES_IDS.includes(m.id));
    wrap.innerHTML = items.map((m) => cardHTML(m, false)).join('');
  }

  /* ---------- Filtros ---------- */
  function renderCatNav() {
    const nav = $('#bdCatNav');
    if (!nav) return;
    const total = MATERIAIS.length;
    const allBtn =
      '<button type="button" class="section-nav-btn' + (state.cat === 'all' ? ' active' : '') + '" data-cat="all" role="tab" aria-selected="' + (state.cat === 'all') + '">' +
        'Todos <span class="bd-cat-count">(' + total + ')</span>' +
      '</button>';
    const btns = CATEGORIAS.map((c) => {
      const n = MATERIAIS.filter((m) => m.category === c.id).length;
      return '<button type="button" class="section-nav-btn' + (state.cat === c.id ? ' active' : '') + '" data-cat="' + esc(c.id) + '" role="tab" aria-selected="' + (state.cat === c.id) + '">' +
        esc(c.nome) + ' <span class="bd-cat-count">(' + n + ')</span>' +
      '</button>';
    }).join('');
    nav.innerHTML = allBtn + btns;
    $$('.section-nav-btn', nav).forEach((btn) => {
      btn.addEventListener('click', () => {
        state.cat = btn.dataset.cat;
        state.shown = PAGE_SIZE;
        renderAll();
      });
    });
  }

  function renderTypeFilter() {
    const sel = $('#bdFilterType');
    if (!sel) return;
    const types = {};
    MATERIAIS.forEach((m) => { types[m.type] = (types[m.type] || 0) + 1; });
    sel.innerHTML = '<option value="all">Todos os tipos</option>' +
      Object.keys(types).sort().map((t) =>
        '<option value="' + esc(t) + '">' + typeLabel(t) + ' (' + types[t] + ')</option>'
      ).join('');
  }

  /* ---------- Busca e ordenação ---------- */
  function normalize(s) {
    return s.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function matches(m) {
    if (state.cat !== 'all' && m.category !== state.cat) return false;
    if (state.type !== 'all' && m.type !== state.type) return false;
    if (state.onlyPdf && !m.has_pdf) return false;
    if (state.onlyOpen && !m.open_access) return false;
    if (!state.query) return true;
    const q = normalize(state.query);
    const hay = normalize([m.title, m.institution, (m.authors || []).join(' '), (m.keywords || []).join(' '), m.subcategory || '', m.description || ''].join(' '));
    return hay.includes(q);
  }

  function relevanceScore(m) {
    if (!state.query) return 0;
    const q = normalize(state.query);
    const t = normalize(m.title).includes(q) ? 3 : 0;
    const k = (m.keywords || []).some((x) => normalize(x).includes(q)) ? 2 : 0;
    const i = normalize(m.institution).includes(q) ? 1 : 0;
    return t + k + i;
  }

  function getFiltered() {
    let list = MATERIAIS.filter(matches);
    if (state.sort === 'az') list = list.slice().sort((a, b) => a.title.localeCompare(b.title, 'pt'));
    else if (state.sort === 'recentes') list = list.slice().sort((a, b) => (b.year || 0) - (a.year || 0));
    else list = list.slice().sort((a, b) => relevanceScore(b) - relevanceScore(a));
    return list;
  }

  /* ---------- Grid principal ---------- */
  function renderGrid() {
    const grid = $('#bdGrid');
    const empty = $('#bdEmpty');
    const loadWrap = $('#bdLoadMoreWrap');
    const counter = $('#resultsCount');
    if (!grid) return;

    const list = getFiltered();
    const visible = list.slice(0, state.shown);

    grid.innerHTML = visible.map((m) => cardHTML(m, false)).join('');
    if (empty) empty.hidden = list.length !== 0;
    if (loadWrap) loadWrap.hidden = visible.length >= list.length || list.length === 0;
    if (counter) {
      counter.textContent = list.length + (list.length === 1 ? ' material' : ' materiais');
    }

    attachReportButtons();
  }

  function attachReportButtons() {
    $$('.bd-card-report').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openReport(btn.dataset.reportId, btn.dataset.reportTitle, btn.dataset.reportUrl);
      });
    });
  }

  function renderAll() {
    renderGrid();
    const clearBtn = $('#bdClearFilters');
    if (clearBtn) clearBtn.hidden = !(state.cat !== 'all' || state.type !== 'all' || state.onlyPdf || state.onlyOpen || state.query);
    $$('#bdCatNav .section-nav-btn').forEach((b) => {
      const on = b.dataset.cat === state.cat;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', String(on));
    });
  }

  /* ---------- Deep link ?categoria= ---------- */
  function readDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('categoria');
    if (cat && catById(cat)) state.cat = cat;
  }

  /* ---------- Skeleton inicial ---------- */
  function showSkeleton() {
    const grid = $('#bdGrid');
    if (!grid) return;
    grid.innerHTML = Array.from({ length: 6 }, () =>
      '<div class="bd-skeleton" aria-hidden="true">' +
        '<div class="bd-skeleton-line sm"></div>' +
        '<div class="bd-skeleton-line lg"></div>' +
        '<div class="bd-skeleton-line md"></div>' +
        '<div class="bd-skeleton-line"></div>' +
      '</div>'
    ).join('');
  }

  /* ---------- Modais ---------- */
  const openModals = [];

  function setBodyLock(lock) {
    if (lock) {
      const { innerWidth } = window;
      const w = document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = (innerWidth - w) + 'px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  function openModal(id, focusSel) {
    const modal = $('#' + id);
    if (!modal) return;
    openModals.push(id);
    modal.hidden = false;
    setBodyLock(true);
    const first = $(focusSel, modal) || $('input, select, textarea, button:not(.bd-modal-close)', modal);
    if (first) first.focus();
  }

  function closeModal(id) {
    const modal = $('#' + id);
    if (!modal) return;
    const idx = openModals.indexOf(id);
    if (idx > -1) openModals.splice(idx, 1);
    modal.hidden = true;
    if (openModals.length === 0) setBodyLock(false);
    const trigger = modal._lastFocus;
    if (trigger) trigger.focus();
  }

  function bindModalClose() {
    $$('[data-bd-close]').forEach((el) => {
      el.addEventListener('click', () => closeModal(el.dataset.bdClose));
    });
    $$('.bd-modal').forEach((m) => {
      m._lastFocus = null;
      const closeBtns = $$('[data-bd-close]', m);
      m.addEventListener('click', (e) => {
        if (e.target.classList && e.target.classList.contains('bd-modal-backdrop')) {
          closeModalsAt(e.target.dataset.bdClose);
        }
      });
      closeBtns.forEach((b) => { b.addEventListener('click', () => { closeModal(b.dataset.bdClose); }); });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && openModals.length) closeModal(openModals[openModals.length - 1]);
    });
  }

  function closeModalsAt(targetId) {
    closeModal(targetId);
  }

  function setNote(id, msg, isError) {
    const n = $('#' + id);
    if (!n) return;
    n.textContent = msg || '';
    n.classList.toggle('is-error', !!isError);
  }

  function saveEntry(key, entry) {
    try {
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      list.push(entry);
      localStorage.setItem(key, JSON.stringify(list.slice(-50)));
    } catch (e) { /* armazenamento indisponível */ }
  }

  function openMailto(subject, body) {
    const href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = href;
  }

  function initSuggestModal() {
    const form = $('#bdSuggestForm');
    const sel = $('#bdSuggestCategoria');
    if (!form) return;
    sel.innerHTML = CATEGORIAS.map((c) => '<option value="' + esc(c.id) + '">' + esc(c.nome) + '</option>').join('');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const titulo = $('#bdSuggestTitulo').value.trim();
      const url = $('#bdSuggestUrl').value.trim();
      if (!titulo || !url) {
        setNote('bdSuggestNote', 'Preencha título e link de acesso.', true);
        return;
      }
      saveEntry('gerett_sugestoes', {
        tipo: 'sugestao',
        titulo: titulo,
        url: url,
        categoria: sel.value,
        descricao: $('#bdSuggestDesc').value.trim(),
        email: $('#bdSuggestEmail').value.trim(),
        data: new Date().toISOString()
      });
      setNote('bdSuggestNote', 'Obrigado! Abrindo seu e-mail para envio…');
      const body =
        'Sugestão de material para a Biblioteca Digital:\n\n' +
        'Título: ' + titulo + '\n' +
        'URL: ' + url + '\n' +
        'Categoria: ' + (catById(sel.value) ? catById(sel.value).nome : sel.value) + '\n' +
        ($('#bdSuggestDesc').value.trim() ? 'Por que é útil: ' + $('#bdSuggestDesc').value.trim() + '\n' : '') +
        ($('#bdSuggestEmail').value.trim() ? 'E-mail: ' + $('#bdSuggestEmail').value.trim() + '\n' : '');
      setTimeout(() => {
        openMailto('Sugestão de material — Biblioteca Digital', body);
        form.reset();
        closeModal('bdSuggestModal');
        setNote('bdSuggestNote', '');
      }, 400);
    });
  }

  let reportTarget = null;
  function openReport(id, title, url) {
    reportTarget = { id: id, title: title, url: url };
    $('#bdReportMaterial').value = title;
    $('#bdReportTipo').value = '';
    $('#bdReportObs').value = '';
    $('#bdReportEmail').value = '';
    setNote('bdReportNote', '');
    openModal('bdReportModal', '#bdReportTipo');
  }

  function initReportModal() {
    const form = $('#bdReportForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const tipo = $('#bdReportTipo').value;
      if (!tipo) {
        setNote('bdReportNote', 'Selecione o tipo de problema.', true);
        return;
      }
      const obs = $('#bdReportObs').value.trim();
      const email = $('#bdReportEmail').value.trim();
      saveEntry('gerett_reportes', {
        tipo: 'reporte',
        materialId: reportTarget ? reportTarget.id : '',
        materialTitulo: reportTarget ? reportTarget.title : '',
        materialUrl: reportTarget ? reportTarget.url : '',
        problema: tipo,
        observacoes: obs,
        email: email,
        data: new Date().toISOString()
      });
      setNote('bdReportNote', 'Obrigado! Abrindo seu e-mail para envio…');
      const body =
        'Reporte de problema — Biblioteca Digital:\n\n' +
        'Material: ' + (reportTarget ? reportTarget.title : '') + '\n' +
        'URL: ' + (reportTarget ? reportTarget.url : '') + '\n' +
        'Tipo de problema: ' + tipo + '\n' +
        (obs ? 'Observações: ' + obs + '\n' : '') +
        (email ? 'E-mail: ' + email + '\n' : '');
      setTimeout(() => {
        openMailto('Reporte de problema — Biblioteca Digital', body);
        form.reset();
        closeModal('bdReportModal');
        setNote('bdReportNote', '');
      }, 400);
    });
  }

  function initOpenButtons() {
    const openSuggest = $('#bdOpenSuggest');
    if (openSuggest) openSuggest.addEventListener('click', () => {
      setNote('bdSuggestNote', '');
      openModal('bdSuggestModal', '#bdSuggestTitulo');
    });
  }

  /* ---------- Init ---------- */
  function initEvents() {
    const search = $('#bdSearchInput');
    const mbn = $('#mbnSearch');
    if (mbn) mbn.addEventListener('click', () => {
      if (search) {
        search.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => search.focus(), 450);
      }
    });
    const clearBtn = $('#bdSearchClear');
    if (search) {
      search.addEventListener('input', () => {
        state.query = search.value.trim();
        state.shown = PAGE_SIZE;
        renderAll();
        if (clearBtn) clearBtn.hidden = !search.value;
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (search) {
          search.value = '';
          state.query = '';
          state.shown = PAGE_SIZE;
          renderAll();
          clearBtn.hidden = true;
          search.focus();
        }
      });
    }
    const typeSel = $('#bdFilterType');
    if (typeSel) typeSel.addEventListener('change', () => {
      state.type = typeSel.value;
      state.shown = PAGE_SIZE;
      renderAll();
    });
    const sortSel = $('#bdFilterSort');
    if (sortSel) sortSel.addEventListener('change', () => {
      state.sort = sortSel.value;
      state.shown = PAGE_SIZE;
      renderAll();
    });
    const pdfChk = $('#bdFilterPdf');
    if (pdfChk) pdfChk.addEventListener('change', () => {
      state.onlyPdf = pdfChk.checked;
      state.shown = PAGE_SIZE;
      renderAll();
    });
    const openChk = $('#bdFilterOpen');
    if (openChk) openChk.addEventListener('change', () => {
      state.onlyOpen = openChk.checked;
      state.shown = PAGE_SIZE;
      renderAll();
    });
    const clearFilters = $('#bdClearFilters');
    if (clearFilters) clearFilters.addEventListener('click', () => {
      state.cat = 'all'; state.type = 'all'; state.onlyPdf = false; state.onlyOpen = false; state.query = ''; state.shown = PAGE_SIZE;
      if (search) search.value = '';
      if (clearBtn) clearBtn.hidden = true;
      if (typeSel) typeSel.value = 'all';
      if (pdfChk) pdfChk.checked = false;
      if (openChk) openChk.checked = false;
      renderAll();
    });
    const loadMore = $('#bdLoadMore');
    if (loadMore) loadMore.addEventListener('click', () => {
      state.shown += PAGE_SIZE;
      renderGrid();
      const counter = $('#resultsCount');
      if (counter) counter.textContent = getFiltered().length + ' materiais';
    });
  }

  function init() {
    readDeepLink();
    renderHome();
    renderDestaques();
    renderCatNav();
    renderTypeFilter();
    showSkeleton();
    bindModalClose();
    initSuggestModal();
    initReportModal();
    initOpenButtons();
    initEvents();
    setTimeout(renderAll, 60);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
