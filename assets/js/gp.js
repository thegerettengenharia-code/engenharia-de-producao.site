/* ============================================================
   GERETT · FERRAMENTA ORGANIZACIONAL · Plataforma de Gestão de Projetos
   Módulos alinhados ao PMBOK · dados salvos localmente (localStorage)
   ============================================================ */
(function () {
  'use strict';

  var LS_KEY = 'gerett_gp_v1';
  var root = document.getElementById('gpRoot');
  var modalRoot = document.getElementById('gpModalRoot');
  var toastRoot = document.getElementById('gpToastRoot');
  var printRoot = document.getElementById('gpPrintRoot');
  if (!root || !modalRoot || !toastRoot || !printRoot) return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function money(n) {
    var v = Number(n);
    if (!isFinite(v)) v = 0;
    return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function fmtD(d) {
    if (!d) return '—';
    var p = String(d).split('-');
    return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : d;
  }
  function today() { return new Date().toISOString().slice(0, 10); }
  function num(v, def) {
    var n = parseFloat(String(v).replace(',', '.'));
    return isNaN(n) ? (def || 0) : n;
  }
  function slug(s) {
    var out = String(s || 'projeto').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
    return out || 'projeto';
  }

  var db = { projects: [] };
  var curId = null;
  var mod = 'dashboard';

  function load() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.projects)) db = parsed;
      }
    } catch (e) { /* estado corrompido: recomeça vazio */ }
    if (curId && !db.projects.some(function (x) { return x.id === curId; })) curId = null;
    if (!curId && db.projects.length) curId = db.projects[0].id;
  }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(db)); }
    catch (e) { toast('Não foi possível salvar localmente.', 'err'); }
  }
  function cur() {
    for (var i = 0; i < db.projects.length; i++) if (db.projects[i].id === curId) return db.projects[i];
    return null;
  }
  function touch(p) { p.updatedAt = new Date().toISOString(); save(); }

  function toast(msg, type) {
    var t = document.createElement('div');
    t.className = 'pdp-toast gp-toast' + (type ? ' ' + type : '');
    t.textContent = msg;
    toastRoot.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('on'); });
    setTimeout(function () {
      t.classList.remove('on');
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 300);
    }, 2600);
  }

  function openModal(title, bodyHtml, footHtml) {
    modalRoot.innerHTML =
      '<div class="ft-overlay" data-close="1"></div>' +
      '<div class="ft-modal" role="dialog" aria-modal="true" aria-label="' + esc(title) + '">' +
      '<header class="ft-modal-head"><h3>' + esc(title) + '</h3>' +
      '<button type="button" class="ft-x" data-close="1" aria-label="Fechar">&times;</button></header>' +
      '<div class="ft-modal-body">' + bodyHtml + '</div>' +
      (footHtml ? '<footer class="ft-modal-foot">' + footHtml + '</footer>' : '') +
      '</div>';
    document.body.classList.add('no-scroll');
    var f = modalRoot.querySelector('input,select,textarea');
    if (f) f.focus();
  }
  function closeModal() {
    modalRoot.innerHTML = '';
    document.body.classList.remove('no-scroll');
  }

  function downloadFile(name, content, mime) {
    var blob = new Blob([content], { type: mime || 'text/markdown;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  function printContent(title, bodyHtml) {
    printRoot.innerHTML =
      '<h1>' + title + '</h1>' +
      '<p class="pr-meta">Gerett · Engenharia de Produção — gerado em ' + fmtD(today()) + '</p>' +
      bodyHtml;
    var de = document.documentElement;
    de.classList.add('gp-printing');
    var cleanup = function () {
      de.classList.remove('gp-printing');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    setTimeout(function () { window.print(); }, 40);
  }

  function confirmAction(msg, fn) {
    openModal('Confirmar ação',
      '<p class="ft-confirm">' + esc(msg) + '</p>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-danger" id="gpConfirmYes">Confirmar</button>');
    modalRoot.querySelector('#gpConfirmYes').addEventListener('click', function () {
      closeModal();
      fn();
    });
  }

  function newProject(o) {
    return {
      id: uid(),
      name: o.nome,
      sponsor: o.sponsor || '',
      manager: o.manager || '',
      budgetPrelim: o.budgetPrelim || 0,
      deadlinePrelim: o.deadlinePrelim || '',
      idea: o.idea || '',
      status: 'ativo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tap: { justificativa: '', objetivo: '', escopoResumo: '', premissas: [], restricoes: [], marcos: [], partes: [], riscosAltos: '', aprovador: '', dataAprov: '' },
      amb: { interno: '', externo: '', swot: { f: [], d: [], o: [], a: [] } },
      stkh: [],
      scope: { declaracao: '', requisitos: [], exclusoes: [], entregaveis: [] },
      eap: [],
      sched: { acts: [], baseline: null },
      costs: { items: [], reservaPct: 10 },
      res: [],
      raci: { roles: ['Gerente de Projeto', 'Equipe técnica', 'Patrocinador', 'Cliente'], cells: {} },
      risks: [],
      qual: { padroes: '', indicadores: [], inspecoes: [], ncs: [] },
      comms: [],
      proc: { items: [] },
      chg: [],
      evm: { pv: 0, ev: 0, ac: 0 },
      lessons: [],
      closing: { checklist: {}, dataAceite: '', relatorio: '' }
    };
  }

  var MODULES = [
    { g: 'Visão geral', id: 'dashboard', label: 'Dashboard Executivo' },
    { g: 'Iniciação', id: 'cadastro', label: 'Configuração' },
    { g: 'Iniciação', id: 'tap', label: 'Termo de Abertura (TAP)' },
    { g: 'Planejamento', id: 'diagnostico', label: 'Diagnóstico Organizacional' },
    { g: 'Planejamento', id: 'stakeholders', label: 'Stakeholders' },
    { g: 'Planejamento', id: 'escopo', label: 'Escopo & Requisitos' },
    { g: 'Planejamento', id: 'eap', label: 'EAP / WBS' },
    { g: 'Planejamento', id: 'cronograma', label: 'Cronograma & Gantt' },
    { g: 'Planejamento', id: 'custos', label: 'Orçamento & Custos' },
    { g: 'Planejamento', id: 'recursos', label: 'Recursos' },
    { g: 'Planejamento', id: 'raci', label: 'Matriz RACI' },
    { g: 'Planejamento', id: 'riscos', label: 'Riscos' },
    { g: 'Planejamento', id: 'qualidade', label: 'Qualidade' },
    { g: 'Planejamento', id: 'comunicacao', label: 'Comunicação' },
    { g: 'Planejamento', id: 'aquisicoes', label: 'Aquisições' },
    { g: 'Execução & Controle', id: 'execucao', label: 'Execução' },
    { g: 'Execução & Controle', id: 'controle', label: 'Controle & Mudanças' },
    { g: 'Encerramento', id: 'encerramento', label: 'Encerramento' }
  ];

  function moduleLabel(id) {
    for (var i = 0; i < MODULES.length; i++) if (MODULES[i].id === id) return MODULES[i].label;
    return id;
  }


  function topoSort(acts) {
    var indeg = {}, map = {}, i;
    acts.forEach(function (a) { map[a.id] = a; indeg[a.id] = 0; });
    acts.forEach(function (a) {
      (a.deps || []).forEach(function (d) { if (map[d]) indeg[a.id]++; });
    });
    var q = acts.filter(function (a) { return indeg[a.id] === 0; }).map(function (a) { return a.id; });
    var order = [];
    while (q.length) {
      var id = q.shift();
      order.push(id);
      acts.forEach(function (a) {
        if ((a.deps || []).indexOf(id) !== -1) {
          indeg[a.id]--;
          if (indeg[a.id] === 0) q.push(a.id);
        }
      });
    }
    return order.length === acts.length ? order : null;
  }

  function cpm(acts) {
    if (!acts.length) return { total: 0, calc: {}, cycle: false };
    var order = topoSort(acts);
    if (!order) return { total: 0, calc: {}, cycle: true };
    var map = {};
    acts.forEach(function (a) { map[a.id] = a; });
    var calc = {};
    order.forEach(function (id) {
      var a = map[id];
      var es = 0;
      (a.deps || []).forEach(function (d) { if (calc[d]) es = Math.max(es, calc[d].ef); });
      calc[id] = { es: es, ef: es + num(a.dur, 0), ls: 0, lf: 0, slack: 0 };
    });
    var total = 0;
    Object.keys(calc).forEach(function (k) { total = Math.max(total, calc[k].ef); });
    order.slice().reverse().forEach(function (id) {
      var a = map[id];
      var c = calc[id];
      var succs = [];
      acts.forEach(function (b) { if ((b.deps || []).indexOf(id) !== -1) succs.push(b.id); });
      if (!succs.length) c.lf = total;
      else {
        c.lf = Infinity;
        succs.forEach(function (s) { if (calc[s]) c.lf = Math.min(c.lf, calc[s].ls); });
      }
      c.ls = c.lf - num(a.dur, 0);
      c.slack = c.ls - c.es;
    });
    return { total: total, calc: calc, cycle: false };
  }

  function actProgress(a) {
    if (a.status === 'concluida') return 100;
    return Math.max(0, Math.min(100, Number(a.pct) || 0));
  }

  function projectProgress(p) {
    var acts = p.sched.acts;
    if (!acts.length) return 0;
    var totW = 0, acc = 0;
    acts.forEach(function (a) {
      var w = Math.max(1, num(a.dur, 1));
      totW += w;
      acc += w * actProgress(a) / 100;
    });
    return totW ? Math.round(acc / totW * 100) : 0;
  }

  function bac(p) {
    var base = 0;
    p.costs.items.forEach(function (it) { base += num(it.qtd, 0) * num(it.valUnit, 0); });
    return base + base * num(p.costs.reservaPct, 0) / 100;
  }
  function baseCost(p) {
    var base = 0;
    p.costs.items.forEach(function (it) { base += num(it.qtd, 0) * num(it.valUnit, 0); });
    return base;
  }

  function evmCalc(p) {
    var b = bac(p);
    var pv = num(p.evm.pv), ev = num(p.evm.ev), ac = num(p.evm.ac);
    function div(a, d) { return d > 0 ? a / d : NaN; }
    var eac = (ev > 0) ? b * (ac / ev) : NaN;
    return {
      bac: b, pv: pv, ev: ev, ac: ac,
      cpi: div(ev, ac),
      spi: div(ev, pv),
      eac: eac,
      etc: isNaN(eac) ? NaN : eac - ac,
      vac: isNaN(eac) ? NaN : b - eac,
      cv: ev - ac,
      sv: ev - pv
    };
  }

  function riskScore(r) { return num(r.prob, 0) * num(r.imp, 0); }

  function health(p) {
    var out = [];
    var acts = p.sched.acts;
    var late = acts.filter(function (a) { return a.status === 'atrasada'; }).length;
    var blocked = acts.filter(function (a) { return a.status === 'bloqueada'; }).length;
    var done = acts.filter(function (a) { return a.status === 'concluida'; }).length;
    out.push({
      k: 'Prazo', s: late ? 'r' : (blocked ? 'y' : 'g'),
      info: late ? late + ' atividade(s) atrasada(s)' : (blocked ? blocked + ' bloqueada(s)' : 'sem atrasos')
    });
    var e = evmCalc(p);
    var cs = 'g';
    if (!isNaN(e.cpi)) cs = e.cpi < 0.95 ? 'r' : (e.cpi < 1 ? 'y' : 'g');
    else if (e.ac > 0 && e.bac > 0 && e.ac > e.bac) cs = 'y';
    out.push({ k: 'Custo', s: cs, info: isNaN(e.cpi) ? (e.ac ? 'sem EV informado' : 'sem custos realizados') : 'CPI ' + e.cpi.toFixed(2) });
    var ncAbertas = p.qual.ncs.filter(function (n) { return n.status !== 'Tratada'; });
    var ncAlta = ncAbertas.some(function (n) { return n.severidade === 'Alta'; });
    out.push({ k: 'Qualidade', s: ncAlta ? 'r' : (ncAbertas.length ? 'y' : 'g'), info: ncAbertas.length ? ncAbertas.length + ' NC(s) aberta(s)' : 'sem não conformidades' });
    var crit = p.risks.filter(function (r) { return r.status !== 'Encerrado' && riskScore(r) >= 15; }).length;
    var med = p.risks.filter(function (r) { return r.status !== 'Encerrado' && riskScore(r) >= 8 && riskScore(r) < 15; }).length;
    out.push({ k: 'Riscos', s: crit ? 'r' : (med ? 'y' : 'g'), info: crit ? crit + ' risco(s) crítico(s)' : (med ? med + ' em atenção' : 'sob controle') });
    out.push({ k: 'Avanço', s: 'g', info: projectProgress(p) + '% concluído · ' + done + '/' + acts.length + ' atividades' });
    return out;
  }

  function nextSteps(p) {
    var steps = [];
    if (!p.tap.objetivo) steps.push(['tap', 'Defina o objetivo e a justificativa no Termo de Abertura']);
    if (!p.tap.dataAprov) steps.push(['tap', 'Formalize a aprovação do TAP (aprovador + data)']);
    if (!p.amb.swot.f.length && !p.amb.swot.o.length) steps.push(['diagnostico', 'Preencha a análise SWOT do diagnóstico organizacional']);
    if (!p.stkh.length) steps.push(['stakeholders', 'Mapeie os stakeholders e suas estratégias de engajamento']);
    if (!p.scope.declaracao) steps.push(['escopo', 'Redija a declaração de escopo']);
    if (!p.scope.entregaveis.length) steps.push(['escopo', 'Cadastre os entregáveis com critérios de aceite']);
    if (!p.eap.length) steps.push(['eap', 'Monte a EAP decompondo o trabalho em pacotes']);
    if (!p.sched.acts.length) steps.push(['cronograma', 'Liste as atividades, durações e dependências do cronograma']);
    if (!p.sched.baseline) steps.push(['cronograma', 'Congele a linha de base do cronograma após aprovação']);
    if (!p.costs.items.length) steps.push(['custos', 'Estime o orçamento por categoria de custo']);
    if (!p.res.length) steps.push(['recursos', 'Aloque os recursos da equipe']);
    if (!p.risks.length) steps.push(['riscos', 'Identifique riscos (causa → evento → consequência)']);
    if (!p.qual.indicadores.length) steps.push(['qualidade', 'Defina indicadores de qualidade com metas']);
    if (!p.comms.length) steps.push(['comunicacao', 'Planeje as comunicações (o quê, quem, quando, como)']);
    if (!p.proc.items.length) steps.push(['aquisicoes', 'Levante necessidades de aquisição e faça cotações']);
    return steps.slice(0, 6);
  }

  function listEditor(items, ph, pathKey) {
    return '<ul class="gp-listedit">' +
      items.map(function (t, i) {
        return '<li><span>' + esc(t) + '</span><button type="button" class="gp-li-x" data-a="rm-item" data-list="' + pathKey + '" data-i="' + i + '" aria-label="Remover">&times;</button></li>';
      }).join('') +
      '</ul>' +
      '<form class="gp-addrow" data-add="' + pathKey + '">' +
      '<input type="text" placeholder="' + esc(ph) + '" required aria-label="' + esc(ph) + '">' +
      '<button type="submit" class="btn btn-soft">Adicionar</button></form>';
  }
  function field(label, inner) {
    return '<label class="gp-field"><span>' + esc(label) + '</span>' + inner + '</label>';
  }
  function ta(name, val, ph, rows) {
    return '<textarea name="' + name + '" rows="' + (rows || 3) + '" placeholder="' + esc(ph || '') + '">' + esc(val || '') + '</textarea>';
  }
  function inp(name, val, type, ph, step) {
    return '<input type="' + (type || 'text') + '" name="' + name + '" value="' + esc(val == null ? '' : val) + '"' +
      (ph ? ' placeholder="' + esc(ph) + '"' : '') + (step ? ' step="' + step + '"' : '') + '>';
  }
  function sel(name, val, opts) {
    return '<select name="' + name + '">' + opts.map(function (o) {
      return '<option value="' + esc(o) + '"' + (o === val ? ' selected' : '') + '>' + esc(o) + '</option>';
    }).join('') + '</select>';
  }
  function card(title, bodyHtml, actionsHtml) {
    return '<section class="gp-card"><header class="gp-card-h"><h4>' + esc(title) + '</h4>' + (actionsHtml || '') + '</header>' +
      '<div class="gp-card-b">' + bodyHtml + '</div></section>';
  }
  function emptyState(msg, btnLabel, act) {
    return '<div class="gp-empty">' +
      '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>' +
      '<p>' + esc(msg) + '</p>' +
      (btnLabel ? '<button type="button" class="btn btn-primary" data-a="' + act + '">' + esc(btnLabel) + '</button>' : '') +
      '</div>';
  }
  function emptyStateIf(cond, msg, lbl, act) { return cond ? emptyState(msg, lbl, act) : ''; }
  function thRow(cols) {
    return '<thead><tr>' + cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') +
      '<th class="gp-th-actions"><span class="sr-only">Ações</span></th></tr></thead>';
  }
  function rowActions(id) {
    return '<td class="gp-rowactions">' +
      '<button type="button" class="icon-btn" data-a="edit" data-id="' + id + '" aria-label="Editar">&#9998;</button>' +
      '<button type="button" class="icon-btn danger" data-a="del" data-id="' + id + '" aria-label="Excluir">&times;</button></td>';
  }
  function pctBar(v) {
    var c = v >= 100 ? 'ok' : (v >= 50 ? 'mid' : 'low');
    return '<div class="gp-pctbar" role="progressbar" aria-valuenow="' + v + '" aria-valuemin="0" aria-valuemax="100">' +
      '<span class="' + c + '" style="width:' + v + '%"></span><em>' + v + '%</em></div>';
  }


  function mCadastro(p) {
    return card('Dados do projeto',
      '<form class="gp-form" data-form="projeto">' +
      field('Nome do projeto *', inp('nome', p.name)) +
      '<div class="gp-form-row">' +
      field('Patrocinador', inp('sponsor', p.sponsor)) +
      field('Gerente de projeto', inp('manager', p.manager)) +
      '</div>' +
      field('Ideia / descrição inicial', ta('idea', p.idea, '', 2)) +
      '<div class="gp-form-row">' +
      field('Orçamento preliminar (R$)', inp('budgetPrelim', p.budgetPrelim, 'number', '0,00', '0.01')) +
      field('Prazo preliminar', inp('deadlinePrelim', p.deadlinePrelim, 'date')) +
      '</div>' +
      '<footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Salvar alterações</button>' +
      '<button type="button" class="btn btn-danger-outline" data-a="del-projeto">Excluir projeto</button></footer>' +
      '</form>') +
      card('Projetos cadastrados',
        '<table class="gp-table"><thead><tr><th>Projeto</th><th>Status</th><th>Criação</th><th><span class="sr-only">Ações</span></th></tr></thead><tbody>' +
        db.projects.map(function (x) {
          return '<tr' + (x.id === p.id ? ' class="sel"' : '') + '><td>' + esc(x.name) + '</td><td>' + esc(x.status) + '</td><td>' + fmtD((x.createdAt || '').slice(0, 10)) + '</td>' +
            '<td class="gp-rowactions">' + (x.id === p.id ? '' :
              '<button type="button" class="btn btn-soft" data-a="open-proj" data-id="' + x.id + '">Abrir</button>' +
              '<button type="button" class="icon-btn danger" data-a="del-proj-id" data-id="' + x.id + '" aria-label="Excluir">&times;</button>') +
            '</td></tr>';
        }).join('') + '</tbody></table>' +
        '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-projeto">+ Novo projeto</button></footer>');
  }

  function mTap(p) {
    var t = p.tap;
    return card('1 · Justificativa e objetivo',
      '<form class="gp-form" data-form="tap1">' +
      field('Justificativa — por que este projeto existe?', ta('justificativa', t.justificativa, 'Problema ou oportunidade que motiva o investimento…', 3)) +
      field('Objetivo do projeto (SMART)', ta('objetivo', t.objetivo, 'O que será entregue, em que prazo e com qual critério de sucesso…', 3)) +
      field('Escopo em alto nível (resumo)', ta('escopoResumo', t.escopoResumo, '', 2)) +
      '<footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Salvar</button></footer></form>') +
      '<div class="gp-grid-2">' +
      card('2 · Premissas', listEditor(t.premissas, 'Nova premissa…', 'tap.premissas')) +
      card('3 · Restrições', listEditor(t.restricoes, 'Nova restrição…', 'tap.restricoes')) +
      '</div>' +
      card('4 · Marcos previstos',
        '<table class="gp-table"><thead><tr><th>Marco</th><th>Data</th><th><span class="sr-only">Ações</span></th></tr></thead><tbody>' +
        (t.marcos.map(function (m, i) {
          return '<tr><td>' + esc(m.nome) + '</td><td>' + fmtD(m.data) + '</td>' +
            '<td class="gp-rowactions"><button type="button" class="icon-btn danger" data-a="rm-marc" data-i="' + i + '" aria-label="Remover">&times;</button></td></tr>';
        }).join('') || '<tr><td colspan="3" class="gp-tsempty">Nenhum marco.</td></tr>') +
        '</tbody></table>' +
        '<form class="gp-form-inline" data-form="marco">' +
        inp('nome', '', 'text', 'Nome do marco') + inp('data', '', 'date') +
        '<button class="btn btn-soft" type="submit">Adicionar</button></form>') +
      '<div class="gp-grid-2">' +
      card('5 · Partes interessadas-chave', listEditor(t.partes, 'Parte interessada…', 'tap.partes')) +
      card('6 · Riscos de alto nível',
        '<form class="gp-form" data-form="tap6">' + ta('riscosAltos', t.riscosAltos, 'Liste sucintamente…', 3) +
        '<footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Salvar</button></footer></form>') +
      '</div>' +
      card('7 · Aprovação do TAP',
        '<form class="gp-form" data-form="tap7"><div class="gp-form-row">' +
        field('Aprovador (autoridade)', inp('aprovador', t.aprovador)) +
        field('Data da aprovação', inp('dataAprov', t.dataAprov, 'date')) +
        '</div><footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Registrar aprovação</button></footer></form>') +
      '<footer class="gp-exportbar"><span>Exportação formal do documento</span>' +
      '<button type="button" class="btn btn-soft" data-a="print-tap">Imprimir / PDF</button></footer>';
  }

  function mDiagnostico(p) {
    var s = p.amb.swot;
    function quad(key, titulo, cls, ph) {
      return '<div class="gp-swot-q ' + cls + '"><h5>' + titulo + '</h5>' + listEditor(s[key], ph, 'swot.' + key) + '</div>';
    }
    return card('Análise SWOT',
      '<div class="gp-swot">' +
      quad('f', 'Forças (internas)', 'pos', 'Ex.: equipe multidisciplinar…') +
      quad('d', 'Fraquezas (internas)', 'neg', 'Ex.: capacidade ociosa…') +
      quad('o', 'Oportunidades (externas)', 'pos2', 'Ex.: demanda reprimida…') +
      quad('a', 'Ameaças (externas)', 'neg2', 'Ex.: novos concorrentes…') +
      '</div>') +
      '<div class="gp-grid-2">' +
      card('Ambiente interno',
        '<form class="gp-form" data-form="amb-i">' + ta('interno', p.amb.interno, 'Recursos, processos, cultura…', 4) +
        '<footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Salvar</button></footer></form>') +
      card('Ambiente externo (PESTEL)',
        '<form class="gp-form" data-form="amb-e">' + ta('externo', p.amb.externo, 'Político, Econômico, Social, Tecnológico, Ecológico, Legal…', 4) +
        '<footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Salvar</button></footer></form>') +
      '</div>' +
      '<footer class="gp-exportbar"><span>Exportar diagnóstico</span>' +
      '<button type="button" class="btn btn-soft" data-a="print-diag">Imprimir / PDF</button></footer>';
  }

  function mStakeholders(p) {
    function quadrante(nome, desc, cls) {
      var list = p.stkh.filter(function (s) { return s.quad === nome; });
      return '<div class="gp-stk-q ' + cls + '"><h5>' + nome + '</h5><p class="hint">' + desc + '</p>' +
        (list.map(function (s) { return '<span class="chip">' + esc(s.nome) + '</span>'; }).join('') || '<em class="hint">—</em>') + '</div>';
    }
    return card('Registro de stakeholders',
      '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Nome', 'Papel / Organização', 'Interesse (1-5)', 'Influência (1-5)', 'Classificação']) + '<tbody>' +
      (p.stkh.map(function (s) {
        return '<tr><td>' + esc(s.nome) + '</td><td>' + esc(s.papel) + '</td><td>' + s.interesse + '</td><td>' + s.influencia + '</td><td>' + esc(s.quad) + '</td>' + rowActions(s.id) + '</tr>';
      }).join('') || '<tr><td colspan="6" class="gp-tsempty">Nenhum stakeholder registrado.</td></tr>') +
      '</tbody></table></div>' +
      '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-stk">+ Novo stakeholder</button></footer>') +
      card('Matriz Poder × Interesse',
        '<div class="gp-stk-matrix">' +
        quadrante('Mantenha satisfeito', 'Alta influência, baixo interesse', 'q1') +
        quadrante('Gerencie de perto', 'Alta influência, alto interesse', 'q2') +
        quadrante('Monitore', 'Baixa influência, baixo interesse', 'q3') +
        quadrante('Mantenha informado', 'Baixa influência, alto interesse', 'q4') +
        '</div>');
  }

  function stkForm(s) {
    var editing = !!(s && s.id);
    s = s || { interesse: 3, influencia: 3 };
    openModal(editing ? 'Editar stakeholder' : 'Novo stakeholder',
      '<form class="gp-form" data-form="stk">' +
      field('Nome *', inp('nome', s.nome || '')) +
      field('Papel / Organização', inp('papel', s.papel || '')) +
      '<div class="gp-form-row">' +
      field('Interesse no projeto (1-5)', inp('interesse', s.interesse, 'number', '', '1')) +
      field('Influência / poder (1-5)', inp('influencia', s.influencia, 'number', '', '1')) +
      '</div></form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-stk" data-id="' + (editing ? s.id : '') + '">Salvar</button>');
  }

  function mEscopo(p) {
    var sc = p.scope;
    return card('Declaração de escopo',
      '<form class="gp-form" data-form="escopo">' +
      ta('declaracao', sc.declaracao, 'Descreva o que está incluído no escopo do produto e do projeto…', 5) +
      '<footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Salvar</button></footer></form>') +
      '<div class="gp-grid-2">' +
      card('Requisitos (MoSCoW)',
        '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Descrição', 'Tipo']) + '<tbody>' +
        (sc.requisitos.map(function (r) {
          return '<tr><td>' + esc(r.desc) + '</td><td>' + esc(r.tipo) + '</td>' + rowActions(r.id) + '</tr>';
        }).join('') || '<tr><td colspan="3" class="gp-tsempty">Sem requisitos.</td></tr>') +
        '</tbody></table></div>' +
        '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-req">+ Novo requisito</button></footer>') +
      card('Exclusões (fora do escopo)', listEditor(sc.exclusoes, 'O que NÃO será entregue…', 'scope.exclusoes')) +
      '</div>' +
      card('Entregáveis e critérios de aceite',
        '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Entregável', 'Critério de aceite', 'Progresso']) + '<tbody>' +
        (sc.entregaveis.map(function (e) {
          return '<tr><td>' + esc(e.nome) + '</td><td class="small">' + esc(e.crit) + '</td><td style="min-width:150px">' + pctBar(num(e.pct, 0)) + '</td>' + rowActions(e.id) + '</tr>';
        }).join('') || '<tr><td colspan="4" class="gp-tsempty">Nenhum entregável.</td></tr>') +
        '</tbody></table></div>' +
        '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-ent">+ Novo entregável</button></footer>');
  }

  function reqForm(r) {
    var editing = !!(r && r.id);
    openModal(editing ? 'Editar requisito' : 'Novo requisito',
      '<form class="gp-form" data-form="req">' +
      field('Descrição do requisito *', ta('desc', editing ? r.desc : '', 'O sistema/produto deve…', 3)) +
      field('Classificação (MoSCoW)', sel('tipo', editing ? r.tipo : 'Must have', ['Must have', 'Should have', 'Could have', "Won't have (por agora)"])) +
      '</form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-req" data-id="' + (editing ? r.id : '') + '">Salvar</button>');
  }

  function entForm(e) {
    var editing = !!(e && e.id);
    openModal(editing ? 'Editar entregável' : 'Novo entregável',
      '<form class="gp-form" data-form="ent">' +
      field('Entregável *', inp('nome', editing ? e.nome : '')) +
      field('Critério de aceite', ta('crit', editing ? e.crit : '', 'Como saberemos que está pronto?', 2)) +
      field('Progresso (%)', inp('pct', editing ? e.pct : 0, 'number', '', '1')) +
      '</form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-ent" data-id="' + (editing ? e.id : '') + '">Salvar</button>');
  }

  function mEap(p) {
    var rows = p.eap;
    function lvlLabel(l) { return l === 1 ? 'Nível 1' : (l === 2 ? 'Nível 2' : 'Nível 3'); }
    return card('Estrutura Analítica do Projeto',
      emptyStateIf(!rows.length, 'Decomponha o trabalho em níveis: 1 = projeto, 2 = fases/entregas, 3 = pacotes de trabalho.', '+ Novo item da EAP', 'eap-focus') +
      (rows.length ?
        '<table class="gp-table"><thead><tr><th>Elemento</th><th>Nível</th><th><span class="sr-only">Ações</span></th></tr></thead><tbody>' +
        rows.map(function (e, i) {
          return '<tr class="lvl' + e.lvl + '"><td>' + esc(e.label) + '</td><td>' + lvlLabel(e.lvl) + '</td>' +
            '<td class="gp-rowactions">' +
            '<button type="button" class="icon-btn" data-a="eap-down" data-i="' + i + '" title="Adicionar subitem" aria-label="Adicionar subitem">+</button>' +
            '<button type="button" class="icon-btn" data-a="eap-up" data-i="' + i + '" title="Promover nível" aria-label="Promover nível">&uarr;</button>' +
            '<button type="button" class="icon-btn danger" data-a="eap-del" data-i="' + i + '" aria-label="Remover">&times;</button></td></tr>';
        }).join('') + '</tbody></table>' : '') +
      '<form class="gp-form-inline" data-form="eap">' +
      inp('label', '', 'text', 'Nome do elemento') +
      sel('lvl', rows.length ? 'Nível 2' : 'Nível 1', ['Nível 1', 'Nível 2', 'Nível 3']) +
      '<button class="btn btn-primary" type="submit">Adicionar</button></form>') +
      '<footer class="gp-exportbar"><span>A EAP orienta o cronograma e o RACI</span>' +
      '<button type="button" class="btn btn-soft" data-a="sync-eap-crono">Criar atividades a partir dos pacotes (nível 3)</button></footer>';
  }

  var ST_LIST = [
    { k: 'não iniciada', l: 'Não iniciada', s: 'Pendente', cls: 'idle' },
    { k: 'em andamento', l: 'Em andamento', s: 'Andando', cls: 'run' },
    { k: 'concluida', l: 'Concluída', s: 'Pronto', cls: 'ok' },
    { k: 'atrasada', l: 'Atrasada', s: 'Atrasar', cls: 'late' },
    { k: 'bloqueada', l: 'Bloqueada', s: 'Bloq.', cls: 'block' }
  ];
  var ST_CLS = { 'concluida': 'st-ok', 'em andamento': 'st-run', 'atrasada': 'st-late', 'bloqueada': 'st-block', 'não iniciada': 'st-idle' };

  function mCronograma(p) {
    var acts = p.sched.acts;
    var c = cpm(acts);
    var nameOf = {};
    acts.forEach(function (a) { nameOf[a.id] = a.nome; });

    var tableRows = acts.map(function (a) {
      var cc = c.calc[a.id];
      var depsTxt = (a.deps || []).map(function (d) { return nameOf[d] || '?'; }).join(', ') || '—';
      return '<tr><td>' + esc(a.nome) + (a.marco ? ' <span class="tag-milestone">marco</span>' : '') + '</td>' +
        '<td>' + a.dur + 'd</td><td class="small">' + esc(depsTxt) + '</td>' +
        '<td>' + esc(a.resp || '—') + '</td>' +
        '<td>' + (cc ? cc.es + 'd' : '—') + '</td>' +
        '<td>' + (cc ? (cc.slack === 0 ? '<strong class="cp">crítico</strong>' : cc.slack + 'd') : '—') + '</td>' +
        '<td><span class="gp-status ' + (ST_CLS[a.status] || 'st-idle') + '">' + esc(a.status) + '</span></td>' +
        '<td style="min-width:130px">' + pctBar(actProgress(a)) + '</td>' +
        rowActions(a.id) + '</tr>';
    }).join('');

    var scale = Math.max(c.total, 1);
    var ganttRows;
    if (c.cycle) {
      ganttRows = '<p class="warn">Dependência circular entre atividades — corrija as dependências para exibir o Gantt.</p>';
    } else {
      ganttRows = acts.slice().sort(function (a, b) {
        return (c.calc[a.id] ? c.calc[a.id].es : 0) - (c.calc[b.id] ? c.calc[b.id].es : 0);
      }).map(function (a) {
        var cc = c.calc[a.id];
        if (!cc) return '';
        if (a.marco) {
          return '<div class="gp-gantt-row"><div class="gp-gantt-label">' + esc(a.nome) + '</div>' +
            '<div class="gp-gantt-track"><span class="gp-milestone" style="left:' + (cc.es / scale * 100) + '%" title="' + esc(a.nome) + '"></span></div></div>';
        }
        var cls = cc.slack === 0 ? 'crit' : 'norm';
        var stcls = a.status === 'concluida' ? 'done' : (a.status === 'atrasada' ? 'late' : (a.status === 'bloqueada' ? 'block' : ''));
        var bl = '';
        if (p.sched.baseline && p.sched.baseline.calc) {
          var bc = p.sched.baseline.calc[a.id];
          if (bc) bl = '<span class="gp-bl-bar" style="left:' + (bc.es / scale * 100) + '%;width:' + (Math.max(0.8, bc.ef - bc.es) / scale * 100) + '%" title="linha de base"></span>';
        }
        return '<div class="gp-gantt-row"><div class="gp-gantt-label">' + esc(a.nome) + '</div>' +
          '<div class="gp-gantt-track">' + bl +
          '<span class="gp-bar ' + cls + ' ' + stcls + '" style="left:' + (cc.es / scale * 100) + '%;width:' + (Math.max(1.2, (cc.ef - cc.es) / scale * 100)) + '%" title="ES ' + cc.es + 'd · EF ' + cc.ef + 'd"></span></div></div>';
      }).join('');
    }

    var blInfo = p.sched.baseline ?
      '<span class="tag-ok">Linha de base congelada em ' + fmtD((p.sched.baseline.when || '').slice(0, 10)) + ' · duração total ' + p.sched.baseline.total + 'd</span>' :
      '<span class="hint">Sem linha de base — registre após aprovar o cronograma para permitir análise de desvios.</span>';

    return card('Atividades do cronograma',
      emptyStateIf(!acts.length, 'Cadastre as atividades com durações e dependências para calcular caminho crítico e datas.', '+ Nova atividade', 'new-act') +
      (acts.length ?
        '<div class="gp-scrollx"><table class="gp-table wide">' + thRow(['Atividade', 'Duração', 'Depende de', 'Responsável', 'Início cedo', 'Folga', 'Status', 'Progresso']) +
        '<tbody>' + tableRows + '</tbody></table></div>' +
        '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-act">+ Nova atividade</button>' +
        '<button type="button" class="btn btn-soft" data-a="baseline-set">Congelar linha de base</button>' + blInfo + '</footer>' : '') +
      (c.cycle ? '<p class="warn">Dependência circular detectada na rede de atividades.</p>' : '')) +
      card('Diagrama de Gantt' + (acts.length && !c.cycle ? ' · duração total ' + c.total + ' dias' : ''),
        ganttRows || '<p class="hint">O Gantt aparece automaticamente após cadastrar atividades.</p>') +
      card('Como usar',
        '<ul class="gp-help"><li><strong>Folga zero</strong> indica atividade do <strong>caminho crítico</strong>: se atrasar, atrasa o projeto inteiro.</li>' +
        '<li>O <strong>início cedo (ES)</strong> resulta das dependências término-início.</li>' +
        '<li>Após aprovação, <strong>congele a linha de base</strong> — barras tracejadas mostram o plano original.</li>' +
        '<li>Marcos são eventos sem duração (duração 0), exibidos como losangos.</li></ul>');
  }

  function actForm(a, acts) {
    var editing = !!(a && a.id);
    a = a || {};
    openModal(editing ? 'Editar atividade' : 'Nova atividade',
      '<form class="gp-form" data-form="act">' +
      field('Atividade *', inp('nome', a.nome || '')) +
      '<div class="gp-form-row">' +
      field('Duração (dias, 0 = marco)', inp('dur', a.dur != null ? a.dur : 1, 'number', '', '1')) +
      field('Responsável', inp('resp', a.resp || '')) +
      '</div>' +
      field('Depende de (término → início)',
        '<div class="gp-checks">' +
        acts.filter(function (x) { return !editing || x.id !== a.id; }).map(function (x) {
          var chk = a.deps && a.deps.indexOf(x.id) !== -1 ? ' checked' : '';
          return '<label class="chk"><input type="checkbox" name="dep_' + x.id + '"' + chk + '> ' + esc(x.nome) + '</label>';
        }).join('') + '</div>') +
      '<div class="gp-form-row">' +
      field('Status de execução', sel('status', a.status || 'não iniciada', ST_LIST.map(function (s) { return s.k; }))) +
      field('Progresso (%)', inp('pct', a.pct != null ? a.pct : 0, 'number', '', '1')) +
      '</div>' +
      field('Marco do projeto', '<label class="chk"><input type="checkbox" name="marco"' + (a.marco ? ' checked' : '') + '> Este item é um marco (duração 0)</label>') +
      '</form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-act" data-id="' + (editing ? a.id : '') + '">Salvar</button>');
  }


  function mCustos(p) {
    var byType = {};
    p.costs.items.forEach(function (it) {
      var v = num(it.qtd, 0) * num(it.valUnit, 0);
      byType[it.tipo] = (byType[it.tipo] || 0) + v;
    });
    var base = baseCost(p);
    var reserva = base * num(p.costs.reservaPct, 0) / 100;
    var total = base + reserva;
    var bars = Object.keys(byType).map(function (t) {
      return '<div class="gp-cost-line"><span class="lbl">' + esc(t) + '</span>' +
        '<div class="gp-cost-track"><span style="width:' + (base ? byType[t] / base * 100 : 0) + '%"></span></div>' +
        '<em>' + money(byType[t]) + '</em></div>';
    }).join('');
    return card('Itens de custo estimados',
      '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Item', 'Categoria', 'Qtd.', 'Valor unitário', 'Subtotal']) + '<tbody>' +
      (p.costs.items.map(function (it) {
        return '<tr><td>' + esc(it.nome) + '</td><td>' + esc(it.tipo) + '</td><td>' + it.qtd + '</td><td>' + money(it.valUnit) + '</td><td>' + money(num(it.qtd, 0) * num(it.valUnit, 0)) + '</td>' + rowActions(it.id) + '</tr>';
      }).join('') || '<tr><td colspan="6" class="gp-tsempty">Nenhum item de custo.</td></tr>') +
      '</tbody></table></div>' +
      '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-cost">+ Novo item de custo</button></footer>') +
      '<div class="gp-grid-2">' +
      card('Reserva de contingência',
        '<form class="gp-form" data-form="reserva">' +
        field('% sobre a base de custos', inp('reservaPct', p.costs.reservaPct, 'number', '', '0.5')) +
        '<footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Aplicar</button></footer></form>') +
      card('Resumo orçamentário',
        '<dl class="gp-kv"><dt>Base estimada</dt><dd>' + money(base) + '</dd>' +
        '<dt>Reserva (' + num(p.costs.reservaPct, 0) + '%)</dt><dd>' + money(reserva) + '</dd>' +
        '<dt class="total">Orçamento total (BAC)</dt><dd class="total">' + money(total) + '</dd></dl>') +
      '</div>' +
      (base ? card('Distribuição por categoria', '<div class="gp-costs-viz">' + bars + '</div>') : '');
  }

  function costForm(c) {
    var editing = !!(c && c.id);
    openModal(editing ? 'Editar item de custo' : 'Novo item de custo',
      '<form class="gp-form" data-form="cost">' +
      field('Descrição *', inp('nome', editing ? c.nome : '')) +
      field('Categoria', sel('tipo', editing ? c.tipo : 'Serviço', ['RH', 'Material', 'Equipamento', 'Serviço', 'Software', 'Treinamento', 'Outros'])) +
      '<div class="gp-form-row">' +
      field('Quantidade', inp('qtd', editing ? c.qtd : 1, 'number', '', '1')) +
      field('Valor unitário (R$)', inp('valUnit', editing ? c.valUnit : 0, 'number', '', '0.01')) +
      '</div></form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-cost" data-id="' + (editing ? c.id : '') + '">Salvar</button>');
  }

  function mRecursos(p) {
    return card('Recursos humanos e materiais',
      '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Nome / Recurso', 'Função', 'Custo/hora', 'Atividades atribuídas']) + '<tbody>' +
      (p.res.map(function (r) {
        var acts = p.sched.acts.filter(function (a) { return a.resp === r.nome; }).map(function (a) { return esc(a.nome); });
        return '<tr><td>' + esc(r.nome) + '</td><td>' + esc(r.funcao) + '</td><td>' + money(r.custoH) + '</td><td class="small">' + (acts.join(', ') || '—') + '</td>' + rowActions(r.id) + '</tr>';
      }).join('') || '<tr><td colspan="5" class="gp-tsempty">Nenhum recurso cadastrado.</td></tr>') +
      '</tbody></table></div>' +
      '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-res">+ Novo recurso</button></footer>');
  }

  function resForm(r) {
    var editing = !!(r && r.id);
    openModal(editing ? 'Editar recurso' : 'Novo recurso',
      '<form class="gp-form" data-form="res">' +
      field('Nome *', inp('nome', editing ? r.nome : '')) +
      field('Função', inp('funcao', editing ? r.funcao : '')) +
      field('Custo por hora (R$)', inp('custoH', editing ? r.custoH : 0, 'number', '', '0.01')) +
      '</form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-res" data-id="' + (editing ? r.id : '') + '">Salvar</button>');
  }

  function mRaci(p) {
    var roles = p.raci.roles, cells = p.raci.cells;
    var acts = p.sched.acts;
    function cellSel(actId, ri) {
      var v = cells[actId + '_' + ri] || '';
      return '<select data-raci="' + actId + '_' + ri + '" aria-label="Papel na atividade">' +
        ['', 'R', 'A', 'C', 'I'].map(function (o) {
          return '<option value="' + o + '"' + (o === v ? ' selected' : '') + '>' + o + '</option>';
        }).join('') + '</select>';
    }
    var warn = [];
    acts.forEach(function (a) {
      var hasA = roles.some(function (_, ri) { return cells[a.id + '_' + ri] === 'A'; });
      if (!hasA) warn.push('<strong>' + esc(a.nome) + '</strong>: sem responsável pela aprovação (A)');
    });
    return card('Funções',
      '<form class="gp-form-inline" data-form="raci-role">' +
      inp('role', '', 'text', 'Nova função (ex.: Diretoria)') +
      '<button class="btn btn-soft" type="submit">Adicionar função</button></form>' +
      '<div class="gp-chips">' + roles.map(function (r, i) {
        return '<span class="chip">' + esc(r) + '<button type="button" class="gp-li-x" data-a="rm-role" data-i="' + i + '" aria-label="Remover função">&times;</button></span>';
      }).join('') + '</div>') +
      card('Matriz de responsabilidades',
        emptyStateIf(!acts.length, 'As linhas vêm das atividades do cronograma — cadastre atividades primeiro.', 'Ir ao Cronograma', 'goto-crono') +
        (acts.length ?
          '<div class="gp-scrollx"><table class="gp-table raci">' + thRow(['Atividade'].concat(roles)) + '<tbody>' +
          acts.map(function (a) {
            return '<tr><td>' + esc(a.nome) + '</td>' + roles.map(function (_, ri) {
              return '<td class="raci-cell">' + cellSel(a.id, ri) + '</td>';
            }).join('') + '</tr>';
          }).join('') + '</tbody></table></div>' +
          (warn.length ? '<p class="warn">Valide: ' + warn.join(' · ') + '</p>'
            : '<p class="hint">Cada atividade deve ter exatamente um A (aprova) e ao menos um R (executa).</p>') : '')) +
      card('Legenda',
        '<ul class="gp-help"><li><strong>R</strong> — Responsible: executa o trabalho</li>' +
        '<li><strong>A</strong> — Accountable: aprova e responde pelo resultado (um por atividade)</li>' +
        '<li><strong>C</strong> — Consultado: opina antes da decisão</li>' +
        '<li><strong>I</strong> — Informed: informado do resultado</li></ul>');
  }

  function mRiscos(p) {
    var heat = {};
    p.risks.forEach(function (r) {
      if (r.status === 'Encerrado') return;
      var k = r.prob + '_' + r.imp;
      heat[k] = (heat[k] || 0) + 1;
    });
    var probs = [5, 4, 3, 2, 1];
    var imps = [1, 2, 3, 4, 5];
    function cellCls(score) { return score >= 15 ? 'h-red' : (score >= 8 ? 'h-yellow' : 'h-green'); }
    var matrix = '<div class="gp-heatwrap"><table class="gp-heat">' +
      '<thead><tr><th scope="col"><span class="sr-only">Probabilidade × </span>Imp</th>' +
      imps.map(function (i) { return '<th scope="col">' + i + '</th>'; }).join('') + '</tr></thead><tbody>' +
      probs.map(function (pr) {
        return '<tr><th scope="row">' + pr + '</th>' + imps.map(function (im) {
          var n = heat[pr + '_' + im] || 0;
          return '<td class="' + cellCls(pr * im) + '">' + (n || '') + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
    return card('Registro de riscos (causa → evento → consequência)',
      '<div class="gp-scrollx"><table class="gp-table wide">' + thRow(['Risco', 'Prob', 'Imp', 'Severidade', 'Estratégia', 'Plano de resposta', 'Gatilho', 'Responsável', 'Status']) + '<tbody>' +
      (p.risks.map(function (r) {
        var sc = riskScore(r);
        var sevCls = sc >= 15 ? 'sev-red' : (sc >= 8 ? 'sev-yellow' : 'sev-green');
        return '<tr><td class="small"><strong>Causa:</strong> ' + esc(r.causa) + '<br><strong>Evento:</strong> ' + esc(r.evento) + '<br><strong>Consequência:</strong> ' + esc(r.consq) + '</td>' +
          '<td>' + r.prob + '</td><td>' + r.imp + '</td><td><span class="sev ' + sevCls + '">' + sc + '</span></td>' +
          '<td>' + esc(r.estrategia) + '</td><td class="small">' + esc(r.plano) + '</td><td class="small">' + esc(r.gatilho) + '</td><td>' + esc(r.responsavel) + '</td>' +
          '<td>' + esc(r.status) + '</td>' + rowActions(r.id) + '</tr>';
      }).join('') || '<tr><td colspan="10" class="gp-tsempty">Nenhum risco identificado.</td></tr>') +
      '</tbody></table></div>' +
      '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-risk">+ Identificar risco</button></footer>') +
      card('Matriz de calor Probabilidade × Impacto',
        '<p class="hint">Números indicam quantos riscos ativos caem em cada célula.</p>' + matrix +
        '<div class="gp-legend"><span class="lg h-green"></span> Baixa (1–7) <span class="lg h-yellow"></span> Moderada (8–14) <span class="lg h-red"></span> Crítica (15–25)</div>');
  }

  function riskForm(r) {
    var editing = !!(r && r.id);
    openModal(editing ? 'Editar risco' : 'Identificar risco',
      '<form class="gp-form" data-form="risk">' +
      field('Causa (condição existente)', ta('causa', editing ? r.causa : '', 'Ex.: fornecedor único…', 2)) +
      field('Evento (o que pode acontecer) *', ta('evento', editing ? r.evento : '', 'Ex.: atraso na entrega de matéria-prima…', 2)) +
      field('Consequência (efeito no projeto)', ta('consq', editing ? r.consq : '', 'Ex.: parada da linha e multa contratual…', 2)) +
      '<div class="gp-form-row">' +
      field('Probabilidade (1-5)', inp('prob', editing ? r.prob : 3, 'number', '', '1')) +
      field('Impacto (1-5)', inp('imp', editing ? r.imp : 3, 'number', '', '1')) +
      '</div><div class="gp-form-row">' +
      field('Estratégia de resposta', sel('estrategia', editing ? r.estrategia : 'Mitigar', ['Mitigar', 'Transferir', 'Evitar', 'Aceitar', 'Explorar'])) +
      field('Status', sel('status', editing ? r.status : 'Aberto', ['Aberto', 'Em tratamento', 'Encerrado'])) +
      '</div>' +
      field('Plano de resposta', ta('plano', editing ? r.plano : '', 'Ações concretas…', 2)) +
      '<div class="gp-form-row">' +
      field('Gatilho (sinal de alerta)', inp('gatilho', editing ? r.gatilho : '')) +
      field('Responsável', inp('responsavel', editing ? r.responsavel : '')) +
      '</div></form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-risk" data-id="' + (editing ? r.id : '') + '">Salvar</button>');
  }

  function mQualidade(p) {
    var q = p.qual;
    return card('Padrões de qualidade',
      '<form class="gp-form" data-form="qual-pad">' +
      ta('padroes', q.padroes, 'Normas aplicáveis (ISO 9001, ABNT…), políticas internas, requisitos regulatórios…', 3) +
      '<footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Salvar</button></footer></form>') +
      '<div class="gp-grid-2">' +
      card('Indicadores (KPIs)',
        '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Indicador', 'Meta', 'Como medir']) + '<tbody>' +
        (q.indicadores.map(function (i) {
          return '<tr><td>' + esc(i.kpi) + '</td><td>' + esc(i.meta) + '</td><td class="small">' + esc(i.medida) + '</td>' + rowActions(i.id) + '</tr>';
        }).join('') || '<tr><td colspan="4" class="gp-tsempty">Sem indicadores.</td></tr>') +
        '</tbody></table></div>' +
        '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-kpi">+ Novo KPI</button></footer>') +
      card('Inspeções / Auditorias',
        '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Item inspecionado', 'Data', 'Responsável', 'Resultado']) + '<tbody>' +
        (q.inspecoes.map(function (i) {
          return '<tr><td>' + esc(i.item) + '</td><td>' + fmtD(i.data) + '</td><td>' + esc(i.responsavel) + '</td><td>' + esc(i.result) + '</td>' + rowActions(i.id) + '</tr>';
        }).join('') || '<tr><td colspan="5" class="gp-tsempty">Sem inspeções.</td></tr>') +
        '</tbody></table></div>' +
        '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-insp">+ Registrar inspeção</button></footer>') +
      '</div>' +
      card('Não conformidades e ações corretivas',
        '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Descrição da NC', 'Severidade', 'Ação corretiva', 'Responsável', 'Status']) + '<tbody>' +
        (q.ncs.map(function (n) {
          var cls = n.severidade === 'Alta' ? 'sev-red' : (n.severidade === 'Média' ? 'sev-yellow' : 'sev-green');
          return '<tr><td>' + esc(n.desc) + '</td><td><span class="sev ' + cls + '">' + esc(n.severidade) + '</span></td><td class="small">' + esc(n.acao) + '</td><td>' + esc(n.responsavel) + '</td><td>' + esc(n.status) + '</td>' + rowActions(n.id) + '</tr>';
        }).join('') || '<tr><td colspan="6" class="gp-tsempty">Sem não conformidades registradas.</td></tr>') +
        '</tbody></table></div>' +
        '<footer class="gp-card-foot"><button type="button" class="btn btn-danger-outline" data-a="new-nc">+ Registrar NC</button></footer>');
  }

  function kpiForm(k) {
    var editing = !!(k && k.id);
    openModal(editing ? 'Editar KPI' : 'Novo KPI',
      '<form class="gp-form" data-form="kpi">' +
      field('Indicador *', inp('kpi', editing ? k.kpi : '')) +
      field('Meta', inp('meta', editing ? k.meta : '', 'text', 'Ex.: ≥ 98% no prazo')) +
      field('Fonte de medição', ta('medida', editing ? k.medida : '', '', 2)) +
      '</form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-kpi" data-id="' + (editing ? k.id : '') + '">Salvar</button>');
  }

  function inspForm(i) {
    var editing = !!(i && i.id);
    openModal(editing ? 'Editar inspeção' : 'Registrar inspeção',
      '<form class="gp-form" data-form="insp">' +
      field('Item inspecionado *', inp('item', editing ? i.item : '')) +
      '<div class="gp-form-row">' +
      field('Data', inp('data', editing ? i.data : today(), 'date')) +
      field('Resultado', sel('result', editing ? i.result : 'Conforme', ['Conforme', 'Não conforme', 'Condicional'])) +
      '</div>' +
      field('Responsável', inp('responsavel', editing ? i.responsavel : '')) +
      '</form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-insp" data-id="' + (editing ? i.id : '') + '">Salvar</button>');
  }

  function ncForm(n) {
    var editing = !!(n && n.id);
    openModal(editing ? 'Editar NC' : 'Registrar não conformidade',
      '<form class="gp-form" data-form="nc">' +
      field('Descrição da não conformidade *', ta('desc', editing ? n.desc : '', '', 2)) +
      '<div class="gp-form-row">' +
      field('Severidade', sel('severidade', editing ? n.severidade : 'Baixa', ['Baixa', 'Média', 'Alta'])) +
      field('Status', sel('status', editing ? n.status : 'Aberta', ['Aberta', 'Em tratamento', 'Tratada'])) +
      '</div>' +
      field('Ação corretiva', ta('acao', editing ? n.acao : '', '', 2)) +
      field('Responsável', inp('responsavel', editing ? n.responsavel : '')) +
      '</form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-nc" data-id="' + (editing ? n.id : '') + '">Salvar</button>');
  }

  function mComunicacao(p) {
    return card('Plano de gerenciamento das comunicações',
      '<div class="gp-scrollx"><table class="gp-table">' + thRow(['O quê', 'Para quem', 'Quando / Frequência', 'Meio', 'Responsável']) + '<tbody>' +
      (p.comms.map(function (c) {
        return '<tr><td>' + esc(c.oque) + '</td><td>' + esc(c.quem) + '</td><td>' + esc(c.quando) + '</td><td>' + esc(c.como) + '</td><td>' + esc(c.responsavel) + '</td>' + rowActions(c.id) + '</tr>';
      }).join('') || '<tr><td colspan="6" class="gp-tsempty">Nenhuma comunicação planejada.</td></tr>') +
      '</tbody></table></div>' +
      '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-comm">+ Planejar comunicação</button></footer>');
  }

  function commForm(c) {
    var editing = !!(c && c.id);
    openModal(editing ? 'Editar comunicação' : 'Planejar comunicação',
      '<form class="gp-form" data-form="comm">' +
      field('O quê (informação/artefato) *', inp('oque', editing ? c.oque : '', 'Ex.: Relatório semanal de status')) +
      field('Para quem', inp('quem', editing ? c.quem : '', 'Ex.: Patrocinador, equipe')) +
      field('Quando / frequência', inp('quando', editing ? c.quando : '', 'Ex.: toda sexta, 17h')) +
      '<div class="gp-form-row">' +
      field('Meio', sel('como', editing ? c.como : 'E-mail', ['E-mail', 'Reunião', 'Dashboard', 'Relatório', 'Mensagem instantânea', 'Documento compartilhado'])) +
      field('Responsável', inp('responsavel', editing ? c.responsavel : '')) +
      '</div></form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-comm" data-id="' + (editing ? c.id : '') + '">Salvar</button>');
  }

  function mAquisicoes(p) {
    return card('Necessidades de aquisição',
      '<div class="gp-scrollx"><table class="gp-table wide">' + thRow(['O quê', 'Critério de seleção', 'Cotações (3)', 'Escolhido', 'SLA / Prazo', 'Situação', 'Avaliação do fornecedor']) + '<tbody>' +
      (p.proc.items.map(function (i) {
        var cot = (i.valores || []).filter(function (v) { return v > 0; }).map(money).join(' · ');
        var vals = (i.valores || []).filter(function (v) { return v > 0; });
        var melhor = vals.length ? Math.min.apply(null, vals) : NaN;
        return '<tr><td>' + esc(i.oque) + '</td><td class="small">' + esc(i.crit) + '</td>' +
          '<td class="small">' + (cot || '—') + '</td><td><strong>' + esc(i.fornec || '—') + '</strong><br><span class="small">' + (isFinite(melhor) ? money(melhor) : '') + '</span></td>' +
          '<td>' + esc(i.sla) + '</td><td>' + esc(i.status) + '</td><td class="small">' + esc(i.avaliacao || '—') + '</td>' + rowActions(i.id) + '</tr>';
      }).join('') || '<tr><td colspan="8" class="gp-tsempty">Nenhuma aquisição planejada.</td></tr>') +
      '</tbody></table></div>' +
      '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-proc">+ Nova aquisição</button></footer>');
  }

  function procForm(i) {
    var editing = !!(i && i.id);
    var vals = (i && i.valores) || [0, 0, 0];
    openModal(editing ? 'Editar aquisição' : 'Nova aquisição',
      '<form class="gp-form" data-form="proc">' +
      field('Produto/serviço a adquirir *', inp('oque', editing ? i.oque : '')) +
      field('Critérios de seleção do fornecedor', ta('crit', editing ? i.crit : '', 'Preço, prazo, referências, garantia…', 2)) +
      '<div class="gp-form-row gp-row-3">' +
      field('Cotação 1 (R$)', inp('v1', vals[0] || 0, 'number', '', '0.01')) +
      field('Cotação 2 (R$)', inp('v2', vals[1] || 0, 'number', '', '0.01')) +
      field('Cotação 3 (R$)', inp('v3', vals[2] || 0, 'number', '', '0.01')) +
      '</div><div class="gp-form-row">' +
      field('Fornecedor escolhido', inp('fornec', editing ? i.fornec : '')) +
      field('SLA / Prazo de entrega', inp('sla', editing ? i.sla : '')) +
      '</div><div class="gp-form-row">' +
      field('Situação', sel('status', editing ? i.status : 'Planejado', ['Planejado', 'Em cotação', 'Contratado', 'Entregue', 'Cancelado'])) +
      field('Avaliação do fornecedor (pós-entrega)', inp('avaliacao', editing ? i.avaliacao : '', 'text', 'Ex.: excelente pontualidade')) +
      '</div></form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-proc" data-id="' + (editing ? i.id : '') + '">Salvar</button>');
  }


  function mExecucao(p) {
    var acts = p.sched.acts;
    var cols = ST_LIST.map(function (st) {
      var col = acts.filter(function (a) { return a.status === st.k; });
      var cards = col.map(function (a) {
        var moves = ST_LIST.filter(function (x) { return x.k !== a.status; }).map(function (x) {
          return '<button type="button" class="mini" data-a="move-act" data-id="' + a.id + '" data-to="' + x.k + '" title="Mover para ' + esc(x.l) + '">' + esc(x.s) + '</button>';
        }).join('');
        var editBtn = '<button type="button" class="mini edit" data-a="edit" data-id="' + a.id + '" title="Editar atividade">Editar</button>';
        return '<article class="gp-kanban-card"><strong>' + esc(a.nome) + '</strong>' +
          '<span class="small">' + a.dur + 'd · ' + esc(a.resp || '—') + '</span>' +
          pctBar(actProgress(a)) +
          '<div class="kan-move">' + moves + editBtn + '</div></article>';
      }).join('');
      return '<section class="gp-kanban-col st-' + st.cls + '"><header><h5>' + st.l + '</h5><span class="cnt">' + col.length + '</span></header>' + cards + '</section>';
    }).join('');
    var doneCount = acts.filter(function (a) { return a.status === 'concluida'; }).length;
    return card('Quadro de execução',
      emptyStateIf(!acts.length, 'O quadro usa as atividades do cronograma. Cadastre atividades para acompanhar a execução.', 'Ir ao Cronograma', 'goto-crono') +
      (acts.length ?
        '<p class="hint">Mova as atividades entre as colunas conforme o andamento real. Concluídas: ' + doneCount + '/' + acts.length + '.</p>' +
        '<div class="gp-kanban">' + cols + '</div>' : ''));
  }

  function mControle(p) {
    var e = evmCalc(p);
    function kv(dt, dd, cls) { return '<dt' + (cls ? ' class="' + cls + '"' : '') + '>' + dt + '</dt><dd' + (cls ? ' class="' + cls + '"' : '') + '>' + dd + '</dd>'; }
    function f2(x) { return isNaN(x) ? '—' : x.toFixed(2); }
    function fm(x) { return isNaN(x) ? '—' : money(x); }
    var cpiCls = isNaN(e.cpi) ? '' : (e.cpi < 0.95 ? 'bad' : (e.cpi < 1 ? 'warn' : 'good'));
    var spiCls = isNaN(e.spi) ? '' : (e.spi < 0.95 ? 'bad' : (e.spi < 1 ? 'warn' : 'good'));
    return card('Gerenciamento do valor agregado (EVM)',
      '<form class="gp-form" data-form="evm"><div class="gp-form-row gp-row-3">' +
      field('Valor planejado — PV (R$)', inp('pv', p.evm.pv, 'number', '', '0.01')) +
      field('Valor agregado — EV (R$)', inp('ev', p.evm.ev, 'number', '', '0.01')) +
      field('Custo real — AC (R$)', inp('ac', p.evm.ac, 'number', '', '0.01')) +
      '</div><footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Calcular indicadores</button></footer></form>' +
      '<dl class="gp-kv evm">' +
      kv('BAC (orçamento no término)', money(e.bac)) +
      kv('CV (variação de custo)', money(e.cv), e.cv < 0 ? 'bad' : '') +
      kv('SV (variação de prazo)', money(e.sv), e.sv < 0 ? 'bad' : '') +
      kv('CPI (desempenho de custo)', f2(e.cpi), cpiCls) +
      kv('SPI (desempenho de prazo)', f2(e.spi), spiCls) +
      kv('EAC (estimativa no término)', fm(e.eac)) +
      kv('ETC (a completar)', fm(e.etc)) +
      kv('VAC (variação no término)', fm(e.vac), (!isNaN(e.vac) && e.vac < 0) ? 'bad' : '') +
      '</dl>' +
      '<p class="hint">CPI &lt; 1 → gastando mais que o planejado. SPI &lt; 1 → atrasado em relação ao plano.</p>') +
      '<div class="gp-grid-2">' +
      card('Solicitações de mudança',
        '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Mudança', 'Motivo', 'Impacto', 'Status']) + '<tbody>' +
        (p.chg.map(function (c) {
          var cls = c.status === 'Aprovada' ? 'tag-ok' : (c.status === 'Rejeitada' ? 'tag-no' : '');
          return '<tr><td>' + esc(c.titulo) + '</td><td class="small">' + esc(c.motivo) + '</td><td class="small">' + esc(c.impactos) + '</td><td><span class="' + cls + '">' + esc(c.status) + '</span></td>' + rowActions(c.id) + '</tr>';
        }).join('') || '<tr><td colspan="5" class="gp-tsempty">Nenhuma mudança solicitada.</td></tr>') +
        '</tbody></table></div>' +
        '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="new-chg">+ Solicitar mudança</button>' +
        (p.sched.baseline ? '<button type="button" class="btn btn-soft" data-a="replan-baseline">Substituir linha de base</button>' : '') + '</footer>') +
      card('Fluxo de controle integrado de mudanças',
        '<ol class="gp-flow"><li><strong>Solicitação</strong> registrada pelo solicitante</li>' +
        '<li><strong>Análise de impactos</strong> (escopo, prazo, custo, qualidade)</li>' +
        '<li><strong>Decisão do CCB / patrocinador</strong>: aprovar ou rejeitar</li>' +
        '<li><strong>Implementação</strong> e atualização dos planos</li>' +
        '<li><strong>Nova linha de base</strong> quando acumular mudanças relevantes</li></ol>') +
      '</div>';
  }

  function chgForm(c) {
    var editing = !!(c && c.id);
    openModal(editing ? 'Editar mudança' : 'Solicitar mudança',
      '<form class="gp-form" data-form="chg">' +
      field('Título da mudança *', inp('titulo', editing ? c.titulo : '')) +
      field('Descrição', ta('desc', editing ? c.desc : '', '', 2)) +
      field('Motivo / justificativa', ta('motivo', editing ? c.motivo : '', '', 2)) +
      field('Impactos avaliados (custo, prazo, escopo, qualidade)', ta('impactos', editing ? c.impactos : '', '', 2)) +
      '<div class="gp-form-row">' +
      field('Status', sel('status', editing ? c.status : 'Solicitada', ['Solicitada', 'Em análise', 'Aprovada', 'Rejeitada', 'Implementada'])) +
      field('Data da decisão', inp('data', editing ? c.data : '', 'date')) +
      '</div></form>',
      '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-a="save-chg" data-id="' + (editing ? c.id : '') + '">Salvar</button>');
  }

  function mDashboard(p) {
    var h = health(p);
    var prog = projectProgress(p);
    var e = evmCalc(p);
    var steps = nextSteps(p);
    var topRisks = p.risks.filter(function (r) { return r.status !== 'Encerrado'; })
      .sort(function (a, b) { return riskScore(b) - riskScore(a); }).slice(0, 5);
    var lateActs = p.sched.acts.filter(function (a) { return a.status === 'atrasada' || a.status === 'bloqueada'; });
    var entsDone = p.scope.entregaveis.filter(function (x) { return num(x.pct, 0) >= 100; }).length;

    var dots = h.map(function (x) {
      var icon = x.s === 'g' ? '&#10003;' : (x.s === 'y' ? '!' : '&times;');
      var word = x.s === 'g' ? 'OK' : (x.s === 'y' ? 'atenção' : 'crítico');
      return '<div class="gp-health-item"><span class="dot ' + x.s + '" aria-hidden="true">' + icon + '</span>' +
        '<div><strong>' + esc(x.k) + ': ' + word + '</strong><span class="small">' + esc(x.info) + '</span></div></div>';
    }).join('');

    var kpis = [
      { l: 'Progresso físico', v: prog + '%', sub: 'ponderado pela duração', bar: prog },
      { l: 'Entregáveis concluídos', v: entsDone + '/' + p.scope.entregaveis.length, sub: 'com aceite definido', bar: p.scope.entregaveis.length ? Math.round(entsDone / p.scope.entregaveis.length * 100) : 0 },
      { l: 'Orçamento (BAC)', v: money(e.bac), sub: 'custo real AC: ' + money(e.ac), bar: e.bac ? Math.min(100, Math.round(e.ac / e.bac * 100)) : 0 },
      { l: 'Riscos críticos', v: String(topRisks.filter(function (r) { return riskScore(r) >= 15; }).length), sub: 'score ≥ 15 ativos', bar: 0 },
      { l: 'Atividades em alerta', v: String(lateActs.length), sub: 'atrasadas ou bloqueadas', bar: 0 },
      { l: 'NCs abertas', v: String(p.qual.ncs.filter(function (n) { return n.status !== 'Tratada'; }).length), sub: 'qualidade sob controle?', bar: 0 }
    ];

    return card('Saúde do projeto — semáforos automáticos', '<div class="gp-health">' + dots + '</div>') +
      '<div class="gp-kpis">' + kpis.map(function (k) {
        return '<article class="gp-kpi"><h5>' + esc(k.l) + '</h5><strong>' + esc(k.v) + '</strong>' +
          (k.bar ? '<div class="gp-pctbar slim"><span style="width:' + k.bar + '%"></span></div>' : '') +
          '<span class="small">' + esc(k.sub) + '</span></article>';
      }).join('') + '</div>' +
      '<div class="gp-grid-2">' +
      card('Assistente — próximos passos sugeridos',
        (steps.length ?
          '<ol class="gp-steps">' + steps.map(function (s) {
            return '<li><button type="button" class="linklike" data-a="goto-mod" data-mod="' + s[0] + '">' + esc(s[1]) + '</button></li>';
          }).join('') + '</ol><p class="hint">O motor identifica automaticamente os instrumentos ainda pendentes conforme o PMBOK.</p>'
          : '<p class="hint">Projeto bem estruturado — todos os instrumentos principais estão preenchidos.</p>')) +
      card('Top riscos ativos',
        (topRisks.length ?
          '<ul class="gp-toprisks">' + topRisks.map(function (r) {
            var sc = riskScore(r);
            var cls = sc >= 15 ? 'sev-red' : (sc >= 8 ? 'sev-yellow' : 'sev-green');
            return '<li><span class="sev ' + cls + '">' + sc + '</span> ' + esc(r.evento) + ' <em>(' + esc(r.estrategia) + ')</em></li>';
          }).join('') + '</ul>'
          : '<p class="hint">Nenhum risco registrado.</p>')) +
      '</div>' +
      (p.chg.length ?
        card('Últimas mudanças', '<ul class="gp-toprisks">' + p.chg.slice(-5).reverse().map(function (c) {
          return '<li><span class="chip">' + esc(c.status) + '</span> ' + esc(c.titulo) + '</li>';
        }).join('') + '</ul>') : '');
  }

  function mEncerramento(p) {
    var CK = [
      ['aceite', 'Aceite formal do cliente/patrocinador obtido'],
      ['livros', 'Lições aprendidas registradas'],
      ['recurso', 'Recursos da equipe liberados/realocados'],
      ['contratos', 'Contratos e aquisições encerrados'],
      ['financeiro', 'Fechamento financeiro concluído'],
      ['arquivo', 'Documentação arquivada']
    ];
    var allDone = CK.every(function (c) { return p.closing.checklist[c[0]]; });
    return card('Checklist de encerramento',
      '<ul class="gp-checklist">' + CK.map(function (c) {
        return '<li><label class="chk big"><input type="checkbox" data-a="ck-close" data-key="' + c[0] + '"' + (p.closing.checklist[c[0]] ? ' checked' : '') + '> ' + esc(c[1]) + '</label></li>';
      }).join('') + '</ul>' +
      (allDone && p.status !== 'encerrado' ? '<footer class="gp-card-foot"><button type="button" class="btn btn-primary" data-a="close-project">Encerrar projeto oficialmente</button></footer>' : '') +
      (p.status === 'encerrado' ? '<p class="tag-ok big-tag">Projeto encerrado &#10003;</p>' : '')) +
      '<div class="gp-grid-2">' +
      card('Aceite final',
        '<form class="gp-form" data-form="closing">' +
        field('Data do aceite', inp('dataAceite', p.closing.dataAceite, 'date')) +
        field('Observações do aceite / relatório final', ta('relatorio', p.closing.relatorio, 'Resultados alcançados, pendências transferidas para operação…', 4)) +
        '<footer class="gp-form-foot"><button class="btn btn-primary" type="submit">Salvar</button></footer></form>') +
      card('Lições aprendidas',
        '<div class="gp-scrollx"><table class="gp-table">' + thRow(['Lição', 'Tipo']) + '<tbody>' +
        (p.lessons.map(function (l) {
          return '<tr><td>' + esc(l.texto) + '</td><td>' + esc(l.tipo) + '</td>' + rowActions(l.id) + '</tr>';
        }).join('') || '<tr><td colspan="3" class="gp-tsempty">Registre o que funcionou bem e o que melhorar.</td></tr>') +
        '</tbody></table></div>' +
        '<form class="gp-form-inline" data-form="lesson">' +
        inp('texto', '', 'text', 'Ex.: envolver manutenção desde o início evitou retrabalho') +
        sel('tipo', 'Ponto forte', ['Ponto forte', 'Ponto de melhoria']) +
        '<button class="btn btn-soft" type="submit">Registrar</button></form>') +
      '</div>' +
      '<footer class="gp-exportbar"><span>Relatórios consolidados</span>' +
      '<button type="button" class="btn btn-soft" data-a="export-plano-doc">Plano completo (.doc)</button>' +
      '<button type="button" class="btn btn-ghost" data-a="print-final">Relatório final (imprimir)</button>' +
'<button type="button" class="btn btn-soft" data-a="pdf-final">Relatório final (PDF)</button></footer>';
  }


  function mdTable(headers, rows) {
    if (!rows.length) return '_Nenhum registro._';
    return '| ' + headers.join(' | ') + ' |\n| ' + headers.map(function () { return '---'; }).join(' | ') + ' |\n' +
      rows.map(function (r) { return '| ' + r.join(' | ') + ' |'; }).join('\n') + '\n';
  }

  function exportTapMd(p) {
    var t = p.tap;
    var L = ['# Termo de Abertura do Projeto — ' + p.name, '',
      '- **Patrocinador:** ' + (p.sponsor || '—'),
      '- **Gerente de projeto:** ' + (p.manager || '—'),
      '- **Orçamento preliminar:** ' + (p.budgetPrelim ? money(p.budgetPrelim) : '—'),
      '- **Prazo preliminar:** ' + fmtD(p.deadlinePrelim), '',
      '## 1. Justificativa', t.justificativa || '—', '',
      '## 2. Objetivo', t.objetivo || '—', '',
      '## 3. Escopo em alto nível', t.escopoResumo || '—', '',
      '## 4. Premissas', t.premissas.map(function (x) { return '- ' + x; }).join('\n') || '—', '',
      '## 5. Restrições', t.restricoes.map(function (x) { return '- ' + x; }).join('\n') || '—', '',
      '## 6. Marcos', mdTable(['Marco', 'Data'], t.marcos.map(function (m) { return [m.nome, fmtD(m.data)]; })),
      '## 7. Partes interessadas (alto nível)', t.partes.map(function (x) { return '- ' + x; }).join('\n') || '—', '',
      '## 8. Riscos de alto nível', t.riscosAltos || '—', '',
      '## 9. Aprovação', 'Aprovado por **' + (t.aprovador || '—') + '** em ' + fmtD(t.dataAprov) + '.'];
    downloadFile(slug(p.name) + '-tap.md', L.join('\n\n'));
    toast('TAP exportado (.md)');
  }

  function secH(t) { return '<h2>' + esc(t) + '</h2>'; }

  function htmlToText(html) {
    var d = document.createElement('div');
    d.innerHTML = html;
    var out = [];
    function ct(el) { return (el.textContent || '').replace(/\s+/g, ' ').trim(); }
    Array.prototype.forEach.call(d.children, function (el) {
      var tag = el.tagName;
      if (tag === 'TABLE') {
        Array.prototype.forEach.call(el.querySelectorAll('tr'), function (tr) {
          var cells = Array.prototype.map.call(tr.children, ct);
          if (cells.some(function (c) { return c; })) out.push(cells.join(' | '));
        });
        out.push('');
      } else if (/^H[1-3]$/.test(tag)) {
        var t = ct(el);
        out.push('', t.toUpperCase(), new Array(Math.min(64, t.length + 1)).join('='), '');
      } else if (tag === 'UL') {
        Array.prototype.forEach.call(el.children, function (li) { if (li.tagName === 'LI') out.push('  - ' + ct(li)); });
        out.push('');
      } else if (tag === 'P') {
        out.push(ct(el), '');
      }
    });
    return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  function docWrap(title, bodyHtml) {
    return '<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="UTF-8"><title>' + title + '</title>' +
      '<style>body{font-family:Georgia,serif;font-size:11pt;line-height:1.5;color:#111}h1{font-size:20pt;border-bottom:2px solid #222;padding-bottom:6pt}' +
      'h2{font-family:Arial,sans-serif;font-size:13pt;color:#003355;margin:16pt 0 6pt}h3{font-family:Arial,sans-serif;font-size:11.5pt;margin:10pt 0 4pt}' +
      'table{border-collapse:collapse;width:100%;margin:8pt 0;font-family:Arial,sans-serif;font-size:9.5pt}' +
      'td,th{border:1px solid #888;padding:4pt 6pt;text-align:left;vertical-align:top}th{background:#ececec;font-weight:bold}' +
      '@page{size:A4;margin:2cm}</style></head><body><h1>' + title + '</h1>' +
      '<p style="color:#666">Gerett — Engenharia de Produção · gerado em ' + fmtD(today()) + '</p>' + bodyHtml + '</body></html>';
  }

  function pdfTable(head, rows) {
    if (!rows.length) return '<table><tr>' + head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr><tr><td colspan="' + head.length + '">— sem registros —</td></tr></table>';
    return '<table><tr>' + head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>';
  }

  function buildPlanHtml(p) {
    var c = cpm(p.sched.acts);
    var e = evmCalc(p);
    var H = '<p>Patrocinador: ' + esc(p.sponsor || '—') + ' · Gerente: ' + esc(p.manager || '—') + ' · Status: ' + esc(p.status) + '</p>';
    H += secH('TAP');
    H += '<ul><li><b>Objetivo:</b> ' + esc(p.tap.objetivo || '-') + '</li>' +
      '<li><b>Justificativa:</b> ' + esc(p.tap.justificativa || '-') + '</li>' +
      '<li><b>Premissas:</b> ' + esc((p.tap.premissas || []).join('; ') || '-') + '</li>' +
      '<li><b>Restrições:</b> ' + esc((p.tap.restricoes || []).join('; ') || '-') + '</li></ul>';
    var swotNames = { f: 'Forças', d: 'Fraquezas', o: 'Oportunidades', a: 'Ameaças' };
    H += secH('Diagnóstico SWOT') + '<ul>';
    ['f', 'd', 'o', 'a'].forEach(function (k) {
      H += '<li><b>' + swotNames[k] + ':</b> ' + esc((p.amb.swot[k] || []).join('; ') || '-') + '</li>';
    });
    H += '</ul>';
    H += secH('Stakeholders') + pdfTable(['Nome', 'Papel', 'Interesse', 'Influência', 'Estratégia'],
      p.stkh.map(function (s) { return [esc(s.nome), esc(s.papel), esc(String(s.interesse)), esc(String(s.influencia)), esc(s.quad)]; }));
    H += secH('Escopo') + '<p>' + esc(p.scope.declaracao || '-') + '</p>';
    H += '<h3>Requisitos</h3>' + pdfTable(['Descrição', 'Tipo'], p.scope.requisitos.map(function (r) { return [esc(r.desc), esc(r.tipo)]; }));
    H += '<h3>Entregáveis</h3>' + pdfTable(['Entregável', 'Critério de aceite', '%'],
      p.scope.entregaveis.map(function (x) { return [esc(x.nome), esc(x.crit), num(x.pct, 0) + '%']; }));
    H += secH('EAP') + '<ul>' + (p.eap.length ? p.eap.map(function (x) {
      return '<li style="margin-left:' + ((x.lvl - 1) * 20) + 'px">' + esc(x.label) + ' <small>(nível ' + x.lvl + ')</small></li>';
    }).join('') : '<li>—</li>') + '</ul>';
    H += secH('Cronograma (CPM)') + pdfTable(['Atividade', 'Dur.', 'Dependências', 'Resp.', 'ES', 'Folga', 'Status'],
      p.sched.acts.map(function (a) {
        var cc = c.calc[a.id] || { es: '-', slack: '-' };
        var deps = (a.deps || []).map(function (d) {
          var f = null;
          p.sched.acts.forEach(function (x) { if (x.id === d) f = x; });
          return f ? f.nome : '?';
        }).join(', ');
        return [esc(a.nome) + (a.marco ? ' ◆' : ''), a.dur + 'd', esc(deps || '-'), esc(a.resp || '-'), String(cc.es), cc.slack === 0 ? '<b>CRÍTICO</b>' : String(cc.slack), esc(a.status)];
      }));
    H += '<p><b>Duração total (caminho crítico): ' + c.total + ' dias</b>' +
      (p.sched.baseline ? ' · linha de base congelada em ' + fmtD((p.sched.baseline.when || '').slice(0, 10)) : '') + '</p>';
    var base = baseCost(p);
    H += secH('Orçamento') + pdfTable(['Item', 'Cat.', 'Qtd', 'V. unit.', 'Subtotal'],
      p.costs.items.map(function (it) { return [esc(it.nome), esc(it.tipo), String(it.qtd), money(it.valUnit), money(num(it.qtd, 0) * num(it.valUnit, 0))]; }));
    H += '<p>Base: ' + money(base) + ' · Reserva (' + esc(String(p.costs.reservaPct)) + '%): ' + money(base * num(p.costs.reservaPct, 0) / 100) + ' · <b>BAC: ' + money(bac(p)) + '</b></p>';
    H += secH('Recursos') + pdfTable(['Recurso', 'Função', 'Custo/h'],
      p.res.map(function (r) { return [esc(r.nome), esc(r.funcao), money(r.custoH)]; }));
    H += secH('Riscos') + pdfTable(['Risco (evento)', 'P', 'I', 'Score', 'Estratégia', 'Plano', 'Resp.', 'Status'],
      p.risks.map(function (r) { return [esc(r.evento), String(r.prob), String(r.imp), String(riskScore(r)), esc(r.estrategia), esc(r.plano), esc(r.responsavel), esc(r.status)]; }));
    H += secH('Qualidade') + '<p><b>Padrões:</b> ' + esc(p.qual.padroes || '-') + '</p>';
    H += pdfTable(['KPI', 'Meta', 'Medição'], p.qual.indicadores.map(function (iq) { return [esc(iq.kpi), esc(iq.meta), esc(iq.medida)]; }));
    H += pdfTable(['NC', 'Severidade', 'Ação', 'Status'], p.qual.ncs.map(function (n) { return [esc(n.desc), esc(n.severidade), esc(n.acao), esc(n.status)]; }));
    H += secH('Comunicações') + pdfTable(['O quê', 'Quem', 'Quando', 'Meio', 'Resp.'],
      p.comms.map(function (cm) { return [esc(cm.oque), esc(cm.quem), esc(cm.quando), esc(cm.como), esc(cm.responsavel)]; }));
    H += secH('Aquisições') + pdfTable(['Item', 'Fornecedor', 'Valor escolhido', 'SLA', 'Situação'],
      p.proc.items.map(function (ip) {
        var vals = (ip.valores || []).filter(function (v) { return v > 0; });
        var melhor = vals.length ? Math.min.apply(null, vals) : NaN;
        return [esc(ip.oque), esc(ip.fornec || '-'), isFinite(melhor) ? money(melhor) : '-', esc(ip.sla), esc(ip.status)];
      }));
    H += secH('Controle (EVM)');
    H += '<ul><li>PV: ' + money(e.pv) + ' · EV: ' + money(e.ev) + ' · AC: ' + money(e.ac) + '</li>' +
      '<li>CPI: ' + (isNaN(e.cpi) ? '—' : e.cpi.toFixed(2)) + ' · SPI: ' + (isNaN(e.spi) ? '—' : e.spi.toFixed(2)) + '</li>' +
      '<li>EAC: ' + (isNaN(e.eac) ? '—' : money(e.eac)) + ' · VAC: ' + (isNaN(e.vac) ? '—' : money(e.vac)) + '</li></ul>';
    H += secH('Mudanças') + pdfTable(['Título', 'Impactos', 'Status'],
      p.chg.map(function (ch) { return [esc(ch.titulo), esc(ch.impactos), esc(ch.status)]; }));
    H += secH('Lições aprendidas') + '<ul>' + (p.lessons.length ?
      p.lessons.map(function (l) { return '<li>[' + esc(l.tipo) + '] ' + esc(l.texto) + '</li>'; }).join('') : '<li>—</li>') + '</ul>';
    return H;
  }

  function finalBodyHtml(p) {
    var hh = health(p);
    var e2 = evmCalc(p);
    return '<h2>Situação</h2><p>Status: ' + esc(p.status) + ' · Progresso: ' + projectProgress(p) + '%</p>' +
      '<h2>Saúde</h2><ul>' + hh.map(function (x) { return '<li><b>' + esc(x.k) + ':</b> ' + esc(x.info) + '</li>'; }).join('') + '</ul>' +
      '<h2>Entregáveis</h2>' + pdfTable(['Entregável', '%'], p.scope.entregaveis.map(function (x) { return [esc(x.nome), num(x.pct, 0) + '%']; })) +
      '<h2>Desempenho (EVM)</h2><p>BAC ' + money(e2.bac) + ' · CPI ' + (isNaN(e2.cpi) ? '—' : e2.cpi.toFixed(2)) + ' · SPI ' + (isNaN(e2.spi) ? '—' : e2.spi.toFixed(2)) + '</p>' +
      '<h2>Riscos</h2><ul>' + (p.risks.length ? p.risks.map(function (r) { return '<li>' + esc(r.evento) + ' — ' + esc(r.status) + '</li>'; }).join('') : '<li>—</li>') + '</ul>' +
      '<h2>Lições aprendidas</h2><ul>' + (p.lessons.length ? p.lessons.map(function (l) { return '<li>[' + esc(l.tipo) + '] ' + esc(l.texto) + '</li>'; }).join('') : '<li>—</li>') + '</ul>' +
      '<h2>Aceite</h2><p>Data: ' + fmtD(p.closing.dataAceite) + '</p><p>' + esc(p.closing.relatorio || '') + '</p>';
  }

  function exportPlanoMd(p) {
    var c = cpm(p.sched.acts);
    var e = evmCalc(p);
    var L = ['# Plano do Projeto — ' + p.name, '',
      '> Patrocinador: ' + (p.sponsor || '—') + ' · Gerente: ' + (p.manager || '—') + ' · Status: ' + p.status, '',
      '## TAP',
      '- Objetivo: ' + (p.tap.objetivo || '—'),
      '- Justificativa: ' + (p.tap.justificativa || '—'),
      '- Premissas: ' + (p.tap.premissas.join('; ') || '—'),
      '- Restrições: ' + (p.tap.restricoes.join('; ') || '—'), '',
      '## Diagnóstico SWOT'];
    ['f', 'd', 'o', 'a'].forEach(function (k) {
      var names = { f: 'Forças', d: 'Fraquezas', o: 'Oportunidades', a: 'Ameaças' };
      L.push('- **' + names[k] + ':** ' + (p.amb.swot[k].join('; ') || '—'));
    });
    L.push('', '## Stakeholders', mdTable(['Nome', 'Papel', 'Interesse', 'Influência', 'Estratégia'],
      p.stkh.map(function (s) { return [s.nome, s.papel, s.interesse, s.influencia, s.quad]; })));
    L.push('## Escopo', p.scope.declaracao || '—', '',
      '### Requisitos', mdTable(['Descrição', 'Tipo'], p.scope.requisitos.map(function (r) { return [r.desc, r.tipo]; })),
      '### Entregáveis', mdTable(['Entregável', 'Critério de aceite', '%'], p.scope.entregaveis.map(function (x) { return [x.nome, x.crit, x.pct]; })));
    L.push('## EAP', p.eap.map(function (x) {
      return new Array(x.lvl).join('  ') + '- ' + x.label;
    }).join('\n') || '—', '');
    L.push('## Cronograma (CPM)');
    L.push(mdTable(['Atividade', 'Dur.', 'Dependências', 'Resp.', 'ES', 'Folga', 'Status'],
      p.sched.acts.map(function (a) {
        var cc = c.calc[a.id] || { es: '-', slack: '-' };
        var deps = (a.deps || []).map(function (d) {
          var f = null;
          p.sched.acts.forEach(function (x) { if (x.id === d) f = x; });
          return f ? f.nome : '?';
        }).join(', ');
        return [a.nome + (a.marco ? ' (marco)' : ''), a.dur + 'd', deps || '—', a.resp || '—', cc.es, cc.slack === 0 ? 'CRÍTICO' : cc.slack, a.status];
      })));
    L.push('**Duração total (caminho crítico): ' + c.total + ' dias**' +
      (p.sched.baseline ? ' · linha de base congelada em ' + fmtD((p.sched.baseline.when || '').slice(0, 10)) : ''), '');
    var base = baseCost(p);
    L.push('## Orçamento', mdTable(['Item', 'Cat.', 'Qtd', 'V. unit.', 'Subtotal'],
      p.costs.items.map(function (it) { return [it.nome, it.tipo, it.qtd, money(it.valUnit), money(num(it.qtd, 0) * num(it.valUnit, 0))]; })));
    L.push('Base: ' + money(base) + ' · Reserva (' + p.costs.reservaPct + '%): ' + money(base * num(p.costs.reservaPct, 0) / 100) + ' · **BAC: ' + money(bac(p)) + '**', '');
    L.push('## Recursos', mdTable(['Recurso', 'Função', 'Custo/h'], p.res.map(function (r) { return [r.nome, r.funcao, money(r.custoH)]; })));
    L.push('## Riscos', mdTable(['Risco (evento)', 'P', 'I', 'Score', 'Estratégia', 'Plano', 'Resp.', 'Status'],
      p.risks.map(function (r) { return [r.evento, r.prob, r.imp, riskScore(r), r.estrategia, r.plano, r.responsavel, r.status]; })));
    L.push('## Qualidade', '- Padrões: ' + (p.qual.padroes || '—'), '',
      mdTable(['KPI', 'Meta', 'Medição'], p.qual.indicadores.map(function (i) { return [i.kpi, i.meta, i.medida]; })),
      mdTable(['NC', 'Severidade', 'Ação', 'Status'], p.qual.ncs.map(function (n) { return [n.desc, n.severidade, n.acao, n.status]; })));
    L.push('## Comunicações', mdTable(['O quê', 'Quem', 'Quando', 'Meio', 'Resp.'],
      p.comms.map(function (cm) { return [cm.oque, cm.quem, cm.quando, cm.como, cm.responsavel]; })));
    L.push('## Aquisições', mdTable(['Item', 'Fornecedor', 'Valor escolhido', 'SLA', 'Situação'],
      p.proc.items.map(function (i) {
        var vals = (i.valores || []).filter(function (v) { return v > 0; });
        var melhor = vals.length ? Math.min.apply(null, vals) : NaN;
        return [i.oque, i.fornec || '—', isFinite(melhor) ? money(melhor) : '—', i.sla, i.status];
      })));
    L.push('## Controle (EVM)',
      '- PV: ' + money(e.pv) + ' · EV: ' + money(e.ev) + ' · AC: ' + money(e.ac),
      '- CPI: ' + (isNaN(e.cpi) ? '—' : e.cpi.toFixed(2)) + ' · SPI: ' + (isNaN(e.spi) ? '—' : e.spi.toFixed(2)),
      '- EAC: ' + (isNaN(e.eac) ? '—' : money(e.eac)) + ' · VAC: ' + (isNaN(e.vac) ? '—' : money(e.vac)), '',
      '## Mudanças', mdTable(['Título', 'Impactos', 'Status'], p.chg.map(function (ch) { return [ch.titulo, ch.impactos, ch.status]; })));
    L.push('## Lições aprendidas', p.lessons.map(function (l) { return '- [' + l.tipo + '] ' + l.texto; }).join('\n') || '—');
    downloadFile(slug(p.name) + '-plano-completo.md', L.join('\n'));
    toast('Plano completo exportado (.md)');
  }

  var RENDERERS = {
    dashboard: mDashboard, cadastro: mCadastro, tap: mTap, diagnostico: mDiagnostico,
    stakeholders: mStakeholders, escopo: mEscopo, eap: mEap, cronograma: mCronograma,
    custos: mCustos, recursos: mRecursos, raci: mRaci, riscos: mRiscos,
    qualidade: mQualidade, comunicacao: mComunicacao, aquisicoes: mAquisicoes,
    execucao: mExecucao, controle: mControle, encerramento: mEncerramento
  };

  function render() {
    load();
    if (!db.projects.length) {
      root.innerHTML = emptyState('Nenhum projeto cadastrado. Crie o primeiro projeto para planejar, executar e controlar com rigor de engenharia.', '+ Criar primeiro projeto', 'new-projeto');
      return;
    }
    var p = cur();
    if (!p) return;

    var groups = [];
    MODULES.forEach(function (m) {
      var g = null;
      groups.forEach(function (x) { if (x.g === m.g) g = x; });
      if (!g) { g = { g: m.g, items: [] }; groups.push(g); }
      g.items.push(m);
    });

    var sideNav = groups.map(function (g) {
      return '<div class="gp-nav-group"><h6>' + esc(g.g) + '</h6>' + g.items.map(function (m) {
        return '<button type="button" class="gp-nav-item' + (mod === m.id ? ' active' : '') + '" data-a="goto-mod" data-mod="' + m.id + '">' + esc(m.label) + '</button>';
      }).join('') + '</div>';
    }).join('');

    var miniDots = health(p).slice(0, 4).map(function (x) {
      var icon = x.s === 'g' ? '&#10003;' : (x.s === 'y' ? '!' : '&times;');
      return '<span class="dot ' + x.s + '" title="' + esc(x.k) + ': ' + esc(x.info) + '">' + icon + '</span>';
    }).join('');

    root.innerHTML =
      '<div class="gp-shell">' +
      '<aside class="gp-side" aria-label="Módulos da gestão de projetos">' + sideNav + '</aside>' +
      '<div class="gp-main">' +
      '<header class="gp-head">' +
      '<div class="gp-head-l">' +
      '<label class="sr-only" for="gpSelProj">Projeto atual</label>' +
      '<select id="gpSelProj" aria-label="Selecionar projeto">' +
      db.projects.map(function (x) {
        return '<option value="' + x.id + '"' + (x.id === p.id ? ' selected' : '') + '>' + esc(x.name) + '</option>';
      }).join('') +
      '</select><span class="gp-minidots">' + miniDots + '</span></div>' +
      '<div class="gp-head-r">' +
      '<button type="button" class="btn btn-soft" data-a="new-projeto">+ Projeto</button>' +
      '<button type="button" class="btn btn-danger-outline" data-a="del-projeto" title="Apagar o projeto selecionado">Apagar projeto</button>' +
      '<button type="button" class="btn btn-ghost" data-a="export-plano-txt">.txt</button>' +
      '<button type="button" class="btn btn-ghost" data-a="export-plano-doc">.doc</button>' +
      '<button type="button" class="btn btn-soft" data-a="print-plano">Imprimir</button>' +
      '<button type="button" class="btn btn-primary" data-a="pdf-plano">PDF</button>' +
      '</div></header>' +
      '<h3 class="gp-module-title">' + esc(moduleLabel(mod)) + '</h3>' +
      '<div class="gp-content">' + (RENDERERS[mod] || mDashboard)(p) + '</div>' +
      '</div></div>';
  }

  function findIn(arr, id) {
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i];
    return null;
  }
  function idxIn(arr, id) {
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return i;
    return -1;
  }
  function setListVal(path, arr) {
    var p = cur();
    var parts = path.split('.');
    var obj = p;
    for (var i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
    obj[parts[parts.length - 1]] = arr;
    touch(p);
    render();
  }
  function getListVal(path) {
    var p = cur();
    var parts = path.split('.');
    var obj = p;
    for (var i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
    return obj[parts[parts.length - 1]];
  }
  function formVals(form) {
    var o = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name) return;
      o['ck_' + el.name] = !!el.checked;
      if (el.type !== 'checkbox') o[el.name] = el.value;
    });
    return o;
  }

  var MODAL_FORM_ACTIONS = {
    'novo-projeto': 'create-project', stk: 'save-stk', req: 'save-req', ent: 'save-ent',
    act: 'save-act', cost: 'save-cost', res: 'save-res', risk: 'save-risk',
    kpi: 'save-kpi', insp: 'save-insp', nc: 'save-nc', comm: 'save-comm',
    proc: 'save-proc', chg: 'save-chg'
  };

  function handleSubmit(ev) {
    var f = ev.target.closest('form[data-form], form[data-add]');
    if (!f) return;
    ev.preventDefault();
    var p = cur();
    if (!p) return;
    var v = formVals(f);

    if (f.hasAttribute('data-add')) {
      var input = f.querySelector('input[type="text"]');
      var val = input ? input.value.trim() : '';
      if (!val) return;
      var arr = getListVal(f.getAttribute('data-add')).slice();
      arr.push(val);
      setListVal(f.getAttribute('data-add'), arr);
      return;
    }

    switch (f.getAttribute('data-form')) {
      case 'projeto':
        if (!v.nome || !v.nome.trim()) { toast('O nome do projeto é obrigatório.', 'err'); break; }
        p.name = v.nome.trim(); p.sponsor = v.sponsor; p.manager = v.manager;
        p.idea = v.idea; p.budgetPrelim = num(v.budgetPrelim); p.deadlinePrelim = v.deadlinePrelim;
        touch(p); render(); toast('Dados do projeto salvos.');
        break;
      case 'tap1':
        p.tap.justificativa = v.justificativa; p.tap.objetivo = v.objetivo; p.tap.escopoResumo = v.escopoResumo;
        touch(p); render(); toast('Seção 1 do TAP salva.');
        break;
      case 'marco': {
        if (!v.nome || !v.nome.trim()) { toast('Informe o nome do marco.', 'err'); break; }
        p.tap.marcos.push({ nome: v.nome.trim(), data: v.data });
        touch(p); render();
        break;
      }
      case 'tap6':
        p.tap.riscosAltos = v.riscosAltos;
        touch(p); render(); toast('Riscos de alto nível salvos.');
        break;
      case 'tap7':
        p.tap.aprovador = v.aprovador; p.tap.dataAprov = v.dataAprov;
        touch(p); render(); toast(v.dataAprov ? 'Aprovação do TAP registrada.' : 'Aprovação salva.');
        break;
      case 'amb-i':
        p.amb.interno = v.interno; touch(p); render(); toast('Ambiente interno salvo.');
        break;
      case 'amb-e':
        p.amb.externo = v.externo; touch(p); render(); toast('Ambiente externo salvo.');
        break;
      case 'escopo':
        p.scope.declaracao = v.declaracao; touch(p); render(); toast('Declaração de escopo salva.');
        break;
      case 'eap': {
        if (!v.label || !v.label.trim()) { toast('Informe o nome do elemento.', 'err'); break; }
        var lvlN = parseInt(String(v.lvl).replace('Nível ', ''), 10) || 1;
        p.eap.push({ id: uid(), label: v.label.trim(), lvl: lvlN });
        touch(p); render();
        break;
      }
      case 'raci-role':
        if (!v.role || !v.role.trim()) { toast('Informe o nome da função.', 'err'); break; }
        p.raci.roles.push(v.role.trim());
        touch(p); render();
        break;
      case 'lesson':
        if (!v.texto || !v.texto.trim()) { toast('Descreva a lição aprendida.', 'err'); break; }
        p.lessons.push({ id: uid(), texto: v.texto.trim(), tipo: v.tipo });
        touch(p); render(); toast('Lição registrada.');
        break;
      case 'reserva':
        p.costs.reservaPct = Math.max(0, num(v.reservaPct));
        touch(p); render(); toast('Reserva aplicada.');
        break;
      case 'qual-pad':
        p.qual.padroes = v.padroes; touch(p); render(); toast('Padrões salvos.');
        break;
      case 'evm':
        p.evm.pv = num(v.pv); p.evm.ev = num(v.ev); p.evm.ac = num(v.ac);
        touch(p); render(); toast('Indicadores EVM calculados.');
        break;
      case 'closing':
        p.closing.dataAceite = v.dataAceite; p.closing.relatorio = v.relatorio;
        touch(p); render(); toast('Aceite final salvo.');
        break;
      default: {
        var act = MODAL_FORM_ACTIONS[f.getAttribute('data-form')];
        if (act) {
          var btn = modalRoot.querySelector('[data-a="' + act + '"]');
          if (btn) btn.click();
        }
      }
    }
  }

  root.addEventListener('submit', handleSubmit);
  modalRoot.addEventListener('submit', handleSubmit);

  root.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'gpSelProj') { curId = t.value; mod = 'dashboard'; render(); return; }
    if (t.matches && t.matches('[data-raci]')) {
      var p = cur();
      if (!p) return;
      p.raci.cells[t.getAttribute('data-raci')] = t.value;
      touch(p); render();
    }
  });

  modalRoot.addEventListener('click', function (ev) {
    if (ev.target.closest('[data-close]')) closeModal();
  });

  root.addEventListener('click', function (ev) {
    var btn = ev.target.closest('[data-a]');
    if (!btn) return;
    var a = btn.getAttribute('data-a');
    if (a === 'edit' || a === 'del') return;
    var id = btn.getAttribute('data-id') || '';
    var i = parseInt(btn.getAttribute('data-i'), 10);
    var p = cur();
    if (!p && a !== 'new-projeto') return;

    switch (a) {
      case 'goto-mod':
        mod = btn.getAttribute('data-mod');
        render();
        break;
      case 'goto-crono':
        mod = 'cronograma';
        render();
        break;
      case 'open-proj':
        curId = id;
        mod = 'dashboard';
        render();
        break;
      case 'new-projeto':
        openModal('Novo projeto',
          '<form class="gp-form" data-form="novo-projeto">' +
          field('Nome do projeto *', inp('nome', '')) +
          '<div class="gp-form-row">' +
          field('Patrocinador', inp('sponsor', '')) +
          field('Gerente de projeto', inp('manager', '')) +
          '</div><div class="gp-form-row">' +
          field('Orçamento preliminar (R$)', inp('budgetPrelim', '', 'number', '0,00', '0.01')) +
          field('Prazo preliminar', inp('deadlinePrelim', '', 'date')) +
          '</div>' +
          field('Ideia / problema a resolver', ta('idea', '', '', 2)) +
          '</form>',
          '<button type="button" class="btn btn-ghost" data-close="1">Cancelar</button>' +
          '<button type="button" class="btn btn-primary" data-a="create-project">Criar projeto</button>');
        break;
      case 'create-project': {
        var form = modalRoot.querySelector('form');
        var nv = formVals(form);
        if (!nv.nome || !nv.nome.trim()) { toast('Informe o nome do projeto.', 'err'); break; }
        var np = newProject({
          nome: nv.nome.trim(), sponsor: nv.sponsor, manager: nv.manager,
          budgetPrelim: num(nv.budgetPrelim), deadlinePrelim: nv.deadlinePrelim, idea: nv.idea
        });
        db.projects.unshift(np);
        curId = np.id;
        mod = 'tap';
        closeModal();
        touch(np);
        render();
        toast('Projeto criado — comece pelo Termo de Abertura.');
        break;
      }
      case 'del-projeto':
        confirmAction('Excluir definitivamente o projeto "' + p.name + '"? Esta ação não pode ser desfeita.', function () {
          db.projects.splice(idxIn(db.projects, p.id), 1);
          curId = db.projects.length ? db.projects[0].id : null;
          mod = 'dashboard';
          save();
          render();
          toast('Projeto excluído.');
        });
        break;
      case 'del-proj-id':
        confirmAction('Excluir este projeto permanentemente?', function () {
          db.projects.splice(idxIn(db.projects, id), 1);
          if (curId === id) curId = db.projects.length ? db.projects[0].id : null;
          save();
          render();
        });
        break;
      case 'rm-item': {
        var arr2 = getListVal(btn.getAttribute('data-list')).slice();
        arr2.splice(i, 1);
        setListVal(btn.getAttribute('data-list'), arr2);
        break;
      }
      case 'rm-marc':
        p.tap.marcos.splice(i, 1);
        touch(p);
        render();
        break;
      case 'print-tap':
        printContent('Termo de Abertura do Projeto — ' + esc(p.name),
          '<h2>Justificativa</h2><p>' + esc(p.tap.justificativa) + '</p>' +
          '<h2>Objetivo</h2><p>' + esc(p.tap.objetivo) + '</p>' +
          '<h2>Escopo em alto nível</h2><p>' + esc(p.tap.escopoResumo) + '</p>' +
          '<h2>Premissas</h2><ul>' + p.tap.premissas.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
          '<h2>Restrições</h2><ul>' + p.tap.restricoes.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
          '<h2>Marcos</h2><table border="1" cellpadding="6" cellspacing="0"><tr><th>Marco</th><th>Data</th></tr>' +
          p.tap.marcos.map(function (m) { return '<tr><td>' + esc(m.nome) + '</td><td>' + fmtD(m.data) + '</td></tr>'; }).join('') + '</table>' +
          '<h2>Riscos de alto nível</h2><p>' + esc(p.tap.riscosAltos) + '</p>' +
          '<h2>Aprovação</h2><p>Aprovado por <strong>' + esc(p.tap.aprovador) + '</strong> em ' + fmtD(p.tap.dataAprov) + '.</p>');
        break;
      case 'print-diag':
        printContent('Diagnóstico Organizacional — ' + esc(p.name),
          '<style>.sw{display:flex;gap:12px;flex-wrap:wrap}.sw>div{border:1px solid #bbb;padding:10px;width:46%}</style>' +
          '<div class="sw">' +
          '<div><h3>Forças</h3><ul>' + p.amb.swot.f.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
          '<div><h3>Fraquezas</h3><ul>' + p.amb.swot.d.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
          '<div><h3>Oportunidades</h3><ul>' + p.amb.swot.o.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
          '<div><h3>Ameaças</h3><ul>' + p.amb.swot.a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
          '</div>' +
          '<h3>Ambiente interno</h3><p>' + esc(p.amb.interno) + '</p>' +
          '<h3>Ambiente externo (PESTEL)</h3><p>' + esc(p.amb.externo) + '</p>');
        break;
      default:
        break;
    }
  });

  root.addEventListener('click', function (ev) {
    var btn = ev.target.closest('[data-a]');
    if (!btn) return;
    var a = btn.getAttribute('data-a');
    var id = btn.getAttribute('data-id') || '';
    var p = cur();
    if (!p) return;

    function pick(list, opener) {
      var item = findIn(list, id);
      if (!item) return false;
      if (a === 'edit') opener(item);
      else confirmAction('Excluir este registro?', function () {
        list.splice(idxIn(list, id), 1);
        touch(p);
        render();
        toast('Registro excluído.');
      });
      return true;
    }

    if (a === 'edit' || a === 'del') {
      switch (mod) {
        case 'stakeholders': pick(p.stkh, function (it) { stkForm(it); }); break;
        case 'escopo':
          if (!pick(p.scope.requisitos, function (it) { reqForm(it); }))
            pick(p.scope.entregaveis, function (it) { entForm(it); });
          break;
        case 'custos': pick(p.costs.items, function (it) { costForm(it); }); break;
        case 'recursos': pick(p.res, function (it) { resForm(it); }); break;
        case 'cronograma': pick(p.sched.acts, function (it) { actForm(it, p.sched.acts); }); break;
        case 'execucao': pick(p.sched.acts, function (it) { actForm(it, p.sched.acts); }); break;
        case 'riscos': pick(p.risks, function (it) { riskForm(it); }); break;
        case 'qualidade':
          if (!pick(p.qual.indicadores, function (it) { kpiForm(it); }))
            if (!pick(p.qual.inspecoes, function (it) { inspForm(it); }))
              pick(p.qual.ncs, function (it) { ncForm(it); });
          break;
        case 'comunicacao': pick(p.comms, function (it) { commForm(it); }); break;
        case 'aquisicoes': pick(p.proc.items, function (it) { procForm(it); }); break;
        case 'controle': pick(p.chg, function (it) { chgForm(it); }); break;
        case 'encerramento': pick(p.lessons, function () { }); break;
        default: break;
      }
      return;
    }

    switch (a) {
      case 'new-stk': stkForm(null); break;
      case 'save-stk': {
        var fs = modalRoot.querySelector('form');
        var vs = formVals(fs);
        if (!vs.nome || !vs.nome.trim()) { toast('Informe o nome.', 'err'); break; }
        var inf = Math.max(1, Math.min(5, num(vs.influencia, 3)));
        var inte = Math.max(1, Math.min(5, num(vs.interesse, 3)));
        var quadName = inf >= 3 ? (inte >= 3 ? 'Gerencie de perto' : 'Mantenha satisfeito')
          : (inte >= 3 ? 'Mantenha informado' : 'Monitore');
        var sid = btn.getAttribute('data-id');
        if (sid) {
          var os = findIn(p.stkh, sid);
          os.nome = vs.nome.trim(); os.papel = vs.papel; os.interesse = inte; os.influencia = inf; os.quad = quadName;
        } else {
          p.stkh.push({ id: uid(), nome: vs.nome.trim(), papel: vs.papel, interesse: inte, influencia: inf, quad: quadName });
        }
        closeModal(); touch(p); render();
        toast('Stakeholder salvo · ' + quadName);
        break;
      }
      case 'new-req': reqForm(null); break;
      case 'save-req': {
        var fr = modalRoot.querySelector('form');
        var vr = formVals(fr);
        if (!vr.desc || !vr.desc.trim()) { toast('Descreva o requisito.', 'err'); break; }
        var rid = btn.getAttribute('data-id');
        if (rid) {
          var orq = findIn(p.scope.requisitos, rid);
          orq.desc = vr.desc.trim(); orq.tipo = vr.tipo;
        } else {
          p.scope.requisitos.push({ id: uid(), desc: vr.desc.trim(), tipo: vr.tipo });
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'new-ent': entForm(null); break;
      case 'save-ent': {
        var fe = modalRoot.querySelector('form');
        var ve = formVals(fe);
        if (!ve.nome || !ve.nome.trim()) { toast('Informe o entregável.', 'err'); break; }
        var pctE = Math.max(0, Math.min(100, num(ve.pct)));
        var eid = btn.getAttribute('data-id');
        if (eid) {
          var oe = findIn(p.scope.entregaveis, eid);
          oe.nome = ve.nome.trim(); oe.crit = ve.crit; oe.pct = pctE;
        } else {
          p.scope.entregaveis.push({ id: uid(), nome: ve.nome.trim(), crit: ve.crit, pct: pctE });
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'eap-focus': {
        var fi = root.querySelector('[data-form="eap"] input[name="label"]');
        if (fi) fi.focus();
        break;
      }
      case 'eap-del':
        p.eap.splice(i, 1);
        touch(p); render();
        break;
      case 'eap-down': {
        if (p.eap[i].lvl >= 3) { toast('Profundidade máxima: 3 níveis.', 'err'); break; }
        var subLabel = window.prompt('Nome do subitem de "' + p.eap[i].label + '":');
        if (subLabel && subLabel.trim()) {
          p.eap.splice(i + 1, 0, { id: uid(), label: subLabel.trim(), lvl: p.eap[i].lvl + 1 });
          touch(p);
          render();
        }
        break;
      }
      case 'eap-up':
        if (p.eap[i].lvl > 1) { p.eap[i].lvl--; touch(p); render(); }
        break;
      case 'sync-eap-crono': {
        var packs = p.eap.filter(function (x) { return x.lvl === 3; });
        if (!packs.length) { toast('Cadastre pacotes no nível 3 primeiro.', 'err'); break; }
        var novos = 0;
        packs.forEach(function (pk) {
          var exists = p.sched.acts.some(function (aa) { return aa.nome === pk.label; });
          if (!exists) {
            p.sched.acts.push({ id: uid(), nome: pk.label, dur: 1, deps: [], resp: '', marco: false, pct: 0, status: 'não iniciada' });
            novos++;
          }
        });
        touch(p); render();
        toast(novos ? novos + ' atividade(s) criadas no cronograma.' : 'Todos os pacotes já existiam no cronograma.');
        break;
      }
      case 'new-act': actForm(null, p.sched.acts); break;
      case 'save-act': {
        var fa = modalRoot.querySelector('form');
        var va = formVals(fa);
        if (!va.nome || !va.nome.trim()) { toast('Informe o nome da atividade.', 'err'); break; }
        var deps = [];
        Array.prototype.forEach.call(fa.querySelectorAll('input[type="checkbox"][name^="dep_"]'), function (cb) {
          if (cb.checked) deps.push(cb.name.slice(4));
        });
        var uniq = [];
        deps.forEach(function (d) { if (uniq.indexOf(d) === -1) uniq.push(d); });
        var isMarco = fa.querySelector('input[name="marco"]').checked;
        var durA = isMarco ? 0 : Math.max(0, num(va.dur, 1));
        var aid = btn.getAttribute('data-id');
        if (aid) {
          var oa = findIn(p.sched.acts, aid);
          oa.nome = va.nome.trim(); oa.dur = durA; oa.deps = uniq; oa.resp = va.resp;
          oa.marco = isMarco; oa.status = va.status;
          oa.pct = oa.status === 'concluida' ? 100 : Math.max(0, Math.min(100, num(va.pct)));
        } else {
          p.sched.acts.push({
            id: uid(), nome: va.nome.trim(), dur: durA, deps: uniq, resp: va.resp,
            marco: isMarco, pct: 0, status: 'não iniciada'
          });
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'baseline-set':
        if (!p.sched.acts.length) { toast('Cadastre atividades antes de congelar a linha de base.', 'err'); break; }
        confirmAction('Congelar a linha de base atual? Ela servirá de referência para medir desvios.', function () {
          var cb = cpm(p.sched.acts);
          p.sched.baseline = { when: new Date().toISOString(), total: cb.total, calc: JSON.parse(JSON.stringify(cb.calc)) };
          touch(p); render();
          toast('Linha de base congelada.');
        });
        break;
      case 'replan-baseline':
        confirmAction('Substituir a linha de base pelo cronograma atual (replanejamento)?', function () {
          var cr = cpm(p.sched.acts);
          p.sched.baseline = { when: new Date().toISOString(), total: cr.total, calc: JSON.parse(JSON.stringify(cr.calc)) };
          touch(p); render();
          toast('Linha de base substituída.');
        });
        break;
      case 'new-cost': costForm(null); break;
      case 'save-cost': {
        var fc = modalRoot.querySelector('form');
        var vc = formVals(fc);
        if (!vc.nome || !vc.nome.trim()) { toast('Informe a descrição do custo.', 'err'); break; }
        var cid = btn.getAttribute('data-id');
        if (cid) {
          var oc = findIn(p.costs.items, cid);
          oc.nome = vc.nome.trim(); oc.tipo = vc.tipo; oc.qtd = num(vc.qtd, 1); oc.valUnit = num(vc.valUnit);
        } else {
          p.costs.items.push({ id: uid(), nome: vc.nome.trim(), tipo: vc.tipo, qtd: num(vc.qtd, 1), valUnit: num(vc.valUnit) });
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'new-res': resForm(null); break;
      case 'save-res': {
        var fv = modalRoot.querySelector('form');
        var vv = formVals(fv);
        if (!vv.nome || !vv.nome.trim()) { toast('Informe o nome.', 'err'); break; }
        var rid2 = btn.getAttribute('data-id');
        if (rid2) {
          var ov = findIn(p.res, rid2);
          ov.nome = vv.nome.trim(); ov.funcao = vv.funcao; ov.custoH = num(vv.custoH);
        } else {
          p.res.push({ id: uid(), nome: vv.nome.trim(), funcao: vv.funcao, custoH: num(vv.custoH) });
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'rm-role':
        p.raci.roles.splice(i, 1);
        touch(p); render();
        break;
      case 'new-risk': riskForm(null); break;
      case 'save-risk': {
        var fk = modalRoot.querySelector('form');
        var vk = formVals(fk);
        if (!vk.evento || !vk.evento.trim()) { toast('Descreva o evento de risco.', 'err'); break; }
        var rk = {
          causa: vk.causa, evento: vk.evento.trim(), consq: vk.consq,
          prob: Math.max(1, Math.min(5, num(vk.prob, 3))),
          imp: Math.max(1, Math.min(5, num(vk.imp, 3))),
          estrategia: vk.estrategia, plano: vk.plano, gatilho: vk.gatilho,
          responsavel: vk.responsavel, status: vk.status
        };
        var kid = btn.getAttribute('data-id');
        if (kid) {
          var ok2 = findIn(p.risks, kid);
          Object.keys(rk).forEach(function (k) { ok2[k] = rk[k]; });
        } else {
          rk.id = uid();
          p.risks.push(rk);
        }
        closeModal(); touch(p); render();
        toast('Risco salvo · severidade ' + (rk.prob * rk.imp));
        break;
      }
      case 'new-kpi': kpiForm(null); break;
      case 'save-kpi': {
        var fq = modalRoot.querySelector('form');
        var vq = formVals(fq);
        if (!vq.kpi || !vq.kpi.trim()) { toast('Informe o indicador.', 'err'); break; }
        var qid = btn.getAttribute('data-id');
        if (qid) {
          var oq2 = findIn(p.qual.indicadores, qid);
          oq2.kpi = vq.kpi.trim(); oq2.meta = vq.meta; oq2.medida = vq.medida;
        } else {
          p.qual.indicadores.push({ id: uid(), kpi: vq.kpi.trim(), meta: vq.meta, medida: vq.medida });
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'new-insp': inspForm(null); break;
      case 'save-insp': {
        var fi2 = modalRoot.querySelector('form');
        var vi = formVals(fi2);
        if (!vi.item || !vi.item.trim()) { toast('Informe o item inspecionado.', 'err'); break; }
        var iid = btn.getAttribute('data-id');
        if (iid) {
          var oi2 = findIn(p.qual.inspecoes, iid);
          oi2.item = vi.item.trim(); oi2.data = vi.data; oi2.result = vi.result; oi2.responsavel = vi.responsavel;
        } else {
          p.qual.inspecoes.push({ id: uid(), item: vi.item.trim(), data: vi.data, result: vi.result, responsavel: vi.responsavel });
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'new-nc': ncForm(null); break;
      case 'save-nc': {
        var fn2 = modalRoot.querySelector('form');
        var vn = formVals(fn2);
        if (!vn.desc || !vn.desc.trim()) { toast('Descreva a não conformidade.', 'err'); break; }
        var nid = btn.getAttribute('data-id');
        if (nid) {
          var on2 = findIn(p.qual.ncs, nid);
          on2.desc = vn.desc.trim(); on2.severidade = vn.severidade; on2.acao = vn.acao; on2.responsavel = vn.responsavel; on2.status = vn.status;
        } else {
          p.qual.ncs.push({ id: uid(), desc: vn.desc.trim(), severidade: vn.severidade, acao: vn.acao, responsavel: vn.responsavel, status: vn.status });
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'new-comm': commForm(null); break;
      case 'save-comm': {
        var fm2 = modalRoot.querySelector('form');
        var vm = formVals(fm2);
        if (!vm.oque || !vm.oque.trim()) { toast('Informe o quê será comunicado.', 'err'); break; }
        vm.oque = vm.oque.trim();
        var mid = btn.getAttribute('data-id');
        if (mid) {
          var om = findIn(p.comms, mid);
          om.oque = vm.oque; om.quem = vm.quem; om.quando = vm.quando; om.como = vm.como; om.responsavel = vm.responsavel;
        } else {
          vm.id = uid();
          p.comms.push(vm);
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'new-proc': procForm(null); break;
      case 'save-proc': {
        var fp = modalRoot.querySelector('form');
        var vp = formVals(fp);
        if (!vp.oque || !vp.oque.trim()) { toast('Informe o que será adquirido.', 'err'); break; }
        var pr = {
          oque: vp.oque.trim(), crit: vp.crit,
          valores: [num(vp.v1), num(vp.v2), num(vp.v3)],
          fornec: vp.fornec, sla: vp.sla, status: vp.status, avaliacao: vp.avaliacao
        };
        var pid = btn.getAttribute('data-id');
        if (pid) {
          var op2 = findIn(p.proc.items, pid);
          Object.keys(pr).forEach(function (k) { op2[k] = pr[k]; });
        } else {
          pr.id = uid();
          p.proc.items.push(pr);
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'move-act': {
        var ma = findIn(p.sched.acts, id);
        ma.status = btn.getAttribute('data-to');
        if (ma.status === 'concluida') ma.pct = 100;
        else if (ma.status === 'não iniciada') ma.pct = 0;
        else if (Number(ma.pct) === 0 || Number(ma.pct) === 100) ma.pct = 50;
        touch(p); render();
        break;
      }
      case 'new-chg': chgForm(null); break;
      case 'save-chg': {
        var fh = modalRoot.querySelector('form');
        var vh = formVals(fh);
        if (!vh.titulo || !vh.titulo.trim()) { toast('Informe o título da mudança.', 'err'); break; }
        vh.titulo = vh.titulo.trim();
        var hid = btn.getAttribute('data-id');
        if (hid) {
          var oh = findIn(p.chg, hid);
          oh.titulo = vh.titulo; oh.desc = vh.desc; oh.motivo = vh.motivo;
          oh.impactos = vh.impactos; oh.status = vh.status; oh.data = vh.data;
        } else {
          vh.id = uid();
          p.chg.push(vh);
        }
        closeModal(); touch(p); render();
        break;
      }
      case 'ck-close': {
        var key = btn.getAttribute('data-key');
        p.closing.checklist[key] = btn.checked;
        touch(p); render();
        break;
      }
      case 'close-project':
        confirmAction('Encerrar o projeto oficialmente? Ele ficará marcado como encerrado.', function () {
          p.status = 'encerrado';
          touch(p); render();
          toast('Projeto encerrado. Registre as lições aprendidas!');
        });
        break;
      case 'export-plano-txt':
        downloadFile(slug(p.name) + '-plano.txt', htmlToText(buildPlanHtml(p)), 'text/plain;charset=utf-8');
        toast('Versão .txt do plano baixada.');
        break;
      case 'export-plano-doc':
        downloadFile(slug(p.name) + '-plano.doc', docWrap(esc(p.name) + ' — Plano do Projeto', buildPlanHtml(p)), 'application/msword');
        toast('Documento Word (.doc) baixado.');
        break;
      case 'print-plano':
        printContent('Plano do Projeto — ' + esc(p.name), buildPlanHtml(p));
        break;
      case 'pdf-plano':
        toast('Gerando PDF do plano…');
        window.GerettPDF.fromHTML(esc(p.name) + ' — Plano do Projeto', buildPlanHtml(p), slug(p.name) + '-plano.pdf')
          .then(function () { toast('PDF baixado.'); })
          .catch(function () { toast('Não foi possível gerar o PDF. Verifique a conexão.', 'info'); });
        break;
      case 'pdf-final':
        toast('Gerando relatório final em PDF…');
        window.GerettPDF.fromHTML(esc(p.name) + ' — Relatório Final', finalBodyHtml(p), slug(p.name) + '-relatorio-final.pdf')
          .then(function () { toast('PDF baixado.'); })
          .catch(function () { toast('Não foi possível gerar o PDF. Verifique a conexão.', 'info'); });
        break;
      case 'print-final':
        printContent('Relatório Final — ' + esc(p.name), finalBodyHtml(p));
        break;
      default:
        break;
    }
  });

  load();
  render();
})();

