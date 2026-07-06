window.SITE_DATA = {
  "categorias": [
    {
      "id": "pcp",
      "nome": "Planejamento e Controle da Produção",
      "icone": "calendar-clock",
      "cor": "#2563eb",
      "descricao": "Fundamentos do PCP: planejamento, programação e controle da produção industrial.",
      "subtopicos": [
        {
          "titulo": "Planejamento da produção",
          "definicao": "Processo de definição de metas produtivas, alocação de recursos e estabelecimento de diretrizes para atender à demanda prevista no curto, médio e longo prazo. Envolve decisões sobre volumes, prazos e capacidades, funcionando como guia mestre para toda a operação fabril.",
          "topicos": [
            "Previsão de demanda",
            "Plano agregado",
            "PMP",
            "Capacidade produtiva"
          ],
          "formula": "",
          "aplicacoes": [
            "Definição do mix de produção mensal",
            "Planejamento de turnos e horas-extras",
            "Dimensionamento de recursos produtivos"
          ]
        },
        {
          "titulo": "Programação da produção",
          "definicao": "Etapa que detalha o sequenciamento das ordens de produção no tempo, definindo quais produtos serão fabricados, em quais máquinas, em quais quantidades e em que momento. Traduz o plano mestre em ordens executáveis no chão de fábrica.",
          "topicos": [
            "Sequenciamento",
            "Carregamento",
            "Liberação de ordens",
            "Heurísticas de programação"
          ],
          "formula": "",
          "aplicacoes": [
            "Programação diária de linhas de montagem",
            "Alocação de ordens em máquinas com restrições",
            "Uso de software APS para otimização"
          ]
        },
        {
          "titulo": "Controle da produção",
          "definicao": "Acompanhamento sistemático da execução produtiva para verificar se o que foi planejado está sendo cumprido. Identifica desvios entre o programado e o realizado, acionando ações corretivas para manter o fluxo dentro dos prazos e custos estabelecidos.",
          "topicos": [
            "Apontamento de produção",
            "Indicadores de desempenho",
            "OEE",
            "Desvios e correções"
          ],
          "formula": "OEE = Disponibilidade × Performance × Qualidade",
          "aplicacoes": [
            "Acompanhamento diário de ordens via sistemas MES",
            "Análise de gargalos produtivos",
            "Relatórios de eficiência por centro de trabalho"
          ]
        },
        {
          "titulo": "Balanceamento de linhas",
          "definicao": "Técnica de distribuição uniforme das cargas de trabalho entre as estações de uma linha de produção, minimizando o tempo ocioso e maximizando a eficiência. Busca igualar o tempo de ciclo de cada estação ao takt time do sistema produtivo.",
          "topicos": [
            "Tempo de ciclo",
            "Takt time",
            "Estações de trabalho",
            "Índice de balanceamento"
          ],
          "formula": "IE = (Σ ti / (n × tc)) × 100%",
          "aplicacoes": [
            "Linhas de montagem automotiva",
            "Linhas de eletrônicos",
            "Redução de gargalos em manufatura"
          ]
        },
        {
          "titulo": "Sequenciamento de ordens",
          "definicao": "Processo de ordenação das ordens de produção em uma sequência lógica que otimiza critérios como menor tempo total, menor atraso ou maior uso de capacidade. Utiliza regras como FIFO, EDD, SPT e algoritmos avançados de otimização.",
          "topicos": [
            "Regras de prioridade",
            "EDD",
            "SPT",
            "Johnson para 2 máquinas"
          ],
          "formula": "",
          "aplicacoes": [
            "Sequenciamento de ordens em fábricas têxteis",
            "Priorização de pedidos urgentes",
            "Programação em ambientes job shop"
          ]
        },
        {
          "titulo": "Controle de capacidade produtiva",
          "definicao": "Atividade que verifica se a capacidade instalada (mão de obra, máquinas, turnos) é suficiente para cumprir o plano de produção. Ajusta recursos por meio de horas extras, subcontratação ou alteração de turnos quando há desequilíbrio entre carga e capacidade.",
          "topicos": [
            "CRP — Capacity Requirements Planning",
            "Capacidade disponível",
            "Capacidade necessária",
            "Nivelamento de recursos"
          ],
          "formula": "",
          "aplicacoes": [
            "Cálculo de capacidade em fundições",
            "Planejamento de turnos extras em indústria alimentícia",
            "Simulação de cenários de expansão"
          ]
        },
        {
          "titulo": "Previsão de demanda",
          "definicao": "Estimativa das quantidades de produtos ou serviços que os clientes comprarão em um período futuro. Emprega métodos quantitativos (séries temporais, causais) e qualitativos (painel de especialistas, delphi) para subsidiar o planejamento produtivo e financeiro.",
          "topicos": [
            "Médias móveis",
            "Suavização exponencial",
            "Sazonalidade",
            "Erro de previsão (MAD, MAPE)"
          ],
          "formula": "Ft+1 = α × Dt + (1 − α) × Ft",
          "aplicacoes": [
            "Previsão de vendas sazonais no varejo",
            "Planejamento de compras de matérias-primas",
            "Dimensionamento de estoques de segurança"
          ]
        },
        {
          "titulo": "Planejamento agregado",
          "definicao": "Planejamento de médio prazo (6 a 18 meses) que define taxas de produção, níveis de estoque e força de trabalho em termos agregados — famílias de produtos, não itens individuais. Busca minimizar custos totais atendendo à demanda prevista com recursos disponíveis.",
          "topicos": [
            "Estratégia de perseguição",
            "Estratégia nivelada",
            "Estratégia mista",
            "Programação linear"
          ],
          "formula": "",
          "aplicacoes": [
            "Planejamento semestral de produção em montadoras",
            "Dimensionamento de quadro de funcionários",
            "Decisão entre produzir ou estocar"
          ]
        },
        {
          "titulo": "Plano Mestre de Produção (PMP)",
          "definicao": "Desdobramento do planejamento agregado em itens finais para horizontes de 6 a 12 semanas. Estabelece quanto e quando produzir cada produto acabado, servindo como entrada principal para o cálculo de necessidade de materiais (MRP).",
          "topicos": [
            "MPS — Master Production Schedule",
            "Disponível para promessa (ATP)",
            "Horizonte de planejamento",
            "Explosão de materiais"
          ],
          "formula": "ATP = Saldo disponível + Produção programada − Pedidos confirmados",
          "aplicacoes": [
            "Programação semanal em indústria moveleira",
            "Gestão de entregas ao cliente final",
            "Interface com vendas e logística"
          ]
        },
        {
          "titulo": "MRP — Material Requirements Planning",
          "definicao": "Sistema lógico que calcula as necessidades de materiais a partir da demanda independente (PMP), da lista de materiais (BOM) e dos estoques disponíveis. Determina quantidades e momentos das ordens de compra e produção para garantir o abastecimento sem excessos.",
          "topicos": [
            "Explosão da BOM",
            "Necessidade líquida",
            "Lead time offset",
            "Planejamento de necessidades"
          ],
          "formula": "NL = NB − ED − RP",
          "aplicacoes": [
            "Cálculo de compras em indústria metalúrgica",
            "Planejamento de componentes eletrônicos",
            "Gestão de materiais dependentes"
          ]
        },
        {
          "titulo": "MRP II",
          "definicao": "Evolução do MRP que integra o planejamento de materiais com recursos de capacidade, finanças, compras e vendas em um sistema unificado. Permite simular cenários de produção considerando restrições de máquinas, mão de obra e fluxo de caixa.",
          "topicos": [
            "Manufacturing Resource Planning",
            "Simulação de cenários",
            "Fechamento do ciclo",
            "Integração financeira"
          ],
          "formula": "",
          "aplicacoes": [
            "Planejamento fabril integrado ao orçamento",
            "Simulação de expansão de capacidade",
            "Fechamento financeiro mensal alinhado à produção"
          ]
        },
        {
          "titulo": "ERP — Enterprise Resource Planning",
          "definicao": "Sistema integrado de gestão que unifica todos os processos de negócio (produção, finanças, RH, logística, vendas) em uma única base de dados. O MRP é um módulo dentro do ERP que trata especificamente do planejamento de materiais e capacidade.",
          "topicos": [
            "Módulos integrados",
            "SAP / Oracle / Totvs",
            "Implementação e parametrização",
            "Integração com WMS e TMS"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão integrada da cadeia de suprimentos",
            "Automação de processos financeiros",
            "Visibilidade em tempo real das operações"
          ]
        },
        {
          "titulo": "APS — Advanced Planning and Scheduling",
          "definicao": "Sistema avançado de planejamento e programação que utiliza algoritmos de otimização (programação linear, metaheurísticas) para gerar cronogramas factíveis considerando restrições complexas de capacidade, materiais e prazos simultaneamente.",
          "topicos": [
            "Algoritmos genéticos",
            "Otimização restritiva",
            "Programação finita",
            "Simulação de cenários"
          ],
          "formula": "",
          "aplicacoes": [
            "Programação de produção em indústrias químicas",
            "Otimização de sequenciamento em bebidas",
            "Planejamento com restrições de validade"
          ]
        }
      ]
    },
    {
      "id": "qualidade",
      "nome": "Gestão da Qualidade",
      "icone": "badge-check",
      "cor": "#16a34a",
      "descricao": "Sistemas de gestão, ferramentas e normas para garantia da qualidade industrial.",
      "subtopicos": [
        {
          "titulo": "Controle de qualidade",
          "definicao": "Conjunto de atividades operacionais de verificação e inspeção para assegurar que os produtos e processos atendam aos requisitos especificados. Inclui medições, ensaios e análises ao longo de todo o fluxo produtivo para identificar não conformidades.",
          "topicos": [
            "Inspeção por amostragem",
            "Atributos vs variáveis",
            "Planos de amostragem",
            "Inspeção na fonte"
          ],
          "formula": "",
          "aplicacoes": [
            "Inspeção de lotes recebidos de fornecedores",
            "Controle dimensional de peças usinadas",
            "Verificação de conformidade em linhas de envase"
          ]
        },
        {
          "titulo": "Garantia da qualidade",
          "definicao": "Conjunto de ações planejadas e sistemáticas necessárias para proporcionar confiança de que um produto ou serviço atenderá aos requisitos de qualidade. Foca na prevenção de defeitos por meio da estruturação de processos, documentação e auditorias.",
          "topicos": [
            "Sistema da qualidade",
            "Procedimentos documentados",
            "Rastreabilidade",
            "Acreditação"
          ],
          "formula": "",
          "aplicacoes": [
            "Implementação de SGQ baseado na ISO 9001",
            "Auditorias internas de processo",
            "Programas de rastreabilidade em alimentos"
          ]
        },
        {
          "titulo": "Inspeção de processos",
          "definicao": "Atividade de monitoramento contínuo dos parâmetros de processo para garantir que as variações se mantenham dentro dos limites especificados. Pode ser realizada por amostragem estatística ou censo, com uso de instrumentos de medição e dispositivos automáticos.",
          "topicos": [
            "Inspeção na linha",
            "Controle dimensional",
            "Ensaios destrutivos e não destrutivos",
            "Carta de controle"
          ],
          "formula": "",
          "aplicacoes": [
            "Monitoramento de temperatura em tratamento térmico",
            "Inspeção visual automatizada em eletrônicos",
            "Medição de dureza em lotes metalúrgicos"
          ]
        },
        {
          "titulo": "Auditorias da qualidade",
          "definicao": "Processo sistemático, independente e documentado para obter evidências objetivas e avaliar a conformidade dos processos e produtos com critérios pré-estabelecidos. Divide-se em auditorias de primeira, segunda e terceira parte.",
          "topicos": [
            "Auditoria interna",
            "Auditoria de fornecedores",
            "Auditoria de certificação",
            "Non-conformity report"
          ],
          "formula": "",
          "aplicacoes": [
            "Auditoria interna pré-certificação ISO 9001",
            "Auditoria de fornecedores automotivos",
            "Auditorias de manutenção de certificação"
          ]
        },
        {
          "titulo": "ISO 9001:2025",
          "definicao": "Norma internacional que especifica requisitos para um Sistema de Gestão da Qualidade, focando na capacidade de fornecer produtos e serviços conformes e na melhoria contínua da satisfação do cliente. Estrutura-se em cláusulas baseadas no ciclo PDCA.",
          "topicos": [
            "Contexto da organização",
            "Liderança",
            "Planejamento",
            "Avaliação de desempenho"
          ],
          "formula": "",
          "aplicacoes": [
            "Certificação de SGQ em indústrias",
            "Estruturação de processos documentados",
            "Melhoria contínua baseada em indicadores"
          ]
        },
        {
          "titulo": "ISO 14001:2024",
          "definicao": "Norma internacional para Sistemas de Gestão Ambiental que estabelece requisitos para identificar, controlar e reduzir impactos ambientais das operações. Adota a abordagem PDCA e o ciclo de melhoria contínua para gestão de aspectos ambientais.",
          "topicos": [
            "Aspectos ambientais",
            "Requisitos legais",
            "Emergências ambientais",
            "Indicadores de desempenho ambiental"
          ],
          "formula": "",
          "aplicacoes": [
            "Licenciamento ambiental industrial",
            "Programas de redução de resíduos",
            "Gestão de efluentes e emissões"
          ]
        },
        {
          "titulo": "ISO 45001:2023",
          "definicao": "Norma que define requisitos para Sistemas de Gestão de Saúde e Segurança Ocupacional, ajudando organizações a prevenir lesões e doenças relacionadas ao trabalho. Integra-se com ISO 9001 e ISO 14001 no modelo de estrutura de alto nível (HLS).",
          "topicos": [
            "Identificação de perigos",
            "Avaliação de riscos",
            "Controles operacionais",
            "Investigação de incidentes"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de segurança em fábricas",
            "Programas de ergonomia no trabalho",
            "Redução de taxas de acidentes"
          ]
        },
        {
          "titulo": "CEP — Controle Estatístico do Processo",
          "definicao": "Metodologia estatística de monitoramento contínuo de processos produtivos por meio de gráficos de controle, detectando variações anormais antes que gerem produtos não conformes. Baseia-se nos princípios de Shewhart e na análise de variabilidade.",
          "topicos": [
            "Gráficos X̄-R",
            "Gráficos X̄-S",
            "Gráficos p, np, c, u",
            "Capacidade Cp e Cpk"
          ],
          "formula": "LSC = X̄ + A₂R; LC = X̄; LIC = X̄ − A₂R",
          "aplicacoes": [
            "Controle dimensional em linha de usinagem",
            "Monitoramento de peso líquido em envase",
            "Análise de estabilidade em processos químicos"
          ]
        },
        {
          "titulo": "Seis Sigma",
          "definicao": "Metodologia estruturada de melhoria que visa reduzir a variabilidade dos processos a níveis de 3,4 defeitos por milhão de oportunidades (DPMO). Combina ferramentas estatísticas e gerenciais para alcançar excelência operacional orientada a dados.",
          "topicos": [
            "DMAIC",
            "DMADV",
            "Papéis Belts",
            "DPMO e nível sigma"
          ],
          "formula": "DPMO = (Nº defeitos / (Nº unidades × Nº oportunidades)) × 10⁶",
          "aplicacoes": [
            "Redução de refugos em injeção plástica",
            "Otimização de processos bancários",
            "Melhoria de lead time logístico"
          ]
        },
        {
          "titulo": "Lean Six Sigma",
          "definicao": "Integração das filosofias Lean Manufacturing (eliminação de desperdícios) e Seis Sigma (redução de variabilidade) em uma abordagem única de melhoria contínua. Utiliza o DMAIC como estrutura e incorpora ferramentas lean como VSM e 5S.",
          "topicos": [
            "DMAIC + Lean",
            "VSM",
            "Redução de desperdícios",
            "Fluxo puxado"
          ],
          "formula": "",
          "aplicacoes": [
            "Melhoria integrada em indústria farmacêutica",
            "Otimização de fluxo hospitalar",
            "Projetos de redução de custos logísticos"
          ]
        },
        {
          "titulo": "PDCA e SDCA",
          "definicao": "Ciclo PDCA (Plan-Do-Check-Act) é o método iterativo de melhoria contínua composto por quatro etapas: planejar, executar, verificar e agir corretivamente. O SDCA (Standardize-Do-Check-Act) é usado para padronizar e estabilizar processos antes de melhorá-los.",
          "topicos": [
            "Ciclo de Deming",
            "Padronização",
            "Ação corretiva",
            "Melhoria contínua"
          ],
          "formula": "",
          "aplicacoes": [
            "Estruturação de projetos de melhoria",
            "Estabilização de novos processos",
            "Rotina de gestão da qualidade"
          ]
        },
        {
          "titulo": "MASP — Método de Análise e Solução de Problemas",
          "definicao": "Metodologia estruturada de 8 etapas para identificação, análise e eliminação de problemas crônicos na qualidade. Derivado do QC Story japonês, utiliza ferramentas como diagrama de Ishikawa, 5 porquês e gráfico de Pareto em sua aplicação.",
          "topicos": [
            "Identificação do problema",
            "Análise de causas",
            "Plano de ação (5W2H)",
            "Verificação dos resultados"
          ],
          "formula": "",
          "aplicacoes": [
            "Eliminação de falhas recorrentes em produção",
            "Redução de reclamações de clientes",
            "Projetos de melhoria em processos administrativos"
          ]
        },
        {
          "titulo": "FMEA — Failure Mode and Effects Analysis",
          "definicao": "Ferramenta preventiva que identifica modos de falha potenciais em produtos ou processos, avalia seus efeitos e riscos (severidade, ocorrência, detecção) e prioriza ações para reduzir ou eliminar riscos. Existem FMEA de projeto, processo e sistema.",
          "topicos": [
            "RPN — Risk Priority Number",
            "Modo de falha",
            "Efeito e causa",
            "Plano de ação preventiva"
          ],
          "formula": "RPN = S × O × D",
          "aplicacoes": [
            "Análise de riscos em projetos automotivos",
            "Prevenção de falhas em processos aeronáuticos",
            "Desenvolvimento de produtos eletrônicos"
          ]
        },
        {
          "titulo": "APQP — Advanced Product Quality Planning",
          "definicao": "Estrutura padronizada de planejamento da qualidade de produtos, amplamente usada no setor automotivo. Organiza em cinco fases o desenvolvimento desde o conceito até o lançamento, garantindo que todos os requisitos de qualidade sejam atendidos antes da produção em série.",
          "topicos": [
            "Fase de planejamento",
            "Design do produto",
            "Design do processo",
            "Validação"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenvolvimento de novos modelos automotivos",
            "Qualificação de fornecedores",
            "Lançamento de produtos industriais complexos"
          ]
        },
        {
          "titulo": "PPAP — Production Part Approval Process",
          "definicao": "Processo padronizado do setor automotivo que certifica que todos os requisitos de engenharia e qualidade de um componente foram atendidos antes do início da produção em série. Exige 18 itens de submissão, incluindo dimensional, testes de material e capabilidade.",
          "topicos": [
            "Níveis de submissão",
            "PSW",
            "Amostras iniciais",
            "Capacidade de processo"
          ],
          "formula": "",
          "aplicacoes": [
            "Homologação de peças automotivas",
            "Validação de ferramentais de estamparia",
            "Liberação de fornecedores de autopeças"
          ]
        },
        {
          "titulo": "MSA — Measurement Systems Analysis",
          "definicao": "Conjunto de estudos estatísticos para avaliar a qualidade de sistemas de medição, incluindo repetitividade, reprodutibilidade, viés, linearidade e estabilidade. Garante que os dados coletados são confiáveis para decisões de controle de qualidade.",
          "topicos": [
            "R&R (Gage R&R)",
            "Repetitividade",
            "Reprodutibilidade",
            "Estudo de viés"
          ],
          "formula": "% R&R = (σ² MS / σ² Total) × 100%",
          "aplicacoes": [
            "Validação de paquímetros e micrômetros",
            "Qualificação de sistemas de medição automatizados",
            "Controle de balanças em linhas de envase"
          ]
        },
        {
          "titulo": "SPC — Statistical Process Control",
          "definicao": "Aplicação de métodos estatísticos para monitorar e controlar a variabilidade de processos produtivos em tempo real. Utiliza gráficos de controle, histogramas e análise de capacidade para detectar desvios e manter o processo dentro dos limites especificados.",
          "topicos": [
            "Variação comum vs especial",
            "Limites de controle",
            "Subgrupos racionais",
            "Capabilidade Cp/Cpk"
          ],
          "formula": "Cpk = min[(LSE − μ)/3σ; (μ − LIE)/3σ]",
          "aplicacoes": [
            "Monitoramento em tempo real em indústria de semicondutores",
            "Controle de processos contínuos em papel e celulose",
            "Dashboard de qualidade fabril"
          ]
        },
        {
          "titulo": "Kaizen",
          "definicao": "Filosofia japonesa de melhoria contínua incremental baseada na participação de todos os colaboradores, do chão de fábrica à alta direção. Kaizen significa literalmente \"mudança para melhor\" e é operacionalizado por meio de eventos focados (kaizen events) e pequenas melhorias diárias.",
          "topicos": [
            "Evento Kaizen",
            "Gemba Kaizen",
            "Fluxo contínuo",
            "Melhoria incremental vs disruptiva"
          ],
          "formula": "",
          "aplicacoes": [
            "Redução de setup em prensas",
            "Melhoria de layout de células",
            "Otimização de fluxo de materiais"
          ]
        },
        {
          "titulo": "Programa 5S",
          "definicao": "Metodologia de gestão visual e organização do ambiente de trabalho baseada em cinco sensos: Seiri (utilização), Seiton (ordenação), Seisō (limpeza), Seiketsu (padronização) e Shitsuke (disciplina). Cria as condições básicas para qualidade, produtividade e segurança.",
          "topicos": [
            "Senso de utilização",
            "Senso de ordenação",
            "Senso de limpeza",
            "Auditoria 5S"
          ],
          "formula": "",
          "aplicacoes": [
            "Organização de postos de trabalho",
            "Redução de desperdícios de movimentação",
            "Criação de cultura de disciplina operacional"
          ]
        },
        {
          "titulo": "Poka-Yoke",
          "definicao": "Dispositivo ou mecanismo à prova de falhas que previne a ocorrência de defeitos no momento em que ocorrem ou os detecta imediatamente. Pode ser de contato, valor constante ou passo-a-passo, e é uma ferramenta essencial do zero defeito no Lean.",
          "topicos": [
            "Dispositivos de detecção",
            "Prevenção vs detecção",
            "Sistemas de parada automática",
            "Controles físicos e sensores"
          ],
          "formula": "",
          "aplicacoes": [
            "Gabaritos que impedem montagem invertida",
            "Sensores de presença em linhas de montagem",
            "Contadores automáticos de peças"
          ]
        },
        {
          "titulo": "DMAIC",
          "definicao": "Acrônimo das cinco fases do método de melhoria do Seis Sigma: Define (definir), Measure (medir), Analyze (analisar), Improve (melhorar) e Control (controlar). Estrutura projetos de forma sistemática, orientada a dados e focada na eliminação de causas raiz de defeitos.",
          "topicos": [
            "Define — Project Charter",
            "Measure — Baseline",
            "Analyze — Causa raiz",
            "Improve — Soluções",
            "Control — Plano de controle"
          ],
          "formula": "",
          "aplicacoes": [
            "Projetos de redução de defeitos em fundição",
            "Otimização de processos administrativos",
            "Redução de variabilidade em processos químicos"
          ]
        },
        {
          "titulo": "Benchmarking",
          "definicao": "Processo sistemático de comparação de produtos, serviços e práticas organizacionais com os melhores do mercado (benchmarks), visando identificar oportunidades de melhoria e superar o desempenho da concorrência. Pode ser competitivo, funcional ou interno.",
          "topicos": [
            "Benchmarking competitivo",
            "Benchmarking funcional",
            "Indicadores de comparação",
            "Análise de lacunas (gap analysis)"
          ],
          "formula": "",
          "aplicacoes": [
            "Comparação de OEE com líderes do setor",
            "Identificação de melhores práticas logísticas",
            "Análise de custos de qualidade frente à concorrência"
          ]
        }
      ]
    },
    {
      "id": "lean",
      "nome": "Lean Manufacturing",
      "icone": "package",
      "cor": "#d97706",
      "descricao": "Produção enxuta: eliminação de desperdícios, fluxo contínuo e melhoria contínua.",
      "subtopicos": [
        {
          "titulo": "Produção enxuta",
          "definicao": "Filosofia de gestão originada do Sistema Toyota de Produção que busca maximizar o valor ao cliente eliminando sistematicamente desperdícios. Opera com menos recursos (estoque, espaço, mão de obra) e maior flexibilidade, produzindo exatamente o necessário no momento necessário.",
          "topicos": [
            "Sistema Toyota de Produção",
            "Valor sob perspectiva do cliente",
            "Fluxo puxado",
            "Melhoria contínua"
          ],
          "formula": "",
          "aplicacoes": [
            "Transformação lean em indústrias de manufatura",
            "Redução de lead time em processos",
            "Implementação de células de produção"
          ]
        },
        {
          "titulo": "Eliminação dos 8 desperdícios (Muda)",
          "definicao": "Identificação e remoção das oito categorias de atividades que não agregam valor: superprodução, espera, transporte, excesso de processamento, estoque, movimentação, defeitos e talento subutilizado. O acrônimo DOWNTIME resume cada desperdício.",
          "topicos": [
            "Superprodução",
            "Espera",
            "Transporte",
            "Superprocessamento",
            "Estoque excessivo",
            "Movimentação",
            "Defeitos",
            "Talento subutilizado"
          ],
          "formula": "",
          "aplicacoes": [
            "Mapeamento de desperdícios em linhas de montagem",
            "Redução de movimentação em almoxarifados",
            "Eliminação de esperas em processos administrativos"
          ]
        },
        {
          "titulo": "Just in Time (JIT)",
          "definicao": "Pilar do Lean Manufacturing que preconiza produzir apenas o necessário, na quantidade necessária e no momento necessário. Elimina estoques intermediários, reduz lead times e expõe problemas ocultos no fluxo produtivo através da redução dos estoques de proteção.",
          "topicos": [
            "Fluxo contínuo",
            "Takt time",
            "Sistema puxado",
            "Kanban"
          ],
          "formula": "",
          "aplicacoes": [
            "Abastecimento sincronizado de linhas de montagem",
            "Produção sob demanda em indústria de eletrônicos",
            "Redução drástica de WIP"
          ]
        },
        {
          "titulo": "Kanban",
          "definicao": "Sistema visual de sinalização que controla o fluxo de materiais e a produção por meio de cartões ou sinais eletrônicos. Opera como um sistema puxado: cada processo retira do anterior somente o que precisa, na quantidade indicada pelo kanban.",
          "topicos": [
            "Kanban de produção",
            "Kanban de movimentação",
            "Cartão kanban",
            "Loop kanban"
          ],
          "formula": "Nº kanbans = (D × L × (1 + S)) / Q",
          "aplicacoes": [
            "Abastecimento de linhas na indústria automotiva",
            "Gestão visual de estoques intermediários",
            "Sinalização de reposição em supermercados"
          ]
        },
        {
          "titulo": "Heijunka — Nivelamento da produção",
          "definicao": "Técnica de nivelamento do volume e mix de produção para absorver flutuações de demanda sem gerar picos de produção ou estoques excessivos. Distribui a produção de diferentes modelos em pequenos lotes ao longo do dia, estabilizando a carga de trabalho.",
          "topicos": [
            "Sequenciamento nivelado",
            "Caixa Heijunka",
            "Produção em pequenos lotes",
            "Pico de produção"
          ],
          "formula": "",
          "aplicacoes": [
            "Nivelamento de modelos em montadoras",
            "Programação nivelada em indústria de alimentos",
            "Redução de flutuação na carga fabril"
          ]
        },
        {
          "titulo": "Jidoka — Automação com toque humano",
          "definicao": "Segundo pilar do Lean, confere às máquinas e operadores a capacidade de detectar anormalidades e parar imediatamente a produção, evitando a geração de defeitos em série. Significa \"automação com inteligência humana\", combinando máquina e autonomia.",
          "topicos": [
            "Parada automática",
            "Andon",
            "Poka-yoke",
            "Separação homem-máquina"
          ],
          "formula": "",
          "aplicacoes": [
            "Sensores de quebra de ferramenta em CNC",
            "Sistemas de parada por torque em montagem",
            "Detecção automática de não conformidades"
          ]
        },
        {
          "titulo": "Andon",
          "definicao": "Sistema de sinalização visual e sonora que alerta sobre anormalidades na linha de produção, permitindo parada imediata para correção. Geralmente usa painéis luminosos com cores (verde = normal, amarelo = alerta, vermelho = parada) para comunicação em tempo real.",
          "topicos": [
            "Painel visual",
            "Sinalização de problemas",
            "Parada de linha",
            "Resposta rápida"
          ],
          "formula": "",
          "aplicacoes": [
            "Chão de fábrica automotivo",
            "Linhas de montagem de eletrodomésticos",
            "Sistemas de chamada de manutenção"
          ]
        },
        {
          "titulo": "Takt Time",
          "definicao": "Ritmo de produção necessário para atender à demanda do cliente no tempo disponível. É a frequência com que uma peça ou produto deve ser produzido para sincronizar a produção com as vendas. Serve como referência para o balanceamento de linhas.",
          "topicos": [
            "Ritmo da demanda",
            "Tempo disponível vs necessário",
            "Sincronização produção-venda",
            "Balanceamento"
          ],
          "formula": "Takt Time = Tempo Disponível / Demanda do Cliente",
          "aplicacoes": [
            "Dimensionamento de linhas de produção",
            "Definição do número de operadores necessários",
            "Avaliação se a fábrica atende ao volume demandado"
          ]
        },
        {
          "titulo": "Tempo de ciclo",
          "definicao": "Intervalo de tempo entre a produção de duas unidades consecutivas em um processo produtivo. Representa a capacidade real da operação e deve ser menor ou igual ao takt time para que a demanda seja atendida sem atrasos.",
          "topicos": [
            "Tempo de operação",
            "Tempo de máquina",
            "Tempo de setup",
            "Lead time"
          ],
          "formula": "Tempo de Ciclo = Tempo Total de Operação / Nº de Peças Produzidas",
          "aplicacoes": [
            "Medição de produtividade em células de manufatura",
            "Comparação com takt time para identificar gargalos",
            "Análise de capacidade de equipamentos"
          ]
        },
        {
          "titulo": "Fluxo contínuo",
          "definicao": "Estado ideal da produção enxuta no qual os produtos se movem de uma etapa para a seguinte sem paradas, filas ou estoques intermediários. Cada peça é processada e imediatamente transferida à próxima operação, reduzindo drasticamente o lead time total.",
          "topicos": [
            "Células em U",
            "One-piece flow",
            "Redução de WIP",
            "Layout enxuto"
          ],
          "formula": "",
          "aplicacoes": [
            "Reorganização de layout em células de manufatura",
            "Eliminação de transportes entre processos",
            "Fluxo unitário em montagem de componentes"
          ]
        },
        {
          "titulo": "Value Stream Mapping (VSM)",
          "definicao": "Ferramenta de mapeamento que representa visualmente todo o fluxo de materiais e informações desde o fornecedor até o cliente final. Identifica atividades que agregam e que não agregam valor, servindo como guia para o projeto do estado futuro enxuto.",
          "topicos": [
            "Estado atual",
            "Estado futuro",
            "Ícones VSM",
            "Kaizen bursts"
          ],
          "formula": "",
          "aplicacoes": [
            "Diagnóstico de fluxo produtivo em fábricas",
            "Identificação de desperdícios ocultos",
            "Plano de transformação lean"
          ]
        },
        {
          "titulo": "Trabalho padronizado",
          "definicao": "Documentação detalhada e padronização da melhor sequência de operações conhecida para cada atividade produtiva. Estabelece o método seguro, eficiente e reprodutível que serve como base para o kaizen e a garantia da qualidade consistente.",
          "topicos": [
            "Folha de operação padrão",
            "Tempo padrão",
            "Sequência padronizada",
            "Estoque padrão"
          ],
          "formula": "",
          "aplicacoes": [
            "Criação de instruções de trabalho em linhas de montagem",
            "Treinamento de novos operadores",
            "Auditoria de processo padronizado"
          ]
        },
        {
          "titulo": "SMED — Troca Rápida de Ferramentas",
          "definicao": "Metodologia para reduzir o tempo de setup de máquinas e equipamentos a menos de 10 minutos. Separa as atividades de setup interno (com máquina parada) de externo (com máquina operando), convertendo atividades internas em externas para minimizar paradas.",
          "topicos": [
            "Setup interno e externo",
            "Operações paralelas",
            "Padronização de ferramentas",
            "Cunhas e dispositivos de fixação rápida"
          ],
          "formula": "",
          "aplicacoes": [
            "Redução de setup em prensas hidráulicas",
            "Troca rápida em máquinas injetoras",
            "Flexibilização de linhas de envase"
          ]
        },
        {
          "titulo": "TPM — Manutenção Produtiva Total",
          "definicao": "Programa de manutenção que envolve todos os colaboradores na maximização da eficiência dos equipamentos. Busca zero quebra, zero defeito e zero acidente por meio de manutenção autônoma, manutenção planejada e treinamento contínuo.",
          "topicos": [
            "Manutenção autônoma",
            "Manutenção planejada",
            "OEE",
            "6 grandes perdas"
          ],
          "formula": "OEE = Disponibilidade × Performance × Qualidade",
          "aplicacoes": [
            "Programas TPM em indústrias de processo contínuo",
            "Aumento de vida útil de máquinas ferramenta",
            "Redução de paradas não planejadas"
          ]
        },
        {
          "titulo": "Gestão visual",
          "definicao": "Conjunto de práticas que tornam as informações do processo visíveis, intuitivas e acessíveis a todos no ambiente de trabalho. Quadros kanban, painéis andon, marcações de piso (shadow boards) e gráficos de desempenho são exemplos típicos.",
          "topicos": [
            "Painéis de indicadores",
            "Shadow boards",
            "Sinalização de chão",
            "Quadros de gestão à vista"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de indicadores em reuniões diárias",
            "Organização visual de ferramentas",
            "Acompanhamento de produção em tempo real"
          ]
        },
        {
          "titulo": "Mura e Muri",
          "definicao": "Mura representa a variação ou desnível no ritmo de produção que causa desbalanceamento e superlotação entre processos. Muri significa sobrecarga de equipamentos ou operadores além dos limites razoáveis. Ambos geram desperdícios e devem ser eliminados junto com o muda.",
          "topicos": [
            "Variação de demanda",
            "Sobrecarga de trabalho",
            "Nivelamento (Heijunka)",
            "Capacidade vs carga"
          ],
          "formula": "",
          "aplicacoes": [
            "Nivelamento de carga de trabalho",
            "Redução de horas extras excessivas",
            "Prevenção de lesões por esforço repetitivo"
          ]
        },
        {
          "titulo": "Gemba Walk",
          "definicao": "Prática de liderança em que gestores vão até o gemba (local real onde o valor é criado) para observar processos, fazer perguntas e identificar oportunidades de melhoria. Não é inspeção, mas uma forma de respeito e apoio ao time operacional.",
          "topicos": [
            "Observação no chão de fábrica",
            "Liderança lean",
            "Conversa com operadores",
            "Identificação de desperdícios"
          ],
          "formula": "",
          "aplicacoes": [
            "Rotina de gestão diária em indústrias",
            "Identificação de anormalidades no posto de trabalho",
            "Desenvolvimento de liderança lean"
          ]
        },
        {
          "titulo": "Hoshin Kanri",
          "definicao": "Método de desdobramento da estratégia organizacional em metas e planos de ação em todos os níveis hierárquicos. Alinha a direção estratégica com a execução operacional usando o conceito de catchball para garantir o comprometimento de toda a organização.",
          "topicos": [
            "Matriz X",
            "Desdobramento de metas",
            "Catchball",
            "Revisão periódica"
          ],
          "formula": "",
          "aplicacoes": [
            "Desdobramento de metas anuais em plantas fabris",
            "Alinhamento estratégico de indicadores",
            "Gestão por diretrizes em grupos empresariais"
          ]
        },
        {
          "titulo": "Relatório A3",
          "definicao": "Ferramenta padronizada de solução de problemas estruturada em uma única folha A3, contendo: contexto, estado atual, análise de causas, estado futuro, plano de ação e indicadores. Promove pensamento estruturado, concisão e foco no método PDCA.",
          "topicos": [
            "A3 de proposta",
            "A3 de solução de problemas",
            "A3 de status",
            "PDCA no A3"
          ],
          "formula": "",
          "aplicacoes": [
            "Documentação de projetos de melhoria",
            "Análise de desvios de qualidade",
            "Propostas de investimento e mudança"
          ]
        },
        {
          "titulo": "Chaku-Chaku",
          "definicao": "Método de operação em que o operador carrega e descarrega peças em múltiplas máquinas dispostas em sequência, caminhando de uma à outra. Cada máquina processa automaticamente após o carregamento, permitindo que um operador alimente várias máquinas simultaneamente.",
          "topicos": [
            "Célula em U",
            "Multifuncionalidade",
            "Automação de ciclo",
            "Separação homem-máquina"
          ],
          "formula": "",
          "aplicacoes": [
            "Células de usinagem com múltiplos equipamentos",
            "Linhas de montagem automatizadas com supervisão humana",
            "Fabricação de componentes metálicos"
          ]
        },
        {
          "titulo": "Supermercado de linha",
          "definicao": "Área de armazenamento descentralizado localizada próxima aos pontos de uso, que opera sob o princípio do sistema puxado. O processo cliente retira itens do supermercado, e o processo fornecedor repõe exatamente o que foi consumido, gerando um fluxo controlado.",
          "topicos": [
            "Sistema puxado",
            "Ponto de reposição",
            "Kanban de abastecimento",
            "Gestão visual de estoque"
          ],
          "formula": "",
          "aplicacoes": [
            "Abastecimento de componentes em linhas de montagem",
            "Estoque descentralizado em células de produção",
            "Reposição puxada em almoxarifados"
          ]
        }
      ]
    },
    {
      "id": "logistica",
      "nome": "Logística",
      "icone": "truck",
      "cor": "#7c3aed",
      "descricao": "Transporte, distribuição, armazenagem e gestão logística integrada.",
      "subtopicos": [
        {
          "titulo": "Transporte e modais",
          "definicao": "Atividade logística que movimenta materiais e produtos entre pontos da cadeia de suprimentos. Os principais modais são: rodoviário (mais flexível no Brasil), ferroviário (grandes volumes), aquaviário (baixo custo), aéreo (alta velocidade) e dutoviário (fluxo contínuo).",
          "topicos": [
            "Modal rodoviário",
            "Modal ferroviário",
            "Modal aquaviário",
            "Multimodalidade e intermodalidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Seleção de modal para exportação de grãos",
            "Distribuição urbana de encomendas",
            "Transporte de cargas perigosas"
          ]
        },
        {
          "titulo": "Distribuição física",
          "definicao": "Conjunto de operações responsáveis por disponibilizar o produto acabado ao consumidor final no local e momento certos. Envolve armazenagem, gestão de pedidos, separação, carregamento e transporte de entrega, sendo o elo final entre a produção e o mercado.",
          "topicos": [
            "Canais de distribuição",
            "Centros de distribuição",
            "Entregas last mile",
            "Nível de serviço"
          ],
          "formula": "",
          "aplicacoes": [
            "Estruturação de rede de distribuição regional",
            "Otimização de rotas de entrega",
            "Estratégias de distribuição direta vs indireta"
          ]
        },
        {
          "titulo": "Armazenagem e centros de distribuição",
          "definicao": "Atividades de guarda organizada de materiais e produtos em instalações planejadas, combinando espaços físicos, equipamentos de movimentação e sistemas de informação. Centros de distribuição são armazéns focalizados na rápida movimentação e expedição de produtos.",
          "topicos": [
            "Layout de armazém",
            "Endereçamento",
            "Equipamentos de movimentação",
            "Gestão por zonas"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de layout de CD",
            "Dimensionamento de áreas de armazenagem",
            "Automação de armazéns com esteiras e sorters"
          ]
        },
        {
          "titulo": "Cross docking",
          "definicao": "Operação logística em que a carga recebida é imediatamente transferida para a expedição sem passar pela estocagem, reduzindo custos de armazenagem. Pode ser do tipo pré-distribuído (carga já separada por destino) ou consolidado (reagrupado no CD).",
          "topicos": [
            "Cross docking pré-distribuído",
            "Cross docking consolidado",
            "Flow-through",
            "Lead time reduzido"
          ],
          "formula": "",
          "aplicacoes": [
            "Centros de distribuição de supermercados",
            "Operações de e-commerce com alta rotatividade",
            "Recebimento e expedição sincronizados em montadoras"
          ]
        },
        {
          "titulo": "Milk Run",
          "definicao": "Roteiro de coleta programada em que um veículo passa por múltiplos fornecedores em um trajeto definido para consolidar cargas menores em uma única viagem até a fábrica. Reduz custos de frete, frequência de entregas e estoque em trânsito.",
          "topicos": [
            "Roteiro de coleta",
            "Janela de tempo",
            "Consolidação de cargas",
            "Abastecimento JIT"
          ],
          "formula": "",
          "aplicacoes": [
            "Abastecimento de linhas em montadoras",
            "Coleta de insumos de fornecedores regionais",
            "Redução de custos logísticos inbound"
          ]
        },
        {
          "titulo": "Gestão de frotas",
          "definicao": "Administração dos veículos utilizados no transporte de cargas, incluindo aquisição, manutenção, controle de custos, roteirização e monitoramento. Busca maximizar a disponibilidade e produtividade dos veículos enquanto minimiza custos operacionais e de combustível.",
          "topicos": [
            "Rastreamento veicular",
            "Manutenção preventiva",
            "Custo por km rodado",
            "Renovação de frota"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de frotas de entregas urbanas",
            "Monitoramento de caminhões via telemetria",
            "Planejamento de manutenção com base em horas"
          ]
        },
        {
          "titulo": "Fretes e tabelas de frete",
          "definicao": "Sistema de precificação do transporte de cargas, que considera variáveis como distância, peso, cubicagem, tipo de carga e prazo. As tabelas de frete definem os valores de referência e podem ser negociadas entre embarcadores e transportadoras.",
          "topicos": [
            "Frete peso vs frete valor",
            "Pedágio e taxa de risco",
            "Tabela ANTT",
            "Negociação de fretes"
          ],
          "formula": "Frete = (Distância × Custo Variável) + Custo Fixo + Margem",
          "aplicacoes": [
            "Cálculo de frete para orçamentos",
            "Comparação entre transportadoras",
            "Análise de rentabilidade de cargas"
          ]
        },
        {
          "titulo": "Cadeia logística integrada",
          "definicao": "Visão sistêmica que coordena e integra todos os fluxos logísticos — suprimentos, produção e distribuição — como um único sistema. Busca eliminar silos funcionais, compartilhar informações em tempo real e otimizar o desempenho global da cadeia.",
          "topicos": [
            "Integração supply chain",
            "Fluxo de informações",
            "Colaboração entre elos",
            "Indicadores logísticos"
          ],
          "formula": "",
          "aplicacoes": [
            "Integração entre PCP e logística de distribuição",
            "Compartilhamento de previsão de demanda com fornecedores",
            "Sincronização de operações inbound e outbound"
          ]
        },
        {
          "titulo": "Logística reversa",
          "definicao": "Processo de planejamento e operação do fluxo de retorno de produtos, embalagens e materiais do ponto de consumo ao ponto de origem. Visa o reaproveitamento, reciclagem ou descarte adequado, sendo obrigatória por lei em setores como eletroeletrônicos e embalagens.",
          "topicos": [
            "Pós-consumo",
            "Pós-venda",
            "Centros de triagem",
            "Política Nacional de Resíduos Sólidos"
          ],
          "formula": "",
          "aplicacoes": [
            "Logística reversa de embalagens de agrotóxicos",
            "Retorno de produtos defeituosos para recall",
            "Reciclagem de resíduos eletrônicos"
          ]
        },
        {
          "titulo": "Logística internacional",
          "definicao": "Conjunto de operações de transporte, documentação, desembaraço aduaneiro e seguros para movimentação de mercadorias entre países. Envolve conhecimento especializado em comércio exterior, regimes aduaneiros e acordos comerciais bilaterais e multilaterais.",
          "topicos": [
            "Desembaraço aduaneiro",
            "Documentação internacional",
            "Regimes aduaneiros especiais",
            "Drawback"
          ],
          "formula": "",
          "aplicacoes": [
            "Exportação de produtos manufaturados",
            "Importação de insumos industriais",
            "Operações de comércio exterior via portos e aeroportos"
          ]
        },
        {
          "titulo": "Incoterms 2024",
          "definicao": "Conjunto de 11 termos padronizados pela Câmara de Comércio Internacional (CCI) que definem as responsabilidades, riscos e custos entre comprador e vendedor em transações internacionais. Incluem termos para qualquer modal (EXW, FCA, CPT, CIP, DPU, DAP, DDP) e para transporte aquaviário (FAS, FOB, CFR, CIF).",
          "topicos": [
            "EXW — Ex Works",
            "FOB — Free on Board",
            "CIF — Cost Insurance and Freight",
            "DDP — Delivered Duty Paid"
          ],
          "formula": "",
          "aplicacoes": [
            "Definição de responsabilidades em contratos de exportação",
            "Cálculo de custos logísticos internacionais",
            "Negociação de riscos entre importador e exportador"
          ]
        },
        {
          "titulo": "WMS — Warehouse Management System",
          "definicao": "Sistema de software projetado para controlar e otimizar as operações de armazenagem, incluindo recebimento, endereçamento, estocagem, separação (picking), embalagem e expedição. Integra-se com ERP e utiliza tecnologias como RFID e coletores de dados.",
          "topicos": [
            "Endereçamento dinâmico",
            "Picking por onda",
            "Integração ERP-WMS",
            "RFID e código de barras"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de grandes centros de distribuição",
            "Controle de estoque com rastreabilidade por lote",
            "Otimização de rotas de separação"
          ]
        },
        {
          "titulo": "TMS — Transport Management System",
          "definicao": "Sistema de gestão de transporte que automatiza o planejamento, execução e monitoramento de fretes e entregas. Otimiza carregamentos, seleciona transportadoras, calcula fretes, gera documentação e acompanha entregas em tempo real.",
          "topicos": [
            "Roteirização",
            "Consolidação de cargas",
            "Gestão de fretes",
            "Monitoramento de entregas"
          ],
          "formula": "",
          "aplicacoes": [
            "Planejamento de rotas de entregas diárias",
            "Consolidação de cargas para reduzir fretes",
            "Acompanhamento de performance de transportadoras"
          ]
        },
        {
          "titulo": "Roteirização de entregas",
          "definicao": "Definição da sequência de paradas e trajetos mais eficiente para veículos de entrega, considerando restrições como janelas de tempo, capacidade e distâncias. Utiliza algoritmos de otimização como o Problema do Caixeiro Viajante (PCV) e VRP (Vehicle Routing Problem).",
          "topicos": [
            "VRP clássico",
            "Janelas de tempo",
            "Restrições de capacidade",
            "Otimização por algoritmos"
          ],
          "formula": "",
          "aplicacoes": [
            "Roteirização de entregas urbanas de bebidas",
            "Otimização de frotas de distribuição de alimentos",
            "Planejamento de rotas de serviços de campo"
          ]
        },
        {
          "titulo": "Operadores logísticos",
          "definicao": "Empresas prestadoras de serviços logísticos terceirizados (3PL) que oferecem soluções integradas de transporte, armazenagem, gestão de estoques e serviços de valor agregado. Podem atuar como 4PL quando gerenciam toda a cadeia logística do contratante.",
          "topicos": [
            "3PL — Third Party Logistics",
            "4PL — Fourth Party Logistics",
            "Contratos de prestação de serviços",
            "Indicadores SLA"
          ],
          "formula": "",
          "aplicacoes": [
            "Terceirização de operações de CD",
            "Contratação de gestão de transporte dedicada",
            "Operações logísticas integradas para e-commerce"
          ]
        },
        {
          "titulo": "Armazenagem a granel",
          "definicao": "Sistema de estocagem de materiais sem embalagem individual, geralmente grãos, minérios, líquidos ou produtos químicos. Utiliza silos, tanques, e pátios com equipamentos específicos para movimentação e controle de estoque de materiais a granel.",
          "topicos": [
            "Silos e tanques",
            "Pátios de armazenagem",
            "Controle de temperatura e umidade",
            "Equipamentos de movimentação"
          ],
          "formula": "",
          "aplicacoes": [
            "Armazenagem de grãos em cooperativas agrícolas",
            "Estocagem de produtos químicos a granel",
            "Armazenagem de minério de ferro em portos"
          ]
        },
        {
          "titulo": "Picking e packing",
          "definicao": "Picking é o processo de separação e coleta dos itens do estoque para atender aos pedidos dos clientes. Packing é a embalagem e preparação dos produtos separados para expedição. Juntos, representam as operações finais do CD antes do carregamento.",
          "topicos": [
            "Picking por zona",
            "Picking por onda",
            "Picking por voz",
            "Embalagem e consolidação"
          ],
          "formula": "",
          "aplicacoes": [
            "Separação de pedidos em CDs de varejo",
            "Operações de e-commerce com alto volume",
            "Automação de picking com esteiras e robôs"
          ]
        },
        {
          "titulo": "Gestão de armazéns",
          "definicao": "Supervisão e controle das operações diárias de um armazém ou centro de distribuição, incluindo recebimento, estocagem, inventário, separação, expedição e segurança. Integra pessoas, processos e tecnologia para garantir eficiência, acuracidade e produtividade.",
          "topicos": [
            "Recebimento e conferência",
            "Estocagem e endereçamento",
            "Inventário rotativo",
            "Expedição e cross-docking"
          ],
          "formula": "",
          "aplicacoes": [
            "Rotina de gestão de armazéns fabris",
            "Operação de CD para distribuição nacional",
            "Implementação de boas práticas de armazenagem"
          ]
        },
        {
          "titulo": "Centros de distribuição",
          "definicao": "Instalação logística projetada para receber grandes volumes de produtos, armazená-los temporariamente e redistribuí-los em menores quantidades para múltiplos destinos. Diferem de armazéns convencionais pelo foco na rápida movimentação e rotação de estoques.",
          "topicos": [
            "CD dedicado",
            "CD compartilhado",
            "CD regional",
            "Automação de CD"
          ],
          "formula": "",
          "aplicacoes": [
            "Rede de CDs de rede varejista",
            "CD de e-commerce para entregas rápidas",
            "Cross-docking em CDs de atacado"
          ]
        }
      ]
    },
    {
      "id": "supply-chain",
      "nome": "Supply Chain",
      "icone": "layers",
      "cor": "#0891b2",
      "descricao": "Gestão da cadeia de suprimentos, compras e relacionamento com fornecedores.",
      "subtopicos": [
        {
          "titulo": "Cadeia de suprimentos integrada",
          "definicao": "Rede interligada de organizações, pessoas, atividades e informações envolvidas no fluxo de produtos e serviços desde os fornecedores de matéria-prima até o consumidor final. A gestão integrada busca coordenar todos os elos para maximizar o valor gerado ao cliente e reduzir custos totais.",
          "topicos": [
            "Integração vertical",
            "Integração horizontal",
            "Parcerias estratégicas",
            "Governança da cadeia"
          ],
          "formula": "",
          "aplicacoes": [
            "Coordenação entre fabricante e rede de distribuição",
            "Share de informações de demanda com fornecedores",
            "Gestão colaborativa de estoques (CPFR)"
          ]
        },
        {
          "titulo": "Compras e suprimentos",
          "definicao": "Função organizacional responsável pela aquisição de materiais, insumos, serviços e equipamentos necessários à operação da empresa. Inclui seleção de fornecedores, negociação, emissão de pedidos e gestão de contratos, visando menor custo total e segurança de abastecimento.",
          "topicos": [
            "Ciclo de compras",
            "Negociação estratégica",
            "Gestão de contratos",
            "Compras sustentáveis"
          ],
          "formula": "",
          "aplicacoes": [
            "Aquisição de matérias-primas para indústria",
            "Compra de serviços de manutenção",
            "E-procurement em grandes organizações"
          ]
        },
        {
          "titulo": "Planejamento de materiais",
          "definicao": "Processo de determinar as necessidades futuras de materiais, componentes e insumos para atender ao plano de produção. Utiliza dados de demanda, estoques e lead times para calcular as quantidades e momentos de reposição, evitando faltas ou excessos.",
          "topicos": [
            "MRP",
            "Bill of Materials (BOM)",
            "Lead time de reposição",
            "Estoque de segurança"
          ],
          "formula": "Necessidade Líquida = Necessidade Bruta − Estoque Disponível − Recebimentos Programados",
          "aplicacoes": [
            "Planejamento de insumos em indústria química",
            "Gestão de materiais indiretos (MRO)",
            "Abastecimento programado de linhas de produção"
          ]
        },
        {
          "titulo": "Gestão de fornecedores",
          "definicao": "Conjunto de práticas e processos para gerenciar o relacionamento com fornecedores, desde a seleção e contratação até a avaliação de desempenho e desenvolvimento. Busca construir parcerias de longo prazo baseadas em confiança, qualidade, custo e inovação.",
          "topicos": [
            "Segmentação de fornecedores",
            "Avaliação de desempenho",
            "Desenvolvimento de fornecedores",
            "Gestão de riscos"
          ],
          "formula": "",
          "aplicacoes": [
            "Programas de desenvolvimento de fornecedores automotivos",
            "Scorecard de fornecedores estratégicos",
            "Gestão de contratos de longo prazo"
          ]
        },
        {
          "titulo": "Homologação de fornecedores",
          "definicao": "Processo formal de qualificação e aprovação de novos fornecedores para garantir que atendem aos requisitos técnicos, de qualidade, capacidade produtiva, financeiros e socioambientais da empresa contratante. Inclui auditorias, visitas técnicas e análise de documentos.",
          "topicos": [
            "Auditoria de fornecedores",
            "Qualificação técnica",
            "Certificações exigidas",
            "Cadastro de fornecedores"
          ],
          "formula": "",
          "aplicacoes": [
            "Homologação para indústria automotiva (PPAP)",
            "Qualificação de fornecedores de serviços logísticos",
            "Processo de onboarding de fornecedores de TI"
          ]
        },
        {
          "titulo": "Gestão de contratos",
          "definicao": "Processo estruturado de criação, execução, monitoramento e encerramento de contratos com fornecedores e parceiros. Inclui definição de cláusulas, prazos, preços, níveis de serviço (SLAs) e condições de renovação, garantindo conformidade e mitigação de riscos.",
          "topicos": [
            "Cláusulas contratuais",
            "SLA — Service Level Agreement",
            "Reajustes e revisões",
            "Gestão de aditivos"
          ],
          "formula": "",
          "aplicacoes": [
            "Contratos de fornecimento de matéria-prima",
            "Contratos de prestação de serviços logísticos",
            "Acordos de confidencialidade (NDA)"
          ]
        },
        {
          "titulo": "S&OP — Sales and Operations Planning",
          "definicao": "Processo integrado de planejamento tático que alinha as áreas de vendas, marketing, produção, logística e finanças em um único plano consensado para horizontes de 6 a 18 meses. Reúne previsões de demanda, planos de suprimento e análise de capacidade em reuniões mensais.",
          "topicos": [
            "Previsão de demanda",
            "Plano de suprimento",
            "Reunião executiva",
            "Indicadores de acurácia"
          ],
          "formula": "",
          "aplicacoes": [
            "Alinhamento entre vendas e produção em montadoras",
            "Planejamento integrado em indústria farmacêutica",
            "Revisão mensal de planos em bens de consumo"
          ]
        },
        {
          "titulo": "Planejamento integrado",
          "definicao": "Abordagem que consolida os planos funcionais (vendas, produção, compras, distribuição) em um único plano mestre, otimizando trade-offs entre custo, nível de serviço e utilização de capacidade. Utiliza modelos matemáticos e simulação para cenários.",
          "topicos": [
            "Planejamento tático integrado",
            "Simulação de cenários",
            "Otimização multiobjetivo",
            "Trade-off custo × serviço"
          ],
          "formula": "",
          "aplicacoes": [
            "Integração planos de demanda e suprimento",
            "Simulação de cenários de ruptura",
            "Planejamento agregado de recursos"
          ]
        },
        {
          "titulo": "Gestão de estoques",
          "definicao": "Conjunto de políticas, métodos e ações para determinar os níveis adequados de cada item em estoque, equilibrando os custos de manutenção contra os riscos e custos de falta. Inclui classificação ABC, definição de ponto de pedido, lotes econômicos e estoques de segurança.",
          "topicos": [
            "Curva ABC",
            "Ponto de pedido",
            "Estoque de segurança",
            "Giro de estoque"
          ],
          "formula": "PP = (DM × TR) + ES",
          "aplicacoes": [
            "Definição de políticas de estoque por categoria",
            "Redução de rupturas em CDs",
            "Otimização de níveis de estoque na cadeia"
          ]
        },
        {
          "titulo": "E-procurement",
          "definicao": "Sistemas eletrônicos de compras baseados em plataformas web que automatizam o ciclo de compras, desde a requisição até o pagamento. Integram-se com ERPs, utilizam catálogos eletrônicos e permitem leilões reversos, cotações online e contratos digitais.",
          "topicos": [
            "Catálogo eletrônico",
            "Leilão reverso",
            "Cotação online",
            "Integração com ERP"
          ],
          "formula": "",
          "aplicacoes": [
            "Compras de materiais indiretos via marketplace",
            "Leilão eletrônico para redução de custos",
            "Automação do fluxo de aprovação de compras"
          ]
        },
        {
          "titulo": "RFQ e RFP",
          "definicao": "RFQ (Request for Quotation) é uma solicitação de cotação para itens claramente especificados. RFP (Request for Proposal) é uma solicitação de proposta para soluções complexas. Ambos são processos formais de cotação que permitem comparar fornecedores de forma estruturada.",
          "topicos": [
            "RFQ — Solicitação de cotação",
            "RFP — Solicitação de proposta",
            "RFI — Solicitação de informação",
            "Matriz de avaliação"
          ],
          "formula": "",
          "aplicacoes": [
            "Cotação de matérias-primas padronizadas",
            "Contratação de serviços complexos de logística",
            "Seleção de fornecedores de TI por RFP"
          ]
        },
        {
          "titulo": "Avaliação de desempenho de fornecedores",
          "definicao": "Processo sistemático de medição e análise do desempenho dos fornecedores com base em critérios como qualidade, prazo, preço, capacidade de resposta e inovação. Utiliza scorecards, dashboards e reuniões periódicas de revisão para impulsionar a melhoria contínua.",
          "topicos": [
            "Scorecard de fornecedores",
            "KPIs logísticos",
            "Balanced Scorecard",
            "Reuniões de revisão"
          ],
          "formula": "OTIF = (Pedidos entregues no prazo e completos / Total de pedidos) × 100%",
          "aplicacoes": [
            "Avaliação trimestral de transportadoras",
            "Programa de desenvolvimento de fornecedores",
            "Premiação de melhores fornecedores do ano"
          ]
        },
        {
          "titulo": "Gestão de categorias",
          "definicao": "Abordagem estratégica de compras que segmenta os gastos da empresa em categorias homogêneas e desenvolve estratégias específicas para cada uma. Analisa o mercado fornecedor, consolida volumes, negocia contratos globais e gerencia o relacionamento por categoria.",
          "topicos": [
            "Análise de gastos (spend analysis)",
            "Estratégia por categoria",
            "Consolidação de fornecedores",
            "Plano de categoria"
          ],
          "formula": "",
          "aplicacoes": [
            "Estruturação de compras por categoria em grandes grupos",
            "Redução de custos via consolidação de fornecedores",
            "Análise de gastos totais por família de materiais"
          ]
        },
        {
          "titulo": "Supply Chain Risk Management",
          "definicao": "Processo de identificação, avaliação e mitigação de riscos que podem interromper o fluxo de materiais, informações ou finanças na cadeia de suprimentos. Inclui riscos geopolíticos, desastres naturais, falência de fornecedores, ruptura logística e ciberataques.",
          "topicos": [
            "Mapeamento de riscos",
            "Planos de contingência",
            "Dual sourcing",
            "Resiliência da cadeia"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de riscos em cadeias globais de semicondutores",
            "Planos de contingência para fornecedores únicos",
            "Monitoramento de riscos geopolíticos em tempo real"
          ]
        },
        {
          "titulo": "SCOR Model",
          "definicao": "Modelo de referência de processos desenvolvido pelo APICS para diagnóstico e melhoria de cadeias de suprimentos. Estrutura-se em 6 processos principais (Plan, Source, Make, Deliver, Return, Enable) com métricas padronizadas para comparar desempenho entre empresas e setores.",
          "topicos": [
            "Processos SCOR",
            "Métricas de nível 1",
            "Best practices",
            "Benchmarking de cadeia"
          ],
          "formula": "",
          "aplicacoes": [
            "Diagnóstico de maturidade da cadeia",
            "Benchmarking entre plantas industriais",
            "Modelagem de processos da cadeia de suprimentos"
          ]
        }
      ]
    },
    {
      "id": "estoques",
      "nome": "Gestão de Estoques",
      "icone": "archive",
      "cor": "#dc2626",
      "descricao": "Métodos e técnicas para administração eficiente de estoques industriais.",
      "subtopicos": [
        {
          "titulo": "Estoque mínimo",
          "definicao": "Quantidade mínima de um item que deve ser mantida em estoque para garantir a continuidade das operações durante o tempo de reposição. É calculado com base no consumo médio diário e no lead time, funcionando como gatilho para iniciar o processo de compra.",
          "topicos": [
            "Consumo médio diário",
            "Lead time de reposição",
            "Ponto de pedido",
            "Risco de ruptura"
          ],
          "formula": "EMín = CMD × TR",
          "aplicacoes": [
            "Definição de níveis mínimos em almoxarifado industrial",
            "Parametrização de sistemas ERP",
            "Controle de estoques de materiais críticos"
          ]
        },
        {
          "titulo": "Estoque máximo",
          "definicao": "Quantidade máxima desejável de um item em estoque, determinada pela capacidade de armazenagem, pelo capital disponível e pela política de compras. Evita excessos que geram custos financeiros, riscos de obsolescência e ocupação desnecessária de espaço.",
          "topicos": [
            "Capacidade de armazenagem",
            "Capital de giro",
            "Lote econômico",
            "Obsolescência"
          ],
          "formula": "EMáx = EMín + Lote de Compra",
          "aplicacoes": [
            "Dimensionamento de capacidade de armazéns",
            "Políticas de compra por item",
            "Gestão de estoques sazonais"
          ]
        },
        {
          "titulo": "Estoque de segurança",
          "definicao": "Quantidade adicional mantida além da demanda esperada para absorver variações da demanda e do lead time de reposição, protegendo contra rupturas. Seu dimensionamento considera o nível de serviço desejado, o desvio padrão da demanda e a variabilidade do suprimento.",
          "topicos": [
            "Nível de serviço",
            "Desvio padrão da demanda",
            "Lead time variável",
            "Fator de segurança Z"
          ],
          "formula": "ES = Z × σd × √L",
          "aplicacoes": [
            "Proteção contra variações sazonais de venda",
            "Buffer para fornecedores com lead time instável",
            "Garantia de nível de serviço ao cliente"
          ]
        },
        {
          "titulo": "Giro de estoque",
          "definicao": "Indicador que mede quantas vezes o estoque de um item é renovado em determinado período (geralmente um ano). Quanto maior o giro, mais eficiente é a gestão do estoque, indicando que o capital investido está sendo convertido em vendas rapidamente.",
          "topicos": [
            "Rotatividade do estoque",
            "Custo das vendas",
            "Estoque médio",
            "Dias de cobertura"
          ],
          "formula": "Giro = Custo das Mercadorias Vendidas / Estoque Médio",
          "aplicacoes": [
            "Avaliação de eficiência de gestão de estoques",
            "Comparação de desempenho entre categorias de produtos",
            "Identificação de itens encalhados"
          ]
        },
        {
          "titulo": "Curva ABC",
          "definicao": "Método de classificação de materiais baseado no princípio de Pareto, que separa os itens em três categorias: A (itens de alto valor, 80% do valor, 20% dos itens), B (valor intermediário) e C (baixo valor, muitos itens). Permite focar esforços nos itens de maior impacto financeiro.",
          "topicos": [
            "Classificação A (80% valor)",
            "Classificação B (15% valor)",
            "Classificação C (5% valor)",
            "Frequência de ressuprimento"
          ],
          "formula": "",
          "aplicacoes": [
            "Priorização de itens A para controle rigoroso",
            "Políticas de compra diferenciadas por classe",
            "Foco de inventário em itens de maior valor"
          ]
        },
        {
          "titulo": "Inventários físicos e rotativos",
          "definicao": "Inventário físico é a contagem total de todos os itens do estoque em uma data específica. O inventário rotativo (ciclo de contagem) conta continuamente uma parcela do estoque ao longo do ano, classificada por valor (ABC), mantendo a acuracidade sem parar as operações.",
          "topicos": [
            "Contagem cíclica",
            "Acurácia de estoque",
            "Classificação ABC para inventário",
            "Ajustes e divergências"
          ],
          "formula": "Acurácia = (Nº itens corretos / Nº itens contados) × 100%",
          "aplicacoes": [
            "Contagem rotativa em CDs de grande porte",
            "Recontagem de itens classe A semanal",
            "Ajuste de divergências contábeis de estoque"
          ]
        },
        {
          "titulo": "FIFO — First In First Out",
          "definicao": "Método de controle e avaliação de estoques no qual o primeiro item que entra no estoque é o primeiro a sair. É amplamente utilizado para produtos perecíveis, itens com prazo de validade e materiais sujeitos a obsolescência, garantindo maior frescor e menor perda.",
          "topicos": [
            "PEPS (Português)",
            "Controle por lote",
            "Validade e shelf life",
            "Rastreabilidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de alimentos e bebidas",
            "Controle de medicamentos com data de validade",
            "Armazenagem de produtos químicos sensíveis"
          ]
        },
        {
          "titulo": "LIFO — Last In First Out",
          "definicao": "Método de avaliação de estoques em que o último item recebido é o primeiro a ser vendido ou consumido. Tem efeito fiscal em períodos inflacionários (reduz lucro tributável), mas não é aceito pelo fisco brasileiro (Receita Federal) para fins de IRPJ e CSLL.",
          "topicos": [
            "UEPS (Português)",
            "Efeitos fiscais",
            "Inflação e custo",
            "Não permitido no Brasil"
          ],
          "formula": "",
          "aplicacoes": [
            "Avaliação de estoque para relatórios gerenciais",
            "Análise de impacto inflacionário",
            "Uso em países que permitem (EUA, IFRS)"
          ]
        },
        {
          "titulo": "FEFO — First Expire First Out",
          "definicao": "Método de movimentação de estoques que prioriza a saída dos itens com prazo de validade mais próximo do vencimento, independentemente da data de entrada. Essencial para produtos farmacêuticos, alimentos perecíveis e itens com shelf life crítico.",
          "topicos": [
            "Controle por data de validade",
            "Shelf life",
            "Rastreabilidade por lote",
            "Redução de perdas"
          ],
          "formula": "",
          "aplicacoes": [
            "Farmácias e distribuidoras de medicamentos",
            "Cadeia do frio de alimentos perecíveis",
            "Gestão de produtos sanguíneos e hemoderivados"
          ]
        },
        {
          "titulo": "EOQ — Economic Order Quantity",
          "definicao": "Modelo matemático desenvolvido por Ford W. Harris (1913) que determina a quantidade ideal de um pedido para minimizar os custos totais de estocagem e de pedido. Equilibra o custo de manter estoque com o custo de realizar pedidos, encontrando o lote ótimo.",
          "topicos": [
            "Custo de pedir",
            "Custo de manter",
            "Demanda anual",
            "Modelo de Wilson"
          ],
          "formula": "Q* = √(2DS / H)",
          "aplicacoes": [
            "Cálculo de lote de compra de matérias-primas",
            "Definição de lotes de ressuprimento em CDs",
            "Política de compras em indústrias de manufatura"
          ]
        },
        {
          "titulo": "Reposição automática",
          "definicao": "Sistema que dispara ordens de compra automaticamente quando o estoque atinge o ponto de pedido, sem intervenção manual. Integrado ao ERP, utiliza parâmetros como lead time, estoque de segurança e lote econômico para definir quantidades e momentos de reposição.",
          "topicos": [
            "Parâmetros de reposição",
            "Trigger de pedido",
            "Integração com fornecedores",
            "Min-Max"
          ],
          "formula": "",
          "aplicacoes": [
            "Reposição automatizada de materiais indiretos",
            "Abastecimento automático de linhas de produção",
            "Sistemas VMI com fornecedores"
          ]
        },
        {
          "titulo": "Ponto de pedido",
          "definicao": "Nível de estoque que dispara a emissão de um novo pedido de compra ou produção. É calculado multiplicando o consumo médio diário pelo lead time de reposição, acrescido do estoque de segurança para cobrir variações.",
          "topicos": [
            "Lead time",
            "Consumo médio diário",
            "Estoque de segurança",
            "Trigger de compra"
          ],
          "formula": "PP = (CMD × TR) + ES",
          "aplicacoes": [
            "Parametrização de sistemas de gestão de estoques",
            "Definição de quando comprar cada insumo",
            "Controle de abastecimento just-in-time"
          ]
        },
        {
          "titulo": "Cobertura de estoque",
          "definicao": "Indicador que expressa o número de dias que o estoque atual é suficiente para atender à demanda média futura sem novos suprimentos. Quanto maior a cobertura, maior o capital empatado; quanto menor, maior o risco de ruptura.",
          "topicos": [
            "Dias de estoque",
            "Consumo médio diário",
            "Nível de serviço",
            "Capital de giro"
          ],
          "formula": "Cobertura (dias) = Estoque Atual / Consumo Médio Diário",
          "aplicacoes": [
            "Monitoramento de nível de estoque por CD",
            "Análise de excesso de estoque",
            "Planejamento de ofertas e promoções"
          ]
        },
        {
          "titulo": "Nível de serviço",
          "definicao": "Métrica que mede a capacidade de atender à demanda dos clientes sem ruptura de estoque, expressa como percentual de itens ou pedidos atendidos no prazo. Níveis de serviço mais altos exigem maiores estoques de segurança e implicam trade-off com custos.",
          "topicos": [
            "Fill rate",
            "OTIF (On Time In Full)",
            "Ciclo do pedido",
            "Custo da falta"
          ],
          "formula": "Nível de Serviço = (Pedidos Atendidos / Total de Pedidos) × 100%",
          "aplicacoes": [
            "Definição de meta de atendimento ao cliente",
            "Dimensionamento de estoque de segurança por nível de serviço",
            "Avaliação de desempenho de CDs"
          ]
        },
        {
          "titulo": "Estoque pulmão",
          "definicao": "Estoque estratégico mantido entre processos produtivos sequenciais para desacoplá-los, absorvendo variações de ritmo e evitando que uma parada em uma etapa pare toda a linha ao mesmo tempo. É um estoque intermediário que protege o fluxo contínuo.",
          "topicos": [
            "Estoque em processo (WIP)",
            "Desacoplamento de processos",
            "Fluxo contínuo vs pulmão",
            "Gargalos produtivos"
          ],
          "formula": "",
          "aplicacoes": [
            "Buffers entre células de usinagem",
            "Pulmão entre estamparia e montagem",
            "Proteção contra quebra de máquina a montante"
          ]
        },
        {
          "titulo": "Estoque sazonal",
          "definicao": "Estoque acumulado em períodos de baixa demanda para atender picos sazonais futuros (Natal, Dia das Mães, safra agrícola). Permite nivelar a produção ao longo do ano, evitando capacidade ociosa em períodos baixos e sobrecarga em períodos de pico.",
          "topicos": [
            "Sazonalidade de demanda",
            "Nivelamento da produção",
            "Custo de armazenagem sazonal",
            "Previsão de demanda sazonal"
          ],
          "formula": "",
          "aplicacoes": [
            "Estoque de brinquedos para Natal",
            "Armazenagem de grãos pós-colheita",
            "Estoque de bebidas para verão"
          ]
        },
        {
          "titulo": "Estoque especulativo",
          "definicao": "Estoque adquirido com objetivo de proteção contra aumentos esperados de preço, desabastecimento de mercado, greves ou mudanças cambiais. É uma decisão estratégica de compra baseada em análise de mercado, não em necessidade imediata de produção.",
          "topicos": [
            "Proteção cambial",
            "Aumento de preço previsto",
            "Escassez de matéria-prima",
            "Risco de desabastecimento"
          ],
          "formula": "",
          "aplicacoes": [
            "Compra antecipada de aço antes de reajuste",
            "Estoque de semicondutores em cenário de escassez",
            "Proteção contra greve de transportadoras"
          ]
        },
        {
          "titulo": "Estoque obsoleto",
          "definicao": "Itens que perderam total ou parcialmente seu valor de uso por alterações tecnológicas, descontinuação de produtos, vencimento, danos ou mudanças nas especificações. Representa perda financeira direta e deve ser identificado, provisionado e descartado adequadamente.",
          "topicos": [
            "Obsolescência tecnológica",
            "Validade vencida",
            "Provisão contábil",
            "Descarte sustentável"
          ],
          "formula": "",
          "aplicacoes": [
            "Identificação de itens obsoletos em almoxarifado",
            "Baixa contábil de estoque sem giro",
            "Programas de reciclagem de materiais obsoletos"
          ]
        },
        {
          "titulo": "Custo de armazenagem",
          "definicao": "Custo total de manter itens em estoque, incluindo aluguel ou depreciação do espaço, mão de obra, seguros, impostos, perdas, obsolescência e custo de oportunidade do capital investido. Representa tipicamente 20-30% do valor do estoque ao ano.",
          "topicos": [
            "Custo de oportunidade",
            "Custo de espaço",
            "Seguro, perdas e obsolescência",
            "Custo total de estocagem"
          ],
          "formula": "Custo Armazenagem Anual = Estoque Médio × Taxa de Armazenagem (%)",
          "aplicacoes": [
            "Cálculo do custo logístico total",
            "Justificativa financeira para redução de estoques",
            "Decisão entre produzir ou terceirizar armazenagem"
          ]
        },
        {
          "titulo": "Classificação XYZ",
          "definicao": "Classificação de materiais baseada na previsibilidade e variabilidade da demanda: X (demanda estável e previsível), Y (variação moderada, sazonalidade) e Z (demanda irregular e imprevisível). Usada em conjunto com a curva ABC para definir políticas de estoque refinadas.",
          "topicos": [
            "Classe X — previsível",
            "Classe Y — variação moderada",
            "Classe Z — imprevisível",
            "Matriz ABC/XYZ"
          ],
          "formula": "CV = σ / μ (Coeficiente de Variação)",
          "aplicacoes": [
            "Políticas de estoque combinadas ABC × XYZ",
            "Estratégias de ressuprimento por classe de demanda",
            "Aplicação de previsão estatística diferenciada"
          ]
        }
      ]
    },
    {
      "id": "ciencia-dados",
      "nome": "Ciência de Dados",
      "icone": "database",
      "cor": "#6366f1",
      "descricao": "Ferramentas e técnicas de análise de dados aplicadas à indústria.",
      "subtopicos": [
        "Power BI — Dashboards",
        "Tableau",
        "Excel Avançado",
        "Python para engenharia",
        "Pandas e NumPy",
        "R estatístico",
        "SQL para consultas",
        "Machine Learning aplicado",
        "Dashboards e KPIs",
        "ETL e integração de dados",
        "Big Data industrial",
        "Data Mining",
        "VBA para automação",
        "DAX e M (Power BI)",
        "Web Scraping para dados",
        "Análise preditiva",
        "Visualização de dados",
        "Estatística com Python (SciPy)"
      ]
    },
    {
      "id": "automacao",
      "nome": "Automação Industrial",
      "icone": "cpu",
      "cor": "#e11d48",
      "descricao": "Sistemas automatizados, CLPs, robótica e Indústria 4.0.",
      "subtopicos": [
        {
          "titulo": "CLP — Controlador Lógico Programável",
          "definicao": "Equipamento eletrônico digital programável que utiliza memória para armazenar instruções e implementar funções de controle, como lógica combinatória, sequenciamento, temporização e operações aritméticas. Opera em ciclo de varredura (scan) contínuo, lendo entradas, executando o programa e atualizando saídas em tempo real.",
          "topicos": [
            "Arquitetura de CLPs",
            "Linguagens de programação (Ladder, FBD, SFC, ST, IL)",
            "Ciclo de scan",
            "Módulos de E/S digitais e analógicos",
            "IEC 61131-3"
          ],
          "formula": "Tscan = Tleitura + Texecução + Tescrita",
          "aplicacoes": [
            "Controle de linhas de montagem automotivas",
            "Automação de máquinas injetoras e CNC",
            "Sistemas de bombeamento e saneamento",
            "Controle de processos discretos na indústria alimentícia"
          ]
        },
        {
          "titulo": "SCADA — Supervisory Control and Data Acquisition",
          "definicao": "Sistema computacional que permite monitorar, controlar e adquirir dados de processos industriais em tempo real, integrando CLPs, RTUs e sensores em uma interface centralizada com IHM. Coleta dados de campo, processa alarmes, gera históricos e possibilita operação remota.",
          "topicos": [
            "Arquitetura SCADA (monoposto, cliente-servidor, distribuída)",
            "RTU — Remote Terminal Unit",
            "IHM — Interface Homem-Máquina",
            "Protocolos OPC-UA, MQTT, Modbus",
            "Histórico e banco de dados de processo"
          ],
          "formula": "",
          "aplicacoes": [
            "Supervisão de subestações elétricas",
            "Controle de oleodutos e gasodutos",
            "Gestão de estações de tratamento de água e efluentes",
            "Monitoramento de parques eólicos e usinas solares"
          ]
        },
        {
          "titulo": "Sensores industriais",
          "definicao": "Dispositivos que convertem grandezas físicas (temperatura, pressão, vazão, nível, posição) em sinais elétricos interpretáveis por CLPs e sistemas de controle. São o primeiro elo na cadeia de automação, fornecendo dados críticos para a tomada de decisão em tempo real.",
          "topicos": [
            "Sensores de temperatura (termopar, RTD, termistor)",
            "Sensores de pressão e vazão",
            "Sensores indutivos, capacitivos e ópticos",
            "Encoders e resolvers",
            "Transmissores 4-20 mA e protocolo HART"
          ],
          "formula": "",
          "aplicacoes": [
            "Monitoramento de variáveis de processo em refinarias",
            "Detecção de presença em esteiras transportadoras",
            "Medição de nível em tanques e silos",
            "Controle de temperatura em fornos industriais"
          ]
        },
        {
          "titulo": "Atuadores e motores",
          "definicao": "Elementos finais de controle que convertem sinais elétricos do CLP em ações físicas, como movimento rotativo, linear ou abertura de válvulas. Incluem motores elétricos, servoacionamentos, cilindros pneumáticos, hidráulicos e atuadores elétricos.",
          "topicos": [
            "Motores de indução trifásicos",
            "Servomotores e motores de passo",
            "Cilindros pneumáticos e hidráulicos",
            "Válvulas de controle (globo, borboleta, esfera)",
            "Inversores de frequência e soft-starters"
          ],
          "formula": "P = √3 × V × I × cos(φ) × η",
          "aplicacoes": [
            "Movimentação de braços robóticos",
            "Acionamento de bombas centrífugas",
            "Atuação de válvulas em processos químicos",
            "Posicionamento preciso em máquinas-ferramenta"
          ]
        },
        {
          "titulo": "Robótica industrial",
          "definicao": "Ramo da automação que utiliza manipuladores mecânicos programáveis com múltiplos graus de liberdade para executar tarefas repetitivas, precisas ou perigosas. Os robôs industriais são classificados por geometria (articulada, cartesiana, SCARA, paralela) e por capacidade de carga.",
          "topicos": [
            "Classificação de robôs por geometria e aplicação",
            "Controladores e linguagens de programação robótica",
            "Efetuadores finais (grippers, ferramentas)",
            "Sensores de força e visão para robôs",
            "Segurança em células robotizadas (ISO 10218, ISO/TS 15066)"
          ],
          "formula": "",
          "aplicacoes": [
            "Soldagem a arco e ponto na indústria automotiva",
            "Pintura e revestimento automatizados",
            "Paletização e embalagem",
            "Montagem de componentes eletrônicos"
          ]
        },
        {
          "titulo": "IIoT — Industrial Internet of Things",
          "definicao": "Extensão da Internet das Coisas para o ambiente industrial, conectando máquinas, sensores e sistemas por meio de redes de comunicação para coleta e troca de dados. Permite monitoramento remoto, manutenção preditiva e otimização de processos baseada em dados.",
          "topicos": [
            "Arquitetura IIoT (edge, fog, cloud)",
            "Protocolos MQTT, OPC-UA, AMQP",
            "Gateways industriais",
            "Digital twin alimentado por IIoT",
            "Cibersegurança em IIoT (IEC 62443)"
          ],
          "formula": "",
          "aplicacoes": [
            "Monitoramento de vibração em motores",
            "Rastreabilidade de lotes na produção",
            "Gestão energética de plantas industriais",
            "Manutenção preditiva de ativos críticos"
          ]
        },
        {
          "titulo": "Indústria 4.0",
          "definicao": "Conceito que representa a quarta revolução industrial, caracterizada pela integração de sistemas ciberfísicos (CPS), IoT, inteligência artificial e computação em nuvem nos processos produtivos. Visa fábricas inteligentes com produção flexível, autônoma e orientada a dados.",
          "topicos": [
            "Pilares da Indústria 4.0 (BCG)",
            "Sistemas ciberfísicos (CPS)",
            "Integração horizontal e vertical",
            "Manufatura ágil e mass customization",
            "Arquitetura RAMI 4.0"
          ],
          "formula": "",
          "aplicacoes": [
            "Fábricas inteligentes com chão de fábrica digitalizado",
            "Customização em massa de produtos",
            "Logística autônoma com AGVs",
            "Gêmeos digitais de linhas de produção"
          ]
        },
        {
          "titulo": "Sistemas embarcados",
          "definicao": "Sistemas computacionais dedicados a uma função específica dentro de um sistema maior, com recursos limitados de processamento e memória. Em automação, estão presentes em CLPs, IHMs, controladores de motores e dispositivos IoT industriais.",
          "topicos": [
            "Microcontroladores (ARM, AVR, PIC)",
            "Sistemas operacionais de tempo real (RTOS)",
            "Firmware e bootloaders",
            "Interfaces de comunicação (SPI, I2C, CAN, UART)",
            "Projeto de hardware embarcado"
          ],
          "formula": "",
          "aplicacoes": [
            "Controladores de acesso e catracas",
            "Módulos de aquisição de dados",
            "Sistemas de rastreamento veicular",
            "Dispositivos wearable industriais"
          ]
        },
        {
          "titulo": "Visão computacional",
          "definicao": "Campo da inteligência artificial que capacita máquinas a interpretar e processar imagens do mundo real. Na indústria, é usada para inspeção de qualidade, leitura de códigos, guiamento de robôs e monitoramento de processos.",
          "topicos": [
            "Câmeras industriais (área scan, line scan)",
            "Processamento de imagens (OpenCV, HALCON)",
            "Deep learning para detecção de defeitos",
            "Sistemas de iluminação e óptica",
            "Integração com CLPs e robôs"
          ],
          "formula": "",
          "aplicacoes": [
            "Inspeção óptica de soldas",
            "Leitura de códigos Data Matrix e QR",
            "Identificação de peças em esteiras",
            "Medição dimensional automatizada"
          ]
        },
        {
          "titulo": "Redes industriais (Profibus, Ethernet/IP)",
          "definicao": "Protocolos de comunicação padronizados para interligar CLPs, sensores, atuadores e sistemas supervisórios no ambiente industrial. São classificadas em redes de campo (fieldbus) e redes Ethernet industriais, cada qual com requisitos específicos de determinismo e confiabilidade.",
          "topicos": [
            "Fieldbus: Profibus, DeviceNet, Foundation Fieldbus",
            "Ethernet industrial: EtherNet/IP, PROFINET, EtherCAT",
            "Redes de sensores sem fio (WirelessHART)",
            "Comutação e roteamento industrial",
            "Segurança em redes industriais"
          ],
          "formula": "",
          "aplicacoes": [
            "Comunicação entre CLPs em células de manufatura",
            "Controle de movimento sincronizado",
            "Integração de sensores distribuídos",
            "Redundância de dados em sistemas críticos"
          ]
        },
        {
          "titulo": "IHM — Interface Homem-Máquina",
          "definicao": "Interface gráfica que permite a interação entre operadores e máquinas ou processos, exibindo dados em tempo real, alarmes, gráficos de tendência e comandos de controle. Pode ser implementada como painéis dedicados ou software em PC.",
          "topicos": [
            "Painéis IHM touch screen",
            "Software supervisório com IHM integrada",
            "Desenvolvimento de telas (tags, animações, receitas)",
            "Alarmes e eventos",
            "Usabilidade e design centrado no operador"
          ],
          "formula": "",
          "aplicacoes": [
            "Salas de controle de processos contínuos",
            "Painéis de máquina em células de manufatura",
            "Supervisão de linhas de envase",
            "Monitoramento de utilidades industriais"
          ]
        },
        {
          "titulo": "Controladores PID",
          "definicao": "Algoritmo de controle realimentado que calcula o sinal de saída com base no erro entre o valor desejado (setpoint) e o valor medido, aplicando ações proporcional (P), integral (I) e derivativa (D). É o método mais difundido para controle contínuo de processos.",
          "topicos": [
            "Ações P, PI, PID e suas características",
            "Sintonia de controladores (Ziegler-Nichols, IMC)",
            "Controle cascata, feedforward e ratio",
            "PID digital e discretização",
            "Satuação e anti-windup"
          ],
          "formula": "u(t) = Kp × e(t) + Ki × ∫e(τ)dτ + Kd × de(t)/dt",
          "aplicacoes": [
            "Controle de temperatura em reatores",
            "Regulação de vazão e pressão em tubulações",
            "Controle de nível em tanques",
            "Malhas de velocidade em motores"
          ]
        },
        {
          "titulo": "Sistemas supervisórios",
          "definicao": "Plataformas de software que integram aquisição, processamento e exibição de dados de processo, permitindo supervisão centralizada e tomada de decisão em tempo real. Incluem funcionalidades de alarme, histórico, relatórios e interface com sistemas corporativos.",
          "topicos": [
            "Configuração de tags e drivers de comunicação",
            "Telas de supervisão e navegação",
            "Relatórios e históricos",
            "Integração com MES e ERP",
            "Redundância e alta disponibilidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Central de operação de plantas petroquímicas",
            "Controle de sistemas de geração de energia",
            "Automação de edifícios inteligentes",
            "Monitoramento de estações de tratamento"
          ]
        },
        {
          "titulo": "Acionamentos elétricos",
          "definicao": "Sistemas que controlam a partida, parada, velocidade, torque e sentido de rotação de motores elétricos. Incluem contatores, soft-starters, inversores de frequência e servoconversores, sendo essenciais para eficiência energética e automação de máquinas.",
          "topicos": [
            "Partida direta, estrela-triângulo e suave",
            "Inversores de frequência (VFD)",
            "Servoacionamentos com malha fechada",
            "Dimensionamento de cabos e proteções",
            "Eficiência energética e normas IE3/IE4"
          ],
          "formula": "n(rpm) = 120 × f / p",
          "aplicacoes": [
            "Acionamento de transportadores e elevadores",
            "Controle de bombas hidráulicas",
            "Posicionamento de eixos em centros de usinagem",
            "Ventiladores e compressores industriais"
          ]
        },
        {
          "titulo": "Pneumática e hidráulica",
          "definicao": "Tecnologias de automação que utilizam fluidos pressurizados (ar comprimido na pneumática; óleo na hidráulica) para gerar movimento linear ou rotativo. A pneumática é preferida para aplicações de baixa a média força; a hidráulica para altas cargas e precisão de posicionamento.",
          "topicos": [
            "Cilindros de simples e dupla ação",
            "Válvulas direcionais, reguladoras e proporcionais",
            "Unidades de preparação de ar (FRL)",
            "Bombas hidráulicas e atuadores",
            "Normas ISO 4414 e ISO 4413"
          ],
          "formula": "F = P × A",
          "aplicacoes": [
            "Automação de linhas de montagem (pneumática)",
            "Prensas e injetoras hidráulicas",
            "Sistemas de fixação e clamping",
            "Atuação de válvulas em processos"
          ]
        },
        {
          "titulo": "Robôs colaborativos (Cobots)",
          "definicao": "Robôs projetados para operar em espaço compartilhado com seres humanos, com sensores de força, limitação de potência e parada segura por contato. Diferem dos robôs industriais tradicionais por dispensar cercas de segurança e facilitar a reprogramação.",
          "topicos": [
            "Norma ISO/TS 15066 para robôs colaborativos",
            "Modos de operação colaborativa",
            "Sensoriamento de torque e força",
            "Aplicações pick-and-place e inspeção",
            "Comparação com robôs industriais tradicionais"
          ],
          "formula": "",
          "aplicacoes": [
            "Alimentação de máquinas CNC por operador + cobot",
            "Montagem assistida de componentes delicados",
            "Inspeção de qualidade colaborativa",
            "Embalagem e paletização em pequenas empresas"
          ]
        },
        {
          "titulo": "Células de manufatura flexível",
          "definicao": "Arranjo produtivo que integra máquinas CNC, robôs, sistemas de armazenamento e transporte automatizado, capazes de fabricar famílias de peças com mínima intervenção manual. A flexibilidade permite alterar rapidamente a produção entre modelos sem grandes reconfigurações.",
          "topicos": [
            "Layout de células flexíveis (U-shape, linear)",
            "Sistemas de paletes e magazines",
            "Controle centralizado e scheduling",
            "Mudança rápida de ferramentas (SMED)",
            "Indicadores OEE e flexibilidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Usinagem de famílias de peças automotivas",
            "Manufatura de componentes aeronáuticos",
            "Produção de dispositivos médicos",
            "Fabricação de peças por encomenda"
          ]
        },
        {
          "titulo": "Identificação por RF (RFID)",
          "definicao": "Tecnologia de identificação automática por radiofrequência que utiliza etiquetas (tags) passivas ou ativas para rastrear produtos, ferramentas e ativos ao longo da cadeia produtiva. Diferencia-se do código de barras por não exigir linha de visada e permitir leitura em lote.",
          "topicos": [
            "Tags passivas, ativas e semi-passivas",
            "Frequências LF, HF, UHF e micro-ondas",
            "Leitores fixos e móveis",
            "Padrões ISO 18000 e EPC Gen2",
            "Integração com MES e WMS"
          ],
          "formula": "",
          "aplicacoes": [
            "Rastreabilidade de peças na montagem",
            "Controle de estoque automatizado",
            "Identificação de ferramentas e dispositivos",
            "Logística reversa e cadeia de suprimentos"
          ]
        },
        {
          "titulo": "OPC-UA e MQTT",
          "definicao": "Protocolos de comunicação modernos para integração de dados industriais. OPC-UA (Open Platform Communications — Unified Architecture) padroniza a troca de dados entre diferentes fabricantes com segurança e modelagem de informações. MQTT (Message Queuing Telemetry Transport) é um protocolo leve de mensageria publish/subscribe ideal para IIoT.",
          "topicos": [
            "Arquitetura cliente-servidor OPC-UA",
            "Modelo de informação e namespace",
            "MQTT brokers e tópicos",
            "Qualidade de serviço (QoS) em MQTT",
            "Segurança e certificados OPC-UA"
          ],
          "formula": "",
          "aplicacoes": [
            "Integração de chão de fábrica com sistemas cloud",
            "Coleta de dados de múltiplos CLPs heterogêneos",
            "Telemetria de ativos remotos",
            "Plataformas de IIoT e Big Data industrial"
          ]
        }
      ]
    },
    {
      "id": "transf-digital",
      "nome": "Transformação Digital",
      "icone": "zap",
      "cor": "#ea580c",
      "descricao": "Digitalização, IA, gêmeo digital e tecnologias habilitadoras da Indústria 5.0.",
      "subtopicos": [
        {
          "titulo": "Digitalização industrial",
          "definicao": "Processo de conversão de processos, documentos e operações analógicas para formatos digitais, habilitando automação, rastreabilidade e análise de dados. Vai além da simples digitalização de papéis, envolvendo a integração de sistemas e a conectividade de ativos.",
          "topicos": [
            "Estratégia de transformação digital",
            "Digital twin e digital thread",
            "Eliminação de dados em papel",
            "Integração OT/IT",
            "Indicadores de maturidade digital"
          ],
          "formula": "",
          "aplicacoes": [
            "Digitalização de ordens de serviço e checklists",
            "Captura automática de dados de produção",
            "Documentação técnica 100% digital",
            "Assinatura eletrônica em processos industriais"
          ]
        },
        {
          "titulo": "Inteligência Artificial na indústria",
          "definicao": "Ramo da computação que desenvolve sistemas capazes de executar tarefas que normalmente requerem inteligência humana: aprendizado, raciocínio, percepção e tomada de decisão. Na indústria, é aplicada em controle de qualidade preditivo, otimização de processos e manutenção inteligente.",
          "topicos": [
            "Machine Learning (supervisionado, não supervisionado, reforço)",
            "Deep Learning para visão computacional",
            "IA generativa para projeto e documentação",
            "Sistemas especialistas e controle fuzzy",
            "MLOps industrial"
          ],
          "formula": "",
          "aplicacoes": [
            "Detecção de defeitos em tempo real com visão IA",
            "Previsão de demanda e planejamento de produção",
            "Otimização de parâmetros de processo",
            "Chatbots para assistência técnica"
          ]
        },
        {
          "titulo": "Big Data e Analytics",
          "definicao": "Conjunto de técnicas e tecnologias para capturar, armazenar, processar e analisar grandes volumes de dados estruturados e não estruturados gerados por sistemas industriais. Permite extrair correlações, padrões e insights que orientam decisões estratégicas e operacionais.",
          "topicos": [
            "Arquitetura data lake e data warehouse",
            "Processamento batch e streaming",
            "Ferramentas (Hadoop, Spark, Kafka)",
            "Análise descritiva, diagnóstica, preditiva e prescritiva",
            "Visualização de dados com dashboards"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise de causa raiz de falhas recorrentes",
            "Otimização de mix de produção por margem",
            "Segmentação de clientes e personalização",
            "Monitoramento de KPI em tempo real"
          ]
        },
        {
          "titulo": "Computação em nuvem",
          "definicao": "Modelo de computação que permite acesso on-demand a recursos computacionais compartilhados (servidores, armazenamento, bancos de dados, redes, software) pela internet. Na indústria, viabiliza IIoT, análise avançada e sistemas de gestão escaláveis com redução de custos de infraestrutura.",
          "topicos": [
            "IaaS, PaaS, SaaS — modelos de serviço",
            "Nuvem pública, privada e híbrida",
            "Cloud industrial (AWS Industry, Azure for Industry)",
            "Edge computing vs. Cloud computing",
            "Segurança e conformidade (LGPD) em nuvem"
          ],
          "formula": "",
          "aplicacoes": [
            "Plataformas de IIoT em nuvem (AWS IoT, Azure IoT)",
            "Sistemas ERP e MES em SaaS",
            "Armazenamento e análise de dados históricos",
            "Machine Learning como serviço (MLaaS)"
          ]
        },
        {
          "titulo": "Gêmeo Digital (Digital Twin)",
          "definicao": "Réplica virtual de um sistema, produto ou processo que reflete seu estado em tempo real por meio de dados de sensores e simulações. Permite prever comportamentos, testar cenários e otimizar operações sem intervir no sistema físico.",
          "topicos": [
            "Gêmeo digital de produto, processo e sistema",
            "Modelagem 3D e simulação multi-física",
            "Sincronização em tempo real com dados IIoT",
            "Gêmeo digital de fábrica (Digital Factory)",
            "Ferramentas (Unity, Siemens Tecnomatix, Ansys Twin Builder)"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de fluxo produtivo antes da implementação",
            "Monitoramento e predição de desgaste de máquinas",
            "Otimização de eficiência energética",
            "Comissionamento virtual de linhas de produção"
          ]
        },
        {
          "titulo": "IoT e IIoT",
          "definicao": "Rede de objetos físicos conectados à internet que coletam e trocam dados. A IoT industrial (IIoT) estende esse conceito ao ambiente fabril, conectando sensores, máquinas e sistemas para monitoramento, automação e otimização baseada em dados.",
          "topicos": [
            "Arquitetura IoT: dispositivos, gateway, nuvem",
            "Protocolos (MQTT, CoAP, HTTP/2, LwM2M)",
            "Plataformas IoT (ThingsBoard, AWS IoT, Azure IoT)",
            "Análise de borda (edge analytics)",
            "Segurança em dispositivos IoT (TLS, PKI)"
          ],
          "formula": "",
          "aplicacoes": [
            "Cidades inteligentes e utilidades",
            "Agricultura de precisão",
            "Monitoramento de frota e logística",
            "Medição inteligente de energia"
          ]
        },
        {
          "titulo": "Indústria 5.0",
          "definicao": "Evolução da Indústria 4.0 que coloca o ser humano no centro da produção, integrando tecnologias digitais com sustentabilidade, resiliência e bem-estar social. Valoriza a cooperação homem-máquina (cobots), personalização em massa e produção regenerativa.",
          "topicos": [
            "Human-centricity (produção centrada no humano)",
            "Resiliência de cadeias de suprimento",
            "Sustentabilidade e produção regenerativa",
            "Tecnologias habilitadoras 5.0",
            "Diferenças entre Indústria 4.0 e 5.0"
          ],
          "formula": "",
          "aplicacoes": [
            "Linhas de produção com robôs colaborativos",
            "Fábricas regenerativas com energia limpa",
            "Produção customizada com participação do cliente",
            "Modelos de negócio baseados em servitização"
          ]
        },
        {
          "titulo": "Blockchain na indústria",
          "definicao": "Tecnologia de registro distribuído que garante imutabilidade, rastreabilidade e transparência em transações e dados compartilhados entre múltiplos participantes. Na cadeia de suprimentos, assegura a origem e o histórico de produtos e materiais.",
          "topicos": [
            "Estrutura de blocos, hash e consenso",
            "Blockchain pública vs. privada vs. consórcio",
            "Smart contracts para automação de acordos",
            "Rastreabilidade na cadeia de suprimentos",
            "Plataformas (Hyperledger, Ethereum, Corda)"
          ],
          "formula": "",
          "aplicacoes": [
            "Rastreabilidade de alimentos da fazenda à mesa",
            "Certificação de origem de materiais",
            "Contratos inteligentes para pagamentos automáticos",
            "Proteção de propriedade intelectual industrial"
          ]
        },
        {
          "titulo": "Realidade Aumentada (AR)",
          "definicao": "Tecnologia que sobrepõe elementos digitais (imagens, textos, animações) ao ambiente real em tempo real, visualizada por óculos inteligentes, tablets ou smartphones. Na indústria, é usada para treinamento, assistência remota e instruções de montagem sobrepostas.",
          "topicos": [
            "Marcadores e tracking visual",
            "Óculos AR (Microsoft HoloLens, Magic Leap)",
            "Desenvolvimento com Unity e AR Foundation",
            "AR para manutenção assistida",
            "Integração com sistemas PLM e CMMS"
          ],
          "formula": "",
          "aplicacoes": [
            "Instruções de montagem projetadas sobre o produto",
            "Manutenção remota com especialista via AR",
            "Inspeção visual com sobreposição de dados",
            "Treinamento de operadores em ambiente seguro"
          ]
        },
        {
          "titulo": "Realidade Virtual (VR)",
          "definicao": "Ambiente digital imersivo gerado por computador, no qual o usuário interage por meio de óculos VR e controladores. Na engenharia, é usada para simulação de projetos, validação de layout fabril e treinamento em situações de risco sem exposição real.",
          "topicos": [
            "Óculos VR (Meta Quest, HTC Vive, Pico)",
            "Desenvolvimento em Unity 3D e Unreal Engine",
            "Simulação de processos e ergonomia",
            "Treinamento de segurança em VR",
            "Revisão de projeto colaborativa em VR"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de layout de fábrica antes da construção",
            "Treinamento de operação de máquinas complexas",
            "Ergonomia virtual para projeto de postos",
            "Revisão de protótipos 3D em escala real"
          ]
        },
        {
          "titulo": "Manufatura aditiva (3D Printing)",
          "definicao": "Processo de fabricação por adição sucessiva de camadas de material (plástico, metal, cerâmica) a partir de um modelo digital 3D. Permite geometrias complexas, redução de peso, customização em massa e prototipagem rápida, com impacto direto na cadeia de suprimentos.",
          "topicos": [
            "FDM, SLA, SLS, DMLS, EBM — tecnologias",
            "Materiais para impressão 3D industrial",
            "Design for Additive Manufacturing (DfAM)",
            "Pós-processamento e acabamento",
            "Normas ASTM F42 e ISO 52900"
          ],
          "formula": "",
          "aplicacoes": [
            "Prototipagem rápida de componentes",
            "Produção de peças de reposição sob demanda",
            "Implantes médicos personalizados",
            "Ferramentas e dispositivos de produção leves"
          ]
        },
        {
          "titulo": "Cibersegurança industrial",
          "definicao": "Práticas, tecnologias e processos para proteger sistemas de controle industrial (ICS), redes, dispositivos e dados contra ataques cibernéticos. Difere da segurança de TI por exigir disponibilidade contínua, baixa latência e proteção de sistemas legados.",
          "topicos": [
            "IEC 62443 — normas para segurança ICS",
            "Segmentação de redes OT e IT",
            "Firewalls industriais e DMZ",
            "Detecção de intrusão em redes industriais",
            "Gestão de vulnerabilidades e patch management"
          ],
          "formula": "",
          "aplicacoes": [
            "Proteção de subestações de energia contra ataques",
            "Segurança de redes SCADA",
            "Proteção de dados de propriedade intelectual industrial",
            "Conformidade com regulamentações de segurança digital"
          ]
        },
        {
          "titulo": "Edge Computing",
          "definicao": "Modelo computacional que processa dados próximo à fonte geradora (na borda da rede), reduzindo latência e tráfego para a nuvem. Crítico para aplicações industriais que exigem resposta em tempo real, como controle de máquinas e análise preditiva local.",
          "topicos": [
            "Arquitetura edge: dispositivos, gateways, micro-data centers",
            "Edge vs. Fog vs. Cloud",
            "Processamento de streaming em tempo real",
            "Orquestração de containers no edge (K3s, Docker)",
            "Plataformas edge industriais (Siemens Industrial Edge, AWS Outposts)"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise de vibração em tempo real na máquina",
            "Controle de qualidade com inferência de IA local",
            "Redução de tráfego de dados para a nuvem",
            "Operação offline com sincronização posterior"
          ]
        },
        {
          "titulo": "5G industrial",
          "definicao": "Quinta geração de redes móveis que oferece alta largura de banda, baixíssima latência (1-10 ms) e suporte a massiva conexão de dispositivos. Na indústria, viabiliza controle remoto de máquinas, robótica colaborativa sem fio e fábricas totalmente móveis.",
          "topicos": [
            "Redes 5G privativas (NPN)",
            "Network slicing para aplicações industriais",
            "URLLC, eMBB, mMTC — categorias de serviço",
            "Integração 5G com TSN (Time-Sensitive Networking)",
            "Casos de uso 5G em manufatura"
          ],
          "formula": "",
          "aplicacoes": [
            "Controle remoto de guindastes e AGVs",
            "Realidade aumentada com streaming de vídeo 4K",
            "Comunicação machine-to-machine ultraconfiável",
            "Monitoramento por vídeo de alta resolução"
          ]
        },
        {
          "titulo": "IA Generativa na manufatura",
          "definicao": "Ramo da inteligência artificial focado na geração de conteúdo novo (texto, imagens, código, modelos 3D) a partir de modelos treinados como GPT, DALL-E e Stable Diffusion. Na manufatura, acelera projeto de produto, documentação técnica e programação de máquinas.",
          "topicos": [
            "LLMs aplicados à engenharia",
            "Geração de código G-code e PLC",
            "Design generativo para manufatura aditiva",
            "Documentação técnica automática",
            "Assistentes virtuais para chão de fábrica"
          ],
          "formula": "",
          "aplicacoes": [
            "Geração automática de relatórios de qualidade",
            "Projeto generativo de peças otimizadas",
            "Assistente virtual para troubleshooting",
            "Tradução e padronização de documentação técnica"
          ]
        },
        {
          "titulo": "Sistemas ciberfísicos (CPS)",
          "definicao": "Integração de componentes computacionais (software, redes) com processos físicos (sensores, atuadores, máquinas), onde o sistema digital monitora e controla o processo físico em malha fechada. Base da Indústria 4.0, seguindo a arquitetura 5C (conexão, conversão, cyber, cognição, configuração).",
          "topicos": [
            "Arquitetura 5C dos CPS",
            "Comunicação máquina a máquina (M2M)",
            "Modelagem e simulação de CPS",
            "CPS aplicados a manufatura e energia",
            "Desafios de segurança e interoperabilidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Controle autônomo de tráfego urbano",
            "Redes elétricas inteligentes (Smart Grid)",
            "Manufatura autônoma com auto-configuração",
            "Veículos autônomos e sistemas de transporte"
          ]
        },
        {
          "titulo": "Digital Thread",
          "definicao": "Fluxo contínuo de dados integrados ao longo de todo o ciclo de vida do produto, desde o projeto conceitual até o descarte. Conecta PLM, ERP, MES, manufatura e serviço de campo, garantindo rastreabilidade e consistência da informação.",
          "topicos": [
            "Conexão entre PLM, ERP, MES e SCADA",
            "Rastreabilidade de versões e mudanças de engenharia",
            "Digital thread vs. Digital twin",
            "Padrões (STEP AP242, QIF, MTConnect)",
            "Implementação em arquiteturas de TI industriais"
          ],
          "formula": "",
          "aplicacoes": [
            "Rastreabilidade completa de lotes e matérias-primas",
            "Gestão de mudanças de engenharia em cascata",
            "Histórico de manutenção vinculado ao serial number",
            "Conformidade regulatória (FDA, INMETRO)"
          ]
        },
        {
          "titulo": "Fábrica autônoma",
          "definicao": "Conceito de manufatura onde a produção opera com mínima intervenção humana, utilizando decisões baseadas em IA, robôs autônomos, sistemas de auto-otimização e logística intra-fábrica sem operador. Representa o estágio mais avançado de maturidade da Indústria 4.0.",
          "topicos": [
            "Níveis de autonomia na manufatura",
            "Sistemas de scheduling autônomo",
            "Logística com AGVs e drones",
            "Auto-otimização de parâmetros de processo",
            "Manutenção autônoma com IA"
          ],
          "formula": "",
          "aplicacoes": [
            "Linhas de montagem sem operadores (lights-out)",
            "Armazéns totalmente automatizados",
            "Centros de usinagem não tripulados",
            "Fábricas de semicondutores com automação total"
          ]
        },
        {
          "titulo": "Gêmeo digital de processo",
          "definicao": "Réplica virtual de um processo produtivo específico (não do produto), usada para simular, monitorar e otimizar o comportamento dinâmico da produção. Permite testar variações de parâmetros, identificar gargalos e prever o impacto de mudanças sem interromper a operação real.",
          "topicos": [
            "Modelagem de processos contínuos e discretos",
            "Simulação de eventos discretos (DES)",
            "Calibração com dados históricos e em tempo real",
            "Otimização de setpoints com gêmeo digital",
            "Ferramentas (AnyLogic, Simulink, Aspen Plus)"
          ],
          "formula": "",
          "aplicacoes": [
            "Otimização de consumo energético de um forno",
            "Simulação de cenários de produção futuros",
            "Detecção de desvios de processo em tempo real",
            "Treinamento de operadores em ambiente virtual de processo"
          ]
        }
      ]
    },
    {
      "id": "manutencao",
      "nome": "Gestão da Manutenção",
      "icone": "tool",
      "cor": "#a21caf",
      "descricao": "Estratégias de manutenção, confiabilidade e disponibilidade de ativos.",
      "subtopicos": [
        {
          "titulo": "Manutenção preventiva",
          "definicao": "Estratégia de manutenção baseada em intervenções programadas por tempo de operação, calendário ou ciclos de uso. Tem como objetivo reduzir a probabilidade de falha e manter o equipamento em condições seguras e eficientes de operação.",
          "topicos": [
            "Planos de manutenção preventiva",
            "Periodicidade baseada em tempo e uso",
            "Ordens de serviço programadas",
            "Checklists e procedimentos de inspeção",
            "Indicadores de cumprimento do plano"
          ],
          "formula": "",
          "aplicacoes": [
            "Lubrificação e troca de óleo programada",
            "Substituição de correias e filtros por calendário",
            "Inspeção periódica de sistemas elétricos",
            "Calibração de sensores e instrumentos"
          ]
        },
        {
          "titulo": "Manutenção corretiva",
          "definicao": "Intervenção realizada após a ocorrência de falha, com o objetivo de restaurar o equipamento às condições normais de operação. Pode ser classificada como emergencial (falha crítica) ou programada (falha não crítica com reparo agendado).",
          "topicos": [
            "Manutenção corretiva emergencial",
            "Manutenção corretiva programada",
            "Análise de criticidade para priorização",
            "Gestão de ordens de serviço corretivas",
            "Registro de falhas e horas de reparo"
          ],
          "formula": "",
          "aplicacoes": [
            "Substituição de motor queimado",
            "Reparo emergencial de vazamento em tubulação",
            "Troca de placa eletrônica defeituosa",
            "Recuperação de máquina após parada súbita"
          ]
        },
        {
          "titulo": "Manutenção preditiva",
          "definicao": "Estratégia baseada no monitoramento contínuo ou periódico de parâmetros de condição (vibração, temperatura, óleo, ultrassom) para prever falhas antes que ocorram. Permite intervir no momento ótimo, maximizando a vida útil do componente.",
          "topicos": [
            "Análise de vibração",
            "Termografia infravermelha",
            "Análise de óleo lubrificante",
            "Ultrassom industrial",
            "Monitoramento on-line com sensores IoT"
          ],
          "formula": "",
          "aplicacoes": [
            "Detecção precoce de falha em rolamentos",
            "Monitoramento de desgaste em engrenagens",
            "Identificação de pontos quentes em painéis elétricos",
            "Análise de contaminação em óleo hidráulico"
          ]
        },
        {
          "titulo": "Manutenção detectiva",
          "definicao": "Estratégia de busca ativa por falhas ocultas (não evidentes em operação normal), por meio de testes e inspeções periódicas. Comum em sistemas de proteção, segurança e emergência, onde a falha só se revela no momento da demanda.",
          "topicos": [
            "Testes de sistemas de segurança",
            "Inspeção de dispositivos de proteção",
            "Válvulas de segurança e alívio",
            "Sistemas de alarme e detecção de incêndio",
            "Periodicidade de teste baseada em risco"
          ],
          "formula": "",
          "aplicacoes": [
            "Teste funcional de SPDA e aterramento",
            "Verificação de sensores de gás",
            "Teste de alarmes de painéis de controle",
            "Inspeção de relés de proteção elétrica"
          ]
        },
        {
          "titulo": "TPM — Manutenção Produtiva Total",
          "definicao": "Metodologia de gestão originada no Japão (JIPM) que busca zero falhas, zero defeitos e zero acidentes através do envolvimento de todos os colaboradores. Estruturada em 8 pilares, integra manutenção autônoma, planejada e melhoria focada.",
          "topicos": [
            "8 pilares do TPM",
            "Manutenção autônoma (MA)",
            "Melhoria específica (kaizen)",
            "Educação e treinamento",
            "OEE — Overall Equipment Effectiveness"
          ],
          "formula": "OEE = Disponibilidade × Performance × Qualidade",
          "aplicacoes": [
            "Programas TPM em montadoras automotivas",
            "Redução de quebras em linhas de envase",
            "Aumento de OEE em células de usinagem",
            "Cultura de manutenção autônoma na produção"
          ]
        },
        {
          "titulo": "PCM — Planejamento e Controle da Manutenção",
          "definicao": "Função gerencial responsável por planejar, programar, controlar e analisar as atividades de manutenção. Envolve a gestão de ordens de serviço, histórico de equipamentos, planejamento de recursos e indicadores de desempenho da manutenção.",
          "topicos": [
            "Estrutura de um PCM",
            "Ordem de serviço (OS) — criação e fluxo",
            "Planejamento de recursos: mão de obra, peças, ferramentas",
            "Programação semanal e diária",
            "KPIs de manutenção"
          ],
          "formula": "",
          "aplicacoes": [
            "Implantação de rotinas de planejamento em indústrias",
            "Controle de backlog de manutenção",
            "Gestão de estoque de sobressalentes críticos",
            "Análise de custos de manutenção por equipamento"
          ]
        },
        {
          "titulo": "Confiabilidade (RAMS)",
          "definicao": "Disciplina da engenharia que estuda a capacidade de um sistema desempenhar sua função requerida sob condições específicas por um período determinado. RAMS integra confiabilidade (Reliability), disponibilidade (Availability), mantenabilidade (Maintainability) e segurança (Safety).",
          "topicos": [
            "Confiabilidade (Reliability)",
            "Disponibilidade (Availability)",
            "Mantenabilidade (Maintainability)",
            "Segurança (Safety)",
            "Engenharia de confiabilidade"
          ],
          "formula": "R(t) = e^(-λt)",
          "aplicacoes": [
            "Garantia de confiabilidade em sistemas aeroespaciais",
            "Projeto de sistemas com redundância",
            "Análise RAM de plantas petroquímicas",
            "Metas contratuais de disponibilidade de ativos"
          ]
        },
        {
          "titulo": "Disponibilidade de equipamentos",
          "definicao": "Percentual de tempo em que um equipamento está apto a operar, considerando o tempo total e as paradas por manutenção. É um dos principais indicadores de desempenho da gestão de ativos.",
          "topicos": [
            "Disponibilidade intrínseca",
            "Disponibilidade operacional",
            "Disponibilidade global",
            "Cálculo de disponibilidade",
            "Fatores que afetam a disponibilidade"
          ],
          "formula": "D = MTBF / (MTBF + MTTR)",
          "aplicacoes": [
            "Metas de disponibilidade em contratos de manutenção",
            "Comparação de desempenho entre linhas de produção",
            "Análise de gargalos por indisponibilidade",
            "Dimensionamento de capacidade produtiva"
          ]
        },
        {
          "titulo": "MTBF — Mean Time Between Failures",
          "definicao": "Métrica de confiabilidade que representa o tempo médio entre falhas consecutivas de um equipamento reparável. Quanto maior o MTBF, mais confiável é o ativo.",
          "topicos": [
            "Cálculo do MTBF",
            "MTBF vs. MTTF (para itens não reparáveis)",
            "Coleta e validação de dados de falha",
            "MTBF como entrada para dimensionamento de estoque",
            "Melhorias de MTBF por engenharia de confiabilidade"
          ],
          "formula": "MTBF = Tempo Total de Operação / Número de Falhas",
          "aplicacoes": [
            "Benchmarking de confiabilidade entre equipamentos similares",
            "Planejamento de manutenção preventiva",
            "Garantia de contratos de desempenho",
            "Projeto de sistemas com requisitos de confiabilidade"
          ]
        },
        {
          "titulo": "MTTR — Mean Time To Repair",
          "definicao": "Métrica de mantenabilidade que mede o tempo médio necessário para reparar um equipamento após a ocorrência de uma falha. Inclui diagnóstico, desmontagem, reparo, montagem e teste.",
          "topicos": [
            "Componentes do MTTR",
            "Estratégias para redução do MTTR",
            "MTTR no cálculo de disponibilidade",
            "Análise de modos de falha que impactam reparo",
            "Treinamento e documentação para redução de MTTR"
          ],
          "formula": "MTTR = Tempo Total de Reparo / Número de Falhas",
          "aplicacoes": [
            "Redução de tempo de reparo em linhas críticas",
            "Projeto para mantenabilidade (Design for Maintenance)",
            "Avaliação de desempenho da equipe de manutenção",
            "Dimensionamento de equipes de plantão"
          ]
        },
        {
          "titulo": "Análise de falhas (RCA)",
          "definicao": "Metodologia estruturada para identificar as causas raiz de falhas em equipamentos ou processos, utilizando ferramentas como diagrama de Ishikawa, 5 Porquês e árvore lógica de falhas. Permite implementar ações corretivas efetivas e evitar recorrência.",
          "topicos": [
            "Método dos 5 Porquês",
            "Diagrama de Ishikawa (causa e efeito)",
            "Árvore de falhas (FTA)",
            "Análise de modo e efeito de falha (FMEA)",
            "Plano de ação e validação"
          ],
          "formula": "",
          "aplicacoes": [
            "Investigação de falhas recorrentes em máquinas",
            "Análise de acidentes industriais",
            "Melhoria contínua baseada em dados de campo",
            "Redução de custos com retrabalho de manutenção"
          ]
        },
        {
          "titulo": "Manutenção centrada em confiabilidade (MCC/RCM)",
          "definicao": "Metodologia sistemática para determinar as estratégias de manutenção mais adequadas para cada ativo, com base em suas funções, falhas funcionais e consequências. Utiliza diagrama de decisão para selecionar tarefas preventivas, preditivas ou corretivas aplicáveis e efetivas.",
          "topicos": [
            "Diagrama de decisão RCM",
            "Análise de modos de falha e efeitos (FMEA)",
            "Seleção de tarefas de manutenção",
            "RCM vs. RCM2 vs. RCM3",
            "Implementação RCM com softwares especializados"
          ],
          "formula": "",
          "aplicacoes": [
            "Definição de planos de manutenção para ativos críticos",
            "Otimização de custos de manutenção em refinarias",
            "Revisão de planos preventivos existentes",
            "Manutenção de sistemas aeronáuticos"
          ]
        },
        {
          "titulo": "Manutenção autônoma",
          "definicao": "Pilar do TPM onde os operadores de produção realizam atividades básicas de manutenção, como limpeza, lubrificação, inspeção e pequenos ajustes. Desenvolve o senso de propriedade do equipamento e libera a equipe técnica para manutenções mais complexas.",
          "topicos": [
            "Etapas de implementação da manutenção autônoma",
            "Padrões de limpeza e inspeção",
            "Treinamento de operadores",
            "Indicadores de manutenção autônoma",
            "Integração com manutenção planejada"
          ],
          "formula": "",
          "aplicacoes": [
            "Rotinas diárias de limpeza e lubrificação",
            "Inspeção sensorial (visão, audição, tato) por operadores",
            "Identificação e correção de anomalias menores",
            "Padronização de postos de trabalho (5S + MA)"
          ]
        },
        {
          "titulo": "Engenharia de confiabilidade",
          "definicao": "Disciplina que aplica princípios estatísticos e de engenharia para garantir que um sistema ou equipamento opere sem falhas por um período determinado. Utiliza ferramentas como distribuição de Weibull, testes de vida acelerada e análise de dados de campo.",
          "topicos": [
            "Distribuição de Weibull e análise de falhas",
            "Curva da banheira (infantil, aleatória, desgaste)",
            "Testes de confiabilidade (ALT, HALT)",
            "Confiabilidade de sistemas: série, paralelo e k-out-of-n",
            "Predição de confiabilidade e FMECA"
          ],
          "formula": "Rs = R1 × R2 × R3 (sistemas em série)",
          "aplicacoes": [
            "Previsão de vida útil de componentes críticos",
            "Projeto de sistemas com requisitos de confiabilidade",
            "Análise de garantia e campo",
            "Suporte à decisão entre manutenção preventiva e corretiva"
          ]
        },
        {
          "titulo": "FMEA de equipamento",
          "definicao": "Ferramenta de análise de riscos que identifica modos de falha potenciais de um equipamento, suas causas, efeitos e prioriza ações preventivas pelo Número de Prioridade de Risco (NPR). É uma etapa essencial do RCM.",
          "topicos": [
            "Modo de falha, causa e efeito",
            "Índices de severidade, ocorrência e detecção",
            "NPR (Número de Prioridade de Risco)",
            "Ações preventivas e validação",
            "FMEA de processo vs. FMEA de equipamento"
          ],
          "formula": "NPR = S × O × D",
          "aplicacoes": [
            "Análise de riscos em equipamentos de produção",
            "Priorização de planos de manutenção",
            "Suporte ao RCM e à engenharia de confiabilidade",
            "Gestão de mudanças (MOC) de equipamentos"
          ]
        },
        {
          "titulo": "Análise de óleo e vibração",
          "definicao": "Técnicas preditivas complementares que monitoram a condição de máquinas rotativas. A análise de óleo identifica contaminação, desgaste e degradação do lubrificante. A análise de vibração detecta desbalanceamento, desalinhamento e falhas de rolamentos.",
          "topicos": [
            "Espectroscopia e ferramentas de análise de óleo",
            "Análise de tendências de vibração",
            "Espectro FFT e envelope",
            "Normas ISO 10816 (vibração) e ISO 4406 (óleo)",
            "Integração com CMMS e sistemas de monitoramento on-line"
          ],
          "formula": "",
          "aplicacoes": [
            "Monitoramento de caixas de engrenagens",
            "Diagnóstico de bombas centrífugas",
            "Acompanhamento de compressores alternativos",
            "Programa de lubrificação baseada em condição"
          ]
        },
        {
          "titulo": "Termografia industrial",
          "definicao": "Técnica preditiva que utiliza câmeras infravermelhas para medir a temperatura superficial de equipamentos e componentes elétricos, identificando pontos quentes anormais que indicam falhas incipientes, como mau contato, sobrecarga e desgaste de isolamento.",
          "topicos": [
            "Princípios físicos da termografia",
            "Câmeras térmicas e configurações",
            "Emissividade e correções",
            "Padrões e normas (ABNT NBR 16214, ISO 18434)",
            "Categorização de anomalias térmicas"
          ],
          "formula": "",
          "aplicacoes": [
            "Inspeção de painéis elétricos e subestações",
            "Detecção de falhas em isolamento térmico",
            "Monitoramento de fornos e reatores",
            "Análise de motores e acoplamentos"
          ]
        },
        {
          "titulo": "Ultrassom industrial",
          "definicao": "Técnica preditiva que detecta ondas sonoras de alta frequência geradas por atrito, impacto, descargas elétricas e vazamentos. Permite identificar falhas em rolamentos, válvulas, sistemas de vácuo e componentes elétricos em estágio inicial.",
          "topicos": [
            "Física do ultrassom aplicado à manutenção",
            "Detectores de ultrassom (modo heteródino)",
            "Análise de rolamentos com ultrassom",
            "Detecção de vazamentos em sistemas pressurizados",
            "Descargas parciais em equipamentos elétricos"
          ],
          "formula": "",
          "aplicacoes": [
            "Detecção de vazamentos em redes de ar comprimido",
            "Inspeção de rolamentos de motores",
            "Monitoramento de válvulas de controle",
            "Análise de descargas parciais em cabos e transformadores"
          ]
        },
        {
          "titulo": "Manutenção baseada em condição (CBM)",
          "definicao": "Estratégia que recomenda ações de manutenção com base na condição real do equipamento, monitorada por técnicas preditivas (vibração, termografia, óleo, ultrassom). Substitui intervenções por tempo fixo por decisões orientadas por dados de condição.",
          "topicos": [
            "Técnicas de monitoramento de condição",
            "Limites de alarme e tendências",
            "Integração CBM com sistemas CMMS",
            "Análise de custo-benefício do CBM",
            "CBM para máquinas rotativas e estáticas"
          ],
          "formula": "",
          "aplicacoes": [
            "Manutenção de turbinas e geradores",
            "Monitoramento contínuo de bombas críticas",
            "Programa CBM em frotas de caminhões",
            "Gestão de ativos de utilidades industriais"
          ]
        },
        {
          "titulo": "Sistema de gestão de manutenção (CMMS/SGM)",
          "definicao": "Software integrado que gerencia todas as atividades de manutenção: ordens de serviço, planejamento, histórico de equipamentos, estoque de peças e indicadores. Automatiza rotinas, melhora a rastreabilidade e suporta a tomada de decisão baseada em dados.",
          "topicos": [
            "Funcionalidades de um CMMS",
            "Cadastro de equipamentos e árvore de ativos",
            "Gestão de ordens de serviço (OS)",
            "Controle de estoque de sobressalentes",
            "Relatórios e KPIs automatizados"
          ],
          "formula": "",
          "aplicacoes": [
            "Implantação de sistema CMMS em plantas industriais",
            "Gestão de manutenção de frotas",
            "Controle de ordens de serviço em hospitais",
            "Manutenção predial e facilities management"
          ]
        }
      ]
    },
    {
      "id": "ergonomia",
      "nome": "Engenharia do Trabalho",
      "icone": "users",
      "cor": "#0284c7",
      "descricao": "Ergonomia, segurança do trabalho e saúde ocupacional.",
      "subtopicos": [
        {
          "titulo": "Ergonomia física",
          "definicao": "Ramo da ergonomia que estuda a interação entre o corpo humano e os elementos do sistema de trabalho, incluindo posturas, movimentos repetitivos, aplicação de força e organização física do posto. Busca prevenir lesões musculoesqueléticas (LER/DORT) e promover conforto.",
          "topicos": [
            "Posturas no trabalho",
            "Movimentos repetitivos",
            "Aplicação de força",
            "Antropometria estática e dinâmica",
            "Biomecânica ocupacional"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de postos de trabalho em linhas de montagem",
            "Dimensionamento de mesas e cadeiras para escritórios",
            "Análise de riscos biomecânicos em atividades manuais",
            "Adequação de ferramentas manuais"
          ]
        },
        {
          "titulo": "Ergonomia cognitiva",
          "definicao": "Campo que estuda os processos mentais envolvidos no trabalho: percepção, memória, raciocínio, tomada de decisão e carga mental. Preocupa-se com a usabilidade de interfaces, complexidade de tarefas e fatores que afetam o desempenho cognitivo do trabalhador.",
          "topicos": [
            "Carga mental e fadiga cognitiva",
            "Usabilidade de interfaces homem-máquina",
            "Tomada de decisão sob pressão",
            "Sistemas de alarme e alerta",
            "Fatores humanos em salas de controle"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de IHMs de salas de controle",
            "Simplificação de procedimentos operacionais",
            "Redução de erros humanos em centros de distribuição",
            "Treinamento cognitivo para operadores"
          ]
        },
        {
          "titulo": "Ergonomia organizacional",
          "definicao": "Dimensão da ergonomia que trata da estruturação dos sistemas de trabalho, incluindo turnos, ritmo, conteúdo das tarefas, comunicação e cultura organizacional. Visa otimizar a eficiência do sistema considerando o bem-estar e a satisfação dos trabalhadores.",
          "topicos": [
            "Organização do trabalho e turnos",
            "Trabalho em equipe e comunicação",
            "Gestão participativa",
            "Conteúdo e enriquecimento de tarefas",
            "Cultura de segurança"
          ],
          "formula": "",
          "aplicacoes": [
            "Reestruturação de escalas de turno",
            "Programas de trabalho em equipe autogerenciada",
            "Análise de carga de trabalho em call centers",
            "Implementação de ciclos de melhoria participativa"
          ]
        },
        {
          "titulo": "Segurança do trabalho",
          "definicao": "Conjunto de medidas técnicas, educacionais e administrativas para prevenir acidentes e doenças ocupacionais. Engloba identificação de riscos, implementação de medidas de controle e promoção de uma cultura de segurança nas organizações.",
          "topicos": [
            "Prevenção de acidentes",
            "Análise de riscos (APR)",
            "Inspeções de segurança",
            "Treinamentos (NRs, CIPA)",
            "Indicadores de segurança (TAE, TTF)"
          ],
          "formula": "TAE = (Nº de acidentes × 1.000.000) / Horas-homem trabalhadas",
          "aplicacoes": [
            "Programas de segurança comportamental",
            "Análise de riscos em atividades críticas",
            "Investigação de acidentes do trabalho",
            "Elaboração de planos de emergência"
          ]
        },
        {
          "titulo": "Higiene ocupacional",
          "definicao": "Ciência que antecipa, reconhece, avalia e controla agentes ambientais (físicos, químicos e biológicos) presentes nos locais de trabalho que podem causar doenças ou desconforto. Fundamental para a preservação da saúde do trabalhador.",
          "topicos": [
            "Agentes físicos (ruído, calor, radiação, vibração)",
            "Agentes químicos (gases, vapores, poeiras)",
            "Agentes biológicos (fungos, bactérias, vírus)",
            "Limites de exposição ocupacional (LT, TWA, STEL)",
            "Técnicas de medição e amostragem"
          ],
          "formula": "",
          "aplicacoes": [
            "Medição de ruído em indústrias metalúrgicas",
            "Avaliação de exposição a poeira de sílica",
            "Controle de agentes biológicos em hospitais",
            "Monitoramento de calor em fundições"
          ]
        },
        {
          "titulo": "NRs — Normas Regulamentadoras",
          "definicao": "Conjunto de disposições legais complementares à Consolidação das Leis do Trabalho (CLT) que estabelecem obrigações e requisitos mínimos para a segurança e saúde no trabalho no Brasil. São atualizadas pela Secretaria de Inspeção do Trabalho.",
          "topicos": [
            "NR-17 — Ergonomia",
            "NR-12 — Segurança em Máquinas",
            "NR-35 — Trabalho em Altura",
            "NR-33 — Espaço Confinado",
            "NR-06 — EPI"
          ],
          "formula": "",
          "aplicacoes": [
            "Adequação de máquinas à NR-12",
            "Elaboração de laudos ergonômicos (NR-17)",
            "Gestão de EPIs conforme NR-06",
            "Permissão de trabalho conforme NR-35 e NR-33"
          ]
        },
        {
          "titulo": "Análise Ergonômica do Trabalho (AET)",
          "definicao": "Metodologia de análise aprofundada da situação real de trabalho, que investiga a atividade do trabalhador, as condições de execução e as exigências físicas e cognitivas. Subsidia recomendações de melhoria para adequar o trabalho ao ser humano.",
          "topicos": [
            "Demanda, tarefa e atividade",
            "Observação global e sistemática",
            "Entrevistas e autoconfrontação",
            "Análise da atividade real vs. prescrita",
            "Recomendações ergonômicas"
          ],
          "formula": "",
          "aplicacoes": [
            "Diagnóstico ergonômico em montadoras",
            "Adequação de postos administrativos",
            "Melhoria de processos com alto absenteísmo",
            "AET como subsídio para ação civil pública"
          ]
        },
        {
          "titulo": "Redução de acidentes",
          "definicao": "Conjunto de estratégias e programas contínuos para diminuir a ocorrência de acidentes do trabalho, combinando engenharia de segurança, treinamento, gestão comportamental e análise de dados históricos para eliminar causas raiz.",
          "topicos": [
            "Programa de prevenção de acidentes",
            "Análise de quase-acidentes",
            "Cultura de segurança",
            "Indicadores proativos e reativos",
            "Círculos de segurança (kaizen de segurança)"
          ],
          "formula": "Taxa de Frequência (TF) = (N × 1.000.000) / HHT",
          "aplicacoes": [
            "Programa de metas de segurança em obras",
            "Campanhas de segurança comportamental",
            "Sistema de reporte de quase-acidentes",
            "Análise de tendências de acidentalidade"
          ]
        },
        {
          "titulo": "PPRA e PCMSO",
          "definicao": "Programas regulamentados pelas NRs brasileiras: PPRA (Programa de Prevenção de Riscos Ambientais, substituído pelo PGR) e PCMSO (Programa de Controle Médico de Saúde Ocupacional). O PGR identifica e gerencia riscos ocupacionais; o PCMSO monitora a saúde dos trabalhadores por exames periódicos.",
          "topicos": [
            "PGR — Programa de Gerenciamento de Riscos",
            "Inventário de riscos ocupacionais",
            "Plano de ação do PGR",
            "PCMSO e exames médicos (admissional, periódico, demissional)",
            "ASO — Atestado de Saúde Ocupacional"
          ],
          "formula": "",
          "aplicacoes": [
            "Elaboração de PGR para indústrias",
            "Gestão de ASO em empresas de grande porte",
            "Programa de exames periódicos em mineradoras",
            "Monitoramento de exposição a agentes nocivos"
          ]
        },
        {
          "titulo": "CIPA e SESMT",
          "definicao": "CIPA (Comissão Interna de Prevenção de Acidentes) é uma comissão paritária de trabalhadores e empregados que promove a prevenção. SESMT (Serviços Especializados em Engenharia de Segurança e em Medicina do Trabalho) é a equipe técnica multidisciplinar obrigatória conforme grau de risco.",
          "topicos": [
            "Dimensionamento da CIPA (NR-05)",
            "Dimensionamento do SESMT (NR-04)",
            "Atribuições e funcionamento da CIPA",
            "Engenheiro de segurança, técnico, médico e enfermeiro do trabalho",
            "Mapeamento de riscos pela CIPA"
          ],
          "formula": "",
          "aplicacoes": [
            "Reuniões e inspeções de CIPA em fábricas",
            "Elaboração de mapa de riscos",
            "Gestão do SESMT em canteiros de obras",
            "Treinamento de brigada de emergência"
          ]
        },
        {
          "titulo": "EPI e EPC",
          "definicao": "EPI (Equipamento de Proteção Individual) protege o trabalhador individualmente contra riscos específicos (capacete, luva, óculos). EPC (Equipamento de Proteção Coletiva) protege um grupo (redes de proteção, enclausuramento, exaustão). Ambos regulados pela NR-06.",
          "topicos": [
            "Tipos de EPI (cabeça, olhos, vias aéreas, mãos, pés)",
            "Certificação e CA (Certificado de Aprovação)",
            "Exaustão e ventilação local (EPC)",
            "Enclausuramento de máquinas",
            "Treinamento e guarda de EPI"
          ],
          "formula": "",
          "aplicacoesacoes": [
            "Distribuição e controle de EPI em indústrias",
            "Instalação de sistema de exaustão em soldagem",
            "Proteção de máquinas com sensores de segurança",
            "Programa de conscientização de uso de EPI"
          ]
        },
        {
          "titulo": "LOTO — Lockout Tagout",
          "definicao": "Procedimento de segurança que isola fontes de energia (elétrica, mecânica, pneumática, térmica) de máquinas e equipamentos durante manutenção ou limpeza, utilizando cadeados e etiquetas de bloqueio. Previne acionamentos acidentais e protege a equipe.",
          "topicos": [
            "Procedimento de bloqueio e etiquetagem",
            "Identificação de pontos de energia",
            "Cadeados, hasps e etiquetas",
            "Verificação de zero energia",
            "Treinamento e auditoria LOTO"
          ],
          "formula": "",
          "aplicacoes": [
            "Bloqueio de painéis elétricos para manutenção",
            "Isolamento de bombas e válvulas",
            "Manutenção de prensas e injetoras",
            "Procedimentos em refinarias e plantas químicas"
          ]
        },
        {
          "titulo": "Ergonomia de posto de trabalho",
          "definicao": "Aplicação de princípios ergonômicos ao design de estações de trabalho, considerando as dimensões antropométricas, alcances, ângulos de visão e ajustabilidade dos móveis e equipamentos. Visa conforto, eficiência e prevenção de lesões.",
          "topicos": [
            "Dimensionamento de bancadas e mesas",
            "Ajustabilidade de cadeiras e suportes",
            "Posicionamento de monitores e teclados",
            "Iluminação e ofuscamento",
            "Análise de alcance e zonas de conforto"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de postos de trabalho administrativos",
            "Adegação de células de produção com esteiras",
            "Postos de checkout em supermercados",
            "Cabines de operação de máquinas"
          ]
        },
        {
          "titulo": "Antropometria",
          "definicao": "Ciência da medição das dimensões e proporções do corpo humano, aplicada ao design de postos de trabalho, equipamentos e produtos. Considera variáveis como estatura, alcance e perímetros para projetar para a população usuária.",
          "topicos": [
            "Medidas antropométricas estáticas e dinâmicas",
            "Percentis e população-alvo",
            "Bases de dados antropométricos brasileiros",
            "Aplicação: projeto para extremos vs. ajustável",
            "Diferenças entre gêneros e etnias"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de cadeiras e assentos",
            "Dimensionamento de cabines de veículos",
            "Mobiliário escolar",
            "Postos de trabalho em linhas de montagem"
          ]
        },
        {
          "titulo": "Biomecânica ocupacional",
          "definicao": "Estudo dos movimentos, forças e momentos atuantes no corpo humano durante o trabalho, aplicando princípios da mecânica para analisar posturas, esforços e riscos de lesões. Auxilia no projeto de tarefas com menor exigência física.",
          "topicos": [
            "Cinemática e cinética do movimento humano",
            "Modelos biomecânicos (2D e 3D)",
            "Análise de levantamento de carga (NIOSH)",
            "Torque e compressão no disco lombar",
            "Ferramentas de análise (3DSSPP, AnyBody)"
          ],
          "formula": "Equação NIOSH: RWL = LC × HM × VM × DM × AM × FM × CM",
          "aplicacoes": [
            "Análise de riscos de lesão em levantamento de carga",
            "Projeto de movimentação de materiais",
            "Avaliação ergonômica de ferramentas manuais",
            "Redução de distúrbios osteomusculares"
          ]
        },
        {
          "titulo": "Fatores humanos (Human Factors)",
          "definicao": "Disciplina que estuda as capacidades e limitações humanas no contexto de sistemas homem-máquina, integrando psicologia, engenharia e design. Busca otimizar o desempenho do sistema considerando os aspectos humanos, melhorando segurança e eficiência.",
          "topicos": [
            "Erro humano e confiabilidade humana",
            "Carga de trabalho e vigilância",
            "Tomada de decisão em situações de emergência",
            "Sistemas de alarme e automação",
            "Usabilidade e experiência do usuário"
          ],
          "formula": "HEART: Probabilidade de erro humano (HEP) = NEP × EPC × APC",
          "aplicacoes": [
            "Projeto de salas de controle de usinas",
            "Análise de erros em procedimentos de manutenção",
            "Interfaces de sistemas críticos (aviação, nuclear)",
            "Treinamento de equipes para situações de crise"
          ]
        },
        {
          "titulo": "Análise de riscos (APR)",
          "definicao": "Ferramenta de segurança que identifica, avalia e controla os riscos de cada etapa de uma atividade ou tarefa, antes de sua execução. É realizada por meio de formulário padronizado e discutida com a equipe envolvida.",
          "topicos": [
            "Etapas da APR: identificação, avaliação, controle",
            "Hierarquia de controles (eliminação, substituição, engenharia, administrativo, EPI)",
            "APR para trabalho em altura, elétrico, espaço confinado",
            "Permissão de Trabalho (PT)",
            "Análise preliminar de riscos (APR) no projeto"
          ],
          "formula": "Risco = Probabilidade × Severidade",
          "aplicacoes": [
            "APR para manutenção em altura",
            "APR para operação de máquinas críticas",
            "Análise de riscos em atividades de logística",
            "PT para trabalho a quente e escavação"
          ]
        },
        {
          "titulo": "Mapa de riscos",
          "definicao": "Representação gráfica dos riscos existentes em cada setor ou posto de trabalho, utilizando círculos de tamanhos e cores diferentes para classificar a gravidade e tipo de risco (físico, químico, biológico, ergonômico, de acidente). Exigência da CIPA.",
          "topicos": [
            "Cores padrão dos riscos (verde, vermelho, marrom, amarelo, azul)",
            "Levantamento de riscos com os trabalhadores",
            "Representação gráfica do layout",
            "Atualização periódica",
            "Divulgação e treinamento sobre o mapa"
          ],
          "formula": "",
          "aplicacoes": [
            "Mapeamento de riscos em indústrias",
            "Mapa de riscos em canteiros de obra",
            "Identificação participativa de perigos",
            "Comunicação visual de segurança"
          ]
        },
        {
          "titulo": "Prevenção de acidentes",
          "definicao": "Conjunto integrado de medidas de engenharia, treinamento, gestão e cultura organizacional para eliminar ou reduzir a ocorrência de acidentes do trabalho. Envolve identificação de perigos, análise de causas e implementação de controles efetivos.",
          "topicos": [
            "Teoria dos dominós de Heinrich",
            "Modelo de Reason (queijo suíço)",
            "Causas imediatas e básicas de acidentes",
            "Investigação de acidentes",
            "Indicadores de desempenho em segurança"
          ],
          "formula": "",
          "aplicacoes": [
            "Programa de segurança baseada em comportamento",
            "Sistema de gestão de segurança (ISO 45001)",
            "Auditorias de segurança em plantas industriais",
            "Campanhas de prevenção sazonais"
          ]
        },
        {
          "titulo": "ERP e GRO (Gestão de Riscos Ocupacionais)",
          "definicao": "Conjunto de processos integrados para identificar, analisar, avaliar e controlar os riscos ocupacionais (GRO), conforme NR-01. O ERP (Exame de Riscos Profissionais) é uma abordagem estruturada de gestão sistemática de riscos à saúde e segurança dos trabalhadores.",
          "topicos": [
            "Processo GRO segundo NR-01",
            "Inventário de riscos ocupacionais",
            "Plano de ação do PGR",
            "Monitoramento e revisão periódica",
            "Integração GRO com outros sistemas (SGI)"
          ],
          "formula": "",
          "aplicacoesacoes": [
            "Implantação do GRO em indústrias",
            "Gestão integrada de riscos e segurança",
            "Auditoria interna de PGR",
            "Revisão anual de riscos ocupacionais"
          ]
        }
      ]
    },
    {
      "id": "sustentabilidade",
      "nome": "Sustentabilidade",
      "icone": "leaf",
      "cor": "#22c55e",
      "descricao": "Práticas sustentáveis, ESG e economia circular na indústria.",
      "subtopicos": [
        {
          "titulo": "ESG — Environmental, Social and Governance",
          "definicao": "Conjunto de critérios ambientais, sociais e de governança usados para avaliar o desempenho de sustentabilidade e a responsabilidade corporativa. Diferencia empresas comprometidas com práticas éticas e de baixo impacto, influenciando investidores e consumidores.",
          "topicos": [
            "Pilar Ambiental (E): emissões, resíduos, recursos",
            "Pilar Social (S): direitos humanos, diversidade, comunidade",
            "Pilar Governança (G): compliance, transparência, ética",
            "ESG ratings e agências avaliadoras",
            "Relatórios ESG e frameworks (GRI, SASB, TCFD)"
          ],
          "formula": "",
          "aplicacoes": [
            "Estruturação de comitê ESG corporativo",
            "Reporte anual de sustentabilidade",
            "Seleção de fornecedores com critérios ESG",
            "Acesso a linhas de crédito verdes (green bonds)"
          ]
        },
        {
          "titulo": "Economia circular",
          "definicao": "Modelo econômico regenerativo que mantém produtos, materiais e recursos em uso pelo maior tempo possível, eliminando resíduos e poluição. Baseia-se em três princípios: eliminar resíduos e poluição, circular materiais em seu maior valor e regenerar a natureza.",
          "topicos": [
            "Princípios da economia circular (Ellen MacArthur Foundation)",
            "10 R's da circularidade (Recusar, Reduzir, Reusar, Reciclar...)",
            "Ciclos biológicos e técnicos",
            "Design para circularidade",
            "Modelos de negócio circulares (PaaS, servitização)"
          ],
          "formula": "",
          "aplicacoes": [
            "Cadeias produtivas com resíduo zero",
            "Remanufatura de motores e componentes",
            "Produto como serviço (lighting as a service)",
            "Logística reversa de eletrônicos"
          ]
        },
        {
          "titulo": "Gestão ambiental",
          "definicao": "Sistema estruturado de políticas, práticas e procedimentos que uma organização adota para controlar seus impactos ambientais, cumprir regulamentações e melhorar continuamente seu desempenho ecológico. Frequentemente alinhada à ISO 14001.",
          "topicos": [
            "Política ambiental e objetivos",
            "Aspectos e impactos ambientais",
            "Atendimento a requisitos legais",
            "SGA — Sistema de Gestão Ambiental",
            "Auditoria ambiental (interna e externa)"
          ],
          "formula": "",
          "aplicacoes": [
            "Implementação de SGA conforme ISO 14001",
            "Gestão de licenciamento ambiental",
            "Programa de redução de consumo de água",
            "Monitoramento de efluentes e emissões"
          ]
        },
        {
          "titulo": "Eficiência energética",
          "definicao": "Uso otimizado de energia para realizar um trabalho, reduzindo o consumo sem comprometer a produtividade. Envolve substituição de equipamentos, automação de sistemas, recuperação de calor e adoção de fontes renováveis.",
          "topicos": [
            "Diagnóstico energético e benchmarking",
            "Motores de alta eficiência (IE3/IE4)",
            "Sistemas de iluminação LED com controle",
            "Recuperação de calor residual",
            "Cogeração e trigeração"
          ],
          "formula": "Eficiência (%) = Energia útil / Energia total consumida × 100",
          "aplicacoes": [
            "Industrial — otimização de utilidades",
            "Substituição de motores elétricos antigos",
            "Gestão de demanda em horário de ponta",
            "Certificação Procel e etiquetagem energética"
          ]
        },
        {
          "titulo": "Gestão de resíduos sólidos",
          "definicao": "Conjunto de atividades de coleta, segregação, armazenamento, transporte, tratamento e disposição final de resíduos, seguindo a hierarquia: não geração, redução, reuso, reciclagem, tratamento e disposição final. Regida pela Política Nacional de Resíduos Sólidos (PNRS).",
          "topicos": [
            "Classificação de resíduos (perigosos e não perigosos — NBR 10004)",
            "Coleta seletiva e logística reversa",
            "Tratamento (incineração, compostagem, aterro)",
            "MTR — Manifesto de Transporte de Resíduos",
            "Indicadores de gestão de resíduos"
          ],
          "formula": "",
          "aplicacoes": [
            "Plano de gerenciamento de resíduos industriais",
            "Programa de reciclagem em fábricas",
            "Destinação de resíduos perigosos",
            "Coprocessamento em fornos de cimento"
          ]
        },
        {
          "titulo": "Pegada de carbono (Carbon Footprint)",
          "definicao": "Medida da quantidade total de gases de efeito estufa (GEE) emitidos direta ou indiretamente por uma atividade, produto, serviço ou organização, expressa em toneladas de CO2 equivalente (tCO2e). Base para estratégias de neutralização climática.",
          "topicos": [
            "Escopos 1, 2 e 3 de emissões (GHG Protocol)",
            "Cálculo de emissões diretas e indiretas",
            "Fatores de emissão por fonte energética",
            "Compensação via créditos de carbono",
            "Declaração de pegada de carbono de produto"
          ],
          "formula": "Pegada de Carbono (tCO₂e) = Σ (Dado de Atividade × Fator de Emissão)",
          "aplicacoes": [
            "Inventário corporativo de GEE",
            "Rotulagem de pegada de carbono em produtos",
            "Compensação de viagens corporativas",
            "Relatórios CDP (Carbon Disclosure Project)"
          ]
        },
        {
          "titulo": "Produção mais limpa (P+L)",
          "definicao": "Estratégia ambiental preventiva aplicada a processos, produtos e serviços para aumentar a ecoeficiência e reduzir riscos à saúde humana e ao meio ambiente. Atua na fonte, minimizando o uso de matérias-primas e a geração de resíduos.",
          "topicos": [
            "Níveis da P+L (fonte, reciclagem interna, externa)",
            "Ecoeficiência e indicadores",
            "Substituição de insumos tóxicos",
            "Otimização de processos",
            "Estudos de caso P+L em setores industriais"
          ],
          "formula": "",
          "aplicacoes": [
            "Redução de solventes em pintura industrial",
            "Minimização de perdas em processos têxteis",
            "Substituição de combustíveis fósseis",
            "Programas P+L em curtumes e frigoríficos"
          ]
        },
        {
          "titulo": "ISO 14001:2024",
          "definicao": "Norma internacional que especifica requisitos para um Sistema de Gestão Ambiental (SGA), permitindo que organizações melhorem seu desempenho ambiental, cumpram obrigações legais e alcancem objetivos ambientais de forma sistemática.",
          "topicos": [
            "Estrutura PDCA aplicada ao SGA",
            "Contexto da organização e partes interessadas",
            "Política ambiental e planejamento",
            "Avaliação de desempenho e auditoria",
            "Melhoria contínua e não conformidades"
          ],
          "formula": "",
          "aplicacoes": [
            "Certificação de SGA em indústrias",
            "Integração com ISO 9001 e 45001",
            "Redução de multas e passivos ambientais",
            "Diferencial competitivo em licitações"
          ]
        },
        {
          "titulo": "Logística reversa",
          "definicao": "Processo de planejamento, implementação e controle do fluxo reverso de produtos e materiais após o consumo, para reaproveitamento, reciclagem ou descarte adequado. Instrumento da PNRS que compartilha responsabilidade entre fabricantes, distribuidores e consumidores.",
          "topicos": [
            "Canais de distribuição reversos",
            "Acordos setoriais de logística reversa",
            "Centros de coleta e triagem",
            "Fluxos: embalagens, eletroeletrônicos, pneus, óleo",
            "Indicadores de retorno e reciclagem"
          ],
          "formula": "",
          "aplicacoes": [
            "Sistema de logística reversa de embalagens",
            "Retorno de baterias e pilhas pós-consumo",
            "Reaproveitamento de resíduos eletrônicos",
            "Programa de reciclagem de pneus inservíveis"
          ]
        },
        {
          "titulo": "Relatório de sustentabilidade (GRI)",
          "definicao": "Documento corporativo que divulga o desempenho econômico, ambiental e social de uma organização, seguindo padrões da Global Reporting Initiative (GRI). Permite transparência e comparabilidade para stakeholders, incluindo investidores e sociedade.",
          "topicos": [
            "Padrões GRI (Universal, Setoriais, Temáticos)",
            "Materialidade e engajamento de stakeholders",
            "Indicadores GRI por dimensão",
            "Verificação externa e assurance",
            "Relato integrado (IIRC) e sinergia GRI"
          ],
          "formula": "",
          "aplicacoes": [
            "Elaboração de relatório anual GRI",
            "Reporte de ODS nos relatórios",
            "Comunicação de progresso ESG",
            "Benchmarking setorial de sustentabilidade"
          ]
        },
        {
          "titulo": "Análise de ciclo de vida (ACV)",
          "definicao": "Metodologia padronizada (ISO 14040/14044) que quantifica os impactos ambientais de um produto, processo ou serviço ao longo de todo seu ciclo de vida — da extração de matérias-primas ao descarte final. Identifica hotspots e oportunidades de melhoria.",
          "topicos": [
            "Etapas da ACV: definição de objetivo, ICV, AICV, interpretação",
            "Categorias de impacto (aquecimento global, acidificação, eutrofização)",
            "Softwares de ACV (SimaPro, GaBi, OpenLCA)",
            "Bancos de dados (Ecoinvent, ELCD)",
            "Declaração Ambiental de Produto (EPD)"
          ],
          "formula": "",
          "aplicacoes": [
            "Comparação de impacto entre embalagens",
            "Design ecológico de produtos",
            "Rotulagem ambiental (Tipo I, II, III)",
            "Suporte a declarações de produto neutro em carbono"
          ]
        },
        {
          "titulo": "Inventário de GEE",
          "definicao": "Documento que quantifica as emissões e remoções de gases de efeito estufa de uma organização, seguindo metodologias como GHG Protocol e IPCC. Base para estratégias de redução, relatórios ESG e participação em mercados de carbono.",
          "topicos": [
            "GHG Protocol — Escopos 1, 2, 3",
            "Metodologia IPCC para cálculo",
            "Incerteza e garantia de qualidade",
            "Relatório de inventário e verificação",
            "Metas baseadas na ciência (SBTi)"
          ],
          "formula": "Emissão = Dado de Atividade × Fator de Emissão × GWP",
          "aplicacoes": [
            "Inventário corporativo anual de GEE",
            "Registro público no Programa GHG Protocol",
            "Metas SBTi (Science Based Targets)",
            "Relatório para bolsas de carbono"
          ]
        },
        {
          "titulo": "Crédito de carbono",
          "definicao": "Certificado financeiro que representa a redução ou remoção de uma tonelada de CO2 equivalente da atmosfera. Pode ser negociado em mercados regulados (MDL, ETS) ou voluntários (VCS, Gold Standard). Instrumento para financiar projetos climáticos.",
          "topicos": [
            "Mercado regulado (Sistema Brasileiro de Comércio de Emissões — SBCE)",
            "Mercado voluntário global",
            "Metodologias de projetos de crédito",
            "Registros (Verra, Gold Standard, MDL)",
            "Compra e venda de créditos de carbono"
          ],
          "formula": "1 Crédito = 1 tCO₂e reduzida ou removida",
          "aplicacoes": [
            "Projetos de reflorestamento e REDD+",
            "Geração de energia renovável",
            "Eficiência energética industrial",
            "Metas de carbono neutro corporativo"
          ]
        },
        {
          "titulo": "Indicadores de sustentabilidade",
          "definicao": "Métricas quantitativas e qualitativas usadas para medir e comunicar o desempenho de sustentabilidade de uma organização nas dimensões ambiental, social e econômica. Permitem monitoramento de metas, benchmarking e transparência com stakeholders.",
          "topicos": [
            "Indicadores de pressão, estado e resposta (PER)",
            "Indicadores ambientais: emissões, água, resíduos, energia",
            "Indicadores sociais: segurança, diversidade, treinamento",
            "Indicadores econômicos: valor distribuído, investimento socioambiental",
            "Painel de indicadores ESG integrados"
          ],
          "formula": "Intensidade de Carbono = tCO₂e / Receita Líquida",
          "aplicacoes": [
            "Dashboard de sustentabilidade corporativa",
            "Relato anual de indicadores GRI",
            "Metas ESG e acompanhamento trimestral",
            "Benchmarking setorial de sustentabilidade"
          ]
        },
        {
          "titulo": "ODS — Objetivos de Desenvolvimento Sustentável",
          "definicao": "Conjunto de 17 objetivos globais estabelecidos pela ONU na Agenda 2030, que abordam desafios como erradicação da pobreza, ação climática, consumo responsável e inovação industrial. As empresas mapeiam sua contribuição para os ODS como parte da estratégia ESG.",
          "topicos": [
            "17 ODS e suas metas",
            "ODS 9 — Indústria, Inovação e Infraestrutura",
            "ODS 12 — Consumo e Produção Responsáveis",
            "ODS 13 — Ação Climática",
            "Mapeamento de impacto nos ODS e relato"
          ],
          "formula": "",
          "aplicacoes": [
            "Alinhamento de estratégia corporativa aos ODS",
            "Relato de contribuição aos ODS",
            "Inovação de produtos alinhada ao ODS 12",
            "Programas sociais alinhados ao ODS 1 e 10"
          ]
        },
        {
          "titulo": "Rotulagem ambiental",
          "definicao": "Sistema de certificação que atesta o desempenho ambiental de produtos ou serviços, permitindo que consumidores identifiquem opções mais sustentáveis. Divide-se em Tipo I (ISO 14024), Tipo II (autodeclarações, ISO 14021) e Tipo III (EPD, ISO 14025).",
          "topicos": [
            "Selos ambientais no Brasil (ABNT, Procel, FSC, Ecolabel)",
            "Declarações ambientais de produto (EPD)",
            "Critérios de certificação e verificação",
            "Greenwashing e boas práticas de comunicação",
            "Impacto na decisão de compra B2B e B2C"
          ],
          "formula": "",
          "aplicacoes": [
            "Certificação FSC para produtos de papel",
            "Selos de eficiência energética (Procel/Energy Star)",
            "EPD para materiais de construção",
            "Alegações ambientais verificadas em embalagens"
          ]
        },
        {
          "titulo": "Green Supply Chain",
          "definicao": "Gestão da cadeia de suprimentos com critérios ambientais em todas as etapas: seleção de fornecedores, transporte, armazenagem, produção e distribuição. Busca reduzir a pegada ecológica total, promovendo compras verdes, logística sustentável e parcerias circulares.",
          "topicos": [
            "Critérios ambientais na seleção de fornecedores",
            "Transporte verde e otimização de rotas",
            "Embalagens retornáveis e recicláveis",
            "Auditoria ambiental em fornecedores",
            "Indicadores de desempenho de cadeia sustentável"
          ],
          "formula": "",
          "aplicacoes": [
            "Programa de avaliação de fornecedores ambientais",
            "Substituição de frotas por veículos elétricos",
            "Otimização de carga e redução de viagens",
            "Embalagens retornáveis na cadeia automotiva"
          ]
        },
        {
          "titulo": "Certificação LEED e AQUA",
          "definicao": "Sistemas de certificação de edificações sustentáveis. LEED (Leadership in Energy and Environmental Design) é internacional e avalia eficiência energética, água, materiais e conforto. AQUA-HQE é a versão adaptada ao Brasil com base na metodologia francesa HQE.",
          "topicos": [
            "Créditos LEED por categoria (SS, EA, WE, MR, IEQ)",
            "Processo AQUA: QAE e perfil ambiental",
            "Eficiência hídrica e energética em edificações",
            "Materiais sustentáveis e resíduos na construção",
            "Custo-benefício e payback de certificações"
          ],
          "formula": "",
          "aplicacoesacoes": [
            "Projeto e construção de galpões industriais verdes",
            "Edifícios corporativos certificados LEED",
            "Obras com certificação AQUA",
            "Adequação de fábricas existentes para selos"
          ]
        },
        {
          "titulo": "ISO 50001 (Gestão de Energia)",
          "definicao": "Norma internacional para implementação de um Sistema de Gestão de Energia (SGE), que ajuda organizações a melhorar eficiência, reduzir custos e diminuir emissões de GEE. Baseia-se no ciclo PDCA com foco em linha de base e indicadores de desempenho energético.",
          "topicos": [
            "Política energética e planejamento",
            "Revisão energética e linha de base (EnB)",
            "Indicadores de desempenho energético (EnPI)",
            "Projetos de melhoria e verificação de economia",
            "Auditoria e certificação ISO 50001"
          ],
          "formula": "EnPI = Consumo de energia / Variável significativa",
          "aplicacoes": [
            "Estruturação de SGE em indústrias intensivas em energia",
            "Gestão de energia em siderúrgicas e cimenteiras",
            "Redução de consumo em sistemas de utilidades",
            "Certificação ISO 50001 para competitividade"
          ]
        }
      ]
    },
    {
      "id": "projetos",
      "nome": "Gestão de Projetos",
      "icone": "folder-kanban",
      "cor": "#7c3aed",
      "descricao": "Metodologias, ferramentas e boas práticas para gerenciamento de projetos.",
      "subtopicos": [
        {
          "titulo": "Cronogramas e Gráfico de Gantt",
          "definicao": "Ferramenta visual de planejamento que representa as atividades do projeto em barras horizontais dispostas ao longo de uma escala temporal. Permite visualizar durações, dependências, responsáveis e o progresso de cada tarefa.",
          "topicos": [
            "Estruturação do cronograma: atividades, durações, precedências",
            "Software: MS Project, Primavera, GanttPRO",
            "Dependências: término-início, início-início",
            "Folga total e livre",
            "Curva S do cronograma"
          ],
          "formula": "",
          "aplicacoes": [
            "Planejamento de obras de construção civil",
            "Cronograma de implantação de ERP",
            "Projetos de P&D com marcos definidos",
            "Sequenciamento de atividades em manutenções de parada"
          ]
        },
        {
          "titulo": "EAP — Estrutura Analítica do Projeto (WBS)",
          "definicao": "Decomposição hierárquica do trabalho total do projeto em componentes menores e gerenciáveis (pacotes de trabalho). Segue a regra 100%: deve representar todo o escopo do projeto. Base para cronograma, orçamento e alocação de responsabilidades.",
          "topicos": [
            "Níveis da EAP (projeto, fases, pacotes de trabalho)",
            "Regra 100% da EAP",
            "Codificação e dicionário da EAP",
            "Criação por decomposição ou modelo",
            "Relação com WBS de custos e responsabilidade"
          ],
          "formula": "",
          "aplicacoes": [
            "EAP para projetos de engenharia e construção",
            "Detalhamento de escopo em projetos de software",
            "Alocação de pacotes de trabalho por equipe",
            "Integração com curva S e EVM"
          ]
        },
        {
          "titulo": "Caminho crítico (CPM)",
          "definicao": "Técnica de análise de rede que identifica a sequência mais longa de atividades dependentes em um cronograma, determinando a menor duração possível do projeto. Qualquer atraso em uma atividade de caminho crítico atrasa todo o projeto.",
          "topicos": [
            "Construção da rede de precedências",
            "Cálculo forward e backward",
            "Folga total e folga livre",
            "Identificação das atividades críticas",
            "Compressão e crashing do cronograma"
          ],
          "formula": "Folga Total = LS - ES ou LF - EF",
          "aplicacoes": [
            "Planejamento de construção de pontes e rodovias",
            "Cronograma de lançamento de produto",
            "Projetos de obra industrial com prazo fixo",
            "Otimização de paradas de manutenção"
          ]
        },
        {
          "titulo": "PERT",
          "definicao": "Técnica de estimativa de duração de atividades baseada em três cenários: otimista (O), pessimista (P) e mais provável (M). Calcula a duração esperada ponderada e é útil quando há incerteza significativa sobre as durações das tarefas.",
          "topicos": [
            "Estimativa de 3 pontos (O, M, P)",
            "Cálculo da duração esperada (TE)",
            "Variância e desvio padrão do projeto",
            "Probabilidade de conclusão no prazo",
            "PERT vs. CPM"
          ],
          "formula": "TE = (O + 4M + P) / 6",
          "aplicacoes": [
            "Projetos de P&D e inovação",
            "Estimativas em projetos de TI com incerteza",
            "Análise de riscos de prazo em engenharia",
            "Planejamento de projetos complexos com novas tecnologias"
          ]
        },
        {
          "titulo": "Scrum e Agile",
          "definicao": "Framework ágil de gerenciamento de projetos que utiliza sprints (iterações fixas) para entregar valor incremental. Baseado em pilares de transparência, inspeção e adaptação, com papéis definidos (Product Owner, Scrum Master, Time de Desenvolvimento).",
          "topicos": [
            "Papéis: PO, SM, Time",
            "Eventos: Sprint, Daily, Sprint Review, Retrospective",
            "Artefatos: Product Backlog, Sprint Backlog, Incremento",
            "Estimativas ágeis (Planning Poker, Story Points)",
            "Kanban como método complementar"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenvolvimento ágil de software",
            "Projetos de marketing e campanhas digitais",
            "Inovação e prototipagem rápida",
            "Gestão de produtos digitais"
          ]
        },
        {
          "titulo": "Kanban de projetos",
          "definicao": "Método visual de gerenciamento de fluxo de trabalho baseado em cartões (cards) organizados em colunas que representam etapas do processo. Limita o trabalho em andamento (WIP) para reduzir gargalos e melhorar a entrega contínua de valor.",
          "topicos": [
            "Quadro Kanban (To Do, Doing, Done)",
            "Limites de WIP (Work In Progress)",
            "Lead time e Cycle time",
            "Gerenciamento do fluxo e métricas",
            "Kanban vs. Scrum: diferenças e combinações"
          ],
          "formula": "Throughput = Entregas / Período",
          "aplicacoes": [
            "Acompanhamento de demandas de suporte",
            "Gestão de portfólio de projetos",
            "Processos de operações contínuas",
            "Projetos de melhoria com entregas frequentes"
          ]
        },
        {
          "titulo": "PMBOK — Project Management Body of Knowledge",
          "definicao": "Guia de boas práticas do Project Management Institute (PMI) que consolida conhecimentos, processos, entradas, ferramentas e saídas para gerenciamento de projetos. Estruturado em 5 grupos de processos e 10 áreas de conhecimento (7ª edição: 12 princípios e 8 domínios).",
          "topicos": [
            "5 grupos de processos: iniciação, planejamento, execução, controle, encerramento",
            "10 áreas de conhecimento (6ª ed.)",
            "Princípios do PMBOK 7ª ed.",
            "Adaptabilidade e tailoring",
            "Certificação PMP"
          ],
          "formula": "",
          "aplicacoes": [
            "Padronização de processos de gestão de projetos",
            "Preparação para certificação PMP",
            "Projetos de construção e engenharia de grande porte",
            "Implantação de PMO baseado em PMBOK"
          ]
        },
        {
          "titulo": "Gestão de riscos em projetos",
          "definicao": "Processo sistemático de identificar, analisar, priorizar e responder a incertezas que podem afetar os objetivos do projeto. Inclui riscos positivos (oportunidades) e negativos (ameaças), com estratégias de mitigação, transferência, aceitação e exploração.",
          "topicos": [
            "Identificação de riscos (brainstorming, checklists, SWOT)",
            "Análise qualitativa (probabilidade × impacto)",
            "Análise quantitativa (simulação de Monte Carlo)",
            "Estratégias de resposta para ameaças e oportunidades",
            "Registro de riscos e reserva de contingência"
          ],
          "formula": "Exposição ao risco = Probabilidade × Impacto",
          "aplicacoes": [
            "Análise de riscos em projetos de infraestrutura",
            "Projetos com alto grau de incerteza tecnológica",
            "Gestão de riscos regulatórios em projetos",
            "Reserva de contingência para variações de prazo"
          ]
        },
        {
          "titulo": "Gestão de custos em projetos",
          "definicao": "Processos de estimar, orçar e controlar custos para garantir que o projeto seja concluído dentro do orçamento aprovado. Envolve estimativas (bottom-up, paramétricas), orçamentação e monitoramento por meio de EVM e análise de variação.",
          "topicos": [
            "Estimativas de custo: análoga, paramétrica, bottom-up",
            "Linha de base de custos e reserva de contingência",
            "Acompanhamento orçamentário",
            "Variação de custo (CV = EV - AC)",
            "Previsão de custo final (EAC)"
          ],
          "formula": "EAC = BAC / CPI",
          "aplicacoes": [
            "Orçamento de projetos de construção civil",
            "Controle de custos em projetos de TI",
            "Estimativa de investimentos em plantas industriais",
            "Acompanhamento financeiro de projetos de P&D"
          ]
        },
        {
          "titulo": "Ágil vs. Tradicional",
          "definicao": "Comparação entre duas abordagens de gerenciamento de projetos: a tradicional (cascata, preditiva) é sequencial com escopo fixo; a ágil é iterativa com escopo adaptável. A escolha depende do nível de incerteza, complexidade e criticidade do projeto.",
          "topicos": [
            "Modelo cascata (waterfall) — fases rígidas",
            "Modelo ágil — entregas iterativas e incrementais",
            "Quando usar cada abordagem",
            "Modelos híbridos (ágil + tradicional)",
            "Critérios de decisão por tipo de projeto"
          ],
          "formula": "",
          "aplicacoes": [
            "Projetos de engenharia com escopo fixo: tradicional",
            "Projetos de software com requisitos incertos: ágil",
            "Obras de construção com entregas parciais: híbrido",
            "Projetos regulatórios com documentação obrigatória: tradicional"
          ]
        },
        {
          "titulo": "MS Project e similares",
          "definicao": "Ferramentas de software para planejamento, programação e controle de projetos. MS Project é a mais difundida, oferecendo Gantt, CPM, alocação de recursos e EVM. Alternativas incluem Primavera, ProjectLibre, Jira, Trello, Monday.com e Asana.",
          "topicos": [
            "MS Project: cronograma, recursos e custos",
            "Primavera P6: projetos de grande porte e EPC",
            "Jira: gestão ágil de projetos de software",
            "Trello/Asana: gestão visual simples",
            "Integração entre ferramentas de planejamento"
          ],
          "formula": "",
          "aplicacoes": [
            "Planejamento de cronograma de obras",
            "Acompanhamento de projetos de engenharia",
            "Gestão de sprint em equipes Scrum",
            "Portfólio de projetos com MS Project Server"
          ]
        },
        {
          "titulo": "Gestão de stakeholders",
          "definicao": "Processo de identificar todas as pessoas, grupos ou organizações que podem impactar ou serem impactados pelo projeto, analisar suas expectativas e influência, e desenvolver estratégias de engajamento para garantir suporte e minimizar resistências.",
          "topicos": [
            "Identificação de stakeholders",
            "Matriz poder × interesse (Salience)",
            "Plano de engajamento de stakeholders",
            "Canais de comunicação e frequência",
            "Gestão de conflitos e resistência"
          ],
          "formula": "",
          "aplicacoes": [
            "Mapeamento de stakeholders em projetos de infraestrutura",
            "Engajamento de comunidades em projetos de mineração",
            "Comunicação com patrocinadores em projetos corporativos",
            "Gestão de equipes multifuncionais"
          ]
        },
        {
          "titulo": "Termo de abertura do projeto",
          "definicao": "Documento formal que autoriza o início do projeto, nomeia o gerente de projetos e define a autoridade para alocar recursos organizacionais. Contém objetivo, justificativa, requisitos de alto nível, marcos e orçamento preliminar.",
          "topicos": [
            "Elementos do Project Charter",
            "Objetivo, escopo preliminar e entregas",
            "Orçamento e prazos de alto nível",
            "Riscos iniciais e premissas",
            "Autorização e assinatura do patrocinador"
          ],
          "formula": "",
          "aplicacoes": [
            "Abertura formal de novos projetos",
            "Alinhamento entre patrocinador e equipe",
            "Deadline para aprovação de investimento",
            "Documento de referência para planejamento subsequente"
          ]
        },
        {
          "titulo": "Project Charter",
          "definicao": "Também conhecido como Termo de Abertura, é o documento que formaliza a existência do projeto e concede ao gerente a autoridade necessária para mobilizar recursos da organização. Vincula o projeto à estratégia organizacional.",
          "topicos": [
            "Conteúdo típico do Project Charter",
            "Caso de negócio e justificativa",
            "Designação do gerente de projetos",
            "Marcos principais e cronograma macro",
            "Aprovação e governança inicial"
          ],
          "formula": "",
          "aplicacoes": [
            "Início de projetos no portfólio corporativo",
            "Governança de projetos via PMO",
            "Comunicação da visão do projeto à equipe",
            "Autorização formal em gate de abertura"
          ]
        },
        {
          "titulo": "Curva S do projeto",
          "definicao": "Gráfico que representa o valor acumulado (custo, horas ou percentual) ao longo do tempo, formando um formato de 'S' típico. Usada para comparar o planejado (baseline) com o realizado e identificar desvios de cronograma e orçamento.",
          "topicos": [
            "Construção da curva S (planejado × realizado)",
            "Análise de desvios (SV, CV)",
            "Previsão de tendências com curva S",
            "Curva S na gestão de valor agregado (EVM)",
            "Aplicação em relatórios de status"
          ],
          "formula": "SV = EV - PV",
          "aplicacoes": [
            "Relatórios mensais de progresso de obra",
            "Acompanhamento de projetos EPC",
            "Indicador visual para patrocinadores",
            "Análise de desempenho em projetos de capital intensivo"
          ]
        },
        {
          "titulo": "Earned Value Management (EVM)",
          "definicao": "Metodologia integrada de gestão de projetos que combina medições de escopo, cronograma e custos para avaliar o desempenho e prever resultados futuros. Utiliza indicadores: PV (planned value), EV (earned value) e AC (actual cost).",
          "topicos": [
            "PV, EV, AC — definição e obtenção",
            "Variações: SV (EV - PV), CV (EV - AC)",
            "Índices: SPI (EV/PV), CPI (EV/AC)",
            "Previsões: EAC, ETC, VAC",
            "EVM em projetos de engenharia e construção"
          ],
          "formula": "CPI = EV / AC; SPI = EV / PV",
          "aplicacoes": [
            "Controle de desempenho de grandes projetos",
            "Relatórios de progresso com indicadores objetivos",
            "Previsão de custo final de projetos",
            "Análise de eficiência de cronograma e custo"
          ]
        },
        {
          "titulo": "Metodologia Ágil (Scrum, XP, Kanban)",
          "definicao": "Conjunto de métodos e práticas para gerenciamento de projetos baseados no Manifesto Ágil (indivíduos, entregas, colaboração, resposta a mudanças). Inclui Scrum (sprints, papéis), XP (práticas de engenharia) e Kanban (fluxo contínuo).",
          "topicos": [
            "Manifesto Ágil e seus 12 princípios",
            "Scrum: papéis, eventos e artefatos",
            "XP (Extreme Programming): TDD, pair programming, refactoring",
            "Kanban: fluxo visual e WIP",
            "Escalonamento ágil (SAFe, LeSS)"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenvolvimento de software em startups",
            "Projetos de inovação e prototipagem",
            "Manutenção e evolução de produtos digitais",
            "Equipes de marketing e design ágeis"
          ]
        },
        {
          "titulo": "Prince 2",
          "definicao": "Metodologia estruturada de gerenciamento de projetos baseada em processos, originada no governo britânico. Foca em justificativa contínua do negócio, aprendizado, papéis definidos, gerenciamento por estágios, tolerâncias e exceções.",
          "topicos": [
            "7 princípios: justificativa contínua, lições aprendidas, papéis, estágios, tolerância, exceção, tailoring",
            "7 processos: starting up, directing, initiating, controlling, managing delivery, managing stage, closing",
            "7 temas: business case, organização, qualidade, planos, risco, mudança, progresso",
            "Prince 2 vs. PMBOK",
            "Certificação Prince 2 Foundation e Practitioner"
          ],
          "formula": "",
          "aplicacoes": [
            "Projetos governamentais e públicos",
            "Projetos com forte governança e compliance",
            "Grandes programas de transformação",
            "Organizações que exigem certificação Prince 2"
          ]
        },
        {
          "titulo": "Gestão de portfólio de projetos",
          "definicao": "Processo centralizado de gerenciamento de múltiplos projetos e programas para maximizar o retorno sobre o investimento e alinhar a carteira de projetos à estratégia organizacional. Inclui seleção, priorização, balanceamento e monitoramento do portfólio.",
          "topicos": [
            "Seleção de projetos: alinhamento estratégico e ROI",
            "Priorização: scoring, AHP, diagrama de bolhas",
            "Balanceamento de riscos e recursos no portfólio",
            "KPIs de portfólio (valor, risco, alinhamento)",
            "Governança de portfólio e comitês"
          ],
          "formula": "ROI = (Ganho do projeto - Investimento) / Investimento",
          "aplicacoes": [
            "Gestão da carteira de projetos de P&D",
            "PMO corporativo de portfólio",
            "Decisão de go/no-go em gates de investimento",
            "Alocação de recursos entre projetos concorrentes"
          ]
        },
        {
          "titulo": "PMO — Project Management Office",
          "definicao": "Estrutura organizacional que padroniza processos de gestão de projetos, fornece metodologias, ferramentas, treinamento e suporte, e pode exercer governança sobre projetos, programas e portfólio. Classifica-se em suporte, controle ou diretivo.",
          "topicos": [
            "Tipos de PMO: suporte, controle, diretivo",
            "Funções do PMO: metodologia, capacitação, auditoria",
            "Implantação de PMO: maturidade e roadmap",
            "KPI de performance do PMO",
            "PMO ágil (Agile PMO)"
          ],
          "formula": "",
          "aplicacoes": [
            "Padronização de práticas em grandes organizações",
            "Implantação de escritório de projetos em empresas de engenharia",
            "Governança e compliance de projetos",
            "Desenvolvimento de competências em gestão de projetos"
          ]
        }
      ]
    },
    {
      "id": "rh",
      "nome": "Recursos Humanos",
      "icone": "briefcase",
      "cor": "#db2777",
      "descricao": "Liderança, desenvolvimento de equipes e gestão de pessoas na indústria.",
      "subtopicos": [
        {
          "titulo": "Liderança industrial",
          "definicao": "Capacidade de influenciar e orientar equipes no ambiente fabril, promovendo engajamento, segurança e produtividade. Envolve estilos de liderança situacional, comunicação assertiva e tomada de decisão participativa para alcançar metas operacionais e estratégicas.",
          "topicos": [
            "Liderança situacional",
            "Comunicação não-violenta",
            "Liderança lean"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de turnos e liderança de chão de fábrica",
            "Programas de desenvolvimento de líderes operacionais",
            "Mentoria e coaching industrial"
          ]
        },
        {
          "titulo": "Desenvolvimento de equipes",
          "definicao": "Processo contínuo de aprimoramento das habilidades técnicas e comportamentais dos colaboradores, alinhado aos objetivos organizacionais. Baseia-se em diagnóstico de competências, planos de desenvolvimento individual e indicadores de progresso.",
          "topicos": [
            "Mapeamento de competências",
            "PDI — Plano de Desenvolvimento Individual",
            "Feedback estruturado"
          ],
          "formula": "",
          "aplicacoes": [
            "Programas de capacitação técnica para operadores",
            "Formação de equipes autogerenciáveis",
            "Avaliação de eficácia de treinamentos (Kirkpatrick)"
          ]
        },
        {
          "titulo": "Treinamento e capacitação",
          "definicao": "Conjunto de ações educacionais planejadas para suprir lacunas de competência e preparar colaboradores para funções específicas. Inclui levantamento de necessidades, elaboração de conteúdo, execução e medição de resultados.",
          "topicos": [
            "TNA — Treinamento e Necessidades de Aprendizagem",
            "EAD corporativo",
            "Onboarding técnico"
          ],
          "formula": "ROI do treinamento = (Ganho obtido - Custo do treinamento) / Custo do treinamento",
          "aplicacoes": [
            "Treinamento de NRs (Normas Regulamentadoras)",
            "Capacitação em software ERP industrial",
            "Programa de formação de multiplicadores internos"
          ]
        },
        {
          "titulo": "Avaliação de desempenho",
          "definicao": "Sistema estruturado para mensurar a contribuição individual e coletiva dos colaboradores em relação às metas organizacionais. Utiliza métodos como autoavaliação, avaliação do gestor, 360° e análise por competências.",
          "topicos": [
            "OKRs",
            "KPIs comportamentais",
            "Matriz de desempenho vs. potencial"
          ],
          "formula": "",
          "aplicacoes": [
            "Ciclo semestral de avaliação por competências",
            "Feedbacks orientados a dados",
            "Reconhecimento e meritocracia baseados em desempenho"
          ]
        },
        {
          "titulo": "Cultura organizacional",
          "definicao": "Conjunto de valores, crenças, normas e práticas compartilhadas que moldam o comportamento dos indivíduos dentro da organização industrial. Influencia diretamente o clima, a retenção de talentos e a eficiência operacional.",
          "topicos": [
            "Cultura lean",
            "Cultura de segurança",
            "Cultura de inovação"
          ],
          "formula": "",
          "aplicacoes": [
            "Diagnóstico cultural por meio de surveys",
            "Programas de reconhecimento e celebração",
            "Integração de valores organizacionais no dia a dia fabril"
          ]
        },
        {
          "titulo": "Gestão de conflitos",
          "definicao": "Processo de identificação, mediação e resolução de divergências interpessoais ou interdepartamentais no ambiente de trabalho. Aplica técnicas de comunicação, negociação e mediação para converter conflitos em oportunidades de melhoria.",
          "topicos": [
            "Mediação de conflitos",
            "Negociação colaborativa",
            "Análise de causas de conflito"
          ],
          "formula": "",
          "aplicacoes": [
            "Mediação entre equipes de produção e manutenção",
            "Resolução de conflitos sindicais",
            "Treinamento em comunicação não-violenta para gestores"
          ]
        },
        {
          "titulo": "Clima organizacional",
          "definicao": "Percepção coletiva dos colaboradores sobre o ambiente de trabalho, incluindo satisfação, motivação e bem-estar. Mensurado por pesquisas periódicas, o clima é indicador preditivo de produtividade, absenteísmo e rotatividade.",
          "topicos": [
            "Pesquisa de clima",
            "eNPS — Employee Net Promoter Score",
            "Índice de satisfação"
          ],
          "formula": "eNPS = (% Promotores - % Detratores) × 100",
          "aplicacoes": [
            "Pesquisa de clima semestral com planos de ação",
            "Acompanhamento de indicadores de satisfação por setor",
            "Programas de qualidade de vida no trabalho"
          ]
        },
        {
          "titulo": "Endomarketing",
          "definicao": "Conjunto de ações de comunicação interna voltadas a engajar e motivar os colaboradores, alinhando-os à missão, visão e valores da empresa. Utiliza campanhas, eventos e canais internos para fortalecer o vínculo organização-colaborador.",
          "topicos": [
            "Comunicação interna",
            "Campanhas de engajamento",
            "Eventos corporativos"
          ],
          "formula": "",
          "aplicacoes": [
            "Campanhas de segurança do trabalho",
            "Jornal mural e newsletter interna",
            "Programas de integração de novos colaboradores"
          ]
        },
        {
          "titulo": "Onboarding",
          "definicao": "Processo estruturado de integração de novos colaboradores à cultura, processos e ferramentas da organização. Onboarding eficaz reduz o tempo até a produtividade plena e aumenta a retenção nos primeiros meses.",
          "topicos": [
            "Integração cultural",
            "Treinamento inicial",
            "Buddy program"
          ],
          "formula": "",
          "aplicacoes": [
            "Roteiro de integração para novos operadores",
            "Checklists de onboarding por função",
            "Acompanhamento com mentor nos 90 dias iniciais"
          ]
        },
        {
          "titulo": "Avaliação 360°",
          "definicao": "Método de avaliação de desempenho que coleta feedback de múltiplas fontes — gestores, pares, subordinados e clientes internos — para formar uma visão abrangente das competências do colaborador. Favorece o autoconhecimento e o desenvolvimento direcionado.",
          "topicos": [
            "Feedback multinível",
            "Autoavaliação",
            "Plano de desenvolvimento pós-360°"
          ],
          "formula": "",
          "aplicacoes": [
            "Avaliação anual de lideranças",
            "Mapeamento de pontos fortes e áreas de melhoria",
            "Feedbacks 360° para planos de sucessão"
          ]
        },
        {
          "titulo": "Gestão por competências",
          "definicao": "Modelo de gestão de pessoas que identifica, desenvolve e avalia as competências técnicas e comportamentais necessárias para cada função. Integra recrutamento, treinamento, avaliação e carreira em torno de um catálogo de competências organizacionais.",
          "topicos": [
            "Mapeamento de competências",
            "Trilhas de aprendizagem",
            "Matriz de competências"
          ],
          "formula": "",
          "aplicacoes": [
            "Elaboração de matriz de competências por cargo",
            "Programas de certificação interna",
            "Recrutamento baseado em competências"
          ]
        },
        {
          "titulo": "Recrutamento e seleção",
          "definicao": "Processo de atração, triagem e escolha de candidatos para posições na organização. Envolve definição de perfil, divulgação de vagas, entrevistas, testes e tomada de decisão alinhada às necessidades técnicas e culturais da empresa.",
          "topicos": [
            "Entrevista por competências",
            "Testes psicológicos e técnicos",
            "Assessment center"
          ],
          "formula": "",
          "aplicacoes": [
            "Processo seletivo para operadores de produção",
            "Recrutamento de lideranças industriais",
            "Bank de talentos e recrutamento interno"
          ]
        },
        {
          "titulo": "Cargos e salários",
          "definicao": "Sistema de classificação, hierarquização e remuneração dos cargos com base em critérios objetivos como complexidade, responsabilidade e mercado. Visa garantir equidade interna e competitividade externa na política salarial.",
          "topicos": [
            "Análise e descrição de cargos",
            "Pesquisa salarial",
            "Faixas salariais"
          ],
          "formula": "",
          "aplicacoes": [
            "Elaboração de PCS — Plano de Cargos e Salários",
            "Revisão salarial anual",
            "Estruturação de carreira em Y (técnica e gerencial)"
          ]
        },
        {
          "titulo": "Benchmarking salarial",
          "definicao": "Comparação sistemática das faixas salariais e benefícios praticados pela organização com os praticados pelo mercado de referência. Subsidia decisões de atratividade e retenção de talentos.",
          "topicos": [
            "Pesquisa salarial setorial",
            "Análise de benefícios",
            "Posicionamento competitivo"
          ],
          "formula": "",
          "aplicacoes": [
            "Participação em pesquisas salariais da FIESP ou sindicatos",
            "Adequação de benefícios ao mercado industrial",
            "Relatório de competitividade salarial"
          ]
        },
        {
          "titulo": "Plano de carreira",
          "definicao": "Estrutura que define as trajetórias possíveis de crescimento profissional dentro da organização, com critérios claros de promoção, desenvolvimento e remuneração. Estimula o engajamento e a retenção ao oferecer perspectiva de evolução.",
          "topicos": [
            "Carreira em Y",
            "Trilhas de sucessão",
            "Critérios de promoção"
          ],
          "formula": "",
          "aplicacoes": [
            "Implementação de carreira técnica para operadores",
            "Programa de trainees e sucessão",
            "Mapeamento de sucessão para posições-chave"
          ]
        },
        {
          "titulo": "Engajamento e retenção de talentos",
          "definicao": "Estratégias e práticas voltadas a manter colaboradores motivados, produtivos e com baixa intenção de saída. Inclui reconhecimento, desenvolvimento, qualidade de vida e alinhamento de propósito entre indivíduo e organização.",
          "topicos": [
            "Pesquisa de engajamento",
            "Programas de reconhecimento",
            "Entrevista de desligamento"
          ],
          "formula": "Taxa de rotatividade = (Desligamentos / Efetivo médio) × 100",
          "aplicacoes": [
            "Programa de reconhecimento por tempo de casa",
            "Entrevistas de desligamento com plano de ação",
            "Ações de quality of work life (QWL)"
          ]
        },
        {
          "titulo": "Soft skills na indústria",
          "definicao": "Competências comportamentais como comunicação, trabalho em equipe, resolução de problemas e adaptabilidade, essenciais para o ambiente industrial moderno. Com a Indústria 4.0, soft skills tornaram-se tão relevantes quanto habilidades técnicas.",
          "topicos": [
            "Inteligência emocional",
            "Comunicação efetiva",
            "Pensamento crítico"
          ],
          "formula": "",
          "aplicacoes": [
            "Treinamentos de comunicação para lideranças",
            "Dinâmicas de team building",
            "Desenvolvimento de mentalidade lean e mejora contínua"
          ]
        },
        {
          "titulo": "HR Analytics",
          "definicao": "Aplicação de análise de dados e estatística sobre informações de RH para embasar decisões estratégicas sobre pessoas. Inclui análise de turnover, absenteísmo, produtividade, clima e ROI de treinamentos.",
          "topicos": [
            "People analytics",
            "Dashboards de RH",
            "Modelagem preditiva de turnover"
          ],
          "formula": "",
          "aplicacoes": [
            "Painel de indicadores de RH em Power BI",
            "Modelo preditivo de risco de desligamento",
            "Correlação entre clima e produtividade"
          ]
        },
        {
          "titulo": "Folha de pagamento industrial",
          "definicao": "Processo mensal de cálculo e processamento dos salários, encargos sociais, benefícios e descontos dos colaboradores da indústria. Deve estar em conformidade com a CLT, acordos sindicais e obrigações acessórias como eSocial e FGTS.",
          "topicos": [
            "eSocial",
            "Encargos trabalhistas",
            "Acordos sindicais"
          ],
          "formula": "Salário líquido = Salário bruto - INSS - IRRF - Benefícios descontados + Vantagens",
          "aplicacoes": [
            "Processamento mensal da folha de 500+ colaboradores",
            "Integração com sistema de ponto eletrônico",
            "Geração de arquivos eSocial e DCTFWeb"
          ]
        },
        {
          "titulo": "CLT e acordos sindicais",
          "definicao": "Conjunto de normas trabalhistas regidas pela Consolidação das Leis do Trabalho (CLT) e complementadas por acordos e convenções coletivas negociadas com sindicatos. Definem direitos, deveres, pisos salariais, jornada e condições específicas da categoria industrial.",
          "topicos": [
            "Negociação coletiva",
            "Dissídio",
            "CIPA e segurança"
          ],
          "formula": "",
          "aplicacoes": [
            "Negociação de acordo coletivo anual",
            "Cálculo de adicional de periculosidade e insalubridade",
            "Gestão de banco de horas e jornada 12×36"
          ]
        }
      ]
    },
    {
      "id": "desenv-produtos",
      "nome": "Desenvolvimento de Produtos",
      "icone": "ruler",
      "cor": "#0d9488",
      "descricao": "Processo de desenvolvimento, engenharia simultânea e gestão do ciclo de vida.",
      "subtopicos": [
        {
          "titulo": "Engenharia simultânea",
          "definicao": "Abordagem integrada de desenvolvimento de produtos onde atividades de projeto, manufatura, suprimentos e qualidade ocorrem em paralelo, não sequencialmente. Reduz o time-to-market e melhora a comunicação entre equipes multidisciplinares.",
          "topicos": [
            "Desenvolvimento integrado",
            "Equipes multifuncionais",
            "Concorrência de projetos"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto automotivo com equipes simultâneas de engenharia e manufatura",
            "Redução do ciclo de desenvolvimento de eletroeletrônicos",
            "Integração fornecedor-cliente no desenvolvimento"
          ]
        },
        {
          "titulo": "Engenharia de valor",
          "definicao": "Metodologia sistemática para maximizar o valor funcional de um produto minimizando seus custos, sem comprometer qualidade ou desempenho. Analisa funções, identifica custos desnecessários e propõe alternativas de projeto, materiais ou processos.",
          "topicos": [
            "Análise de valor",
            "Custo-alvo",
            "Value engineering workshop"
          ],
          "formula": "Valor = Função / Custo",
          "aplicacoes": [
            "Redesenho de componentes automotivos com redução de 20% de custo",
            "Substituição de materiais sem perda de desempenho",
            "Workshops de engenharia de valor em produtos existentes"
          ]
        },
        {
          "titulo": "DFMA — Design for Manufacturing and Assembly",
          "definicao": "Metodologia de projeto que visa simplificar a manufatura e montagem de produtos desde as fases iniciais de concepção. Reduz número de peças, padroniza componentes e otimiza processos de fabricação e montagem.",
          "topicos": [
            "Redução de componentes",
            "Padronização",
            "Montagem simplificada"
          ],
          "formula": "Eficiência de montagem = (Nº mínimo teórico de peças × 3s) / Tempo real de montagem",
          "aplicacoes": [
            "Projeto de eletrodomésticos com 40% menos peças",
            "Redesenho de conjuntos mecânicos para montagem automatizada",
            "Análise DFMA em produtos da linha branca"
          ]
        },
        {
          "titulo": "QFD — Quality Function Deployment",
          "definicao": "Método estruturado para traduzir as necessidades e desejos do cliente (VOC — Voice of Customer) em requisitos técnicos de produto e processo. Utiliza a Matriz da Qualidade (House of Quality) para priorizar características críticas.",
          "topicos": [
            "Matriz da qualidade",
            "VOC — Voice of Customer",
            "Desdobramento da função qualidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenvolvimento de novos veículos com foco nas preferências do consumidor",
            "Priorização de especificações técnicas em eletrônicos",
            "Alinhamento entre marketing e engenharia em bens de consumo"
          ]
        },
        {
          "titulo": "PLM — Product Lifecycle Management",
          "definicao": "Sistema estratégico de gestão do ciclo de vida do produto, desde a concepção até o descarte. Integra dados, processos e pessoas ao longo de todas as fases — projeto, fabricação, uso e fim de vida — garantindo rastreabilidade e conformidade.",
          "topicos": [
            "Gestão de ciclo de vida",
            "Integração CAD/PLM",
            "Rastreabilidade de engenharia"
          ],
          "formula": "",
          "aplicacoes": [
            "Implementação de plataforma PLM (Teamcenter, Windchill)",
            "Gestão centralizada de BOMs e documentos técnicos",
            "Rastreabilidade de alterações de engenharia (ECO/ECN)"
          ]
        },
        {
          "titulo": "Protótipos rápidos",
          "definicao": "Técnica de fabricação de modelos físicos funcionais ou conceituais em curto prazo, utilizando manufatura aditiva (3D), usinagem CNC ou ferramentais rápidos. Acelera validação de design, testes de forma e ajuste (fit & form) e comunicação com stakeholders.",
          "topicos": [
            "Impressão 3D",
            "Usinagem rápida",
            "Mockups funcionais"
          ],
          "formula": "",
          "aplicacoes": [
            "Protótipos de componentes plásticos por FDM/SLA",
            "Modelos de apresentação para aprovação de clientes",
            "Testes de ergonomia e usabilidade com protótipos físicos"
          ]
        },
        {
          "titulo": "CAD/CAM/CAE",
          "definicao": "Conjunto integrado de ferramentas computacionais para projeto (CAD — Computer-Aided Design), manufatura (CAM — Computer-Aided Manufacturing) e engenharia assistida por computador (CAE — Computer-Aided Engineering). Permite modelagem 3D, simulação e geração de código CNC.",
          "topicos": [
            "Modelagem 3D",
            "Simulação estrutural",
            "Programação CNC"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de moldes injetores com SolidWorks",
            "Simulação de elementos finitos em Autodesk Inventor",
            "Geração de código CAM para usinagem 5 eixos"
          ]
        },
        {
          "titulo": "PDP — Processo de Desenvolvimento de Produto",
          "definicao": "Modelo de referência que estrutura as etapas, atividades, decisões e gates do desenvolvimento de produtos, desde o planejamento estratégico até o acompanhamento pós-lançamento. O PDP assegura consistência, qualidade e governança no processo de inovação.",
          "topicos": [
            "Macrofases do PDP",
            "Gates de aprovação",
            "Documentação do processo"
          ],
          "formula": "",
          "aplicacoes": [
            "Implantação do PDP em indústria de bens de capital",
            "Definição de entregáveis por fase de desenvolvimento",
            "Auditoria de maturidade do PDP organizacional"
          ]
        },
        {
          "titulo": "Stage-Gate",
          "definicao": "Modelo de gestão de inovação que divide o processo de desenvolvimento em etapas (stages) separadas por pontos de decisão (gates). Cada gate avalia critérios de qualidade, viabilidade técnica e negocial antes de autorizar avanço à etapa seguinte.",
          "topicos": [
            "Gates de decisão",
            "Critérios de go/no-go",
            "Gestão de portfólio de projetos"
          ],
          "formula": "",
          "aplicacoes": [
            "Pipeline de inovação em indústria farmacêutica",
            "Revisões trimestrais de portfólio de P&D",
            "Stage-gate para lançamento de novos produtos alimentícios"
          ]
        },
        {
          "titulo": "DFMEA — Design FMEA",
          "definicao": "Ferramenta de análise de modos de falha e seus efeitos aplicada ao projeto do produto. Identifica potenciais falhas de design, suas causas e efeitos, e prioriza ações preventivas com base no RPN (Risk Priority Number).",
          "topicos": [
            "Análise de risco",
            "RPN — Risk Priority Number",
            "Ações preventivas"
          ],
          "formula": "RPN = Severidade × Ocorrência × Detecção",
          "aplicacoes": [
            "DFMEA de sistema de freios automotivos",
            "Análise de falhas em produto eletrônico antes do lançamento",
            "Revisão DFMEA em mudanças de engenharia"
          ]
        },
        {
          "titulo": "Engenharia reversa",
          "definicao": "Processo de desmontagem e análise de um produto existente para compreender seu projeto, funcionamento e especificações. Utiliza scanner 3D, medições e testes para gerar documentação técnica ou identificar oportunidades de melhoria.",
          "topicos": [
            "Scanner 3D",
            "Análise dimensional",
            "Redesenho a partir de amostra"
          ],
          "formula": "",
          "aplicacoes": [
            "Digitalização e redesenho de peças sem CAD original",
            "Análise de concorrência por engenharia reversa",
            "Reengenharia de componentes obsoletos"
          ]
        },
        {
          "titulo": "Manufatura aditiva (prototipagem)",
          "definicao": "Processo de fabricação por adição sucessiva de camadas de material (plástico, metal, resina) a partir de modelo digital 3D. Utilizada para prototipagem rápida, ferramentas e até peças finais em pequena escala.",
          "topicos": [
            "FDM",
            "SLA",
            "SLM — Selective Laser Melting"
          ],
          "formula": "",
          "aplicacoes": [
            "Prototipagem funcional de peças plásticas",
            "Produção de dispositivos de fixação (jigs & fixtures)",
            "Fabricação de peças metálicas sob medida"
          ]
        },
        {
          "titulo": "Gestão de requisitos",
          "definicao": "Processo sistemático de elicitação, documentação, análise, validação e gerenciamento de requisitos funcionais e não-funcionais de um produto. Garante que o produto final atenda às necessidades de clientes, normas e partes interessadas.",
          "topicos": [
            "Elicitação de requisitos",
            "Matriz de rastreabilidade",
            "Casos de uso"
          ],
          "formula": "",
          "aplicacoes": [
            "Documentação de requisitos de sistema embarcado",
            "Rastreabilidade entre requisitos e testes de validação",
            "Gestão de mudanças de requisitos em projetos complexos"
          ]
        },
        {
          "titulo": "Design for X (DfX)",
          "definicao": "Conjunto de metodologias de projeto que consideram requisitos específicos ao longo do desenvolvimento: manufatura (DfM), montagem (DfA), sustentabilidade (DfE), manutenção (DfS) e outros. Visa otimizar o produto para todo seu ciclo de vida.",
          "topicos": [
            "DfM/DfA",
            "DfE — Design for Environment",
            "DfS — Design for Serviceability"
          ],
          "formula": "",
          "aplicacoes": [
            "Produto projetado para reciclagem (DfE)",
            "Design de equipamentos para fácil manutenção em campo",
            "Projeto para desmontagem e fim de vida"
          ]
        },
        {
          "titulo": "Análise de valor",
          "definicao": "Técnica sistemática de avaliação de produtos existentes para identificar e eliminar custos desnecessários sem comprometer funções essenciais. Foca na relação função-custo e propõe alternativas de projeto, materiais ou processos.",
          "topicos": [
            "Análise funcional",
            "Custo por função",
            "Alternativas de solução"
          ],
          "formula": "",
          "aplicacoes": [
            "Redução de custo de produto maduro em 15-30%",
            "Revisão anual de portfólio com análise de valor",
            "Substituição de materiais por alternativas de menor custo"
          ]
        },
        {
          "titulo": "Redesenho de produto",
          "definicao": "Processo de modificação significativa de um produto existente para melhorar desempenho, reduzir custos, atualizar tecnologia ou atender novos requisitos regulatórios. Difere do desenvolvimento radical por partir de uma base já estabelecida.",
          "topicos": [
            "Melhoria incremental",
            "Atualização tecnológica",
            "Adequação normativa"
          ],
          "formula": "",
          "aplicacoes": [
            "Redesenho de embalagens para sustentabilidade",
            "Atualização de linha de produtos com novos componentes eletrônicos",
            "Adequação de produto a novas normas regulamentadoras"
          ]
        },
        {
          "titulo": "Desdobramento da função qualidade (QFD)",
          "definicao": "Desdobramento sistemático dos requisitos do cliente em características de qualidade do produto, parâmetros de processo e especificações de produção. Garante que a voz do cliente seja traduzida tecnicamente em cada etapa do PDP.",
          "topicos": [
            "House of Quality",
            "Matriz de relacionamento",
            "Desdobramento em cascata"
          ],
          "formula": "",
          "aplicacoes": [
            "QFD completo para desenvolvimento de eletroportátil",
            "Tradução de necessidades de clientes industriais em especificações técnicas",
            "Priorização de engenharia baseada em importancia relativa"
          ]
        },
        {
          "titulo": "Metodologia de projeto de produto",
          "definicao": "Abordagem estruturada para conceber, desenvolver e detalhar produtos, abrangendo desde a identificação de oportunidades até a especificação final. Inclui métodos de criatividade, seleção de conceitos, projeto preliminar e detalhado.",
          "topicos": [
            "Projeto informacional",
            "Projeto conceitual",
            "Projeto detalhado"
          ],
          "formula": "",
          "aplicacoes": [
            "Aplicação da metodologia de Pahl & Beitz no desenvolvimento de máquinas",
            "Processo de design thinking combinado com engenharia",
            "Geração e seleção de conceitos para novo produto"
          ]
        },
        {
          "titulo": "Lean Product Development",
          "definicao": "Abordagem que aplica princípios lean (eliminação de desperdícios, fluxo contínuo, valor para o cliente) ao processo de desenvolvimento de produtos. Reduz lead time, retrabalho e retrabalho, aumentando a eficiência da engenharia.",
          "topicos": [
            "Set-based design",
            "A3 de projeto",
            "Obeya room"
          ],
          "formula": "",
          "aplicacoes": [
            "Implementação de A3 para problemas de engenharia",
            "Sala Obeya para gestão visual de projetos complexos",
            "Redução de desperdícios no PDP com mapeamento de fluxo de valor"
          ]
        },
        {
          "titulo": "Análise de viabilidade técnica",
          "definicao": "Estudo preliminar que avalia se um conceito de produto é exequível do ponto de vista técnico, considerando materiais, processos, tecnologia disponível, prazos e orçamento. Subsidia a decisão de avançar ou não no desenvolvimento.",
          "topicos": [
            "Viabilidade de manufatura",
            "Análise de risco técnico",
            "Estudo de make-or-buy"
          ],
          "formula": "",
          "aplicacoes": [
            "Estudo de viabilidade de nova linha de produtos químicos",
            "Análise de make-or-buy para componentes críticos",
            "Avaliação de maturidade tecnológica (TRL) antes do projeto"
          ]
        }
      ]
    },
    {
      "id": "gestao-industrial",
      "nome": "Gestão Industrial",
      "icone": "factory",
      "cor": "#dc2626",
      "descricao": "Administração industrial, planejamento estratégico e governança corporativa.",
      "subtopicos": [
        {
          "titulo": "Administração industrial",
          "definicao": "Conjunto de práticas de gestão aplicadas ao ambiente fabril, envolvendo planejamento, organização, direção e controle dos recursos produtivos. Integra áreas como produção, manutenção, qualidade, suprimentos e finanças para operação eficiente da fábrica.",
          "topicos": [
            "Gestão da produção",
            "Organização fabril",
            "Controle de processos"
          ],
          "formula": "",
          "aplicacoes": [
            "Reestruturação administrativa de unidade industrial",
            "Implantação de sistema de gestão integrado ERP",
            "Definição de organograma e fluxos decisórios fabris"
          ]
        },
        {
          "titulo": "Planejamento estratégico",
          "definicao": "Processo sistemático de definição da direção estratégica da organização industrial, estabelecendo missão, visão, valores, objetivos de longo prazo e planos de ação. Envolve análise ambiental, formulação de estratégias e alocação de recursos.",
          "topicos": [
            "Missão e visão",
            "Análise ambiental",
            "Metas de longo prazo"
          ],
          "formula": "",
          "aplicacoes": [
            "Elaboração do planejamento estratégico 5 anos da indústria",
            "Desdobramento de metas estratégicas em operacionais",
            "Revisão anual do plano estratégico com stakeholders"
          ]
        },
        {
          "titulo": "Governança corporativa",
          "definicao": "Sistema de princípios, regras e estruturas que direcionam e controlam a gestão da empresa industrial, assegurando transparência, equidade, prestação de contas e responsabilidade corporativa. Fundamental para empresas de capital aberto e family offices.",
          "topicos": [
            "Conselho de administração",
            "Comitês de auditoria",
            "Código de conduta"
          ],
          "formula": "",
          "aplicacoes": [
            "Estruturação de conselho consultivo em indústria familiar",
            "Implementação de compliance e código de ética",
            "Reporte de resultados com transparência a acionistas"
          ]
        },
        {
          "titulo": "Indicadores industriais (KPI)",
          "definicao": "Métricas quantitativas utilizadas para monitorar e avaliar o desempenho de processos industriais em tempo real. Incluem indicadores de produtividade, qualidade, eficiência, custo, segurança e entregas, alinhados aos objetivos estratégicos da organização.",
          "topicos": [
            "OEE — Overall Equipment Effectiveness",
            "Indicadores de produtividade",
            "Dashboard industrial"
          ],
          "formula": "OEE = Disponibilidade × Performance × Qualidade",
          "aplicacoes": [
            "Painel de indicadores OEE em tempo real no chão de fábrica",
            "Metas trimestrais de KPI por centro de trabalho",
            "Desdobramento de indicadores estratégicos (BSC) em KPIs operacionais"
          ]
        },
        {
          "titulo": "Compliance industrial",
          "definicao": "Conjunto de políticas, procedimentos e controles para garantir que a operação industrial esteja em conformidade com leis, regulamentações, normas técnicas e padrões éticos. Abrange segurança do trabalho, meio ambiente, tributário e anticorrupção.",
          "topicos": [
            "LGPD industrial",
            "Conformidade regulatória",
            "Programa de integridade"
          ],
          "formula": "",
          "aplicacoes": [
            "Implantação de programa de compliance industrial",
            "Auditoria de conformidade regulatória (ANVISA, INMETRO)",
            "Treinamento de colaboradores em código de conduta"
          ]
        },
        {
          "titulo": "Gestão por resultados",
          "definicao": "Modelo de gestão focado no alcance de metas e resultados mensuráveis, com avaliação periódica de desempenho. Utiliza indicadores, contratos de gestão e sistemas de incentivo para alinhar esforços da organização aos objetivos estratégicos.",
          "topicos": [
            "Metas SMART",
            "Contrato de gestão",
            "Remuneração variável"
          ],
          "formula": "",
          "aplicacoes": [
            "Programa de bônus atrelado a metas de produção e qualidade",
            "Contratos de gestão com gerentes de planta",
            "Reuniões mensais de análise crítica de resultados"
          ]
        },
        {
          "titulo": "BSC — Balanced Scorecard",
          "definicao": "Metodologia de gestão estratégica que traduz a visão e estratégia da empresa em objetivos e indicadores em quatro perspectivas: financeira, clientes, processos internos e aprendizado/crescimento. Permite o alinhamento estratégico em todos os níveis.",
          "topicos": [
            "Perspectiva financeira",
            "Perspectiva de processos",
            "Mapa estratégico"
          ],
          "formula": "",
          "aplicacoes": [
            "Construção do BSC para unidade industrial",
            "Cascateamento de metas do BSC para indicadores setoriais",
            "Revisão trimestral do mapa estratégico com diretoria"
          ]
        },
        {
          "titulo": "Análise SWOT/FOFA",
          "definicao": "Ferramenta de diagnóstico estratégico que avalia Forças, Fraquezas, Oportunidades e Ameaças (FOFA) do ambiente interno e externo da organização. Subsidia a formulação de estratégias ao cruzar potenciais internos com condições de mercado.",
          "topicos": [
            "Análise interna",
            "Análise externa",
            "Estratégias S/O, W/O, S/T, W/T"
          ],
          "formula": "",
          "aplicacoes": [
            "SWOT anual para revisão de estratégia industrial",
            "Análise competitiva de lançamento de nova planta",
            "Diagnóstico situacional em projetos de consultoria"
          ]
        },
        {
          "titulo": "Plano de negócios (Business Plan)",
          "definicao": "Documento estruturado que descreve o modelo de negócio, mercado, operações, projeções financeiras e estratégia de uma empresa ou projeto industrial. Utilizado para captação de recursos, aprovação de investimentos e direcionamento estratégico.",
          "topicos": [
            "Sumário executivo",
            "Projeções financeiras",
            "Análise de viabilidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Business plan para nova fábrica ou linha de produção",
            "Captação de investimento para startup industrial",
            "Plano de negócios para expansão internacional"
          ]
        },
        {
          "titulo": "Matriz BCG",
          "definicao": "Ferramenta de análise de portfólio que classifica produtos em quatro quadrantes — Estrela, Vaca Leiteira, Interrogação e Abacaxi — com base na participação de mercado e taxa de crescimento. Auxilia decisões de investimento, desinvestimento e priorização.",
          "topicos": [
            "Ciclo de vida do produto",
            "Participação relativa de mercado",
            "Decisões de portfólio"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise de portfólio de produtos industriais",
            "Decisão de descontinuar linhas de baixo desempenho",
            "Alocação de investimentos entre categorias de produto"
          ]
        },
        {
          "titulo": "Análise de Porter (5 forças)",
          "definicao": "Modelo de análise setorial desenvolvido por Michael Porter que avalia cinco forças competitivas: rivalidade entre concorrentes, ameaça de novos entrantes, poder de barganha de fornecedores e clientes, e ameaça de substitutos. Define a atratividade e lucratividade potencial de um setor.",
          "topicos": [
            "Rivalidade",
            "Barreiras de entrada",
            "Poder de barganha"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise setorial para entrada em novo mercado industrial",
            "Posicionamento competitivo de unidade de negócios",
            "Estratégia de diferenciação em setor commoditizado"
          ]
        },
        {
          "titulo": "Gestão da rotina",
          "definicao": "Prática de gerenciamento das atividades operacionais do dia a dia fabril com foco em padronização, disciplina e melhoria contínua. Utiliza ferramentas como 5S, reuniões rápidas (daily huddle) e indicadores visuais para manter a estabilidade dos processos.",
          "topicos": [
            "5S",
            "Gestão à vista",
            "Reunião diária de produção"
          ],
          "formula": "",
          "aplicacoes": [
            "Implantação do 5S em células de produção",
            "Quadros de gestão à vista com indicadores diários",
            "Ritual de reunião matinal de produção (daily huddle)"
          ]
        },
        {
          "titulo": "Diretrizes estratégicas (Hoshin)",
          "definicao": "Método japonês de desdobramento de diretrizes estratégicas (Hoshin Kanri) que alinha os objetivos estratégicos da alta direção com os planos de ação operacionais. Utiliza a matriz X e ciclo PDCA para garantir execução e revisão contínua.",
          "topicos": [
            "Hoshin Kanri",
            "Matriz X",
            "Desdobramento de metas"
          ],
          "formula": "",
          "aplicacoes": [
            "Desdobramento de diretrizes anuais (policy deployment)",
            "Matriz X para alinhamento estratégico-tático-operacional",
            "Catchball process entre níveis hierárquicos"
          ]
        },
        {
          "titulo": "Orçamento estratégico",
          "definicao": "Processo de planejamento financeiro de médio e longo prazo que aloca recursos financeiros conforme as prioridades estratégicas da organização industrial. Integra receitas, custos, investimentos e fluxo de caixa projetado ao plano estratégico.",
          "topicos": [
            "Budget industrial",
            "CAPEX e OPEX",
            "Projeção de resultados"
          ],
          "formula": "",
          "aplicacoes": [
            "Elaboração do orçamento anual da planta industrial",
            "Avaliação de investimentos (VPL, TIR, Payback)",
            "Acompanhamento mensal do realizado vs. orçado"
          ]
        },
        {
          "titulo": "Reestruturação industrial",
          "definicao": "Processo de transformação organizacional e operacional de uma unidade industrial para recuperar competitividade, reduzir custos ou adequar-se a novo posicionamento estratégico. Pode envolver redesenho de processos, layoff, fusão ou venda de ativos.",
          "topicos": [
            "Turnaround",
            "Downsizing",
            "Redesenho organizacional"
          ],
          "formula": "",
          "aplicacoes": [
            "Turnaround de planta industrial com resultados negativos",
            "Consolidação de múltiplas plantas em centros de excelência",
            "Reestruturação de processos pós-fusão"
          ]
        },
        {
          "titulo": "Fusões e aquisições na indústria",
          "definicao": "Operações societárias de consolidação empresarial envolvendo compra, venda ou união de empresas industriais. Inclui due diligence, valuation, integração pós-fusão (PMI) e gestão da mudança cultural entre organizações.",
          "topicos": [
            "Due diligence",
            "Valuation industrial",
            "PMI — Post Merger Integration"
          ],
          "formula": "",
          "aplicacoes": [
            "Due diligence técnica e financeira em aquisição industrial",
            "Integração de sistemas e cultura pós-M&A",
            "Sinergias operacionais em fusão de empresas do mesmo setor"
          ]
        },
        {
          "titulo": "Análise de cenários industriais",
          "definicao": "Técnica prospectiva que constrói e analisa múltiplos futuros possíveis para o ambiente industrial, considerando variáveis econômicas, tecnológicas, políticas e sociais. Apoia a tomada de decisão estratégica em contextos de alta incerteza.",
          "topicos": [
            "Prospecção estratégica",
            "Simulação de cenários",
            "Planejamento por cenários"
          ],
          "formula": "",
          "aplicacoes": [
            "Construção de cenários macroeconômicos para planejamento quinquenal",
            "Análise de sensibilidade em projetos de expansão",
            "Estratégias de mitigação para cenários adversos"
          ]
        },
        {
          "titulo": "Gestão de riscos corporativos",
          "definicao": "Processo estruturado de identificação, avaliação, tratamento e monitoramento de riscos que podem impactar o alcance dos objetivos organizacionais. Segue frameworks como COSO ERM e ISO 31000 para integrar riscos estratégicos, operacionais e financeiros.",
          "topicos": [
            "COSO ERM",
            "ISO 31000",
            "Matriz de riscos"
          ],
          "formula": "Nível de risco = Probabilidade × Impacto",
          "aplicacoes": [
            "Mapeamento de riscos operacionais em planta industrial",
            "Plano de continuidade de negócios (BCP) para fábrica",
            "Comitê de riscos corporativos trimestral"
          ]
        },
        {
          "titulo": "Relacionamento com investidores",
          "definicao": "Função estratégica de comunicação entre a empresa industrial e seus acionistas, investidores e analistas de mercado. Inclui divulgação de resultados, roadshows, assembleias e relatórios anuais conforme exigências da CVM e boas práticas de mercado.",
          "topicos": [
            "RI — Relações com Investidores",
            "Release de resultados",
            "Apresentações para analistas"
          ],
          "formula": "",
          "aplicacoes": [
            "Preparação do relatório anual e agenda de RI",
            "Roadshow com investidores institucionais",
            "Teleconferência de resultados trimestrais"
          ]
        },
        {
          "titulo": "Avaliação de empresas",
          "definicao": "Conjunto de metodologias para estimar o valor econômico de uma empresa industrial, incluindo fluxo de caixa descontado (DCF), múltiplos de mercado e valor patrimonial. Essencial para processos de M&A, abertura de capital e planejamento sucessório.",
          "topicos": [
            "DCF — Fluxo de Caixa Descontado",
            "Múltiplos (EV/EBITDA, P/L)",
            "Laudo de avaliação"
          ],
          "formula": "VPL = Σ FCt / (1 + k)^t",
          "aplicacoes": [
            "Valuation de empresa industrial para venda",
            "Avaliação para planejamento sucessório familiar",
            "Laudo de avaliação para transações societárias"
          ]
        }
      ]
    },
    {
      "id": "eng-metodos",
      "nome": "Engenharia de Métodos",
      "icone": "stopwatch",
      "cor": "#9333ea",
      "descricao": "Estudos de tempos, movimentos e padronização operacional.",
      "subtopicos": [
        {
          "titulo": "Estudo de tempos e movimentos",
          "definicao": "Técnica clássica da engenharia industrial que analisa detalhadamente as operações de trabalho, dividindo-as em movimentos elementares, medindo seus tempos e identificando oportunidades de simplificação e padronização. Originada dos trabalhos de Taylor e Gilbreth.",
          "topicos": [
            "Análise de movimentos",
            "Simplificação do trabalho",
            "Princípios de economia de movimentos"
          ],
          "formula": "Tempo padrão = Tempo normal × (1 + Tolerâncias)",
          "aplicacoes": [
            "Estudo de tempos em linha de montagem",
            "Análise de movimentos em posto de trabalho repetitivo",
            "Redução de cycle time em operações manuais"
          ]
        },
        {
          "titulo": "Cronoanálise",
          "definicao": "Técnica de medição do tempo de trabalho por meio de cronometragem direta das operações, com avaliação do ritmo do operador (velocidade). Os tempos cronometrados são ajustados por fatores de ritmo e tolerâncias para obter o tempo padrão.",
          "topicos": [
            "Cronometragem",
            "Avaliação de ritmo",
            "Tolerâncias"
          ],
          "formula": "Tempo normal = Tempo cronometrado × Fator de ritmo",
          "aplicacoes": [
            "Definição de tempo padrão para novas operações",
            "Cronoanálise para cálculo de capacidade produtiva",
            "Tempo padrão para remuneração por produção"
          ]
        },
        {
          "titulo": "Tempo normal e tempo padrão",
          "definicao": "Tempo normal é o tempo necessário para executar uma tarefa sob condições normais, sem tolerâncias, considerando o ritmo do operador. Tempo padrão é o tempo normal acrescido de tolerâncias (fadiga, necessidades pessoais, esperas) e serve de base para planejamento e remuneração.",
          "topicos": [
            "Fator de ritmo",
            "Tolerâncias fixas e variáveis",
            "Tempo padrão como referência"
          ],
          "formula": "Tempo padrão = Tempo normal × (1 + Tolerâncias)",
          "aplicacoes": [
            "Base para planejamento e controle da produção (PCP)",
            "Cálculo de custo de mão de obra direta",
            "Sistema de remuneração por produção (prêmio)"
          ]
        },
        {
          "titulo": "Cronometragem",
          "definicao": "Processo sistemático de medição do tempo de execução de operações produtivas utilizando cronômetro, dividindo a tarefa em elementos e registrando múltiplas amostras para garantir representatividade estatística.",
          "topicos": [
            "Amostragem de tempos",
            "Divisão em elementos",
            "Número de ciclos"
          ],
          "formula": "Nº de ciclos = (z × s / e × x̄)²",
          "aplicacoes": [
            "Levantamento de tempos para novo produto em produção",
            "Validação de tempo padrão em operações existentes",
            "Estudo de tempos para balanceamento de linha"
          ]
        },
        {
          "titulo": "Layout industrial",
          "definicao": "Projeto do arranjo físico de máquinas, equipamentos e postos de trabalho dentro da fábrica para otimizar o fluxo de materiais, pessoas e informações. Tipos principais: layout por produto, por processo, celular e posicional.",
          "topicos": [
            "Arranjo físico",
            "Fluxo de materiais",
            "Layout por produto vs. processo"
          ],
          "formula": "",
          "aplicacoes": [
            "Redesenho de layout para reduzir deslocamentos em 30%",
            "Conversão de layout funcional para celular",
            "Projeto de nova linha de produção com fluxo contínuo"
          ]
        },
        {
          "titulo": "Balanceamento de linhas",
          "definicao": "Técnica de distribuição equilibrada das tarefas entre postos de trabalho em uma linha de produção para minimizar o tempo ocioso e maximizar a eficiência. Busca igualar os tempos de ciclo de cada estação ao takt time.",
          "topicos": [
            "Takt time",
            "Tempo de ciclo",
            "Eficiência da linha"
          ],
          "formula": "Takt time = Tempo disponível / Demanda do cliente\nEficiência = Σ(Tempos de tarefa) / (Nº de postos × Tempo de ciclo)",
          "aplicacoes": [
            "Balanceamento de linha de montagem automotiva",
            "Re-balanceamento após mudança de mix de produção",
            "Yamazumi chart para balanceamento visual"
          ]
        },
        {
          "titulo": "Capacidade produtiva",
          "definicao": "Volume máximo de produção que uma unidade fabril pode realizar em condições normais de operação, considerando recursos disponíveis, turnos e nível de eficiência. Pode ser expressa em unidades, horas ou toneladas por período.",
          "topicos": [
            "Capacidade instalada",
            "Capacidade efetiva",
            "Ociosidade"
          ],
          "formula": "Capacidade disponível = (Horas totais × Eficiência × Utilização)",
          "aplicacoes": [
            "Dimensionamento de capacidade para nova linha",
            "Análise de gargalos e expansões",
            "Plano de capacidade para atender crescimento de demanda"
          ]
        },
        {
          "titulo": "Gargalos de produção",
          "definicao": "Recurso ou etapa do processo produtivo cuja capacidade é inferior à demanda, limitando o fluxo total de produção. Identificar e gerenciar gargalos é essencial para aumentar a produtividade sem grandes investimentos.",
          "topicos": [
            "Identificação de gargalos",
            "TOC — Teoria das Restrições",
            "Elevação da restrição"
          ],
          "formula": "Throughput = 1 / Tempo do gargalo",
          "aplicacoes": [
            "Mapeamento de gargalos em manufatura de alto volume",
            "Plano de elevação de gargalo com horas extras e setups",
            "Análise de restrições em processo químico contínuo"
          ]
        },
        {
          "titulo": "Teoria das Restrições (TOC)",
          "definicao": "Filosofia de gestão desenvolvida por Eliyahu Goldratt baseada no princípio de que todo sistema tem pelo menos uma restrição que limita seu desempenho. O processo de melhoria contínua segue cinco passos: identificar, explorar, subordinar, elevar e repetir.",
          "topicos": [
            "Processo de 5 passos",
            "Tambor-Pulmão-Corda (Drum-Buffer-Rope)",
            "Métrica de throughput"
          ],
          "formula": "Ganho líquido = Throughput - Despesas operacionais",
          "aplicacoes": [
            "Gestão de produção com Tambor-Pulmão-Corda",
            "Projeto de melhoria em fábrica com múltiplos gargalos",
            "TOC aplicada a gestão de projetos (Critical Chain)"
          ]
        },
        {
          "titulo": "Produtividade industrial",
          "definicao": "Medida da eficiência com que os recursos produtivos (mão de obra, materiais, máquinas) são convertidos em produtos acabados. A produtividade é calculada pela relação entre outputs (produção) e inputs (recursos consumidos).",
          "topicos": [
            "Produtividade da mão de obra",
            "Produtividade total dos fatores",
            "Índices de produtividade"
          ],
          "formula": "Produtividade = Output / Input\n(Ex: peças / homem-hora)",
          "aplicacoes": [
            "Acompanhamento mensal de produtividade por centro de trabalho",
            "Programa de aumento de produtividade com lean manufacturing",
            "Comparação de produtividade entre plantas"
          ]
        },
        {
          "titulo": "Gráfico de homem-máquina",
          "definicao": "Ferramenta de análise que registra simultaneamente as atividades de um operador e de uma ou mais máquinas ao longo do tempo. Permite identificar períodos ociosos do operador ou da máquina e otimizar o atendimento homem-máquina.",
          "topicos": [
            "Ciclo homem-máquina",
            "Atividades simultâneas",
            "Ociosidade do operador"
          ],
          "formula": "",
          "aplicacoes": [
            "Otimização da relação homem-máquina em células de usinagem",
            "Estudo de viabilidade de operador polivalente",
            "Análise de múltiplas máquinas por operador"
          ]
        },
        {
          "titulo": "Diagrama de fluxo de processo",
          "definicao": "Representação gráfica das etapas de um processo produtivo utilizando símbolos padronizados (operação, transporte, inspeção, espera e armazenagem). Permite visualizar o fluxo completo e identificar desperdícios e oportunidades de melhoria.",
          "topicos": [
            "Simbologia ASME",
            "Mapeamento do fluxo",
            "Identificação de desperdícios"
          ],
          "formula": "",
          "aplicacoes": [
            "Mapeamento de processo produtivo para padronização",
            "Análise de fluxo para redução de transportes",
            "Documentação de procedimentos operacionais"
          ]
        },
        {
          "titulo": "Diagrama de espaguete",
          "definicao": "Ferramenta visual que traça o caminho percorrido por materiais, pessoas ou informações dentro do layout fabril. O traçado resultante, semelhante a um prato de espaguete, revela deslocamentos excessivos e oportunidades de otimização do layout.",
          "topicos": [
            "Análise de fluxo",
            "Distância percorrida",
            "Layout otimizado"
          ],
          "formula": "",
          "aplicacoes": [
            "Mapeamento de deslocamentos em almoxarifado",
            "Redução de transporte entre operações em 50%",
            "Redesenho de layout baseado em diagrama de espaguete"
          ]
        },
        {
          "titulo": "Gráfico de atividades simultâneas",
          "definicao": "Ferramenta que registra as atividades de múltiplos operadores ou operador e máquina no mesmo eixo temporal, permitindo identificar dependências e balancear a carga de trabalho entre membros de uma equipe ou célula.",
          "topicos": [
            "Atividades em paralelo",
            "Carga de trabalho",
            "Balanceamento de equipe"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise de equipe de montagem para balanceamento",
            "Redistribuição de tarefas entre operadores",
            "Otimização de operação em célula de manufatura"
          ]
        },
        {
          "titulo": "Sistema de tolerâncias",
          "definicao": "Conjunto de percentuais de tempo adicionados ao tempo normal para compensar fadiga, necessidades pessoais, esperas e condições ambientais. As tolerâncias podem ser fixas (constantes) ou variáveis (dependentes das condições de trabalho).",
          "topicos": [
            "Tolerâncias fixas",
            "Tolerâncias variáveis",
            "Suplementos de descanso"
          ],
          "formula": "FTD = (Trabalho energético + Postura + Movimentos + ...)",
          "aplicacoes": [
            "Definição de tolerâncias para operações pesadas na siderurgia",
            "Tabela de tolerâncias por tipo de operação",
            "Cálculo de tempo padrão com allowances realistas"
          ]
        },
        {
          "titulo": "Tempos sintéticos (MTM, MOST)",
          "definicao": "Sistemas de tempos pré-determinados (Predetermined Motion Time Systems) que atribuem valores de tempo a movimentos humanos básicos (alcançar, pegar, posicionar) sem necessidade de cronometragem. MTM e MOST são os sistemas mais difundidos na indústria.",
          "topicos": [
            "MTM-1, MTM-2, MTM-UAS",
            "MOST — Maynard Operation Sequence Technique",
            "Tempos sintéticos para estimativa rápida"
          ],
          "formula": "",
          "aplicacoes": [
            "Estimativa de tempos para novos produtos sem protótipo físico",
            "Padronização de tempos em operações de montagem",
            "Estudo de métodos com MTM para redução de movimentos"
          ]
        },
        {
          "titulo": "Amostragem do trabalho",
          "definicao": "Técnica estatística de medição indireta do trabalho baseada em observações instantâneas aleatórias ao longo da jornada. Permite estimar a proporção de tempo gasto em cada atividade sem necessidade de cronometragem contínua.",
          "topicos": [
            "Observações instantâneas",
            "Intervalo de confiança",
            "Estimativa de utilização"
          ],
          "formula": "n = z² × p × (1-p) / e²",
          "aplicacoes": [
            "Levantamento de utilização de máquinas na fábrica",
            "Análise de atividades improdutivas em equipes administrativas",
            "Estudo de tempos em operações de manutenção"
          ]
        },
        {
          "titulo": "Yamazumi",
          "definicao": "Ferramenta visual japonesa (literalmente 'empilhamento') que representa graficamente a carga de trabalho de cada posto em uma linha de produção. Cada tarefa é empilhada como uma barra colorida, permitindo identificar desbalanceamento entre postos.",
          "topicos": [
            "Gráfico de empilhamento",
            "Balanceamento visual",
            "Redistribuição de carga"
          ],
          "formula": "",
          "aplicacoes": [
            "Yamazumi chart para balanceamento de linha de produção",
            "Padronização de trabalho visualizada em cada posto",
            "Redução de gargalos com redistribuição de elementos de trabalho"
          ]
        },
        {
          "titulo": "Layout por produto",
          "definicao": "Arranjo físico onde máquinas e equipamentos são dispostos sequencialmente conforme a rota de fabricação de um produto específico. Adequado para produção em massa de alto volume e baixa variedade, pois minimiza transporte e estoques intermediários.",
          "topicos": [
            "Linha de produção",
            "Fluxo contínuo",
            "Produção em massa"
          ],
          "formula": "",
          "aplicacoes": [
            "Linha de montagem de veículos",
            "Linha de envase de bebidas",
            "Produção contínua de eletrodomésticos"
          ]
        },
        {
          "titulo": "Layout celular",
          "definicao": "Arranjo físico que agrupa máquinas e operadores dedicados a famílias de produtos com processos similares, formando células de manufatura. Combina flexibilidade do layout por processo com eficiência do layout por produto, reduzindo lead times e WIP.",
          "topicos": [
            "Tecnologia de grupo",
            "Célula de manufatura",
            "Famílias de produtos"
          ],
          "formula": "",
          "aplicacoes": [
            "Implementação de células de usinagem para famílias de peças",
            "Célula de montagem em U com operador multitarefa",
            "Conversão de layout funcional para celular"
          ]
        },
        {
          "titulo": "Análise de valor agregado",
          "definicao": "Técnica que classifica cada atividade do processo produtivo como agregadora de valor (AV), necessária mas não agregadora (NNA) ou puro desperdício. Permite focar esforços de melhoria na eliminação de desperdícios e na simplificação de atividades.",
          "topicos": [
            "Atividades AV e NAV",
            "Mapeamento de fluxo de valor (VSM)",
            "Desperdícios lean"
          ],
          "formula": "%AV = Tempo de atividades AV / Tempo total de atravessamento",
          "aplicacoes": [
            "VSM de processo produtivo com classificação AV",
            "Projeto de melhoria para reduzir NAV em 50%",
            "Análise de valor agregado em processo administrativo"
          ]
        },
        {
          "titulo": "Tempo de atravessamento",
          "definicao": "Lead time total desde a entrada da matéria-prima até a liberação do produto acabado, incluindo processamento, espera, movimentação e inspeção. A redução do tempo de atravessamento é objetivo central da manufatura enxuta.",
          "topicos": [
            "Lead time",
            "Tempo de processo vs. tempo total",
            "Redução de atravessamento"
          ],
          "formula": "Tempo de atravessamento = Σ(Tempo de processamento + Esperas + Transportes + Inspeções)",
          "aplicacoes": [
            "Redução de lead time de 15 para 5 dias em linha de produção",
            "Análise de atravessamento para identificação de desperdícios",
            "Impacto da redução de lote no tempo de atravessamento"
          ]
        }
      ]
    },
    {
      "id": "simulacao",
      "nome": "Simulação e Modelagem",
      "icone": "monitor",
      "cor": "#2563eb",
      "descricao": "Simulação computacional de processos e sistemas produtivos.",
      "subtopicos": [
        {
          "titulo": "Simulação de processos",
          "definicao": "Técnica de representação computacional de processos produtivos para analisar seu comportamento sob diferentes condições operacionais. Permite testar cenários, identificar gargalos, avaliar alternativas de layout e otimizar recursos sem interromper a operação real.",
          "topicos": [
            "Modelagem de sistemas",
            "Experimentação computacional",
            "Análise de cenários"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de nova linha de produção para validar capacidade",
            "Teste de diferentes políticas de manutenção em ambiente virtual",
            "Análise de impacto de variação de demanda no sistema produtivo"
          ]
        },
        {
          "titulo": "Eventos discretos",
          "definicao": "Paradigma de simulação onde o sistema muda de estado apenas em momentos discretos no tempo, correspondentes à ocorrência de eventos (chegada de pedido, início de operação, falha de máquina). É o método mais utilizado para simular sistemas de manufatura e logística.",
          "topicos": [
            "Entidades, recursos e filas",
            "Eventos e estados",
            "Relógio da simulação"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação discreta de linha de montagem com falhas aleatórias",
            "Modelagem de centro de distribuição com múltiplos recursos",
            "Análise de filas em sistema de atendimento"
          ]
        },
        {
          "titulo": "Simulação computacional",
          "definicao": "Uso de software especializado para criar modelos digitais de sistemas reais e realizar experimentos controlados. Permite avaliar desempenho, testar hipóteses e otimizar decisões em ambiente livre de riscos e com custos reduzidos.",
          "topicos": [
            "Modelos digitais",
            "Experimentação in silico",
            "Ferramentas computacionais"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de throughput de fábrica antes de investimento em equipamentos",
            "Validação de lógica operacional de sistema de manuseio de materiais",
            "Redução de riscos em projetos de expansão fabril"
          ]
        },
        {
          "titulo": "Arena Simulation",
          "definicao": "Software líder de simulação de eventos discretos desenvolvido pela Rockwell Automation, amplamente utilizado na indústria e academia. Interface gráfica com blocos de modelagem permite construir modelos de processos complexos de forma intuitiva.",
          "topicos": [
            "Modelagem com blocos Arena",
            "Animação 3D",
            "Análise de resultados"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de sistema produtivo com Arena para otimização de layout",
            "Modelagem de processo logístico com múltiplos cenários",
            "Análise de gargalos em planta fabril usando Process Analyzer"
          ]
        },
        {
          "titulo": "FlexSim",
          "definicao": "Software de simulação 3D de eventos discretos focado em manufatura, logística e supply chain. Diferencia-se pela modelagem tridimensional em tempo real, permitindo visualização intuitiva de fluxos e interações entre recursos.",
          "topicos": [
            "Modelagem 3D",
            "Simulação de manufatura",
            "Análise de throughput"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação 3D de centro de distribuição automatizado",
            "Otimização de fluxo de materiais em fábrica de bens de consumo",
            "Modelagem de sistema de transportadores e AGVs"
          ]
        },
        {
          "titulo": "AnyLogic",
          "definicao": "Plataforma de simulação multimétodo que suporta modelagem por eventos discretos, dinâmica de sistemas e agentes (agent-based) em um único ambiente. Utilizada para problemas complexos que exigem diferentes abordagens de modelagem.",
          "topicos": [
            "Multimétodo",
            "Modelagem baseada em agentes",
            "Dinâmica de sistemas"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de cadeia de suprimentos com AnyLogic",
            "Modelagem de fluxo de pedestres em estações",
            "Simulação de adoção de novos produtos no mercado"
          ]
        },
        {
          "titulo": "Modelagem de sistemas",
          "definicao": "Processo de construção de representações abstratas de sistemas reais para fins de análise, previsão e otimização. Envolve definição de limites, variáveis, relações causais, parâmetros e regras de comportamento do sistema modelado.",
          "topicos": [
            "Abstração e simplificação",
            "Validação conceitual",
            "Parâmetros e variáveis de decisão"
          ],
          "formula": "",
          "aplicacoes": [
            "Modelagem conceitual de sistema produtivo para Simulação",
            "Construção de modelo de dinâmica de sistemas para supply chain",
            "Modelagem de filas em sistema de serviços"
          ]
        },
        {
          "titulo": "Otimização via simulação",
          "definicao": "Abordagem que combina simulação com algoritmos de otimização para encontrar a melhor configuração de parâmetros de um sistema complexo. A simulação avalia o desempenho de cada configuração candidata, guiando a busca pela solução ótima.",
          "topicos": [
            "Algoritmos genéticos",
            "Simulated annealing",
            "Otimização heurística"
          ],
          "formula": "",
          "aplicacoes": [
            "Otimização de número de operadores em linha de produção via simulação",
            "Minimização de custo logístico com otimização-simulação",
            "Dimensionamento ótimo de frota com algoritmo genético + simulação"
          ]
        },
        {
          "titulo": "Análise de cenários",
          "definicao": "Técnica de avaliação do comportamento do sistema sob diferentes conjuntos de condições pré-definidas (cenários). Permite comparar alternativas operacionais, testar robustez de decisões e preparar a organização para diferentes futuros possíveis.",
          "topicos": [
            "Cenários operacionais",
            "Análise comparativa",
            "Árvore de decisão"
          ],
          "formula": "",
          "aplicacoes": [
            "Comparação de 5 cenários de layout fabril com simulação",
            "Análise de cenários de demanda vs. capacidade produtiva",
            "Teste de políticas de estoque em diferentes cenários de lead time"
          ]
        },
        {
          "titulo": "Simulação Monte Carlo",
          "definicao": "Método estatístico que utiliza amostragem aleatória repetida para estimar resultados de sistemas com incerteza. Amplamente usado para análise de risco financeiro, previsão de prazos, estimativas de custo e dimensionamento de capacidade.",
          "topicos": [
            "Amostragem aleatória",
            "Distribuições de probabilidade",
            "Análise de risco"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de VPL de projeto com incerteza em receitas e custos",
            "Estimativa de prazo de projeto com PERT + Monte Carlo",
            "Análise de risco em investimento industrial"
          ]
        },
        {
          "titulo": "Validação de modelos",
          "definicao": "Processo de verificar se o modelo computacional representa adequadamente o sistema real para os propósitos do estudo. Inclui validação conceitual (especialistas) e operacional (comparação de outputs simulados vs. dados reais).",
          "topicos": [
            "Validação conceitual",
            "Validação operacional",
            "Análise de sensibilidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Comparação de dados simulados vs. históricos de produção",
            "Validação de modelo com especialistas de chão de fábrica",
            "Teste de sensibilidade para confirmar comportamento esperado"
          ]
        },
        {
          "titulo": "Análise de sensibilidade",
          "definicao": "Técnica que avalia como a variação dos parâmetros de entrada do modelo afeta os resultados simulados. Identifica quais variáveis têm maior impacto no desempenho do sistema, direcionando esforços de coleta de dados e melhoria.",
          "topicos": [
            "Parâmetros críticos",
            "Gráfico de tornado",
            "Impacto nas saídas"
          ],
          "formula": "",
          "aplicacoes": [
            "Identificação de variáveis críticas em modelo de produção",
            "Análise de sensibilidade de parâmetros de manutenção no OEE",
            "Priorização de fatores de melhoria baseada em impacto simulado"
          ]
        },
        {
          "titulo": "Simulação de manufatura",
          "definicao": "Aplicação específica de simulação computacional a sistemas de manufatura para analisar throughput, utilização de recursos, lead times, formação de filas e gargalos. Essencial para projeto e melhoria de sistemas produtivos complexos.",
          "topicos": [
            "Manufatura discreta",
            "Manufatura contínua",
            "Sistemas flexíveis de manufatura"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de sistema de manufatura flexível (FMS)",
            "Análise de capacidade de planta antes de novos contratos",
            "Estudo de políticas de programação da produção (scheduling)"
          ]
        },
        {
          "titulo": "Simulação logística",
          "definicao": "Aplicação de simulação a sistemas logísticos e de supply chain para otimizar transportes, armazenagem, distribuição e gestão de estoques. Permite avaliar políticas de reposição, roteirização e dimensionamento de frota.",
          "topicos": [
            "Cadeia de suprimentos",
            "Centro de distribuição",
            "Roteirização"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de operação de centro de distribuição (CD)",
            "Modelagem de cadeia logística multicamadas",
            "Dimensionamento de frota com simulação de rotas"
          ]
        },
        {
          "titulo": "Simulação de serviços",
          "definicao": "Aplicação de técnicas de simulação a sistemas de serviços como hospitais, bancos, restaurantes, call centers e aeroportos. Diferencia-se da simulação de manufatura pela predominância do fator humano e variabilidade dos processos.",
          "topicos": [
            "Hospitais e saúde",
            "Atendimento ao cliente",
            "Sistemas de fila"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de fluxo de pacientes em pronto-socorro",
            "Dimensionamento de equipe de call center com simulação",
            "Otimização de atendimento em agência bancária"
          ]
        },
        {
          "titulo": "Gêmeo digital vs. simulação",
          "definicao": "Gêmeo digital é uma réplica virtual de um sistema real conectada em tempo real a sensores e dados operacionais, evoluindo com o sistema físico. Difere da simulação tradicional, que é pontual e offline, por sua natureza contínua e bidirecional.",
          "topicos": [
            "Réplica digital",
            "Tempo real e IoT",
            "Manutenção preditiva"
          ],
          "formula": "",
          "aplicacoes": [
            "Gêmeo digital de linha de produção para monitoramento em tempo real",
            "Integração de simulação com sistemas MES e SCADA",
            "Comparação entre abordagens para tomada de decisão"
          ]
        },
        {
          "titulo": "Tecnologia Plant Simulation",
          "definicao": "Software da Siemens (antigo Tecnomatix Plant Simulation) para simulação, visualização e otimização de sistemas produtivos e logísticos. Permite modelar, analisar e otimizar fluxos de materiais e operações em ambiente virtual 3D.",
          "topicos": [
            "Siemens Tecnomatix",
            "Otimização de fluxo",
            "Gêmeo digital de fábrica"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de fábrica completa com Plant Simulation",
            "Otimização de layout e fluxo de materiais em planta automotiva",
            "Análise de cenários de produção integrada com ERP"
          ]
        },
        {
          "titulo": "Simul8",
          "definicao": "Software de simulação de eventos discretos com interface visual intuitiva, focado em aplicações de manufatura, serviços e saúde. Destaca-se pela facilidade de uso e rápida prototipagem de modelos.",
          "topicos": [
            "Interface visual",
            "Simulação de filas",
            "Aplicações em saúde"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação rápida de processo produtivo para suporte à decisão",
            "Modelagem de fluxo de pacientes em unidade de saúde",
            "Análise de capacidade em operações de serviços"
          ]
        }
      ]
    },
    {
      "id": "inovacao",
      "nome": "Gestão da Inovação",
      "icone": "lightbulb",
      "cor": "#ca8a04",
      "descricao": "P&D, open innovation, design thinking e cultura de inovação industrial.",
      "subtopicos": [
        {
          "titulo": "P&D — Pesquisa e Desenvolvimento",
          "definicao": "Conjunto de atividades sistemáticas e criativas para aumentar o conhecimento disponível e gerar novas aplicações tecnológicas. Divide-se em pesquisa básica, pesquisa aplicada e desenvolvimento experimental, sendo motor da inovação tecnológica industrial.",
          "topicos": [
            "Pesquisa básica",
            "Pesquisa aplicada",
            "Desenvolvimento experimental"
          ],
          "formula": "",
          "aplicacoes": [
            "Laboratório de P&D para novos materiais",
            "Projetos de pesquisa em parceria universidade-empresa",
            "Gestão de portfólio de P&D com critérios de priorização"
          ]
        },
        {
          "titulo": "Gestão da inovação",
          "definicao": "Processo estruturado de planejar, organizar, dirigir e controlar as iniciativas de inovação dentro da organização, desde a geração de ideias até a implementação e difusão. Envolve gestão de portfólio, métricas de inovação e alinhamento estratégico.",
          "topicos": [
            "Processo de inovação",
            "Portfólio de inovação",
            "Métricas de inovação"
          ],
          "formula": "",
          "aplicacoes": [
            "Estruturação de departamento de gestão da inovação",
            "Implantação de sistema de gestão de ideias (sugestões)",
            "Relatório de inovação com indicadores de resultado"
          ]
        },
        {
          "titulo": "Design Thinking",
          "definicao": "Abordagem centrada no ser humano para resolução de problemas complexos utilizando a mentalidade do designer. Segue etapas de empatia, definição, ideação, prototipação e teste, combinando pensamento divergente e convergente.",
          "topicos": [
            "Empatia e pesquisa com usuários",
            "Ideação",
            "Prototipação rápida"
          ],
          "formula": "",
          "aplicacoes": [
            "Workshop de design thinking para inovação em produto",
            "Cocriação com clientes para novo serviço industrial",
            "Resolução de problemas complexos com metodologia double diamond"
          ]
        },
        {
          "titulo": "Open Innovation",
          "definicao": "Paradigma de inovação que defende o uso de fluxos de conhecimento internos e externos para acelerar a inovação interna e expandir mercados. Combina tecnologias internas com parcerias externas, startups, universidades e laboratórios de pesquisa.",
          "topicos": [
            "Inovação aberta inbound e outbound",
            "Corporate venture",
            "Plataformas de inovação"
          ],
          "formula": "",
          "aplicacoes": [
            "Programa de aproximação com startups (corporate venture)",
            "Licenciamento de tecnologia desenvolvida internamente",
            "Desafios de inovação abertos ao ecossistema"
          ]
        },
        {
          "titulo": "Transformação organizacional",
          "definicao": "Processo profundo de mudança na estrutura, cultura, processos e modelo de negócio da organização para responder a disrupções tecnológicas, de mercado ou regulatórias. Requer liderança, comunicação e gestão da mudança estruturada.",
          "topicos": [
            "Gestão da mudança",
            "Transformação digital",
            "Reestruturação cultural"
          ],
          "formula": "",
          "aplicacoes": [
            "Transformação digital de indústria tradicional para Indústria 4.0",
            "Programa de transformação cultural lean",
            "Reestruturação organizacional para agilidade e inovação"
          ]
        },
        {
          "titulo": "Propriedade intelectual e patentes",
          "definicao": "Conjunto de direitos legais que protegem criações intelectuais, incluindo patentes de invenção, modelos de utilidade, desenhos industriais e marcas. As patentes conferem exclusividade temporária (20 anos no Brasil) e são indicadores-chave de inovação tecnológica.",
          "topicos": [
            "Patentes de invenção",
            "Marcas e desenhos industriais",
            "INPI e PCT"
          ],
          "formula": "",
          "aplicacoes": [
            "Depósito de patente de nova tecnologia de processo",
            "Mapeamento de patentes para inteligência competitiva",
            "Estratégia de portfólio de PI para startup industrial"
          ]
        },
        {
          "titulo": "Inovação incremental vs. radical",
          "definicao": "Inovação incremental consiste em melhorias contínuas em produtos, processos ou serviços existentes (ex.: nova versão de software). Inovação radical introduz algo completamente novo, rompendo com paradigmas estabelecidos e criando novos mercados (ex.: impressão 3D).",
          "topicos": [
            "Inovação sustentadora",
            "Inovação disruptiva",
            "Curva S tecnológica"
          ],
          "formula": "",
          "aplicacoes": [
            "Programa de melhorias incrementais contínuas (kaizen)",
            "Projeto de inovação radical com laboratório dedicado",
            "Equilíbrio de portfólio entre incremental e radical (ambidestria)"
          ]
        },
        {
          "titulo": "Hélice Tríplice",
          "definicao": "Modelo de inovação que propõe a interação sinérgica entre universidade, empresa e governo para fomentar o desenvolvimento econômico e social baseado em conhecimento. Cada hélice assume papéis que se sobrepõem e complementam na geração de inovação.",
          "topicos": [
            "Universidade-empresa",
            "Governo e políticas públicas",
            "Parques tecnológicos"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto cooperativo universidade-indústria para P&D",
            "Estruturação de parque tecnológico com governança tríplice",
            "Programa de incentivos fiscais (Lei do Bem) para inovação"
          ]
        },
        {
          "titulo": "Inovação disruptiva",
          "definicao": "Conceito de Clayton Christensen que descreve inovações que inicialmente atendem mercados nicho ou desprezados por incumbentes, mas que gradualmente deslocam concorrentes estabelecidos ao melhorar desempenho e acessibilidade.",
          "topicos": [
            "Disrupção de mercado",
            "Baixo custo inicial",
            "Deslocamento de incumbentes"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise de ameaça disruptiva em setor industrial consolidado",
            "Estratégia de inovação disruptiva para novo entrante",
            "Antecipação de disrupção tecnológica em planejamento estratégico"
          ]
        },
        {
          "titulo": "Ecossistemas de inovação",
          "definicao": "Redes de organizações interconectadas — startups, universidades, centros de pesquisa, investidores, governo e grandes empresas — que coevoluem e geram inovação coletivamente. A força do ecossistema está na diversidade e nas conexões entre seus agentes.",
          "topicos": [
            "Startups e scale-ups",
            "Aceleradoras e incubadoras",
            "Redes de inovação"
          ],
          "formula": "",
          "aplicacoes": [
            "Mapeamento de ecossistema de inovação regional",
            "Programa de aceleração corporativa para startups industriais",
            "Conexão com hubs de inovação (Cubo, InovaUTC)"
          ]
        },
        {
          "titulo": "Corporate Venture",
          "definicao": "Prática de grandes corporações investirem em startups externas por meio de fundos de venture capital (CVC) ou parcerias estratégicas. Permite acesso a tecnologias emergentes, novos modelos de negócio e talentos inovadores sem desenvolvimento interno.",
          "topicos": [
            "CVC — Corporate Venture Capital",
            "Venture client",
            "Spin-off corporativo"
          ],
          "formula": "",
          "aplicacoes": [
            "Criação de fundo CVC para investimento em deep techs",
            "Programa de venture client para testar soluções de startups",
            "Spin-off de tecnologia interna em nova empresa"
          ]
        },
        {
          "titulo": "Intraempreendedorismo",
          "definicao": "Prática de estimular colaboradores a agir como empreendedores dentro da organização, desenvolvendo novos produtos, serviços ou processos. Empresas com cultura intraempreendedora retêm talentos e geram inovação orgânica contínua.",
          "topicos": [
            "Cultura intraempreendedora",
            "Programa de intraempreendedorismo",
            "Inovação interna"
          ],
          "formula": "",
          "aplicacoes": [
            "Programa de intraempreendedorismo com pitch para diretoria",
            "Hackathons internos para solução de desafios de produção",
            "Sistema de incentivo para colaboradores inovadores"
          ]
        },
        {
          "titulo": "Lean Startup",
          "definicao": "Metodologia de desenvolvimento de novos produtos e negócios baseada no ciclo construir-medir-aprender, MVP e pivotagem. Reduz riscos e desperdícios ao testar hipóteses de negócio com clientes reais antes de investir em escala.",
          "topicos": [
            "MVP — Minimum Viable Product",
            "Ciclo construir-medir-aprender",
            "Pivotagem"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenvolvimento de novo produto com lean startup",
            "Validação de modelo de negócio com MVP em 3 meses",
            "Testes A/B para validação de funcionalidades"
          ]
        },
        {
          "titulo": "MVP — Minimum Viable Product",
          "definicao": "Versão simplificada de um novo produto que contém apenas funcionalidades essenciais para ser lançada e testada com clientes reais. O feedback do MVP orienta decisões de pivotar, perseverar ou escalar, minimizando investimento inicial.",
          "topicos": [
            "Produto mínimo viável",
            "Teste com clientes",
            "Validação de hipóteses"
          ],
          "formula": "",
          "aplicacoes": [
            "MVP de plataforma digital para testar aceitação de mercado",
            "Protótipo funcional de equipamento para validação técnica",
            "Campanha de pré-venda para validar demanda antes de produzir"
          ]
        },
        {
          "titulo": "Inovação aberta",
          "definicao": "Modelo complementar ao open innovation que enfatiza a colaboração com agentes externos (startups, fornecedores, clientes, universidades) para co-criar soluções inovadoras. Utiliza plataformas de ideação, desafios abertos e hackathons como mecanismos.",
          "topicos": [
            "Plataformas de ideação aberta",
            "Desafios de inovação",
            "Crowdsourcing"
          ],
          "formula": "",
          "aplicacoes": [
            "Desafio aberto de inovação para fornecedores",
            "Plataforma de ideação colaborativa com comunidade externa",
            "Parcerias de codesenvolvimento com startups"
          ]
        },
        {
          "titulo": "Crowdsourcing",
          "definicao": "Prática de externalizar tarefas ou problemas para uma multidão (crowd) de contribuidores externos, geralmente por meio de plataformas digitais. Utilizado para geração de ideias, resolução de problemas técnicos e desenvolvimento de soluções inovadoras.",
          "topicos": [
            "Multidão de solucionadores",
            "Plataformas de crowdsourcing",
            "Concursos de inovação"
          ],
          "formula": "",
          "aplicacoes": [
            "Desafio global de engenharia com premiação",
            "Coleta de ideias de clientes para melhoria de produto",
            "Plataforma InnoCentive para problemas técnicos complexos"
          ]
        },
        {
          "titulo": "Inovação frugal",
          "definicao": "Abordagem de inovação que busca criar soluções de alto valor com recursos limitados, simplificando produtos e processos para atender mercados de baixa renda ou contextos de restrição. Também conhecida como 'doing more with less' (fazer mais com menos).",
          "topicos": [
            "Inovação reversa",
            "Produtos de baixo custo",
            "Engenharia frugal"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenvolvimento de equipamentos médicos de baixo custo",
            "Produtos adaptados para base da pirâmide",
            "Reengenharia frugal de produto para mercados emergentes"
          ]
        },
        {
          "titulo": "Métrica de inovação (ROI²)",
          "definicao": "Indicador que mede o retorno sobre o investimento em inovação (ROI² = Return on Innovation Investment). Considera não apenas o retorno financeiro dos projetos de inovação, mas também os benefícios intangíveis como aprendizado e posicionamento estratégico.",
          "topicos": [
            "Indicadores de P&D",
            "ROI de inovação",
            "Balanced scorecard de inovação"
          ],
          "formula": "ROI² = (Receita de inovação - Investimento em inovação) / Investimento em inovação",
          "aplicacoes": [
            "Relatório anual de ROI de inovação",
            "Avaliação de portfólio de projetos de P&D",
            "Dashboard de métricas de inovação para board"
          ]
        },
        {
          "titulo": "Technology Readiness Level (TRL)",
          "definicao": "Escala de 1 a 9 desenvolvida pela NASA para medir a maturidade de uma tecnologia, desde a pesquisa básica (TRL 1) até a operação comprovada em ambiente real (TRL 9). Amplamente adotada por agências de fomento e programas de P&D industrial.",
          "topicos": [
            "TRL 1-3: Pesquisa",
            "TRL 4-6: Desenvolvimento",
            "TRL 7-9: Implantação"
          ],
          "formula": "",
          "aplicacoes": [
            "Classificação TRL de tecnologia em processo de P&D",
            "Gate de aprovação baseado em TRL para avanço de projeto",
            "Critério TRL para seleção de projetos de inovação"
          ]
        },
        {
          "titulo": "Vigília tecnológica (Technology Watch)",
          "definicao": "Processo sistemático de monitoramento e análise de tendências tecnológicas, patentes, publicações científicas e movimentos de concorrentes para antecipar mudanças e identificar oportunidades de inovação. Integra a inteligência competitiva da organização.",
          "topicos": [
            "Inteligência competitiva",
            "Monitoramento de patentes",
            "Roadmapping tecnológico"
          ],
          "formula": "",
          "aplicacoes": [
            "Boletim trimestral de vigilância tecnológica",
            "Mapeamento de patentes para identificação de white spaces",
            "Construção de technology roadmap para planejamento de P&D"
          ]
        }
      ]
    },
    {
      "id": "indicadores",
      "nome": "Indicadores Industriais",
      "icone": "gauge",
      "cor": "#0891b2",
      "descricao": "Métricas de desempenho, produtividade e eficiência industrial.",
      "subtopicos": [
        {
          "titulo": "OEE — Overall Equipment Effectiveness",
          "definicao": "Indicador criado por Seiichi Nakajima no contexto do TPM para medir a eficiência global de equipamentos industriais. Composto por três fatores — disponibilidade, performance e qualidade — que juntos revelam o percentual do tempo planejado que efetivamente gerou produtos conformes.",
          "topicos": [
            "Disponibilidade",
            "Performance",
            "Qualidade",
            "TPM"
          ],
          "formula": "OEE = Disponibilidade × Performance × Qualidade",
          "aplicacoes": [
            "Monitoramento de máquinas em plantas fabris",
            "Identificação de gargalos produtivos",
            "Benchmarking de classe mundial (85%)"
          ]
        },
        {
          "titulo": "Lead Time",
          "definicao": "Tempo total decorrido desde o recebimento do pedido até a entrega final do produto ao cliente. Engloba processamento, espera, transporte e inspeção, sendo um dos principais indicadores de eficiência logística e produtiva.",
          "topicos": [
            "Tempo de atravessamento",
            "Ciclo produtivo",
            "Logística"
          ],
          "formula": "Lead Time = Data de entrega − Data do pedido",
          "aplicacoes": [
            "Gestão de prazos em manufatura",
            "Avaliação de desempenho logístico",
            "Melhoria contínua em fluxos de valor"
          ]
        },
        {
          "titulo": "Throughput",
          "definicao": "Taxa na qual o sistema produtivo gera produtos acabados em um intervalo de tempo. Reflete a capacidade real de produção e é usado para dimensionar recursos e identificar restrições do sistema.",
          "topicos": [
            "Capacidade produtiva",
            "Gargalos",
            "TOC"
          ],
          "formula": "Throughput = Unidades produzidas / Período de tempo",
          "aplicacoes": [
            "Dimensionamento de linhas de produção",
            "Planejamento de capacidade",
            "Análise de restrições (TOC)"
          ]
        },
        {
          "titulo": "Eficiência global da planta",
          "definicao": "Métrica agregada que avalia o rendimento integrado de todos os setores de uma planta industrial, combinando utilização de recursos, produtividade e qualidade. Difere do OEE por considerar a planta como um todo, não equipamentos isolados.",
          "topicos": [
            "Produtividade total",
            "Utilização de recursos",
            "Rendimento global"
          ],
          "formula": "Eficiência Global = (Produção real / Capacidade nominal) × 100",
          "aplicacoes": [
            "Avaliação de performance corporativa",
            "Comparação entre unidades fabris",
            "Meta estratégica de produção"
          ]
        },
        {
          "titulo": "Produtividade da mão de obra",
          "definicao": "Relação entre a quantidade produzida e o total de horas trabalhadas ou número de colaboradores alocados. Indica a eficiência do fator trabalho no processo produtivo.",
          "topicos": [
            "Horas-homem",
            "Eficiência laboral",
            "Rendimento operacional"
          ],
          "formula": "Produtividade = Unidades produzidas / Homens-hora trabalhados",
          "aplicacoes": [
            "Cálculo de custo unitário de mão de obra",
            "Benchmarking entre turnos",
            "Plano de incentivos salariais"
          ]
        },
        {
          "titulo": "Refugo e retrabalho",
          "definicao": "Indicadores de qualidade que medem, respectivamente, a proporção de peças descartadas por não conformidade e a proporção de peças que necessitam de correção. Impactam diretamente o custo operacional e a eficiência global.",
          "topicos": [
            "Custo da qualidade",
            "Não conformidade",
            "Sucata"
          ],
          "formula": "Taxa de Refugo = (Peças refugadas / Total produzido) × 100",
          "aplicacoes": [
            "Controle estatístico da qualidade",
            "Redução de desperdícios",
            "Programas Six Sigma"
          ]
        },
        {
          "titulo": "OTIF — On Time In Full",
          "definicao": "Indicador logístico que mede o percentual de pedidos entregues no prazo acordado e com a quantidade completa solicitada. Considerado uma métrica crítica de desempenho da cadeia de suprimentos.",
          "topicos": [
            "Nível de serviço",
            "Entregas no prazo",
            "Completeza de pedidos"
          ],
          "formula": "OTIF = (Pedidos entregues no prazo e completos / Total de pedidos) × 100",
          "aplicacoes": [
            "Avaliação de fornecedores",
            "Gestão de transporte e distribuição",
            "Acordo de nível de serviço (SLA)"
          ]
        },
        {
          "titulo": "Fill Rate",
          "definicao": "Percentual da demanda do cliente que é atendida imediatamente com estoque disponível sem necessidade de backorder. Reflete a eficácia da gestão de estoques e da reposição.",
          "topicos": [
            "Nível de atendimento",
            "Disponibilidade de estoque",
            "Backorder"
          ],
          "formula": "Fill Rate = (Unidades atendidas / Unidades demandadas) × 100",
          "aplicacoes": [
            "Gestão de centros de distribuição",
            "Política de estoque de segurança",
            "Planejamento de vendas e operações"
          ]
        },
        {
          "titulo": "Takt Rate",
          "definicao": "Ritmo de produção necessário para atender à demanda do cliente no tempo disponível. Sincroniza o fluxo produtivo com o consumo, sendo um conceito central do Sistema Toyota de Produção.",
          "topicos": [
            "Takt Time",
            "Ritmo de produção",
            "Demanda",
            "JIT"
          ],
          "formula": "Takt Rate = Tempo disponível / Demanda do período",
          "aplicacoes": [
            "Balanceamento de linhas de montagem",
            "Dimensionamento de equipes",
            "Produção puxada (pull system)"
          ]
        },
        {
          "titulo": "DPO — Days Payable Outstanding",
          "definicao": "Indicador financeiro que mede o prazo médio em dias que a empresa leva para pagar seus fornecedores. É um componente do ciclo financeiro e impacta diretamente o capital de giro.",
          "topicos": [
            "Ciclo financeiro",
            "Prazo médio de pagamento",
            "Capital de giro"
          ],
          "formula": "DPO = (Fornecedores médios / Custo das vendas) × Dias do período",
          "aplicacoes": [
            "Gestão de fluxo de caixa",
            "Negociação com fornecedores",
            "Análise de liquidez"
          ]
        },
        {
          "titulo": "Rendimento operacional (Yield)",
          "definicao": "Proporção de produtos ou serviços que atendem aos critérios de qualidade na primeira passagem, sem necessidade de retrabalho ou reparo. É uma métrica-chave da qualidade industrial.",
          "topicos": [
            "First Pass Yield",
            "Qualidade na fonte",
            "Six Sigma"
          ],
          "formula": "Yield = (Unidades conformes na 1ª passagem / Total processado) × 100",
          "aplicacoes": [
            "Controle de qualidade estatístico",
            "Cálculo de capacidade efetiva",
            "Melhoria de processos produtivos"
          ]
        },
        {
          "titulo": "Custo por unidade produzida",
          "definicao": "Valor total dos insumos (matéria-prima, mão de obra direta, energia e custos indiretos) dividido pela quantidade de unidades fabricadas. Permite avaliar a competitividade e a margem de contribuição.",
          "topicos": [
            "Custeio industrial",
            "Custo variável",
            "Margem de contribuição"
          ],
          "formula": "Custo unitário = Custo total de produção / Quantidade produzida",
          "aplicacoes": [
            "Formação de preço de venda",
            "Análise de rentabilidade por produto",
            "Decisões de make or buy"
          ]
        },
        {
          "titulo": "Horas trabalhadas sem acidente",
          "definicao": "Indicador de segurança do trabalho que contabiliza o total de horas expostas a risco sem ocorrência de acidentes com ou sem afastamento. Reflete a eficácia do sistema de gestão de SST.",
          "topicos": [
            "Segurança do trabalho",
            "SST",
            "Acidentes",
            "NRs"
          ],
          "formula": "",
          "aplicacoes": [
            "Programas de segurança comportamental",
            "Auditorias de SST",
            "Certificações OHSAS/ISO 45001"
          ]
        },
        {
          "titulo": "Consumo energético por unidade",
          "definicao": "Relação entre a energia elétrica (ou térmica) consumida no processo produtivo e a quantidade de unidades produzidas. Indicador crítico para eficiência energética e sustentabilidade industrial.",
          "topicos": [
            "Eficiência energética",
            "Sustentabilidade",
            "Custo de energia"
          ],
          "formula": "Consumo específico = kWh consumidos / Unidades produzidas",
          "aplicacoes": [
            "Programas de eficiência energética",
            "Certificação ISO 50001",
            "Redução de custos fixos industriais"
          ]
        },
        {
          "titulo": "Indicador de manutenção (MMF)",
          "definicao": "Conjunto de métricas de gestão da manutenção, incluindo MTBF (tempo médio entre falhas) e MTTR (tempo médio de reparo). Apoiam o planejamento de manutenção preventiva e preditiva.",
          "topicos": [
            "MTBF",
            "MTTR",
            "Manutenção preventiva",
            "Confiabilidade"
          ],
          "formula": "MTBF = Tempo total de operação / Número de falhas",
          "aplicacoes": [
            "Plano de manutenção preventiva",
            "Cálculo de disponibilidade de equipamentos",
            "Gestão de ativos industriais"
          ]
        },
        {
          "titulo": "Overall Labor Effectiveness (OLE)",
          "definicao": "Versão do OEE aplicada à mão de obra direta. Mede a eficácia da força de trabalho combinando disponibilidade, desempenho e qualidade do trabalho humano.",
          "topicos": [
            "Produtividade laboral",
            "Eficiência humana",
            "Trabalho padronizado"
          ],
          "formula": "OLE = Disponibilidade × Desempenho × Qualidade (mão de obra)",
          "aplicacoes": [
            "Avaliação de linhas manuais",
            "Dimensionamento de equipes",
            "Melhoria de métodos de trabalho"
          ]
        },
        {
          "titulo": "Indicador de entregas no prazo",
          "definicao": "Percentual de pedidos ou itens entregues aos clientes dentro do prazo prometido. É um reflexo direto da confiabilidade do sistema produtivo e logístico.",
          "topicos": [
            "On Time Delivery",
            "Nível de serviço",
            "Pontualidade"
          ],
          "formula": "Entregas no prazo = (Pedidos entregues na data / Total de pedidos) × 100",
          "aplicacoes": [
            "Acompanhamento de SLA",
            "Avaliação de desempenho logístico",
            "Indicador estratégico de operações"
          ]
        },
        {
          "titulo": "Performance/Qualidade/Disponibilidade",
          "definicao": "Os três pilares do OEE que decompõem as perdas produtivas: disponibilidade (paradas), performance (velocidade reduzida) e qualidade (defeitos). A análise individual de cada pilar permite direcionar ações corretivas específicas.",
          "topicos": [
            "Perdas produtivas",
            "6 Grandes Perdas",
            "TPM"
          ],
          "formula": "Disponibilidade = (Tempo operacional / Tempo planejado) × 100",
          "aplicacoes": [
            "Diagnóstico de perdas na produção",
            "Melhoria contínua direcionada",
            "Metas setoriais de fábrica"
          ]
        },
        {
          "titulo": "Indicador de qualidade (FTT)",
          "definicao": "First Time Through (FTT) mede a porcentagem de produtos que passam por todo o processo produtivo sem qualquer defeito ou retrabalho na primeira tentativa. É um indicador mais rigoroso que o yield simples.",
          "topicos": [
            "First Time Through",
            "Qualidade na fonte",
            "Zero defeitos"
          ],
          "formula": "FTT = (Total sem defeitos na 1ª vez / Total processado) × 100",
          "aplicacoes": [
            "Monitoramento de linhas multietapas",
            "Programas de qualidade Six Sigma",
            "Redução de retrabalho"
          ]
        },
        {
          "titulo": "Ciclo PDCA para indicadores",
          "definicao": "Metodologia de gestão da melhoria contínua aplicada aos indicadores de desempenho. O ciclo Planejar-Executar-Checar-Agir permite definir metas, coletar dados, analisar resultados e implementar ações corretivas de forma estruturada.",
          "topicos": [
            "Melhoria contínua",
            "Kaizen",
            "Gestão à vista"
          ],
          "formula": "",
          "aplicacoes": [
            "Revisão periódica de KPIs",
            "Programas de melhoria contínua",
            "Rotinas de gestão da produção"
          ]
        }
      ]
    },
    {
      "id": "legislacao",
      "nome": "Legislação e Normas",
      "icone": "book-open",
      "cor": "#64748b",
      "descricao": "Normas técnicas, regulamentações e compliance industrial.",
      "subtopicos": [
        {
          "titulo": "Normas técnicas ABNT",
          "definicao": "Conjunto de regras e especificações técnicas estabelecidas pela Associação Brasileira de Normas Técnicas para padronizar produtos, processos e serviços no Brasil. As normas ABNT são voluntárias, mas frequentemente referenciadas por regulamentações oficiais.",
          "topicos": [
            "NBR",
            "Normalização",
            "Padronização"
          ],
          "formula": "",
          "aplicacoes": [
            "Elaboração de projetos técnicos",
            "Controle de qualidade industrial",
            "Certificação de produtos e sistemas"
          ]
        },
        {
          "titulo": "Regulamentações industriais",
          "definicao": "Conjunto de atos normativos (decretos, portarias, resoluções) emitidos por órgãos governamentais que estabelecem exigências obrigatórias para a operação industrial. Incluem requisitos de segurança, ambientais, sanitários e fiscais.",
          "topicos": [
            "Órgãos reguladores",
            "Conformidade legal",
            "Licenciamento industrial"
          ],
          "formula": "",
          "aplicacoes": [
            "Licenciamento ambiental de fábricas",
            "Alvará de funcionamento",
            "Adequação a requisitos setoriais"
          ]
        },
        {
          "titulo": "Legislação ambiental",
          "definicao": "Conjunto de leis, decretos e resoluções que regulam a interação da atividade industrial com o meio ambiente, abrangendo licenciamento, emissões, resíduos sólidos, recursos hídricos e responsabilidade ambiental.",
          "topicos": [
            "Licenciamento ambiental",
            "Resíduos",
            "Política Nacional do Meio Ambiente"
          ],
          "formula": "",
          "aplicacoesoes": [
            "Licenciamento ambiental de empreendimentos",
            "Gestão de resíduos industriais",
            "Programas de compliance ambiental"
          ]
        },
        {
          "titulo": "Legislação trabalhista",
          "definicao": "Corpo legal que regula as relações entre empregadores e empregados, incluindo a Consolidação das Leis do Trabalho (CLT), jornada de trabalho, remuneração, férias, segurança e medicina do trabalho.",
          "topicos": [
            "CLT",
            "Direitos trabalhistas",
            "Jornada de trabalho",
            "Acordo coletivo"
          ],
          "formula": "",
          "aplicacoes": [
            "Elaboração de folha de pagamento",
            "Gestão de jornada e ponto eletrônico",
            "Defesa em reclamações trabalhistas"
          ]
        },
        {
          "titulo": "Compliance regulatório",
          "definicao": "Conjunto de práticas e controles adotados para garantir que a organização cumpra todas as leis, normas e regulamentos aplicáveis ao seu setor. Envolve mapeamento de riscos legais, políticas internas e programas de integridade.",
          "topicos": [
            "Governança",
            "LGPD",
            "Programa de integridade"
          ],
          "formula": "",
          "aplicacoes": [
            "Implementação de programa de compliance",
            "Auditoria de conformidade legal",
            "Due diligence de fornecedores"
          ]
        },
        {
          "titulo": "Auditorias regulatórias",
          "definicao": "Processo sistemático e documentado de verificação da conformidade de processos, produtos e sistemas com requisitos legais e normativos. Podem ser internas (1ª parte), de fornecedores (2ª parte) ou de certificação (3ª parte).",
          "topicos": [
            "Auditoria interna",
            "Auditoria de certificação",
            "Não conformidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Certificação ISO 9001",
            "Auditoria fiscal e trabalhista",
            "Manutenção de selos de conformidade"
          ]
        },
        {
          "titulo": "NRs — Normas Regulamentadoras",
          "definicao": "Disposições complementares à CLT expedidas pelo Ministério do Trabalho e Emprego que estabelecem obrigações de empregadores e trabalhadores para garantir condições seguras e saudáveis no ambiente laboral. Atualmente existem 37 NRs em vigor.",
          "topicos": [
            "NR-12",
            "NR-33",
            "SST",
            "Inspeção do trabalho"
          ],
          "formula": "",
          "aplicacoes": [
            "Elaboração de PCMSO e PPRA/PGR",
            "Proteção de máquinas (NR-12)",
            "Trabalho em altura (NR-35)"
          ]
        },
        {
          "titulo": "INMETRO",
          "definicao": "Instituto Nacional de Metrologia, Qualidade e Tecnologia, autarquia federal responsável pela metrologia legal, certificação compulsória e voluntária, acreditação de laboratórios e fiscalização de produtos regulamentados.",
          "topicos": [
            "Metrologia",
            "Certificação compulsória",
            "Produtos regulamentados"
          ],
          "formula": "",
          "aplicacoes": [
            "Certificação de produtos elétricos e eletrônicos",
            "Verificação de instrumentos de medição",
            "Fiscalização de conformidade"
          ]
        },
        {
          "titulo": "ISO e certificações",
          "definicao": "Conjunto de normas internacionais emitidas pela International Organization for Standardization (ISO) que estabelecem requisitos para sistemas de gestão da qualidade (ISO 9001), ambiental (ISO 14001), segurança (ISO 45001) e outras.",
          "topicos": [
            "ISO 9001",
            "ISO 14001",
            "ISO 45001",
            "Sistema de gestão"
          ],
          "formula": "",
          "aplicacoes": [
            "Implementação de SGQ",
            "Certificação de sistemas de gestão",
            "Requisitos de cliente e mercado"
          ]
        },
        {
          "titulo": "IATF 16949",
          "definicao": "Norma técnica internacional de sistema de gestão da qualidade especificamente desenvolvida para a indústria automotiva. Substitui a ISO/TS 16949 e integra os requisitos da ISO 9001 com requisitos específicos do setor automotivo.",
          "topicos": [
            "Automotivo",
            "APQP",
            "PPAP",
            "FMEA"
          ],
          "formula": "",
          "aplicacoes": [
            "Homologação de fornecedores automotivos",
            "Controle de qualidade na cadeia OEM",
            "Desenvolvimento de novos produtos automotivos"
          ]
        },
        {
          "titulo": "ANVISA (BPF)",
          "definicao": "Agência Nacional de Vigilância Sanitária que regula e fiscaliza produtos e serviços que impactam a saúde pública. As Boas Práticas de Fabricação (BPF) são requisitos obrigatórios para indústrias de alimentos, medicamentos, cosméticos e dispositivos médicos.",
          "topicos": [
            "Vigilância sanitária",
            "Boas Práticas de Fabricação",
            "Registro de produtos"
          ],
          "formula": "",
          "aplicacoes": [
            "Registro de medicamentos e alimentos",
            "Inspeção sanitária em fábricas",
            "Controle de qualidade farmacêutico"
          ]
        },
        {
          "titulo": "Legislação de importação/exportação",
          "definicao": "Conjunto de normas aduaneiras, tributárias e administrativas que regulam o comércio exterior brasileiro, incluindo classificação fiscal (NCM), licenciamento de importação, drawback, regimes aduaneiros especiais e acordos internacionais.",
          "topicos": [
            "Comércio exterior",
            "Aduana",
            "NCM",
            "Drawback"
          ],
          "formula": "",
          "aplicacoes": [
            "Classificação fiscal de mercadorias",
            "Licenciamento de importação",
            "Operações de drawback"
          ]
        },
        {
          "titulo": "Código de Defesa do Consumidor",
          "definicao": "Lei nº 8.078/1990 que estabelece normas de proteção e defesa do consumidor, regulando relações de consumo, responsabilidade por vícios e defeitos, práticas abusivas, publicidade e garantias. Impacta diretamente a qualidade e a segurança dos produtos industriais.",
          "topicos": [
            "CDC",
            "Relação de consumo",
            "Responsabilidade civil",
            "Garantia"
          ],
          "formula": "",
          "aplicacoes": [
            "Política de garantia de produtos",
            "Atendimento a reclamações de clientes",
            "Responsabilidade por defeitos de fabricação"
          ]
        },
        {
          "titulo": "LGPD na indústria",
          "definicao": "Lei Geral de Proteção de Dados (Lei nº 13.709/2018) que regula o tratamento de dados pessoais por organizações públicas e privadas. Na indústria, impacta o RH, dados de clientes, fornecedores e sistemas de monitoramento de colaboradores.",
          "topicos": [
            "Privacidade",
            "DPO",
            "Dados pessoais",
            "Consentimento"
          ],
          "formula": "",
          "aplicacoes": [
            "Mapeamento de dados de colaboradores",
            "Controle de acesso a sistemas industriais",
            "Política de privacidade para clientes e fornecedores"
          ]
        },
        {
          "titulo": "Convenções coletivas",
          "definicao": "Acordos normativos firmados entre sindicatos de trabalhadores e empregadores que estabelecem condições de trabalho, remuneração, jornada, benefícios e direitos específicos para uma categoria profissional em determinada base territorial.",
          "topicos": [
            "Acordo coletivo",
            "Dissídio",
            "Sindicato",
            "CCT"
          ],
          "formula": "",
          "aplicacoes": [
            "Cálculo de salários e benefícios",
            "Escala de trabalho e horas extras",
            "Participação nos lucros (PLR)"
          ]
        },
        {
          "titulo": "Acordo sindical",
          "definicao": "Instrumento de negociação coletiva entre empresa e sindicato representativo dos trabalhadores que estabelece condições específicas de trabalho aplicáveis àquela empresa. Tem força de lei no âmbito das relações laborais pactuadas.",
          "topicos": [
            "Negociação coletiva",
            "Acordo coletivo de trabalho",
            "CCT"
          ],
          "formula": "",
          "aplicacoes": [
            "Implementação de banco de horas",
            "Jornada diferenciada de trabalho",
            "Programas de participação nos resultados"
          ]
        },
        {
          "titulo": "Normas regulamentadoras rurais (NRs)",
          "definicao": "Conjunto de Normas Regulamentadoras específicas para o trabalho no campo, incluindo NR-31 (agricultura, pecuária e silvicultura), que estabelece requisitos de segurança e saúde para trabalhadores rurais.",
          "topicos": [
            "NR-31",
            "Trabalho rural",
            "Segurança no campo"
          ],
          "formula": "",
          "aplicacoes": [
            "Segurança na operação de máquinas agrícolas",
            "Uso de agrotóxicos",
            "Alojamentos e instalações rurais"
          ]
        },
        {
          "titulo": "Regulamento técnico de produto",
          "definicao": "Documento de caráter obrigatório emitido por órgão regulamentador que estabelece características técnicas, requisitos de segurança, desempenho, rotulagem e procedimentos de avaliação da conformidade para produtos específicos.",
          "topicos": [
            "RTQ",
            "INMETRO",
            "ANVISA",
            "Especificação técnica"
          ],
          "formula": "",
          "aplicacoes": [
            "Aprovação de produtos regulamentados",
            "Rotulagem e instruções de uso",
            "Ensaios de conformidade"
          ]
        },
        {
          "titulo": "Certificação compulsória",
          "definicao": "Processo obrigatório de avaliação da conformidade de produtos que apresentam riscos à segurança, saúde ou meio ambiente, exigido por regulamentação federal e executado por organismos acreditados pelo INMETRO.",
          "topicos": [
            "INMETRO",
            "Produtos certificados",
            "Selo de conformidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Certificação de brinquedos e materiais elétricos",
            "Equipamentos de proteção individual (EPIs)",
            "Componentes automotivos de segurança"
          ]
        },
        {
          "titulo": "Selo de conformidade",
          "definicao": "Marca de certificação aposta em produtos, processos ou serviços que atestam sua conformidade com normas técnicas ou regulamentos específicos. Pode ser compulsório (INMETRO) ou voluntário (selos setoriais).",
          "topicos": [
            "Marcação",
            "Conformidade",
            "ABNT",
            "Certificação"
          ],
          "formula": "",
          "aplicacoes": [
            "Identificação de produtos certificados",
            "Diferenciação competitiva no mercado",
            "Atendimento a requisitos de licitação"
          ]
        }
      ]
    },
    {
      "id": "fundamentos",
      "nome": "Fundamentos da Engenharia de Produção",
      "icone": "book",
      "cor": "#1e293b",
      "descricao": "História, evolução e conceitos fundamentais da engenharia de produção.",
      "subtopicos": [
        {
          "titulo": "Evolução histórica da produção",
          "definicao": "Trajetória de transformação dos sistemas produtivos desde o artesanato até a manufatura enxuta e a Indústria 4.0. Cada fase histórica introduziu novas formas de organização do trabalho, tecnologias e paradigmas de gestão.",
          "topicos": [
            "Artesanato",
            "Manufatura",
            "Industrialização",
            "Indústria 4.0"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise comparativa de sistemas produtivos",
            "Compreensão das revoluções industriais",
            "Planejamento estratégico de transformação digital"
          ]
        },
        {
          "titulo": "Revolução Industrial",
          "definicao": "Período histórico iniciado na Inglaterra no século XVIII que marcou a transição da produção artesanal para a produção mecanizada com o uso de máquinas a vapor, ferro e carvão. Dividida em três fases, cada uma com inovações tecnológicas e organizacionais profundas.",
          "topicos": [
            "1ª Revolução Industrial",
            "2ª Revolução Industrial",
            "3ª Revolução Industrial",
            "Indústria 4.0"
          ],
          "formula": "",
          "aplicacoes": [
            "Contextualização histórica da produção",
            "Entendimento da evolução tecnológica",
            "Referencial para inovação industrial"
          ]
        },
        {
          "titulo": "Taylorismo (Administração Científica)",
          "definicao": "Sistema de gestão da produção desenvolvido por Frederick W. Taylor no final do século XIX, baseado na racionalização do trabalho, divisão entre planejamento e execução, estudo de tempos e movimentos e incentivos salariais por produtividade.",
          "topicos": [
            "Frederick Taylor",
            "Estudo de tempos e movimentos",
            "Racionalização do trabalho"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenho de cargos e tarefas",
            "Padronização de métodos de trabalho",
            "Sistemas de remuneração por desempenho"
          ]
        },
        {
          "titulo": "Fordismo",
          "definicao": "Modelo de produção em massa criado por Henry Ford que combinou a linha de montagem contínua com a padronização completa do produto (Ford Modelo T) e altos salários para os operários. Caracterizou a produção industrial do século XX.",
          "topicos": [
            "Henry Ford",
            "Linha de montagem",
            "Produção em massa",
            "Ford Modelo T"
          ],
          "formula": "",
          "aplicacoes": [
            "Produção em larga escala de automóveis",
            "Eletrodomésticos e bens de consumo",
            "Montagem de produtos complexos"
          ]
        },
        {
          "titulo": "Sistema Toyota de Produção (STP)",
          "definicao": "Sistema de manufatura enxuta desenvolvido pela Toyota no Japão pós-guerra, baseado nos pilares do Just-in-Time (JIT) e Jidoka, com o objetivo de eliminar desperdícios e produzir apenas o necessário, no momento necessário, com a qualidade necessária.",
          "topicos": [
            "Lean Manufacturing",
            "JIT",
            "Jidoka",
            "Kaizen",
            "Taiichi Ohno"
          ],
          "formula": "",
          "aplicacoes": [
            "Redução de estoques e lead times",
            "Melhoria contínua em processos",
            "Manufatura enxuta em diversos setores"
          ]
        },
        {
          "titulo": "Tipos de sistemas produtivos",
          "definicao": "Classificação dos sistemas de produção de acordo com o fluxo do produto e o volume de produção. A escolha do tipo adequado impacta o layout, a gestão de estoques, o planejamento e o controle da produção.",
          "topicos": [
            "Sistemas de produção",
            "Fluxo produtivo",
            "Classificação"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de sistemas de manufatura",
            "Estratégia de produção",
            "Planejamento de capacidade"
          ]
        },
        {
          "titulo": "Produção contínua",
          "definicao": "Sistema produtivo caracterizado pelo fluxo ininterrupto de materiais ao longo do processo, típico de indústrias de processo químico, petroquímico, siderúrgico e de papel e celulose. Opera 24 horas com alta intensidade de capital.",
          "topicos": [
            "Processo contínuo",
            "Indústria de processo",
            "Fluxo ininterrupto"
          ],
          "formula": "",
          "aplicacoes": [
            "Refinarias de petróleo",
            "Plantas químicas",
            "Siderurgia integrada"
          ]
        },
        {
          "titulo": "Produção em massa",
          "definicao": "Sistema de alto volume e baixa variedade que utiliza linhas de montagem e peças padronizadas para produzir grandes quantidades de produtos idênticos a baixo custo unitário. Foi o paradigma dominante da indústria do século XX.",
          "topicos": [
            "Linha de montagem",
            "Alto volume",
            "Padronização",
            "Fordismo"
          ],
          "formula": "",
          "aplicacoes": [
            "Montagem de veículos",
            "Eletrônicos de consumo",
            "Eletrodomésticos"
          ]
        },
        {
          "titulo": "Produção por projeto",
          "definicao": "Sistema produtivo orientado à fabricação de um produto único e customizado, com início e fim definidos, equipe dedicada e orçamento específico. Cada projeto é tratado como um empreendimento singular, típico de construção naval, aeronáutica e grandes obras.",
          "topicos": [
            "Gestão de projetos",
            "Produto único",
            "Customização",
            "PMBOK"
          ],
          "formula": "",
          "aplicacoes": [
            "Construção de navios e plataformas",
            "Grandes empreendimentos de infraestrutura",
            "Projetos de engenharia sob encomenda"
          ]
        },
        {
          "titulo": "Produção em lotes",
          "definicao": "Sistema produtivo intermediário entre a produção contínua e a sob encomenda, no qual diferentes produtos são fabricados em quantidades definidas (lotes) com setup entre as trocas. Comum em indústrias de médio volume e média variedade.",
          "topicos": [
            "Lote econômico",
            "Setup",
            "Médio volume",
            "Variedade média"
          ],
          "formula": "Lote Econômico = √(2 × Demanda × Custo de setup / Custo de armazenagem)",
          "aplicacoes": [
            "Indústria de alimentos e bebidas",
            "Fabricação de móveis",
            "Confecção têxtil"
          ]
        },
        {
          "titulo": "Customização em massa",
          "definicao": "Estratégia produtiva que combina a eficiência da produção em massa com a flexibilidade para atender necessidades individuais dos clientes. Utiliza plataformas modulares, postergação (postponement) e configuração sob pedido.",
          "topicos": [
            "Modularidade",
            "Postponement",
            "Configurador de produto"
          ],
          "formula": "",
          "aplicacoes": [
            "Montagem de computadores sob pedido (Dell)",
            "Veículos com opcionais configuráveis",
            "Móveis planejados modulares"
          ]
        },
        {
          "titulo": "Arranjo físico (Layout Industrial)",
          "definicao": "Disposição espacial dos recursos produtivos (máquinas, equipamentos, estações de trabalho, estoques) dentro da planta fabril. O layout adequado minimiza movimentações, reduz lead times e melhora o fluxo de materiais e pessoas.",
          "topicos": [
            "Layout",
            "Fluxo de materiais",
            "Movimentação interna",
            "Planejamento fabril"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de novas fábricas",
            "Rearranjo de linhas existentes",
            "Redução de movimentação e transporte"
          ]
        },
        {
          "titulo": "Layout por produto",
          "definicao": "Arranjo físico no qual máquinas e estações de trabalho são dispostas sequencialmente conforme a rota de fabricação de um produto específico. Adequado para produção em massa e fluxo contínuo com alto volume e baixa variedade.",
          "topicos": [
            "Linha de montagem",
            "Fluxo contínuo",
            "Alto volume"
          ],
          "formula": "",
          "aplicacoes": [
            "Linhas de montagem automotiva",
            "Envasamento de bebidas",
            "Processos químicos contínuos"
          ]
        },
        {
          "titulo": "Layout por processo",
          "definicao": "Arranjo físico no qual máquinas e equipamentos similares são agrupados em centros de trabalho funcionais (tornos, fresas, solda, pintura). Adequado para produção em lotes com média variedade e volume moderado.",
          "topicos": [
            "Layout funcional",
            "Centros de trabalho",
            "Manufatura por lotes"
          ],
          "formula": "",
          "aplicacoes": [
            "Usinagem geral",
            "Oficinas mecânicas",
            "Indústria de bens de capital"
          ]
        },
        {
          "titulo": "Layout celular",
          "definicao": "Arranjo físico que organiza máquinas e operadores em células de manufatura dedicadas a famílias de peças com roteiros similares (Tecnologia de Grupo). Combina a flexibilidade do layout por processo com a eficiência do layout por produto.",
          "topicos": [
            "Célula de manufatura",
            "Tecnologia de Grupo",
            "Manufatura enxuta"
          ],
          "formula": "",
          "aplicacoes": [
            "Manufatura de componentes automotivos",
            "Indústria metalmecânica",
            "Produção de peças para aeronaves"
          ]
        },
        {
          "titulo": "Layout posicional fixo",
          "definicao": "Arranjo físico no qual o produto permanece em uma posição fixa e os recursos produtivos (materiais, ferramentas, equipes) se deslocam até ele. Utilizado para produtos muito grandes, pesados ou complexos que não podem ser movimentados.",
          "topicos": [
            "Projeto fixo",
            "Grandes estruturas",
            "Construção pesada"
          ],
          "formula": "",
          "aplicacoes": [
            "Construção naval",
            "Montagem de aeronaves",
            "Obras de infraestrutura (pontes, barragens)"
          ]
        },
        {
          "titulo": "Layout híbrido",
          "definicao": "Combinação de dois ou mais tipos de arranjo físico (produto, processo, celular, posicional fixo) em uma mesma planta industrial para atender diferentes etapas do processo ou diferentes famílias de produtos com características distintas.",
          "topicos": [
            "Layout combinado",
            "Planta flexível",
            "Mix de produção"
          ],
          "formula": "",
          "aplicacoes": [
            "Fábricas com setores de fabricação e montagem",
            "Plantas multiproduto",
            "Indústria com etapas produtivas heterogêneas"
          ]
        },
        {
          "titulo": "Linha de montagem",
          "definicao": "Sistema de produção no qual o produto em fabricação se desloca ao longo de uma sequência de estações de trabalho, cada uma realizando uma operação específica até a conclusão final. Pode ser manual, automatizada ou semiautomatizada.",
          "topicos": [
            "Balanceamento de linha",
            "Takt time",
            "Estação de trabalho"
          ],
          "formula": "Número mínimo de estações = Σ Tempos das tarefas / Takt time",
          "aplicacoes": [
            "Montagem de veículos e motores",
            "Montagem de eletrônicos",
            "Linhas de embalagem de alimentos"
          ]
        },
        {
          "titulo": "Célula de manufatura",
          "definicao": "Agrupamento dedicado de máquinas e operadores dispostos em U, L ou linha reta para processar uma família de peças com roteiros semelhantes. Reduz movimentação, WIP e lead time, sendo um elemento central da manufatura enxuta.",
          "topicos": [
            "Tecnologia de Grupo",
            "Manufatura enxuta",
            "Layout em U"
          ],
          "formula": "",
          "aplicacoes": [
            "Usinagem de famílias de componentes",
            "Montagem de subconjuntos",
            "Manufatura de precisão"
          ]
        },
        {
          "titulo": "Lean Startup na produção",
          "definicao": "Adaptação dos princípios do Lean Manufacturing (MVP, pivô, aprendizado validado, ciclo construir-medir-aprender) para o desenvolvimento de novos produtos e modelos de negócio em ambientes de alta incerteza. Aplica o pensamento enxuto à inovação.",
          "topicos": [
            "MVP",
            "Eric Ries",
            "Startup enxuta",
            "Inovação"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenvolvimento ágil de novos produtos",
            "Validação de mercado antes da produção em escala",
            "Redução de desperdícios em P&D"
          ]
        }
      ]
    },
    {
      "id": "metalurgica",
      "nome": "Indústria Metalúrgica",
      "icone": "hammer",
      "cor": "#78716c",
      "descricao": "Processos metalúrgicos, siderurgia, fundição e tratamentos térmicos.",
      "subtopicos": [
        {
          "titulo": "Metalurgia física",
          "definicao": "Ramo da metalurgia que estuda a estrutura cristalina dos metais, defeitos cristalinos, mecanismos de deformação, difusão, transformações de fase e a relação entre microestrutura e propriedades mecânicas. Fundamenta todos os processos de transformação e tratamento térmico.",
          "topicos": [
            "Estrutura cristalina",
            "Defeitos",
            "Difusão",
            "Microestrutura"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenvolvimento de novas ligas",
            "Controle de qualidade metalúrgico",
            "Seleção de materiais para engenharia"
          ]
        },
        {
          "titulo": "Diagrama Ferro-Carbono",
          "definicao": "Diagrama de equilíbrio de fases do sistema ferro-carbono que relaciona temperatura e composição, mostrando as fases estáveis (ferrita, austenita, cementita) e as transformações eutética e eutetóide. É a base para tratamentos térmicos de aços e ferros fundidos.",
          "topicos": [
            "Ferrita α",
            "Austenita γ",
            "Cementita Fe₃C",
            "Perlita",
            "Ponto eutetóide 727°C"
          ],
          "formula": "Aços: teor de C < 2,11% | Ferros fundidos: 2,11% < C < 6,67%",
          "aplicacoes": [
            "Classificação de aços e ferros fundidos",
            "Definição de temperaturas de tratamento térmico",
            "Previsão de microestruturas e propriedades"
          ]
        },
        {
          "titulo": "Classificação dos aços",
          "definicao": "Sistema de categorização dos aços conforme sua composição química, aplicação e propriedades mecânicas. Inclui aços-carbono (baixo, médio, alto teor), aços-liga (baixa, média, alta liga), aços ferramenta, aços inoxidáveis e aços especiais.",
          "topicos": [
            "SAE/AISI",
            "ABNT",
            "Aços-carbono",
            "Aços-liga",
            "Aços inoxidáveis"
          ],
          "formula": "",
          "aplicacoes": [
            "Especificação de materiais em projetos",
            "Seleção de aços para componentes mecânicos",
            "Compras técnicas e recebimento de materiais"
          ]
        },
        {
          "titulo": "Ferros fundidos",
          "definicao": "Ligas ferro-carbono com teor de carbono entre 2,11% e 6,67%, caracterizadas pela solidificação com reação eutética. Classificam-se em cinzento, nodular, branco, maleável e ADI, cada um com microestrutura e propriedades distintas.",
          "topicos": [
            "Ferro fundido cinzento",
            "Ferro fundido nodular",
            "Ferro fundido branco",
            "ADI"
          ],
          "formula": "",
          "aplicacoes": [
            "Blocos de motor automotivo",
            "Tubulações e conexões",
            "Componentes de máquinas e matrizes"
          ]
        },
        {
          "titulo": "Conformação mecânica",
          "definicao": "Conjunto de processos de fabricação que alteram a forma do metal por deformação plástica, sem remoção de material. Inclui laminação, forjamento, extrusão, trefilação e estampagem. Modifica a microestrutura e pode melhorar propriedades mecânicas.",
          "topicos": [
            "Deformação plástica",
            "Encruamento",
            "Recristalização"
          ],
          "formula": "",
          "aplicacoes": [
            "Produção de chapas e perfis laminados",
            "Forjamento de componentes estruturais",
            "Fabricação de arames e tubos"
          ]
        },
        {
          "titulo": "Usinagem",
          "definicao": "Processo de fabricação por remoção de material (cavaco) utilizando ferramentas de corte para obter peças com geometria, dimensões e acabamento especificados. Inclui torneamento, fresamento, furação, retificação e eletroerosão.",
          "topicos": [
            "Torneamento",
            "Fresamento",
            "Furação",
            "Retificação",
            "Cavaco"
          ],
          "formula": "Velocidade de corte Vc = π × D × n / 1000 (m/min)",
          "aplicacoes": [
            "Fabricação de moldes e matrizes",
            "Usinagem de componentes automotivos",
            "Peças de precisão para aeronáutica"
          ]
        },
        {
          "titulo": "Soldagem e metalurgia da soldagem",
          "definicao": "Processo de união de materiais por fusão ou pressão, com ou sem adição de metal de solda. A metalurgia da soldagem estuda as transformações microestruturais na zona fundida e na zona termicamente afetada (ZTA).",
          "topicos": [
            "ZTA",
            "Arco elétrico",
            "MIG/MAG",
            "TIG",
            "Eletrodo revestido"
          ],
          "formula": "",
          "aplicacoes": [
            "Fabricação de estruturas metálicas",
            "Caldeiraria e vasos de pressão",
            "Reparo e recuperação de componentes"
          ]
        },
        {
          "titulo": "Qualificação de soldadores",
          "definicao": "Processo de certificação de profissionais de soldagem conforme normas técnicas (como ASME IX, AWS D1.1, NR-13), envolvendo testes práticos e teóricos que comprovam a habilidade do soldador em executir juntas soldadas com qualidade e segurança.",
          "topicos": [
            "Certificação",
            "NR-13",
            "ASME IX",
            "AWS",
            "Ensaio de qualificação"
          ],
          "formula": "",
          "aplicacoes": [
            "Indústria de petróleo e gás",
            "Construção naval",
            "Caldeiraria pesada e vasos de pressão"
          ]
        },
        {
          "titulo": "Metalurgia do pó",
          "definicao": "Processo de fabricação de componentes metálicos a partir de pós metálicos prensados e sinterizados. Permite obter peças com geometrias complexas, porosidade controlada e propriedades customizadas sem usinagem posterior.",
          "topicos": [
            "Sinterização",
            "Prensagem",
            "Pó metálico",
            "Metalurgia do pó"
          ],
          "formula": "",
          "aplicacoes": [
            "Engrenagens e componentes automotivos",
            "Filtros metálicos porosos",
            "Ferramentas de metal duro (carbeto de tungstênio)"
          ]
        },
        {
          "titulo": "Corrosão e proteção anticorrosiva",
          "definicao": "Estudo dos mecanismos de deterioração dos metais por ação química ou eletroquímica do meio ambiente. A proteção anticorrosiva inclui revestimentos, inibidores, proteção catódica e seleção adequada de materiais.",
          "topicos": [
            "Corrosão eletroquímica",
            "Oxidação",
            "Pintura industrial",
            "Galvanização"
          ],
          "formula": "",
          "aplicacoes": [
            "Proteção de dutos e tubulações",
            "Revestimentos anticorrosivos em estruturas",
            "Seleção de materiais para ambientes agressivos"
          ]
        },
        {
          "titulo": "Ensaios mecânicos",
          "definicao": "Conjunto de testes padronizados para determinar propriedades mecânicas dos materiais, como resistência, dureza, tenacidade, ductilidade e resistência à fadiga. Incluem ensaio de tração, compressão, flexão, impacto e fadiga.",
          "topicos": [
            "Tração",
            "Dureza",
            "Impacto",
            "Fadiga",
            "Fluência"
          ],
          "formula": "σ = F/A (Tensão de tração)",
          "aplicacoes": [
            "Controle de qualidade de materiais",
            "Homologação de fornecedores",
            "Desenvolvimento de novos materiais"
          ]
        },
        {
          "titulo": "Ensaios não destrutivos (END)",
          "definicao": "Técnicas de inspeção que avaliam a integridade de materiais e componentes sem causar danos. Incluem ultrassom, radiografia, líquidos penetrantes, partículas magnéticas, correntes parasitas e inspeção visual.",
          "topicos": [
            "Ultrassom",
            "Radiografia industrial",
            "Líquidos penetrantes",
            "Partículas magnéticas"
          ],
          "formula": "",
          "aplicacoes": [
            "Inspeção de soldas",
            "Controle de qualidade de tubulações e vasos",
            "Manutenção preditiva de equipamentos"
          ]
        },
        {
          "titulo": "Metalografia",
          "definicao": "Técnica de análise microestrutural de metais e ligas por meio de microscopia óptica ou eletrônica. Envolve preparação metalográfica (corte, embutimento, lixamento, polimento e ataque químico) para revelar a microestrutura do material.",
          "topicos": [
            "Microscopia",
            "Ataque químico",
            "Microestrutura",
            "Análise de falhas"
          ],
          "formula": "",
          "aplicacoes": [
            "Verificação de tratamentos térmicos",
            "Análise de falhas de componentes",
            "Controle de qualidade de matérias-primas"
          ]
        },
        {
          "titulo": "Siderurgia",
          "definicao": "Ramo da metalurgia dedicado à produção de ferro-gusa e aço a partir do minério de ferro. Engloba as etapas de beneficiamento do minério, redução em alto-forno, refino em aciaria (conversor LD, forno elétrico) e lingotamento contínuo.",
          "topicos": [
            "Alto-forno",
            "Aciaria",
            "Lingotamento contínuo",
            "Gusa",
            "Laminação"
          ],
          "formula": "",
          "aplicacoes": [
            "Produção de aços planos e longos",
            "Fabricação de tarugos, blocos e placas",
            "Indústria automotiva, construção civil e naval"
          ]
        },
        {
          "titulo": "Ligas não ferrosas",
          "definicao": "Ligas metálicas cujo elemento base não é o ferro. As principais famílias incluem ligas de alumínio, cobre, titânio, níquel, magnésio e zinco. São selecionadas por propriedades específicas como baixa densidade, resistência à corrosão ou condutividade.",
          "topicos": [
            "Alumínio",
            "Cobre",
            "Titânio",
            "Níquel",
            "Superligas"
          ],
          "formula": "",
          "aplicacoes": [
            "Estruturas aeronáuticas (Al e Ti)",
            "Cabos elétricos e tubulações (Cu)",
            "Turbinas a gás e motores (ligas de Ni)"
          ]
        },
        {
          "titulo": "Vasos de pressão e caldeiras",
          "definicao": "Equipamentos projetados para conter fluidos a pressões internas superiores à atmosférica. São regulamentados pela NR-13 e fabricados conforme códigos como ASME VIII, com requisitos rigorosos de projeto, materiais, soldagem e inspeção.",
          "topicos": [
            "NR-13",
            "ASME VIII",
            "Caldeiraria",
            "Inspeção de vasos"
          ],
          "formula": "Espessura da parede: t = P × R / (S × E - 0,6 × P)",
          "aplicacoes": [
            "Indústria química e petroquímica",
            "Geração de vapor e energia",
            "Refino de petróleo"
          ]
        },
        {
          "titulo": "Fundição e processos de fundição",
          "definicao": "Processo de fabricação no qual metal líquido é vazado em um molde com a cavidade da geometria desejada e solidifica. As principais técnicas incluem fundição em areia, em cera perdida, sob pressão (die casting) e em casca (shell molding).",
          "topicos": [
            "Moldagem",
            "Vazamento",
            "Solidificação",
            "Macharia"
          ],
          "formula": "",
          "aplicacoes": [
            "Blocos de motores e cabeçotes",
            "Componentes de máquinas",
            "Peças artísticas e ornamentais"
          ]
        },
        {
          "titulo": "Moldagem e machos",
          "definicao": "Processo de confecção de moldes (cavidade onde o metal líquido é vazado) e machos (núcleos que formam cavidades internas na peça fundida). A moldagem pode ser manual, mecanizada ou automatizada, em areia verde, areia química ou casca.",
          "topicos": [
            "Molde de areia",
            "Macharia",
            "Areia de fundição",
            "Modelo"
          ],
          "formula": "",
          "aplicacoes": [
            "Fundição de ferro e aço",
            "Produção de peças com geometrias complexas",
            "Fundição de grande e médio porte"
          ]
        },
        {
          "titulo": "Ferro fundido cinzento e nodular",
          "definicao": "Ferro fundido cinzento: possui grafita em lamelas, conferindo boa usinabilidade, amortecimento vibratório e baixo custo. Ferro fundido nodular: grafita em nódulos esferoidais, resultando em maior resistência, ductilidade e tenacidade que o cinzento.",
          "topicos": [
            "Grafita lamelar",
            "Grafita esferoidal",
            "Usinabilidade",
            "Resistência mecânica"
          ],
          "formula": "",
          "aplicacoes": [
            "Blocos de motor, discos de freio (cinzento)",
            "Virabrequins, engrenagens (nodular)",
            "Tubos e conexões (nodular)"
          ]
        },
        {
          "titulo": "Nodulização e inoculação",
          "definicao": "Tratamentos no metal líquido anteriores ao vazamento na fabricação de ferros fundidos. A nodulização adiciona magnésio ou cério para formar grafita esferoidal, enquanto a inoculação adiciona silício para controlar a nucleação e o tamanho da grafita.",
          "topicos": [
            "Magnésio",
            "Ferro-silício",
            "Grafita esferoidal",
            "Nucleação"
          ],
          "formula": "",
          "aplicacoes": [
            "Produção de ferro nodular de alta resistência",
            "Controle microestrutural em fundição",
            "Componentes automotivos fundidos"
          ]
        },
        {
          "titulo": "ADI — Austempered Ductile Iron",
          "definicao": "Ferro fundido nodular submetido a tratamento térmico de austêmpera (austenitização + resfriamento rápido + isotérmico em banho de sal ou óleo a ~300-400°C). Resulta em microestrutura de ausferrita, combinando alta resistência, tenacidade e resistência ao desgaste.",
          "topicos": [
            "Austêmpera",
            "Ausferrita",
            "Alta resistência",
            "Ferro nodular"
          ],
          "formula": "",
          "aplicacoes": [
            "Engrenagens de alta performance",
            "Componentes de suspensão automotiva",
            "Peças de desgaste na mineração"
          ]
        },
        {
          "titulo": "Tratamentos térmicos",
          "definicao": "Processos controlados de aquecimento e resfriamento de metais no estado sólido para modificar suas propriedades mecânicas, físicas ou químicas. Incluem recozimento, normalização, têmpera, revenimento, austêmpera e martêmpera.",
          "topicos": [
            "Têmpera",
            "Recozimento",
            "Normalização",
            "Revenimento"
          ],
          "formula": "",
          "aplicacoes": [
            "Aumento de dureza de ferramentas",
            "Alívio de tensões em soldas",
            "Melhoria de usinabilidade"
          ]
        },
        {
          "titulo": "Diagramas TTT e CCT",
          "definicao": "Diagramas Tempo-Temperatura-Transformação (TTT — resfriamento isotérmico) e Resfriamento Contínuo (CCT) que mostram as curvas de transformação da austenita em perlita, bainita e martensita em função da taxa de resfriamento. Essenciais para projetar tratamentos térmicos.",
          "topicos": [
            "Perlita",
            "Bainita",
            "Martensita",
            "Resfriamento contínuo"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de têmpera e revenimento",
            "Seleção de meios de resfriamento",
            "Controle de microestrutura final"
          ]
        },
        {
          "titulo": "Recozimento, normalização, têmpera",
          "definicao": "Recozimento: aquecimento seguido de resfriamento lento para alívio de tensões e redução de dureza. Normalização: resfriamento ao ar para refinar grão e homogeneizar estrutura. Têmpera: resfriamento brusco para formar martensita e maximizar dureza.",
          "topicos": [
            "Alívio de tensões",
            "Refino de grão",
            "Martensita",
            "Meio de resfriamento"
          ],
          "formula": "",
          "aplicacoes": [
            "Recozimento de aços laminados",
            "Normalização de peças fundidas",
            "Têmpera de ferramentas e matrizes"
          ]
        },
        {
          "titulo": "Revenimento e austêmpera",
          "definicao": "Revenimento: reaquecimento da martensita a temperaturas abaixo de A1 para reduzir fragilidade e ajustar dureza/resistência. Austêmpera: tratamento isotérmico para formar bainita, aplicado em aços e ferros nodulares (ADI).",
          "topicos": [
            "Martensita revenida",
            "Bainita",
            "Fragilidade",
            "Tenacidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Revenimento de aços temperados",
            "Produção de ADI",
            "Peças que exigem tenacidade e resistência ao desgaste"
          ]
        },
        {
          "titulo": "Cementação e nitretação",
          "definicao": "Tratamentos termoquímicos que enriquecem a superfície do aço com carbono (cementação) ou nitrogênio (nitretação) para formar uma camada superficial dura e resistente ao desgaste, mantendo um núcleo tenaz. A cementação é seguida de têmpera; a nitretação não requer têmpera.",
          "topicos": [
            "Cementação",
            "Nitretação",
            "Camada superficial",
            "Têmpera superficial"
          ],
          "formula": "",
          "aplicacoes": [
            "Engrenagens e eixos automotivos",
            "Moldes e matrizes",
            "Componentes sujeitos a desgaste e fadiga"
          ]
        },
        {
          "titulo": "Ensaio Jominy (templabilidade)",
          "definicao": "Ensaio padronizado que mede a temperabilidade de um aço — sua capacidade de endurecer em profundidade. Uma amostra padronizada é austenitizada e resfriada por jato d'água em uma extremidade; a dureza é medida ao longo do comprimento para gerar a curva Jominy.",
          "topicos": [
            "Temperabilidade",
            "Curva Jominy",
            "Profundidade de endurecimento"
          ],
          "formula": "",
          "aplicacoes": [
            "Seleção de aços para tratamento térmico",
            "Previsão de dureza em seções espessas",
            "Controle de qualidade de aços-liga"
          ]
        },
        {
          "titulo": "Tensões residuais",
          "definicao": "Tensões que permanecem no material após a remoção das cargas externas, decorrentes de tratamentos térmicos, conformação mecânica, soldagem ou usinagem. Podem ser benéficas (compressão superficial) ou prejudiciais (trincas e distorções).",
          "topicos": [
            "Tensão de compressão",
            "Tensão de tração",
            "Alívio de tensões",
            "Distorção"
          ],
          "formula": "",
          "aplicacoes": [
            "Controle de distorção após têmpera",
            "Análise de falhas por fadiga",
            "Shot peening para introduzir compressão superficial"
          ]
        },
        {
          "titulo": "Ensaios de dureza",
          "definicao": "Métodos padronizados para medir a resistência do material à deformação plástica superficial. Principais escalas: Brinell (esfera de aço), Rockwell (penetrador cônico ou esférico) e Vickers (pirâmide de diamante), cada uma adequada a diferentes faixas e materiais.",
          "topicos": [
            "Dureza Brinell HB",
            "Dureza Rockwell HRC",
            "Dureza Vickers HV"
          ],
          "formula": "",
          "aplicacoes": [
            "Controle de qualidade de tratamentos térmicos",
            "Classificação de materiais",
            "Ensaios rápidos de resistência mecânica"
          ]
        },
        {
          "titulo": "Forjamento e estampagem",
          "definicao": "Forjamento: conformação por martelamento ou prensagem do metal aquecido para obter a forma desejada com grão orientado. Estampagem: conformação de chapas metálicas por prensagem em matrizes, incluindo corte, dobra, embutimento e repuxo.",
          "topicos": [
            "Forjamento a quente",
            "Forjamento a frio",
            "Matriz de estamparia",
            "Embutimento"
          ],
          "formula": "",
          "aplicacoes": [
            "Virabrequins e bielas forjadas",
            "Carrocerias automotivas estampadas",
            "Componentes estruturais de aeronaves"
          ]
        },
        {
          "titulo": "Extrusão e trefilação",
          "definicao": "Extrusão: processo de conformação no qual o metal é forçado através de uma matriz com a seção transversal desejada, produzindo perfis e barras. Trefilação: redução de seção por tração através de fieiras, usada para produzir arames, fios e tubos de precisão.",
          "topicos": [
            "Extrusão direta",
            "Extrusão indireta",
            "Fieira",
            "Redução de seção"
          ],
          "formula": "Redução % = (A0 - Af) / A0 × 100",
          "aplicacoes": [
            "Perfis de alumínio para construção",
            "Arames de aço para cabos e molas",
            "Tubos sem costura"
          ]
        },
        {
          "titulo": "Laminação",
          "definicao": "Processo de conformação no qual o metal passa entre cilindros rotativos para reduzir a espessura ou alterar a seção transversal. Pode ser a quente (chapas grossas, perfis estruturais) ou a frio (chapas finas, folhas metálicas com acabamento superficial).",
          "topicos": [
            "Laminação a quente",
            "Laminação a frio",
            "Cilindro laminador",
            "Perfil estrutural"
          ],
          "formula": "",
          "aplicacoes": [
            "Produção de chapas grossas (naval, construção)",
            "Bobinas de aço para indústria automotiva",
            "Vigas, trilhos e perfis estruturais"
          ]
        },
        {
          "titulo": "Trefilação de arames",
          "definicao": "Processo específico de trefilação para redução do diâmetro de arames metálicos por passagem sucessiva através de fieiras de carbeto de tungstênio ou diamante. Produz arames com alta precisão dimensional e propriedades mecânicas controladas.",
          "topicos": [
            "Fieira de trefilação",
            "Arame de aço",
            "Encruamento",
            "Lubrificação"
          ],
          "formula": "",
          "aplicacoes": [
            "Cabos de aço para elevação",
            "Molas helicoidais e molas planas",
            "Eletrodos para soldagem e telas"
          ]
        },
        {
          "titulo": "Metalurgia extrativa",
          "definicao": "Ramo da metalurgia que estuda e desenvolve processos para extrair metais de seus minérios, incluindo etapas de cominuição, concentração, fundição, refino e hidrometalurgia. Visa obter metais com pureza comercial a partir de recursos minerais.",
          "topicos": [
            "Pirometalurgia",
            "Hidrometalurgia",
            "Eletrometalurgia",
            "Beneficiamento de minérios"
          ],
          "formula": "",
          "aplicacoes": [
            "Extração de ferro, cobre, alumínio do minério",
            "Refino de metais preciosos",
            "Reciclagem e refino de sucata metálica"
          ]
        }
      ]
    },
    {
      "id": "soft-skills",
      "nome": "Competências Comportamentais",
      "icone": "heart-handshake",
      "cor": "#db2777",
      "descricao": "Habilidades interpessoais para liderança e gestão industrial.",
      "subtopicos": [
        {
          "titulo": "Liderança transformacional",
          "definicao": "Estilo de liderança que inspira e motiva os liderados a superar interesses individuais em prol de objetivos coletivos, estimulando a inovação e a mudança organizacional por meio de visão compartilhada, estímulo intelectual e consideração individualizada.",
          "topicos": [
            "Inspiração",
            "Visão estratégica",
            "Motivação",
            "Mudança organizacional"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de equipes industriais",
            "Implementação de programas de melhoria contínua",
            "Transformação cultural lean"
          ]
        },
        {
          "titulo": "Comunicação eficaz",
          "definicao": "Capacidade de transmitir informações, ideias e instruções de forma clara, objetiva e assertiva, adaptando-se ao público e ao contexto. No ambiente industrial, é essencial para alinhamento de equipes, liderança e prevenção de falhas operacionais.",
          "topicos": [
            "Comunicação verbal",
            "Comunicação escrita",
            "Feedback",
            "Assertividade"
          ],
          "formula": "",
          "aplicacoes": [
            "Reuniões de kick-off e daily huddle",
            "Instruções de trabalho (IT) claras",
            "Comunicação de indicadores e resultados"
          ]
        },
        {
          "titulo": "Negociação empresarial",
          "definicao": "Processo de diálogo entre partes com interesses convergentes e divergentes para alcançar um acordo mutuamente benéfico. Engloba técnicas de persuasão, concessões estratégicas, construção de rapport e gestão de impasses.",
          "topicos": [
            "Persuasão",
            "Concessão",
            "Acordo ganha-ganha",
            "Impasses"
          ],
          "formula": "",
          "aplicacoes": [
            "Negociação com fornecedores e clientes",
            "Acordos sindicais e convenções coletivas",
            "Contratos de prestação de serviços"
          ]
        },
        {
          "titulo": "Gestão do tempo",
          "definicao": "Habilidade de planejar e organizar o uso do tempo de forma produtiva, priorizando tarefas conforme urgência e importância (Matriz de Eisenhower), evitando procrastinação e otimizando a alocação de esforço em atividades de alto impacto.",
          "topicos": [
            "Priorização",
            "Matriz de Eisenhower",
            "Planejamento",
            "Produtividade pessoal"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de múltiplos projetos simultâneos",
            "Rotina de gestão industrial",
            "Cumprimento de prazos de entrega"
          ]
        },
        {
          "titulo": "Pensamento analítico",
          "definicao": "Capacidade de decompor problemas complexos em partes menores, identificar padrões, relações de causa e efeito e tomar decisões baseadas em dados e evidências. Fundamental para a resolução estruturada de problemas na engenharia.",
          "topicos": [
            "Raciocínio lógico",
            "Análise de dados",
            "Solução de problemas",
            "Pensamento crítico"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise de causa raiz (RCA)",
            "Diagnóstico de falhas de produção",
            "Otimização de processos"
          ]
        },
        {
          "titulo": "Resolução de problemas complexos",
          "definicao": "Competência para lidar com problemas mal estruturados e multifatoriais, característicos do ambiente industrial, por meio de metodologias estruturadas como PDCA, DMAIC, A3 e análise de causa raiz, combinando análise técnica e pensamento crítico.",
          "topicos": [
            "PDCA",
            "DMAIC",
            "A3",
            "Causa raiz"
          ],
          "formula": "",
          "aplicacoes": [
            "Redução de refugo em linhas de produção",
            "Melhoria de indicadores de qualidade",
            "Projetos Seis Sigma"
          ]
        },
        {
          "titulo": "Tomada de decisão sob incerteza",
          "definicao": "Capacidade de decidir com informações incompletas ou ambíguas, avaliando riscos, probabilidades e cenários alternativos. Utiliza ferramentas como árvores de decisão, análise de sensibilidade e simulação de Monte Carlo.",
          "topicos": [
            "Risco",
            "Análise de cenários",
            "Probabilidade",
            "Incerteza"
          ],
          "formula": "",
          "aplicacoes": [
            "Decisões de investimento em capacidade",
            "Lançamento de novos produtos",
            "Gestão de supply chain em cenários voláteis"
          ]
        },
        {
          "titulo": "Inteligência emocional",
          "definicao": "Capacidade de reconhecer, compreender e gerenciar as próprias emoções e as dos outros, composta por autoconhecimento, autocontrole, empatia, habilidades sociais e motivação. Essencial para liderança, trabalho em equipe e gestão de conflitos.",
          "topicos": [
            "Autoconhecimento",
            "Empatia",
            "Autocontrole",
            "Habilidades sociais"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de conflitos em equipe",
            "Liderança de turnos e equipes operacionais",
            "Ambientes de alta pressão na produção"
          ]
        },
        {
          "titulo": "Trabalho em equipe multidisciplinar",
          "definicao": "Habilidade de colaborar eficazmente com profissionais de diferentes áreas e formações (engenharia, qualidade, manutenção, RH, TI) em prol de objetivos comuns. Requer comunicação clara, respeito à diversidade técnica e cooperação.",
          "topicos": [
            "Colaboração",
            "Diversidade",
            "Times multifuncionais",
            "Sinergia"
          ],
          "formula": "",
          "aplicacoes": [
            "Projetos de melhoria contínua integrados",
            "Comitês de segurança e qualidade",
            "Desenvolvimento de novos produtos"
          ]
        },
        {
          "titulo": "Visão estratégica",
          "definicao": "Capacidade de enxergar o negócio em sua totalidade, compreendendo cenários de longo prazo, tendências de mercado, movimentos da concorrência e impactos das decisões técnicas na estratégia corporativa. Permite alinhar operações aos objetivos organizacionais.",
          "topicos": [
            "Planejamento estratégico",
            "Visão sistêmica",
            "Longo prazo",
            "Negócio"
          ],
          "formula": "",
          "aplicacoes": [
            "Planejamento mestre da produção",
            "Estratégia de capacidade fabril",
            "Decisões de make or buy"
          ]
        },
        {
          "titulo": "Adaptabilidade e resiliência",
          "definicao": "Capacidade de se ajustar rapidamente a mudanças, imprevistos e adversidades sem perder a eficácia profissional. Na indústria, manifesta-se na flexibilidade para alterar prioridades, aprender novas tecnologias e manter a performance sob pressão.",
          "topicos": [
            "Flexibilidade",
            "Mudança",
            "Pressão",
            "Aprendizado contínuo"
          ],
          "formula": "",
          "aplicacoes": [
            "Absorção de variações de demanda",
            "Implatação de novas tecnologias",
            "Gestão de crises operacionais"
          ]
        },
        {
          "titulo": "Gestão de conflitos",
          "definicao": "Habilidade de identificar, mediar e resolver divergências interpessoais ou interdepartamentais de forma construtiva. Utiliza técnicas de escuta ativa, negociação, comunicação não violenta e busca de soluções que preservem o relacionamento.",
          "topicos": [
            "Mediação",
            "Escuta ativa",
            "Consenso",
            "Clima organizacional"
          ],
          "formula": "",
          "aplicacoes": [
            "Conflitos entre turnos de produção",
            "Divergências entre qualidade e produção",
            "Relações com sindicatos e representantes de trabalhadores"
          ]
        },
        {
          "titulo": "Empatia corporativa",
          "definicao": "Capacidade de se colocar no lugar do outro no ambiente profissional, compreendendo suas necessidades, motivações e limitações. Essa competência fortalece o clima organizacional, a cooperação interdepartamental e a retenção de talentos.",
          "topicos": [
            "Escuta ativa",
            "Compreensão",
            "Clima organizacional",
            "Relações interpessoais"
          ],
          "formula": "",
          "aplicacoes": [
            "Liderança humanizada na produção",
            "Atendimento ao cliente interno e externo",
            "Retenção de operadores e técnicos"
          ]
        },
        {
          "titulo": "Oratória e apresentação",
          "definicao": "Habilidade de falar em público de forma clara, persuasiva e envolvente, utilizando recursos como storytelling, linguagem corporal, slides e exemplos práticos. Fundamental para apresentar resultados, propor projetos e liderar reuniões.",
          "topicos": [
            "Falar em público",
            "Storytelling",
            "Apresentação de resultados",
            "Oratória"
          ],
          "formula": "",
          "aplicacoes": [
            "Apresentação de KPIs à diretoria",
            "Treinamentos e capacitação de equipes",
            "Pitches de projetos de melhoria"
          ]
        },
        {
          "titulo": "Feedback construtivo",
          "definicao": "Técnica de comunicação que oferece retorno sobre o desempenho de forma objetiva, específica e focada em comportamentos observáveis, visando ao desenvolvimento profissional. Deve equilibrar reconhecimento e pontos de melhoria.",
          "topicos": [
            "Feedback",
            "Avaliação de desempenho",
            "Comunicação não violenta",
            "Desenvolvimento"
          ],
          "formula": "",
          "aplicacoes": [
            "Avaliações de desempenho periódicas",
            "Gestão de operadores e líderes de turno",
            "Programas de estágio e trainee"
          ]
        },
        {
          "titulo": "Mentoring e coaching",
          "definicao": "Mentoring: relação de desenvolvimento profissional na qual um profissional experiente orienta um mais jovem, compartilhando conhecimento e experiência. Coaching: processo estruturado de desenvolvimento de competências por meio de perguntas, metas e planos de ação.",
          "topicos": [
            "Mentoria",
            "Coaching",
            "Desenvolvimento de carreira",
            "Aprendizagem"
          ],
          "formula": "",
          "aplicacoes": [
            "Programas de onboarding de engenheiros",
            "Desenvolvimento de líderes operacionais",
            "Sucessão em cargos de gestão industrial"
          ]
        },
        {
          "titulo": "Liderança situacional",
          "definicao": "Modelo de liderança desenvolvido por Hersey e Blanchard segundo o qual o líder deve adaptar seu estilo (determinar, persuadir, compartilhar, delegar) conforme o nível de maturidade e competência dos liderados em cada tarefa ou situação.",
          "topicos": [
            "Estilos de liderança",
            "Maturidade da equipe",
            "Delegação",
            "Flexibilidade gerencial"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de equipes heterogêneas",
            "Direção de operadores novatos vs. experientes",
            "Liderança em projetos de melhoria"
          ]
        },
        {
          "titulo": "Comunicação não violenta (CNV)",
          "definicao": "Método de comunicação desenvolvido por Marshall Rosenberg baseado em observação, sentimento, necessidade e pedido. Visa estabelecer conexão e cooperação, reduzindo conflitos e mal-entendidos no ambiente profissional.",
          "topicos": [
            "CNV",
            "Escuta empática",
            "Resolução pacífica",
            "Diálogo"
          ],
          "formula": "",
          "aplicacoes": [
            "Mediação de conflitos interpessoais",
            "Reuniões de equipe construtivas",
            "Relacionamento com fornecedores e clientes"
          ]
        },
        {
          "titulo": "Storytelling para gestão",
          "definicao": "Técnica de comunicação que utiliza narrativas estruturadas para transmitir mensagens, engajar audiências e inspirar ação. Na gestão industrial, é usada para comunicar visão, compartilhar lições aprendidas e motivar equipes.",
          "topicos": [
            "Narrativa",
            "Engajamento",
            "Comunicação persuasiva",
            "Cultura organizacional"
          ],
          "formula": "",
          "aplicacoes": [
            "Comunicação de resultados e metas",
            "Treinamentos de segurança",
            "Compartilhamento de casos de sucesso"
          ]
        },
        {
          "titulo": "Criatividade e inovação",
          "definicao": "Capacidade de gerar ideias originais e soluções não convencionais para desafios produtivos e organizacionais. No engenheiro de produção, manifesta-se na proposição de novos métodos, arranjos, produtos ou tecnologias que geram valor competitivo.",
          "topicos": [
            "Pensamento divergente",
            "Inovação incremental",
            "Design thinking",
            "Ideação"
          ],
          "formula": "",
          "aplicacoes": [
            "Desenvolvimento de novos processos produtivos",
            "Melhoria contínua (Kaizen criativo)",
            "Projetos de inovação em produtos e serviços"
          ]
        }
      ]
    },
    {
      "id": "tecnicas",
      "nome": "Competências Técnicas",
      "icone": "brain",
      "cor": "#4f46e5",
      "descricao": "Habilidades técnicas essenciais para o engenheiro de produção moderno.",
      "subtopicos": [
        {
          "titulo": "Excel avançado e VBA",
          "definicao": "Domínio de funcionalidades avançadas do Microsoft Excel incluindo tabelas dinâmicas, Power Query, funções matriciais, análise de dados, gráficos dinâmicos e automação com VBA (Macros). É a ferramenta mais universal de análise e modelagem no ambiente industrial.",
          "topicos": [
            "Tabela dinâmica",
            "Power Query",
            "Macros VBA",
            "Dashboard",
            "Funções matriciais"
          ],
          "formula": "",
          "aplicacoes": [
            "Controle de indicadores de produção",
            "Relatórios gerenciais",
            "Automação de rotinas de PCP"
          ]
        },
        {
          "titulo": "SQL para análise de dados",
          "definicao": "Linguagem de consulta a bancos de dados relacionais usada para extrair, filtrar, agregar e manipular grandes volumes de dados industriais armazenados em ERPs, MES e sistemas de qualidade. Habilidade essencial para engenharia orientada a dados.",
          "topicos": [
            "SELECT",
            "JOIN",
            "GROUP BY",
            "Subconsulta",
            "Banco de dados relacional"
          ],
          "formula": "",
          "aplicacoes": [
            "Extração de dados de ERPs",
            "Análise de históricos de qualidade",
            "Relatórios de performance de produção"
          ]
        },
        {
          "titulo": "Python industrial",
          "definicao": "Uso da linguagem Python para automação de processos, análise estatística, visualização de dados, machine learning e integração de sistemas no ambiente industrial. Bibliotecas como Pandas, NumPy, Matplotlib e scikit-learn são amplamente utilizadas.",
          "topicos": [
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Automação",
            "Machine Learning"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise de dados de sensores IoT",
            "Previsão de demanda e manutenção preditiva",
            "Automação de relatórios de indicadores"
          ]
        },
        {
          "titulo": "Power BI avançado",
          "definicao": "Ferramenta de Business Intelligence da Microsoft para criação de dashboards interativos e relatórios analíticos. O nível avançado inclui modelagem dimensional, linguagem DAX, Power Query, RLS e integração com fontes de dados industriais.",
          "topicos": [
            "DAX",
            "Power Query",
            "Modelagem dimensional",
            "Dashboard",
            "KPIs"
          ],
          "formula": "",
          "aplicacoes": [
            "Painel de OEE e indicadores em tempo real",
            "Análise de desempenho de fornecedores",
            "Monitoramento de metas de produção"
          ]
        },
        {
          "titulo": "SAP módulo PP e MM",
          "definicao": "Módulos do ERP SAP para Planejamento da Produção (PP) e Gestão de Materiais (MM). O PP gerencia ordens de produção, MRP, roteiros e capacidade; o MM controla compras, estoques, movimentações e avaliação de materiais.",
          "topicos": [
            "MRP",
            "Ordem de produção",
            "Roteiro",
            "Estoque",
            "Compras"
          ],
          "formula": "",
          "aplicacoesoes": [
            "Planejamento de necessidades de materiais",
            "Controle de ordens de produção",
            "Gestão de compras e suprimentos"
          ]
        },
        {
          "titulo": "Oracle Industrial (EBS, JDE)",
          "definicao": "Suítes de ERP da Oracle para gestão industrial. Oracle E-Business Suite (EBS) e JD Edwards (JDE) cobrem manufatura, supply chain, finanças e projetos, com módulos para PCP, qualidade, manutenção e custos.",
          "topicos": [
            "Oracle EBS",
            "JD Edwards",
            "Manufatura",
            "Supply Chain",
            "ERP industrial"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão integrada da manufatura",
            "Planejamento e controle da produção",
            "Rastreabilidade e qualidade"
          ]
        },
        {
          "titulo": "MES — Manufacturing Execution Systems",
          "definicao": "Sistemas de execução da manufatura que monitoram e controlam a produção em tempo real no chão de fábrica, conectando o planejamento (ERP) ao processo produtivo. Gerenciam ordens, apontamento, rastreabilidade, OEE e qualidade.",
          "topicos": [
            "Chão de fábrica",
            "Tempo real",
            "Apontamento",
            "Rastreabilidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Apontamento eletrônico de produção",
            "Rastreabilidade de lotes",
            "Cálculo automático de OEE"
          ]
        },
        {
          "titulo": "WMS — Warehouse Management Systems",
          "definicao": "Sistemas de gestão de armazéns que controlam recebimento, estocagem, movimentação, separação (picking) e expedição de materiais. Integrados ao ERP, otimizam endereçamento, inventário e utilização do espaço de armazenagem.",
          "topicos": [
            "Armazém",
            "Picking",
            "Endereçamento",
            "Inventário",
            "Expedição"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de centros de distribuição",
            "Otimização de rotas de separação",
            "Controle de inventário cíclico"
          ]
        },
        {
          "titulo": "TMS — Transport Management Systems",
          "definicao": "Sistemas de gestão de transporte que planejam, executam e monitoram operações logísticas de fretes, roteirização, rastreamento de cargas, gestão de fretes e auditoria de freteiras. Integrados ao ERP e WMS para visibilidade logística.",
          "topicos": [
            "Roteirização",
            "Frete",
            "Rastreamento",
            "Gestão de transportadoras"
          ],
          "formula": "",
          "aplicacoes": [
            "Planejamento de rotas de entrega",
            "Controle de fretes e auditoria de CTes",
            "Monitoramento de entregas em tempo real"
          ]
        },
        {
          "titulo": "AutoCAD 2D e 3D",
          "definicao": "Software CAD (Computer-Aided Design) da Autodesk para desenho técnico 2D e modelagem 3D de peças, equipamentos e layouts industriais. Largamente utilizado na engenharia para projeto de produtos, arranjos físicos e documentação técnica.",
          "topicos": [
            "Desenho técnico",
            "Layout",
            "CAD",
            "Projeto mecânico"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto de layout fabril",
            "Desenho de componentes e conjuntos",
            "Documentação técnica e engenharia"
          ]
        },
        {
          "titulo": "SolidWorks 3D",
          "definicao": "Software CAD 3D paramétrico para projeto mecânico, modelagem sólida, montagens e geração de desenhos técnicos. Inclui ferramentas de simulação, análise de interferência, renderização e integração com manufatura (CAM).",
          "topicos": [
            "Modelagem 3D",
            "Montagem",
            "Desenho técnico",
            "Simulação"
          ],
          "formula": "",
          "aplicacoes": [
            "Projeto detalhado de equipamentos",
            "Desenvolvimento de produtos",
            "Prototipagem virtual e simulação"
          ]
        },
        {
          "titulo": "Minitab para estatística",
          "definicao": "Software estatístico amplamente utilizado em projetos Six Sigma e controle de qualidade para análise de dados, testes de hipóteses, DOE (projeto de experimentos), CEP (controle estatístico de processo), análise de capacidade e regressão.",
          "topicos": [
            "Six Sigma",
            "DOE",
            "CEP",
            "Teste de hipóteses",
            "Capabilidade"
          ],
          "formula": "",
          "aplicacoes": [
            "Projetos DMAIC",
            "Análise de capabilidade de processos",
            "Otimização de parâmetros de produção"
          ]
        },
        {
          "titulo": "Arena Simulation",
          "definicao": "Software de simulação de processos industriais e logísticos desenvolvido pela Rockwell Automation. Permite modelar sistemas produtivos complexos, realizar análises de capacidade, gargalos, cenários alternativos e otimização de recursos.",
          "topicos": [
            "Simulação",
            "Modelagem",
            "Gargalos",
            "Capacidade",
            "Otimização"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de linhas de produção",
            "Análise de gargalos e capacidade",
            "Projeto de novos sistemas produtivos"
          ]
        },
        {
          "titulo": "ERP industrial (Totvs, SAP, Oracle)",
          "definicao": "Sistemas integrados de gestão empresarial adaptados à indústria que cobrem desde o planejamento até a distribuição. No Brasil, os principais são Totvs Protheus (market share nacional), SAP (global), Oracle e Sankhya.",
          "topicos": [
            "Totvs Protheus",
            "SAP",
            "Oracle",
            "MRP II",
            "Gestão industrial"
          ],
          "formula": "",
          "aplicacoes": [
            "Gestão de ordens de produção e MRP",
            "Controle de custos industriais",
            "Integração financeira, fiscal e logística"
          ]
        },
        {
          "titulo": "Linguagem R",
          "definicao": "Linguagem de programação e ambiente computacional voltado à análise estatística, mineração de dados e visualização gráfica. Ampla utilização em projetos de data science, controle estatístico da qualidade e modelagem preditiva industrial.",
          "topicos": [
            "RStudio",
            "dplyr",
            "ggplot2",
            "Estatística",
            "Data Science"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise estatística de processos",
            "Modelagem de séries temporais de produção",
            "Dashboards estatísticos"
          ]
        },
        {
          "titulo": "Tableau",
          "definicao": "Plataforma de visualização de dados e Business Intelligence que permite criar dashboards interativos e análises visuais a partir de múltiplas fontes de dados. Conhecido por sua facilidade de uso e capacidade de lidar com grandes volumes.",
          "topicos": [
            "Visualização de dados",
            "Dashboard",
            "BI",
            "Storytelling com dados"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise visual de indicadores de produção",
            "Monitoramento de supply chain",
            "Reporting executivo"
          ]
        },
        {
          "titulo": "QlikView e Qlik Sense",
          "definicao": "Plataformas de Business Intelligence da Qlik que utilizam modelo associativo em memória para análise de dados. QlikView é focado em dashboards guiados; Qlik Sense oferece autosserviço com visualizações interativas e inteligência artificial.",
          "topicos": [
            "Modelo associativo",
            "Dashboard",
            "Data storytelling",
            "BI"
          ],
          "formula": "",
          "aplicacoes": [
            "Análise associativa de dados de produção",
            "Relatórios de qualidade com múltiplas dimensões",
            "Descoberta de padrões em dados industriais"
          ]
        },
        {
          "titulo": "Matlab/Octave",
          "definicao": "Ambientes de computação numérica para análise matemática, simulação, otimização e processamento de sinais. Matlab (MathWorks) é a ferramenta padrão na academia e indústria; Octave é sua alternativa livre e de código aberto.",
          "topicos": [
            "Simulação numérica",
            "Otimização",
            "Controle",
            "Processamento de sinais"
          ],
          "formula": "",
          "aplicacoes": [
            "Modelagem matemática de processos",
            "Otimização de sistemas produtivos",
            "Controle de qualidade estatístico avançado"
          ]
        },
        {
          "titulo": "Scilab",
          "definicao": "Software de código aberto para computação numérica, similar ao Matlab, desenvolvido pelo INRIA. Oferece ferramentas para álgebra linear, otimização, simulação de sistemas dinâmicos, processamento de sinais e gráficos científicos.",
          "topicos": [
            "Computação numérica",
            "Código aberto",
            "Simulação",
            "Matemática aplicada"
          ],
          "formula": "",
          "aplicacoes": [
            "Simulação de sistemas de controle",
            "Análise numérica na engenharia",
            "Ambiente acadêmico de baixo custo"
          ]
        },
        {
          "titulo": "Ferramentas CAD/CAM (Fusion 360, Inventor)",
          "definicao": "Softwares integrados de projeto (CAD) e manufatura (CAM) que permitem projetar peças 3D e gerar automaticamente programas de usinagem para máquinas CNC. Fusion 360 (Autodesk) é baseado em nuvem; Inventor é focado em projeto mecânico profissional.",
          "topicos": [
            "CAD/CAM",
            "CNC",
            "Usinagem",
            "Fabricação digital"
          ],
          "formula": "",
          "aplicacoes": [
            "Programação CNC automatizada",
            "Projeto e fabricação de moldes e matrizes",
            "Prototipagem rápida e manufatura aditiva"
          ]
        }
      ]
    }
  ],
  "modelosCAD": [
    {
      "nome": "Conjunto Mecânico — Prensa Manual",
      "tipo": "SolidWorks",
      "arquivo": "prensa-manual.sldasm",
      "tamanho": "4.2 MB",
      "descricao": "Projeto completo de prensa manual para oficina mecânica. Inclui molde, base, guias e sistema de alavanca."
    },
    {
      "nome": "Redutor de Velocidades — Engrenagens Helicoidais",
      "tipo": "AutoCAD",
      "arquivo": "redutor-helical.dwg",
      "tamanho": "2.8 MB",
      "descricao": "Conjunto de redutor com engrenagens helicoidais, carcaça bipartida e eixos. Desenho técnico completo com cotas."
    },
    {
      "nome": "Suporte para Máquina CNC",
      "tipo": "NanoCAD",
      "arquivo": "suporte-cnc.dwg",
      "tamanho": "1.5 MB",
      "descricao": "Base estrutural para fresadora CNC de pequeno porte. Inclui detalhamento de solda e furação."
    },
    {
      "nome": "Cilindro Pneumático ISO 6432",
      "tipo": "SolidWorks",
      "arquivo": "cilindro-pneumatico.sldprt",
      "tamanho": "3.1 MB",
      "descricao": "Modelo paramétrico de cilindro pneumático conforme norma ISO 6432. Êmoblo, camisa, tampas e vedação."
    },
    {
      "nome": "Esteira Transportadora — Perfil U",
      "tipo": "AutoCAD",
      "arquivo": "esteira-perfil-u.dwg",
      "tamanho": "5.6 MB",
      "descricao": "Projeto estrutural de esteira transportadora com perfil U, roletes, motorredutor e chapa de desgaste."
    },
    {
      "nome": "Morsa de Bancada",
      "tipo": "NanoCAD",
      "arquivo": "morsa-bancada.dwg",
      "tamanho": "1.2 MB",
      "descricao": "Morsa funcional para bancada de usinagem. Inclui castelo, parafuso, base e garras em aço."
    },
    {
      "nome": "Torre de Iluminação Industrial",
      "tipo": "SolidWorks",
      "arquivo": "torre-iluminacao.sldasm",
      "tamanho": "6.3 MB",
      "descricao": "Torre metálica treliçada para iluminação de pátio industrial com 12 m de altura. Memorial de cálculo incluso."
    },
    {
      "nome": "Caldeira Flamotubular Vertical",
      "tipo": "AutoCAD",
      "arquivo": "caldeira-flamotubular.dwg",
      "tamanho": "3.9 MB",
      "descricao": "Caldeira flamotubular vertical para geração de vapor. Inclui tubos, fornalha, espelho e isolamento térmico."
    },
    {
      "nome": "Ponte Rolante 10t",
      "tipo": "SolidWorks",
      "arquivo": "ponte-rolante.sldasm",
      "tamanho": "8.2 MB",
      "descricao": "Ponte rolante biapoiada com capacidade de 10 toneladas. Inclui viga principal, finais, trolley e motorredures."
    },
    {
      "nome": "Braço Robótico 6 Eixos",
      "tipo": "AutoCAD",
      "arquivo": "braco-robotico.dwg",
      "tamanho": "4.5 MB",
      "descricao": "Modelo conceitual de braço robótico articulado com 6 graus de liberdade para célula de manufatura."
    }
  ],
  "cursosGratuitos": [
    {
      "nome": "Gestão da Qualidade Total",
      "plataforma": "SENAI",
      "url": "https://www.senai.br/cursos",
      "carga": "40h",
      "tipo": "Curso Livre",
      "descricao": "Fundamentos do TQM, ferramentas da qualidade, ISO 9001 e melhoria contínua."
    },
    {
      "nome": "Lean Manufacturing",
      "plataforma": "Fundação Bradesco",
      "url": "https://www.ev.org.br/cursos",
      "carga": "20h",
      "tipo": "Curso Livre",
      "descricao": "Conceitos de produção enxuta, ferramentas Lean, Kaizen e eliminação de desperdícios."
    },
    {
      "nome": "Logística Empresarial",
      "plataforma": "SEBRAE",
      "url": "https://www.sebrae.com.br/cursosonline",
      "carga": "16h",
      "tipo": "Curso Livre",
      "descricao": "Gestão logística, modais, armazenagem, distribuição e indicadores logísticos."
    },
    {
      "nome": "Introdução ao Supply Chain Management",
      "plataforma": "Coursera — Rutgers",
      "url": "https://www.coursera.org/learn/supply-chain-management",
      "carga": "20h",
      "tipo": "Curso (Auditoria)",
      "descricao": "Cadeia de suprimentos integrada, gestão de fornecedores, compras e S&OP."
    },
    {
      "nome": "Excel Aplicado à Engenharia",
      "plataforma": "Fundação Bradesco",
      "url": "https://www.ev.org.br/cursos",
      "carga": "30h",
      "tipo": "Curso Livre",
      "descricao": "Excel intermediário e avançado para análise de dados, tabelas dinâmicas e dashboards."
    },
    {
      "nome": "Python para Análise de Dados (IBM)",
      "plataforma": "Coursera (IBM)",
      "url": "https://www.coursera.org/professional-certificates/ibm-data-analyst",
      "carga": "40h",
      "tipo": "Curso (Auditoria)",
      "descricao": "Python com pandas, NumPy e visualização de dados para análise industrial."
    },
    {
      "nome": "Gestão de Projetos (PMBOK)",
      "plataforma": "SEBRAE",
      "url": "https://www.sebrae.com.br/cursosonline",
      "carga": "24h",
      "tipo": "Curso Livre",
      "descricao": "Fundamentos do PMBOK, cronogramas, EAP, riscos e custos em projetos."
    },
    {
      "nome": "Segurança do Trabalho (NRs)",
      "plataforma": "SENAI",
      "url": "https://www.senai.br/cursos",
      "carga": "20h",
      "tipo": "Curso Livre",
      "descricao": "Normas Regulamentadoras, EPI/EPC, CIPA, mapa de riscos e prevenção de acidentes."
    },
    {
      "nome": "Power BI (Microsoft Learn)",
      "plataforma": "Microsoft Learn",
      "url": "https://learn.microsoft.com/pt-br/training/powerplatform/power-bi",
      "carga": "16h",
      "tipo": "Trilha",
      "descricao": "Dashboards, DAX, modelagem de dados e visualização para KPIs industriais."
    },
    {
      "nome": "Six Sigma — White Belt",
      "plataforma": "Fundação Bradesco",
      "url": "https://www.ev.org.br/cursos",
      "carga": "10h",
      "tipo": "Curso Livre",
      "descricao": "Introdução ao Seis Sigma, DMAIC, estatística básica e redução de variação."
    },
    {
      "nome": "Indústria 4.0 (SENAI)",
      "plataforma": "SENAI",
      "url": "https://www.senai.br/cursos",
      "carga": "20h",
      "tipo": "Curso Livre",
      "descricao": "IoT industrial, gêmeo digital, manufatura aditiva, IA e sistemas ciberfísicos."
    },
    {
      "nome": "AutoCAD Básico (SENAI)",
      "plataforma": "SENAI",
      "url": "https://www.senai.br/cursos",
      "carga": "40h",
      "tipo": "Curso Livre",
      "descricao": "Desenho técnico auxiliado por computador, cotagem, layers e plotagem."
    },
    {
      "nome": "Fundamentos da Gestão Logística (FM2S)",
      "plataforma": "FM2S",
      "url": "https://www.fm2s.com.br/cursos/fundamentos-da-gestao-logistica",
      "carga": "15h",
      "tipo": "Curso Livre",
      "descricao": "Princípios da gestão logística, estoques, transporte e indicadores."
    },
    {
      "nome": "Programação Linear (Udemy)",
      "plataforma": "Udemy",
      "url": "https://www.udemy.com/user/nilo-guimaraes/",
      "carga": "5h",
      "tipo": "Curso Gratuito",
      "descricao": "Introdução à programação linear, método simplex e otimização de recursos."
    },
    {
      "nome": "SQL Básico (Kaggle)",
      "plataforma": "Kaggle",
      "url": "https://www.kaggle.com/learn/intro-to-sql",
      "carga": "5h",
      "tipo": "Curso Interativo",
      "descricao": "Consultas SQL para análise de dados estruturados com bancos relacionais."
    },
    {
      "nome": "PCP (Planejamento e Controle da Produção)",
      "plataforma": "Nomus",
      "url": "https://material.nomus.com.br/pcp",
      "carga": "2h",
      "tipo": "E-book",
      "descricao": "Guia completo sobre PCP, MRP, sequenciamento e programação da produção."
    },
    {
      "nome": "Machine Learning (Google)",
      "plataforma": "Google",
      "url": "https://developers.google.com/machine-learning/crash-course",
      "carga": "15h",
      "tipo": "Curso Gratuito",
      "descricao": "Fundamentos de ML, redes neurais e algoritmos preditivos para dados industriais."
    },
    {
      "nome": "Gestão Ambiental ISO 14001",
      "plataforma": "Fundação Bradesco",
      "url": "https://www.ev.org.br/cursos",
      "carga": "12h",
      "tipo": "Curso Livre",
      "descricao": "Sistema de gestão ambiental, requisitos da ISO 14001 e auditoria ambiental."
    }
  ],
  "formularios": [
    {
      "id": "fmea",
      "nome": "Planilha FMEA (Análise de Modos de Falha)",
      "descricao": "Formulário completo de FMEA de processo com campos para função, modo de falha, causa, efeito, NRP e ações recomendadas."
    },
    {
      "id": "ppap",
      "nome": "PPAP — Production Part Approval Process",
      "descricao": "Checklist completo de PPAP nível 3 conforme AIAG, com 18 itens de submissão."
    },
    {
      "id": "8d",
      "nome": "Relatório 8D (Oito Disciplinas)",
      "descricao": "Template de relatório 8D para análise de não conformidades com campos de D1 a D8."
    },
    {
      "id": "mapeamento",
      "nome": "Mapeamento de Processos — SIPOC",
      "descricao": "Template de mapeamento SIPOC com Suppliers, Inputs, Process, Outputs e Customers."
    },
    {
      "id": "5s",
      "nome": "Checklist 5S",
      "descricao": "Checklist de auditoria 5S com critérios para cada S e pontuação de 0 a 5."
    },
    {
      "id": "vsm",
      "nome": "Value Stream Mapping (VSM)",
      "descricao": "Template de Mapeamento de Fluxo de Valor com simbologia completa e campos para métricas."
    },
    {
      "id": "diagrama-ishikawa",
      "nome": "Diagrama de Ishikawa (Espinha de Peixe)",
      "descricao": "Template editável do diagrama causa-efeito com os 6Ms: Método, Mão de Obra, Máquina, Material, Medida, Meio Ambiente."
    },
    {
      "id": "poka-yoke",
      "nome": "Planilha de Poka-Yoke",
      "descricao": "Registro de dispositivos à prova de erro com campos para tipo, local e eficácia."
    },
    {
      "id": "5w2h",
      "nome": "Plano de Ação 5W2H",
      "descricao": "Template de plano de ação What, Why, Where, When, Who, How, How Much."
    },
    {
      "id": "auditoria",
      "nome": "Checklist de Auditoria ISO 9001",
      "descricao": "Checklist baseado na ISO 19011 com requisitos da ISO 9001:2025."
    },
    {
      "id": "treinamento",
      "nome": "Registro de Treinamento",
      "descricao": "Planilha de controle de treinamentos com carga horária, instrutor e avaliação."
    },
    {
      "id": "indicadores",
      "nome": "Dashboard de Indicadores (KPI)",
      "descricao": "Template de dashboard com OEE, Lead Time, Produtividade, Refugo e OTIF."
    },
    {
      "id": "analise-capacidade",
      "nome": "Análise de Capacidade Produtiva",
      "descricao": "Formulário para cálculo de capacidade instalada, disponível e efetiva com indicadores de ociosidade."
    },
    {
      "id": "sequenciamento",
      "nome": "Planilha de Sequenciamento de Ordens",
      "descricao": "Template para sequenciamento de produção com regras EDD, SPT, FCFS e CR."
    },
    {
      "id": "custos",
      "nome": "Planilha de Custeio ABC",
      "descricao": "Planilha de custeio baseado em atividades com direcionadores de custos e rateio."
    },
    {
      "id": "riscos",
      "nome": "Matriz de Riscos (Probabilidade x Impacto)",
      "descricao": "Template de matriz de riscos com classificação P x I e planos de ação de resposta."
    }
  ]
};