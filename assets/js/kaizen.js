(function () {
  'use strict';
  var LS = 'gerett_kz_v1';
  var root = document.getElementById('kzRoot');
  var mRoot = document.getElementById('kzModalRoot');
  var tRoot = document.getElementById('kzToastRoot');
  var pRoot = document.getElementById('gpPrintRoot');
  var db = null;
  var mod = 'dash';

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function num(v, def) {
    var n = parseFloat(String(v == null ? '' : v).replace(',', '.'));
    return isNaN(n) ? (def || 0) : n;
  }
  function uid(p) { return (p || 'z') + '_' + Math.random().toString(36).slice(2, 9); }
  function today() { return new Date().toISOString().slice(0, 10); }
  function fmtD(s) {
    if (!s) return '—';
    var y = String(s).slice(0, 10).split('-');
    return y.length === 3 ? y[2] + '/' + y[1] + '/' + y[0] : esc(s);
  }
  function slug(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
  }
  function toast(msg, type) {
    if (!tRoot) return;
    var el = document.createElement('div');
    el.className = 'pdp-toast' + (type ? ' ' + type : '');
    el.textContent = msg;
    tRoot.appendChild(el);
    setTimeout(function () { el.classList.add('out'); }, 3200);
    setTimeout(function () { el.remove(); }, 3600);
  }
  function downloadFile(name, content, mime) {
    var blob = new Blob([content], { type: mime || 'text/markdown;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
  }
  function kzPrint(title, bodyHtml) {
    pRoot.innerHTML =
      '<h1>' + title + '</h1>' +
      '<p class="pr-meta">Gerett · Melhoria Contínua — gerado em ' + fmtD(today()) + '</p>' +
      bodyHtml;
    var de = document.documentElement;
    de.classList.add('gp-printing');
    var cleanup = function () { de.classList.remove('gp-printing'); window.removeEventListener('afterprint', cleanup); };
    window.addEventListener('afterprint', cleanup);
    setTimeout(function () { window.print(); }, 40);
  }
  function closeModal() {
    mRoot.innerHTML = '';
    document.body.classList.remove('no-scroll');
  }
  function openModal(title, body, wide) {
    mRoot.innerHTML =
      '<div class="ft-overlay" data-k="close-modal"></div>' +
      '<div class="ft-modal' + (wide ? ' wide' : '') + '" role="dialog" aria-modal="true" aria-label="' + esc(title) + '">' +
      '<header class="ft-modal-head"><h3>' + esc(title) + '</h3><button type="button" class="ft-x" data-k="close-modal" aria-label="Fechar">&times;</button></header>' +
      '<div class="ft-modal-body">' + body + '</div></div>';
    document.body.classList.add('no-scroll');
    var f = mRoot.querySelector('input,textarea,select');
    if (f) setTimeout(function () { f.focus(); }, 30);
  }
  function kzConfirm(title, msgHtml, onYes) {
    openModal(title,
      '<p>' + msgHtml + '</p>' +
      '<div class="gp-form-actions"><button type="button" class="btn btn-danger" data-kz-yes>Apagar definitivamente</button>' +
      '<button type="button" class="btn btn-soft" data-k="close-modal">Cancelar</button></div>');
    var y = mRoot.querySelector('[data-kz-yes]');
    if (y) y.addEventListener('click', function () { closeModal(); onYes(); });
  }

  var ST_LIST = [
    { k: 'ideia', l: 'Ideia', cls: 'st-idle' },
    { k: 'analise', l: 'Análise', cls: 'st-run' },
    { k: 'plano', l: 'Planejada', cls: 'st-run' },
    { k: 'implantacao', l: 'Em implantação', cls: 'st-run' },
    { k: 'concluida', l: 'Concluída', cls: 'st-ok' },
    { k: 'sustentada', l: 'Sustentada', cls: 'st-ok' }
  ];
  function stInfo(k) { var r = null; ST_LIST.forEach(function (s) { if (s.k === k) r = s; }); return r || ST_LIST[0]; }

  var DOWNTIME = ['Defeitos', 'Espera', 'Transporte', 'Superprodução', 'Estoques excessivos', 'Movimentação desnecessária', 'Processamento excessivo', 'Criatividade subutilizada'];

  var TRILHA = [
    { id: 'm1', g: 'Módulo 1 — Fundamentos do Kaizen e da Melhoria Contínua', items: [
      { id: 'm1t1', t: 'Fundamentos de Kaizen', d: 'Kaizen = mudança para melhor (Kai = mudar, Zen = bom). É um sistema filosófico e prático no qual todos — da diretoria ao chão de fábrica — propõem e implementam pequenas melhorias contínuas, diárias e de baixo custo, acumulando ganhos grandes ao longo do tempo.' },
      { id: 'm1t2', t: 'Formas de aplicação do Kaizen', d: 'Kaizen individual (ideias de melhoria), Kaizen de grupo (times resolvem problemas do próprio processo) e Evento Kaizen (projeto intensivo de uma semana com meta específica). Também pode ser aplicado por processo, por área ou em toda a organização.' },
      { id: 'm1t3', t: 'Kaizen, Lean e STP', d: 'O Lean é derivado do Sistema Toyota de Produção (STP). O Kaizen é o motor de evolução do Lean: enquanto Just-in-Time e Jidoka estruturam o fluxo, o Kaizen mantém o sistema vivo, atacando desperdícios (muda) e padronizando os novos níveis de desempenho.' },
      { id: 'm1t4', t: 'Kaizen incremental vs Inovação radical', d: 'Kaizen: passos pequenos, baixo investimento, envolvimento de todos, risco baixo e resultados contínuos. Inovação radical (kaikaku): salto grande, investimento alto, poucos envolvidos. Sistemas maduros combinam os dois — inovação cria novo patamar, Kaizen sustenta e expande.' }
    ]},
    { id: 'm2', g: 'Módulo 2 — Mentalidade Kaizen e Cultura Organizacional', items: [
      { id: 'm2t1', t: 'Princípios comportamentais do Kaizen', d: 'Processo antes de resultado; fale com dados no Gemba; trate o problema como oportunidade; erro é falha de processo, não de pessoa; pergunte "por que" cinco vezes antes de agir; nenhuma melhoria sem padronização do novo padrão.' },
      { id: 'm2t2', t: 'Liderança Kaizen', d: 'O líder vai ao local (Gemba), observa, pergunta antes de julgar, desenvolve pessoas através dos problemas, remove barreiras, reconhece pequenas vitórias e pratica o próprio PDCA publicamente. Liderança Kaizen ensina a ver desperdício.' },
      { id: 'm2t3', t: 'Resistência à mudança e engajamento', d: 'Resistência tem causas previsíveis: medo de perda, falta de clareza, excesso de rotina e ausência de reconhecimento. Antídotos: envolver quem executa na solução, comunicar o porquê, começar por problemas que doem, celebrar resultados rápidos e nunca usar Kaizen como instrumento de punição.' }
    ]}
  ];
  function trilhaDone() {
    var tot = 0, ok = 0;
    TRILHA.forEach(function (g) { g.items.forEach(function (it) { tot++; if (db.trail[it.id]) ok++; }); });
    return { tot: tot, ok: ok };
  }

  var KM = [
    { g: 'Visão geral', id: 'dash', label: 'Painel Kaizen' },
    { g: 'Fundamentos', id: 'm1', label: 'M1 · Fundamentos' },
    { g: 'Fundamentos', id: 'm2', label: 'M2 · Cultura e Mentalidade' },
    { g: 'Prática', id: 'm3', label: 'M3 · Diagnóstico e Desperdícios' },
    { g: 'Prática', id: 'm4', label: 'M4 · Ferramentas Essenciais' },
    { g: 'Prática', id: 'm5', label: 'M5 · Eventos Kaizen' },
    { g: 'Rotina', id: 'm6', label: 'M6 · Quadro e Rotina' },
    { g: 'Resultados', id: 'm7', label: 'M7 · Indicadores e Ganhos' },
    { g: 'Resultados', id: 'm8', label: 'M8 · Integração e Modelos' }
  ];

  function newWs() {
    return {
      org: '', createdAt: new Date().toISOString(), updatedAt: '',
      trail: {},
      lideranca: {},
      resist: [],
      procs: [],
      gemba: [],
      cinco: [],
      ishi: [],
      s5: { seiri: 0, seiton: 0, seiso: 0, seiketsu: 0, shitsuke: 0, obs: '' },
      melhorias: [],
      eventos: [],
      indicadores: [],
      reunioes: [],
      padroes: []
    };
  }
  function load() {
    try {
      var raw = localStorage.getItem(LS);
      db = raw ? JSON.parse(raw) : newWs();
    } catch (e) { db = newWs(); }
    if (!db || typeof db !== 'object') db = newWs();
    var base = newWs();
    Object.keys(base).forEach(function (k) { if (db[k] === undefined) db[k] = base[k]; });
  }
  function save() {
    db.updatedAt = new Date().toISOString();
    try { localStorage.setItem(LS, JSON.stringify(db)); } catch (e) { toast('Não foi possível salvar localmente.', 'info'); }
  }
  function persist() { save(); render(); }

  function impScore(m) {
    var i = num(m.impacto, 3), u = num(m.urgencia, 3), e = Math.max(1, num(m.esforco, 3));
    return Math.round((i * u / e) * 10) / 10;
  }
  function pctBar(v) {
    var x = Math.max(0, Math.min(100, num(v, 0)));
    var cls = x >= 80 ? 'ok' : (x >= 40 ? 'mid' : 'low');
    return '<div class="gp-pctbar slim"><span class="' + cls + '" style="width:' + x + '%"></span></div><span class="small">' + x + '%</span>';
  }
  function emptyState(msg, btnLabel, act, attrs) {
    return '<div class="gp-empty"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg><p>' + msg + '</p>' +
      (btnLabel ? '<button type="button" class="btn btn-primary" data-k="' + act + '"' + (attrs || '') + '>' + btnLabel + '</button>' : '') + '</div>';
  }
  function field(label, inner) {
    return '<label class="gp-field"><span>' + esc(label) + '</span>' + inner + '</label>';
  }
  function inp(name, val, type, ph) { return '<input type="' + (type || 'text') + '" name="' + name + '" value="' + esc(val == null ? '' : val) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + '>'; }
  function ta(name, val, rows) { return '<textarea name="' + name + '" rows="' + (rows || 3) + '">' + esc(val == null ? '' : val) + '</textarea>'; }
  function sel(name, cur, opts, attrs) {
    return '<select name="' + name + '"' + (attrs || '') + '>' + opts.map(function (o) {
      return '<option value="' + esc(o.v) + '"' + (String(o.v) === String(cur) ? ' selected' : '') + '>' + esc(o.l) + '</option>';
    }).join('') + '</select>';
  }
  function selNum(name, cur) {
    var o = []; for (var i = 1; i <= 5; i++) o.push({ v: i, l: String(i) });
    return sel(name, cur, o);
  }
  function rowActions(fn) {
    return '<div class="gp-rowactions">' + fn + '</div>';
  }
  function iconDel(act, id) {
    return '<button type="button" class="icon-btn danger" data-k="' + act + '" data-id="' + id + '" aria-label="Remover">&times;</button>';
  }
  function thRow(cols, extraHead) {
    return '<tr>' + cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + (extraHead || '') + '</tr>';
  }


  function mDash() {
    var ms = db.melhorias;
    var bySt = {};
    ST_LIST.forEach(function (s) { bySt[s.k] = ms.filter(function (m) { return m.status === s.k; }).length; });
    var rank = ms.filter(function (m) { return m.status === 'ideia' || m.status === 'analise'; })
      .map(function (m) { return { m: m, s: impScore(m) }; })
      .sort(function (a, b) { return b.s - a.s; }).slice(0, 3);
    var ganhoTotal = db.indicadores.reduce(function (acc, i) {
      var a = num(i.antes), d = num(i.depois);
      if (!a) return acc;
      var g = i.dir === 'up' ? ((d - a) / a * 100) : ((a - d) / a * 100);
      return acc + Math.max(0, g);
    }, 0);
    var sustPend = ms.filter(function (m) { return m.status === 'concluida' && !(m.sust && m.sust.d30 && m.sust.d30.ok); });
    var evSemData = db.eventos.filter(function (e) { return !e.dataIni; });

    var H = '<div class="gp-card"><div class="gp-card-h"><h4>Sistema de Melhoria Contínua' + (db.org ? ' — ' + esc(db.org) : '') + '</h4>' +
      '<button type="button" class="btn btn-ghost" data-k="goto-mod" data-mod="m6">Configurar organização</button></div><div class="gp-card-b">' +
      '<div class="gp-kpis">' +
      kpi('Ideias ativas', bySt.ideia + bySt.analise) +
      kpi('Em execução', bySt.plano + bySt.implantacao) +
      kpi('Concluídas', bySt.concluida) +
      kpi('Sustentadas', bySt.sustentada) +
      kpi('Eventos Kaizen', db.eventos.length) +
      kpi('Ganhos acumulados', Math.round(ganhoTotal) + '%', true) +
      '</div></div></div>';

    H += '<div class="gp-grid-2">' +
      '<div class="gp-card"><div class="gp-card-h"><h4>Top prioridades</h4></div><div class="gp-card-b">' +
      (rank.length ? '<ul class="gp-toprisks">' + rank.map(function (r) {
        return '<li><span class="chip">score ' + r.s + '</span> <strong>' + esc(r.m.titulo) + '</strong> <em>' + stInfo(r.m.status).l + '</em></li>';
      }).join('') + '</ul>' : emptyState('Cadastre melhorias e priorize por impacto × urgência ÷ esforço.', 'Ir ao quadro', 'goto-mod', ' data-mod="m6"')) +
      '<div class="gp-card-foot"><button type="button" class="btn btn-soft" data-k="idea-new">Registrar ideia de melhoria</button></div>' +
      '</div></div>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Próximas ações</h4></div><div class="gp-card-b"><ul class="gp-steps">';
    if (trilhaDone().ok < trilhaDone().tot) H += '<li>Concluir a trilha de fundamentos (' + trilhaDone().ok + '/' + trilhaDone().tot + ').</li>';
    if (!db.procs.length) H += '<li>Mapear processos e desperdícios no módulo M3.</li>';
    if (!db.melhorias.length) H += '<li>Registrar as primeiras melhorias e priorizar.</li>';
    if (evSemData.length) H += '<li>Definir data inicial para ' + evSemData.length + ' evento(s) Kaizen.</li>';
    if (sustPend.length) H += '<li>Executar verificação de sustentação (30 dias) em ' + sustPend.length + ' melhoria(s).</li>';
    if (!db.reunioes.length) H += '<li>Instituir reunião diária de melhoria (5–15 min) e registrá-la no M6.</li>';
    if (H.endsWith('<ul class="gp-steps">')) H += '<li>Sistema em dia. Continue iterando o PDCA.</li>';
    H += '</ul></div></div></div>';
    return H;
  }
  function kpi(label, val, hi) {
    return '<div class="gp-kpi"><h5>' + esc(label) + '</h5><strong' + (hi ? ' style="color:var(--brand)"' : '') + '>' + esc(String(val)) + '</strong></div>';
  }

  function mFund() {
    var t = trilhaDone();
    var H = '<h3 class="gp-module-title">Trilha de fundamentos</h3>';
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Progresso da formação interna</h4><span class="chip">' + t.ok + '/' + t.tot + ' temas</span></div><div class="gp-card-b">' + pctBar(t.tot ? t.ok / t.tot * 100 : 0) + '</div></div>';
    TRILHA.forEach(function (g) {
      H += '<div class="gp-card"><div class="gp-card-h"><h4>' + esc(g.g) + '</h4></div><div class="gp-card-b"><ul class="gp-checklist">';
      g.items.forEach(function (it) {
        var done = !!db.trail[it.id];
        H += '<li class="gp-li-check"><label class="chk big"><input type="checkbox" data-kchk="trail" data-id="' + it.id + '"' + (done ? ' checked' : '') + '> <span class="' + (done ? 'small' : '') + '" style="' + (done ? 'text-decoration:line-through;color:var(--text-tertiary)' : 'font-weight:600') + '">' + esc(it.t) + '</span></label>' +
          '<details class="kz-det"><summary>Resumo do tema</summary><p class="hint">' + esc(it.d) + '</p></details></li>';
      });
      H += '</ul></div></div>';
    });
    return H;
  }

  function mCultura() {
    var lider = [
      'Vai ao Gemba diariamente e observa o trabalho real',
      'Faz perguntas antes de dar respostas',
      'Trata problema como oportunidade de desenvolver pessoas',
      'Remove barreiras reportadas pelo time',
      'Reconhece publicamente melhorias (mesmo pequenas)',
      'Pratica PDCA nas próprias rotinas',
      'Nunca usa o Kaizen como instrumento de punição'
    ];
    var ok = lider.filter(function (x) { return db.lideranca[x]; }).length;
    var H = '<h3 class="gp-module-title">Cultura Kaizen</h3>';
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Autoavaliação de Liderança Kaizen</h4><span class="chip">' + ok + '/' + lider.length + '</span></div><div class="gp-card-b">' + pctBar(ok / lider.length * 100) +
      '<ul class="gp-checklist">' + lider.map(function (x) {
        return '<li><label class="chk big"><input type="checkbox" data-kchk="lider" data-t="' + esc(x) + '"' + (db.lideranca[x] ? ' checked' : '') + '> <span>' + esc(x) + '</span></label></li>';
      }).join('') + '</ul></div></div>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Mapa de resistência à mudança</h4></div><div class="gp-card-b">' +
      (db.resist.length ? '<table class="gp-table"><thead>' + thRow(['Área / equipe', 'Nível', 'Causa provável', 'Ação de engajamento']) + '</thead><tbody>' +
        db.resist.map(function (r) {
          var lv = { baixo: 'st-ok', medio: 'st-run', alto: 'st-late' }[r.nivel] || 'st-idle';
          return '<tr><td>' + esc(r.area) + '</td><td><span class="gp-status ' + lv + '">' + esc(r.nivel) + '</span></td><td>' + esc(r.causa) + '</td><td>' + esc(r.acao) + '</td></tr>';
        }).join('') + '</tbody></table>' :
        '<p class="hint">Registre áreas com resistência, causas prováveis e a ação escolhida (envolvimento, comunicação, quick win, reconhecimento).</p>') +
      '<form class="gp-form-inline" data-form="resist">' +
      inp('area', '', 'text', 'Área/equipe') +
      sel('nivel', 'medio', [{ v: 'baixo', l: 'Resistência baixa' }, { v: 'medio', l: 'Média' }, { v: 'alto', l: 'Alta' }]) +
      inp('causa', '', 'text', 'Causa provável') +
      '<button class="btn btn-soft" type="submit">Registrar</button></form>' +
      '</div></div>';
    return H;
  }

  function mDiag() {
    var H = '<h3 class="gp-module-title">Diagnóstico de processos e desperdícios</h3>';
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Os 8 desperdícios (DOWNTIME)</h4></div><div class="gp-card-b"><div class="gp-chips">' +
      DOWNTIME.map(function (d) { return '<span class="chip">' + esc(d) + '</span>'; }).join('') +
      '</div><p class="hint" style="margin-top:10px">Ao registrar um processo abaixo, classifique cada desperdício encontrado por tipo, frequência e impacto — isso alimenta a priorização de melhorias.</p></div></div>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Registro de desperdícios por processo</h4></div><div class="gp-card-b">' +
      (db.procs.length ? '<div class="gp-scrollx"><table class="gp-table"><thead>' + thRow(['Processo/etapa', 'Desperdício', 'Freq.', 'Impacto', 'Observação']) + '</thead><tbody>' +
        db.procs.map(function (p) {
          var f = p.freq === 'alto' ? 'st-late' : (p.freq === 'medio' ? 'st-run' : 'st-idle');
          return '<tr><td>' + esc(p.proc) + '</td><td><span class="chip">' + esc(p.tipo) + '</span></td><td><span class="gp-status ' + f + '">' + esc(p.freq) + '</span></td><td>' + esc(String(p.imp)) + '/5</td><td>' + esc(p.obs) + '</td></tr>';
        }).join('') + '</tbody></table></div>' : '<p class="hint">Nenhum desperdício registrado.</p>') +
      '<form class="gp-form" data-form="proc" style="margin-top:14px"><div class="gp-form-row row-3">' +
      field('Processo / etapa', inp('proc', '', 'text', 'Ex.: Troca de molde')) +
      field('Tipo de desperdício', sel('tipo', DOWNTIME[0], DOWNTIME.map(function (d) { return { v: d, l: d }; }))) +
      field('Frequência', sel('freq', 'medio', [{ v: 'baixa', l: 'Baixa' }, { v: 'medio', l: 'Média' }, { v: 'alto', l: 'Alta' }])) +
      '</div><div class="gp-form-row row-3">' +
      field('Impacto (1–5)', selNum('imp', 3)) +
      '<div class="gp-field"><span>Observação</span>' + inp('obs', '', 'text', 'Evidência / dado') + '</div>' +
      '<div class="gp-field"><span>&nbsp;</span><button class="btn btn-primary" type="submit">Adicionar registro</button></div>' +
      '</div></form></div></div>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Gemba Walks realizados</h4><button type="button" class="btn btn-ghost" data-k="tpl-gemba">Checklist em branco</button></div><div class="gp-card-b">' +
      (db.gemba.length ? db.gemba.map(function (g) {
        return '<div class="gp-card" style="box-shadow:none;margin-bottom:12px"><div class="gp-card-h"><strong>' + fmtD(g.data) + ' · ' + esc(g.area) + '</strong>' + rowActions(iconDel('gemba-del', g.id)) + '</div><div class="gp-card-b"><p class="hint">' + esc(g.obs).replace(/\n/g, '<br>') + '</p></div></div>';
      }).join('') : '<p class="hint">Faça caminhadas semanais no local de trabalho: observe, pergunte "por que", anote fatos (não opiniões) e transforme cada achado em ideia de melhoria.</p>') +
      '<form class="gp-form-inline" data-form="gemba">' +
      inp('data', today(), 'date') +
      inp('area', '', 'text', 'Área percorrida') +
      '<button class="btn btn-soft" type="submit">Registrar walk</button></form>' +
      '</div></div>';
    return H;
  }


  function mFerramentas() {
    var H = '<h3 class="gp-module-title">Ferramentas essenciais</h3>';
    H += '<div class="gp-grid-2">';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>5 Porquês</h4><button type="button" class="btn btn-ghost" data-k="tpl-5w">Modelo em branco</button></div><div class="gp-card-b">' +
      (db.cinco.length ? db.cinco.map(function (c) {
        var chain = [c.q1, c.q2, c.q3, c.q4, c.q5].filter(Boolean);
        return '<div class="gp-card" style="box-shadow:none;margin-bottom:12px"><div class="gp-card-h"><strong>' + esc(c.prob) + '</strong>' + rowActions(iconDel('five-del', c.id)) + '</div><div class="gp-card-b"><ol class="gp-steps">' +
          chain.map(function (q, i) { return '<li><strong>Por quê ' + (i + 1) + ':</strong> ' + esc(q) + '</li>'; }).join('') +
          '</ol>' + (c.raiz ? '<p class="hint"><strong>Causa raiz:</strong> ' + esc(c.raiz) + '</p>' : '') +
          (c.acao ? '<p class="hint"><strong>Ação contra-medida:</strong> ' + esc(c.acao) + '</p>' : '') + '</div></div>';
      }).join('') : '<p class="hint">Pergunte "por que?" cinco vezes para descer do sintoma à causa raiz. Evite parar em culpa de pessoa — procure falha de processo.</p>') +
      '<form class="gp-form" data-form="five" style="margin-top:10px">' +
      field('Problema observado', inp('prob', '', 'text', 'Ex.: Atraso na expedição')) +
      field('1º Por quê?', inp('q1', '', 'text', '')) +
      field('2º Por quê?', inp('q2', '', 'text', '')) +
      field('3º Por quê?', inp('q3', '', 'text', '')) +
      field('4º Por quê?', inp('q4', '', 'text', '')) +
      field('5º Por quê? (causa raiz)', inp('q5', '', 'text', '')) +
      field('Causa raiz identificada', inp('raiz', '', 'text', '')) +
      field('Contra-medida proposta', inp('acao', '', 'text', '')) +
      '<div class="gp-form-actions"><button class="btn btn-primary" type="submit">Salvar análise</button></div></form></div></div>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Ishikawa (Espinha de Peixe)</h4></div><div class="gp-card-b">';
    var SEIS_M = ['Método', 'Máquina', 'Mão de obra', 'Material', 'Medida', 'Meio ambiente'];
    if (db.ishi.length) {
      H += db.ishi.map(function (f) {
        return '<div class="gp-card" style="box-shadow:none;margin-bottom:12px"><div class="gp-card-h"><strong>Efeito: ' + esc(f.efeito) + '</strong>' + rowActions(iconDel('ishi-del', f.id)) + '</div><div class="gp-card-b">' +
          SEIS_M.map(function (m) {
            var vals = (f[m] || []).filter(Boolean);
            return '<p class="hint"><span class="chip">' + esc(m) + '</span> ' + (vals.length ? esc(vals.join(' · ')) : '—') + '</p>';
          }).join('') + '</div></div>';
      }).join('');
    } else {
      H += '<p class="hint">Mapeie as causas prováveis de um efeito indesejado nas 6 categorias (6M). Depois priorize as causas com mais evidência para investigar com 5 Porquês.</p>';
    }
    H += '<form class="gp-form" data-form="ishi" style="margin-top:10px">' +
      field('Efeito / problema', inp('efeito', '', 'text', 'Ex.: Retrabalho acima da meta')) +
      '<div class="gp-form-row row-2">' +
      field('Método', ta('Metodo', '', 2)) +
      field('Máquina', ta('Maquina', '', 2)) +
      field('Mão de obra', ta('MaoDeObra', '', 2)) +
      field('Material', ta('Material', '', 2)) +
      field('Medida', ta('Medida', '', 2)) +
      field('Meio ambiente', ta('MeioAmbiente', '', 2)) +
      '</div><div class="gp-form-actions"><button class="btn btn-primary" type="submit">Salvar diagrama</button></div></form></div></div>';

    H += '</div>';

    var s5 = db.s5 || {};
    var S5 = [
      { k: 'seiri', n: '1S · Seiri — Utilização', d: 'Separar o necessário do desnecessário; descartar o que não serve.' },
      { k: 'seiton', n: '2S · Seiton — Organização', d: 'Um lugar definido para cada item; identificação visual; fácil pegar e devolver.' },
      { k: 'seiso', n: '3S · Seiso — Limpeza', d: 'Limpar é inspecionar: eliminar fontes de sujeira e defeitos.' },
      { k: 'seiketsu', n: '4S · Seiketsu — Padronização', d: 'Padrões visuais simples que mantêm os 3 primeiros S.' },
      { k: 'shitsuke', n: '5S · Shitsuke — Disciplina', d: 'Rotina de auditoria e hábito de sustentar o padrão.' }
    ];
    var total = S5.reduce(function (a, s) { return a + num(s5[s.k]); }, 0);
    var cls = total >= 16 ? 'Excelente' : (total >= 12 ? 'Bom' : (total >= 8 ? 'Atenção' : 'Crítico'));
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Auditoria 5S</h4><span class="chip">' + total + '/20 · ' + cls + '</span></div><div class="gp-card-b">' +
      pctBar(total / 20 * 100) +
      '<div class="gp-form" style="margin-top:12px">' + S5.map(function (s) {
        return '<div class="gp-form-row row-3"><label class="gp-field"><span>' + esc(s.n) + '</span>' +
          sel('s5_' + s.k, s5[s.k] || 0, [{ v: 0, l: '0 — Inexistente' }, { v: 1, l: '1 — Inicial' }, { v: 2, l: '2 — Parcial' }, { v: 3, l: '3 — Bom' }, { v: 4, l: '4 — Excelente' }], 'data-kchg="s5" data-id="' + s.k + '"') +
          '</label><p class="hint">' + esc(s.d) + '</p></div>';
      }).join('') +
      field('Observações da auditoria', ta('s5obs', s5.obs, 2).replace('name="s5obs"', 'name="s5obs" data-kchg="s5" data-id="obs"')) +
      '</div><div class="gp-card-foot"><button type="button" class="btn btn-ghost" data-k="tpl-5s">Checklist 5S detalhado (25 itens)</button></div></div></div>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Qual ferramenta usar?</h4></div><div class="gp-card-b"><ul class="gp-steps">' +
      '<li><strong>Problema simples e recorrente</strong> → 5 Porquês + ação imediata no quadro Kaizen.</li>' +
      '<li><strong>Causas múltiplas e incertas</strong> → Ishikawa para levantar hipóteses → 5 Porquês nas causas críticas.</li>' +
      '<li><strong>Desorganização do local</strong> → Programa 5S com auditoria mensal.</li>' +
      '<li><strong>Ganho grande que exige dedicação</strong> → Evento Kaizen de uma semana (M5).</li>' +
      '<li><strong>Melhorias pequenas e contínuas</strong> → Rotina diária do quadro (M6).</li>' +
      '</ul></div></div>';
    return H;
  }

  function agendaPadrao() {
    return [
      { tema: 'Dia 1 · Preparação e treinamento', atividades: 'Kick-off, definição de meta SMART, treinamento nos conceitos (desperdícios, VSM básico), coleta de dados atuais.', entregavel: 'Meta acordada + linha de base medida' },
      { tema: 'Dia 2 · Diagnóstico no Gemba', atividades: 'Observação do fluxo real, mapeamento do estado atual, cronometragem, registro de desperdícios.', entregavel: 'Mapa do estado atual + lista de desperdícios' },
      { tema: 'Dia 3 · Geração de contramedidas', atividades: 'Brainstorming estruturado, matriz de esforço x impacto, seleção das contramedidas prioritárias.', entregavel: 'Lista priorizada de contramedidas' },
      { tema: 'Dia 4 · Implantação rápida', atividades: 'Implementação das contramedidas (layout, padrões, kanban de material, ajustes de método), teste piloto.', entregavel: 'Contramedidas implantadas' },
      { tema: 'Dia 5 · Validação e apresentação', atividades: 'Medição do novo estado, comparação antes/depois, padronização, plano de sustentação 30 dias, apresentação à liderança.', entregavel: 'Relatório do evento + plano 30/60/90' }
    ];
  }

  function mEventos() {
    var H = '<h3 class="gp-module-title">Eventos Kaizen (blitz de melhoria)</h3>';
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Eventos cadastrados</h4>' +
      rowActions('<button type="button" class="btn btn-primary" data-k="evt-new">Novo evento</button><button type="button" class="btn btn-ghost" data-k="tpl-evt">Modelo em branco</button>') +
      '</div><div class="gp-card-b">' +
      (db.eventos.length ? db.eventos.map(function (e) {
        var st = e.status === 'realizado' ? '<span class="gp-status st-ok">Realizado</span>' : '<span class="gp-status st-run">Planejado</span>';
        return '<div class="gp-card" style="box-shadow:none;margin-bottom:14px">' +
          '<div class="gp-card-h"><div><strong>' + esc(e.nome || '(sem nome)') + '</strong> ' + st + '<br><span class="small">' + esc(e.area || '') + (e.dataIni ? ' · início ' + fmtD(e.dataIni) : '') + '</span></div>' +
          rowActions(iconDel('evt-del', e.id)) + '</div>' +
          '<div class="gp-card-b">' +
          (e.objetivo ? '<p class="hint"><strong>Objetivo:</strong> ' + esc(e.objetivo) + '</p>' : '') +
          '<p class="hint"><strong>Líder:</strong> ' + esc(e.lider || '—') + ' · <strong>Facilitador:</strong> ' + esc(e.facilitador || '—') + ' · <strong>Equipe:</strong> ' + esc(e.equipe || '—') + '</p>' +
          '<details class="kz-det" open><summary>Agenda editável (5 dias)</summary>' +
          (e.dias || []).map(function (d, i) {
            return '<div class="gp-form-row row-2" style="margin-top:8px">' +
              '<label class="gp-field"><span>' + esc(d.tema || ('Dia ' + (i + 1))) + '</span>' +
              '<textarea rows="2" data-kchg="evday" data-ei="' + i + '" data-f="atividades" data-pid="' + e.id + '">' + esc(d.atividades || '') + '</textarea></label>' +
              '<label class="gp-field"><span>Entregável do dia</span>' +
              '<input type="text" data-kchg="evday" data-ei="' + i + '" data-f="entregavel" data-pid="' + e.id + '" value="' + esc(d.entregavel || '') + '"></label></div>';
          }).join('') + '</details>' +
          '<div class="gp-form-inline" style="margin-top:8px">' +
          sel('evst', e.status, [{ v: 'planejado', l: 'Planejado' }, { v: 'realizado', l: 'Realizado' }], 'data-kchg="evst" data-id="' + e.id + '"') +
          '</div></div></div>';
      }).join('') :
      emptyState('Um evento Kaizen reúne um time por 5 dias para resolver um problema específico com ganho rápido. Cadastre o primeiro evento.', 'Criar evento', 'evt-new')) +
      '</div></div>';
    return H;
  }

  function evtModal() {
    openModal('Novo evento Kaizen',
      '<form data-form="evento" class="gp-form">' +
      field('Nome do evento', inp('nome', '', 'text', 'Ex.: Kaizen — Setup de prensa')) +
      field('Área / processo alvo', inp('area', '', 'text', '')) +
      field('Objetivo (meta SMART)', ta('objetivo', '', 2)) +
      '<div class="gp-form-row row-2">' +
      field('Líder do evento', inp('lider', '', 'text', '')) +
      field('Facilitador', inp('facilitador', '', 'text', '')) +
      '</div>' +
      field('Equipe (nomes/papéis)', ta('equipe', '', 2)) +
      field('Data de início', inp('dataIni', today(), 'date')) +
      '<div class="gp-form-actions"><button type="submit" class="btn btn-primary">Criar com agenda padrão</button></div></form>');
  }

  var ST_COLS = ST_LIST;

  function mQuadro() {
    var ms = db.melhorias;
    var H = '<h3 class="gp-module-title">Quadro Kaizen e rotina diária</h3>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Configuração da organização</h4></div><div class="gp-card-b">' +
      '<form class="gp-form-inline" data-form="org">' + inp('org', db.org, 'text', 'Nome da organização/unidade') +
      '<button class="btn btn-soft" type="submit">Salvar</button></form></div></div>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Quadro de melhorias</h4>' +
      rowActions('<button type="button" class="btn btn-primary" data-k="idea-new">+ Ideia</button>') + '</div><div class="gp-card-b">';
    H += '<div class="gp-kanban">';
    ST_COLS.forEach(function (c) {
      var col = ms.filter(function (m) { return m.status === c.k; })
        .sort(function (a, b) { return impScore(b) - impScore(a); });
      H += '<div class="gp-kanban-col"><header class="' + c.cls + '"><h5>' + c.l + '</h5><span>' + col.length + '</span></header><div class="gp-kcards">';
      col.forEach(function (m) {
        H += '<article class="gp-kanban-card" data-k="imp-edit" data-id="' + m.id + '">' +
          '<h6>' + esc(m.titulo) + '</h6>' +
          '<div class="gp-kmeta"><span class="chip">score ' + impScore(m) + '</span>' +
          (m.resp ? '<span>' + esc(m.resp) + '</span>' : '') + '</div>' +
          '<div class="gp-kactions">' +
          '<button type="button" class="icon-btn" data-k="imp-move" data-dir="-1" data-id="' + m.id + '" aria-label="Mover para trás">&#9664;</button>' +
          '<button type="button" class="icon-btn" data-k="imp-move" data-dir="1" data-id="' + m.id + '" aria-label="Avançar status">&#9654;</button>' +
          '<button type="button" class="icon-btn danger" data-k="imp-rm" data-id="' + m.id + '" aria-label="Apagar melhoria" title="Apagar melhoria">&times;</button>' +
          '</div></article>';
      });
      if (!col.length) H += '<p class="hint" style="padding:10px">—</p>';
      H += '</div></div>';
    });
    H += '</div></div></div>';

    H += '<div class="gp-grid-2">';
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Reunião diária de melhoria (5–15 min)</h4></div><div class="gp-card-b">' +
      (db.reunioes.length ? '<table class="gp-table"><thead>' + thRow(['Data', 'Tema / bloqueio', 'Ação combinada']) + '</thead><tbody>' +
        db.reunioes.slice(-12).reverse().map(function (r) {
          return '<tr><td>' + fmtD(r.data) + '</td><td>' + esc(r.tema) + '</td><td>' + esc(r.acao) + '</td></tr>';
        }).join('') + '</tbody></table>' : '<p class="hint">Roteiro sugerido: segurança primeiro → indicador de ontem → melhorias em execução → bloqueios → 1 ideia nova por pessoa.</p>') +
      '<form class="gp-form-inline" data-form="reuniao" style="margin-top:12px">' +
      inp('data', today(), 'date') +
      inp('tema', '', 'text', 'Tema/bloqueio') +
      inp('acao', '', 'text', 'Ação combinada') +
      '<button class="btn btn-soft" type="submit">Registrar</button></form></div></div>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Trabalho padronizado</h4></div><div class="gp-card-b">' +
      (db.padroes.length ? '<table class="gp-table"><thead>' + thRow(['Processo', 'Etapa/padrão atual', 'Revisado em']) + '</thead><tbody>' +
        db.padroes.map(function (p) {
          return '<tr><td>' + esc(p.proc) + '</td><td>' + esc(p.etapas) + '</td><td>' + fmtD(p.revistoEm) + '</td></tr>';
        }).join('') + '</tbody></table>' : '<p class="hint">Toda melhoria implantada precisa virar padrão: registre aqui o novo método aprovado e a data da última revisão.</p>') +
      '<form class="gp-form-inline" data-form="padrao" style="margin-top:12px">' +
      inp('proc', '', 'text', 'Processo') +
      inp('etapas', '', 'text', 'Resumo do padrão') +
      inp('revistoEm', today(), 'date') +
      '<button class="btn btn-soft" type="submit">Registrar</button></form></div></div>';

    H += '</div>';
    return H;
  }


  function mIndicadores() {
    var H = '<h3 class="gp-module-title">Indicadores, ganhos e sustentação</h3>';
    var inds = db.indicadores;
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Cálculo de ganhos</h4><button type="button" class="btn btn-ghost" data-k="tpl-print" data-tpl="tganhos">Relatório imprimível</button></div><div class="gp-card-b">' +
      (inds.length ? '<div class="gp-scrollx"><table class="gp-table"><thead>' + thRow(['Indicador', 'Antes', 'Depois', 'Meta', 'Ganho', 'Meta OK?']) + '</thead><tbody>' +
        inds.map(function (i) {
          var g = ganhoPct(i);
          var okMeta = i.meta === '' || i.meta == null ? '—' : (atingiuMeta(i) ? '<span class="gp-status st-ok">Sim</span>' : '<span class="gp-status st-late">Não</span>');
          return '<tr><td>' + esc(i.nome) + (i.melhoriaId ? '<br><span class="small">' + esc(melhoriaTitulo(i.melhoriaId)) + '</span>' : '') + '</td><td>' + esc(i.antes) + ' ' + esc(i.unidade) + '</td><td>' + esc(i.depois) + ' ' + esc(i.unidade) + '</td><td>' + esc(i.meta || '—') + '</td><td><strong style="color:' + (g >= 0 ? 'var(--ok)' : 'var(--danger)') + '">' + g.toFixed(1).replace('.', ',') + '%</strong></td><td>' + okMeta + '</td></tr>';
        }).join('') + '</tbody></table></div>' : emptyState('Registre indicadores com valor antes/depois para quantificar os ganhos do programa.', null)) +
      '<form class="gp-form" data-form="ind" style="margin-top:14px"><div class="gp-form-row row-3">' +
      field('Indicador', inp('nome', '', 'text', 'Ex.: Setup médio')) +
      field('Unidade', inp('unidade', '', 'text', 'min, %, R$…')) +
      field('Direção desejada', sel('dir', 'down', [{ v: 'down', l: 'Menor é melhor' }, { v: 'up', l: 'Maior é melhor' }])) +
      '</div><div class="gp-form-row row-3">' +
      field('Valor antes', inp('antes', '', 'text', '')) +
      field('Valor depois (atual)', inp('depois', '', 'text', '')) +
      field('Meta', inp('meta', '', 'text', '')) +
      '</div>' + field('Vincular à melhoria (opcional)', sel('melhoriaId', '', [{ v: '', l: '— nenhuma —' }].concat(db.melhorias.map(function (m) { return { v: m.id, l: m.titulo }; })))) +
      '<div class="gp-form-actions"><button class="btn btn-primary" type="submit">Adicionar indicador</button></div></form></div></div>';

    var cand = db.melhorias.filter(function (m) { return m.status === 'concluida' || m.status === 'sustentada'; });
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Sustentação das melhorias (30 · 60 · 90 dias)</h4></div><div class="gp-card-b">' +
      (cand.length ? cand.map(function (m) {
        var s = m.sust || {};
        function chk(f, label) {
          var v = s[f] && s[f].ok;
          return '<label class="chk big" style="margin-right:18px"><input type="checkbox" data-kchg="sust" data-id="' + m.id + '" data-f="' + f + '"' + (v ? ' checked' : '') + '> <span>' + label + '</span></label>';
        }
        return '<div class="gp-card" style="box-shadow:none;margin-bottom:10px"><div class="gp-card-h"><strong>' + esc(m.titulo) + '</strong>' + rowActions('<span class="' + stInfo(m.status).cls + ' gp-status">' + stInfo(m.status).l + '</span>' + iconDel('imp-rm', m.id)) + '</div>' +
          '<div class="gp-card-b gp-form-inline" style="align-items:center">' + chk('d30', '30 dias') + chk('d60', '60 dias') + chk('d90', '90 dias') +
          '<button type="button" class="btn btn-ghost" data-k="imp-sust-ok" data-id="' + m.id + '">Marcar como sustentada</button></div></div>';
      }).join('') : '<p class="hint">Conclua melhorias no quadro para habilitar o ciclo de sustentação. Sem verificação em 90 dias, o processo tende a regredir ao padrão antigo.</p>') +
      '</div></div>';
    return H;
  }
  function ganhoPct(i) {
    var a = num(i.antes), d = num(i.depois);
    if (!a) return 0;
    return i.dir === 'up' ? ((d - a) / a * 100) : ((a - d) / a * 100);
  }
  function atingiuMeta(i) {
    var meta = num(i.meta, NaN);
    if (isNaN(meta)) return false;
    return i.dir === 'up' ? num(i.depois) >= meta : num(i.depois) <= meta;
  }
  function melhoriaTitulo(id) {
    var r = db.melhorias.filter(function (m) { return m.id === id; })[0];
    return r ? r.titulo : '';
  }

  function mIntegracao() {
    var H = '<h3 class="gp-module-title">Integração metodológica e modelos</h3>';
    H += '<div class="gp-grid-2">';
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Kaizen × A3 × DMAIC × MASP</h4></div><div class="gp-card-b"><ul class="gp-steps">' +
      '<li><strong>Problema pequeno / resolvido na hora</strong> → ciclo rápido do Quadro Kaizen (PDCA diário).</li>' +
      '<li><strong>Problema médio que cabe em uma página</strong> → <em>A3</em>: contexto, situação atual, meta, análise, contramedidas, plano e seguimento. Use o botão A3 dentro de cada melhoria.</li>' +
      '<li><strong>Problema complexo com dados pesados</strong> → <em>DMAIC</em> (Definir, Medir, Analisar, Melhorar, Controlar).</li>' +
      '<li><strong>Versão clássica/acadêmica</strong> → <em>MASP</em> (Método de Análise e Solução de Problemas).</li>' +
      '</ul><p class="hint">O mesmo problema pode migrar de ferramenta: comece no quadro; se crescer, formalize num A3; se exigir estatística, evolua para DMAIC/MASP.</p></div></div>';
    H += '<div class="gp-card"><div class="gp-card-h"><h4>Diretrizes de implantação</h4></div><div class="gp-card-b"><ul class="gp-steps">' +
      '<li>Mantenha quadro físico no Gemba para visibilidade + este painel como registro oficial.</li>' +
      '<li>Exporte o relatório de cada evento com fotos antes/depois e arquive.</li>' +
      '<li>Revisão mensal da liderança: ranking de prioridades + auditoria 5S.</li>' +
      '<li>Vincule cada evento Kaizen a um objetivo estratégico da organização.</li>' +
      '</ul></div></div>';
    H += '</div>';

    H += '<div class="gp-card"><div class="gp-card-h"><h4>Modelos e checklists (10 documentos)</h4></div><div class="gp-card-b"><div class="gp-tplgrid">';
    TPLS.forEach(function (t) {
      H += '<div class="tplcard"><strong>' + esc(t.n) + '</strong><p class="hint">' + esc(t.d) + '</p>' +
        rowActions('<button type="button" class="btn btn-soft btn-sm" data-k="tpl-print" data-tpl="' + t.id + '">Abrir/imprimir</button>' +
          (t.md ? '<button type="button" class="btn btn-primary btn-sm" data-k="tpl-doc" data-tpl="' + t.id + '">Baixar .doc</button>' : '')) +
        '</div>';
    });
    H += '</div></div></div>';
    return H;
  }

  var TPLS = [
    { id: 't5w', n: '1. Checklist 5 Porquês', d: 'Formulário para conduzir a análise de causa raiz passo a passo.', build: tpl5w },
    { id: 'tish', n: '2. Diagrama Ishikawa (6M)', d: 'Espinha de peixe em branco para levantamento de causas.', build: tplIshi },
    { id: 't5s', n: '3. Auditoria 5S detalhada', d: 'Checklist pontuado por área para auditoria mensal.', build: tpl5s },
    { id: 'tgemba', n: '4. Roteiro de Gemba Walk', d: 'Checklist de observação no local de trabalho.', build: tplGemba },
    { id: 'tevt', n: '5. Plano de Evento Kaizen (5 dias)', d: 'Agenda padrão, papéis e entregáveis por dia.', build: tplEvt },
    { id: 'ta3', n: '6. Relatório A3 em branco', d: 'Estrutura de uma página para contar o problema até a solução.', build: tplA3 },
    { id: 'tquadro', n: '7. Snapshot do Quadro Kaizen', d: 'Estado atual do quadro de melhorias para reunião.', build: tplQuadro, md: true },
    { id: 'trank', n: '8. Ranking de priorização', d: 'Melhorias ordenadas por impacto × urgência ÷ esforço.', build: tplRank, md: true },
    { id: 'tganhos', n: '9. Cálculo de ganhos', d: 'Tabela antes/depois/meta com ganho percentual.', build: tplGanhos, md: true },
    { id: 'tapr', n: '10. Apresentação de projeto de melhoria', d: 'Documento pronto para apresentar uma melhoria escolhida.', build: tplApr }
  ];

  function tplHead(title) {
    return '<h2>' + title + '</h2><p class="pr-meta">' + esc(db.org || 'Organização') + ' · ' + fmtD(today()) + '</p>';
  }
  function tpl5w() {
    return tplHead('Análise 5 Porquês') +
      '<table class="pr-table"><tr><th>Problema observado</th><td>&nbsp;</td></tr><tr><th>1º Por quê?</th><td>&nbsp;</td></tr><tr><th>2º Por quê?</th><td>&nbsp;</td></tr><tr><th>3º Por quê?</th><td>&nbsp;</td></tr><tr><th>4º Por quê?</th><td>&nbsp;</td></tr><tr><th>5º Por quê? (causa raiz)</th><td>&nbsp;</td></tr><tr><th>Causa raiz identificada</th><td>&nbsp;</td></tr><tr><th>Contra-medida</th><td>&nbsp;</td></tr><tr><th>Responsável / prazo</th><td>&nbsp;</td></tr></table>' +
      '<p class="hint">Regra: se um porquê apontar uma pessoa, continue perguntando até chegar a um processo.</p>';
  }
  function tplIshi() {
    var Ms = ['Método', 'Máquina', 'Mão de obra', 'Material', 'Medida', 'Meio ambiente'];
    return tplHead('Diagrama de causa e efeito (Ishikawa)') +
      '<p>Efeito analisado: ______________________________________________</p>' +
      '<ul>' + Ms.map(function (m) { return '<li><strong>' + m + ':</strong> ____________________________________</li>'; }).join('') + '</ul>' +
      '<p>Causas priorizadas para investigação: ________________________</p>';
  }


  function tpl5s() {
    var IT = [
      ['Seiri', 'Itens desnecessários foram removidos do posto'],
      ['Seiri', 'Não há material pessoal ou obsoleto nas áreas de trabalho'],
      ['Seiri', 'Ferramentas sem uso frequente estão armazenadas fora da célula'],
      ['Seiton', 'Cada item tem local definido, identificado e sombreado'],
      ['Seiton', 'Layout permite pegar e devolver qualquer item em menos de 30 segundos'],
      ['Seiton', 'Sinalização de piso/prateleira está legível'],
      ['Seiso', 'Equipamentos estão limpos e sem vazamentos'],
      ['Seiso', 'Fontes de sujeira foram eliminadas (não apenas encobertas)'],
      ['Seiso', 'Limpeza é feita junto com inspeção (checklist aplicado)'],
      ['Seiketsu', 'Padrões visuais dos 3 primeiros S estão documentados'],
      ['Seiketsu', 'Frequência e responsável da limpeza estão definidos'],
      ['Seiketsu', 'Itens compartilhados têm padrão de devolução claro'],
      ['Shitsuke', 'Auditoria 5S acontece na frequência planejada'],
      ['Shitsuke', 'Resultados de auditoria são divulgados à equipe'],
      ['Shitsuke', 'Desvios identificados viram ações com prazo']
    ];
    var extra = [
      ['Seiri', 'Arquivos/registros obsoletos foram descartados conforme política'],
      ['Seiri', 'Estoque em processo está no nível planejado'],
      ['Seiton', 'Ferramentas de uso diário estão a alcance da mão'],
      ['Seiso', 'EPIs estão limpos, completos e em condições de uso'],
      ['Seiso', 'Áreas comuns (pia, corredor, depósito) estão conservadas'],
      ['Seiketsu', 'Checklist visual de manutenção autônoma existe no posto'],
      ['Shitsuke', 'Novos funcionários recebem treinamento nos 5S'],
      ['Shitsuke', 'Liderança participa das auditorias'],
      ['Shitsuke', 'Melhorias originadas do 5S foram registradas no quadro'],
      ['Shitsuke', 'Nenhum item reprovado repetiu-se na última auditoria']
    ];
    return tplHead('Auditoria 5S detalhada') +
      '<p>Área auditada: ____________ Auditores: ____________ Data: ____/____/______</p>' +
      '<table class="pr-table"><thead><tr><th>S</th><th>Item</th><th>0–4</th><th>Ação necessária</th></tr></thead><tbody>' +
      IT.concat(extra).map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td></td><td></td></tr>'; }).join('') +
      '</tbody></table><p>Pontuação total: ______ / 100 · Classificação: ____________</p>';
  }
  function tplGemba() {
    return tplHead('Roteiro de Gemba Walk') +
      '<p>Área percorrida: ____________ Responsável pelo walk: ____________ Data: ____/____/______</p>' +
      '<table class="pr-table"><thead><tr><th>#</th><th>Pergunta de observação</th><th>Fato observado</th><th>Vira melhoria?</th></tr></thead><tbody>' +
      ['O trabalho segue o padrão definido? Onde há desvio?',
        'Onde o fluxo para? (esperas, acúmulos, retrabalho)',
        'O que exige caminhada/movimentação desnecessária?',
        'Quais itens faltam ou estão em excesso no posto?',
        'Onde há risco latente de segurança ou qualidade?',
        'O que o operador mudaria se pudesse?',
        'Que informação é registrada duas vezes?'].map(function (q, i) {
          return '<tr><td>' + (i + 1) + '</td><td>' + q + '</td><td></td><td></td></tr>';
        }).join('') + '</tbody></table>';
  }
  function tplEvt() {
    var ag = agendaPadrao();
    return tplHead('Plano de Evento Kaizen — semana intensiva') +
      '<table class="pr-table"><tr><th>Tema</th><td>&nbsp;</td></tr><tr><th>Área</th><td>&nbsp;</td></tr><tr><th>Meta SMART</th><td>&nbsp;</td></tr><tr><th>Líder / Facilitador</th><td>&nbsp;</td></tr><tr><th>Equipe</th><td>&nbsp;</td></tr></table>' +
      '<h3>Agenda</h3><table class="pr-table"><thead><tr><th>Dia</th><th>Foco</th><th>Atividades</th><th>Entregável</th></tr></thead><tbody>' +
      ag.map(function (d) {
        var parts = d.tema.split('·');
        return '<tr><td>' + parts[0].trim().replace('Dia ', '') + '</td><td>' + parts[1].trim() + '</td><td>' + d.atividades + '</td><td>' + d.entregavel + '</td></tr>';
      }).join('') + '</tbody></table><p>Ganhos obtidos: ____________ Sustentação 30/60/90 — responsável: ____________</p>';
  }
  function tplA3() {
    return tplHead('Relatório A3') +
      [['1. Contexto / importância do tema'], ['2. Situação atual (fatos e dados)'], ['3. Meta / condição alvo'],
        ['4. Análise de causas (5 Porquês / Ishikawa)'], ['5. Contramedidas propostas'], ['6. Plano de ação (quem, quando)'],
        ['7. Seguimento / sustentação']].map(function (s) {
          return '<h3>' + s[0] + '</h3><div style="border-bottom:1px solid #ccc;height:64px"></div>';
        }).join('');
  }
  function tplQuadro() {
    var rows = '';
    ST_LIST.forEach(function (st) {
      db.melhorias.filter(function (m) { return m.status === st.k; }).forEach(function (m) {
        rows += '<tr><td>' + st.l + '</td><td>' + esc(m.titulo) + '</td><td>' + impScore(m) + '</td><td>' + esc(m.resp || '—') + '</td></tr>';
      });
    });
    return tplHead('Snapshot do Quadro Kaizen') +
      '<table class="pr-table"><thead><tr><th>Status</th><th>Melhoria</th><th>Score</th><th>Responsável</th></tr></thead><tbody>' +
      (rows || '<tr><td colspan="4">Sem melhorias registradas.</td></tr>') + '</tbody></table>';
  }
  function tplRank() {
    var rank = db.melhorias.map(function (m) { return { m: m, s: impScore(m) }; }).sort(function (a, b) { return b.s - a.s; });
    return tplHead('Ranking de priorização (Impacto × Urgência ÷ Esforço)') +
      '<table class="pr-table"><thead><tr><th>#</th><th>Melhoria</th><th>I</th><th>U</th><th>E</th><th>Score</th><th>Status</th></tr></thead><tbody>' +
      (rank.length ? rank.map(function (r, i) {
        return '<tr><td>' + (i + 1) + '</td><td>' + esc(r.m.titulo) + '</td><td>' + esc(String(r.m.impacto)) + '</td><td>' + esc(String(r.m.urgencia)) + '</td><td>' + esc(String(r.m.esforco)) + '</td><td><strong>' + r.s + '</strong></td><td>' + stInfo(r.m.status).l + '</td></tr>';
      }).join('') : '<tr><td colspan="7">Sem melhorias registradas.</td></tr>') + '</tbody></table>';
  }
  function tplGanhos() {
    return tplHead('Cálculo de ganhos do programa') +
      '<table class="pr-table"><thead><tr><th>Indicador</th><th>Antes</th><th>Depois</th><th>Meta</th><th>Ganho</th><th>Meta atingida</th></tr></thead><tbody>' +
      (db.indicadores.length ? db.indicadores.map(function (i) {
        return '<tr><td>' + esc(i.nome) + '</td><td>' + esc(i.antes) + ' ' + esc(i.unidade) + '</td><td>' + esc(i.depois) + ' ' + esc(i.unidade) + '</td><td>' + esc(i.meta || '—') + '</td><td>' + ganhoPct(i).toFixed(1).replace('.', ',') + '%</td><td>' + (i.meta ? (atingiuMeta(i) ? 'Sim' : 'Não') : '—') + '</td></tr>';
      }).join('') : '<tr><td colspan="6">Sem indicadores.</td></tr>') + '</tbody></table>';
  }
  function tplApr() {
    if (!db.melhorias.length) { toast('Cadastre uma melhoria primeiro.', 'info'); return; }
    openModal('Apresentação de projeto de melhoria',
      field('Escolha a melhoria', sel('aprmel', db.melhorias[0].id, db.melhorias.map(function (m) { return { v: m.id, l: m.titulo }; }))) +
      '<div class="gp-form-actions"><button type="button" class="btn btn-primary" data-k="apr-go">Gerar documento</button></div>');
  }
  function aprBuild(mid) {
    var m = db.melhorias.filter(function (x) { return x.id === mid; })[0];
    if (!m) return null;
    var a = m.a3 || {};
    var inds = db.indicadores.filter(function (i) { return i.melhoriaId === mid; });
    return tplHead('Projeto de melhoria — ' + esc(m.titulo)) +
      '<table class="pr-table">' +
      '<tr><th>Problema / oportunidade</th><td>' + esc(m.desc || a.fundo || '—') + '</td></tr>' +
      '<tr><th>Situação atual</th><td>' + esc(a.atual || '—') + '</td></tr>' +
      '<tr><th>Meta</th><td>' + esc(a.meta || '—') + '</td></tr>' +
      '<tr><th>Análise de causas</th><td>' + esc(a.causas || '—') + '</td></tr>' +
      '<tr><th>Contramedidas</th><td>' + esc(a.contra || '—') + '</td></tr>' +
      '<tr><th>Resultado</th><td>' + (inds.length ? inds.map(function (i) { return esc(i.nome) + ': ' + esc(i.antes) + ' → ' + esc(i.depois) + ' (' + ganhoPct(i).toFixed(1).replace('.', ',') + '%)'; }).join('<br>') : esc(a.seg || '—')) + '</td></tr>' +
      '<tr><th>Responsável / status</th><td>' + esc(m.resp || '—') + ' · ' + stInfo(m.status).l + '</td></tr>' +
      '</table>';
  }


  function buildProgramaMd() {
    var L = [];
    L.push('# Programa de Melhoria Contínua (Kaizen)');
    if (db.org) L.push('**Organização:** ' + db.org);
    L.push('**Gerado em:** ' + fmtD(today()));
    var t = trilhaDone();
    L.push('');
    L.push('## 1. Fundamentos');
    L.push('- Trilha concluída: ' + t.ok + '/' + t.tot + ' temas.');
    TRILHA.forEach(function (g) {
      L.push('');
      L.push('### ' + g.g);
      g.items.forEach(function (it) { L.push('- [' + (db.trail[it.id] ? 'x' : ' ') + '] ' + it.t); });
    });
    L.push('');
    L.push('## 2. Cultura');
    var lk = Object.keys(db.lideranca).filter(function (k) { return db.lideranca[k]; });
    L.push('- Práticas de liderança assumidas: ' + (lk.length ? lk.join('; ') : 'nenhuma ainda.'));
    db.resist.forEach(function (r) { L.push('- Resistência em ' + r.area + ' (' + r.nivel + '). Causa: ' + r.causa + '. Ação: ' + r.acao); });
    L.push('');
    L.push('## 3. Diagnóstico de desperdícios');
    if (db.procs.length) {
      L.push('| Processo | Desperdício | Freq. | Impacto | Observação |');
      L.push('| --- | --- | --- | --- | --- |');
      db.procs.forEach(function (p) { L.push('| ' + p.proc + ' | ' + p.tipo + ' | ' + p.freq + ' | ' + p.imp + '/5 | ' + (p.obs || '') + ' |'); });
    } else L.push('_Nenhum registro._');
    db.gemba.forEach(function (g) { L.push('- Gemba Walk ' + fmtD(g.data) + ' — ' + g.area + ': ' + String(g.obs || '').replace(/\n/g, ' ')); });
    if (db.cinco.length) {
      L.push('');
      L.push('## 4. Análises 5 Porquês');
      db.cinco.forEach(function (c) {
        L.push('');
        L.push('**' + c.prob + '**');
        [c.q1, c.q2, c.q3, c.q4, c.q5].forEach(function (q, i) { if (q) L.push((i + 1) + '. Por quê? ' + q); });
        if (c.raiz) L.push('- **Causa raiz:** ' + c.raiz);
        if (c.acao) L.push('- **Contra-medida:** ' + c.acao);
      });
    }
    if (db.ishi.length) {
      L.push('');
      L.push('## 5. Diagramas Ishikawa');
      db.ishi.forEach(function (f) {
        L.push('');
        L.push('**Efeito: ' + f.efeito + '**');
        ['Metodo', 'Maquina', 'MaoDeObra', 'Material', 'Medida', 'MeioAmbiente'].forEach(function (k) {
          var vals = (f[k] || []).filter(Boolean);
          if (vals.length) L.push('- ' + k + ': ' + vals.join('; '));
        });
      });
    }
    var s5 = db.s5 || {};
    var s5tot = ['seiri', 'seiton', 'seiso', 'seiketsu', 'shitsuke'].reduce(function (a, k) { return a + num(s5[k]); }, 0);
    L.push('');
    L.push('## 6. Auditoria 5S');
    L.push('- Pontuação: ' + s5tot + '/20.' + (s5.obs ? ' Observações: ' + s5.obs : ''));
    L.push('');
    L.push('## 7. Quadro Kaizen e priorização');
    var rank = db.melhorias.map(function (m) { return { m: m, s: impScore(m) }; }).sort(function (a, b) { return b.s - a.s; });
    rank.forEach(function (r, i) {
      L.push((i + 1) + '. **' + r.m.titulo + '** — score ' + r.s + ' (' + stInfo(r.m.status).l + ')' + (r.m.resp ? ', resp.: ' + r.m.resp : ''));
      if (r.m.desc) L.push('   - ' + r.m.desc);
      var a = r.m.a3;
      if (a && (a.atual || a.meta || a.causas || a.contra || a.seg)) {
        if (a.atual) L.push('   - Situação atual: ' + a.atual);
        if (a.meta) L.push('   - Meta: ' + a.meta);
        if (a.causas) L.push('   - Causas: ' + a.causas);
        if (a.contra) L.push('   - Contramedidas: ' + a.contra);
        if (a.seg) L.push('   - Seguimento: ' + a.seg);
      }
    });
    if (!rank.length) L.push('_Nenhuma melhoria registrada._');
    if (db.eventos.length) {
      L.push('');
      L.push('## 8. Eventos Kaizen');
      db.eventos.forEach(function (e) {
        L.push('');
        L.push('**' + (e.nome || '(evento)') + '** — ' + (e.area || '') + (e.dataIni ? ', início ' + fmtD(e.dataIni) : '') + ' (' + (e.status || 'planejado') + ')');
        L.push('- Objetivo: ' + (e.objetivo || '—'));
        L.push('- Líder: ' + (e.lider || '—') + ' · Facilitador: ' + (e.facilitador || '—') + ' · Equipe: ' + (e.equipe || '—'));
        (e.dias || []).forEach(function (d, i) { L.push('- Dia ' + (i + 1) + ' (' + d.tema + '): ' + d.atividades + ' → ' + d.entregavel); });
      });
    }
    if (db.indicadores.length) {
      L.push('');
      L.push('## 9. Indicadores e ganhos');
      L.push('| Indicador | Antes | Depois | Meta | Ganho |');
      L.push('| --- | --- | --- | --- | --- |');
      db.indicadores.forEach(function (i) {
        L.push('| ' + i.nome + ' | ' + i.antes + ' ' + i.unidade + ' | ' + i.depois + ' ' + i.unidade + ' | ' + (i.meta || '—') + ' | ' + ganhoPct(i).toFixed(1).replace('.', ',') + '% |');
      });
    }
    L.push('');
    L.push('## 10. Rotina');
    db.reunioes.slice(-10).forEach(function (r) { L.push('- Reunião ' + fmtD(r.data) + ': ' + r.tema + ' → ' + r.acao); });
    db.padroes.forEach(function (p) { L.push('- Padrão: ' + p.proc + ' — ' + p.etapas + ' (revisto em ' + fmtD(p.revistoEm) + ')'); });
    return L.join('\n');
  }

  function htmlToText(html) {
    var d = document.createElement('div');
    d.innerHTML = html.replace(/<\/(p|div|h[1-6]|li|tr)>/gi, '\n').replace(/<br\s*\/?>/gi, '\n').replace(/<t[dh][^>]*>/gi, ' | ');
    var t = d.textContent || '';
    return t.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/[ \t]{2,}/g, ' ').trim();
  }
  function docWrap(title, bodyHtml) {
    return '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>' + esc(title) + '</title>' +
      '<style>@page{size:A4;margin:2cm}body{font-family:Calibri,Arial,sans-serif;font-size:11pt;color:#111;line-height:1.45}h1{font-size:20pt;margin:0 0 4pt}h2{font-size:14pt;border-bottom:1px solid #999;padding-bottom:3pt;margin-top:18pt}h3{font-size:12pt}table{border-collapse:collapse;width:100%;margin:8pt 0}th,td{border:1px solid #999;padding:5pt 7pt;text-align:left;font-size:10pt}th{background:#eee}.meta{color:#666;font-size:9pt}</style></head><body>' + bodyHtml + '</body></html>';
  }

  function mdTable(headers, rows) {
    return '<table class="pr-table"><thead><tr>' + headers.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }

  function buildProgramaHtml() {
    var t = trilhaDone();
    var H = '<h1>Programa de Melhoria Contínua (Kaizen)</h1><p class="meta">' + esc(db.org || 'Organização') + ' · gerado em ' + fmtD(today()) + '</p>';
    H += '<h2>1. Fundamentos</h2><p>Trilha concluída: <strong>' + t.ok + '/' + t.tot + '</strong> temas.</p>';
    TRILHA.forEach(function (g) {
      H += '<h3>' + esc(g.g) + '</h3><ul>' + g.items.map(function (it) {
        return '<li>' + (db.trail[it.id] ? '[x] ' : '[ ] ') + esc(it.t) + '</li>';
      }).join('') + '</ul>';
    });
    H += '<h2>2. Cultura</h2><ul>';
    Object.keys(db.lideranca).forEach(function (k) { if (db.lideranca[k]) H += '<li>Liderança: ' + esc(k) + '</li>'; });
    db.resist.forEach(function (r) { H += '<li>Resistência em ' + esc(r.area) + ' (' + esc(r.nivel) + ') — causa: ' + esc(r.causa) + '; ação: ' + esc(r.acao) + '</li>'; });
    H += '</ul>';
    H += '<h2>3. Diagnóstico de desperdícios</h2>';
    H += db.procs.length ? mdTable(['Processo', 'Desperdício', 'Freq.', 'Impacto', 'Observação'],
      db.procs.map(function (p) { return [esc(p.proc), esc(p.tipo), esc(p.freq), esc(String(p.imp)) + '/5', esc(p.obs)]; })) : '<p>Nenhum registro.</p>';
    if (db.gemba.length) {
      H += '<h3>Gemba Walks</h3><ul>' + db.gemba.map(function (g) {
        return '<li>' + fmtD(g.data) + ' — ' + esc(g.area) + ': ' + esc(g.obs).replace(/\n/g, '<br>') + '</li>';
      }).join('') + '</ul>';
    }
    if (db.cinco.length) {
      H += '<h2>4. Análises 5 Porquês</h2>';
      db.cinco.forEach(function (c) {
        H += '<h3>' + esc(c.prob) + '</h3><ol>';
        [c.q1, c.q2, c.q3, c.q4, c.q5].forEach(function (q) { if (q) H += '<li>' + esc(q) + '</li>'; });
        H += '</ol>';
        if (c.raiz) H += '<p><strong>Causa raiz:</strong> ' + esc(c.raiz) + '</p>';
        if (c.acao) H += '<p><strong>Contra-medida:</strong> ' + esc(c.acao) + '</p>';
      });
    }
    if (db.ishi.length) {
      H += '<h2>5. Diagramas Ishikawa</h2>';
      db.ishi.forEach(function (f) {
        H += '<h3>Efeito: ' + esc(f.efeito) + '</h3><ul>';
        [['Metodo', 'Método'], ['Maquina', 'Máquina'], ['MaoDeObra', 'Mão de obra'], ['Material', 'Material'], ['Medida', 'Medida'], ['MeioAmbiente', 'Meio ambiente']].forEach(function (kv) {
          var vals = (f[kv[0]] || []).filter(Boolean);
          if (vals.length) H += '<li><strong>' + kv[1] + ':</strong> ' + esc(vals.join(' · ')) + '</li>';
        });
        H += '</ul>';
      });
    }
    var s5 = db.s5 || {};
    var s5tot = ['seiri', 'seiton', 'seiso', 'seiketsu', 'shitsuke'].reduce(function (a, k) { return a + num(s5[k]); }, 0);
    H += '<h2>6. Auditoria 5S</h2><p>Pontuação: <strong>' + s5tot + '/20</strong>.</p>' + (s5.obs ? '<p>' + esc(s5.obs) + '</p>' : '');
    H += '<h2>7. Quadro Kaizen e priorização</h2>';
    var rank = db.melhorias.map(function (m) { return { m: m, s: impScore(m) }; }).sort(function (a, b) { return b.s - a.s; });
    H += rank.length ? '<ol>' + rank.map(function (r) {
      var a = r.m.a3 || {};
      return '<li><strong>' + esc(r.m.titulo) + '</strong> — score ' + r.s + ' (' + stInfo(r.m.status).l + ')' +
        (r.m.resp ? ', resp.: ' + esc(r.m.resp) : '') +
        (r.m.desc ? '<br><span class="small">' + esc(r.m.desc) + '</span>' : '') +
        (a.meta ? '<br><span class="small">Meta: ' + esc(a.meta) + '</span>' : '') +
        (a.contra ? '<br><span class="small">Contramedidas: ' + esc(a.contra) + '</span>' : '') + '</li>';
    }).join('') + '</ol>' : '<p>Nenhuma melhoria registrada.</p>';
    if (db.eventos.length) {
      H += '<h2>8. Eventos Kaizen</h2>';
      db.eventos.forEach(function (e) {
        H += '<h3>' + esc(e.nome || '(evento)') + '</h3><p>' + esc(e.area || '') + (e.dataIni ? ' · início ' + fmtD(e.dataIni) : '') + ' · ' + esc(e.status || 'planejado') + '</p>';
        H += '<p><strong>Objetivo:</strong> ' + esc(e.objetivo || '—') + '</p><p><strong>Líder:</strong> ' + esc(e.lider || '—') + ' · <strong>Facilitador:</strong> ' + esc(e.facilitador || '—') + ' · <strong>Equipe:</strong> ' + esc(e.equipe || '—') + '</p>';
        H += mdTable(['Dia', 'Atividades', 'Entregável'], (e.dias || []).map(function (d, i) {
          return ['Dia ' + (i + 1), esc(d.atividades), esc(d.entregavel)];
        }));
      });
    }
    if (db.indicadores.length) {
      H += '<h2>9. Indicadores e ganhos</h2>';
      H += mdTable(['Indicador', 'Antes', 'Depois', 'Meta', 'Ganho'], db.indicadores.map(function (i) {
        return [esc(i.nome), esc(i.antes) + ' ' + esc(i.unidade), esc(i.depois) + ' ' + esc(i.unidade), esc(i.meta || '—'), ganhoPct(i).toFixed(1).replace('.', ',') + '%'];
      }));
    }
    H += '<h2>10. Rotina</h2><ul>';
    db.reunioes.slice(-10).forEach(function (r) { H += '<li>Reunião ' + fmtD(r.data) + ': ' + esc(r.tema) + ' → ' + esc(r.acao) + '</li>'; });
    db.padroes.forEach(function (p) { H += '<li>Padrão: ' + esc(p.proc) + ' — ' + esc(p.etapas) + ' (revisto em ' + fmtD(p.revistoEm) + ')</li>'; });
    H += '</ul>';
    return H;
  }

  function ideaModal() {
    openModal('Nova ideia de melhoria',
      '<form data-form="ideia" class="gp-form">' +
      field('Título da melhoria', inp('titulo', '', 'text', 'Ex.: Reorganizar ferramentas do posto 3')) +
      field('Descrição / problema que resolve', ta('desc', '', 3)) +
      '<div class="gp-form-row row-2">' +
      field('Origem', sel('origem', 'rotina', [{ v: 'rotina', l: 'Rotina / reunião diária' }, { v: 'gemba', l: 'Gemba Walk' }, { v: 'evento', l: 'Evento Kaizen' }, { v: 'auditoria', l: 'Auditoria' }, { v: 'espontanea', l: 'Ideia espontânea' }])) +
      field('Responsável', inp('resp', '', 'text', '')) +
      '</div><div class="gp-form-row row-3">' +
      field('Impacto (1–5)', selNum('impacto', 3)) +
      field('Urgência (1–5)', selNum('urgencia', 3)) +
      field('Esforço (1–5)', selNum('esforco', 3)) +
      '</div><div class="gp-form-actions"><button type="submit" class="btn btn-primary">Adicionar ao quadro</button></div></form>');
  }
  function impEditModal(id) {
    var m = db.melhorias.filter(function (x) { return x.id === id; })[0];
    if (!m) return;
    openModal('Melhoria — ' + m.titulo,
      '<form data-form="imp-save" data-id="' + id + '" class="gp-form">' +
      field('Título', inp('titulo', m.titulo)) +
      field('Descrição', ta('desc', m.desc, 2)) +
      '<div class="gp-form-row row-2">' +
      field('Origem', sel('origem', m.origem || 'rotina', [{ v: 'rotina', l: 'Rotina' }, { v: 'gemba', l: 'Gemba Walk' }, { v: 'evento', l: 'Evento Kaizen' }, { v: 'auditoria', l: 'Auditoria' }, { v: 'espontanea', l: 'Espontânea' }])) +
      field('Responsável', inp('resp', m.resp)) +
      '</div><div class="gp-form-row row-3">' +
      field('Impacto (1–5)', selNum('impacto', m.impacto || 3)) +
      field('Urgência (1–5)', selNum('urgencia', m.urgencia || 3)) +
      field('Esforço (1–5)', selNum('esforco', m.esforco || 3)) +
      '</div>' + field('Status', sel('status', m.status, ST_LIST.map(function (s) { return { v: s.k, l: s.l }; }))) +
      '<div class="gp-form-actions"><button type="submit" class="btn btn-primary">Salvar</button>' +
      '<button type="button" class="btn btn-soft" data-k="imp-a3" data-id="' + id + '">Abrir A3 desta melhoria</button>' +
      '<button type="button" class="btn btn-danger" data-k="imp-del" data-id="' + id + '">Excluir</button></div></form>', true);
  }
  function a3Modal(id) {
    var m = db.melhorias.filter(function (x) { return x.id === id; })[0];
    if (!m) return;
    var a = m.a3 || {};
    openModal('A3 — ' + m.titulo,
      '<form data-form="a3-save" data-id="' + id + '" class="gp-form">' +
      field('1. Contexto / importância do tema', ta('fundo', a.fundo, 2)) +
      field('2. Situação atual (fatos e dados)', ta('atual', a.atual, 2)) +
      field('3. Meta / condição alvo', ta('meta', a.meta, 2)) +
      field('4. Análise de causas', ta('causas', a.causas, 2)) +
      field('5. Contramedidas propostas', ta('contra', a.contra, 2)) +
      field('6. Plano de ação (quem, quando)', ta('plano', a.plano, 2)) +
      field('7. Seguimento / sustentação', ta('seg', a.seg, 2)) +
      '<div class="gp-form-actions"><button type="submit" class="btn btn-primary">Salvar A3</button>' +
      '<button type="button" class="btn btn-ghost" data-k="a3-print" data-id="' + id + '">Imprimir A3</button>' +
      '<button type="button" class="btn btn-soft" data-k="a3-pdf" data-id="' + id + '">Baixar PDF</button></div></form>', true);
  }


  function shell() {
    var nav = KM.map(function (m) {
      return '<button type="button" class="gp-nav-item' + (mod === m.id ? ' active' : '') + '" data-k="goto-mod" data-mod="' + m.id + '"><span>' + esc(m.label) + '</span></button>';
    }).join('');
    var body = mod === 'dash' ? mDash() :
      mod === 'm1' ? mFund() :
      mod === 'm2' ? mCultura() :
      mod === 'm3' ? mDiag() :
      mod === 'm4' ? mFerramentas() :
      mod === 'm5' ? mEventos() :
      mod === 'm6' ? mQuadro() :
      mod === 'm7' ? mIndicadores() : mIntegracao();
    var H =
      '<header class="gp-head"><div><p class="eyebrow">Melhoria Contínua</p><h2 class="gp-title">Plataforma Kaizen</h2>' +
      '<p class="lede">' + esc(db.org || 'Fundamentos, diagnóstico, ferramentas e rotina de melhoria contínua em um só lugar.') + '</p></div>' +
      '<div class="btn-row">' +
      '<button type="button" class="btn btn-ghost" data-k="exp-txt" title="Exportar programa completo em TXT">.txt</button>' +
      '<button type="button" class="btn btn-ghost" data-k="exp-doc" title="Exportar programa completo para Word">.doc</button>' +
      '<button type="button" class="btn btn-soft" data-k="exp-print">Imprimir</button>' +
      '<button type="button" class="btn btn-primary" data-k="exp-pdf">PDF</button>' +
      '<button type="button" class="btn btn-danger-outline" data-k="reset-ws">Apagar dados</button>' +
      '</div></header>' +
      '<div class="gp-shell"><nav class="gp-side" aria-label="Módulos Kaizen">' + nav + '</nav>' +
      '<div class="gp-main">' + body + '</div></div>';
    root.innerHTML = H;
  }

  function render() { shell(); }

  function doPrint(html, title) {
    kzPrint(title, html);
  }
  function exportPdf(title, html) {
    if (window.GerettPDF && typeof window.GerettPDF.fromHTML === 'function') {
      window.GerettPDF.fromHTML(title, html, slug(title)).then(function () {
        toast('PDF gerado.', 'ok');
      }).catch(function () { toast('Falha ao gerar PDF. Use Imprimir.', 'info'); });
    } else {
      doPrint(html, title);
    }
  }

  function clickRouter(e) {
    var el = e.target.closest('[data-k]');
    if (!el) return;
    var k = el.getAttribute('data-k');
    var id = el.getAttribute('data-id');
    if (k === 'close-modal') { closeModal(); return; }
    if (k === 'goto-mod') { mod = el.getAttribute('data-mod') || 'dash'; render(); return; }
    if (k === 'idea-new') { ideaModal(); return; }
    if (k === 'evt-new') { evtModal(); return; }
    if (k === 'imp-edit') { impEditModal(id); return; }
    if (k === 'imp-a3') { a3Modal(id); return; }
    if (k === 'a3-print' || k === 'a3-pdf') {
      var mA = db.melhorias.filter(function (x) { return x.id === id; })[0];
      if (!mA) return;
      var a = mA.a3 || {};
      var secs = [['1. Contexto', a.fundo], ['2. Situação atual', a.atual], ['3. Meta', a.meta], ['4. Análise de causas', a.causas], ['5. Contramedidas', a.contra], ['6. Plano de ação', a.plano], ['7. Seguimento', a.seg]];
      var hA = tplHead('Relatório A3 — ' + esc(mA.titulo)) + mdTable(['Seção', 'Conteúdo'], secs.map(function (s) { return [esc(s[0]), esc(s[1] || '—').replace(/\n/g, '<br>')]; }));
      if (k === 'a3-print') doPrint(hA, 'A3 — ' + mA.titulo); else exportPdf('A3 — ' + mA.titulo, hA);
      return;
    }
    if (k === 'imp-move') {
      var mi = db.melhorias.findIndex(function (x) { return x.id === id; });
      if (mi < 0) return;
      var ci = ST_LIST.findIndex(function (s) { return s.k === db.melhorias[mi].status; });
      ci = Math.min(ST_LIST.length - 1, Math.max(0, ci + parseInt(el.getAttribute('data-dir'), 10)));
      db.melhorias[mi].status = ST_LIST[ci].k;
      persist();
      return;
    }
    if (k === 'imp-del') {
      var md0 = db.melhorias.filter(function (x) { return x.id === id; })[0];
      if (!md0) return;
      kzConfirm('Apagar melhoria', 'A melhoria <strong>' + esc(md0.titulo) + '</strong> será removida permanentemente deste navegador.', function () {
        db.melhorias = db.melhorias.filter(function (x) { return x.id !== id; });
        closeModal(); persist(); toast('Melhoria apagada.', 'info');
      });
      return;
    }
    if (k === 'imp-rm') {
      var mr = db.melhorias.filter(function (x) { return x.id === id; })[0];
      if (!mr) return;
      kzConfirm('Apagar melhoria', 'A melhoria <strong>' + esc(mr.titulo) + '</strong> será removida permanentemente deste navegador.', function () {
        db.melhorias = db.melhorias.filter(function (x) { return x.id !== id; });
        persist(); toast('Melhoria apagada.', 'info');
      });
      return;
    }
    if (k === 'five-del') { db.cinco = db.cinco.filter(function (x) { return x.id !== id; }); persist(); return; }
    if (k === 'ishi-del') { db.ishi = db.ishi.filter(function (x) { return x.id !== id; }); persist(); return; }
    if (k === 'gemba-del') { db.gemba = db.gemba.filter(function (x) { return x.id !== id; }); persist(); return; }
    if (k === 'evt-del') { db.eventos = db.eventos.filter(function (x) { return x.id !== id; }); persist(); return; }
    if (k === 'imp-sust-ok') {
      var ms = db.melhorias.filter(function (x) { return x.id === id; })[0];
      if (!ms) return;
      ms.status = 'sustentada';
      ms.sust = ms.sust || {};
      ['d30', 'd60', 'd90'].forEach(function (f) { ms.sust[f] = { ok: true }; });
      persist(); toast('Melhoria marcada como sustentada.', 'ok');
      return;
    }
    if (k === 'tpl-print') {
      var t = TPLS.filter(function (x) { return x.id === el.getAttribute('data-tpl'); })[0];
      if (!t || t.id === 'tapr') return;
      doPrint(t.build(), t.n);
      return;
    }
    if (k === 'tpl-doc') {
      var td = TPLS.filter(function (x) { return x.id === el.getAttribute('data-tpl'); })[0];
      if (!td) return;
      downloadFile(slug(td.n) + '.doc', docWrap(td.n, td.build()), 'application/msword');
      toast('.doc baixado.', 'ok');
      return;
    }
    if (k === 'apr-go') {
      var selE = mRoot.querySelector('[name="aprmel"]');
      var mid = selE ? selE.value : null;
      var hApr = mid ? aprBuild(mid) : null;
      if (hApr) { closeModal(); doPrint(hApr, 'Projeto de melhoria'); }
      return;
    }
    if (k === 'exp-txt') { downloadFile((slug(db.org) || 'programa-kaizen') + '.txt', htmlToText(buildProgramaHtml()), 'text/plain;charset=utf-8'); toast('.txt baixado.', 'ok'); return; }
    if (k === 'exp-doc') { downloadFile((slug(db.org) || 'programa-kaizen') + '.doc', docWrap('Programa de Melhoria Contínua', buildProgramaHtml()), 'application/msword'); toast('.doc baixado.', 'ok'); return; }
    if (k === 'exp-print') { doPrint(buildProgramaHtml(), 'Programa de Melhoria Contínua'); return; }
    if (k === 'exp-pdf') { exportPdf('Programa de Melhoria Contínua', buildProgramaHtml()); return; }
    if (k === 'reset-ws') {
      openModal('Zerar plataforma',
        '<p>Isso apaga todos os dados locais da Plataforma Kaizen neste navegador. Deseja continuar?</p>' +
        '<div class="gp-form-actions"><button type="button" class="btn btn-danger" data-k="reset-go">Apagar tudo</button>' +
        '<button type="button" class="btn btn-soft" data-k="close-modal">Cancelar</button></div>');
      return;
    }
    if (k === 'reset-go') {
      db = newWs(); save(); closeModal(); render(); toast('Plataforma zerada.', 'info');
      return;
    }
  }

  function submitRouter(e) {
    var f = e.target.closest('form[data-form]');
    if (!f) return;
    e.preventDefault();
    e.stopPropagation();
    var kind = f.getAttribute('data-form');
    var fd = new FormData(f);
    function v(n) { return String(fd.get(n) == null ? '' : fd.get(n)).trim(); }
    function vn(n, d) { return num(fd.get(n), d); }
    if (kind === 'org') { db.org = v('org'); save(); toast('Organização salva.', 'ok'); render(); return; }
    if (kind === 'resist') {
      if (!v('area')) return;
      db.resist.push({ id: uid('rs'), area: v('area'), nivel: v('nivel'), causa: v('causa'), acao: v('acao') });
      persist(); toast('Registro adicionado.', 'ok'); return;
    }
    if (kind === 'proc') {
      if (!v('proc')) return;
      db.procs.push({ id: uid('pr'), proc: v('proc'), tipo: v('tipo'), freq: v('freq'), imp: vn('imp', 3), obs: v('obs') });
      persist(); return;
    }
    if (kind === 'gemba') {
      db.gemba.push({ id: uid('gm'), data: v('data') || today(), area: v('area'), obs: '' });
      persist(); toast('Gemba Walk registrado — anote as observações no cartão.', 'ok'); return;
    }
    if (kind === 'five') {
      if (!v('prob')) return;
      db.cinco.push({ id: uid('5w'), prob: v('prob'), q1: v('q1'), q2: v('q2'), q3: v('q3'), q4: v('q4'), q5: v('q5'), raiz: v('raiz'), acao: v('acao') });
      persist(); toast('Análise salva.', 'ok'); return;
    }
    if (kind === 'ishi') {
      if (!v('efeito')) return;
      db.ishi.push({ id: uid('is'), efeito: v('efeito'), Metodo: v('Metodo').split('\n'), Maquina: v('Maquina').split('\n'), MaoDeObra: v('MaoDeObra').split('\n'), Material: v('Material').split('\n'), Medida: v('Medida').split('\n'), MeioAmbiente: v('MeioAmbiente').split('\n') });
      persist(); toast('Diagrama salvo.', 'ok'); return;
    }
    if (kind === 'evento') {
      db.eventos.push({ id: uid('ev'), nome: v('nome'), area: v('area'), objetivo: v('objetivo'), lider: v('lider'), facilitador: v('facilitador'), equipe: v('equipe'), dataIni: v('dataIni'), status: 'planejado', dias: agendaPadrao() });
      closeModal(); persist(); toast('Evento criado com agenda padrão.', 'ok'); return;
    }
    if (kind === 'reuniao') {
      db.reunioes.push({ data: v('data') || today(), tema: v('tema'), acao: v('acao') });
      persist(); return;
    }
    if (kind === 'padrao') {
      if (!v('proc')) return;
      db.padroes.push({ proc: v('proc'), etapas: v('etapas'), revistoEm: v('revistoEm') || today() });
      persist(); return;
    }
    if (kind === 'ind') {
      if (!v('nome')) return;
      db.indicadores.push({ id: uid('in'), nome: v('nome'), unidade: v('unidade'), dir: v('dir'), antes: v('antes'), depois: v('depois'), meta: v('meta'), melhoriaId: v('melhoriaId') });
      persist(); return;
    }
    if (kind === 'ideia') {
      if (!v('titulo')) return;
      db.melhorias.push({
        id: uid('im'), titulo: v('titulo'), desc: v('desc'), origem: v('origem'), resp: v('resp'),
        impacto: vn('impacto', 3), urgencia: vn('urgencia', 3), esforco: vn('esforco', 3),
        status: 'ideia', a3: {}, sust: {}, criadoEm: today()
      });
      closeModal(); persist(); toast('Ideia adicionada ao quadro.', 'ok'); return;
    }
    if (kind === 'imp-save') {
      var mi = db.melhorias.findIndex(function (x) { return x.id === f.getAttribute('data-id'); });
      if (mi < 0) return;
      Object.assign(db.melhorias[mi], {
        titulo: v('titulo'), desc: v('desc'), origem: v('origem'), resp: v('resp'),
        impacto: vn('impacto', 3), urgencia: vn('urgencia', 3), esforco: vn('esforco', 3), status: v('status')
      });
      closeModal(); persist(); toast('Melhoria atualizada.', 'ok'); return;
    }
    if (kind === 'a3-save') {
      var ma = db.melhorias.findIndex(function (x) { return x.id === f.getAttribute('data-id'); });
      if (ma < 0) return;
      db.melhorias[ma].a3 = { fundo: v('fundo'), atual: v('atual'), meta: v('meta'), causas: v('causas'), contra: v('contra'), plano: v('plano'), seg: v('seg') };
      closeModal(); persist(); toast('A3 salvo.', 'ok'); return;
    }
  }

  function changeRouter(e) {
    var t = e.target;
    if (t.matches('[data-kchk="trail"]')) { db.trail[t.getAttribute('data-id')] = t.checked; save(); render(); return; }
    if (t.matches('[data-kchk="lider"]')) { db.lideranca[t.getAttribute('data-t')] = t.checked; save(); render(); return; }
    var cg = t.closest('[data-kchg]');
    if (!cg) return;
    var ck = cg.getAttribute('data-kchg');
    if (ck === 's5') {
      var fid = cg.getAttribute('data-id');
      if (fid === 'obs') db.s5.obs = t.value; else db.s5[fid] = num(t.value);
      save(); render(); return;
    }
    if (ck === 'evst') {
      var ev = db.eventos.filter(function (x) { return x.id === cg.getAttribute('data-id'); })[0];
      if (ev) { ev.status = t.value; save(); }
      return;
    }
    if (ck === 'evday') {
      var evd = db.eventos.filter(function (x) { return x.id === cg.getAttribute('data-pid'); })[0];
      if (evd && evd.dias && evd.dias[parseInt(cg.getAttribute('data-ei'), 10)]) {
        evd.dias[parseInt(cg.getAttribute('data-ei'), 10)][cg.getAttribute('data-f')] = t.value;
        save();
      }
      return;
    }
    if (ck === 'sust') {
      var mm = db.melhorias.filter(function (x) { return x.id === cg.getAttribute('data-id'); })[0];
      if (mm) {
        mm.sust = mm.sust || {};
        mm.sust[cg.getAttribute('data-f')] = { ok: t.checked };
        save();
      }
      return;
    }
  }

  load();
  root.addEventListener('click', clickRouter);
  mRoot.addEventListener('click', clickRouter);
  document.addEventListener('submit', submitRouter, true);
  document.addEventListener('change', changeRouter, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  render();
})();
