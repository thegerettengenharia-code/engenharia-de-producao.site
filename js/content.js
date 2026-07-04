const TOPICS_DATA=[
  {
    id:1,
    num:"01",
    title:"Engenharia de Produção",
    tag:"Fundamentos Gerais",
    desc:"Fundamentos clássicos da engenharia de produção: evolução histórica, sistemas produtivos, PCP, estoques, custos, logística e muito mais.",
    keywords:["Taylorismo","Fordismo","STP","PCP","MRP","OEE","TOC","Layout"],
    blocks:[
      {
        title:"Evolução Histórica da Produção Industrial",
        icon:"history",
        content:`<p><strong>1ª Revolução Industrial</strong> (final do séc. XVIII, Inglaterra): máquina a vapor, mecanização, deslocamento da manufatura artesanal para as fábricas. <strong>2ª Revolução</strong> (séc. XIX-XX): eletricidade, aço em larga escala, linhas de produção contínua. <strong>3ª Revolução</strong> (meados do séc. XX): eletrônica, automação, computadores. <strong>4ª Revolução</strong> (atual): Indústria 4.0, IoT, IA, sistemas ciber-físicos.</p>
        <div class="detail-highlight"><strong>Taylorismo (1911):</strong> Frederick Taylor — Administração Científica. Estudo de tempos e movimentos, separação planejamento/execução, remuneração por produtividade. Críticas: redução do trabalhador a "peça de engrenagem".</div>
        <p><strong>Fordismo (1913):</strong> Henry Ford — linha de montagem móvel (esteira), padronização extrema, peças intercambiáveis, verticalização, produção em massa. Salário de US$ 5/dia (dobro da média), criando o consumidor dos próprios carros.</p>
        <p><strong>Sistema Toyota de Produção (STP):</strong> Taiichi Ohno e Eiji Toyoda (Japão pós-2ª Guerra). Produção enxuta: pequenos lotes, produção puxada, eliminação de desperdícios, troca rápida de ferramenta (SMED). Origem do <strong>Lean Manufacturing</strong> (termo cunhado pelo MIT em 1990).</p>`
      },
      {
        title:"Tipos de Sistemas Produtivos",
        icon:"settings",
        content:`<ul>
          <li><strong>Produção contínua:</strong> fluxo ininterrupto, alto volume, baixíssima variedade (refinarias, siderúrgicas, papel e celulose, cimento). Altíssimo investimento em capital fixo; paradas custam caríssimo.</li>
          <li><strong>Produção intermitente (lotes/bateladas):</strong> fabricação de lotes de produtos diferentes na mesma estrutura fabril, com setups entre eles. É o cenário mais comum na indústria brasileira de transformação.</li>
          <li><strong>Produção por projeto:</strong> produto único, não repetitivo, prazo e escopo definidos (construção civil, naval, equipamentos sob encomenda). Usa PERT/CPM, WBS.</li>
          <li><strong>Produção em massa:</strong> grande volume, produto padronizado — modelo fordista clássico.</li>
          <li><strong>Customização em massa:</strong> variabilidade com eficiência de massa (ex.: configuração de automóveis), viabilizada por manufatura flexível e Indústria 4.0.</li>
        </ul>`
      },
      {
        title:"Arranjo Físico (Layout Industrial)",
        icon:"dashboard",
        content:`<ul>
          <li><strong>Por produto (em linha):</strong> postos na sequência exata das operações. Alta eficiência, baixa flexibilidade. Típico de produção em massa/contínua.</li>
          <li><strong>Por processo (funcional):</strong> máquinas do mesmo tipo agrupadas. Alta flexibilidade, mas maior movimentação de material e WIP.</li>
          <li><strong>Celular:</strong> tecnologia de grupo — máquinas de tipos diferentes agrupadas em célula dedicada a uma família de peças. Buscado em transformações Lean.</li>
          <li><strong>Posicional (fixo):</strong> o produto permanece parado; recursos se deslocam até ele (navios, aviões, pontes, grandes vasos de pressão).</li>
          <li><strong>Combinado/híbrido:</strong> maioria das fábricas reais mistura arranjos.</li>
        </ul>`
      },
      {
        title:"PCP — Planejamento e Controle da Produção",
        icon:"schema",
        content:`<p>O PCP é o "cérebro" da fábrica — decide o quê, quanto, quando e onde produzir.</p>
        <ul>
          <li><strong>Previsão de demanda:</strong> qualitativa (Delphi, pesquisa de mercado) ou quantitativa (médias móveis, suavização exponencial, decomposição tendência/sazonalidade).</li>
          <li><strong>Planejamento agregado:</strong> níveis de produção, mão de obra e estoque para os próximos meses. Estratégias: nivelamento, acompanhamento da demanda, ou mista.</li>
          <li><strong>Plano Mestre de Produção (MPS):</strong> desdobra o planejamento agregado em quantidades por produto/período (semanal).</li>
          <li><strong>Sequenciamento:</strong> ordem das ordens nos recursos — FIFO, SPT (menor tempo de processamento), EDD (data de entrega).</li>
          <li><strong>MRP:</strong> a partir do MPS, BOM e estoques, calcula quanto/comprar cada componente.</li>
          <li><strong>MRP II:</strong> incorpora capacidade produtiva e recursos financeiros.</li>
          <li><strong>ERP:</strong> sistema integrado (SAP, TOTVS, Oracle) conectando PCP, compras, financeiro, vendas, qualidade e RH.</li>
        </ul>`
      },
      {
        title:"Gestão de Estoques",
        icon:"inventory",
        content:`<ul>
          <li><strong>Curva ABC:</strong> classifica itens por valor de consumo anual. Classe A (≈20% itens, ≈80% valor) — controle rigoroso; Classe C — muitos itens de baixo valor.</li>
          <li><strong>Lote Econômico de Compra (LEC/EOQ):</strong> Q* = √(2DS/H) — minimiza custo de pedido + custo de manutenção.</li>
          <li><strong>Ponto de pedido (ROP):</strong> nível que dispara novo pedido, considerando consumo durante lead time.</li>
          <li><strong>Estoque de segurança:</strong> colchão contra variabilidade de demanda ou atraso do fornecedor.</li>
          <li><strong>Giro de estoque:</strong> CPV ÷ estoque médio — mostra quantas vezes o estoque "virou" no período.</li>
        </ul>`
      },
      {
        title:"Estudo de Tempos e Métodos",
        icon:"timer",
        content:`<ul>
          <li><strong>Cronoanálise:</strong> medição direta com cronômetro em múltiplos ciclos.</li>
          <li><strong>Tempo normal:</strong> tempo cronometrado ajustado pelo ritmo (velocity rating).</li>
          <li><strong>Tempo padrão:</strong> tempo normal + tolerâncias (pessoais, fadiga, esperas) — usado no PCP e capacidade.</li>
          <li><strong>Métodos:</strong> contínua (cronômetro sem parar), snap-back (volta a zero), amostragem do trabalho (work sampling).</li>
        </ul>`
      },
      {
        title:"Balanceamento de Linha & Teoria das Restrições",
        icon:"balance",
        content:`<p><strong>Balanceamento:</strong> distribuir tarefas entre postos sem ultrapassar o takt time, minimizando ociosidade. Eficiência = Σ tempos ÷ (nº postos × tempo do posto mais lento).</p>
        <p><strong>TOC (Goldratt — "A Meta"):</strong> todo sistema produtivo tem pelo menos um gargalo. 5 passos: (1) identificar a restrição; (2) explorá-la; (3) subordinar tudo a ela; (4) elevar a restrição; (5) voltar ao passo 1.</p>`
      },
      {
        title:"Produtividade e OEE",
        icon:"trending",
        content:`<p><strong>OEE = Disponibilidade × Performance × Qualidade</strong></p>
        <ul>
          <li><strong>Disponibilidade:</strong> tempo produzindo ÷ tempo planejado.</li>
          <li><strong>Performance:</strong> velocidade real ÷ velocidade ideal.</li>
          <li><strong>Qualidade:</strong> peças boas ÷ peças totais.</li>
        </ul>
        <p>OEE "classe mundial" ≈ 85%. A maioria das fábricas opera abaixo disso.</p>`
      },
      {
        title:"Custos Industriais",
        icon:"accounting",
        content:`<ul>
          <li><strong>Fixos × Variáveis:</strong> fixos não variam com volume (aluguel, depreciação); variáveis sim (matéria-prima, energia de processo).</li>
          <li><strong>Diretos × Indiretos:</strong> diretos apropriados diretamente ao produto; indiretos precisam de rateio.</li>
          <li><strong>Custeio por absorção:</strong> rateia todos os CIF aos produtos — aceito pela legislação fiscal brasileira.</li>
          <li><strong>Custeio ABC:</strong> aloca custos com base nas atividades consumidas — revela custos reais de produtos complexos.</li>
        </ul>`
      },
      {
        title:"Engenharia Econômica",
        icon:"finance",
        content:`<ul>
          <li><strong>VPL (Valor Presente Líquido):</strong> traz fluxos futuros a valor presente. VPL > 0 → projeto agrega valor.</li>
          <li><strong>TIR (Taxa Interna de Retorno):</strong> taxa que zera o VPL. Se TIR > TMA, projeto é atrativo.</li>
          <li><strong>Payback:</strong> tempo para recuperar o investimento. Simples ou descontado (considera valor do dinheiro no tempo).</li>
        </ul>`
      },
      {
        title:"Gestão de Projetos & Logística",
        icon:"hub",
        content:`<p><strong>PMBOK:</strong> 10 áreas de conhecimento e 5 grupos de processos. <strong>EAP/WBS:</strong> decomposição do projeto em pacotes de trabalho. <strong>PERT/CPM:</strong> caminho crítico e folgas.</p>
        <p><strong>Supply Chain:</strong> integração fornecedores → fabricação → distribuição → cliente. <strong>Efeito chicote (bullwhip):</strong> pequenas variações na demanda se amplificam na cadeia.</p>
        <p><strong>WMS:</strong> sistemas de gestão de armazéns (endereçamento, picking, expedição).</p>`
      },
      {
        title:"Pesquisa Operacional & Simulação",
        icon:"compute",
        content:`<ul>
          <li><strong>Programação linear:</strong> otimiza função objetivo sujeita a restrições (método simplex).</li>
          <li><strong>Teoria das filas:</strong> modelos como M/M/1 para dimensionar recursos.</li>
          <li><strong>Simulação:</strong> Arena, Promodel, FlexSim — modelos virtuais para testar cenários sem interromper a operação real.</li>
        </ul>`
      },
      {
        title:"Gestão da Manutenção & Confiabilidade",
        icon:"engineering",
        content:`<ul>
          <li><strong>Corretiva:</strong> conserta após a falha — mais barata no curto prazo, mas gera paradas não planejadas.</li>
          <li><strong>Preventiva:</strong> baseada em tempo/uso (intervalos fixos).</li>
          <li><strong>Preditiva:</strong> baseada na condição real (análise de vibração, termografia, análise de óleo, ultrassom).</li>
          <li><strong>TPM (8 pilares):</strong> manutenção autônoma, planejada, da qualidade, melhoria específica, gestão inicial, treinamento, segurança, TPM administrativo.</li>
          <li><strong>MTBF</strong> (tempo médio entre falhas) e <strong>MTTR</strong> (tempo médio para reparo). Disponibilidade = MTBF ÷ (MTBF + MTTR).</li>
        </ul>`
      },
      {
        title:"Sustentabilidade Industrial",
        icon:"eco",
        content:`<p><strong>Produção Mais Limpa (P+L):</strong> reduzir resíduos e consumo na origem, não só no "fim do tubo".</p>
        <p><strong>Economia circular:</strong> manter materiais em uso pelo maior tempo possível (reuso, remanufatura, reciclagem) — oposto do modelo linear "extrair-produzir-descartar".</p>
        <p>Conecta-se com ISO 14001 e exigências ESG.</p>`
      }
    ]
  },
  {
    id:2,
    num:"02",
    title:"Lean Manufacturing",
    tag:"Produção Enxuta",
    desc:"Sistema Toyota de Produção, eliminação de desperdícios, fluxo contínuo, kanban, kaizen, 5S, SMED, gestão visual e muito mais.",
    keywords:["STP","Muda","Kaizen","5S","Kanban","VSM","SMED","JIT","Poka-yoke","A3"],
    blocks:[
      {
        title:"Filosofia e Pilares do STP",
        icon:"psychology",
        content:`<p>O <strong>Sistema Toyota de Produção</strong> (STP) foi desenvolvido por Taiichi Ohno e Eiji Toyoda no Japão pós-2ª Guerra. Baseia-se em dois pilares fundamentais:</p>
        <ul>
          <li><strong>JIT (Just in Time):</strong> produzir apenas o necessário, no momento necessário, na quantidade necessária.</li>
          <li><strong>Jidoka (Autonomação):</strong> máquinas com inteligência para parar quando detectam anormalidades, evitando defeitos em massa.</li>
        </ul>
        <p>O STP busca a eliminação total de desperdícios (Muda) e o respeito pelas pessoas.</p>`
      },
      {
        title:"Os 8 Desperdícios (Muda)",
        icon:"warning",
        content:`<ol>
          <li><strong>Superprodução:</strong> produzir mais do que o necessário — o pior desperdício, pois esconde todos os outros.</li>
          <li><strong>Espera:</strong> operários ou máquinas parados aguardando material ou informação.</li>
          <li><strong>Transporte:</strong> movimentação desnecessária de materiais entre processos.</li>
          <li><strong>Processamento excessivo:</strong> fazer mais operações do que o necessário (ex.: acabamento onde não é visível).</li>
          <li><strong>Estoque:</strong> excesso de matéria-prima, WIP ou produto acabado — capital parado.</li>
          <li><strong>Movimento:</strong> deslocamentos desnecessários de pessoas (buscar ferramentas, andar longas distâncias).</li>
          <li><strong>Defeitos:</strong> retrabalho, sucata, inspeção extra.</li>
          <li><strong>Potencial humano subutilizado:</strong> não aproveitar ideias e criatividade dos colaboradores (adicionado depois dos 7 originais).</li>
        </ol>
        <div class="detail-highlight"><strong>Muda, Mura, Muri:</strong> Muda = desperdício; Mura = variação/desnivelamento; Muri = sobrecarga (pessoas ou equipamentos acima da capacidade).</div>`
      },
      {
        title:"VSM — Mapeamento do Fluxo de Valor",
        icon:"map",
        content:`<p>O <strong>Value Stream Mapping</strong> (VSM) é uma ferramenta visual que mapeia todas as etapas (que agregam e não agregam valor) desde a matéria-prima até o cliente final.</p>
        <ul>
          <li><strong>Estado atual:</strong> como o processo funciona hoje, com tempos de ciclo, estoques entre etapas, lead time total.</li>
          <li><strong>Estado futuro:</strong> como deveria funcionar após eliminar desperdícios — fluxo contínuo, produção puxada.</li>
          <li>Indicadores-chave: <strong>Takt time</strong> (ritmo da demanda), <strong>Tempo de ciclo</strong>, <strong>Lead time</strong> total, <strong>% de valor agregado</strong>.</li>
        </ul>`
      },
      {
        title:"Kanban e Just in Time",
        icon:"assignment",
        content:`<p><strong>Kanban</strong> (cartão/sinal) é um sistema de informação visual que controla o fluxo de materiais na produção puxada.</p>
        <ul>
          <li><strong>Kanban de produção:</strong> autoriza o processo anterior a produzir.</li>
          <li><strong>Kanban de movimentação/retirada:</strong> autoriza a retirada de peças do supermercado.</li>
          <li><strong>Kanban eletrônico (e-kanban):</strong> versão digital integrada ao ERP.</li>
        </ul>
        <p><strong>Produção puxada × empurrada:</strong> na produção empurrada (MRP tradicional), programa-se e empurra-se a produção. Na puxada, o processo cliente "puxa" do processo anterior conforme necessário.</p>
        <p><strong>Takt time = Tempo disponível ÷ Demanda do cliente.</strong> Ex.: 480 min/dia ÷ 240 peças/dia = 2 min/peça.</p>`
      },
      {
        title:"Heijunka — Nivelamento da Produção",
        icon:"equalizer",
        content:`<p><strong>Heijunka</strong> é o nivelamento da produção em volume e variedade para produzir suavemente ao longo do tempo, evitando picos e vales que geram desperdício.</p>
        <p>Exemplo prático: em vez de produzir 100 unid do produto A no mês e 100 do B no mês seguinte, produz-se alternadamente em pequenos lotes (5 de A, 5 de B, 5 de A...) nivelando a carga.</p>
        <p>O nivelamento é viabilizado pelo SMED (troca rápida de ferramenta), que reduz o custo das mudanças entre produtos.</p>`
      },
      {
        title:"Kaizen — Melhoria Contínua",
        icon:"trending_up",
        content:`<p><strong>Kaizen</strong> significa "mudança para melhor" (Kai=mudança, Zen=melhor). Filosofia de melhoria contínua envolvendo todos os níveis da organização.</p>
        <p><strong>Evento Kaizen (Kaizen Blitz):</strong> esforço intensivo e focado de uma equipe multidisciplinar durante 3-5 dias para melhorar um processo específico.</p>
        <p>Kaizen deve ser <strong>diário</strong>, não apenas em eventos esporádicos. Pequenas melhorias incrementais somam grandes resultados ao longo do tempo.</p>`
      },
      {
        title:"5S",
        icon:"cleaning",
        content:`<ol>
          <li><strong>Seiri (Utilização/Senso de Descarte):</strong> separar o necessário do desnecessário, eliminar o que não é usado.</li>
          <li><strong>Seiton (Ordenação):</strong> "um lugar para cada coisa, cada coisa em seu lugar". Organizar de forma que qualquer pessoa encontre facilmente.</li>
          <li><strong>Seiso (Limpeza):</strong> limpar o local de trabalho. A limpeza é também inspeção.</li>
          <li><strong>Seiketsu (Padronização):</strong> criar padrões para manter as práticas anteriores.</li>
          <li><strong>Shitsuke (Disciplina):</strong> cultivar o hábito de seguir os padrões, autodisciplina.</li>
        </ol>`
      },
      {
        title:"Poka-yoke e Jidoka",
        icon:"gpp_good",
        content:`<p><strong>Poka-yoke</strong> (à prova de erro): dispositivos simples que evitam que erros ocorram ou os detectam imediatamente, antes de se tornarem defeitos.</p>
        <p>Exemplos: guia assimétrica que só permite encaixar a peça na posição correta; sensor que para a máquina se a peça não estiver posicionada.</p>
        <p><strong>Jidoka (autonomação):</strong> máquinas com inteligência para detectar anormalidades e parar automaticamente. <strong>Andon:</strong> sistema de sinalização visual/sonora que alerta quando há um problema.</p>`
      },
      {
        title:"SMED — Troca Rápida de Ferramenta",
        icon:"speed",
        content:`<p><strong>SMED (Single Minute Exchange of Die):</strong> metodologia desenvolvida por Shigeo Shingo na Toyota para reduzir o tempo de setup (troca de ferramenta) a menos de 10 minutos (single minute).</p>
        <p><strong>Etapas:</strong></p>
        <ol>
          <li><strong>Separar setup interno do externo:</strong> interno = só pode ser feito com máquina parada; externo = pode ser feito com máquina rodando.</li>
          <li><strong>Converter interno em externo:</strong> preparar ferramentas, pré-aquecer moldes.</li>
          <li><strong>Simplificar e padronizar:</strong> sistemas de fixação rápida, pinos de localização, ajustes padronizados.</li>
        </ol>`
      },
      {
        title:"Gestão Visual e Standard Work",
        icon:"visibility",
        content:`<p><strong>Gestão visual:</strong> informações expostas de forma clara e acessível — quadros de produção, indicadores OEE, problemas do dia, metas. Qualquer pessoa deve conseguir entender a situação da área em 30 segundos.</p>
        <p><strong>Standard Work (Trabalho Padronizado):</strong> documentação da melhor maneira conhecida de executar uma operação — sequência, tempo, estoque padrão. A base para o kaizen (não se pode melhorar um processo que não é padronizado).</p>
        <p><strong>A3 Thinking:</strong> metodologia de resolução de problemas em uma única folha A3: contexto, estado atual, análise, contra medidas, plano de ação, acompanhamento.</p>`
      }
    ]
  },
  {
    id:3,
    num:"03",
    title:"Qualidade Total (TQM)",
    tag:"Gestão da Qualidade",
    desc:"Evolução da qualidade, gurus, PDCA, CEP, Six Sigma, Lean Six Sigma, SGQ, auditorias, APQP, PPAP e muito mais.",
    keywords:["Deming","PDCA","CEP","Six Sigma","DMAIC","SGQ","APQP","NPS"],
    blocks:[
      {
        title:"Evolução Histórica da Qualidade",
        icon:"history",
        content:`<p>A qualidade evoluiu em <strong>4 eras</strong>:</p>
        <ol>
          <li><strong>Inspeção (séc. XIX):</strong> verificação do produto final, separação de defeituosos.</li>
          <li><strong>Controle Estatístico (déc. 1930-40):</strong> Shewhart introduz as cartas de controle. Amostragem, não inspeção 100%.</li>
          <li><strong>Garantia da Qualidade (déc. 1950-70):</strong> sistemas da qualidade, prevenção, custos da qualidade.</li>
          <li><strong>Gestão da Qualidade Total (TQM — déc. 1980+):</strong> qualidade como responsabilidade de todos, foco no cliente, melhoria contínua.</li>
        </ol>`
      },
      {
        title:"Gurus da Qualidade",
        icon:"school",
        content:`<ul>
          <li><strong>Deming:</strong> 14 pontos, PDCA (Shewhart/Deming), ênfase em estatística e redução de variação. "Qualidade é responsabilidade da alta direção."</li>
          <li><strong>Juran:</strong> Trilogia da Qualidade (Planejamento, Controle, Melhoria). Custos da qualidade. "Qualidade é adequação ao uso."</li>
          <li><strong>Crosby:</strong> "Zero defeito" como padrão de performance. Prevenção, não inspeção. "Qualidade é conformidade aos requisitos."</li>
          <li><strong>Ishikawa:</strong> Diagrama espinha de peixe, círculos da qualidade, ênfase em ferramentas simples acessíveis a todos.</li>
          <li><strong>Feigenbaum:</strong> Qualidade como responsabilidade de todos os departamentos.</li>
          <li><strong>Taguchi:</strong> Função perda da qualidade, projeto robusto (design of experiments).</li>
        </ul>`
      },
      {
        title:"Ciclo PDCA",
        icon:"loop",
        content:`<p><strong>PDCA</strong> — Plan (planejar), Do (fazer), Check (verificar), Act (agir corretivamente).</p>
        <ul>
          <li><strong>Plan:</strong> definir metas e métodos (análise de dados, 5W2H).</li>
          <li><strong>Do:</strong> executar conforme o plano, treinar.</li>
          <li><strong>Check:</strong> verificar resultados em relação às metas.</li>
          <li><strong>Act:</strong> padronizar o que deu certo; agir sobre desvios (novo ciclo).</li>
        </ul>
        <p><strong>PDSA</strong> (Study em vez de Check — Deming) e <strong>SDCA</strong> (Standardize → Do → Check → Act) — usado para manter padrões antes de melhorá-los com PDCA.</p>`
      },
      {
        title:"CEF/SPC — Controle Estatístico do Processo",
        icon:"show_chart",
        content:`<p><strong>Cartas de controle de Shewhart:</strong> monitoram a variação do processo ao longo do tempo. Limite Superior de Controle (LSC), Média, Limite Inferior de Controle (LIC).</p>
        <ul>
          <li><strong>Variação comum (causas comuns):</strong> inerente ao processo — só muda com melhoria do sistema.</li>
          <li><strong>Variação especial (causas especiais):</strong> eventos atípicos — devem ser identificadas e eliminadas.</li>
          <li>Cartas para variáveis: X-barra & R (média e amplitude), X-barra & S (desvio padrão).</li>
          <li>Cartas para atributos: p (proporção de defeitos), np (número de defeitos), c, u.</li>
        </ul>`
      },
      {
        title:"Capabilidade de Processo",
        icon:"speed",
        content:`<ul>
          <li><strong>Cp:</strong> Índice de Capabilidade Potencial — Cp = (LSE - LIE) ÷ 6σ. Mede se o processo é capaz de atender às especificações.</li>
          <li><strong>Cpk:</strong> Índice de Capabilidade Real — considera também a centralização do processo. Cpk = min[(LSE - μ)/3σ, (μ - LIE)/3σ].</li>
          <li><strong>Pp, Ppk:</strong> mesma fórmula, mas usando desvio padrão de longo prazo (amostras grandes).</li>
          <li>Valores: Cp/Cpk ≥ 1,33 → processo capaz; ≥ 1,67 → excelente.</li>
        </ul>`
      },
      {
        title:"Six Sigma",
        icon:"grading",
        content:`<p><strong>Six Sigma</strong> (Motorola, 1986): metodologia para reduzir defeitos a 3,4 DPMO (defeitos por milhão de oportunidades).</p>
        <p><strong>DMAIC:</strong> Define (definir), Measure (medir), Analyze (analisar), Improve (melhorar), Control (controlar) — para processos existentes.</p>
        <p><strong>DMADV:</strong> Define, Measure, Analyze, Design, Verify — para novos processos/produtos (DFSS).</p>
        <p><strong>Níveis:</strong> Yellow Belt (conceitos básicos), Green Belt (projetos menores/locais), Black Belt (projetos complexos, full-time), Master Black Belt (treinador/mentor).</p>
        <div class="detail-highlight"><strong>Lean Six Sigma:</strong> combina a eliminação de desperdícios do Lean com a redução de variação do Six Sigma.</div>`
      },
      {
        title:"SGQ — Sistema de Gestão da Qualidade",
        icon:"verified",
        content:`<p>Estrutura organizacional, responsabilidades, processos e recursos para implementar a gestão da qualidade.</p>
        <ul>
          <li><strong>Manual da Qualidade:</strong> documento mestre que descreve o SGQ, escopo, política, procedimentos.</li>
          <li><strong>Não conformidade:</strong> não atendimento a um requisito.</li>
          <li><strong>Ação corretiva:</strong> elimina a causa de uma não conformidade para evitar recorrência.</li>
          <li><strong>Ação preventiva:</strong> elimina a causa de uma potencial não conformidade.</li>
          <li><strong>Auditorias:</strong> interna (1ª parte — pela própria organização), externa (2ª parte — cliente/fornecedor, 3ª parte — certificadora).</li>
        </ul>`
      },
      {
        title:"APQP e PPAP",
        icon:"planner",
        content:`<p><strong>APQP (Advanced Product Quality Planning):</strong> estrutura estruturada para planejamento da qualidade de novos produtos (automotivo). 5 fases: Planejamento, Projeto do Produto, Projeto do Processo, Validação, Avaliação.</p>
        <p><strong>PPAP (Production Part Approval Process):</strong> processo de homologação de peças na indústria automotiva. 18 elementos (desenho, DFMEA, PFMEA, MSA, capabilidade, etc.). Níveis de submissão 1 a 5.</p>
        <p><strong>VOC (Voz do Cliente):</strong> captura de necessidades do cliente por pesquisas, entrevistas, reclamações. <strong>NPS (Net Promoter Score):</strong> métrica de lealdade (promotores × detratores).</p>`
      }
    ]
  },
  {
    id:4,
    num:"04",
    title:"Ferramentas da Qualidade",
    tag:"Ferramentas Gerenciais",
    desc:"As 7 ferramentas clássicas e as 7 novas ferramentas gerenciais, 5W2H, FMEA, QFD, MASP, relatório A3 e benchmarking.",
    keywords:["Ishikawa","Pareto","5W2H","FMEA","QFD","MASP","Benchmarking"],
    blocks:[
      {
        title:"As 7 Ferramentas Clássicas da Qualidade",
        icon:"handyman",
        content:`<ol>
          <li><strong>Diagrama de Ishikawa (Espinha de Peixe/Causa e Efeito):</strong> estrutura as causas de um problema em 6M (Máquina, Mão de Obra, Método, Material, Medição, Meio Ambiente).</li>
          <li><strong>Folha de Verificação:</strong> formulário simples para coleta de dados, planejado para facilitar a análise posterior.</li>
          <li><strong>Gráfico de Pareto (80/20):</strong> 80% dos problemas vêm de 20% das causas. Prioriza as ações nos poucos itens que causam a maioria dos efeitos.</li>
          <li><strong>Histograma:</strong> distribuição de frequência dos dados, mostra forma da variação.</li>
          <li><strong>Diagrama de Dispersão:</strong> relação entre duas variáveis (correlação positiva, negativa ou nula).</li>
          <li><strong>Fluxograma:</strong> representação gráfica da sequência de etapas de um processo.</li>
          <li><strong>Carta de Controle (Shewhart):</strong> monitora a estabilidade do processo ao longo do tempo.</li>
        </ol>`
      },
      {
        title:"As 7 Novas Ferramentas Gerenciais",
        icon:"auto_graph",
        content:`<ol>
          <li><strong>Diagrama de Afinidades:</strong> agrupa ideias/opiniões em temas naturais (brainstorming estruturado).</li>
          <li><strong>Diagrama de Relações:</strong> mostra relações de causa e efeito entre fatores complexos.</li>
          <li><strong>Diagrama de Árvore:</strong> desdobra objetivos em meios, metas em ações.</li>
          <li><strong>Diagrama Matricial:</strong> relaciona duas ou mais listas de itens, mostrando intensidade da relação.</li>
          <li><strong>Matriz de Priorização:</strong> pondera critérios para ordenar alternativas.</li>
          <li><strong>PDPC (Process Decision Program Chart):</strong> antecipa riscos e define contramedidas para cada etapa de um plano.</li>
          <li><strong>Diagrama de Setas (PERT/CPM):</strong> planejamento e controle de cronogramas.</li>
        </ol>`
      },
      {
        title:"5W2H e 5 Porquês",
        icon:"question_answer",
        content:`<p><strong>5W2H:</strong> plano de ação simples e completo:</p>
        <ul>
          <li><strong>What</strong> (O quê?)</li>
          <li><strong>Why</strong> (Por quê?)</li>
          <li><strong>Where</strong> (Onde?)</li>
          <li><strong>When</strong> (Quando?)</li>
          <li><strong>Who</strong> (Quem?)</li>
          <li><strong>How</strong> (Como?)</li>
          <li><strong>How much</strong> (Quanto custa?)</li>
        </ul>
        <p><strong>5 Porquês (5 Whys):</strong> técnica de análise de causa raiz — perguntar "por quê?" sucessivamente (em geral 5 vezes) até chegar à causa fundamental de um problema.</p>`
      },
      {
        title:"FMEA — Análise de Modos de Falha e Efeitos",
        icon:"warning_amber",
        content:`<p><strong>FMEA (Failure Mode and Effects Analysis):</strong> metodologia preventiva que identifica modos de falha potenciais em um produto/processo e prioriza ações para eliminá-los ou mitigá-los.</p>
        <ul>
          <li><strong>DFMEA:</strong> focado no projeto do produto.</li>
          <li><strong>PFMEA:</strong> focado no processo de fabricação.</li>
        </ul>
        <p><strong>NPR (Número de Prioridade de Risco) = Severidade × Ocorrência × Detecção.</strong> Modos de falha com NPR mais alto recebem ações prioritárias.</p>
        <p><strong>FTA (Fault Tree Analysis):</strong> abordagem top-down (do evento indesejado para as causas básicas), usando portas lógicas (E/OU).</p>`
      },
      {
        title:"QFD — Casa da Qualidade",
        icon:"home",
        content:`<p><strong>QFD (Quality Function Deployment):</strong> metodologia que traduz a "voz do cliente" em requisitos técnicos de engenharia para o produto/processo.</p>
        <p>A "Casa da Qualidade" é a matriz central do QFD, relacionando:</p>
        <ul>
          <li><strong>O quê?</strong> — requisitos do cliente (linhas).</li>
          <li><strong>Como?</strong> — requisitos técnicos (colunas).</li>
          <li><strong>Relação</strong> — intensidade entre cada O quê e Como.</li>
          <li><strong>Correlação (telhado)</strong> — como os requisitos técnicos se relacionam entre si.</li>
          <li><strong>Priorização</strong> — importância para o cliente, benchmark, metas.</li>
        </ul>`
      },
      {
        title:"MASP e Relatório A3",
        icon:"description",
        content:`<p><strong>MASP (Método de Análise e Solução de Problemas):</strong> metodologia estruturada baseada no PDCA:</p>
        <ol>
          <li>Identificação do problema (definir claramente).</li>
          <li>Observação (coletar dados, entender o fenômeno).</li>
          <li>Análise (identificar causas raiz — Ishikawa, 5 Porquês).</li>
          <li>Plano de ação (5W2H).</li>
          <li>Ação (executar o plano).</li>
          <li>Verificação (confirmar resultado).</li>
          <li>Padronização (incorporar ao padrão).</li>
          <li>Conclusão (documentar, lições aprendidas).</li>
        </ol>
        <p><strong>Relatório A3:</strong> ferramenta de resolução de problemas em uma única folha. Lado esquerdo: contexto, estado atual, análise de causas. Lado direito: estado futuro, contramedidas, plano, acompanhamento.</p>`
      }
    ]
  },
  {
    id:5,
    num:"05",
    title:"Segurança do Trabalho",
    tag:"Higiene e Segurança",
    desc:"Acidentes, hierarquia de controles, EPI/EPC, PGR, PCMSO, CIPA, SESMT, insalubridade, perículose, LOTO, APR, NRs e estatísticas.",
    keywords:["CAT","EPI","PGR","CIPA","SESMT","LOTO","APR","DDS","NR-35"],
    blocks:[
      {
        title:"Conceitos Fundamentais",
        icon:"safety",
        content:`<p><strong>Acidente de trabalho:</strong> ocorrência não programada que resulta em lesão, doença ou morte. Pode ser típico (no trabalho) ou de trajeto (caminho casa-trabalho).</p>
        <ul>
          <li><strong>Causas:</strong> ato inseguro (comportamento) + condição insegura (ambiente) = acidente. Raramente uma causa única.</li>
          <li><strong>Custos:</strong> diretos (indenizações, tratamento, CAT) e indiretos (perda de produção, retreinamento, dano à imagem) — estes podem ser 4-10× maiores.</li>
          <li><strong>CAT (Comunicação de Acidente de Trabalho):</strong> documento emitido pela empresa ao INSS nos casos de acidente, obrigatório até o 1º dia útil seguinte.</li>
        </ul>`
      },
      {
        title:"Teoria do Dominó e Investigação",
        icon:"domino",
        content:`<p><strong>Teoria do Dominó (Heinrich, 1931):</strong> 5 fatores que se sucedem como dominós: (1) ambiente social/herança → (2) falha humana → (3) ato/condição insegura → (4) acidente → (5) lesão. Removendo um dominó, a sequência é interrompida.</p>
        <p><strong>Árvore de Causas:</strong> método de investigação que reconstrói a sequência de eventos que levaram ao acidente, identificando causas imediatas e básicas.</p>`
      },
      {
        title:"Hierarquia de Controle de Riscos",
        icon:"layers",
        content:`<ol>
          <li><strong>Eliminação:</strong> remover o risco completamente (mais eficaz).</li>
          <li><strong>Substituição:</strong> trocar por algo menos perigoso.</li>
          <li><strong>Controles de engenharia:</strong> isolamento, proteção coletiva, ventilação.</li>
          <li><strong>Controles administrativos:</strong> treinamento, procedimentos, sinalização, rodízio.</li>
          <li><strong>EPI (Equipamento de Proteção Individual):</strong> última barreira — quando nenhum outro controle é suficiente.</li>
        </ol>`
      },
      {
        title:"EPI e EPC",
        icon:"shield",
        content:`<p><strong>EPI (Equipamento de Proteção Individual):</strong> capacete, óculos, luva, bota, protetor auricular, cinto de segurança, respirador, etc. Todo EPI deve ter <strong>Certificado de Aprovação (CA)</strong> do MTE.</p>
        <p><strong>EPC (Equipamento de Proteção Coletiva):</strong> proteção que beneficia todos os trabalhadores expostos — sistema de exaustão, enclausuramento, barreiras, sinalização, guarda-corpo, sistema de combate a incêndio.</p>`
      },
      {
        title:"Programas e Comissões",
        icon:"groups",
        content:`<ul>
          <li><strong>PGR (Programa de Gerenciamento de Riscos):</strong> documento que identifica, avalia e gerencia todos os riscos ocupacionais (substituiu o PPRA).</li>
          <li><strong>PCMSO:</strong> Programa de Controle Médico de Saúde Ocupacional — exames admissionais, periódicos, demissionais.</li>
          <li><strong>CIPA:</strong> Comissão Interna de Prevenção de Acidentes — eleita pelos trabalhadores, promove prevenção.</li>
          <li><strong>SESMT:</strong> Serviços Especializados em Engenharia de Segurança e Medicina do Trabalho — dimensionado pelo grau de risco da empresa.</li>
        </ul>`
      },
      {
        title:"Insalubridade e Periculosidade",
        icon:"report",
        content:`<p><strong>Insalubridade (NR-15):</strong> exposição a agentes nocivos à saúde. Adicionais: 40% (grau máximo), 20% (médio), 10% (mínimo).</p>
        <p><strong>Periculosidade (NR-16):</strong> exposição a agentes de risco acentuado (inflamáveis, explosivos, eletricidade). Adicional: 30% sobre o salário base.</p>
        <p>Não é possível acumular insalubridade e periculosidade — o trabalhador escolhe o maior benefício.</p>`
      },
      {
        title:"Procedimentos Críticos",
        icon:"critical",
        content:`<ul>
          <li><strong>LOTO (Lockout/Tagout):</strong> bloqueio e etiquetagem de fontes de energia — procedimento para garantir que máquinas não religuem durante manutenção.</li>
          <li><strong>APR (Análise Preliminar de Risco):</strong> identifica riscos antes de iniciar uma atividade, define medidas de controle.</li>
          <li><strong>PT (Permissão de Trabalho):</strong> documento formal que autoriza atividades de alto risco (trabalho a quente, altura, espaço confinado, elétrica).</li>
          <li><strong>DDS (Diálogo Diário de Segurança):</strong> conversa rápida (5-10 min) no início do turno/tarefa sobre segurança.</li>
        </ul>`
      },
      {
        title:"Estatísticas de Acidentes",
        icon:"analytics",
        content:`<ul>
          <li><strong>Taxa de Frequência (TF):</strong> nº de acidentes com afastamento × 1.000.000 ÷ horas-homem trabalhadas.</li>
          <li><strong>Taxa de Gravidade (TG):</strong> dias perdidos/debitados × 1.000.000 ÷ horas-homem trabalhadas.</li>
        </ul>`
      }
    ]
  },
  {
    id:6,
    num:"06",
    title:"Normas e ISOs",
    tag:"Sistemas de Gestão",
    desc:"ISO 9001, 14001, 45001, 50001, IATF 16949, NRs, normas ABNT, ASTM, SAE, certificações e auditorias.",
    keywords:["ISO 9001","ISO 14001","ISO 45001","IATF 16949","NR-12","ABNT","ASME"],
    blocks:[
      {
        title:"Sistemas de Gestão ISO",
        icon:"verified",
        content:`<ul>
          <li><strong>ISO 9001:2015 — Qualidade:</strong> abordagem de processos, pensamento baseado em risco, ciclo PDCA. Estrutura de alto nível (Anexo SL).</li>
          <li><strong>ISO 14001:2015 — Ambiental:</strong> gestão ambiental, ciclo de vida, aspectos/impactos ambientais.</li>
          <li><strong>ISO 45001:2018 — SSO:</strong> segurança e saúde ocupacional (substituiu OHSAS 18001). Contexto da organização, participação dos trabalhadores.</li>
          <li><strong>ISO 50001:2018 — Energia:</strong> eficiência energética, uso e consumo de energia.</li>
          <li><strong>ISO 26000:</strong> responsabilidade social (diretriz, não certificável).</li>
          <li><strong>ISO 31000:</strong> gestão de riscos — princípios e diretrizes.</li>
          <li><strong>ISO 27001:</strong> segurança da informação.</li>
        </ul>`
      },
      {
        title:"IATF 16949 — Automotivo",
        icon:"directions_car",
        content:`<p><strong>IATF 16949:</strong> norma de qualidade específica para a indústria automotiva (sucessora da ISO/TS 16949). Alinhada com ISO 9001, mas com requisitos adicionais:</p>
        <ul>
          <li>APQP, PPAP, FMEA, MSA, SPC (Core Tools).</li>
          <li>Gestão de risco com FMEA.</li>
          <li>Garantia de produto (traceability, recall).</li>
          <li>Requisitos específicos de cliente (CSR).</li>
        </ul>`
      },
      {
        title:"Normas Regulamentadoras (NRs)",
        icon:"gavel",
        content:`<div class="detail-highlight"><strong>Principais NRs para Engenharia de Produção:</strong></div>
        <ul>
          <li><strong>NR-1:</strong> Disposições Gerais e Gerenciamento de Riscos Ocupacionais (GRO).</li>
          <li><strong>NR-5:</strong> CIPA.</li>
          <li><strong>NR-6:</strong> EPI.</li>
          <li><strong>NR-7:</strong> PCMSO.</li>
          <li><strong>NR-10:</strong> Segurança em Instalações Elétricas.</li>
          <li><strong>NR-11:</strong> Transporte e Movimentação de Materiais.</li>
          <li><strong>NR-12:</strong> Segurança em Máquinas e Equipamentos (uma das mais cobradas na indústria).</li>
          <li><strong>NR-13:</strong> Caldeiras, Vasos de Pressão e Tubulações.</li>
          <li><strong>NR-15:</strong> Insalubridade.</li>
          <li><strong>NR-16:</strong> Periculosidade.</li>
          <li><strong>NR-17:</strong> Ergonomia.</li>
          <li><strong>NR-18:</strong> Construção Civil.</li>
          <li><strong>NR-20:</strong> Inflamáveis.</li>
          <li><strong>NR-23:</strong> Combate a Incêndio.</li>
          <li><strong>NR-33:</strong> Espaço Confinado.</li>
          <li><strong>NR-35:</strong> Trabalho em Altura.</li>
        </ul>`
      },
      {
        title:"Normas Técnicas ABNT, ASTM, SAE, ASME",
        icon:"book",
        content:`<ul>
          <li><strong>ABNT:</strong> Associação Brasileira de Normas Técnicas — normalização brasileira (NBR).</li>
          <li><strong>ASTM:</strong> American Society for Testing and Materials — normas de materiais e ensaios.</li>
          <li><strong>SAE:</strong> Society of Automotive Engineers — normas automotivas (aços SAE).</li>
          <li><strong>ASME:</strong> American Society of Mechanical Engineers — caldeiras, vasos de pressão, tubulações (Código ASME Seção VIII, Seção IX - soldagem).</li>
          <li><strong>API:</strong> American Petroleum Institute — normas para petróleo e gás.</li>
          <li><strong>DIN:</strong> normas alemãs (Deutsches Institut für Normung).</li>
          <li><strong>AWS:</strong> American Welding Society — normas de soldagem.</li>
        </ul>
        <p><strong>Metrologia e Calibração:</strong> INMETRO é o órgão brasileiro responsável pela metrologia legal e rastreabilidade das medições.</p>`
      }
    ]
  },
  {
    id:7,
    num:"07",
    title:"Ergonomia",
    tag:"Saúde Ocupacional",
    desc:"Ergonomia física, cognitiva e organizacional, NR-17, AET, NIOSH, LER/DORT, RULA, REBA, conforto ambiental.",
    keywords:["NR-17","AET","NIOSH","RULA","REBA","LER/DORT","Antropometria"],
    blocks:[
      {
        title:"Fundamentos da Ergonomia",
        icon:"accessibility",
        content:`<p>A <strong>ergonomia</strong> (do grego ergon = trabalho, nomos = leis) estuda a adaptação do trabalho ao ser humano. Divide-se em:</p>
        <ul>
          <li><strong>Ergonomia física:</strong> posturas, movimentos repetitivos, levantamento de cargas, antropometria — relação entre o corpo e o posto de trabalho.</li>
          <li><strong>Ergonomia cognitiva:</strong> carga mental, tomada de decisão, estresse, fadiga mental — relação entre a mente e as demandas do trabalho.</li>
          <li><strong>Ergonomia organizacional:</strong> trabalho em turnos, comunicação, trabalho em equipe, gestão participativa.</li>
        </ul>`
      },
      {
        title:"NR-17 e AET",
        icon:"assignment",
        content:`<p><strong>NR-17 (Ergonomia):</strong> estabelece parâmetros para adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores. Aborda:</p>
        <ul>
          <li>Levantamento e transporte manual de cargas.</li>
          <li>Mobiliário dos postos de trabalho (mesas, cadeiras, bancadas).</li>
          <li>Equipamentos (monitores, teclados, painéis de comando).</li>
          <li>Condições ambientais (iluminação, ruído, temperatura).</li>
          <li>Organização do trabalho (pausas, ritmo, repetitividade).</li>
        </ul>
        <p><strong>AET (Análise Ergonômica do Trabalho):</strong> estudo sistemático que analisa a situação real de trabalho — não a prescrita — para identificar fatores de risco e propor melhorias.</p>`
      },
      {
        title:"Antropometria e Biomecânica",
        icon:"straighten",
        content:`<p><strong>Antropometria:</strong> ciência das medidas do corpo humano. Essencial para dimensionar postos de trabalho, assentos, ferramentas, equipamentos de proteção. Deve considerar a diversidade da população (percentis 5% a 95%).</p>
        <p><strong>Biomecânica ocupacional:</strong> estuda a interação entre o trabalhador e seu ambiente físico em termos de forças, torques, posturas. Analisa sobrecarga muscular e articular.</p>`
      },
      {
        title:"Levantamento de Cargas — Equação de NIOSH",
        icon:"fitness",
        content:`<p>A <strong>Equação de NIOSH</strong> (National Institute for Occupational Safety and Health) calcula o <strong>Limite de Peso Recomendado (LPR)</strong> para levantamento manual de cargas:</p>
        <ul>
          <li>Considera: distância horizontal (H), vertical (V), deslocamento (D), assimetria (A), frequência (F), pega (C).</li>
          <li><strong>IL (Índice de Levantamento) = Peso real ÷ LPR.</strong> IL > 1,0 → risco aumentado; IL > 3,0 → risco alto para muitos trabalhadores.</li>
        </ul>`
      },
      {
        title:"LER/DORT",
        icon:"healing",
        content:`<p><strong>LER (Lesões por Esforço Repetitivo) / DORT (Distúrbios Osteomusculares Relacionados ao Trabalho):</strong> afecções dos músculos, tendões, nervos e articulações causadas por movimento repetitivo, postura inadequada e/ou força excessiva.</p>
        <p><strong>Prevenção:</strong> pausas regulares, rodízio de atividades, ferramentas adequadas, postos ajustáveis, treinamento.</p>`
      },
      {
        title:"Métodos de Avaliação Postural",
        icon:"assessment",
        content:`<ul>
          <li><strong>RULA (Rapid Upper Limb Assessment):</strong> avalia risco de membros superiores (postura, força, repetição). Pontuação final de 1 (aceitável) a 7 (investigação urgente).</li>
          <li><strong>REBA (Rapid Entire Body Assessment):</strong> similar ao RULA, mas para o corpo inteiro — inclui pernas e tronco.</li>
          <li><strong>OWAS (Ovako Working Posture Assessment):</strong> classifica posturas de costas, braços, pernas e carga em categorias de ação.</li>
        </ul>`
      },
      {
        title:"Conforto Ambiental",
        icon:"ac_unit",
        content:`<p>Três fatores principais afetam o conforto no ambiente de trabalho:</p>
        <ul>
          <li><strong>Iluminação:</strong> NBR ISO/CIE 8995-1 — níveis de iluminância por atividade. Luz inadequada causa fadiga visual e acidentes.</li>
          <li><strong>Ruído:</strong> NR-15 — limite de 85 dB(A) para 8h. Acima disso, obrigatório o uso de protetor auricular.</li>
          <li><strong>Temperatura:</strong> índice de bulbo úmido-termômetro de globo (IBUTG) para ambientes quentes. NR-15 define limites.</li>
        </ul>`
      }
    ]
  },
  {
    id:8,
    num:"08",
    title:"Administração",
    tag:"Gestão Empresarial",
    desc:"Teorias da administração, planejamento estratégico, SWOT, BSC, liderança, motivação, gestão de pessoas, empreendedorismo.",
    keywords:["SWOT","BSC","Maslow","Herzberg","Liderança","Governança"],
    blocks:[
      {
        title:"Teorias da Administração",
        icon:"school",
        content:`<ul>
          <li><strong>Científica (Taylor, 1911):</strong> foco na eficiência do trabalho operacional, estudo de tempos e movimentos.</li>
          <li><strong>Clássica (Fayol, 1916):</strong> foco na estrutura — 14 princípios (divisão do trabalho, autoridade, unidade de comando, etc.) e funções administrativas (POCCC).</li>
          <li><strong>Relações Humanas (Mayo, Hawthorne, 1930):</strong> fator humano é determinante da produtividade — sentimentos, relações informais, motivação.</li>
          <li><strong>Burocrática (Weber):</strong> organização baseada em regras, hierarquia, impessoalidade, meritocracia.</li>
          <li><strong>Sistêmica:</strong> organização como sistema aberto que interage com o ambiente.</li>
          <li><strong>Contingencial:</strong> não existe "melhor jeito" — depende do ambiente, tecnologia, tamanho.</li>
        </ul>`
      },
      {
        title:"Planejamento Estratégico",
        icon:"map",
        content:`<ul>
          <li><strong>Estratégico (longo prazo):</strong> missão, visão, valores, objetivo estratégicos, análise do ambiente (SWOT).</li>
          <li><strong>Tático (médio prazo):</strong> desdobramento departamental (planos de marketing, produção, RH, financeiro).</li>
          <li><strong>Operacional (curto prazo):</strong> planos detalhados por tarefa/indivíduo.</li>
        </ul>
        <p><strong>SWOT (FOFA):</strong> Forças, Fraquezas (interno); Oportunidades, Ameaças (externo).</p>
        <p><strong>BSC (Balanced Scorecard):</strong> desdobra a estratégia em 4 perspectivas: financeira, clientes, processos internos, aprendizado e crescimento.</p>`
      },
      {
        title:"Liderança e Motivação",
        icon:"groups",
        content:`<ul>
          <li><strong>Teorias de motivação:</strong> Maslow (hierarquia de necessidades), Herzberg (fatores higiênicos × motivacionais), McGregor (Teoria X - trabalhador é preguiçoso; Teoria Y - trabalhador é motivado), McClelland (realização, poder, afiliação).</li>
          <li><strong>Estilos de liderança:</strong> autocrático, democrático, liberal (laissez-faire).</li>
          <li><strong>Liderança situacional (Hersey-Blanchard):</strong> adequar o estilo ao nível de maturidade da equipe.</li>
          <li><strong>Liderança transformacional:</strong> inspira, motiva, estimula intelectualmente, considera individualmente.</li>
        </ul>`
      },
      {
        title:"Gestão de Pessoas",
        icon:"people",
        content:`<p>Principais processos de RH:</p>
        <ul>
          <li><strong>Recrutamento e seleção:</strong> fontes (interna/externa), técnicas (entrevistas, testes, dinâmicas).</li>
          <li><strong>Treinamento e desenvolvimento (T&D):</strong> levantamento de necessidades, planejamento, execução, avaliação (4 níveis de Kirkpatrick).</li>
          <li><strong>Avaliação de desempenho:</strong> autoavaliação, avaliação do gestor, 360°, por competências.</li>
          <li><strong>Gestão por competências:</strong> mapear competências necessárias e avaliar o gap.</li>
          <li><strong>Plano de cargos e salários:</strong> desenho de cargos, pesquisa salarial, faixas salariais.</li>
        </ul>`
      }
    ]
  },
  {
    id:9,
    num:"09",
    title:"Indústria 4.0",
    tag:"Manufatura Avançada",
    desc:"IoT, Big Data, IA, Digital Twin, manufatura aditiva, robótica colaborativa, MES, SCADA, sistemas ciber-físicos e transformação digital.",
    keywords:["IoT","Digital Twin","Impressão 3D","Cobots","MES","SCADA","Blockchain","IA"],
    blocks:[
      {
        title:"As 4 Revoluções Industriais",
        icon:"history",
        content:`<ol>
          <li><strong>1ª Revolução (séc. XVIII):</strong> mecanização, máquina a vapor, ferrovias.</li>
          <li><strong>2ª Revolução (séc. XIX-XX):</strong> eletricidade, produção em massa, aço.</li>
          <li><strong>3ª Revolução (déc. 1960-70):</strong> computadores, automação, eletrônica.</li>
          <li><strong>4ª Revolução (atual — Indústria 4.0):</strong> IoT, IA, Big Data, sistemas ciber-físicos, integração digital do chão de fábrica.</li>
        </ol>`
      },
      {
        title:"IoT e IIoT Industrial",
        icon:"sensors",
        content:`<p><strong>IoT (Internet of Things):</strong> objetos físicos conectados à internet, coletando e trocando dados.</p>
        <p><strong>IIoT (Industrial IoT):</strong> sensores, atuadores e máquinas conectados no chão de fábrica — coleta de dados de temperatura, vibração, pressão, consumo de energia em tempo real.</p>`
      },
      {
        title:"Big Data & IA na Manufatura",
        icon:"analytics",
        content:`<p><strong>Big Data industrial:</strong> enorme volume de dados gerados por sensores, máquinas, sistemas (ERP, MES). Análise para identificar padrões, prever falhas, otimizar processos.</p>
        <p><strong>IA e Machine Learning:</strong> algoritmos que aprendem com dados históricos e fazem previsões:</p>
        <ul>
          <li><strong>Manutenção preditiva:</strong> prever falhas antes que ocorram.</li>
          <li><strong>Otimização de qualidade:</strong> identificar parâmetros que geram defeitos.</li>
          <li><strong>Previsão de demanda:</strong> modelos mais precisos que métodos tradicionais.</li>
        </ul>`
      },
      {
        title:"Digital Twin e Manufatura Aditiva",
        icon:"view_in_ar",
        content:`<p><strong>Digital Twin (Gêmeo Digital):</strong> réplica virtual exata de um sistema físico (máquina, linha, fábrica). Permite simular cenários, prever comportamentos e otimizar performance em tempo real.</p>
        <p><strong>Manufatura Aditiva (Impressão 3D):</strong> construção de peças camada por camada. Vantagens: geometrias complexas sem ferramental, prototipagem rápida, estoque digital. Tecnologias: FDM, SLA, SLS, DMLS (metal).</p>`
      },
      {
        title:"Robótica Colaborativa e Automação",
        icon:"precision_manufacturing",
        content:`<p><strong>Cobots (robôs colaborativos):</strong> robôs projetados para trabalhar lado a lado com humanos — sensores de força, parada automática ao contato, programação intuitiva (ex.: Universal Robots, Fanuc CRX).</p>
        <p><strong>CLPs (Controladores Lógicos Programáveis):</strong> automatizam máquinas e processos discretos. Linguagens Ladder, SFC, ST.</p>`
      },
      {
        title:"MES, SCADA e Sistemas Ciber-Físicos",
        icon:"dns",
        content:`<ul>
          <li><strong>MES (Manufacturing Execution System):</strong> sistema que gerencia e monitora o chão de fábrica em tempo real — ordens de produção, rastreabilidade, OEE, qualidade.</li>
          <li><strong>SCADA (Supervisory Control and Data Acquisition):</strong> supervisão e controle de processos contínuos (automação de plantas).</li>
          <li><strong>CPS (Cyber-Physical Systems):</strong> integração entre sistemas computacionais e processos físicos — a base da Indústria 4.0.</li>
          <li><strong>Blockchain na cadeia de suprimentos:</strong> rastreabilidade imutável de materiais, certificações e transações.</li>
        </ul>`
      }
    ]
  },
  {
    id:10,
    num:"10",
    title:"Ambiente Organizacional",
    tag:"Clima e Cultura",
    desc:"Clima organizacional, cultura, comunicação, diversidade, saúde mental, QVT, engajamento e avaliação 360°.",
    keywords:["Clima","Cultura","Burnout","QV7","Onboarding","360°"],
    blocks:[
      {
        title:"Clima e Cultura Organizacional",
        icon:"psychology",
        content:`<ul>
          <li><strong>Clima organizacional:</strong> percepção compartilhada dos colaboradores sobre o ambiente de trabalho. Medido por <strong>pesquisas de clima</strong> (anonimato, questionários estruturados). Dimensões: liderança, comunicação, reconhecimento, condições de trabalho.</li>
          <li><strong>Cultura organizacional:</strong> conjunto de crenças, valores, normas e artefatos que definem "como fazemos as coisas aqui". Elementos: ritos, mitos, heróis, tabus (Schein: artefatos, valores compartilhados, pressupostos básicos).</li>
        </ul>`
      },
      {
        title:"Saúde Mental no Trabalho",
        icon:"mental_health",
        content:`<ul>
          <li><strong>Burnout:</strong> síndrome do esgotamento profissional — exaustão emocional, despersonalização, baixa realização profissional. Reconhecido pela CID-11.</li>
          <li><strong>Estresse ocupacional:</strong> desequilíbrio entre demandas e recursos do trabalhador.</li>
          <li><strong>Qualidade de Vida no Trabalho (QVT):</strong> modelo de Walton — compensação justa, condições seguras, desenvolvimento, integração social, constitucionalismo, trabalho e vida privada, relevância social.</li>
        </ul>`
      },
      {
        title:"Comunicação e Engajamento",
        icon:"campaign",
        content:`<ul>
          <li><strong>Comunicação interna:</strong> fluxos descendente, ascendente, horizontal. Canais: murais, intranet, reuniões, newsletter, aplicativos corporativos.</li>
          <li><strong>Endomarketing:</strong> ações de marketing voltadas ao público interno — engajar, motivar, alinhar.</li>
          <li><strong>Diversidade e inclusão:</strong> políticas para garantir representatividade e equidade (gênero, raça, PCD, LGBTQIA+).</li>
          <li><strong>Onboarding:</strong> processo de integração de novos colaboradores — reduz ansiedade e acelera produtividade.</li>
          <li><strong>Avaliação 360°:</strong> feedback de múltiplas fontes (gestor, pares, subordinados, clientes).</li>
        </ul>`
      }
    ]
  },
  {
    id:11,
    num:"11",
    title:"Engenharia de Processos",
    tag:"Modelagem e BPM",
    desc:"BPMN, BPM, BPR, fluxogramas, POP, capacidade de processo, simulação, otimização e processos de fabricação mecânica.",
    keywords:["BPMN","BPM","BPR","POP","Processos","Fabricação"],
    blocks:[
      {
        title:"Modelagem e BPMN",
        icon:"account_tree",
        content:`<p><strong>BPMN (Business Process Model and Notation):</strong> notação padronizada (OMG) para modelagem de processos de negócio — piscinas/raias, eventos, atividades, gateways (exclusivo, paralelo, inclusivo).</p>
        <p><strong>BPM (Business Process Management):</strong> disciplina gerencial que trata processos como ativos estratégicos — ciclo: modelar, executar, monitorar, otimizar.</p>
        <p><strong>BPR (Business Process Reengineering):</strong> redesenho radical dos processos para ganhos drásticos de performance (Hammer & Champy, 1993).</p>`
      },
      {
        title:"Procedimentos e Padronização",
        icon:"description",
        content:`<ul>
          <li><strong>POP (Procedimento Operacional Padrão):</strong> documento que descreve passo a passo como executar uma tarefa — quem, quando, como, com o quê.</li>
          <li><strong>IT (Instrução de Trabalho):</strong> detalhamento técnico de uma operação específica, geralmente no posto de trabalho.</li>
          <li><strong>Fluxogramas:</strong> representação gráfica do fluxo do processo (símbolos: processo, decisão, início/fim, conector).</li>
        </ul>`
      },
      {
        title:"Capacidade e Simulação",
        icon:"speed",
        content:`<p><strong>Capacidade e controle de processo:</strong> malha aberta (sem feedback) e malha fechada (com feedback). Otimização de processos usando técnicas de balanceamento e teoria das filas.</p>
        <p><strong>Simulação:</strong> ferramentas como Arena, FlexSim, Simio permitem modelar e testar cenários sem interromper a operação — essencial para projetos greenfield e brownfield.</p>`
      },
      {
        title:"Processos de Fabricação Mecânica",
        icon:"build",
        content:`<p>Integração com processos de fabricação: <strong>usinagem</strong> (torneamento, fresamento, furação, retificação), <strong>conformação</strong> (laminação, forjamento, extrusão, estampagem), <strong>soldagem</strong>, <strong>fundição</strong> são processos reais onde a engenharia de produção atua para otimizar produtividade, qualidade e custo — projetados em <strong>AutoCAD</strong>, <strong>SolidWorks</strong> e <strong>NanoCAD</strong>.</p>`
      }
    ]
  },
  {
    id:12,
    num:"12",
    title:"Desenvolvimento de Produtos (PDP)",
    tag:"PDP e Stage-Gate",
    desc:"Processo de desenvolvimento, stage-gate, DFM, DFA, DFMA, QFD, prototipagem, CAD/CAM/CAE e gestão da inovação.",
    keywords:["Stage-Gate","DFM","DFA","DFMA","CAD/CAM","CAE","Ecodesign","Inovação"],
    blocks:[
      {
        title:"Processo de Desenvolvimento de Produtos",
        icon:"view_timeline",
        content:`<p>O PDP (Processo de Desenvolvimento de Produtos) estrutura-se em três macrofases:</p>
        <ul>
          <li><strong>Pré-desenvolvimento:</strong> planejamento estratégico, análise de portfólio, ideias, requisitos.</li>
          <li><strong>Desenvolvimento:</strong> projeto conceitual, detalhado, prototipagem, testes, homologação.</li>
          <li><strong>Pós-desenvolvimento:</strong> lançamento, acompanhamento de mercado, descontinuação.</li>
        </ul>
        <p><strong>Modelo Stage-Gate (Cooper):</strong> portões de decisão (Go/Kill/Hold/Recycle) entre as fases. Cada gate é uma revisão com critérios pré-definidos.</p>`
      },
      {
        title:"DFx — Projeto para Manufatura e Montagem",
        icon:"handyman",
        content:`<ul>
          <li><strong>DFM (Design for Manufacturing):</strong> projetar considerando a facilidade de fabricação — reduzir operações, usar processos padronizados.</li>
          <li><strong>DFA (Design for Assembly):</strong> reduzir número de peças, projetar para montagem fácil (inserção guiada, simetria).</li>
          <li><strong>DFMA:</strong> combina DFM e DFA — metodologia da Boothroyd & Dewhurst.</li>
          <li><strong>DFx:</strong> Design for Cost, Reliability, Sustainability, Serviceability, etc.</li>
        </ul>`
      },
      {
        title:"CAD/CAM/CAE e Prototipagem",
        icon:"3d_rotation",
        content:`<ul>
          <li><strong>CAD (Computer-Aided Design):</strong> desenho/modelagem 3D — AutoCAD (2D), SolidWorks, Inventor, CATIA, NX, Fusion 360, NanoCAD.</li>
          <li><strong>CAM (Computer-Aided Manufacturing):</strong> geração de código CNC a partir do modelo CAD.</li>
          <li><strong>CAE (Computer-Aided Engineering):</strong> simulação estrutural (FEM), fluidodinâmica (CFD), térmica, multimodal.</li>
          <li><strong>Prototipagem rápida:</strong> impressão 3D (FDM, SLA, SLS) e usinagem CNC de protótipos.</li>
        </ul>
        <div class="detail-highlight"><strong>Projetos reais:</strong> No AutoCAD/SolidWorks/NanoCAD, projetam-se desde dispositivos de fixação (jigs & fixtures), leiautes de célula de manufatura, ferramentas, até produtos completos como bombas, válvulas, estruturas metálicas e componentes automotivos.</div>`
      },
      {
        title:"Gestão da Inovação",
        icon:"lightbulb",
        content:`<p><strong>Inovação</strong> não é apenas invenção — é invenção que gera valor comercial. Tipos:</p>
        <ul>
          <li><strong>Incremental:</strong> melhorias contínuas em produtos/serviços existentes.</li>
          <li><strong>Radical/disruptiva:</strong> cria novos mercados ou transforma radicalmente os existentes.</li>
          <li><strong>De processo, produto, marketing, organizacional.</strong></li>
        </ul>
        <p><strong>Propriedade intelectual:</strong> patentes (invenção/modelo de utilidade), marcas, direitos autorais, desenho industrial. O INPI é o órgão brasileiro.</p>`
      }
    ]
  },
  {
    id:13,
    num:"13",
    title:"Indústria Metalúrgica",
    tag:"Metalurgia Física",
    desc:"Estrutura cristalina, diagrama Fe-C, aços, ferros fundidos, conformação, usinagem, soldagem, ensaios mecânicos e não destrutivos.",
    keywords:["Diagrama Fe-C","Soldagem","MIG/MAG","TIG","END","Metalografia","ASME"],
    blocks:[
      {
        title:"Metalurgia Física e Diagrama Fe-C",
        icon:"science",
        content:`<p><strong>Estrutura cristalina dos metais:</strong> CCC (ferro α), CFC (ferro γ, alumínio, cobre), HC (titânio, magnésio). Defeitos: lacunas, discordâncias, contornos de grão.</p>
        <p><strong>Diagrama Ferro-Carbono (Fe-C):</strong> mapa das fases dos aços em função da temperatura e do teor de carbono. Fases principais: ferrita (α), austenita (γ), cementita (Fe₃C), perlita (α+Fe₃C), martensita, bainita.</p>
        <p>Teor de carbono: <strong>aços</strong> (até 2,11% C), <strong>ferros fundidos</strong> (2,11% a 6,67% C).</p>`
      },
      {
        title:"Processos de Conformação e Usinagem",
        icon:"precision_manufacturing",
        content:`<ul>
          <li><strong>Conformação mecânica:</strong> laminação (chapas, perfis), forjamento (matriz aberta/fechada), extrusão, trefilação (arames), estampagem profunda.</li>
          <li><strong>Usinagem:</strong> torneamento, fresamento, furação, retificação, eletroerosão (EDM). Parâmetros: velocidade de corte, avanço, profundidade.</li>
        </ul>`
      },
      {
        title:"Processos de Soldagem",
        icon:"local_fire_department",
        content:`<ul>
          <li><strong>SMAW (eletrodo revestido):</strong> processo manual, versátil, usado em campo e manutenção.</li>
          <li><strong>MIG/MAG (GMAW):</strong> alimentação contínua de arame, gás de proteção (argônio/CO₂). Alta produtividade.</li>
          <li><strong>TIG (GTAW):</strong> eletrodo de tungstênio, gás inerte (argônio). Alta qualidade, usado em aço inox, alumínio, titânio.</li>
          <li><strong>Arco submerso (SAW):</strong> alta penetração, usado em juntas espessas.</li>
          <li><strong>Soldagem a laser:</strong> precisão, baixa ZTA.</li>
        </ul>
        <p><strong>ZTA (Zona Termicamente Afetada):</strong> região do metal base que sofre alteração microestrutural pelo calor da soldagem.</p>
        <p><strong>Qualificação de soldadores e procedimentos (EPS/RQPS):</strong> requisitos da norma ASME Seção IX e AWS.</p>`
      },
      {
        title:"Ensaios Mecânicos e Não Destrutivos",
        icon:"science",
        content:`<p><strong>Ensaios mecânicos:</strong></p>
        <ul>
          <li><strong>Tração:</strong> limite de escoamento, limite de resistência, alongamento, estricção.</li>
          <li><strong>Dureza:</strong> Brinell (HB), Rockwell (HRC/HRB), Vickers (HV).</li>
          <li><strong>Impacto (Charpy):</strong> tenacidade ao entalhe — transição dúctil-frágil.</li>
          <li><strong>Fadiga:</strong> tensão × número de ciclos — curva S-N.</li>
        </ul>
        <p><strong>END (Ensaios Não Destrutivos):</strong></p>
        <ul>
          <li>Líquido penetrante (LP) — descontinuidades superficiais abertas.</li>
          <li>Partícula magnética (PM) — descontinuidades superficiais e subsuperficiais (materiais ferromagnéticos).</li>
          <li>Ultrassom (US) — descontinuidades internas, medição de espessura.</li>
          <li>Radiografia (RT) — descontinuidades internas, porosidade, inclusões.</li>
        </ul>`
      },
      {
        title:"Siderurgia e Ligas Não Ferrosas",
        icon:"factory",
        content:`<p><strong>Siderurgia:</strong> minério de ferro → sinterização → alto-forno (ferro-gusa) → aciaria (conversor BOF, forno elétrico) → lingotamento (convencional/contínuo) → laminação a quente/frio.</p>
        <p><strong>Ligas não ferrosas:</strong> alumínio (série 1xxx a 7xxx), cobre e suas ligas (bronze, latão), titânio (aeroespacial, implantes).</p>
        <p><strong>Corrosão:</strong> química, eletroquímica. Proteção: revestimentos (pintura, galvanização), proteção catódica, inibidores.</p>`
      }
    ]
  },
  {
    id:14,
    num:"14",
    title:"Fundições em Geral",
    tag:"Processos de Fundição",
    desc:"Areia verde, cera perdida, die casting, coquilha, sistema de canais, massalotes, solidificação, defeitos, simulação MAGMA.",
    keywords:["Areia Verde","Cera Perdida","Die Casting","Massalote","Solidificação","MAGMASoft"],
    blocks:[
      {
        title:"Processos de Fundição",
        icon:"whatshot",
        content:`<ul>
          <li><strong>Areia verde:</strong> molde de areia sílica + argila + água. Mais comum, baixo custo, moldes descartáveis. Usado para ferros fundidos e aços.</li>
          <li><strong>Areia com resina (cura a frio/a quente):</strong> maior precisão dimensional, melhor acabamento. Usada em machos e moldes de média/alta complexidade.</li>
          <li><strong>Cera perdida (microfusão/investment casting):</strong> modelo de cera revestido por camadas de cerâmica. Alta precisão, geometrias complexas. Usado em aços inoxidáveis e superligas.</li>
          <li><strong>Die casting (fundição sob pressão):</strong> metal líquido injetado em molde metálico sob pressão. Alta produtividade, peças de alumínio, zinco, magnésio.</li>
          <li><strong>Coquilha (gravity die casting):</strong> molde metálico permanente, enchimento por gravidade.</li>
          <li><strong>Centrífuga:</strong> molde em rotação — tubos, cilindros, anéis.</li>
          <li><strong>Contínua:</strong> lingotamento contínuo de tarugos, placas, blocos (siderurgia).</li>
        </ul>`
      },
      {
        title:"Sistema de Canais e Massalotes",
        icon:"plumbing",
        content:`<p><strong>Sistema de canais:</strong> canal de descida (vertedouro), canal de distribuição (canal principal), ataques (entrada do metal na cavidade). Função: encher o molde de forma rápida e suave, evitando turbulência e inclusões.</p>
        <p><strong>Massalotes:</strong> reservatórios de metal líquido que alimentam a peça durante a solidificação, compensando a contração (rechupe). <strong>Módulo de resfriamento = V/A</strong> (volume / área).</p>`
      },
      {
        title:"Solidificação e Defeitos",
        icon:"thermostat",
        content:`<p><strong>Solidificação:</strong> nucleação (homogênea/heterogênea) → crescimento de grãos → macroestrutura (equiaxial, colunar).</p>
        <p><strong>Defeitos comuns:</strong></p>
        <ul>
          <li><strong>Porosidade:</strong> gases aprisionados (H₂, N₂, CO).</li>
          <li><strong>Rechupe:</strong> contração não compensada pelo massalote.</li>
          <li><strong>Inclusões:</strong> areia, escória, refratário.</li>
          <li><strong>Trincas de contração:</strong> tensões durante o resfriamento.</li>
          <li><strong>Veios, sopro, penetração de areia.</strong></li>
        </ul>
        <p><strong>Simulação de solidificação (MAGMASoft, ProCAST, AnyCasting):</strong> software que modela o enchimento e solidificação, prevendo defeitos antes de fabricar o molde — essencial para reduzir custos de tentativa e erro.</p>`
      },
      {
        title:"Fusão e Acabamento",
        icon:"local_fire_department",
        content:`<ul>
          <li><strong>Fornos de fusão:</strong> cubilô (ferro fundido), elétrico a indução (média frequência — versátil, limpo), elétrico a arco (aços).</li>
          <li><strong>Metalurgia de panela:</strong> desoxidação, dessulfuração, nodulização (ferro nodular), tratamento do metal líquido.</li>
          <li><strong>Areia de fundição:</strong> propriedades (resistência, permeabilidade, refratariedade), controle, regeneração (mecânica, térmica).</li>
          <li><strong>Acabamento:</strong> rebarbação (esmerilhamento), jateamento/granalhagem (limpeza), tratamento térmico, usinagem.</li>
        </ul>`
      }
    ]
  },
  {
    id:15,
    num:"15",
    title:"Fundição de Ferro Fundido",
    tag:"Cinzento e Nodular",
    desc:"Ferros fundidos cinzento, nodular, maleável, ADI. Composição química, nodulização, inoculação, propriedades e defeitos específicos.",
    keywords:["Cinzento","Nodular","ADI","Nodulização","Inoculação","Grafita","ASTM A48","ASTM A536"],
    blocks:[
      {
        title:"Classificação dos Ferros Fundidos",
        icon:"category",
        content:`<ul>
          <li><strong>Ferro fundido cinzento:</strong> grafita em lamelas (escamas). Excelente amortecimento de vibrações, boa usinabilidade, baixo custo. Aplicações: blocos de motor, discos de freio, bases de máquinas.</li>
          <li><strong>Ferro fundido nodular (dúctil):</strong> grafita em nódulos esferoidais. Combina resistência e ductilidade. Aplicações: componentes automotivos (virabrequins, bielas), tubulações, componentes de compressores.</li>
          <li><strong>Ferro maleável:</strong> obtido por tratamento térmico do ferro branco — grafita em agregados (temper carbon).</li>
          <li><strong>Ferro branco:</strong> carbono na forma de cementita — extremamente duro e resistente ao desgaste (moinhos, britadores).</li>
          <li><strong>ADI (Austempered Ductile Iron):</strong> ferro nodular austemperado — matriz bainítica, alta resistência e tenacidade.</li>
          <li><strong>CGI (Compact Graphite Iron)/Vermicular:</strong> grafita em forma vermicular — propriedades entre cinzento e nodular (blocos de motor a diesel de alta potência).</li>
        </ul>`
      },
      {
        title:"Nodulização e Inoculação",
        icon:"science",
        content:`<p><strong>Nodulização:</strong> tratamento do metal líquido com magnésio (FeSiMg) para transformar a grafita lamelar em esferoidal. Métodos: sanduíche, tundish cover, injeção com arame (wire injection).</p>
        <p><strong>Inoculação:</strong> adição de FeSi (ferro-silício) no metal líquido para promover nucleação da grafita e refinar a microestrutura. Pós-inoculação (na panela), inoculação no molde (in-mold), inoculação na bacia de vazamento.</p>`
      },
      {
        title:"Propriedades e Normas",
        icon:"description",
        content:`<p><strong>Ferro cinzento — ABNT NBR 6589 / ASTM A48:</strong></p>
        <ul>
          <li>Classes: FC-150, FC-200, FC-250, FC-300, FC-350 (resistência à tração em MPa).</li>
          <li>Propriedades: resistência à compressão (3-4× maior que à tração), amortecimento (o melhor entre os ferros), condutividade térmica moderada.</li>
        </ul>
        <p><strong>Ferro nodular — ABNT NBR 6916 / ASTM A536:</strong></p>
        <ul>
          <li>Graus: FE-42012, FE-50007, FE-60003, FE-80002 (resistência e alongamento).</li>
          <li>Ex.: FE-50007 = 500 MPa de tração, 7% de alongamento.</li>
        </ul>`
      },
      {
        title:"Defeitos Específicos e Controle",
        icon:"bug_report",
        content:`<ul>
          <li><strong>Degenerescência de grafita:</strong> nódulos não esferoidais (explodidos, compactados) — perda de propriedades mecânicas.</li>
          <li><strong>Grafita "chunky":</strong> nódulos grandes e irregulares — comum em peças de parede espessa.</li>
          <li><strong>Flotação de grafita:</strong> grafita se concentra no topo da peça (excesso de carbono equivalente).</li>
          <li><strong>Microrrechupe:</strong> microporosidades causadas por contração interdendrítica — comum em nodular de paredes finas.</li>
          <li><strong>Análise térmica:</strong> curva de resfriamento do metal líquido — fornece informações sobre CE, nucleação, tendência a defeitos.</li>
        </ul>`
      }
    ]
  },
  {
    id:16,
    num:"16",
    title:"Tratamento Térmico",
    tag:"Metalurgia Térmica",
    desc:"Diagramas TTT e CCT, recozimento, normalização, têmpera, revenimento, cementação, nitretação, têmpera superficial e fornos.",
    keywords:["TTT","CCT","Cementação","Nitretação","Martensita","Bainita","Jominy","Fornos"],
    blocks:[
      {
        title:"Fundamentos dos Tratamentos Térmicos",
        icon:"thermostat",
        content:`<p><strong>Diagrama Fe-C:</strong> base para entender as transformações de fase dos aços.</p>
        <p><strong>Diagramas TTT (Tempo-Temperatura-Transformação) e CCT (Transformação por Resfriamento Contínuo):</strong> mostram as fases resultantes em função da temperatura e da taxa de resfriamento. Cruciais para definir parâmetros de tratamento térmico.</p>
        <ul>
          <li><strong>Resfriamento lento (forno):</strong> perlita grossa (ferrita + cementita lamelar).</li>
          <li><strong>Resfriamento moderado (ar):</strong> perlita fina.</li>
          <li><strong>Resfriamento rápido (óleo, água, polímero):</strong> martensita (estrutura muito dura e frágil).</li>
          <li><strong>Austêmpera:</strong> resfriamento rápido até temperatura acima de Ms, mantido isotermicamente → bainita (boa combinação de resistência e tenacidade).</li>
        </ul>`
      },
      {
        title:"Principais Tratamentos",
        icon:"local_fire_department",
        content:`<ul>
          <li><strong>Recozimento:</strong> aquecimento e resfriamento lento (forno) — reduz dureza, alivia tensões, refina grão. Tipos: pleno, alívio de tensões, esferoidização (para aços com alto carbono).</li>
          <li><strong>Normalização:</strong> aquecimento acima da zona crítica + resfriamento ao ar — grão refinado, estrutura homogênea.</li>
          <li><strong>Têmpera:</strong> aquecimento + resfriamento rápido — martensita. Meios de resfriamento: água (severidade alta), óleo, polímero, ar forçado.</li>
          <li><strong>Revenimento:</strong> reaquecimento da martensita a uma temperatura abaixo da crítica — reduz fragilidade, alivia tensões, ajusta dureza/resistência.</li>
          <li><strong>Martêmpera (martempering):</strong> resfriamento até acima de Ms, mantido para equalizar temperatura, depois resfriado — reduz distorções e trincas.</li>
        </ul>`
      },
      {
        title:"Tratamentos Termoquímicos",
        icon:"science",
        content:`<ul>
          <li><strong>Cementação:</strong> adiciona carbono à superfície de aço de baixo carbono (≈0,2% C). Têmpera posterior → superfície dura (martensítica) + núcleo tenaz. Meios: sólida (carvão), gasosa (gás endotérmico + metano/propano), líquida (banho de sais).</li>
          <li><strong>Nitretação:</strong> adiciona nitrogênio à superfície (500-530°C), sem necessidade de têmpera — muito alta dureza superficial, boa resistência ao desgaste e à corrosão. Gasosa, líquida (sal), iônica (plasma).</li>
          <li><strong>Carbonitretação:</strong> adiciona carbono e nitrogênio simultaneamente — temperatura mais baixa que a cementação.</li>
          <li><strong>Têmpera superficial:</strong> por indução (elétrica) ou chama — aquece só a superfície, seguido de resfriamento rápido. Excelente para dentes de engrenagens, eixos.</li>
        </ul>`
      },
      {
        title:"Controle e Ensaios",
        icon:"analytics",
        content:`<ul>
          <li><strong>Têmperabilidade (ensaio Jominy):</strong> ensaio padronizado (ABNT, ASTM) que mede a capacidade do aço de endurecer em profundidade. Uma amostra cilíndrica é aquecida e jateada com água em uma extremidade; a dureza é medida ao longo do comprimento.</li>
          <li><strong>Fornos de tratamento térmico:</strong> contínuos (esteira, passa-passas), batelada, a vácuo (sem oxidação), com atmosfera controlada (endotérmica, exotérmica, nitrogênio).</li>
          <li><strong>Atmosferas controladas:</strong> evitam descarbonetação/oxidação. Potencial de carbono controlado por sonda de oxigênio.</li>
          <li><strong>Distorções e tensões residuais:</strong> inevitáveis na têmpera — minimizadas por projeto, têmpera temperada, alívio intermediário.</li>
          <li><strong>Ensaios de dureza:</strong> Brinell (carga alta, esfera de aço/carbeto), Rockwell (carga baixa, penetrador cônico/esférico), Vickers (pirâmide de diamante, microdureza).</li>
        </ul>`
      }
    ]
  }
];
