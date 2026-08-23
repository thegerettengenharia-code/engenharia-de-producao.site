/* ==========================================================================
   GERETT — FLASHCARDS DE ESTUDO
   Arquitetura em 3 módulos independentes:
     1) FlashcardsAPI  → camada de dados (mock local, trocável por back-end)
     2) Jogo           → motor da rodada (fila, acertos/erros, progresso)
     3) UI             → telas, eventos e acessibilidade
   ========================================================================== */
(function () {
  'use strict';

  /* Configurações gerais do jogo ------------------------------------------ */
  const CONFIG = {
    maxCartoes: 12,        // tamanho máximo do baralho por rodada
    delayRedeMs: 250,      // latência simulada do "back-end" (mock)
    feedbackMs: 650        // duração do flash verde/vermelho entre cartões
  };
  const CHAVE_ULTIMO_TEMA = 'gerett.flashcards.ultimoTopico';

  /* ========================================================================
     MÓDULO 1 · CAMADA DE DADOS — FlashcardsAPI
     --------------------------------------------------------------------
     Hoje: gera os cartões DINAMICAMENTE a partir do conteúdo real do
     portal (window.SITE_DATA), usando o TÍTULO do conteúdo como chave.
     Amanhã: basta trocar o corpo de `buscarPorTitulo` por um `fetch()`
     no seu back-end (ex.: GET /api/flashcards?titulo=...). Nada mais
     na aplicação precisa mudar, pois ela só consome esta API.
     ======================================================================== */
  const FlashcardsAPI = (() => {

    /** Banco mock para títulos que não existem no SITE_DATA.
     *  Estrutura idêntica à que o back-end real devolverá. */
    const BANCO_MOCK = [
      {
        chaves: ['variaveis', 'python'],
        cartoes: [
          { pergunta: 'O que é uma variável em Python?', resposta: 'Um nome associado a um valor na memória. Em Python não se declara tipo: a inferência é dinâmica (ex.: idade = 30).' },
          { pergunta: 'Como converter tipos em Python?', resposta: 'Usando as funções int(), float(), str() e bool(). Ex.: int("42") retorna o número 42.' },
          { pergunta: 'Qual a diferença entre lista e tupla?', resposta: 'Lista ([]): mutável, permite alterações. Tupla (()): imutável, ideal para dados fixos e chaves de dicionário.' }
        ]
      },
      {
        chaves: ['metodologia cientifica', 'metodologia'],
        cartoes: [
          { pergunta: 'O que é uma hipótese científica?', resposta: 'Uma afirmação testável sobre a relação entre variáveis, que orienta a coleta e a análise de dados.' },
          { pergunta: 'Diferença entre abordagem qualitativa e quantitativa?', resposta: 'Quantitativa: números e estatística, busca generalização. Qualitativa: significados e contextos, busca compreensão em profundidade.' },
          { pergunta: 'Para que serve a revisão de literatura?', resposta: 'Mapear o estado da arte, identificar lacunas de pesquisa e justificar a relevância do estudo proposto.' }
        ]
      }
    ];

    /** Remove acentos/pontuação e padroniza para comparação segura. */
    function normalizar(txt) {
      return (txt || '')
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    /** Corta textos longos (ex.: descrições de aplicações) nas primeiras
     *  frases para caber bem no verso do cartão. */
    function resumir(texto, maxFrases = 2) {
      if (!texto) return '';
      const frases = texto.split(/(?<=[.!?])\s+/);
      return frases.slice(0, maxFrases).join(' ').trim();
    }

    /** Monta um baralho completo a partir de um SUBTÓPICO real do SITE_DATA. */
    function gerarDeSubtopico(categoria, sub) {
      const cartoes = [];
      let seq = 1;
      const push = (p, r) => cartoes.push({ id: sub.titulo + '#' + seq++, pergunta: p, resposta: r });

      // Cartão-mestre: definição do próprio subtópico
      if (sub.definicao) push('O que é ' + sub.titulo + '?', sub.definicao);

      // Um cartão para cada tópico-filho (conceitos específicos)
      (sub.topicos || []).forEach(t => {
        if (t.nome && t.descricao) push('Na prática, o que significa “' + t.nome + '”?', t.descricao);
      });

      // Cartão de fórmula, quando existir
      if (sub.formula && String(sub.formula).trim()) {
        push('Qual a fórmula / expressão-chave de ' + sub.titulo + '?', String(sub.formula).trim());
      }

      // Cartões de aplicação prática (resumidos para leitura rápida)
      (sub.aplicacoes || []).forEach(a => {
        if (a.nome && a.descricao) push('Como aplicar na indústria: ' + a.nome + '?', resumir(a.descricao));
      });

      return { titulo: sub.titulo, categoria: categoria ? categoria.nome : '', cartoes };
    }

    /** Monta um baralho menor a partir de um MATERIAL da Biblioteca Digital
     *  (títulos externos que não existem em SITE_DATA). */
    function gerarDeMaterial(m) {
      const cartoes = [];
      const t = m.title || 'Material';
      let seq = 1;
      const push = (p, r) => cartoes.push({ id: 'bd:' + (m.id || seq) + '#' + seq++, pergunta: p, resposta: r });

      if (m.description) push('O que é “' + t + '”?', m.description);

      // Cartão de autoria/contexto institucional
      const autores = (m.authors || []).slice(0, 3).join(', ');
      if (m.institution || autores) {
        push('Quem publica o material “' + t + '”?', [autores, m.institution].filter(Boolean).join(' · ') + (m.year ? ' (' + m.year + ')' : ''));
      }

      // Cartão de palavras-chave
      if ((m.keywords || []).length) {
        push('Quais os temas-chave abordados em “' + t + '”?', m.keywords.join(', '));
      }

      return { titulo: t, categoria: 'Biblioteca Digital', cartoes };
    }

    /** Busca recursiva por título em categorias > subtópicos > tópicos.
     *  Duas passadas: 1ª casa SUBTÓPICOS exatos; 2ª aceita tópicos-filho.
     *  Isso evita ambiguidade quando um título existe nas duas condições
     *  (ex.: "Previsão de demanda" é subtópico e também filho de
     *  "Planejamento da produção") — sem isso, o baralho errado vencia. */
    function procurarNoConteudo(tituloAlvo) {
      const S = window.SITE_DATA;
      if (!S || !Array.isArray(S.categorias)) return null;

      // Passada 1: título casa com o subtópico inteiro → baralho completo
      for (const cat of S.categorias) {
        for (const sub of cat.subtopicos || []) {
          if (normalizar(sub.titulo) === tituloAlvo) {
            return gerarDeSubtopico(cat, sub);
          }
        }
      }

      // Passada 2: título casa com um tópico-filho → contexto do pai
      for (const cat of S.categorias) {
        for (const sub of cat.subtopicos || []) {
          const filho = (sub.topicos || []).find(t => normalizar(t.nome) === tituloAlvo);
          if (filho) {
            return gerarDeSubtopico(cat, sub); // traz o contexto completo
          }
        }
      }
      return null;
    }

    /** Procura o título entre os materiais da Biblioteca Digital. */
    function procurarNaBiblioteca(tituloAlvo) {
      const B = window.SITE_BIBLIOTECA;
      if (!B || !Array.isArray(B.materiais)) return null;
      const m = B.materiais.find(x => normalizar(x.title) === tituloAlvo);
      return m ? gerarDeMaterial(m) : null;
    }

    /** Fallback: procura no banco mock por palavras-chave. */
    function procurarNoMock(tituloAlvo) {
      for (const item of BANCO_MOCK) {
        const casou = item.chaves.some(ch => tituloAlvo.includes(normalizar(ch)));
        if (casou) {
          return {
            titulo: 'Tema personalizado',
            categoria: 'Mock',
            cartoes: item.cartoes.map((c, i) => ({ id: 'mock#' + i, ...c }))
          };
        }
      }
      return null;
    }

    /**
     * API pública — recebe o TÍTULO do conteúdo e devolve uma Promise
     * com { titulo, categoria, cartoes: [{id, pergunta, resposta}] }.
     *
     * >>> INTEGRAÇÃO FUTURA COM BACK-END <<<
     * Substitua o corpo desta função por algo como:
     *   const resp = await fetch('/api/flashcards?titulo=' + encodeURIComponent(titulo));
     *   if (!resp.ok) throw new Error('Deck não encontrado');
     *   return await resp.json();
     */
    async function buscarPorTitulo(titulo) {
      await new Promise(r => setTimeout(r, CONFIG.delayRedeMs)); // simula rede

      const alvo = normalizar(titulo);
      if (!alvo) throw new Error('Título vazio');

      const resultado =
        procurarNoConteudo(alvo) ||   // 1º: conteúdo real do portal
        procurarNaBiblioteca(alvo) || // 2º: materiais da Biblioteca Digital
        procurarNoMock(alvo);         // 3º: banco mock

      if (!resultado || !resultado.cartoes.length) {
        throw new Error('Nenhum deck encontrado para "' + titulo + '"');
      }
      return resultado;
    }

    return { buscarPorTitulo, normalizar }; // exposto p/ testes e reuso
  })();
  window.FlashcardsAPI = FlashcardsAPI;

  /* ========================================================================
     MÓDULO 2 · MOTOR DO JOGO
     Regras: "Acertei" avança; "Errei" devolve o cartão ao fim da fila.
     A rodada termina quando todos os cartões foram acertados.
     ======================================================================== */
  const Jogo = {
    deck: [],            // baralho original (para reiniciar)
    fila: [],            // fila viva de cartões pendentes
    atual: null,         // cartão exibido agora
    concluidos: new Set(), // ids já acertados
    acertos: 0,
    erros: 0,
    inicio: null,

    /** Prepara uma nova rodada embaralhando o baralho (Fisher-Yates). */
    iniciar(deck) {
      this.deck = deck.slice(0, CONFIG.maxCartoes);
      this.fila = this.embaralhar(this.deck.slice());
      this.concluidos.clear();
      this.acertos = 0;
      this.erros = 0;
      this.inicio = Date.now();
      this.atual = this.fila.shift() || null;
    },

    embaralhar(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    },

    /** Usuário acertou: cartão sai definitivamente da rodada. */
    marcarAcerto() {
      this.acertos++;
      this.concluidos.add(this.atual.id);
    },

    /** Usuário errou: cartão volta para o fim da fila (revisão espaçada simples). */
    marcarErro() {
      this.erros++;
      this.fila.push(this.atual);
    },

    /** Avança para o próximo cartão pendente (ou null se acabou). */
    proximo() {
      this.atual = this.fila.shift() || null;
      return this.atual;
    },

    get totalUnicos() { return this.deck.length; },
    get estudados() { return this.concluidos.size; },
    get finalizado() { return this.fila.length === 0 && !this.atual; },
    get precisao() {
      const tot = this.acertos + this.erros;
      return tot ? Math.round((this.acertos / tot) * 100) : 100;
    }
  };

  /* ========================================================================
     MÓDULO 3 · INTERFACE (telas, eventos, acessibilidade)
     ======================================================================== */
  const $ = sel => document.querySelector(sel);
  const el = {
    setup: $('#fcSetup'), game: $('#fcGame'), result: $('#fcResult'),
    select: $('#fcTopicSelect'), startBtn: $('#fcStartBtn'),
    chip: $('#fcChipCategoria'), titulo: $('#fcTituloTema'),
    stAcertos: $('#fcStatAcertos'), stErros: $('#fcStatErros'),
    progresso: $('#fcProgresso'), fill: $('#fcProgressFill'),
    labelProg: $('#fcProgressLabel'),
    card: $('#fcCard'), pergunta: $('#fcPergunta'), resposta: $('#fcResposta'),
    btnVirar: $('#fcBtnVirar'), btnErrei: $('#fcBtnErrei'), btnAcertei: $('#fcBtnAcertei'),
    btnSair: $('#fcBtnSair'),
    actions: document.querySelector('.fc-actions'),
    loading: $('#fcLoading'),
    live: $('#fcAriaLive'),
    resSub: $('#fcResultSub'), resTotal: $('#fcResTotal'),
    resAcertos: $('#fcResAcertos'), resErros: $('#fcResErros'),
    resPrecisao: $('#fcResPrecisao'),
    btnRepetir: $('#fcBtnRepetir'), btnTrocar: $('#fcBtnTrocar')
  };

  let temaAtual = '';
  let processando = false; // trava cliques durante animação de feedback/troca

  /* ---- Controle das telas ------------------------------------------------ */
  function mostrarTela(nome) {
    el.setup.hidden = nome !== 'setup';
    el.game.hidden = nome !== 'game';
    el.result.hidden = nome !== 'result';
  }

  /* ---- Popula o <select> com todos os subtópicos do portal --------------- */
  function popularSelect(preSelecionado) {
    const S = window.SITE_DATA;
    if (!S) return;
    const grupos = [];

    S.categorias.forEach(cat => {
      (cat.subtopicos || []).forEach(sub => {
        grupos.push({ cat: cat.nome, titulo: sub.titulo });
      });
    });

    // Agrupa por categoria usando <optgroup>
    const porCategoria = {};
    grupos.forEach(g => { (porCategoria[g.cat] = porCategoria[g.cat] || []).push(g.titulo); });

    el.select.innerHTML = Object.entries(porCategoria).map(([cat, titulos]) =>
      '<optgroup label="' + cat + '">' +
      titulos.map(t => '<option value="' + t.replace(/"/g, '&quot;') + '">' + t + '</option>').join('') +
      '</optgroup>'
    ).join('');

    if (preSelecionado) {
      const alvo = FlashcardsAPI.normalizar(preSelecionado);
      const opt = [...el.select.options].find(o => FlashcardsAPI.normalizar(o.value) === alvo);
      if (opt) opt.selected = true;
    }
  }

  /* ---- Atualiza contadores e barra de progresso --------------------------- */
  function atualizarHUD() {
    el.stAcertos.textContent = Jogo.acertos;
    el.stErros.textContent = Jogo.erros;
    const pct = Jogo.totalUnicos ? Math.round((Jogo.estudados / Jogo.totalUnicos) * 100) : 0;
    el.fill.style.width = pct + '%';
    el.labelProg.textContent = Jogo.estudados + '/' + Jogo.totalUnicos;
    el.progresso.setAttribute('aria-valuenow', String(pct));
  }

  /* ---- Renderiza o cartão atual (sempre com frente visível) --------------- */
  function renderCartao(cartao) {
    el.card.classList.remove('flipped', 'is-right', 'is-wrong', 'is-leaving', 'is-entering');
    el.pergunta.textContent = cartao.pergunta;
    el.resposta.textContent = cartao.resposta;
    modoPergunta();
    requestAnimationFrame(() => el.card.classList.add('is-entering'));
    requestAnimationFrame(() => requestAnimationFrame(() => el.card.classList.remove('is-entering')));
  }

  /* ---- Alterna entre modo "pergunta" e modo "avaliação" ------------------ */
  function modoPergunta() {
    el.card.classList.remove('flipped');
    el.card.setAttribute('aria-label', 'Cartão de pergunta. Pressione Enter ou Espaço para virar.');
    el.actions.classList.remove('evaluating');
    el.btnErrei.hidden = true;
    el.btnAcertei.hidden = true;
    el.btnVirar.hidden = false;
  }
  function modoAvaliacao() {
    el.card.classList.add('flipped');
    el.card.setAttribute('aria-label', 'Resposta revelada. Use as setas ou botões para avaliar.');
    el.actions.classList.add('evaluating');
    el.btnVirar.hidden = true;
    el.btnErrei.hidden = false;
    el.btnAcertei.hidden = false;
    el.btnAcertei.focus({ preventScroll: true }); // foco direto na ação positiva
  }

  /* ---- Início de uma rodada ------------------------------------------------ */
  async function iniciarRodada(titulo) {
    temaAtual = titulo;
    mostrarTela('game');
    el.chip.textContent = 'Carregando…';
    el.titulo.textContent = titulo;
    // Skeleton no lugar do cartão enquanto o "back-end" responde
    el.card.hidden = true;
    el.actions.hidden = true;
    el.loading.hidden = false;

    try {
      const deck = await FlashcardsAPI.buscarPorTitulo(titulo);
      Jogo.iniciar(deck.cartoes);

      el.chip.textContent = deck.categoria || 'Engenharia de Produção';
      el.card.hidden = false;
      el.actions.hidden = false;
      el.loading.hidden = true;
      renderCartao(Jogo.atual);
      atualizarHUD();
      el.live.textContent = 'Baralho carregado: ' + Jogo.totalUnicos + ' cartões.';

      // Persiste o último tema e reflete na URL (link compartilhável)
      try { localStorage.setItem(CHAVE_ULTIMO_TEMA, titulo); } catch (e) {}
      history.replaceState(null, '', '?topico=' + encodeURIComponent(titulo));
    } catch (err) {
      el.card.hidden = false;
      el.actions.hidden = false;
      el.loading.hidden = true;
      alert('Não encontramos flashcards para este tema ainda. Escolha outro conteúdo.');
      mostrarTela('setup');
    }
  }

  /* ---- Virar o cartão ------------------------------------------------------ */
  function virar() {
    if (processando || el.game.hidden) return;
    if (!el.card.classList.contains('flipped')) modoAvaliacao();
  }

  /* ---- Responder (acertou/errou) com feedback visual ------------------------ */
  function responder(acertou) {
    if (processando || !el.card.classList.contains('flipped')) return;
    processando = true;

    // Feedback visual: borda verde/vermelha + pulso (ver CSS .is-right/.is-wrong)
    el.card.classList.add(acertou ? 'is-right' : 'is-wrong');

    setTimeout(() => {
      if (acertou) Jogo.marcarAcerto(); else Jogo.marcarErro();
      const proximo = Jogo.proximo();

      if (proximo) {
        renderCartao(proximo);
        atualizarHUD();
      } else {
        atualizarHUD();
        finalizarRodada();
      }
      processando = false;
    }, CONFIG.feedbackMs);
  }

  /* ---- Fim da rodada --------------------------------------------------------- */
  function finalizarRodada() {
    el.resTotal.textContent = Jogo.totalUnicos;
    el.resAcertos.textContent = Jogo.acertos;
    el.resErros.textContent = Jogo.erros;
    el.resPrecisao.textContent = Jogo.precisao + '%';
    const seg = Math.round((Date.now() - Jogo.inicio) / 1000);
    el.resSub.textContent = 'Você revisou "' + temaAtual + '" em ' +
      (seg >= 60 ? Math.floor(seg / 60) + 'min ' + (seg % 60) + 's' : seg + 's') + '.';
    mostrarTela('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---- Encerrar manualmente (botão Sair) ------------------------------------ */
  function sair() {
    if (Jogo.estudados > 0) { finalizarRodada(); return; }
    mostrarTela('setup');
    history.replaceState(null, '', location.pathname);
  }

  /* ========================================================================
     EVENTOS
     ======================================================================== */

  // Botão principal da tela de seleção
  el.startBtn.addEventListener('click', () => iniciarRodada(el.select.value));
  el.select.addEventListener('keydown', e => {
    if (e.key === 'Enter') iniciarRodada(el.select.value);
  });

  // Interações do jogo
  el.card.addEventListener('click', virar);
  el.btnVirar.addEventListener('click', virar);
  el.btnErrei.addEventListener('click', () => responder(false));
  el.btnAcertei.addEventListener('click', () => responder(true));
  el.btnSair.addEventListener('click', sair);

  // Resultado
  el.btnRepetir.addEventListener('click', () => iniciarRodada(temaAtual));
  el.btnTrocar.addEventListener('click', () => {
    history.replaceState(null, '', location.pathname);
    mostrarTela('setup');
  });

  // Teclado: Espaço/Enter vira · ← errei · → acertei
  document.addEventListener('keydown', e => {
    if (el.game.hidden || processando) return;
    if (e.target.tagName === 'SELECT') return;
    if (e.key === ' ' || e.key === 'Enter') {
      if (document.activeElement === document.body || document.activeElement === el.card) {
        e.preventDefault(); virar();
      }
    } else if (e.key === 'ArrowLeft' && !el.btnErrei.hidden) {
      responder(false);
    } else if (e.key === 'ArrowRight' && !el.btnAcertei.hidden) {
      responder(true);
    } else if (e.key === 'Escape') {
      sair();
    }
  });

  /* ========================================================================
     BOOTSTRAP — decide o tema inicial:
       1) ?topico=Título na URL (deep-link de qualquer página de conteúdo)
       2) último tema estudado (localStorage)
       3) primeiro subtópico do portal
     ======================================================================== */
  (function bootstrap() {
    const params = new URLSearchParams(location.search);
    const daURL = params.get('topico') || params.get('titulo');

    let ultimo = null;
    try { ultimo = localStorage.getItem(CHAVE_ULTIMO_TEMA); } catch (e) {}

    popularSelect(daURL || ultimo);

    if (daURL) {
      iniciarRodada(daURL);
    }
  })();

})();
