/* ============================================================
   GERETT — FERRAMENTA ORGANIZACIONAL
   Motor de Desenvolvimento de Produto (PDP)
   6 fases · 5 gates · Ulrich & Eppinger / Stage-Gate / ISO 9001
   Persistência: localStorage
   ============================================================ */
(function () {
  'use strict';

  var LS_KEY = 'gerett_pdp_v1';
  var root = document.getElementById('pdpRoot');
  var modalRoot = document.getElementById('pdpModalRoot');
  var toastRoot = document.getElementById('pdpToastRoot');
  var printRoot = document.getElementById('pdpPrintRoot');
  if (!root) return;

  /* ---------- Definições fixas do motor ---------- */

  var PHASES = [
    {
      n: 1, nome: 'Planejamento e Descoberta',
      desc: 'Entender o problema, o mercado e a oportunidade antes de investir.',
      itens: [
        'Entender problema, mercado e oportunidade',
        'Definição do problema documentada',
        'Análise de mercado concluída',
        'Personas e usuários-alvo definidos'
      ],
      docs: ['problema', 'mercado', 'personas'],
      gate: { titulo: 'Vale investir nessa ideia?', criterios: ['Problema validado com usuários', 'Mercado dimensionado', 'Alinhamento estratégico confirmado'] }
    },
    {
      n: 2, nome: 'Desenvolvimento do Conceito',
      desc: 'Gerar e selecionar conceitos, transformando a oportunidade em solução.',
      itens: [
        'Conceitos gerados e comparados',
        'Matriz de requisitos elaborada',
        'Conceito selecionado com critérios objetivos',
        'Análise de viabilidade técnica e econômica'
      ],
      docs: ['matrizRequisitos', 'comparativo', 'viabilidade'],
      gate: { titulo: 'O conceito é viável?', criterios: ['Requisitos documentados', 'Conceito selecionado com critérios objetivos', 'Viabilidade técnica e econômica comprovada'] }
    },
    {
      n: 3, nome: 'Projeto Detalhado (Design)',
      desc: 'Especificar completamente a solução antes de construir.',
      itens: [
        'Especificações técnicas completas',
        'Revisão de projeto registrada',
        'Matriz de riscos (FMEA simplificado) mapeada'
      ],
      docs: ['especificacao', 'revisaoProjeto', 'fmea'],
      gate: { titulo: 'Pronto para construir?', criterios: ['Especificações completas', 'Revisão de projeto registrada', 'Riscos mapeados com plano de mitigação'] }
    },
    {
      n: 4, nome: 'Prototipagem e Validação',
      desc: 'Construir, testar, verificar e validar com usuários reais.',
      itens: [
        'Plano de testes executado',
        'Verificação: o resultado atende aos requisitos?',
        'Validação com usuários realizada',
        'Falhas críticas corrigidas'
      ],
      docs: ['planoTestes', 'vvRelatorio', 'falhas'],
      gate: { titulo: 'Pronto para lançar?', criterios: ['Verificação: atende aos requisitos', 'Validação: funciona para o usuário', 'Falhas críticas corrigidas'] }
    },
    {
      n: 5, nome: 'Lançamento / Produção',
      desc: 'Preparar e executar a chegada ao mercado ou à produção.',
      itens: [
        'Checklist go-to-market concluído',
        'Plano de marketing definido',
        'KPIs de acompanhamento definidos'
      ],
      docs: ['gtm', 'marketingKpis'],
      gate: null
    },
    {
      n: 6, nome: 'Pós-Lançamento',
      desc: 'Melhoria contínua orientada por feedback e métricas.',
      itens: [
        'Canal de feedback ativo',
        'Métricas sendo coletadas',
        'Backlog de melhorias mantido'
      ],
      docs: ['feedbackMelhorias'],
      gate: null
    }
  ];

  var DOC_TEMPLATES = {
    problema: { fase: 1, titulo: 'Definição do Problema', md: '# Definição do Problema\n\n## Declaração do problema\n[Descreva o problema de forma clara e centrada no usuário]\n\n## Evidências\n[Observações, entrevistas, dados]\n\n## Impacto de não resolvê-lo\n[Consequências atuais]\n\n## Critérios de sucesso\n- [ ] \n- [ ] \n' },
    mercado: { fase: 1, titulo: 'Análise de Mercado', md: '# Análise de Mercado\n\n## Tamanho do mercado (TAM/SAM/SOM)\n| Nível | Descrição | Valor estimado |\n|---|---|---|\n| TAM | | |\n| SAM | | |\n| SOM | | |\n\n## Concorrência\n| Concorrente | Pontos fortes | Pontos fracos |\n|---|---|---|\n| | | |\n\n## Tendências e riscos\n[...]\n' },
    personas: { fase: 1, titulo: 'Personas', md: '# Personas\n\n## Persona 1 — [Nome]\n- **Perfil:**\n- **Necessidades:**\n- **Dores:**\n- **Comportamento:**\n- **Citação representativa:**\n\n## Persona 2 — [Nome]\n[...]\n' },
    matrizRequisitos: { fase: 2, titulo: 'Matriz de Requisitos', md: '# Matriz de Requisitos\n\n| ID | Requisito | Prioridade (M/S/C) | Fonte |\n|---|---|---|---|\n| REQ-001 | | Must | |\n| REQ-002 | | Should | |\n\n> Mantenha este documento alinhado ao editor de requisitos da ferramenta.\n' },
    comparativo: { fase: 2, titulo: 'Comparativo de Conceitos', md: '# Comparativo de Conceitos\n\n## Conceitos considerados\n1. [Conceito A] — descrição\n2. [Conceito B] — descrição\n\n## Matriz de seleção (peso 1–5)\n| Critério | Peso | A | B |\n|---|---|---|---|\n| Custo | | | |\n| Viabilidade técnica | | | |\n| Aderência ao usuário | | | |\n\n**Conceito selecionado:** [X]\n**Justificativa:** [...]\n' },
    viabilidade: { fase: 2, titulo: 'Análise de Viabilidade', md: '# Análise de Viabilidade\n\n## Técnica\n[Tecnologias, capacidades, restrições]\n\n## Econômica\n| Item | Valor |\n|---|---|\n| Investimento inicial | |\n| Custo unitário estimado | |\n| Payback previsto | |\n\n## Conclusão\n[Viável / Viável com restrições / Inviável — justificativa]\n' },
    especificacao: { fase: 3, titulo: 'Especificações Técnicas', md: '# Especificações Técnicas\n\n## Arquitetura / Estrutura\n[Descrição e diagramas]\n\n## Parâmetros e tolerâncias\n| Parâmetro | Específicação | Tolerância |\n|---|---|---|\n| | | |\n\n## Materiais / Tecnologias\n[...]\n\n## Normas aplicáveis\n[...]\n' },
    revisaoProjeto: { fase: 3, titulo: 'Registro de Revisão de Projeto', md: '# Registro de Revisão de Projeto\n\n**Data:** [dd/mm/aaaa] **Participantes:** [...]\n\n## Itens revisados\n- [ ] Requisitos atendidos nas especificações\n- [ ] Interfaces e integrações\n- [ ] Fabricabilidade / implementação\n\n## Não conformidades encontradas\n| Item | Ação corretiva | Responsável | Prazo |\n|---|---|---|---|\n| | | | |\n\n**Resultado:** [Aprovado / Aprovado com ações / Reprovado]\n' },
    fmea: { fase: 3, titulo: 'Matriz de Riscos — FMEA Simplificado', md: '# FMEA Simplificado\n\n| Modo de falha | Efeito | Sev (1-10) | Causa | Ocor (1-10) | Detecção (1-10) | RPN | Ação de mitigação |\n|---|---|---|---|---|---|---|---|\n| | | | | | | | |\n\n> RPN = Sev × Ocor × Detecção. Priorize RPN > 100.\n' },
    planoTestes: { fase: 4, titulo: 'Plano de Testes', md: '# Plano de Testes\n\n| ID | Objetivo | Procedimento | Requisito vinculado | Resultado esperado |\n|---|---|---|---|---|\n| T-01 | | | REQ-001 | |\n\n## Ambiente e recursos\n[...]\n\n## Critério de aprovação\n[...]\n' },
    vvRelatorio: { fase: 4, titulo: 'Relatório de Verificação e Validação', md: '# Relatório de Verificação e Validação\n\n## Verificação (construímos certo?)\n| Teste | Resultado | Status |\n|---|---|---|\n| T-01 | | ✅/❌ |\n\n## Validação (construímos a coisa certa?)\n[Método, amostra de usuários, resultados]\n\n## Conclusão\n[Aprovado para lançamento / Iterar]\n' },
    falhas: { fase: 4, titulo: 'Registro de Falhas e Correções', md: '# Registro de Falhas e Correções\n\n| ID | Falha observada | Severidade | Causa raiz | Correção aplicada | Reteste |\n|---|---|---|---|---|---|\n| F-01 | | Crítica/Média/Baixa | | | ✅/❌ |\n' },
    gtm: { fase: 5, titulo: 'Checklist Go-to-Market', md: '# Checklist Go-to-Market\n\n- [ ] Preço e posicionamento definidos\n- [ ] Canais de venda/distribuição preparados\n- [ ] Suporte/atendimento treinado\n- [ ] Documentação e manuais prontos\n- [ ] Plano de comunicação lançado\n' },
    marketingKpis: { fase: 5, titulo: 'Plano de Marketing & KPIs', md: '# Plano de Marketing & KPIs\n\n## Mensagem e posicionamento\n[...]\n\n## Canais\n| Canal | Ação | Cronograma |\n|---|---|---|\n| | | |\n\n## KPIs de lançamento\n| KPI | Meta | Frequência de medição |\n|---|---|---|\n| | | |\n' },
    feedbackMelhorias: { fase: 6, titulo: 'Feedback, Métricas e Backlog', md: '# Feedback, Métricas e Backlog\n\n## Feedbacks recebidos\n| Data | Fonte | Feedback | Classificação |\n|---|---|---|---|\n| | | | Melhoria/Problema/Oportunidade |\n\n## Painel de métricas\n| Métrica | Atual | Meta |\n|---|---|---|\n| | | |\n\n## Backlog de melhorias (priorizado)\n1. \n2. \n' }
  };

  var TYPE_MODULES = {
    fisico: { 2: [], 3: ['Seleção de fornecedores críticos', 'Definição de ferramental e processo produtivo'], 4: [], 5: ['Planejamento da produção em série (ramp-up)'], 6: [] },
    software: { 2: [], 3: [], 4: ['Suíte de testes automatizados em regressão'], 5: ['Deploy em produção com rollback definido', 'Versionamento semântico e release notes'], 6: ['Sprint review / retrospectiva periódica'] },
    servico: { 2: ['Blueprint do serviço mapeado'], 3: [], 4: [], 5: ['Capacitação da equipe de entrega'], 6: ['Auditoria periódica da qualidade do serviço'] }
  };
  TYPE_MODULES.hibrido = {
    2: [].concat(TYPE_MODULES.fisico[2], TYPE_MODULES.software[2], TYPE_MODULES.servico[2]),
    3: [].concat(TYPE_MODULES.fisico[3], TYPE_MODULES.software[3], TYPE_MODULES.servico[3]),
    4: [].concat(TYPE_MODULES.fisico[4], TYPE_MODULES.software[4], TYPE_MODULES.servico[4]),
    5: [].concat(TYPE_MODULES.fisico[5], TYPE_MODULES.software[5], TYPE_MODULES.servico[5]),
    6: [].concat(TYPE_MODULES.fisico[6], TYPE_MODULES.software[6], TYPE_MODULES.servico[6])
  };

  var TYPES = [
    { id: 'fisico', label: 'Físico', hint: 'Fornecedor, ferramental e produção em série' },
    { id: 'software', label: 'Software', hint: 'Versionamento, deploy e sprint reviews' },
    { id: 'servico', label: 'Serviço', hint: 'Blueprint e capacitação de equipe' },
    { id: 'hibrido', label: 'Híbrido', hint: 'Combina os módulos aplicáveis' }
  ];
  var RIGOR = [
    { id: 'exploratorio', label: 'Exploratório', hint: 'Gates simplificados, foco em velocidade (Lean)' },
    { id: 'balanceado', label: 'Balanceado', hint: 'Processo padrão completo' },
    { id: 'regulado', label: 'Regulado', hint: 'ISO 9001 8.3.6: rastreabilidade e controle de alterações' }
  ];
  var STD_OPTIONS = [
    { id: 'iso13485', label: 'ISO 13485 (saúde)', extra: { 3: ['Controle de registros de projeto conforme ISO 13485'] } },
    { id: 'iatf16949', label: 'IATF 16949 (automotivo)', extra: { 3: ['Entregáveis APQP/PPAP iniciados'], 4: ['Aprovação de peça de produção (PPAP)'] } },
    { id: 'anvisa_fda', label: 'ANVISA / FDA (regulatório)', regulatedOnly: true, extra: {} },
    { id: 'iso14006', label: 'ISO 14006 (eco-design)', extra: { 3: ['Checklist de eco-design aplicado'], 5: ['Critérios de sustentabilidade na produção'] } }
  ];
  var PRIOS = [
    { id: 'Must', cls: 'must' }, { id: 'Should', cls: 'should' }, { id: 'Could', cls: 'could' }
  ];
  var REQ_STATUS = ['Proposto', 'Aprovado', 'Implementado', 'Validado'];
  var TASK_COLS = [{ id: 'todo', label: 'A fazer' }, { id: 'doing', label: 'Fazendo' }, { id: 'done', label: 'Feito' }];

  /* ---------- Utilitários ---------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function fmtDate(iso) {
    try { return new Date(iso).toLocaleDateString('pt-BR'); } catch (e) { return ''; }
  }
  function fmtDateTime(iso) {
    try { return new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }); } catch (e) { return ''; }
  }

  function load() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (!raw) return { products: [], tourSeen: false };
      var db = JSON.parse(raw);
      if (!db.products) db.products = [];
      return db;
    } catch (e) { return { products: [], tourSeen: false }; }
  }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(db)); }
    catch (e) { toast('Não foi possível salvar os dados localmente.', 'info'); }
  }

  var db = load();
  var ui = { view: 'dashboard', productId: null, phase: 1 };

  /* ---------- Modelo de produto ---------- */

  function buildChecklists(type, standards) {
    var extras = {};
    Object.keys(TYPE_MODULES[type] || {}).forEach(function (ph) {
      extras[ph] = (extras[ph] || []).concat(TYPE_MODULES[type][ph]);
    });
    standards.forEach(function (sid) {
      var opt = STD_OPTIONS.find(function (o) { return o.id === sid; });
      if (!opt || !opt.extra) return;
      Object.keys(opt.extra).forEach(function (ph) {
        extras[ph] = (extras[ph] || []).concat(opt.extra[ph]);
      });
    });
    return PHASES.map(function (ph) {
      var itens = ph.itens.concat(extras[String(ph.n)] || []);
      return {
        phase: ph.n,
        itens: itens.map(function (txt) { return { txt: txt, checked: false, checkedAt: null }; })
      };
    });
  }

  function newProduct(name, type, rigor, standards) {
    var now = new Date().toISOString();
    return {
      id: uid(), name: name, type: type, rigorLevel: rigor, standards: standards,
      currentPhase: 1,
      createdAt: now, updatedAt: now,
      gates: PHASES.filter(function (p) { return p.gate; }).map(function (p) {
        return { gateNumber: p.n, status: 'pendente', approvedAt: null, notes: '', aprovador: '' };
      }),
      checklists: buildChecklists(type, standards),
      requirements: [],
      documents: [],
      decisions: [],
      tasks: [],
      history: [{ timestamp: now, action: 'Produto criado', details: 'Tipo: ' + type + ' · Rigor: ' + rigor }]
    };
  }

  function getProduct(id) { return db.products.find(function (p) { return p.id === id; }); }
  function touch(p) { p.updatedAt = new Date().toISOString(); }
  function logHist(p, action, details) {
    p.history.unshift({ timestamp: new Date().toISOString(), action: action, details: details || '' });
    if (p.history.length > 200) p.history.length = 200;
  }
  function approvedGateCount(p) {
    return p.gates.filter(function (g) { return g.status === 'aprovado'; }).length;
  }
  function maxUnlockedPhase(p) {
    var g = approvedGateCount(p);
    return g >= 4 ? 6 : Math.min(g + 1, 4);
  }
  function progressPct(p) {
    var tot = 0, done = 0;
    p.checklists.forEach(function (c) { c.itens.forEach(function (i) { tot++; if (i.checked) done++; }); });
    return tot ? Math.round(done * 100 / tot) : 0;
  }
  function pendingInPhase(p, n) {
    var c = p.checklists.find(function (x) { return x.phase === n; });
    if (!c) return 0;
    return c.itens.filter(function (i) { return !i.checked; }).length;
  }
  function typeLabel(t) { var x = TYPES.find(function (y) { return y.id === t; }); return x ? x.label : t; }
  function stdLabels(arr) { return arr.map(function (s) { if (s === 'iso9001') return 'ISO 9001'; var o = STD_OPTIONS.find(function (x) { return x.id === s; }); return o ? o.label.split(' (')[0] : s; }); }

  /* ---------- UI básicos ---------- */

  function toast(msg, kind) {
    var el = document.createElement('div');
    el.className = 'pdp-toast' + (kind ? ' ' + kind : '');
    el.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1FA36B" stroke-width="2.4"><path d="M20 6L9 17l-5-5"/></svg>' + esc(msg);
    if (kind === 'info') el.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M12 11v5"/></svg>' + esc(msg);
    toastRoot.appendChild(el);
    setTimeout(function () { el.classList.add('out'); setTimeout(function () { el.remove(); }, 320); }, 2600);
  }

  function openModal(html, wide) {
    closeModal();
    var ov = document.createElement('div');
    ov.className = 'pdp-overlay';
    ov.id = 'pdpOverlay';
    ov.innerHTML = '<div class="pdp-modal' + (wide ? ' wide' : '') + '" role="dialog" aria-modal="true">' + html + '</div>';
    ov.addEventListener('mousedown', function (e) { if (e.target === ov) closeModal(); });
    modalRoot.appendChild(ov);
    return ov;
  }
  function closeModal() { var m = document.getElementById('pdpOverlay'); if (m) m.remove(); }

  /* ---------- Render: Dashboard ---------- */

  function render() {
    if (ui.view === 'dashboard') renderDashboard();
    else renderProduct();
  }

  function renderDashboard() {
    if (!db.products.length) {
      root.innerHTML =
        '<div class="pdp-empty">' +
        '<svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2l2.4 4.9L20 8l-4 3.9.9 5.6L12 15l-4.9 2.5.9-5.6L4 8l5.6-1.1z"/></svg>' +
        '<h3>Nenhum produto em desenvolvimento</h3>' +
        '<p>Crie seu primeiro produto e a ferramenta montará automaticamente fases, checklists, documentos e gates conforme o tipo, o nível de rigor e as normas escolhidas.</p>' +
        '<button class="pdp-btn primary" data-action="new-product">＋ Criar novo produto</button>' +
        '</div>';
      return;
    }
    var cards = db.products.map(function (p) {
      var pct = progressPct(p);
      return (
        '<article class="pdp-card pdp-prod-card" data-open="' + p.id + '" tabindex="0" role="button" aria-label="Abrir ' + esc(p.name) + '">' +
        '<div class="pdp-prod-top"><h3>' + esc(p.name) + '</h3>' +
        '<button class="pdp-menu-btn" data-menu="' + p.id + '" aria-label="Opções de ' + esc(p.name) + '">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg></button></div>' +
        '<div class="pdp-badges">' +
        '<span class="pdp-badge gray">' + esc(typeLabel(p.type)) + '</span>' +
        '<span class="pdp-badge">' + esc(RIGOR.find(function (r) { return r.id === p.rigorLevel; }).label) + '</span>' +
        '<span class="pdp-badge gray">Fase ' + maxUnlockedPhase(p) + '</span>' +
        (approvedGateCount(p) >= 4 ? '<span class="pdp-badge">Lançado</span>' : '') +
        '</div>' +
        '<div class="pdp-mini-progress"><span style="width:' + pct + '%"></span></div>' +
        '<div class="pdp-prod-meta"><span>' + pct + '% concluído</span><span>Atualizado ' + fmtDate(p.updatedAt) + '</span></div>' +
        '</article>'
      );
    }).join('');
    root.innerHTML =
      '<div class="pdp-dash-head"><h2>Meus produtos</h2>' +
      '<button class="pdp-btn primary" data-action="new-product">＋ Novo produto</button></div>' +
      '<div class="pdp-grid">' + cards + '</div>';
  }

  /* ---------- Render: Produto ---------- */

  function renderProduct() {
    var p = getProduct(ui.productId);
    if (!p) { ui.view = 'dashboard'; render(); return; }

    var unlocked = maxUnlockedPhase(p);
    if (ui.phase > unlocked) ui.phase = unlocked;

    var stepper = PHASES.map(function (ph) {
      var locked = ph.n > unlocked;
      var done = ph.n < unlocked || (ph.n === 5 && pendingInPhase(p, 5) === 0 && unlocked >= 5);
      var active = ui.phase === ph.n && !locked;
      var cls = 'pdp-step' + (active ? ' active' : '') + (locked ? ' locked' : '') + (done && !active ? ' done' : '');
      var icon = locked
        ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 118 0v4"/></svg>'
        : '<span>' + (done ? '✓' : ph.n) + '</span>';
      return '<button class="' + cls + '" data-goto="' + ph.n + '"' + (locked ? ' disabled' : '') + '>' +
        '<span class="st-num">' + icon + '</span><span class="st-nome">' + esc(ph.nome) + '</span></button>';
    }).join('');

    var pend = pendingInPhase(p, ui.phase);

    root.innerHTML =
      '<div class="pdp-card pdp-prod-wrap">' +
      renderProdHead(p, pend) +
      '<div class="pdp-stepper" role="tablist" aria-label="Fases do processo">' + stepper + '</div>' +
      '<div class="pdp-phase">' + renderPhaseBody(p, ui.phase) + '</div>' +
      '</div>';

    bindProductEvents(p);
  }

  function renderProdHead(p, pend) {
    var badges = '<span class="pdp-badge gray">' + esc(typeLabel(p.type)) + '</span>' +
      '<span class="pdp-badge">' + esc(RIGOR.find(function (r) { return r.id === p.rigorLevel; }).label) + '</span>' +
      stdLabels(['iso9001'].concat(p.standards)).map(function (s) { return '<span class="pdp-badge gray">' + esc(s) + '</span>'; }).join('');
    var chip = pend > 0 ? '<span class="pdp-pend-chip" title="Itens pendentes na fase atual">⚠ ' + pend + ' pendente' + (pend > 1 ? 's' : '') + ' nesta fase</span>' : '';
    return (
      '<div class="pdp-prod-head">' +
      '<div class="pdp-prod-titlebar">' +
      '<button class="pdp-backdash" data-action="dash">&larr; Meus produtos</button>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;">' + chip +
      '<button class="pdp-btn small" data-action="report">Relatório (.doc)</button>' +
      '<button class="pdp-btn small" data-action="edit-config">Editar configuração</button>' +
      '<button class="pdp-btn small danger" data-mact-del="' + p.id + '" title="Apagar este produto">Excluir produto</button>' +
      '</div></div>' +
      '<h2>' + esc(p.name) + '</h2>' +
      '<div class="pdp-badges">' + badges + '</div>' +
      '<div class="pdp-overall"><div class="pdp-overall-bar"><span style="width:' + progressPct(p) + '%"></span></div><b>' + progressPct(p) + '%</b></div>' +
      '</div>'
    );
  }

  function renderPhaseBody(p, n) {
    var ph = PHASES[n - 1];
    var cl = p.checklists.find(function (c) { return c.phase === n; });

    var alerts = '';
    if (p.rigorLevel === 'regulado') {
      alerts += '<div class="pdp-alert"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r=".5"/></svg>' +
        'Modo <strong>&nbsp;Regulado&nbsp;</strong> ativo (ISO 9001 8.3.6): todas as alterações são registradas no histórico e os gates exigem identificação do aprovador.' + (p.standards.indexOf('anvisa_fda') > -1 ? ' Produto sujeito a registro ANVISA/FDA — valide requisitos regulamentários específicos.' : '') + '</div>';
    }

    var html = alerts +
      '<h3>Fase ' + ph.n + ' — ' + esc(ph.nome) + '</h3>' +
      '<p class="pdp-phase-desc">' + esc(ph.desc) + '</p>' +

      '<div class="pdp-subsec"><h4>Checklist da fase</h4><ul class="pdp-check">' +
      cl.itens.map(function (it, idx) {
        return '<li class="' + (it.checked ? 'checked' : '') + '" data-check="' + idx + '">' +
          '<input type="checkbox"' + (it.checked ? ' checked' : '') + ' tabindex="-1">' +
          '<span>' + esc(it.txt) + (it.checked && it.checkedAt ? '<span class="pdp-check-extra">concluído em ' + fmtDateTime(it.checkedAt) + '</span>' : '') + '</span></li>';
      }).join('') + '</ul></div>';

    /* Gate entre fases */
    if (ph.gate && !gateApproved(p, n)) {
      var g = p.gates.find(function (x) { return x.gateNumber === n; });
      html += '<div class="pdp-subsec"><h4>Portão de aprovação</h4>' +
        '<div class="pdp-gatebox"><div class="gb-info"><strong>GATE ' + n + ' — “' + esc(ph.gate.titulo) + '”</strong>' +
        '<p>' + (g && g.status === 'reprovado' ? 'Reprovado anteriormente — revise e submeta novamente.' : 'A próxima fase só é liberada após a aprovação deste portão.') + '</p></div>' +
        '<button class="pdp-btn primary" data-gate="' + n + '">Submeter ao Gate ' + n + '</button></div></div>';
    } else if (ph.gate) {
      var g2 = p.gates.find(function (x) { return x.gateNumber === n; });
      html += '<div class="pdp-subsec"><h4>Portão de aprovação</h4>' +
        '<div class="pdp-gatebox"><div class="gb-info"><strong>GATE ' + n + ' — “' + esc(ph.gate.titulo) + '”</strong>' +
        '<p>Aprovado em ' + fmtDateTime(g2.approvedAt) + (g2.aprovador ? ' por ' + esc(g2.aprovador) : '') + (g2.notes ? ' · ' + esc(g2.notes) : '') + '</p></div>' +
        '<span class="pdp-gate-approved"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14l-3-3"/></svg>Aprovado</span></div></div>';
    }

    /* Gate 5 permanente na fase 6 */
    if (n === 6) {
      html += '<div class="pdp-subsec"><h4>GATE 5 permanente — revisão periódica</h4>' +
        '<div class="pdp-gatebox"><div class="gb-info"><strong>“Continuar, melhorar ou descontinuar?”</strong>' +
        '<p>Registre revisões periódicas baseadas nas métricas coletadas.</p></div>' +
        '<button class="pdp-btn primary" data-gate="5">Registrar revisão</button></div></div>';
    }

    /* Documentos */
    var docs = ph.docs.map(function (key) {
      var tpl = DOC_TEMPLATES[key];
      var saved = p.documents.find(function (d) { return d.type === key; });
      var ver = saved ? '<span class="pdp-badge gray">v' + saved.version + '</span>' : '';
      return '<div class="pdp-doc-item">' +
        '<span class="di-name"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>' + esc(tpl.titulo) + '</span>' +
        '<span class="pdp-doc-actions">' + ver +
        '<button class="pdp-btn small" data-doc-edit="' + key + '">' + (saved ? 'Editar' : 'Preencher') + '</button>' +
        (saved ? '<button class="pdp-btn small" data-doc-pdf="' + key + '">Baixar PDF</button>' : '') +
        '</span></div>';
    }).join('');
    html += '<div class="pdp-subsec"><h4>Documentos geráveis</h4><div class="pdp-doc-list">' + docs + '</div></div>';

    /* Kanban */
    var tasks = p.tasks.filter(function (t) { return t.phase === n; });
    var kanban = '<div class="pdp-kanban">' + TASK_COLS.map(function (col) {
      return '<div class="pdp-kcol" data-col="' + col.id + '"><h5>' + col.label + '<span>' + tasks.filter(function (t) { return t.status === col.id; }).length + '</span></h5>' +
        tasks.filter(function (t) { return t.status === col.id; }).map(function (t) {
          return '<div class="pdp-kcard" draggable="true" data-task="' + t.id + '"><span>' + esc(t.title) + '</span>' +
            '<button class="pdp-iconbtn del" data-task-del="' + t.id + '" aria-label="Excluir tarefa"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg></button></div>';
        }).join('') + '</div>';
    }).join('') + '</div>';
    kanban += '<form class="pdp-task-form" data-task-add="' + n + '"><input class="pdp-input" name="title" placeholder="Nova tarefa desta fase…" autocomplete="off"><button class="pdp-btn" type="submit">Adicionar</button></form>';
    html += '<div class="pdp-subsec"><h4>Tarefas da fase</h4>' + kanban + '</div>';

    /* Seções globais apenas na fase 2 (requisitos) e 6 (decisões/histórico)? — não: sempre visíveis na fase corrente */
    if (n === 2) html += renderRequirements(p);
    html += '<div class="pdp-subsec"><h4>Decisões registradas (ADR)</h4>' + renderDecisions(p) + '</div>';
    html += '<div class="pdp-subsec"><h4>Histórico de alterações</h4><ul class="pdp-hist">' +
      p.history.slice(0, 40).map(function (h) {
        return '<li><span class="h-time">' + fmtDateTime(h.timestamp) + '</span><span><b>' + esc(h.action) + '</b>' + (h.details ? ' — ' + esc(h.details) : '') + '</span></li>';
      }).join('') + '</ul></div>';

    return html;
  }

  function gateApproved(p, n) {
    var g = p.gates.find(function (x) { return x.gateNumber === n; });
    return g && g.status === 'aprovado';
  }

  function renderRequirements(p) {
    var rows = p.requirements.map(function (r) {
      var prio = PRIOS.find(function (x) { return x.id === r.priority; }) || PRIOS[2];
      return '<tr><td class="mono">' + esc(r.id) + '</td><td>' + esc(r.description) + '</td>' +
        '<td><span class="pdp-pill ' + prio.cls + '">' + r.priority + '</span></td>' +
        '<td><select class="pdp-select" data-req-status="' + r.id + '">' + REQ_STATUS.map(function (s) {
          return '<option' + (s === r.status ? ' selected' : '') + '>' + s + '</option>';
        }).join('') + '</select></td>' +
        '<td>' + esc(r.source) + '</td>' +
        '<td><div class="pdp-inline-actions">' +
        '<button class="pdp-iconbtn" data-req-edit="' + r.id + '" aria-label="Editar requisito"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5z"/></svg></button>' +
        '<button class="pdp-iconbtn del" data-req-del="' + r.id + '" aria-label="Excluir requisito"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg></button>' +
        '</div></td></tr>';
    }).join('');
    if (!rows) rows = '<tr><td colspan="6" style="text-align:center;color:var(--text-tertiary);padding:22px;">Nenhum requisito registrado ainda.</td></tr>';
    return '<div class="pdp-subsec"><h4>Editor de requisitos</h4>' +
      '<div class="pdp-table-wrap"><table class="pdp-table"><thead><tr><th>ID</th><th>Descrição</th><th>Prioridade</th><th>Status</th><th>Fonte</th><th></th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<form class="pdp-addrow" id="reqForm"><input class="pdp-input" name="desc" placeholder="Novo requisito…" autocomplete="off">' +
      '<select class="pdp-select" name="priority">' + PRIOS.map(function (x) { return '<option>' + x.id + '</option>'; }).join('') + '</select>' +
      '<button class="pdp-btn" type="submit">Adicionar</button></form></div>';
  }

  function renderDecisions(p) {
    if (!p.decisions.length) return '<p style="color:var(--text-tertiary);font-size:.88rem;margin:0;">Nenhuma decisão registrada. Use o formulário abaixo para registrar uma decisão arquitetural ou de projeto.</p>' +
      '<form class="pdp-addrow" id="adrForm" style="grid-template-columns:1fr;"><textarea class="pdp-textarea" name="decision" rows="2" placeholder="Decisão…" style="min-height:64px;"></textarea>' +
      '<input class="pdp-input" name="rationale" placeholder="Justificativa…"><input class="pdp-input" name="alternatives" placeholder="Alternativas descartadas (opcional)">' +
      '<button class="pdp-btn" type="submit">Registrar decisão</button></form>';
    var list = p.decisions.map(function (d, i) {
      return '<div class="pdp-adr"><span class="adr-date">' + fmtDateTime(d.date) + '</span><strong>' + esc(d.decision) + '</strong>' +
        (d.rationale ? '<p><em>Justificativa:</em> ' + esc(d.rationale) + '</p>' : '') +
        (d.alternatives ? '<p><em>Alternativas descartadas:</em> ' + esc(d.alternatives) + '</p>' : '') +
        '<button class="pdp-iconbtn del" data-adr-del="' + i + '" style="margin-top:6px;" aria-label="Excluir decisão"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg></button></div>';
    }).join('');
    return list + '<form class="pdp-addrow" id="adrForm" style="grid-template-columns:1fr;"><textarea class="pdp-textarea" name="decision" rows="2" placeholder="Nova decisão…" style="min-height:64px;"></textarea>' +
      '<input class="pdp-input" name="rationale" placeholder="Justificativa…"><input class="pdp-input" name="alternatives" placeholder="Alternativas descartadas (opcional)">' +
      '<button class="pdp-btn" type="submit">Registrar decisão</button></form>';
  }

  /* ---------- Eventos globais do app ---------- */

  root.addEventListener('click', function (e) {
    var t = e.target.closest('[data-action],[data-open],[data-goto],[data-gate],[data-doc-edit],[data-doc-pdf],[data-mact-del],[data-menu],[data-req-edit],[data-req-del],[data-adr-del],[data-task],[data-task-del]');
    if (!t) return;

    if (t.dataset.action === 'new-product') { openWizard(); return; }
    if (t.dataset.action === 'dash') { ui.view = 'dashboard'; render(); return; }
    if (t.dataset.action === 'edit-config') { openWizard(getProduct(ui.productId)); return; }
    if (t.dataset.action === 'report') { exportReport(getProduct(ui.productId)); return; }

    var p = ui.view === 'product' ? getProduct(ui.productId) : null;

    if (t.hasAttribute('data-menu')) { openProdMenu(t.getAttribute('data-menu')); return; }

    if (t.hasAttribute('data-open')) { ui.productId = t.getAttribute('data-open'); ui.view = 'product'; ui.phase = maxUnlockedPhase(getProduct(ui.productId)); render(); return; }

    if (p) {
      if (t.hasAttribute('data-goto')) { ui.phase = parseInt(t.getAttribute('data-goto'), 10); render(); return; }
      if (t.hasAttribute('data-gate')) { openGateModal(p, parseInt(t.getAttribute('data-gate'), 10)); return; }
      if (t.hasAttribute('data-doc-edit')) { openDocEditor(p, t.getAttribute('data-doc-edit')); return; }
      if (t.hasAttribute('data-mact-del')) { confirmDelete(t.getAttribute('data-mact-del')); return; }
      if (t.hasAttribute('data-doc-pdf')) { pdfDoc(p, t.getAttribute('data-doc-pdf')); return; }
      if (t.hasAttribute('data-req-edit')) { openReqEditor(p, t.getAttribute('data-req-edit')); return; }
      if (t.hasAttribute('data-req-del')) { delRequirement(p, t.getAttribute('data-req-del')); return; }
      if (t.hasAttribute('data-adr-del')) {
        var i = parseInt(t.getAttribute('data-adr-del'), 10);
        logHist(p, 'Decisão excluída', p.decisions[i].decision.slice(0, 60));
        p.decisions.splice(i, 1); touch(p); save(); render(); return;
      }
      if (t.hasAttribute('data-task')) { cycleTask(p, t.getAttribute('data-task'), t.closest('[data-col]').getAttribute('data-col')); return; }
      if (t.hasAttribute('data-task-del')) { delTask(p, t.getAttribute('data-task-del')); return; }
      if (t.closest('.pdp-check li[data-check]') && t.tagName !== 'INPUT') {
        var li = t.closest('[data-check]');
        toggleCheck(p, ui.phase, parseInt(li.getAttribute('data-check'), 10));
        return;
      }
    }
  });

  root.addEventListener('change', function (e) {
    var p = ui.view === 'product' ? getProduct(ui.productId) : null;
    if (!p) return;
    if (e.target.matches('[data-req-status]')) {
      var r = p.requirements.find(function (x) { return x.id === e.target.getAttribute('data-req-status'); });
      if (r) { r.status = e.target.value; logHist(p, 'Requisito atualizado', r.id + ' → ' + r.status); touch(p); save(); toast('Status atualizado.'); }
      return;
    }
    if (e.target.matches('input[type=checkbox]') && e.target.parentElement.hasAttribute('data-check')) {
      toggleCheck(p, ui.phase, parseInt(e.target.parentElement.getAttribute('data-check'), 10));
    }
  });

  root.addEventListener('submit', function (e) {
    var p = ui.view === 'product' ? getProduct(ui.productId) : null;
    if (!p) return;
    if (e.target.id === 'reqForm') {
      e.preventDefault();
      var inp = e.target.querySelector('[name=desc]');
      if (!inp.value.trim()) return;
      addRequirement(p, inp.value.trim(), e.target.querySelector('[name=priority]').value);
      return;
    }
    if (e.target.id === 'adrForm') {
      e.preventDefault();
      addDecision(p, e.target.elements);
      return;
    }
    if (e.target.hasAttribute('data-task-add')) {
      e.preventDefault();
      var ph = parseInt(e.target.getAttribute('data-task-add'), 10);
      var title = e.target.querySelector('[name=title]').value.trim();
      if (!title) return;
      p.tasks.push({ id: uid(), phase: ph, title: title, status: 'todo' });
      logHist(p, 'Tarefa criada', title + ' (Fase ' + ph + ')'); touch(p); save(); render();
    }
  });

  /* Drag & drop do kanban */
  root.addEventListener('dragstart', function (e) {
    var card = e.target.closest('[data-task]');
    if (!card) return;
    card.classList.add('dragging');
    e.dataTransfer.setData('text/plain', card.getAttribute('data-task'));
  });
  root.addEventListener('dragend', function (e) {
    var card = e.target.closest('[data-task]');
    if (card) card.classList.remove('dragging');
  });
  root.addEventListener('dragover', function (e) {
    var col = e.target.closest('[data-col]');
    if (col) { e.preventDefault(); col.classList.add('dragover'); }
  });
  root.addEventListener('dragleave', function (e) {
    var col = e.target.closest('[data-col]');
    if (col) col.classList.remove('dragover');
  });
  root.addEventListener('drop', function (e) {
    var col = e.target.closest('[data-col]');
    if (!col) return;
    e.preventDefault(); col.classList.remove('dragover');
    var p = getProduct(ui.productId); if (!p) return;
    moveTask(p, e.dataTransfer.getData('text/plain'), col.getAttribute('data-col'));
  });

  /* ---------- Ações ---------- */

  function toggleCheck(p, phase, idx) {
    var cl = p.checklists.find(function (c) { return c.phase === phase; });
    var it = cl.itens[idx];
    it.checked = !it.checked;
    it.checkedAt = it.checked ? new Date().toISOString() : null;
    touch(p); save();
    render();
  }

  function openProdMenu(pid) {
    var p = getProduct(pid);
    var ov = openModal(
      '<h3>' + esc(p.name) + '</h3><p class="m-sub">Escolha uma ação para este produto.</p>' +
      '<div class="m-actions" style="justify-content:flex-start;">' +
      '<button class="pdp-btn" data-mact="open">Abrir</button>' +
      '<button class="pdp-btn" data-mact="rename">Renomear</button>' +
      '<button class="pdp-btn danger" data-mact="delete">Excluir</button>' +
      '</div>'
    );
    ov.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-mact]');
      if (!b) return;
      closeModal();
      if (b.dataset.mact === 'open') { ui.productId = pid; ui.view = 'product'; ui.phase = maxUnlockedPhase(p); render(); }
      if (b.dataset.mact === 'rename') {
        var novo = prompt('Novo nome do produto:', p.name);
        if (novo && novo.trim()) { p.name = novo.trim(); logHist(p, 'Produto renomeado', ''); touch(p); save(); render(); }
      }
      if (b.dataset.mact === 'delete') confirmDelete(pid);
    });
  }

  function confirmDelete(pid) {
    var p = getProduct(pid);
    var ov = openModal(
      '<h3>Excluir produto?</h3><p class="m-sub">“' + esc(p.name) + '” e todos os seus dados serão removidos permanentemente deste navegador.</p>' +
      '<div class="m-actions"><button class="pdp-btn" data-cact="no">Cancelar</button><button class="pdp-btn danger" data-cact="yes">Excluir definitivamente</button></div>'
    );
    ov.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-cact]');
      if (!b) return;
      closeModal();
      if (b.dataset.cact === 'yes') {
        db.products = db.products.filter(function (x) { return x.id !== pid; });
        save(); render(); toast('Produto excluído.', 'info');
      }
    });
  }

  /* ---------- Wizard de configuração ---------- */

  var wiz = null;

  function openWizard(existing) {
    wiz = existing
      ? { step: 1, id: existing.id, name: existing.name, type: existing.type, rigor: existing.rigorLevel, standards: existing.standards.slice(), edit: true }
      : { step: 1, name: '', type: null, rigor: null, standards: [] };
    drawWizard();
  }

  function drawWizard() {
    var s = wiz.step;
    var body = '';

    if (s === 1) {
      body = '<div class="field"><label>Nome do produto</label><input class="pdp-input" id="wizName" value="' + esc(wiz.name) + '" placeholder="Ex.: Dosadora automática v1"></div>' +
        '<div class="field"><label>Tipo de produto</label><div class="radio-grid">' +
        TYPES.map(function (t) {
          return '<label class="radio-tile"><input type="radio" name="wizType" value="' + t.id + '"' + (wiz.type === t.id ? ' checked' : '') + '><span class="rt-box">' + t.label + '<small>' + t.hint + '</small></span></label>';
        }).join('') + '</div></div>';
    } else if (s === 2) {
      body = '<div class="field"><label>Nível de rigor do processo</label><div class="radio-grid" style="grid-template-columns:repeat(auto-fit,minmax(190px,1fr));">' +
        RIGOR.map(function (r) {
          return '<label class="radio-tile"><input type="radio" name="wizRigor" value="' + r.id + '"' + (wiz.rigor === r.id ? ' checked' : '') + '><span class="rt-box">' + r.label + '<small>' + r.hint + '</small></span></label>';
        }).join('') + '</div></div>' +
        (wiz.rigor === 'regulado' ? '<div class="pdp-alert" style="margin-bottom:0;">No modo Regulado, cada gate exige um responsável pela aprovação e todo o histórico é auditável (ISO 9001 8.3.6).</div>' : '');
    } else {
      body = '<div class="field"><label>Normas aplicáveis</label><div class="check-grid">' +
        '<label class="check-tile on" style="cursor:default;opacity:.75;"><input type="checkbox" checked disabled><span>ISO 9001:2015<small>sempre ativa (base)</small></span></label>' +
        STD_OPTIONS.map(function (o) {
          var dis = o.regulatedOnly && wiz.rigor !== 'regulado';
          var on = wiz.standards.indexOf(o.id) > -1;
          return '<label class="check-tile' + (on ? ' on' : '') + (dis ? '" style="opacity:.45;" data-dis="1' : '') + '"><input type="checkbox" value="' + o.id + '"' + (on ? ' checked' : '') + (dis ? ' disabled' : '') + '><span>' + o.label + (dis ? '<small>exige modo Regulado</small>' : '') + '</span></label>';
        }).join('') + '</div></div>';
    }

    var ov = openModal(
      '<h3>' + (wiz.edit ? 'Editar configuração' : 'Novo produto') + '</h3>' +
      '<p class="m-sub">Passo ' + s + ' de 3 — ' + ['identidade e tipo', 'nível de rigor', 'normas aplicáveis'][s - 1] + '.</p>' +
      '<div class="wiz-steps">' + [1, 2, 3].map(function (i) { return '<span class="' + (i <= s ? 'on' : '') + '"></span>'; }).join('') + '</div>' +
      '<div id="wizBody">' + body + '</div>' +
      '<div class="m-actions">' +
      (s > 1 ? '<button class="pdp-btn" data-wiz="back">Voltar</button>' : '<button class="pdp-btn" data-wiz="cancel">Cancelar</button>') +
      '<button class="pdp-btn primary" data-wiz="next">' + (s === 3 ? (wiz.edit ? 'Salvar configuração' : 'Criar produto') : 'Continuar') + '</button>' +
      '</div>', true
    );

    ov.querySelectorAll('input[name=wizType]').forEach(function (r) {
      r.addEventListener('change', function () { wiz.type = r.value; });
    });
    ov.querySelectorAll('input[name=wizRigor]').forEach(function (r) {
      r.addEventListener('change', function () {
        wiz.rigor = r.value;
        if (wiz.rigor !== 'regulado') wiz.standards = wiz.standards.filter(function (x) { return x !== 'anvisa_fda'; });
        drawWizard();
      });
    });
    ov.querySelectorAll('.check-grid input[value]:not([disabled])').forEach(function (c) {
      c.addEventListener('change', function () {
        if (c.checked) { if (wiz.standards.indexOf(c.value) < 0) wiz.standards.push(c.value); }
        else wiz.standards = wiz.standards.filter(function (x) { return x !== c.value; });
        c.closest('.check-tile').classList.toggle('on', c.checked);
      });
    });
    var nameInput = ov.querySelector('#wizName');
    if (nameInput) nameInput.addEventListener('input', function () { wiz.name = nameInput.value; });

    ov.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-wiz]');
      if (!b) return;
      var act = b.dataset.wiz;
      if (act === 'cancel') { closeModal(); return; }
      if (act === 'back') { wiz.step--; drawWizard(); return; }
      if (act === 'next') {
        if (s === 1) {
          if (!wiz.name.trim()) { toast('Informe o nome do produto.', 'info'); return; }
          if (!wiz.type) { toast('Selecione o tipo de produto.', 'info'); return; }
          wiz.step = 2;
        } else if (s === 2) {
          if (!wiz.rigor) { toast('Selecione o nível de rigor.', 'info'); return; }
          wiz.step = 3;
        } else {
          finishWizard();
          return;
        }
        drawWizard();
      }
    });
  }

  function finishWizard() {
    if (wiz.edit) {
      var p = getProduct(wiz.id);
      p.name = wiz.name.trim();
      var cfgChanged = p.type !== wiz.type || p.rigorLevel !== wiz.rigor || JSON.stringify(p.standards.slice().sort()) !== JSON.stringify(wiz.standards.slice().sort());
      p.type = wiz.type; p.rigorLevel = wiz.rigor; p.standards = wiz.standards.slice();
      if (cfgChanged) {
        var oldChecks = {};
        p.checklists.forEach(function (c) { oldChecks[c.phase] = {}; c.itens.forEach(function (i) { oldChecks[c.phase][i.txt] = i; }); });
        p.checklists = buildChecklists(p.type, p.standards);
        p.checklists.forEach(function (c) {
          c.itens.forEach(function (i) {
            var prev = oldChecks[c.phase] && oldChecks[c.phase][i.txt];
            if (prev) { i.checked = prev.checked; i.checkedAt = prev.checkedAt; }
          });
        });
        logHist(p, 'Configuração alterada', typeLabel(p.type) + ' · ' + p.rigorLevel + ' · normas: ' + (stdLabels(p.standards).join(', ') || '—'));
        toast('Processo recalculado conforme nova configuração.');
      } else { logHist(p, 'Produto renomeado', ''); }
      touch(p); save(); closeModal(); render();
      return;
    }
    var np = newProduct(wiz.name.trim(), wiz.type, wiz.rigor, wiz.standards.slice());
    db.products.unshift(np);
    save(); closeModal();
    ui.productId = np.id; ui.view = 'product'; ui.phase = 1;
    render();
    toast('Produto criado. Bom trabalho!');
  }

  /* ---------- Gates ---------- */

  function openGateModal(p, n) {
    if (n === 5) { openGate5Modal(p); return; }
    var ph = PHASES[n - 1];
    var g = p.gates.find(function (x) { return x.gateNumber === n; });
    var needAll = p.rigorLevel !== 'exploratorio';

    var critHtml = ph.gate.criterios.map(function (c, i) {
      var opt = !needAll && i === 2;
      return '<li' + (opt ? ' class="opt"' : '') + '><label style="display:flex;gap:10px;align-items:flex-start;cursor:pointer;width:100%;">' +
        '<input type="checkbox" data-crit="' + i + '"' + (opt ? '' : '') + '><span>' + esc(c) + (opt ? ' <em>(opcional no modo Exploratório)</em>' : '') + '</span></label></li>';
    }).join('');

    var aprovadorField = p.rigorLevel === 'regulado'
      ? '<div class="field"><label>Aprovado por (obrigatório)</label><input class="pdp-input" id="gateAprovador" placeholder="Nome do responsável"></div>'
      : '';

    var ov = openModal(
      '<h3>Gate ' + n + ' — “' + esc(ph.gate.titulo) + '”</h3>' +
      '<p class="m-sub">Confirme cada critério antes de liberar a Fase ' + (n + 1) + '. Esta decisão fica registrada no histórico.</p>' +
      '<ul class="crit-list">' + critHtml + '</ul>' +
      aprovadorField +
      '<div class="field"><label>Observações (opcional)</label><textarea class="pdp-textarea" id="gateNotes" rows="2" style="min-height:64px;font-family:var(--font-body);font-size:.88rem;"></textarea></div>' +
      '<div class="m-actions"><button class="pdp-btn" data-g="cancel">Voltar</button><button class="pdp-btn primary" data-g="approve" disabled>Aprovar e liberar Fase ' + (n + 1) + '</button></div>'
    );

    var btnApprove = ov.querySelector('[data-g=approve]');
    function validate() {
      var boxes = Array.prototype.slice.call(ov.querySelectorAll('[data-crit]'));
      var ok = boxes.every(function (b, i) { return i === 2 ? true : b.checked; });
      if (needAll) ok = boxes.every(function (b) { return b.checked; });
      var apr = ov.querySelector('#gateAprovador');
      if (apr && !apr.value.trim()) ok = false;
      btnApprove.disabled = !ok;
    }
    ov.addEventListener('change', validate);
    ov.addEventListener('input', validate);

    ov.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-g]');
      if (!b) return;
      if (b.dataset.g === 'cancel') { closeModal(); return; }
      g.status = 'aprovado';
      g.approvedAt = new Date().toISOString();
      g.notes = (ov.querySelector('#gateNotes') || {}).value || '';
      var apEl = ov.querySelector('#gateAprovador');
      g.aprovador = apEl ? apEl.value.trim() : '';
      logHist(p, 'Gate ' + n + ' aprovado', ph.gate.titulo + (g.aprovador ? ' · aprovador: ' + g.aprovador : ''));
      touch(p); save(); closeModal(); render();
      toast('Gate ' + n + ' aprovado! Fase ' + (n + 1) + ' liberada.');
    });
  }

  function openGate5Modal(p) {
    var opts = [['continuar', 'Continuar'], ['melhorar', 'Melhorar'], ['descontinuar', 'Descontinuar']];
    var ov = openModal(
      '<h3>Gate 5 — “Continuar, melhorar ou descontinuar?”</h3>' +
      '<p class="m-sub">Revisão periódica baseada nas métricas coletadas. A decisão é registrada como ADR no histórico.</p>' +
      '<div class="field"><label>Decisão</label><div class="radio-grid">' +
      opts.map(function (o, i) {
        return '<label class="radio-tile"><input type="radio" name="g5" value="' + o[0] + '"' + (i === 0 ? ' checked' : '') + '><span class="rt-box">' + o[1] + '</span></label>';
      }).join('') + '</div></div>' +
      '<div class="field"><label>Métricas que embasam a decisão</label><textarea class="pdp-textarea" id="g5notes" rows="3" style="min-height:80px;font-family:var(--font-body);font-size:.88rem;" placeholder="Resumo das métricas e aprendizados…"></textarea></div>' +
      '<div class="m-actions"><button class="pdp-btn" data-g5="cancel">Cancelar</button><button class="pdp-btn primary" data-g5="save">Registrar revisão</button></div>'
    );
    ov.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-g5]');
      if (!b) return;
      if (b.dataset.g5 === 'cancel') { closeModal(); return; }
      var dec = ov.querySelector('input[name=g5]:checked').value;
      var notes = ov.querySelector('#g5notes').value.trim();
      p.decisions.unshift({ date: new Date().toISOString(), decision: 'Gate 5 (revisão): ' + dec.toUpperCase(), rationale: notes, alternatives: 'Continuar / Melhorar / Descontinuar' });
      logHist(p, 'Gate 5 — revisão registrada', 'Decisão: ' + dec + (notes ? ' · ' + notes.slice(0, 60) : ''));
      touch(p); save(); closeModal(); render();
      toast('Revisão do Gate 5 registrada.');
    });
  }

  /* ---------- Requisitos ---------- */

  function nextReqId(p) {
    var max = 0;
    p.requirements.forEach(function (r) {
      var m = /^REQ-(\d+)$/.exec(r.id);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    });
    return 'REQ-' + String(max + 1).padStart(3, '0');
  }

  function addRequirement(p, desc, priority) {
    var r = { id: nextReqId(p), description: desc, priority: priority, status: 'Proposto', source: 'Usuário' };
    p.requirements.push(r);
    logHist(p, 'Requisito adicionado', r.id + ' (' + priority + ')');
    touch(p); save(); render();
  }

  function openReqEditor(p, rid) {
    var r = p.requirements.find(function (x) { return x.id === rid; });
    var ov = openModal(
      '<h3>Editar requisito ' + esc(r.id) + '</h3>' +
      '<div class="field"><label>Descrição</label><textarea class="pdp-textarea" id="rqDesc" rows="3" style="min-height:80px;font-family:var(--font-body);font-size:.9rem;">' + esc(r.description) + '</textarea></div>' +
      '<div class="field"><label>Prioridade</label><select class="pdp-select" id="rqPrio" style="width:100%;">' + PRIOS.map(function (x) { return '<option' + (x.id === r.priority ? ' selected' : '') + '>' + x.id + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label>Status</label><select class="pdp-select" id="rqStatus" style="width:100%;">' + REQ_STATUS.map(function (s) { return '<option' + (s === r.status ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label>Fonte</label><input class="pdp-input" id="rqSource" value="' + esc(r.source) + '"></div>' +
      '<div class="m-actions"><button class="pdp-btn" data-rq="cancel">Cancelar</button><button class="pdp-btn primary" data-rq="save">Salvar</button></div>'
    );
    ov.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-rq]');
      if (!b) return;
      if (b.dataset.rq === 'cancel') { closeModal(); return; }
      r.description = ov.querySelector('#rqDesc').value.trim();
      r.priority = ov.querySelector('#rqPrio').value;
      r.status = ov.querySelector('#rqStatus').value;
      r.source = ov.querySelector('#rqSource').value.trim();
      logHist(p, 'Requisito editado', r.id); touch(p); save(); closeModal(); render();
    });
  }

  function delRequirement(p, rid) {
    var r = p.requirements.find(function (x) { return x.id === rid; });
    p.requirements = p.requirements.filter(function (x) { return x.id !== rid; });
    logHist(p, 'Requisito excluído', rid + ' — ' + r.description.slice(0, 50));
    touch(p); save(); render();
  }

  /* ---------- Kanban ---------- */

  function moveTask(p, tid, col) {
    var t = p.tasks.find(function (x) { return x.id === tid; });
    if (!t || t.status === col) return;
    t.status = col;
    logHist(p, 'Tarefa movida', t.title + ' → ' + (TASK_COLS.find(function (c) { return c.id === col; })).label);
    touch(p); save(); render();
  }
  function cycleTask(p, tid, cur) {
    var order = ['todo', 'doing', 'done'];
    var next = order[(order.indexOf(cur) + 1) % order.length];
    moveTask(p, tid, next);
  }
  function delTask(p, tid) {
    var t = p.tasks.find(function (x) { return x.id === tid; });
    p.tasks = p.tasks.filter(function (x) { return x.id !== tid; });
    logHist(p, 'Tarefa excluída', t.title); touch(p); save(); render();
  }

  /* ---------- Decisões ---------- */

  function addDecision(p, els) {
    var dec = els.decision.value.trim();
    if (!dec) { toast('Descreva a decisão.', 'info'); return; }
    p.decisions.unshift({
      date: new Date().toISOString(),
      decision: dec,
      rationale: els.rationale.value.trim(),
      alternatives: els.alternatives.value.trim()
    });
    logHist(p, 'Decisão registrada (ADR)', dec.slice(0, 60));
    touch(p); save(); render();
  }

  /* ---------- Documentos / exportações ---------- */

  function openDocEditor(p, key) {
    var tpl = DOC_TEMPLATES[key];
    var saved = p.documents.find(function (d) { return d.type === key; });
    var content = saved ? saved.content : tpl.md;
    var ov = openModal(
      '<h3>' + esc(tpl.titulo) + '</h3>' +
      '<p class="m-sub">Fase ' + tpl.fase + (saved ? ' · versão atual v' + saved.version : ' · template pré-preenchido') + '. Formato Markdown.</p>' +
      '<div class="field"><textarea class="pdp-textarea" id="docContent" style="min-height:300px;"></textarea></div>' +
      '<div class="m-actions">' +
      '<button class="pdp-btn" data-d="cancel">Cancelar</button>' +
      '<button class="pdp-btn" data-d="preview">Imprimir</button>' +
      '<button class="pdp-btn" data-d="pdf">Baixar PDF</button>' +
      '<button class="pdp-btn primary" data-d="save">Salvar versão</button></div>', true
    );
    var ta = ov.querySelector('#docContent');
    ta.value = content;
    ov.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-d]');
      if (!b) return;
      if (b.dataset.d === 'cancel') { closeModal(); return; }
      if (b.dataset.d === 'preview') { printContent(tpl.titulo, ta.value); return; }
      if (b.dataset.d === 'pdf') {
        toast('Gerando PDF…', 'info');
        window.GerettPDF.fromHTML(esc(tpl.titulo) + ' — ' + esc(p.name), mdToHtml(ta.value), slug(p.name) + '-' + key + '.pdf')
          .then(function () { toast('PDF baixado.'); })
          .catch(function () { toast('Sem conexão com o gerador de PDF.', 'info'); });
        return;
      }
      if (!saved) {
        saved = { type: key, title: tpl.titulo, content: '', version: 0, generatedAt: null };
        p.documents.push(saved);
      }
      saved.content = ta.value;
      saved.version += 1;
      saved.generatedAt = new Date().toISOString();
      logHist(p, 'Documento salvo', tpl.titulo + ' v' + saved.version);
      touch(p); save(); closeModal(); render();
      toast(tpl.titulo + ' salvo (v' + saved.version + ').');
    });
  }

  function downloadFile(name, content, mime) {
    var blob = new Blob([content], { type: mime || 'text/markdown;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
  }

  function slug(s) {
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
  }

  function docWrap(title, bodyHtml) {
    return '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>' + esc(title) + '</title>' +
      '<style>@page{size:A4;margin:2cm}body{font-family:Calibri,Arial,sans-serif;font-size:11pt;color:#111;line-height:1.45}h1{font-size:20pt;margin:0 0 4pt}h2{font-size:14pt;border-bottom:1px solid #999;padding-bottom:3pt;margin-top:18pt}h3{font-size:12pt}table{border-collapse:collapse;width:100%;margin:8pt 0}th,td{border:1px solid #999;padding:5pt 7pt;text-align:left;font-size:10pt}th{background:#eee}.meta{color:#666;font-size:9pt}</style></head><body>' + bodyHtml + '</body></html>';
  }

  function printContent(title, bodyMd) {
    var html = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>' + esc(title) + '</title><style>' +
      'body{font-family:Georgia,serif;color:#111;max-width:760px;margin:40px auto;padding:0 24px;line-height:1.65;}' +
      'h1,h2,h3{font-family:Arial,sans-serif;}table{border-collapse:collapse;width:100%;margin:14px 0;font-family:Arial,sans-serif;font-size:.85rem;}' +
      'td,th{border:1px solid #999;padding:6px 9px;text-align:left;}th{background:#eee;}' +
      'code{background:#f2f2f2;padding:1px 5px;border-radius:3px;font-size:.9em;}' +
      '@media print{body{margin:12mm auto;}}' +
      '</style></head><body><pre style="white-space:pre-wrap;font-family:inherit;font-size:15px;">' + esc(bodyMd) + '</pre>' +
      '<script>window.onload=function(){setTimeout(function(){window.print();},150);};<\/script></body></html>';
    var w = window.open('', '_blank');
    if (!w) { toast('Permita pop-ups para imprimir.', 'info'); return; }
    w.document.open(); w.document.write(html); w.document.close();
  }

  function printDoc(p, key) {
    var d = p.documents.find(function (x) { return x.type === key; });
    if (d) printContent(d.title + ' — ' + p.name, d.content);
  }

  function mdInline(s) {
    return s
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g, '$1<em>$2</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  function mdToHtml(md) {
    var lines = String(md).split('\n');
    var out = [], i = 0;
    function splitRow(line) {
      var cells = line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|');
      return cells.map(function (c) { return c.trim(); });
    }
    while (i < lines.length) {
      var ln = lines[i];
      if (/^\s*$/.test(ln)) { i++; continue; }
      var h = ln.match(/^(#{1,6})\s+(.*)$/);
      if (h) { var lv = Math.min(h[1].length + 1, 4); out.push('<h' + lv + '>' + mdInline(h[2]) + '</h' + lv + '>'); i++; continue; }
      if (/^\s*>/.test(ln)) { out.push('<blockquote><p>' + mdInline(ln.replace(/^\s*>\s?/, '')) + '</p></blockquote>'); i++; continue; }
      if (/^\s*\|/.test(ln)) {
        var buf = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) { buf.push(lines[i]); i++; }
        if (buf.length >= 2 && /^[\s|:-]+$/.test(buf[1])) buf.splice(1, 1);
        var head = splitRow(buf[0]);
        var rows = buf.slice(1).map(splitRow);
        out.push('<table><thead><tr>' + head.map(function (c) { return '<th>' + mdInline(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          rows.map(function (r) { return '<tr>' + head.map(function (_, k) { return '<td>' + mdInline(r[k] || '') + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>');
        continue;
      }
      if (/^\s*[-*]\s+/.test(ln)) {
        var items = [];
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { items.push('<li>' + mdInline(lines[i].replace(/^\s*[-*]\s+/, '')) + '</li>'); i++; }
        out.push('<ul>' + items.join('') + '</ul>');
        continue;
      }
      if (/^\s*\d+[.)]\s+/.test(ln)) {
        var oitems = [];
        while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) { oitems.push('<li>' + mdInline(lines[i].replace(/^\s*\d+[.)]\s+/, '')) + '</li>'); i++; }
        out.push('<ol>' + oitems.join('') + '</ol>');
        continue;
      }
      out.push('<p>' + mdInline(ln.trim()) + '</p>');
      i++;
    }
    return out.join('\n');
  }

  function pdfDoc(p, key) {
    var d = p.documents.find(function (x) { return x.type === key; });
    if (!d) return;
    toast('Gerando PDF…', 'info');
    window.GerettPDF.fromHTML(esc(d.title) + ' — ' + esc(p.name), mdToHtml(d.content), slug(p.name) + '-' + key + '.pdf')
      .then(function () { toast('PDF baixado.'); })
      .catch(function () {
        toast('Sem conexão com o gerador de PDF — abrindo diálogo de impressão.', 'info');
        printDoc(p, key);
      });
  }

  function exportReport(p) {
    var md = '# Relatório de Desenvolvimento — ' + p.name + '\n\n' +
      '**Gerado em:** ' + fmtDateTime(new Date().toISOString()) + '\n' +
      '**Tipo:** ' + typeLabel(p.type) + '\n' +
      '**Rigor:** ' + p.rigorLevel + '\n' +
      '**Normas:** ISO 9001' + (p.standards.length ? ', ' + stdLabels(p.standards).join(', ') : '') + '\n' +
      '**Progresso dos checklists:** ' + progressPct(p) + '%\n\n' +
      '## Gates\n| Gate | Pergunta | Status | Aprovado em | Aprovador |\n|---|---|---|---|---|\n' +
      p.gates.map(function (g) {
        var q = PHASES[g.gateNumber - 1].gate.titulo;
        return '| ' + g.gateNumber + ' | ' + q + ' | ' + (g.status === 'aprovado' ? '✅ Aprovado' : '⏳ Pendente') + ' | ' + (g.approvedAt ? fmtDateTime(g.approvedAt) : '—') + ' | ' + (g.aprovador || '—') + ' |';
      }).join('\n') + '\n\n' +
      '## Checklists\n' + p.checklists.map(function (c) {
        var done = c.itens.filter(function (i) { return i.checked; }).length;
        return '### Fase ' + c.phase + ' (' + done + '/' + c.itens.length + ')\n' + c.itens.map(function (i) { return '- [' + (i.checked ? 'x' : ' ') + '] ' + i.txt; }).join('\n');
      }).join('\n\n') + '\n\n' +
      '## Requisitos\n' + (p.requirements.length
        ? '| ID | Descrição | Prioridade | Status | Fonte |\n|---|---|---|---|---|\n' + p.requirements.map(function (r) { return '| ' + r.id + ' | ' + r.description.replace(/\|/g, '/') + ' | ' + r.priority + ' | ' + r.status + ' | ' + (r.source || '') + ' |'; }).join('\n')
        : '_Nenhum._') + '\n\n' +
      '## Decisões (ADR)\n' + (p.decisions.length
        ? p.decisions.map(function (d) { return '- **' + fmtDateTime(d.date) + '** — ' + d.decision + (d.rationale ? '\n  - Justificativa: ' + d.rationale : '') + (d.alternatives ? '\n  - Alternativas: ' + d.alternatives : ''); }).join('\n')
        : '_Nenhuma._') + '\n\n' +
      '## Histórico recente\n' + p.history.slice(0, 25).map(function (h) { return '- `' + fmtDateTime(h.timestamp) + '` ' + h.action + (h.details ? ' — ' + h.details : ''); }).join('\n') + '\n';
    downloadFile('relatorio-' + slug(p.name) + '.doc', docWrap('Relatório de Desenvolvimento — ' + p.name, mdToHtml(md)), 'application/msword');
    toast('Relatório .doc baixado.');
  }

  /* ---------- Tour de primeira utilização ---------- */

  function maybeTour() {
    if (db.tourSeen) return;
    // Não exibir o tour enquanto a aba PDP estiver oculta: o overlay é de tela
    // cheia e bloquearia os cliques nas outras ferramentas (ex.: Gestão de Projetos).
    var panel = document.getElementById('tool-pdp');
    if (panel && panel.hidden) return;
    db.tourSeen = true; save();
    var ov = openModal(
      '<h3>Bem-vindo à Ferramenta Organizacional</h3>' +
      '<p class="m-sub">Um tour rápido de 30 segundos:</p>' +
      '<ul class="tour-list">' +
      '<li><span class="t-num">1</span><span><strong>Motor fixo de processo</strong><p>Suas fases seguem Ulrich &amp; Eppinger, Stage-Gate® e ISO 9001: 6 fases ligadas por 5 portões de aprovação.</p></span></li>' +
      '<li><span class="t-num">2</span><span><strong>Configuração inteligente</strong><p>Tipo de produto, rigor e normas adaptam checklists, tarefas e documentos automaticamente.</p></span></li>' +
      '<li><span class="t-num">3</span><span><strong>Gates bloqueiam avanço</strong><p>A próxima fase só abre quando você confirma explicitamente os critérios do portão.</p></span></li>' +
      '<li><span class="t-num">4</span><span><strong>Tudo salvo aqui no navegador</strong><p>Dados persistem no localStorage — exporte relatórios e documentos em Markdown/PDF quando precisar.</p></span></li>' +
      '</ul>' +
      '<div class="m-actions"><button class="pdp-btn primary" data-tour="ok">Começar</button></div>'
    );
    ov.addEventListener('click', function (ev) {
      if (ev.target.closest('[data-tour]') || ev.target === ov) closeModal();
    });
  }

  /* ---------- Boot ---------- */

  render();
  maybeTour();

  // Coordena o modal com a aba: abre o tour quando a aba PDP fica visível
  // pela 1ª vez e fecha um eventual overlay do PDP ao sair da aba (o overlay
  // é de tela cheia e bloquearia os cliques nas demais ferramentas).
  (function () {
    var panel = document.getElementById('tool-pdp');
    if (!panel || !window.MutationObserver) return;
    new MutationObserver(function () {
      if (panel.hidden) closeModal();
      else maybeTour();
    }).observe(panel, { attributes: true, attributeFilter: ['hidden'] });
  })();

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
})();
