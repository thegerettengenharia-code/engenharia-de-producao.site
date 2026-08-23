/* ==========================================================================
   GERETT — CADERNO DIGITAL DE ESTUDOS
   Gera, a partir do acervo do portal (window.SITE_DATA), um documento com:
     Parte 0 · Apresentação, objetivos e referências
     Parte 1 · Conteúdo teórico detalhado
     Parte 2 · Área de anotações do aluno (persistente em localStorage)
     Parte 3 · Exercícios com gabarito oculto (<details>)
   Extras: exportação em PDF (jsPDF) e impressão.
   ========================================================================== */
(function () {
  'use strict';

  const CHAVE_NOTAS = 'gerett.caderno.notas.';
  const CHAVE_ULTIMO = 'gerett.caderno.ultimoTopico';

  /* ========================================================================
     MÓDULO 1 · CAMADA DE DADOS
     Busca o subtópico pelo título e devolve TODA a matéria-prima do caderno.
     Nada aqui é inventado: só conteúdo presente em SITE_DATA.
     ======================================================================== */
  const CadernoAPI = (() => {

    function normalizar(txt) {
      return (txt || '')
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    /** Corta textos longos nas primeiras frases (para enunciados/gabaritos). */
    function resumir(texto, maxFrases = 2) {
      if (!texto) return '';
      return texto.split(/(?<=[.!?])\s+/).slice(0, maxFrases).join(' ').trim();
    }

    async function buscarPorTitulo(titulo) {
      await new Promise(r => setTimeout(r, 250)); // consistência de UX com flashcards
      const alvo = normalizar(titulo);
      const S = window.SITE_DATA;
      if (!S || !Array.isArray(S.categorias)) throw new Error('Acervo indisponível');

      for (const cat of S.categorias) {
        for (const sub of cat.subtopicos || []) {
          if (normalizar(sub.titulo) === alvo ||
              (sub.topicos || []).some(t => normalizar(t.nome) === alvo)) {
            return {
              titulo: sub.titulo,
              categoria: cat.nome,
              categoriaId: cat.id,
              urlFonte: 'https://thegerett.com.br/topicos.html',
              definicao: sub.definicao || '',
              topicos: sub.topicos || [],
              formula: String(sub.formula || '').trim(),
              aplicacoes: sub.aplicacoes || [],
              referencias: cat.referencias || []
            };
          }
        }
      }
      throw new Error('Tema não encontrado no acervo');
    }

    return { buscarPorTitulo, normalizar, resumir };
  })();
  window.CadernoAPI = CadernoAPI;

  /* ========================================================================
     MÓDULO 2 · GERAÇÃO DOS BLOCOS DO CADERNO
     ======================================================================== */

  /** Escapa HTML para interpolar dados com segurança na página. */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /** Apresentação do professor (primeira pessoa) — redação didática sobre
   *  a estrutura real do caderno, sem inventar fatos técnicos. */
  function blocoApresentacao(rec) {
    const nTopicos = rec.topicos.length;
    const nApps = rec.aplicacoes.length;
    let texto =
      'Olá! Seja bem-vindo(a) ao seu caderno de estudos. Nesta edição, vamos mergulhar em ' +
      '<b>' + esc(rec.titulo) + '</b>, um tema essencial da área de <b>' + esc(rec.categoria) +
      '</b> na Engenharia de Produção. Preparei este material organizando o acervo do portal ' +
      'em três momentos: primeiro, a <b>base teórica</b>';
    if (nTopicos) texto += ', com atenção especial aos conceitos que sustentam o tema';
    if (nApps) texto += ' e suas <b>' + nApps + ' aplicações práticas</b> documentadas na indústria';
    texto += '. Depois, você encontrará espaço para as <b>suas anotações</b> — porque escrever com ' +
      'as próprias palavras é o que consolida o aprendizado — e, por fim, <b>exercícios com ' +
      'gabarito comentado</b> para testar sua compreensão. Estude no seu ritmo, volte sempre que ' +
      'precisar e bons estudos!';
    return '<h3>👨‍🏫 Apresentação do Professor</h3><p class="cd-prof-apresentacao">' + texto + '</p>';
  }

  /** Objetivos de aprendizagem derivados do conteúdo realmente presente. */
  function blocoObjetivos(rec) {
    const objs = ['Compreender o conceito e o contexto de <b>' + esc(rec.titulo) + '</b> dentro da Engenharia de Produção.'];
    rec.topicos.slice(0, 2).forEach(t => {
      objs.push('Explicar o conceito de <b>' + esc(t.nome) + '</b> com as próprias palavras.');
    });
    if (rec.formula) objs.push('Interpretar a fórmula/expressão-chave do tema e identificar cada um de seus termos.');
    if (rec.aplicacoes.length) objs.push('Aplicar os conceitos em situações reais de indústria, como <b>' + esc(rec.aplicacoes[0].nome) + '</b>.');
    objs.push('Resolver os exercícios propostos e confrontar as respostas com o gabarito comentado.');
    return '<h3>🎯 Objetivos de Aprendizagem</h3>' +
      '<ul class="cd-objetivos-lista">' + objs.map(o => '<li>' + o + '</li>').join('') + '</ul>';
  }

  /** Referências: as citações ABNT da própria categoria + a fonte digital. */
  function blocoReferencias(rec) {
    let itens = '';
    rec.referencias.forEach(r => {
      itens += '<li><span class="cd-ref-tipo">' + esc(r.tipo) + '</span>' + esc(r.ref) + '</li>';
    });
    itens += '<li>SITE GERETT. <i>' + esc(rec.titulo) + '</i> — Tópicos de Engenharia de Produção. Disponível em: ' +
      '<a href="' + rec.urlFonte + '" target="_blank" rel="noopener">' + rec.urlFonte + '</a>. Acesso em: ' +
      new Date().toLocaleDateString('pt-BR') + '.</li>';

    return '<h3>📚 Referências Consultadas (thegerett.com.br)</h3>' +
      '<ul class="cd-refs-lista">' + itens + '</ul>' +
      '<p class="cd-refs-nota">Todo o conteúdo deste caderno foi extraído exclusivamente do acervo do portal Gerett.</p>';
  }

  /** PARTE 1 · Teoria: definição, conceitos-filhos numerados, fórmula e apps. */
  function blocoTeoria(rec) {
    let html = '<h3>🧠 Parte 1: Conteúdo Teórico Detalhado</h3>';
    html += '<div class="cd-definicao-box"><span class="cd-box-tag">Conceito central</span>' +
            '<p>' + esc(rec.definicao || 'Definição não contemplada na fonte original.') + '</p></div>';

    let n = 1;
    rec.topicos.forEach(t => {
      html += '<h4><small>1.' + (n++) + '</small>' + esc(t.nome) + '</h4>';
      if (t.descricao) html += '<p>' + esc(t.descricao) + '</p>';
    });

    if (rec.formula) {
      html += '<h4><small>1.' + (n++) + '</small>Fórmula / Expressão-Chave</h4>';
      html += '<code class="cd-formula">' + esc(rec.formula) + '</code>';
    }

    if (rec.aplicacoes.length) {
      html += '<h4><small>1.' + n + '</small>Aplicações Práticas na Indústria</h4>';
      rec.aplicacoes.forEach(a => {
        html += '<div class="cd-app-card"><h5>' + esc(a.nome) + '</h5><p>' + esc(a.descricao || '') + '</p></div>';
      });
    }
    return html;
  }

  /** PARTE 2 · Anotações com prompts reflexivos baseados no conteúdo. */
  function blocoAnotacoes(rec) {
    const p1 = rec.definicao
      ? 'Com suas palavras, resuma em 2–3 linhas o que é “' + esc(rec.titulo) + '”.'
      : 'O que mais chamou sua atenção neste tema e por quê?';
    const p2 = rec.topicos[0]
      ? 'Como o conceito de “' + esc(rec.topicos[0].nome) + '” se conecta com a sua experiência profissional ou acadêmica?'
      : 'Quais dúvidas ficaram depois desta leitura? Liste-as para pesquisar depois.';
    const p3 = rec.aplicacoes[0]
      ? 'Cite uma situação da sua rotina (trabalho/estudo) em que “' + esc(rec.aplicacoes[0].nome) + '” poderia ser aplicado.'
      : 'Escreva um exemplo próprio de aplicação deste tema na indústria.';

    return '<h3>📝 Parte 2: Área de Anotações do Aluno</h3>' +
      '<div class="cd-anotacoes-wrap cd-anotacoes">' +
        '<strong>Minhas Anotações:</strong>' +
        '<ul class="cd-prompts-lista"><li>' + p1 + '</li><li>' + p2 + '</li><li>Espaço livre:</li></ul>' +
        '<textarea id="cdNotas" aria-label="Área de anotações pessoais"></textarea>' +
        '<span class="cd-anotacoes-status" id="cdNotasStatus">✓ Salvo automaticamente</span>' +
      '</div>';
  }

  /* ---- PARTE 3 · Exercícios ----------------------------------------------
     4 exercícios determinísticos gerados da fonte:
     1 conceitual · 2 práticos/cenário · 1 estudo de caso industrial.
     Cada um carrega gabarito oculto em <details>. --------------------------*/
  function gerarExercicios(rec) {
    const ex = [];
    const t1 = rec.topicos[0], t2 = rec.topicos[1];
    const a1 = rec.aplicacoes[0], a2 = rec.aplicacoes[1];

    // E1 · Conceitual
    ex.push({
      tipo: 'Questão Conceitual',
      enunciado: t1
        ? 'Explique detalhadamente o conceito de <b>' + esc(t1.nome) + '</b> e qual o seu papel dentro de ' + esc(rec.titulo) + '.'
        : 'Defina <b>' + esc(rec.titulo) + '</b> e explique sua importância para a Engenharia de Produção.',
      gabarito: t1 ? (t1.descricao || 'Não contemplado na fonte.') : rec.definicao,
      ref: t1 ? ('Seção 1.1 deste caderno') : 'Bloco “Conceito central”'
    });

    // E2 · Prática / cenário (aplicação documentada)
    if (a1) {
      ex.push({
        tipo: 'Questão Prática · Cenário',
        enunciado: 'Uma indústria precisa conduzir <b>' + esc(a1.nome) + '</b>. Descreva, de forma estruturada, como esse trabalho deve ser realizado e quais cuidados são necessários.',
        gabarito: CadernoAPI.resumir(a1.descricao, 4),
        ref: 'Aplicação prática: ' + a1.nome
      });
    } else if (t2) {
      ex.push({
        tipo: 'Questão Prática',
        enunciado: 'Descreva como o conceito de <b>' + esc(t2.nome) + '</b> é utilizado na prática dentro de ' + esc(rec.titulo) + '.',
        gabarito: t2.descricao || 'Não contemplado na fonte.',
        ref: 'Seção 1.2 deste caderno'
      });
    }

    // E3 · Prática analítica (fórmula ou segunda aplicação/conceito)
    if (rec.formula) {
      ex.push({
        tipo: 'Questão Prática · Cálculo',
        enunciado: 'Apresente a fórmula/expressão-chave associada a <b>' + esc(rec.titulo) + '</b>, transcrevendo-a, identificando cada um de seus termos e explicando quando deve ser utilizada.',
        gabarito: 'Expressão: ' + rec.formula,
        ref: 'Seção de Fórmula deste caderno'
      });
    } else if (a2 || t2) {
      const b = a2 || t2;
      ex.push({
        tipo: 'Questão Prática · Cenário',
        enunciado: (a2 ? 'Em uma operação industrial, surge a demanda por <b>' + esc(b.nome) + '</b>. Elabore um roteiro de execução dessa atividade.'
                       : 'Compare <b>' + esc(t1.nome) + '</b> e <b>' + esc(t2.nome) + '</b>: pontos em comum, diferenças e como se complementam.'),
        gabarito: CadernoAPI.resumir(b.descricao, 4),
        ref: (a2 ? 'Aplicação prática' : 'Seção 1.2') + ': ' + b.nome
      });
    }

    // E4 · Estudo de caso integrador
    const nomesBase = [t1 && t1.nome, t2 && t2.nome].filter(Boolean).slice(0, 2);
    ex.push({
      tipo: 'Estudo de Caso · Indústria',
      enunciado: 'Uma empresa manufatureira de médio porte busca estruturar <b>' + esc(rec.titulo) + '</b> em sua operação. Como consultor(a), elabore uma proposta introdutória abordando' +
        (nomesBase.length ? ' ao menos os conceitos de <b>' + esc(nomesBase.join('</b> e <b>')) + '</b>' : ' o conceito central do tema') +
        (rec.aplicacoes.length ? ' e indicando duas aplicações práticas viáveis' : '') + '. Justifique cada decisão.',
      gabarito: 'Resposta esperada (síntese da fonte): ' + CadernoAPI.resumir(rec.definicao, 3) +
        (rec.aplicacoes.length ? ' Entre as aplicações possíveis destacam-se: ' + rec.aplicacoes.slice(0, 3).map(a => a.nome).join('; ') + '.' : ''),
      ref: 'Conteúdo completo deste caderno'
    });

    return ex;
  }

  function blocoExercicios(rec) {
    const exs = gerarExercicios(rec);
    let html = '<h3>🛠️ Parte 3: Exercícios Práticos e de Fixação</h3>';
    exs.forEach((e, i) => {
      html += '<div class="cd-exercicio">' +
        '<div class="cd-exercicio-header"><span class="cd-ex-numero">' + (i + 1) + '</span>' +
        '<span class="cd-ex-tipo">' + esc(e.tipo) + '</span></div>' +
        '<p class="enunciado">' + e.enunciado + '</p>' +
        '<details class="cd-gabarito"><summary>Gabarito comentado</summary>' +
        '<div class="cd-gab-corpo"><b>Resolução:</b> ' + esc(e.gabarito) +
        ' <br><small><i>Base: ' + esc(e.ref) + '.</i></small></div>' +
        '</details></div>';
    });
    return html;
  }

  /* ========================================================================
     MÓDULO 3 · EXPORTAÇÃO EM PDF (jsPDF, 100% no navegador)
     Gera um documento de TEXTO com todo o conteúdo do caderno:
     teoria, referências, exercícios com gabarito e anotações do aluno.
     ======================================================================== */

  /** Remove tags HTML dos blocos renderizados para virar texto plano. */
  function paraTexto(html) {
    return String(html || '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|li|h4|div)>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
      .replace(/[ \t]+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  /** Monta o roteiro do documento como lista de blocos tipados. */
  function montarRoteiroPDF(rec, notasAluno) {
    const L = [];
    const push = (tipo, texto) => L.push({ tipo, texto });
    const hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

    // Cabeçalho
    push('h1', 'Caderno Digital de Estudos');
    push('sub', rec.titulo + ' · ' + rec.categoria);
    push('sub2', 'Gerett — Biblioteca Organizacional · ' + hoje);

    // Apresentação
    push('h2', 'Apresentação do Professor');
    push('p', paraTexto(blocoApresentacao(rec)));

    // Objetivos
    push('h2', 'Objetivos de Aprendizagem');
    blocoObjetivos(rec).match(/<li>([\s\S]*?)<\/li>/g).forEach(li => {
      push('item', '- ' + paraTexto(li));
    });

    // Referências
    push('h2', 'Referências Consultadas (thegerett.com.br)');
    rec.referencias.forEach(r => push('item', '- [' + r.tipo + '] ' + r.ref));
    push('item', '- [Site] GERETT. ' + rec.titulo + ' — Tópicos de Engenharia de Produção. Disponível em: ' + rec.urlFonte + '. Acesso em: ' + new Date().toLocaleDateString('pt-BR') + '.');

    // Parte 1 · Teoria
    push('h1', 'Parte 1: Conteúdo Teórico Detalhado');
    push('h3', 'Conceito central');
    push('quote', rec.definicao || 'Não contemplado na fonte original.');
    let n = 1;
    rec.topicos.forEach(t => {
      push('h3', '1.' + (n++) + ' ' + t.nome);
      if (t.descricao) push('p', t.descricao);
    });
    if (rec.formula) {
      push('h3', '1.' + (n++) + ' Fórmula / Expressão-Chave');
      push('code', rec.formula);
    }
    if (rec.aplicacoes.length) {
      push('h3', '1.' + (n++) + ' Aplicações Práticas na Indústria');
      rec.aplicacoes.forEach(a => {
        push('h4b', a.nome);
        if (a.descricao) push('p', a.descricao);
      });
    }

    // Parte 2 · Anotações
    push('h1', 'Parte 2: Área de Anotações do Aluno');
    push('p', blocoAnotacoes(rec).match(/<ul[\s\S]*?<\/ul>/)[0].replace(/<[^>]+>/g, '\n').replace(/\n{2,}/g, '\n').trim());
    if (notasAluno && notasAluno.trim()) {
      push('h4b', 'Registro do aluno:');
      push('quote', notasAluno.trim());
    }

    // Parte 3 · Exercícios
    push('h1', 'Parte 3: Exercícios Práticos e de Fixação');
    gerarExercicios(rec).forEach((e, i) => {
      push('h3', 'Exercício ' + (i + 1) + ' — ' + e.tipo);
      push('p', paraTexto(e.enunciado));
    });
    push('h2', 'Gabarito e Resoluções');
    gerarExercicios(rec).forEach((e, i) => {
      push('item', 'Exercício ' + (i + 1) + ': ' + e.gabarito);
      push('sub2', 'Base: ' + e.ref);
    });

    return L;
  }

  function slugify(txt) {
    return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60);
  }

  /** Renderiza o roteiro num A4 paginado e dispara o download. */
  function baixarPDF() {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert('O gerador de PDF não carregou. Verifique a conexão ou use o botão Imprimir/PDF.');
      return;
    }
    let notas = '';
    try { notas = localStorage.getItem(CHAVE_NOTAS + CadernoAPI.normalizar(registroAtual.titulo)) || ''; } catch (e) {}

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const W = doc.internal.pageSize.getWidth();
    const H = doc.internal.pageSize.getHeight();
    const M = 54;                 // margem
    const COR_TITULO = '#0055FF'; // azul de engenharia da marca
    let y = M;

    const garanteEspaco = alt => {
      if (y + alt > H - M - 30) { doc.addPage(); y = M; }
    };

    function escreve(texto, o) {
      o = o || {};
      const fs = o.fs || 10.5;
      const lh = fs * 1.5;
      doc.setFont(o.font || 'helvetica', o.style || 'normal');
      doc.setFontSize(fs);
      doc.setTextColor(o.cor || '#222222');
      doc.splitTextToSize(texto, W - 2 * M).forEach(linha => {
        garanteEspaco(lh);
        doc.text(linha, M, y);
        y += lh;
      });
      y += (o.gap != null ? o.gap : 6);
    }

    montarRoteiroPDF(registroAtual, notas).forEach(b => {
      switch (b.tipo) {
        case 'h1':   escreve(b.texto.toUpperCase(), { fs: 15, style: 'bold', cor: COR_TITULO, gap: 8 }); break;
        case 'h2':   escreve(b.texto.toUpperCase(), { fs: 12, style: 'bold', gap: 7 }); break;
        case 'h3':   escreve(b.texto, { fs: 11, style: 'bold', cor: '#333333', gap: 5 }); break;
        case 'h4b':  escreve(b.texto, { fs: 10.5, style: 'bolditalic', gap: 4 }); break;
        case 'sub':  escreve(b.texto, { fs: 13, style: 'bold', cor: '#444444', gap: 4 }); break;
        case 'sub2': escreve(b.texto, { fs: 9, cor: '#777777', gap: 10 }); break;
        case 'item': escreve(b.texto, { gap: 3 }); break;
        case 'code': escreve(b.texto, { font: 'courier', fs: 9.5, cor: '#0055FF', gap: 8 }); break;
        case 'quote':
          // Bloco citado: barra lateral azul + texto levemente recuado
          garanteEspaco(20);
          doc.setFillColor(0, 85, 255);
          doc.rect(M, y - 4, 3, 14, 'F');
          doc.setTextColor('#444444');
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(10.5);
          doc.splitTextToSize(b.texto, W - 2 * M - 14).forEach(linha => {
            garanteEspaco(16);
            doc.text(linha, M + 14, y);
            y += 15.5;
          });
          y += 8;
          break;
      }
    });

    // Rodapé em todas as páginas
    const total = doc.internal.getNumberOfPages();
    for (let i = 1; i <= total; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor('#999999');
      doc.text('Gerett · thegerett.com.br — Caderno Digital de Estudos', M, H - 26);
      doc.text(i + ' / ' + total, W - M, H - 26, { align: 'right' });
    }

    doc.save('caderno-' + slugify(temaAtual) + '.pdf');
  }

  /* ========================================================================
     MÓDULO 4 · INTERFACE
     ======================================================================== */
  const $ = s => document.querySelector(s);
  const el = {
    setup: $('#cdSetup'), artigo: $('#cdArtigo'),
    select: $('#cdTopicSelect'), startBtn: $('#cdStartBtn'),
    chip: $('#cdChipCategoria'), titulo: $('#cdTitulo'), data: $('#cdData'),
    secApres: $('#cdApresentacao'), secObjs: $('#cdObjetivos'),
    secRefs: $('#cdReferencias'), secTeoria: $('#cdTeoria'),
    secAnots: $('#cdAnotacoes'), secExs: $('#cdExercicios'),
    btnVoltar: $('#cdBtnVoltar'), btnPdf: $('#cdBtnPdf'), btnPrint: $('#cdBtnImprimir')
  };

  let temaAtual = '';
  let registroAtual = null;

  function popularSelect(preSel) {
    const S = window.SITE_DATA;
    if (!S) return;
    const porCategoria = {};
    S.categorias.forEach(cat => {
      (cat.subtopicos || []).forEach(sub => {
        (porCategoria[cat.nome] = porCategoria[cat.nome] || []).push(sub.titulo);
      });
    });
    el.select.innerHTML = Object.entries(porCategoria).map(([cat, ts]) =>
      '<optgroup label="' + cat + '">' +
      ts.map(t => '<option value="' + t.replace(/"/g, '&quot;') + '">' + t + '</option>').join('') +
      '</optgroup>').join('');
    if (preSel) {
      const alvo = CadernoAPI.normalizar(preSel);
      const opt = [...el.select.options].find(o => CadernoAPI.normalizar(o.value) === alvo);
      if (opt) opt.selected = true;
    }
  }

  /** Persistência das anotações (por tema) com indicador de salvamento. */
  function ligarNotas(rec) {
    const ta = document.getElementById('cdNotas');
    const st = document.getElementById('cdNotasStatus');
    if (!ta || !st) return;
    let timer = null;
    try { ta.value = localStorage.getItem(CHAVE_NOTAS + CadernoAPI.normalizar(rec.titulo)) || ''; } catch (e) {}
    ta.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        try {
          localStorage.setItem(CHAVE_NOTAS + CadernoAPI.normalizar(rec.titulo), ta.value);
          st.classList.add('visivel');
          setTimeout(() => st.classList.remove('visivel'), 1800);
        } catch (e) {}
      }, 600);
    });
  }

  async function gerarCaderno(titulo) {
    el.artigo.hidden = true;
    el.setup.hidden = true;
    const skel = document.createElement('div');
    skel.className = 'cd-loading-doc';
    el.artigo.parentNode.insertBefore(skel, el.artigo);

    try {
      const rec = await CadernoAPI.buscarPorTitulo(titulo);
      registroAtual = rec;
      temaAtual = titulo;

      el.chip.textContent = rec.categoria;
      el.titulo.textContent = rec.titulo;
      el.data.textContent = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
      el.secApres.innerHTML = blocoApresentacao(rec);
      el.secObjs.innerHTML = blocoObjetivos(rec);
      el.secRefs.innerHTML = blocoReferencias(rec);
      el.secTeoria.innerHTML = blocoTeoria(rec);
      el.secAnots.innerHTML = blocoAnotacoes(rec);
      el.secExs.innerHTML = blocoExercicios(rec);

      skel.remove();
      el.artigo.hidden = false;
      ligarNotas(rec);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      try { localStorage.setItem(CHAVE_ULTIMO, titulo); } catch (e) {}
      history.replaceState(null, '', '?topico=' + encodeURIComponent(titulo));
    } catch (err) {
      skel.remove();
      alert('Não encontramos conteúdo suficiente para gerar o caderno deste tema.');
      el.setup.hidden = false;
    }
  }

  /* ========================================================================
     EVENTOS
     ======================================================================== */
  el.startBtn.addEventListener('click', () => gerarCaderno(el.select.value));
  el.select.addEventListener('keydown', e => { if (e.key === 'Enter') gerarCaderno(el.select.value); });

  el.btnVoltar.addEventListener('click', () => {
    history.replaceState(null, '', location.pathname);
    el.artigo.hidden = true;
    el.setup.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  el.btnPdf.addEventListener('click', baixarPDF);

  el.btnPrint.addEventListener('click', () => window.print());

  /* ========================================================================
     BOOTSTRAP — deep-link ?topico= ou último tema estudado
     ======================================================================== */
  (function bootstrap() {
    const params = new URLSearchParams(location.search);
    const daURL = params.get('topico') || params.get('titulo');
    let ultimo = null;
    try { ultimo = localStorage.getItem(CHAVE_ULTIMO); } catch (e) {}
    popularSelect(daURL || ultimo);
    if (daURL) gerarCaderno(daURL);
  })();

})();
