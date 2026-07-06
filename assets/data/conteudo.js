window.SITE_DATA = {

  "categorias": [

    {

      "id": "pcp",

      "nome": "Planejamento e Controle da Produ├º├úo",

      "icone": "calendar-clock",

      "cor": "#2563eb",

      "descricao": "Fundamentos do PCP: planejamento, programa├º├úo e controle da produ├º├úo industrial.",

      "subtopicos": [

        {

          "titulo": "Planejamento da produ├º├úo",

          "definicao": "Processo de defini├º├úo de metas produtivas, aloca├º├úo de recursos e estabelecimento de diretrizes para atender ├á demanda prevista no curto, m├®dio e longo prazo. Envolve decis├Áes sobre volumes, prazos e capacidades, funcionando como guia mestre para toda a opera├º├úo fabril.",

          "topicos": [

            "Previs├úo de demanda",

            "Plano agregado",

            "PMP",

            "Capacidade produtiva"

          ],

          "formula": "",

          "aplicacoes": [

            "Defini├º├úo do mix de produ├º├úo mensal",

            "Planejamento de turnos e horas-extras",

            "Dimensionamento de recursos produtivos"

          ]

        },

        {

          "titulo": "Programa├º├úo da produ├º├úo",

          "definicao": "Etapa que detalha o sequenciamento das ordens de produ├º├úo no tempo, definindo quais produtos ser├úo fabricados, em quais m├íquinas, em quais quantidades e em que momento. Traduz o plano mestre em ordens execut├íveis no ch├úo de f├íbrica.",

          "topicos": [

            "Sequenciamento",

            "Carregamento",

            "Libera├º├úo de ordens",

            "Heur├¡sticas de programa├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Programa├º├úo di├íria de linhas de montagem",

            "Aloca├º├úo de ordens em m├íquinas com restri├º├Áes",

            "Uso de software APS para otimiza├º├úo"

          ]

        },

        {

          "titulo": "Controle da produ├º├úo",

          "definicao": "Acompanhamento sistem├ítico da execu├º├úo produtiva para verificar se o que foi planejado est├í sendo cumprido. Identifica desvios entre o programado e o realizado, acionando a├º├Áes corretivas para manter o fluxo dentro dos prazos e custos estabelecidos.",

          "topicos": [

            "Apontamento de produ├º├úo",

            "Indicadores de desempenho",

            "OEE",

            "Desvios e corre├º├Áes"

          ],

          "formula": "OEE = Disponibilidade ├ù Performance ├ù Qualidade",

          "aplicacoes": [

            "Acompanhamento di├írio de ordens via sistemas MES",

            "An├ílise de gargalos produtivos",

            "Relat├│rios de efici├¬ncia por centro de trabalho"

          ]

        },

        {

          "titulo": "Balanceamento de linhas",

          "definicao": "T├®cnica de distribui├º├úo uniforme das cargas de trabalho entre as esta├º├Áes de uma linha de produ├º├úo, minimizando o tempo ocioso e maximizando a efici├¬ncia. Busca igualar o tempo de ciclo de cada esta├º├úo ao takt time do sistema produtivo.",

          "topicos": [

            "Tempo de ciclo",

            "Takt time",

            "Esta├º├Áes de trabalho",

            "├ìndice de balanceamento"

          ],

          "formula": "IE = (╬ú ti / (n ├ù tc)) ├ù 100%",

          "aplicacoes": [

            "Linhas de montagem automotiva",

            "Linhas de eletr├┤nicos",

            "Redu├º├úo de gargalos em manufatura"

          ]

        },

        {

          "titulo": "Sequenciamento de ordens",

          "definicao": "Processo de ordena├º├úo das ordens de produ├º├úo em uma sequ├¬ncia l├│gica que otimiza crit├®rios como menor tempo total, menor atraso ou maior uso de capacidade. Utiliza regras como FIFO, EDD, SPT e algoritmos avan├ºados de otimiza├º├úo.",

          "topicos": [

            "Regras de prioridade",

            "EDD",

            "SPT",

            "Johnson para 2 m├íquinas"

          ],

          "formula": "",

          "aplicacoes": [

            "Sequenciamento de ordens em f├íbricas t├¬xteis",

            "Prioriza├º├úo de pedidos urgentes",

            "Programa├º├úo em ambientes job shop"

          ]

        },

        {

          "titulo": "Controle de capacidade produtiva",

          "definicao": "Atividade que verifica se a capacidade instalada (m├úo de obra, m├íquinas, turnos) ├® suficiente para cumprir o plano de produ├º├úo. Ajusta recursos por meio de horas extras, subcontrata├º├úo ou altera├º├úo de turnos quando h├í desequil├¡brio entre carga e capacidade.",

          "topicos": [

            "CRP ÔÇö Capacity Requirements Planning",

            "Capacidade dispon├¡vel",

            "Capacidade necess├íria",

            "Nivelamento de recursos"

          ],

          "formula": "",

          "aplicacoes": [

            "C├ílculo de capacidade em fundi├º├Áes",

            "Planejamento de turnos extras em ind├║stria aliment├¡cia",

            "Simula├º├úo de cen├írios de expans├úo"

          ]

        },

        {

          "titulo": "Previs├úo de demanda",

          "definicao": "Estimativa das quantidades de produtos ou servi├ºos que os clientes comprar├úo em um per├¡odo futuro. Emprega m├®todos quantitativos (s├®ries temporais, causais) e qualitativos (painel de especialistas, delphi) para subsidiar o planejamento produtivo e financeiro.",

          "topicos": [

            "M├®dias m├│veis",

            "Suaviza├º├úo exponencial",

            "Sazonalidade",

            "Erro de previs├úo (MAD, MAPE)"

          ],

          "formula": "Ft+1 = ╬▒ ├ù Dt + (1 ÔêÆ ╬▒) ├ù Ft",

          "aplicacoes": [

            "Previs├úo de vendas sazonais no varejo",

            "Planejamento de compras de mat├®rias-primas",

            "Dimensionamento de estoques de seguran├ºa"

          ]

        },

        {

          "titulo": "Planejamento agregado",

          "definicao": "Planejamento de m├®dio prazo (6 a 18 meses) que define taxas de produ├º├úo, n├¡veis de estoque e for├ºa de trabalho em termos agregados ÔÇö fam├¡lias de produtos, n├úo itens individuais. Busca minimizar custos totais atendendo ├á demanda prevista com recursos dispon├¡veis.",

          "topicos": [

            "Estrat├®gia de persegui├º├úo",

            "Estrat├®gia nivelada",

            "Estrat├®gia mista",

            "Programa├º├úo linear"

          ],

          "formula": "",

          "aplicacoes": [

            "Planejamento semestral de produ├º├úo em montadoras",

            "Dimensionamento de quadro de funcion├írios",

            "Decis├úo entre produzir ou estocar"

          ]

        },

        {

          "titulo": "Plano Mestre de Produ├º├úo (PMP)",

          "definicao": "Desdobramento do planejamento agregado em itens finais para horizontes de 6 a 12 semanas. Estabelece quanto e quando produzir cada produto acabado, servindo como entrada principal para o c├ílculo de necessidade de materiais (MRP).",

          "topicos": [

            "MPS ÔÇö Master Production Schedule",

            "Dispon├¡vel para promessa (ATP)",

            "Horizonte de planejamento",

            "Explos├úo de materiais"

          ],

          "formula": "ATP = Saldo dispon├¡vel + Produ├º├úo programada ÔêÆ Pedidos confirmados",

          "aplicacoes": [

            "Programa├º├úo semanal em ind├║stria moveleira",

            "Gest├úo de entregas ao cliente final",

            "Interface com vendas e log├¡stica"

          ]

        },

        {

          "titulo": "MRP ÔÇö Material Requirements Planning",

          "definicao": "Sistema l├│gico que calcula as necessidades de materiais a partir da demanda independente (PMP), da lista de materiais (BOM) e dos estoques dispon├¡veis. Determina quantidades e momentos das ordens de compra e produ├º├úo para garantir o abastecimento sem excessos.",

          "topicos": [

            "Explos├úo da BOM",

            "Necessidade l├¡quida",

            "Lead time offset",

            "Planejamento de necessidades"

          ],

          "formula": "NL = NB ÔêÆ ED ÔêÆ RP",

          "aplicacoes": [

            "C├ílculo de compras em ind├║stria metal├║rgica",

            "Planejamento de componentes eletr├┤nicos",

            "Gest├úo de materiais dependentes"

          ]

        },

        {

          "titulo": "MRP II",

          "definicao": "Evolu├º├úo do MRP que integra o planejamento de materiais com recursos de capacidade, finan├ºas, compras e vendas em um sistema unificado. Permite simular cen├írios de produ├º├úo considerando restri├º├Áes de m├íquinas, m├úo de obra e fluxo de caixa.",

          "topicos": [

            "Manufacturing Resource Planning",

            "Simula├º├úo de cen├írios",

            "Fechamento do ciclo",

            "Integra├º├úo financeira"

          ],

          "formula": "",

          "aplicacoes": [

            "Planejamento fabril integrado ao or├ºamento",

            "Simula├º├úo de expans├úo de capacidade",

            "Fechamento financeiro mensal alinhado ├á produ├º├úo"

          ]

        },

        {

          "titulo": "ERP ÔÇö Enterprise Resource Planning",

          "definicao": "Sistema integrado de gest├úo que unifica todos os processos de neg├│cio (produ├º├úo, finan├ºas, RH, log├¡stica, vendas) em uma ├║nica base de dados. O MRP ├® um m├│dulo dentro do ERP que trata especificamente do planejamento de materiais e capacidade.",

          "topicos": [

            "M├│dulos integrados",

            "SAP / Oracle / Totvs",

            "Implementa├º├úo e parametriza├º├úo",

            "Integra├º├úo com WMS e TMS"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo integrada da cadeia de suprimentos",

            "Automa├º├úo de processos financeiros",

            "Visibilidade em tempo real das opera├º├Áes"

          ]

        },

        {

          "titulo": "APS ÔÇö Advanced Planning and Scheduling",

          "definicao": "Sistema avan├ºado de planejamento e programa├º├úo que utiliza algoritmos de otimiza├º├úo (programa├º├úo linear, metaheur├¡sticas) para gerar cronogramas fact├¡veis considerando restri├º├Áes complexas de capacidade, materiais e prazos simultaneamente.",

          "topicos": [

            "Algoritmos gen├®ticos",

            "Otimiza├º├úo restritiva",

            "Programa├º├úo finita",

            "Simula├º├úo de cen├írios"

          ],

          "formula": "",

          "aplicacoes": [

            "Programa├º├úo de produ├º├úo em ind├║strias qu├¡micas",

            "Otimiza├º├úo de sequenciamento em bebidas",

            "Planejamento com restri├º├Áes de validade"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Slack, N.; Brandon-Jones, A.; Johnston, R. Administração da Produção. 8. ed. São Paulo: Atlas, 2018."},
      {"tipo": "Livro", "ref": "Tubino, D. F. Planejamento e Controle da Produção - Teoria e Prática. 3. ed. São Paulo: Atlas, 2017."},
      {"tipo": "Livro", "ref": "Fernandes, F. C. F.; Godinho Filho, M. Planejamento e Controle da Produção: dos Fundamentos ao Essencial. São Paulo: Atlas, 2010."},
      {"tipo": "Livro", "ref": "Corrêa, H. L.; Corrêa, C. A. Administração de Produção e Operações. 4. ed. São Paulo: Atlas, 2018."}
    ]},

    {

      "id": "qualidade",

      "nome": "Gest├úo da Qualidade",

      "icone": "badge-check",

      "cor": "#16a34a",

      "descricao": "Sistemas de gest├úo, ferramentas e normas para garantia da qualidade industrial.",

      "subtopicos": [

        {

          "titulo": "Controle de qualidade",

          "definicao": "Conjunto de atividades operacionais de verifica├º├úo e inspe├º├úo para assegurar que os produtos e processos atendam aos requisitos especificados. Inclui medi├º├Áes, ensaios e an├ílises ao longo de todo o fluxo produtivo para identificar n├úo conformidades.",

          "topicos": [

            "Inspe├º├úo por amostragem",

            "Atributos vs vari├íveis",

            "Planos de amostragem",

            "Inspe├º├úo na fonte"

          ],

          "formula": "",

          "aplicacoes": [

            "Inspe├º├úo de lotes recebidos de fornecedores",

            "Controle dimensional de pe├ºas usinadas",

            "Verifica├º├úo de conformidade em linhas de envase"

          ]

        },

        {

          "titulo": "Garantia da qualidade",

          "definicao": "Conjunto de a├º├Áes planejadas e sistem├íticas necess├írias para proporcionar confian├ºa de que um produto ou servi├ºo atender├í aos requisitos de qualidade. Foca na preven├º├úo de defeitos por meio da estrutura├º├úo de processos, documenta├º├úo e auditorias.",

          "topicos": [

            "Sistema da qualidade",

            "Procedimentos documentados",

            "Rastreabilidade",

            "Acredita├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Implementa├º├úo de SGQ baseado na ISO 9001",

            "Auditorias internas de processo",

            "Programas de rastreabilidade em alimentos"

          ]

        },

        {

          "titulo": "Inspe├º├úo de processos",

          "definicao": "Atividade de monitoramento cont├¡nuo dos par├ómetros de processo para garantir que as varia├º├Áes se mantenham dentro dos limites especificados. Pode ser realizada por amostragem estat├¡stica ou censo, com uso de instrumentos de medi├º├úo e dispositivos autom├íticos.",

          "topicos": [

            "Inspe├º├úo na linha",

            "Controle dimensional",

            "Ensaios destrutivos e n├úo destrutivos",

            "Carta de controle"

          ],

          "formula": "",

          "aplicacoes": [

            "Monitoramento de temperatura em tratamento t├®rmico",

            "Inspe├º├úo visual automatizada em eletr├┤nicos",

            "Medi├º├úo de dureza em lotes metal├║rgicos"

          ]

        },

        {

          "titulo": "Auditorias da qualidade",

          "definicao": "Processo sistem├ítico, independente e documentado para obter evid├¬ncias objetivas e avaliar a conformidade dos processos e produtos com crit├®rios pr├®-estabelecidos. Divide-se em auditorias de primeira, segunda e terceira parte.",

          "topicos": [

            "Auditoria interna",

            "Auditoria de fornecedores",

            "Auditoria de certifica├º├úo",

            "Non-conformity report"

          ],

          "formula": "",

          "aplicacoes": [

            "Auditoria interna pr├®-certifica├º├úo ISO 9001",

            "Auditoria de fornecedores automotivos",

            "Auditorias de manuten├º├úo de certifica├º├úo"

          ]

        },

        {

          "titulo": "ISO 9001:2025",

          "definicao": "Norma internacional que especifica requisitos para um Sistema de Gest├úo da Qualidade, focando na capacidade de fornecer produtos e servi├ºos conformes e na melhoria cont├¡nua da satisfa├º├úo do cliente. Estrutura-se em cl├íusulas baseadas no ciclo PDCA.",

          "topicos": [

            "Contexto da organiza├º├úo",

            "Lideran├ºa",

            "Planejamento",

            "Avalia├º├úo de desempenho"

          ],

          "formula": "",

          "aplicacoes": [

            "Certifica├º├úo de SGQ em ind├║strias",

            "Estrutura├º├úo de processos documentados",

            "Melhoria cont├¡nua baseada em indicadores"

          ]

        },

        {

          "titulo": "ISO 14001:2024",

          "definicao": "Norma internacional para Sistemas de Gest├úo Ambiental que estabelece requisitos para identificar, controlar e reduzir impactos ambientais das opera├º├Áes. Adota a abordagem PDCA e o ciclo de melhoria cont├¡nua para gest├úo de aspectos ambientais.",

          "topicos": [

            "Aspectos ambientais",

            "Requisitos legais",

            "Emerg├¬ncias ambientais",

            "Indicadores de desempenho ambiental"

          ],

          "formula": "",

          "aplicacoes": [

            "Licenciamento ambiental industrial",

            "Programas de redu├º├úo de res├¡duos",

            "Gest├úo de efluentes e emiss├Áes"

          ]

        },

        {

          "titulo": "ISO 45001:2023",

          "definicao": "Norma que define requisitos para Sistemas de Gest├úo de Sa├║de e Seguran├ºa Ocupacional, ajudando organiza├º├Áes a prevenir les├Áes e doen├ºas relacionadas ao trabalho. Integra-se com ISO 9001 e ISO 14001 no modelo de estrutura de alto n├¡vel (HLS).",

          "topicos": [

            "Identifica├º├úo de perigos",

            "Avalia├º├úo de riscos",

            "Controles operacionais",

            "Investiga├º├úo de incidentes"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de seguran├ºa em f├íbricas",

            "Programas de ergonomia no trabalho",

            "Redu├º├úo de taxas de acidentes"

          ]

        },

        {

          "titulo": "CEP ÔÇö Controle Estat├¡stico do Processo",

          "definicao": "Metodologia estat├¡stica de monitoramento cont├¡nuo de processos produtivos por meio de gr├íficos de controle, detectando varia├º├Áes anormais antes que gerem produtos n├úo conformes. Baseia-se nos princ├¡pios de Shewhart e na an├ílise de variabilidade.",

          "topicos": [

            "Gr├íficos X╠ä-R",

            "Gr├íficos X╠ä-S",

            "Gr├íficos p, np, c, u",

            "Capacidade Cp e Cpk"

          ],

          "formula": "LSC = X╠ä + AÔééR; LC = X╠ä; LIC = X╠ä ÔêÆ AÔééR",

          "aplicacoes": [

            "Controle dimensional em linha de usinagem",

            "Monitoramento de peso l├¡quido em envase",

            "An├ílise de estabilidade em processos qu├¡micos"

          ]

        },

        {

          "titulo": "Seis Sigma",

          "definicao": "Metodologia estruturada de melhoria que visa reduzir a variabilidade dos processos a n├¡veis de 3,4 defeitos por milh├úo de oportunidades (DPMO). Combina ferramentas estat├¡sticas e gerenciais para alcan├ºar excel├¬ncia operacional orientada a dados.",

          "topicos": [

            "DMAIC",

            "DMADV",

            "Pap├®is Belts",

            "DPMO e n├¡vel sigma"

          ],

          "formula": "DPMO = (N┬║ defeitos / (N┬║ unidades ├ù N┬║ oportunidades)) ├ù 10ÔüÂ",

          "aplicacoes": [

            "Redu├º├úo de refugos em inje├º├úo pl├ística",

            "Otimiza├º├úo de processos banc├írios",

            "Melhoria de lead time log├¡stico"

          ]

        },

        {

          "titulo": "Lean Six Sigma",

          "definicao": "Integra├º├úo das filosofias Lean Manufacturing (elimina├º├úo de desperd├¡cios) e Seis Sigma (redu├º├úo de variabilidade) em uma abordagem ├║nica de melhoria cont├¡nua. Utiliza o DMAIC como estrutura e incorpora ferramentas lean como VSM e 5S.",

          "topicos": [

            "DMAIC + Lean",

            "VSM",

            "Redu├º├úo de desperd├¡cios",

            "Fluxo puxado"

          ],

          "formula": "",

          "aplicacoes": [

            "Melhoria integrada em ind├║stria farmac├¬utica",

            "Otimiza├º├úo de fluxo hospitalar",

            "Projetos de redu├º├úo de custos log├¡sticos"

          ]

        },

        {

          "titulo": "PDCA e SDCA",

          "definicao": "Ciclo PDCA (Plan-Do-Check-Act) ├® o m├®todo iterativo de melhoria cont├¡nua composto por quatro etapas: planejar, executar, verificar e agir corretivamente. O SDCA (Standardize-Do-Check-Act) ├® usado para padronizar e estabilizar processos antes de melhor├í-los.",

          "topicos": [

            "Ciclo de Deming",

            "Padroniza├º├úo",

            "A├º├úo corretiva",

            "Melhoria cont├¡nua"

          ],

          "formula": "",

          "aplicacoes": [

            "Estrutura├º├úo de projetos de melhoria",

            "Estabiliza├º├úo de novos processos",

            "Rotina de gest├úo da qualidade"

          ]

        },

        {

          "titulo": "MASP ÔÇö M├®todo de An├ílise e Solu├º├úo de Problemas",

          "definicao": "Metodologia estruturada de 8 etapas para identifica├º├úo, an├ílise e elimina├º├úo de problemas cr├┤nicos na qualidade. Derivado do QC Story japon├¬s, utiliza ferramentas como diagrama de Ishikawa, 5 porqu├¬s e gr├ífico de Pareto em sua aplica├º├úo.",

          "topicos": [

            "Identifica├º├úo do problema",

            "An├ílise de causas",

            "Plano de a├º├úo (5W2H)",

            "Verifica├º├úo dos resultados"

          ],

          "formula": "",

          "aplicacoes": [

            "Elimina├º├úo de falhas recorrentes em produ├º├úo",

            "Redu├º├úo de reclama├º├Áes de clientes",

            "Projetos de melhoria em processos administrativos"

          ]

        },

        {

          "titulo": "FMEA ÔÇö Failure Mode and Effects Analysis",

          "definicao": "Ferramenta preventiva que identifica modos de falha potenciais em produtos ou processos, avalia seus efeitos e riscos (severidade, ocorr├¬ncia, detec├º├úo) e prioriza a├º├Áes para reduzir ou eliminar riscos. Existem FMEA de projeto, processo e sistema.",

          "topicos": [

            "RPN ÔÇö Risk Priority Number",

            "Modo de falha",

            "Efeito e causa",

            "Plano de a├º├úo preventiva"

          ],

          "formula": "RPN = S ├ù O ├ù D",

          "aplicacoes": [

            "An├ílise de riscos em projetos automotivos",

            "Preven├º├úo de falhas em processos aeron├íuticos",

            "Desenvolvimento de produtos eletr├┤nicos"

          ]

        },

        {

          "titulo": "APQP ÔÇö Advanced Product Quality Planning",

          "definicao": "Estrutura padronizada de planejamento da qualidade de produtos, amplamente usada no setor automotivo. Organiza em cinco fases o desenvolvimento desde o conceito at├® o lan├ºamento, garantindo que todos os requisitos de qualidade sejam atendidos antes da produ├º├úo em s├®rie.",

          "topicos": [

            "Fase de planejamento",

            "Design do produto",

            "Design do processo",

            "Valida├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenvolvimento de novos modelos automotivos",

            "Qualifica├º├úo de fornecedores",

            "Lan├ºamento de produtos industriais complexos"

          ]

        },

        {

          "titulo": "PPAP ÔÇö Production Part Approval Process",

          "definicao": "Processo padronizado do setor automotivo que certifica que todos os requisitos de engenharia e qualidade de um componente foram atendidos antes do in├¡cio da produ├º├úo em s├®rie. Exige 18 itens de submiss├úo, incluindo dimensional, testes de material e capabilidade.",

          "topicos": [

            "N├¡veis de submiss├úo",

            "PSW",

            "Amostras iniciais",

            "Capacidade de processo"

          ],

          "formula": "",

          "aplicacoes": [

            "Homologa├º├úo de pe├ºas automotivas",

            "Valida├º├úo de ferramentais de estamparia",

            "Libera├º├úo de fornecedores de autope├ºas"

          ]

        },

        {

          "titulo": "MSA ÔÇö Measurement Systems Analysis",

          "definicao": "Conjunto de estudos estat├¡sticos para avaliar a qualidade de sistemas de medi├º├úo, incluindo repetitividade, reprodutibilidade, vi├®s, linearidade e estabilidade. Garante que os dados coletados s├úo confi├íveis para decis├Áes de controle de qualidade.",

          "topicos": [

            "R&R (Gage R&R)",

            "Repetitividade",

            "Reprodutibilidade",

            "Estudo de vi├®s"

          ],

          "formula": "% R&R = (¤â┬▓ MS / ¤â┬▓ Total) ├ù 100%",

          "aplicacoes": [

            "Valida├º├úo de paqu├¡metros e micr├┤metros",

            "Qualifica├º├úo de sistemas de medi├º├úo automatizados",

            "Controle de balan├ºas em linhas de envase"

          ]

        },

        {

          "titulo": "SPC ÔÇö Statistical Process Control",

          "definicao": "Aplica├º├úo de m├®todos estat├¡sticos para monitorar e controlar a variabilidade de processos produtivos em tempo real. Utiliza gr├íficos de controle, histogramas e an├ílise de capacidade para detectar desvios e manter o processo dentro dos limites especificados.",

          "topicos": [

            "Varia├º├úo comum vs especial",

            "Limites de controle",

            "Subgrupos racionais",

            "Capabilidade Cp/Cpk"

          ],

          "formula": "Cpk = min[(LSE ÔêÆ ╬╝)/3¤â; (╬╝ ÔêÆ LIE)/3¤â]",

          "aplicacoes": [

            "Monitoramento em tempo real em ind├║stria de semicondutores",

            "Controle de processos cont├¡nuos em papel e celulose",

            "Dashboard de qualidade fabril"

          ]

        },

        {

          "titulo": "Kaizen",

          "definicao": "Filosofia japonesa de melhoria cont├¡nua incremental baseada na participa├º├úo de todos os colaboradores, do ch├úo de f├íbrica ├á alta dire├º├úo. Kaizen significa literalmente \"mudan├ºa para melhor\" e ├® operacionalizado por meio de eventos focados (kaizen events) e pequenas melhorias di├írias.",

          "topicos": [

            "Evento Kaizen",

            "Gemba Kaizen",

            "Fluxo cont├¡nuo",

            "Melhoria incremental vs disruptiva"

          ],

          "formula": "",

          "aplicacoes": [

            "Redu├º├úo de setup em prensas",

            "Melhoria de layout de c├®lulas",

            "Otimiza├º├úo de fluxo de materiais"

          ]

        },

        {

          "titulo": "Programa 5S",

          "definicao": "Metodologia de gest├úo visual e organiza├º├úo do ambiente de trabalho baseada em cinco sensos: Seiri (utiliza├º├úo), Seiton (ordena├º├úo), Seis┼ì (limpeza), Seiketsu (padroniza├º├úo) e Shitsuke (disciplina). Cria as condi├º├Áes b├ísicas para qualidade, produtividade e seguran├ºa.",

          "topicos": [

            "Senso de utiliza├º├úo",

            "Senso de ordena├º├úo",

            "Senso de limpeza",

            "Auditoria 5S"

          ],

          "formula": "",

          "aplicacoes": [

            "Organiza├º├úo de postos de trabalho",

            "Redu├º├úo de desperd├¡cios de movimenta├º├úo",

            "Cria├º├úo de cultura de disciplina operacional"

          ]

        },

        {

          "titulo": "Poka-Yoke",

          "definicao": "Dispositivo ou mecanismo ├á prova de falhas que previne a ocorr├¬ncia de defeitos no momento em que ocorrem ou os detecta imediatamente. Pode ser de contato, valor constante ou passo-a-passo, e ├® uma ferramenta essencial do zero defeito no Lean.",

          "topicos": [

            "Dispositivos de detec├º├úo",

            "Preven├º├úo vs detec├º├úo",

            "Sistemas de parada autom├ítica",

            "Controles f├¡sicos e sensores"

          ],

          "formula": "",

          "aplicacoes": [

            "Gabaritos que impedem montagem invertida",

            "Sensores de presen├ºa em linhas de montagem",

            "Contadores autom├íticos de pe├ºas"

          ]

        },

        {

          "titulo": "DMAIC",

          "definicao": "Acr├┤nimo das cinco fases do m├®todo de melhoria do Seis Sigma: Define (definir), Measure (medir), Analyze (analisar), Improve (melhorar) e Control (controlar). Estrutura projetos de forma sistem├ítica, orientada a dados e focada na elimina├º├úo de causas raiz de defeitos.",

          "topicos": [

            "Define ÔÇö Project Charter",

            "Measure ÔÇö Baseline",

            "Analyze ÔÇö Causa raiz",

            "Improve ÔÇö Solu├º├Áes",

            "Control ÔÇö Plano de controle"

          ],

          "formula": "",

          "aplicacoes": [

            "Projetos de redu├º├úo de defeitos em fundi├º├úo",

            "Otimiza├º├úo de processos administrativos",

            "Redu├º├úo de variabilidade em processos qu├¡micos"

          ]

        },

        {

          "titulo": "Benchmarking",

          "definicao": "Processo sistem├ítico de compara├º├úo de produtos, servi├ºos e pr├íticas organizacionais com os melhores do mercado (benchmarks), visando identificar oportunidades de melhoria e superar o desempenho da concorr├¬ncia. Pode ser competitivo, funcional ou interno.",

          "topicos": [

            "Benchmarking competitivo",

            "Benchmarking funcional",

            "Indicadores de compara├º├úo",

            "An├ílise de lacunas (gap analysis)"

          ],

          "formula": "",

          "aplicacoes": [

            "Compara├º├úo de OEE com l├¡deres do setor",

            "Identifica├º├úo de melhores pr├íticas log├¡sticas",

            "An├ílise de custos de qualidade frente ├á concorr├¬ncia"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Carpinetti, L. C. R. Gestão da Qualidade: Conceitos e Técnicas. 3. ed. São Paulo: Atlas, 2012."},
      {"tipo": "Norma", "ref": "ABNT. NBR ISO 9001:2015 - Sistema de Gestão da Qualidade. Rio de Janeiro: ABNT, 2015."},
      {"tipo": "Livro", "ref": "Paladini, E. P. Gestão da Qualidade: Teoria e Prática. 4. ed. São Paulo: Atlas, 2019."},
      {"tipo": "Livro", "ref": "Costa, A. F. B.; Epprecht, E. K.; Carpinetti, L. C. R. Controle Estatístico de Qualidade. 2. ed. São Paulo: Atlas, 2005."},
      {"tipo": "Livro", "ref": "Campos, V. F. TQC: Controle da Qualidade Total no Estilo Japonês. 9. ed. Nova Lima: Falconi, 2014."}
    ]},

    {

      "id": "lean",

      "nome": "Lean Manufacturing",

      "icone": "package",

      "cor": "#d97706",

      "descricao": "Produ├º├úo enxuta: elimina├º├úo de desperd├¡cios, fluxo cont├¡nuo e melhoria cont├¡nua.",

      "subtopicos": [

        {

          "titulo": "Produ├º├úo enxuta",

          "definicao": "Filosofia de gest├úo originada do Sistema Toyota de Produ├º├úo que busca maximizar o valor ao cliente eliminando sistematicamente desperd├¡cios. Opera com menos recursos (estoque, espa├ºo, m├úo de obra) e maior flexibilidade, produzindo exatamente o necess├írio no momento necess├írio.",

          "topicos": [

            "Sistema Toyota de Produ├º├úo",

            "Valor sob perspectiva do cliente",

            "Fluxo puxado",

            "Melhoria cont├¡nua"

          ],

          "formula": "",

          "aplicacoes": [

            "Transforma├º├úo lean em ind├║strias de manufatura",

            "Redu├º├úo de lead time em processos",

            "Implementa├º├úo de c├®lulas de produ├º├úo"

          ]

        },

        {

          "titulo": "Elimina├º├úo dos 8 desperd├¡cios (Muda)",

          "definicao": "Identifica├º├úo e remo├º├úo das oito categorias de atividades que n├úo agregam valor: superprodu├º├úo, espera, transporte, excesso de processamento, estoque, movimenta├º├úo, defeitos e talento subutilizado. O acr├┤nimo DOWNTIME resume cada desperd├¡cio.",

          "topicos": [

            "Superprodu├º├úo",

            "Espera",

            "Transporte",

            "Superprocessamento",

            "Estoque excessivo",

            "Movimenta├º├úo",

            "Defeitos",

            "Talento subutilizado"

          ],

          "formula": "",

          "aplicacoes": [

            "Mapeamento de desperd├¡cios em linhas de montagem",

            "Redu├º├úo de movimenta├º├úo em almoxarifados",

            "Elimina├º├úo de esperas em processos administrativos"

          ]

        },

        {

          "titulo": "Just in Time (JIT)",

          "definicao": "Pilar do Lean Manufacturing que preconiza produzir apenas o necess├írio, na quantidade necess├íria e no momento necess├írio. Elimina estoques intermedi├írios, reduz lead times e exp├Áe problemas ocultos no fluxo produtivo atrav├®s da redu├º├úo dos estoques de prote├º├úo.",

          "topicos": [

            "Fluxo cont├¡nuo",

            "Takt time",

            "Sistema puxado",

            "Kanban"

          ],

          "formula": "",

          "aplicacoes": [

            "Abastecimento sincronizado de linhas de montagem",

            "Produ├º├úo sob demanda em ind├║stria de eletr├┤nicos",

            "Redu├º├úo dr├ística de WIP"

          ]

        },

        {

          "titulo": "Kanban",

          "definicao": "Sistema visual de sinaliza├º├úo que controla o fluxo de materiais e a produ├º├úo por meio de cart├Áes ou sinais eletr├┤nicos. Opera como um sistema puxado: cada processo retira do anterior somente o que precisa, na quantidade indicada pelo kanban.",

          "topicos": [

            "Kanban de produ├º├úo",

            "Kanban de movimenta├º├úo",

            "Cart├úo kanban",

            "Loop kanban"

          ],

          "formula": "N┬║ kanbans = (D ├ù L ├ù (1 + S)) / Q",

          "aplicacoes": [

            "Abastecimento de linhas na ind├║stria automotiva",

            "Gest├úo visual de estoques intermedi├írios",

            "Sinaliza├º├úo de reposi├º├úo em supermercados"

          ]

        },

        {

          "titulo": "Heijunka ÔÇö Nivelamento da produ├º├úo",

          "definicao": "T├®cnica de nivelamento do volume e mix de produ├º├úo para absorver flutua├º├Áes de demanda sem gerar picos de produ├º├úo ou estoques excessivos. Distribui a produ├º├úo de diferentes modelos em pequenos lotes ao longo do dia, estabilizando a carga de trabalho.",

          "topicos": [

            "Sequenciamento nivelado",

            "Caixa Heijunka",

            "Produ├º├úo em pequenos lotes",

            "Pico de produ├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Nivelamento de modelos em montadoras",

            "Programa├º├úo nivelada em ind├║stria de alimentos",

            "Redu├º├úo de flutua├º├úo na carga fabril"

          ]

        },

        {

          "titulo": "Jidoka ÔÇö Automa├º├úo com toque humano",

          "definicao": "Segundo pilar do Lean, confere ├ás m├íquinas e operadores a capacidade de detectar anormalidades e parar imediatamente a produ├º├úo, evitando a gera├º├úo de defeitos em s├®rie. Significa \"automa├º├úo com intelig├¬ncia humana\", combinando m├íquina e autonomia.",

          "topicos": [

            "Parada autom├ítica",

            "Andon",

            "Poka-yoke",

            "Separa├º├úo homem-m├íquina"

          ],

          "formula": "",

          "aplicacoes": [

            "Sensores de quebra de ferramenta em CNC",

            "Sistemas de parada por torque em montagem",

            "Detec├º├úo autom├ítica de n├úo conformidades"

          ]

        },

        {

          "titulo": "Andon",

          "definicao": "Sistema de sinaliza├º├úo visual e sonora que alerta sobre anormalidades na linha de produ├º├úo, permitindo parada imediata para corre├º├úo. Geralmente usa pain├®is luminosos com cores (verde = normal, amarelo = alerta, vermelho = parada) para comunica├º├úo em tempo real.",

          "topicos": [

            "Painel visual",

            "Sinaliza├º├úo de problemas",

            "Parada de linha",

            "Resposta r├ípida"

          ],

          "formula": "",

          "aplicacoes": [

            "Ch├úo de f├íbrica automotivo",

            "Linhas de montagem de eletrodom├®sticos",

            "Sistemas de chamada de manuten├º├úo"

          ]

        },

        {

          "titulo": "Takt Time",

          "definicao": "Ritmo de produ├º├úo necess├írio para atender ├á demanda do cliente no tempo dispon├¡vel. ├ë a frequ├¬ncia com que uma pe├ºa ou produto deve ser produzido para sincronizar a produ├º├úo com as vendas. Serve como refer├¬ncia para o balanceamento de linhas.",

          "topicos": [

            "Ritmo da demanda",

            "Tempo dispon├¡vel vs necess├írio",

            "Sincroniza├º├úo produ├º├úo-venda",

            "Balanceamento"

          ],

          "formula": "Takt Time = Tempo Dispon├¡vel / Demanda do Cliente",

          "aplicacoes": [

            "Dimensionamento de linhas de produ├º├úo",

            "Defini├º├úo do n├║mero de operadores necess├írios",

            "Avalia├º├úo se a f├íbrica atende ao volume demandado"

          ]

        },

        {

          "titulo": "Tempo de ciclo",

          "definicao": "Intervalo de tempo entre a produ├º├úo de duas unidades consecutivas em um processo produtivo. Representa a capacidade real da opera├º├úo e deve ser menor ou igual ao takt time para que a demanda seja atendida sem atrasos.",

          "topicos": [

            "Tempo de opera├º├úo",

            "Tempo de m├íquina",

            "Tempo de setup",

            "Lead time"

          ],

          "formula": "Tempo de Ciclo = Tempo Total de Opera├º├úo / N┬║ de Pe├ºas Produzidas",

          "aplicacoes": [

            "Medi├º├úo de produtividade em c├®lulas de manufatura",

            "Compara├º├úo com takt time para identificar gargalos",

            "An├ílise de capacidade de equipamentos"

          ]

        },

        {

          "titulo": "Fluxo cont├¡nuo",

          "definicao": "Estado ideal da produ├º├úo enxuta no qual os produtos se movem de uma etapa para a seguinte sem paradas, filas ou estoques intermedi├írios. Cada pe├ºa ├® processada e imediatamente transferida ├á pr├│xima opera├º├úo, reduzindo drasticamente o lead time total.",

          "topicos": [

            "C├®lulas em U",

            "One-piece flow",

            "Redu├º├úo de WIP",

            "Layout enxuto"

          ],

          "formula": "",

          "aplicacoes": [

            "Reorganiza├º├úo de layout em c├®lulas de manufatura",

            "Elimina├º├úo de transportes entre processos",

            "Fluxo unit├írio em montagem de componentes"

          ]

        },

        {

          "titulo": "Value Stream Mapping (VSM)",

          "definicao": "Ferramenta de mapeamento que representa visualmente todo o fluxo de materiais e informa├º├Áes desde o fornecedor at├® o cliente final. Identifica atividades que agregam e que n├úo agregam valor, servindo como guia para o projeto do estado futuro enxuto.",

          "topicos": [

            "Estado atual",

            "Estado futuro",

            "├ìcones VSM",

            "Kaizen bursts"

          ],

          "formula": "",

          "aplicacoes": [

            "Diagn├│stico de fluxo produtivo em f├íbricas",

            "Identifica├º├úo de desperd├¡cios ocultos",

            "Plano de transforma├º├úo lean"

          ]

        },

        {

          "titulo": "Trabalho padronizado",

          "definicao": "Documenta├º├úo detalhada e padroniza├º├úo da melhor sequ├¬ncia de opera├º├Áes conhecida para cada atividade produtiva. Estabelece o m├®todo seguro, eficiente e reprodut├¡vel que serve como base para o kaizen e a garantia da qualidade consistente.",

          "topicos": [

            "Folha de opera├º├úo padr├úo",

            "Tempo padr├úo",

            "Sequ├¬ncia padronizada",

            "Estoque padr├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Cria├º├úo de instru├º├Áes de trabalho em linhas de montagem",

            "Treinamento de novos operadores",

            "Auditoria de processo padronizado"

          ]

        },

        {

          "titulo": "SMED ÔÇö Troca R├ípida de Ferramentas",

          "definicao": "Metodologia para reduzir o tempo de setup de m├íquinas e equipamentos a menos de 10 minutos. Separa as atividades de setup interno (com m├íquina parada) de externo (com m├íquina operando), convertendo atividades internas em externas para minimizar paradas.",

          "topicos": [

            "Setup interno e externo",

            "Opera├º├Áes paralelas",

            "Padroniza├º├úo de ferramentas",

            "Cunhas e dispositivos de fixa├º├úo r├ípida"

          ],

          "formula": "",

          "aplicacoes": [

            "Redu├º├úo de setup em prensas hidr├íulicas",

            "Troca r├ípida em m├íquinas injetoras",

            "Flexibiliza├º├úo de linhas de envase"

          ]

        },

        {

          "titulo": "TPM ÔÇö Manuten├º├úo Produtiva Total",

          "definicao": "Programa de manuten├º├úo que envolve todos os colaboradores na maximiza├º├úo da efici├¬ncia dos equipamentos. Busca zero quebra, zero defeito e zero acidente por meio de manuten├º├úo aut├┤noma, manuten├º├úo planejada e treinamento cont├¡nuo.",

          "topicos": [

            "Manuten├º├úo aut├┤noma",

            "Manuten├º├úo planejada",

            "OEE",

            "6 grandes perdas"

          ],

          "formula": "OEE = Disponibilidade ├ù Performance ├ù Qualidade",

          "aplicacoes": [

            "Programas TPM em ind├║strias de processo cont├¡nuo",

            "Aumento de vida ├║til de m├íquinas ferramenta",

            "Redu├º├úo de paradas n├úo planejadas"

          ]

        },

        {

          "titulo": "Gest├úo visual",

          "definicao": "Conjunto de pr├íticas que tornam as informa├º├Áes do processo vis├¡veis, intuitivas e acess├¡veis a todos no ambiente de trabalho. Quadros kanban, pain├®is andon, marca├º├Áes de piso (shadow boards) e gr├íficos de desempenho s├úo exemplos t├¡picos.",

          "topicos": [

            "Pain├®is de indicadores",

            "Shadow boards",

            "Sinaliza├º├úo de ch├úo",

            "Quadros de gest├úo ├á vista"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de indicadores em reuni├Áes di├írias",

            "Organiza├º├úo visual de ferramentas",

            "Acompanhamento de produ├º├úo em tempo real"

          ]

        },

        {

          "titulo": "Mura e Muri",

          "definicao": "Mura representa a varia├º├úo ou desn├¡vel no ritmo de produ├º├úo que causa desbalanceamento e superlota├º├úo entre processos. Muri significa sobrecarga de equipamentos ou operadores al├®m dos limites razo├íveis. Ambos geram desperd├¡cios e devem ser eliminados junto com o muda.",

          "topicos": [

            "Varia├º├úo de demanda",

            "Sobrecarga de trabalho",

            "Nivelamento (Heijunka)",

            "Capacidade vs carga"

          ],

          "formula": "",

          "aplicacoes": [

            "Nivelamento de carga de trabalho",

            "Redu├º├úo de horas extras excessivas",

            "Preven├º├úo de les├Áes por esfor├ºo repetitivo"

          ]

        },

        {

          "titulo": "Gemba Walk",

          "definicao": "Pr├ítica de lideran├ºa em que gestores v├úo at├® o gemba (local real onde o valor ├® criado) para observar processos, fazer perguntas e identificar oportunidades de melhoria. N├úo ├® inspe├º├úo, mas uma forma de respeito e apoio ao time operacional.",

          "topicos": [

            "Observa├º├úo no ch├úo de f├íbrica",

            "Lideran├ºa lean",

            "Conversa com operadores",

            "Identifica├º├úo de desperd├¡cios"

          ],

          "formula": "",

          "aplicacoes": [

            "Rotina de gest├úo di├íria em ind├║strias",

            "Identifica├º├úo de anormalidades no posto de trabalho",

            "Desenvolvimento de lideran├ºa lean"

          ]

        },

        {

          "titulo": "Hoshin Kanri",

          "definicao": "M├®todo de desdobramento da estrat├®gia organizacional em metas e planos de a├º├úo em todos os n├¡veis hier├írquicos. Alinha a dire├º├úo estrat├®gica com a execu├º├úo operacional usando o conceito de catchball para garantir o comprometimento de toda a organiza├º├úo.",

          "topicos": [

            "Matriz X",

            "Desdobramento de metas",

            "Catchball",

            "Revis├úo peri├│dica"

          ],

          "formula": "",

          "aplicacoes": [

            "Desdobramento de metas anuais em plantas fabris",

            "Alinhamento estrat├®gico de indicadores",

            "Gest├úo por diretrizes em grupos empresariais"

          ]

        },

        {

          "titulo": "Relat├│rio A3",

          "definicao": "Ferramenta padronizada de solu├º├úo de problemas estruturada em uma ├║nica folha A3, contendo: contexto, estado atual, an├ílise de causas, estado futuro, plano de a├º├úo e indicadores. Promove pensamento estruturado, concis├úo e foco no m├®todo PDCA.",

          "topicos": [

            "A3 de proposta",

            "A3 de solu├º├úo de problemas",

            "A3 de status",

            "PDCA no A3"

          ],

          "formula": "",

          "aplicacoes": [

            "Documenta├º├úo de projetos de melhoria",

            "An├ílise de desvios de qualidade",

            "Propostas de investimento e mudan├ºa"

          ]

        },

        {

          "titulo": "Chaku-Chaku",

          "definicao": "M├®todo de opera├º├úo em que o operador carrega e descarrega pe├ºas em m├║ltiplas m├íquinas dispostas em sequ├¬ncia, caminhando de uma ├á outra. Cada m├íquina processa automaticamente ap├│s o carregamento, permitindo que um operador alimente v├írias m├íquinas simultaneamente.",

          "topicos": [

            "C├®lula em U",

            "Multifuncionalidade",

            "Automa├º├úo de ciclo",

            "Separa├º├úo homem-m├íquina"

          ],

          "formula": "",

          "aplicacoes": [

            "C├®lulas de usinagem com m├║ltiplos equipamentos",

            "Linhas de montagem automatizadas com supervis├úo humana",

            "Fabrica├º├úo de componentes met├ílicos"

          ]

        },

        {

          "titulo": "Supermercado de linha",

          "definicao": "├ürea de armazenamento descentralizado localizada pr├│xima aos pontos de uso, que opera sob o princ├¡pio do sistema puxado. O processo cliente retira itens do supermercado, e o processo fornecedor rep├Áe exatamente o que foi consumido, gerando um fluxo controlado.",

          "topicos": [

            "Sistema puxado",

            "Ponto de reposi├º├úo",

            "Kanban de abastecimento",

            "Gest├úo visual de estoque"

          ],

          "formula": "",

          "aplicacoes": [

            "Abastecimento de componentes em linhas de montagem",

            "Estoque descentralizado em c├®lulas de produ├º├úo",

            "Reposi├º├úo puxada em almoxarifados"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Ohno, T. O Sistema Toyota de Produção: Além da Produção em Larga Escala. Porto Alegre: Bookman, 1997."},
      {"tipo": "Livro", "ref": "Shingo, S. O Sistema Toyota de Produção. 2. ed. Porto Alegre: Bookman, 1996."},
      {"tipo": "Livro", "ref": "Womack, J. P.; Jones, D. T.; Roos, D. A Máquina que Mudou o Mundo. Rio de Janeiro: Campus, 2004."},
      {"tipo": "Livro", "ref": "Liker, J. K. O Modelo Toyota: 14 Princípios de Gestão. Porto Alegre: Bookman, 2005."},
      {"tipo": "Livro", "ref": "Rother, M.; Shook, J. Aprendendo a Enxergar. São Paulo: Lean Institute Brasil, 2003."}
    ]},

    {

      "id": "logistica",

      "nome": "Log├¡stica",

      "icone": "truck",

      "cor": "#7c3aed",

      "descricao": "Transporte, distribui├º├úo, armazenagem e gest├úo log├¡stica integrada.",

      "subtopicos": [

        {

          "titulo": "Transporte e modais",

          "definicao": "Atividade log├¡stica que movimenta materiais e produtos entre pontos da cadeia de suprimentos. Os principais modais s├úo: rodovi├írio (mais flex├¡vel no Brasil), ferrovi├írio (grandes volumes), aquavi├írio (baixo custo), a├®reo (alta velocidade) e dutovi├írio (fluxo cont├¡nuo).",

          "topicos": [

            "Modal rodovi├írio",

            "Modal ferrovi├írio",

            "Modal aquavi├írio",

            "Multimodalidade e intermodalidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Sele├º├úo de modal para exporta├º├úo de gr├úos",

            "Distribui├º├úo urbana de encomendas",

            "Transporte de cargas perigosas"

          ]

        },

        {

          "titulo": "Distribui├º├úo f├¡sica",

          "definicao": "Conjunto de opera├º├Áes respons├íveis por disponibilizar o produto acabado ao consumidor final no local e momento certos. Envolve armazenagem, gest├úo de pedidos, separa├º├úo, carregamento e transporte de entrega, sendo o elo final entre a produ├º├úo e o mercado.",

          "topicos": [

            "Canais de distribui├º├úo",

            "Centros de distribui├º├úo",

            "Entregas last mile",

            "N├¡vel de servi├ºo"

          ],

          "formula": "",

          "aplicacoes": [

            "Estrutura├º├úo de rede de distribui├º├úo regional",

            "Otimiza├º├úo de rotas de entrega",

            "Estrat├®gias de distribui├º├úo direta vs indireta"

          ]

        },

        {

          "titulo": "Armazenagem e centros de distribui├º├úo",

          "definicao": "Atividades de guarda organizada de materiais e produtos em instala├º├Áes planejadas, combinando espa├ºos f├¡sicos, equipamentos de movimenta├º├úo e sistemas de informa├º├úo. Centros de distribui├º├úo s├úo armaz├®ns focalizados na r├ípida movimenta├º├úo e expedi├º├úo de produtos.",

          "topicos": [

            "Layout de armaz├®m",

            "Endere├ºamento",

            "Equipamentos de movimenta├º├úo",

            "Gest├úo por zonas"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de layout de CD",

            "Dimensionamento de ├íreas de armazenagem",

            "Automa├º├úo de armaz├®ns com esteiras e sorters"

          ]

        },

        {

          "titulo": "Cross docking",

          "definicao": "Opera├º├úo log├¡stica em que a carga recebida ├® imediatamente transferida para a expedi├º├úo sem passar pela estocagem, reduzindo custos de armazenagem. Pode ser do tipo pr├®-distribu├¡do (carga j├í separada por destino) ou consolidado (reagrupado no CD).",

          "topicos": [

            "Cross docking pr├®-distribu├¡do",

            "Cross docking consolidado",

            "Flow-through",

            "Lead time reduzido"

          ],

          "formula": "",

          "aplicacoes": [

            "Centros de distribui├º├úo de supermercados",

            "Opera├º├Áes de e-commerce com alta rotatividade",

            "Recebimento e expedi├º├úo sincronizados em montadoras"

          ]

        },

        {

          "titulo": "Milk Run",

          "definicao": "Roteiro de coleta programada em que um ve├¡culo passa por m├║ltiplos fornecedores em um trajeto definido para consolidar cargas menores em uma ├║nica viagem at├® a f├íbrica. Reduz custos de frete, frequ├¬ncia de entregas e estoque em tr├ónsito.",

          "topicos": [

            "Roteiro de coleta",

            "Janela de tempo",

            "Consolida├º├úo de cargas",

            "Abastecimento JIT"

          ],

          "formula": "",

          "aplicacoes": [

            "Abastecimento de linhas em montadoras",

            "Coleta de insumos de fornecedores regionais",

            "Redu├º├úo de custos log├¡sticos inbound"

          ]

        },

        {

          "titulo": "Gest├úo de frotas",

          "definicao": "Administra├º├úo dos ve├¡culos utilizados no transporte de cargas, incluindo aquisi├º├úo, manuten├º├úo, controle de custos, roteiriza├º├úo e monitoramento. Busca maximizar a disponibilidade e produtividade dos ve├¡culos enquanto minimiza custos operacionais e de combust├¡vel.",

          "topicos": [

            "Rastreamento veicular",

            "Manuten├º├úo preventiva",

            "Custo por km rodado",

            "Renova├º├úo de frota"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de frotas de entregas urbanas",

            "Monitoramento de caminh├Áes via telemetria",

            "Planejamento de manuten├º├úo com base em horas"

          ]

        },

        {

          "titulo": "Fretes e tabelas de frete",

          "definicao": "Sistema de precifica├º├úo do transporte de cargas, que considera vari├íveis como dist├óncia, peso, cubicagem, tipo de carga e prazo. As tabelas de frete definem os valores de refer├¬ncia e podem ser negociadas entre embarcadores e transportadoras.",

          "topicos": [

            "Frete peso vs frete valor",

            "Ped├ígio e taxa de risco",

            "Tabela ANTT",

            "Negocia├º├úo de fretes"

          ],

          "formula": "Frete = (Dist├óncia ├ù Custo Vari├ível) + Custo Fixo + Margem",

          "aplicacoes": [

            "C├ílculo de frete para or├ºamentos",

            "Compara├º├úo entre transportadoras",

            "An├ílise de rentabilidade de cargas"

          ]

        },

        {

          "titulo": "Cadeia log├¡stica integrada",

          "definicao": "Vis├úo sist├¬mica que coordena e integra todos os fluxos log├¡sticos ÔÇö suprimentos, produ├º├úo e distribui├º├úo ÔÇö como um ├║nico sistema. Busca eliminar silos funcionais, compartilhar informa├º├Áes em tempo real e otimizar o desempenho global da cadeia.",

          "topicos": [

            "Integra├º├úo supply chain",

            "Fluxo de informa├º├Áes",

            "Colabora├º├úo entre elos",

            "Indicadores log├¡sticos"

          ],

          "formula": "",

          "aplicacoes": [

            "Integra├º├úo entre PCP e log├¡stica de distribui├º├úo",

            "Compartilhamento de previs├úo de demanda com fornecedores",

            "Sincroniza├º├úo de opera├º├Áes inbound e outbound"

          ]

        },

        {

          "titulo": "Log├¡stica reversa",

          "definicao": "Processo de planejamento e opera├º├úo do fluxo de retorno de produtos, embalagens e materiais do ponto de consumo ao ponto de origem. Visa o reaproveitamento, reciclagem ou descarte adequado, sendo obrigat├│ria por lei em setores como eletroeletr├┤nicos e embalagens.",

          "topicos": [

            "P├│s-consumo",

            "P├│s-venda",

            "Centros de triagem",

            "Pol├¡tica Nacional de Res├¡duos S├│lidos"

          ],

          "formula": "",

          "aplicacoes": [

            "Log├¡stica reversa de embalagens de agrot├│xicos",

            "Retorno de produtos defeituosos para recall",

            "Reciclagem de res├¡duos eletr├┤nicos"

          ]

        },

        {

          "titulo": "Log├¡stica internacional",

          "definicao": "Conjunto de opera├º├Áes de transporte, documenta├º├úo, desembara├ºo aduaneiro e seguros para movimenta├º├úo de mercadorias entre pa├¡ses. Envolve conhecimento especializado em com├®rcio exterior, regimes aduaneiros e acordos comerciais bilaterais e multilaterais.",

          "topicos": [

            "Desembara├ºo aduaneiro",

            "Documenta├º├úo internacional",

            "Regimes aduaneiros especiais",

            "Drawback"

          ],

          "formula": "",

          "aplicacoes": [

            "Exporta├º├úo de produtos manufaturados",

            "Importa├º├úo de insumos industriais",

            "Opera├º├Áes de com├®rcio exterior via portos e aeroportos"

          ]

        },

        {

          "titulo": "Incoterms 2024",

          "definicao": "Conjunto de 11 termos padronizados pela C├ómara de Com├®rcio Internacional (CCI) que definem as responsabilidades, riscos e custos entre comprador e vendedor em transa├º├Áes internacionais. Incluem termos para qualquer modal (EXW, FCA, CPT, CIP, DPU, DAP, DDP) e para transporte aquavi├írio (FAS, FOB, CFR, CIF).",

          "topicos": [

            "EXW ÔÇö Ex Works",

            "FOB ÔÇö Free on Board",

            "CIF ÔÇö Cost Insurance and Freight",

            "DDP ÔÇö Delivered Duty Paid"

          ],

          "formula": "",

          "aplicacoes": [

            "Defini├º├úo de responsabilidades em contratos de exporta├º├úo",

            "C├ílculo de custos log├¡sticos internacionais",

            "Negocia├º├úo de riscos entre importador e exportador"

          ]

        },

        {

          "titulo": "WMS ÔÇö Warehouse Management System",

          "definicao": "Sistema de software projetado para controlar e otimizar as opera├º├Áes de armazenagem, incluindo recebimento, endere├ºamento, estocagem, separa├º├úo (picking), embalagem e expedi├º├úo. Integra-se com ERP e utiliza tecnologias como RFID e coletores de dados.",

          "topicos": [

            "Endere├ºamento din├ómico",

            "Picking por onda",

            "Integra├º├úo ERP-WMS",

            "RFID e c├│digo de barras"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de grandes centros de distribui├º├úo",

            "Controle de estoque com rastreabilidade por lote",

            "Otimiza├º├úo de rotas de separa├º├úo"

          ]

        },

        {

          "titulo": "TMS ÔÇö Transport Management System",

          "definicao": "Sistema de gest├úo de transporte que automatiza o planejamento, execu├º├úo e monitoramento de fretes e entregas. Otimiza carregamentos, seleciona transportadoras, calcula fretes, gera documenta├º├úo e acompanha entregas em tempo real.",

          "topicos": [

            "Roteiriza├º├úo",

            "Consolida├º├úo de cargas",

            "Gest├úo de fretes",

            "Monitoramento de entregas"

          ],

          "formula": "",

          "aplicacoes": [

            "Planejamento de rotas de entregas di├írias",

            "Consolida├º├úo de cargas para reduzir fretes",

            "Acompanhamento de performance de transportadoras"

          ]

        },

        {

          "titulo": "Roteiriza├º├úo de entregas",

          "definicao": "Defini├º├úo da sequ├¬ncia de paradas e trajetos mais eficiente para ve├¡culos de entrega, considerando restri├º├Áes como janelas de tempo, capacidade e dist├óncias. Utiliza algoritmos de otimiza├º├úo como o Problema do Caixeiro Viajante (PCV) e VRP (Vehicle Routing Problem).",

          "topicos": [

            "VRP cl├íssico",

            "Janelas de tempo",

            "Restri├º├Áes de capacidade",

            "Otimiza├º├úo por algoritmos"

          ],

          "formula": "",

          "aplicacoes": [

            "Roteiriza├º├úo de entregas urbanas de bebidas",

            "Otimiza├º├úo de frotas de distribui├º├úo de alimentos",

            "Planejamento de rotas de servi├ºos de campo"

          ]

        },

        {

          "titulo": "Operadores log├¡sticos",

          "definicao": "Empresas prestadoras de servi├ºos log├¡sticos terceirizados (3PL) que oferecem solu├º├Áes integradas de transporte, armazenagem, gest├úo de estoques e servi├ºos de valor agregado. Podem atuar como 4PL quando gerenciam toda a cadeia log├¡stica do contratante.",

          "topicos": [

            "3PL ÔÇö Third Party Logistics",

            "4PL ÔÇö Fourth Party Logistics",

            "Contratos de presta├º├úo de servi├ºos",

            "Indicadores SLA"

          ],

          "formula": "",

          "aplicacoes": [

            "Terceiriza├º├úo de opera├º├Áes de CD",

            "Contrata├º├úo de gest├úo de transporte dedicada",

            "Opera├º├Áes log├¡sticas integradas para e-commerce"

          ]

        },

        {

          "titulo": "Armazenagem a granel",

          "definicao": "Sistema de estocagem de materiais sem embalagem individual, geralmente gr├úos, min├®rios, l├¡quidos ou produtos qu├¡micos. Utiliza silos, tanques, e p├ítios com equipamentos espec├¡ficos para movimenta├º├úo e controle de estoque de materiais a granel.",

          "topicos": [

            "Silos e tanques",

            "P├ítios de armazenagem",

            "Controle de temperatura e umidade",

            "Equipamentos de movimenta├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Armazenagem de gr├úos em cooperativas agr├¡colas",

            "Estocagem de produtos qu├¡micos a granel",

            "Armazenagem de min├®rio de ferro em portos"

          ]

        },

        {

          "titulo": "Picking e packing",

          "definicao": "Picking ├® o processo de separa├º├úo e coleta dos itens do estoque para atender aos pedidos dos clientes. Packing ├® a embalagem e prepara├º├úo dos produtos separados para expedi├º├úo. Juntos, representam as opera├º├Áes finais do CD antes do carregamento.",

          "topicos": [

            "Picking por zona",

            "Picking por onda",

            "Picking por voz",

            "Embalagem e consolida├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Separa├º├úo de pedidos em CDs de varejo",

            "Opera├º├Áes de e-commerce com alto volume",

            "Automa├º├úo de picking com esteiras e rob├┤s"

          ]

        },

        {

          "titulo": "Gest├úo de armaz├®ns",

          "definicao": "Supervis├úo e controle das opera├º├Áes di├írias de um armaz├®m ou centro de distribui├º├úo, incluindo recebimento, estocagem, invent├írio, separa├º├úo, expedi├º├úo e seguran├ºa. Integra pessoas, processos e tecnologia para garantir efici├¬ncia, acuracidade e produtividade.",

          "topicos": [

            "Recebimento e confer├¬ncia",

            "Estocagem e endere├ºamento",

            "Invent├írio rotativo",

            "Expedi├º├úo e cross-docking"

          ],

          "formula": "",

          "aplicacoes": [

            "Rotina de gest├úo de armaz├®ns fabris",

            "Opera├º├úo de CD para distribui├º├úo nacional",

            "Implementa├º├úo de boas pr├íticas de armazenagem"

          ]

        },

        {

          "titulo": "Centros de distribui├º├úo",

          "definicao": "Instala├º├úo log├¡stica projetada para receber grandes volumes de produtos, armazen├í-los temporariamente e redistribu├¡-los em menores quantidades para m├║ltiplos destinos. Diferem de armaz├®ns convencionais pelo foco na r├ípida movimenta├º├úo e rota├º├úo de estoques.",

          "topicos": [

            "CD dedicado",

            "CD compartilhado",

            "CD regional",

            "Automa├º├úo de CD"

          ],

          "formula": "",

          "aplicacoes": [

            "Rede de CDs de rede varejista",

            "CD de e-commerce para entregas r├ípidas",

            "Cross-docking em CDs de atacado"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Novaes, A. G. Logística e Gerenciamento da Cadeia de Distribuição. 5. ed. Rio de Janeiro: GEN Atlas, 2021."},
      {"tipo": "Livro", "ref": "Ballou, R. H. Gerenciamento da Cadeia de Suprimentos/Logística Empresarial. 5. ed. Porto Alegre: Bookman, 2006."},
      {"tipo": "Livro", "ref": "Bowersox, D. J.; Closs, D. J.; Cooper, M. B. Gestão Logística da Cadeia de Suprimentos. 4. ed. Porto Alegre: AMGH, 2014."},
      {"tipo": "Livro", "ref": "Dias, M. A. P. Administração de Materiais: Uma Abordagem Logística. 7. ed. São Paulo: Atlas, 2019."},
      {"tipo": "Livro", "ref": "Christopher, M. Logística e Gerenciamento da Cadeia de Suprimentos. 5. ed. São Paulo: Cengage, 2018."}
    ]},

    {

      "id": "supply-chain",

      "nome": "Supply Chain",

      "icone": "layers",

      "cor": "#0891b2",

      "descricao": "Gest├úo da cadeia de suprimentos, compras e relacionamento com fornecedores.",

      "subtopicos": [

        {

          "titulo": "Cadeia de suprimentos integrada",

          "definicao": "Rede interligada de organiza├º├Áes, pessoas, atividades e informa├º├Áes envolvidas no fluxo de produtos e servi├ºos desde os fornecedores de mat├®ria-prima at├® o consumidor final. A gest├úo integrada busca coordenar todos os elos para maximizar o valor gerado ao cliente e reduzir custos totais.",

          "topicos": [

            "Integra├º├úo vertical",

            "Integra├º├úo horizontal",

            "Parcerias estrat├®gicas",

            "Governan├ºa da cadeia"

          ],

          "formula": "",

          "aplicacoes": [

            "Coordena├º├úo entre fabricante e rede de distribui├º├úo",

            "Share de informa├º├Áes de demanda com fornecedores",

            "Gest├úo colaborativa de estoques (CPFR)"

          ]

        },

        {

          "titulo": "Compras e suprimentos",

          "definicao": "Fun├º├úo organizacional respons├ível pela aquisi├º├úo de materiais, insumos, servi├ºos e equipamentos necess├írios ├á opera├º├úo da empresa. Inclui sele├º├úo de fornecedores, negocia├º├úo, emiss├úo de pedidos e gest├úo de contratos, visando menor custo total e seguran├ºa de abastecimento.",

          "topicos": [

            "Ciclo de compras",

            "Negocia├º├úo estrat├®gica",

            "Gest├úo de contratos",

            "Compras sustent├íveis"

          ],

          "formula": "",

          "aplicacoes": [

            "Aquisi├º├úo de mat├®rias-primas para ind├║stria",

            "Compra de servi├ºos de manuten├º├úo",

            "E-procurement em grandes organiza├º├Áes"

          ]

        },

        {

          "titulo": "Planejamento de materiais",

          "definicao": "Processo de determinar as necessidades futuras de materiais, componentes e insumos para atender ao plano de produ├º├úo. Utiliza dados de demanda, estoques e lead times para calcular as quantidades e momentos de reposi├º├úo, evitando faltas ou excessos.",

          "topicos": [

            "MRP",

            "Bill of Materials (BOM)",

            "Lead time de reposi├º├úo",

            "Estoque de seguran├ºa"

          ],

          "formula": "Necessidade L├¡quida = Necessidade Bruta ÔêÆ Estoque Dispon├¡vel ÔêÆ Recebimentos Programados",

          "aplicacoes": [

            "Planejamento de insumos em ind├║stria qu├¡mica",

            "Gest├úo de materiais indiretos (MRO)",

            "Abastecimento programado de linhas de produ├º├úo"

          ]

        },

        {

          "titulo": "Gest├úo de fornecedores",

          "definicao": "Conjunto de pr├íticas e processos para gerenciar o relacionamento com fornecedores, desde a sele├º├úo e contrata├º├úo at├® a avalia├º├úo de desempenho e desenvolvimento. Busca construir parcerias de longo prazo baseadas em confian├ºa, qualidade, custo e inova├º├úo.",

          "topicos": [

            "Segmenta├º├úo de fornecedores",

            "Avalia├º├úo de desempenho",

            "Desenvolvimento de fornecedores",

            "Gest├úo de riscos"

          ],

          "formula": "",

          "aplicacoes": [

            "Programas de desenvolvimento de fornecedores automotivos",

            "Scorecard de fornecedores estrat├®gicos",

            "Gest├úo de contratos de longo prazo"

          ]

        },

        {

          "titulo": "Homologa├º├úo de fornecedores",

          "definicao": "Processo formal de qualifica├º├úo e aprova├º├úo de novos fornecedores para garantir que atendem aos requisitos t├®cnicos, de qualidade, capacidade produtiva, financeiros e socioambientais da empresa contratante. Inclui auditorias, visitas t├®cnicas e an├ílise de documentos.",

          "topicos": [

            "Auditoria de fornecedores",

            "Qualifica├º├úo t├®cnica",

            "Certifica├º├Áes exigidas",

            "Cadastro de fornecedores"

          ],

          "formula": "",

          "aplicacoes": [

            "Homologa├º├úo para ind├║stria automotiva (PPAP)",

            "Qualifica├º├úo de fornecedores de servi├ºos log├¡sticos",

            "Processo de onboarding de fornecedores de TI"

          ]

        },

        {

          "titulo": "Gest├úo de contratos",

          "definicao": "Processo estruturado de cria├º├úo, execu├º├úo, monitoramento e encerramento de contratos com fornecedores e parceiros. Inclui defini├º├úo de cl├íusulas, prazos, pre├ºos, n├¡veis de servi├ºo (SLAs) e condi├º├Áes de renova├º├úo, garantindo conformidade e mitiga├º├úo de riscos.",

          "topicos": [

            "Cl├íusulas contratuais",

            "SLA ÔÇö Service Level Agreement",

            "Reajustes e revis├Áes",

            "Gest├úo de aditivos"

          ],

          "formula": "",

          "aplicacoes": [

            "Contratos de fornecimento de mat├®ria-prima",

            "Contratos de presta├º├úo de servi├ºos log├¡sticos",

            "Acordos de confidencialidade (NDA)"

          ]

        },

        {

          "titulo": "S&OP ÔÇö Sales and Operations Planning",

          "definicao": "Processo integrado de planejamento t├ítico que alinha as ├íreas de vendas, marketing, produ├º├úo, log├¡stica e finan├ºas em um ├║nico plano consensado para horizontes de 6 a 18 meses. Re├║ne previs├Áes de demanda, planos de suprimento e an├ílise de capacidade em reuni├Áes mensais.",

          "topicos": [

            "Previs├úo de demanda",

            "Plano de suprimento",

            "Reuni├úo executiva",

            "Indicadores de acur├ícia"

          ],

          "formula": "",

          "aplicacoes": [

            "Alinhamento entre vendas e produ├º├úo em montadoras",

            "Planejamento integrado em ind├║stria farmac├¬utica",

            "Revis├úo mensal de planos em bens de consumo"

          ]

        },

        {

          "titulo": "Planejamento integrado",

          "definicao": "Abordagem que consolida os planos funcionais (vendas, produ├º├úo, compras, distribui├º├úo) em um ├║nico plano mestre, otimizando trade-offs entre custo, n├¡vel de servi├ºo e utiliza├º├úo de capacidade. Utiliza modelos matem├íticos e simula├º├úo para cen├írios.",

          "topicos": [

            "Planejamento t├ítico integrado",

            "Simula├º├úo de cen├írios",

            "Otimiza├º├úo multiobjetivo",

            "Trade-off custo ├ù servi├ºo"

          ],

          "formula": "",

          "aplicacoes": [

            "Integra├º├úo planos de demanda e suprimento",

            "Simula├º├úo de cen├írios de ruptura",

            "Planejamento agregado de recursos"

          ]

        },

        {

          "titulo": "Gest├úo de estoques",

          "definicao": "Conjunto de pol├¡ticas, m├®todos e a├º├Áes para determinar os n├¡veis adequados de cada item em estoque, equilibrando os custos de manuten├º├úo contra os riscos e custos de falta. Inclui classifica├º├úo ABC, defini├º├úo de ponto de pedido, lotes econ├┤micos e estoques de seguran├ºa.",

          "topicos": [

            "Curva ABC",

            "Ponto de pedido",

            "Estoque de seguran├ºa",

            "Giro de estoque"

          ],

          "formula": "PP = (DM ├ù TR) + ES",

          "aplicacoes": [

            "Defini├º├úo de pol├¡ticas de estoque por categoria",

            "Redu├º├úo de rupturas em CDs",

            "Otimiza├º├úo de n├¡veis de estoque na cadeia"

          ]

        },

        {

          "titulo": "E-procurement",

          "definicao": "Sistemas eletr├┤nicos de compras baseados em plataformas web que automatizam o ciclo de compras, desde a requisi├º├úo at├® o pagamento. Integram-se com ERPs, utilizam cat├ílogos eletr├┤nicos e permitem leil├Áes reversos, cota├º├Áes online e contratos digitais.",

          "topicos": [

            "Cat├ílogo eletr├┤nico",

            "Leil├úo reverso",

            "Cota├º├úo online",

            "Integra├º├úo com ERP"

          ],

          "formula": "",

          "aplicacoes": [

            "Compras de materiais indiretos via marketplace",

            "Leil├úo eletr├┤nico para redu├º├úo de custos",

            "Automa├º├úo do fluxo de aprova├º├úo de compras"

          ]

        },

        {

          "titulo": "RFQ e RFP",

          "definicao": "RFQ (Request for Quotation) ├® uma solicita├º├úo de cota├º├úo para itens claramente especificados. RFP (Request for Proposal) ├® uma solicita├º├úo de proposta para solu├º├Áes complexas. Ambos s├úo processos formais de cota├º├úo que permitem comparar fornecedores de forma estruturada.",

          "topicos": [

            "RFQ ÔÇö Solicita├º├úo de cota├º├úo",

            "RFP ÔÇö Solicita├º├úo de proposta",

            "RFI ÔÇö Solicita├º├úo de informa├º├úo",

            "Matriz de avalia├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Cota├º├úo de mat├®rias-primas padronizadas",

            "Contrata├º├úo de servi├ºos complexos de log├¡stica",

            "Sele├º├úo de fornecedores de TI por RFP"

          ]

        },

        {

          "titulo": "Avalia├º├úo de desempenho de fornecedores",

          "definicao": "Processo sistem├ítico de medi├º├úo e an├ílise do desempenho dos fornecedores com base em crit├®rios como qualidade, prazo, pre├ºo, capacidade de resposta e inova├º├úo. Utiliza scorecards, dashboards e reuni├Áes peri├│dicas de revis├úo para impulsionar a melhoria cont├¡nua.",

          "topicos": [

            "Scorecard de fornecedores",

            "KPIs log├¡sticos",

            "Balanced Scorecard",

            "Reuni├Áes de revis├úo"

          ],

          "formula": "OTIF = (Pedidos entregues no prazo e completos / Total de pedidos) ├ù 100%",

          "aplicacoes": [

            "Avalia├º├úo trimestral de transportadoras",

            "Programa de desenvolvimento de fornecedores",

            "Premia├º├úo de melhores fornecedores do ano"

          ]

        },

        {

          "titulo": "Gest├úo de categorias",

          "definicao": "Abordagem estrat├®gica de compras que segmenta os gastos da empresa em categorias homog├¬neas e desenvolve estrat├®gias espec├¡ficas para cada uma. Analisa o mercado fornecedor, consolida volumes, negocia contratos globais e gerencia o relacionamento por categoria.",

          "topicos": [

            "An├ílise de gastos (spend analysis)",

            "Estrat├®gia por categoria",

            "Consolida├º├úo de fornecedores",

            "Plano de categoria"

          ],

          "formula": "",

          "aplicacoes": [

            "Estrutura├º├úo de compras por categoria em grandes grupos",

            "Redu├º├úo de custos via consolida├º├úo de fornecedores",

            "An├ílise de gastos totais por fam├¡lia de materiais"

          ]

        },

        {

          "titulo": "Supply Chain Risk Management",

          "definicao": "Processo de identifica├º├úo, avalia├º├úo e mitiga├º├úo de riscos que podem interromper o fluxo de materiais, informa├º├Áes ou finan├ºas na cadeia de suprimentos. Inclui riscos geopol├¡ticos, desastres naturais, fal├¬ncia de fornecedores, ruptura log├¡stica e ciberataques.",

          "topicos": [

            "Mapeamento de riscos",

            "Planos de conting├¬ncia",

            "Dual sourcing",

            "Resili├¬ncia da cadeia"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de riscos em cadeias globais de semicondutores",

            "Planos de conting├¬ncia para fornecedores ├║nicos",

            "Monitoramento de riscos geopol├¡ticos em tempo real"

          ]

        },

        {

          "titulo": "SCOR Model",

          "definicao": "Modelo de refer├¬ncia de processos desenvolvido pelo APICS para diagn├│stico e melhoria de cadeias de suprimentos. Estrutura-se em 6 processos principais (Plan, Source, Make, Deliver, Return, Enable) com m├®tricas padronizadas para comparar desempenho entre empresas e setores.",

          "topicos": [

            "Processos SCOR",

            "M├®tricas de n├¡vel 1",

            "Best practices",

            "Benchmarking de cadeia"

          ],

          "formula": "",

          "aplicacoes": [

            "Diagn├│stico de maturidade da cadeia",

            "Benchmarking entre plantas industriais",

            "Modelagem de processos da cadeia de suprimentos"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Chopra, S.; Meindl, P. Gestão da Cadeia de Suprimentos: Estratégia, Planejamento e Operações. 4. ed. São Paulo: Pearson, 2011."},
      {"tipo": "Livro", "ref": "Pires, S. R. I. Gestão da Cadeia de Suprimentos. 3. ed. São Paulo: Atlas, 2016."},
      {"tipo": "Livro", "ref": "Simchi-Levi, D.; Kaminsky, P.; Simchi-Levi, E. Cadeia de Suprimentos: Projeto e Gestão. 3. ed. Porto Alegre: Bookman, 2010."},
      {"tipo": "Livro", "ref": "Corrêa, H. L. Administração de Cadeia de Suprimentos e Logística: O Essencial. São Paulo: Atlas, 2014."}
    ]},

    {

      "id": "estoques",

      "nome": "Gest├úo de Estoques",

      "icone": "archive",

      "cor": "#dc2626",

      "descricao": "M├®todos e t├®cnicas para administra├º├úo eficiente de estoques industriais.",

      "subtopicos": [

        {

          "titulo": "Estoque m├¡nimo",

          "definicao": "Quantidade m├¡nima de um item que deve ser mantida em estoque para garantir a continuidade das opera├º├Áes durante o tempo de reposi├º├úo. ├ë calculado com base no consumo m├®dio di├írio e no lead time, funcionando como gatilho para iniciar o processo de compra.",

          "topicos": [

            "Consumo m├®dio di├írio",

            "Lead time de reposi├º├úo",

            "Ponto de pedido",

            "Risco de ruptura"

          ],

          "formula": "EM├¡n = CMD ├ù TR",

          "aplicacoes": [

            "Defini├º├úo de n├¡veis m├¡nimos em almoxarifado industrial",

            "Parametriza├º├úo de sistemas ERP",

            "Controle de estoques de materiais cr├¡ticos"

          ]

        },

        {

          "titulo": "Estoque m├íximo",

          "definicao": "Quantidade m├íxima desej├ível de um item em estoque, determinada pela capacidade de armazenagem, pelo capital dispon├¡vel e pela pol├¡tica de compras. Evita excessos que geram custos financeiros, riscos de obsolesc├¬ncia e ocupa├º├úo desnecess├íria de espa├ºo.",

          "topicos": [

            "Capacidade de armazenagem",

            "Capital de giro",

            "Lote econ├┤mico",

            "Obsolesc├¬ncia"

          ],

          "formula": "EM├íx = EM├¡n + Lote de Compra",

          "aplicacoes": [

            "Dimensionamento de capacidade de armaz├®ns",

            "Pol├¡ticas de compra por item",

            "Gest├úo de estoques sazonais"

          ]

        },

        {

          "titulo": "Estoque de seguran├ºa",

          "definicao": "Quantidade adicional mantida al├®m da demanda esperada para absorver varia├º├Áes da demanda e do lead time de reposi├º├úo, protegendo contra rupturas. Seu dimensionamento considera o n├¡vel de servi├ºo desejado, o desvio padr├úo da demanda e a variabilidade do suprimento.",

          "topicos": [

            "N├¡vel de servi├ºo",

            "Desvio padr├úo da demanda",

            "Lead time vari├ível",

            "Fator de seguran├ºa Z"

          ],

          "formula": "ES = Z ├ù ¤âd ├ù ÔêÜL",

          "aplicacoes": [

            "Prote├º├úo contra varia├º├Áes sazonais de venda",

            "Buffer para fornecedores com lead time inst├ível",

            "Garantia de n├¡vel de servi├ºo ao cliente"

          ]

        },

        {

          "titulo": "Giro de estoque",

          "definicao": "Indicador que mede quantas vezes o estoque de um item ├® renovado em determinado per├¡odo (geralmente um ano). Quanto maior o giro, mais eficiente ├® a gest├úo do estoque, indicando que o capital investido est├í sendo convertido em vendas rapidamente.",

          "topicos": [

            "Rotatividade do estoque",

            "Custo das vendas",

            "Estoque m├®dio",

            "Dias de cobertura"

          ],

          "formula": "Giro = Custo das Mercadorias Vendidas / Estoque M├®dio",

          "aplicacoes": [

            "Avalia├º├úo de efici├¬ncia de gest├úo de estoques",

            "Compara├º├úo de desempenho entre categorias de produtos",

            "Identifica├º├úo de itens encalhados"

          ]

        },

        {

          "titulo": "Curva ABC",

          "definicao": "M├®todo de classifica├º├úo de materiais baseado no princ├¡pio de Pareto, que separa os itens em tr├¬s categorias: A (itens de alto valor, 80% do valor, 20% dos itens), B (valor intermedi├írio) e C (baixo valor, muitos itens). Permite focar esfor├ºos nos itens de maior impacto financeiro.",

          "topicos": [

            "Classifica├º├úo A (80% valor)",

            "Classifica├º├úo B (15% valor)",

            "Classifica├º├úo C (5% valor)",

            "Frequ├¬ncia de ressuprimento"

          ],

          "formula": "",

          "aplicacoes": [

            "Prioriza├º├úo de itens A para controle rigoroso",

            "Pol├¡ticas de compra diferenciadas por classe",

            "Foco de invent├írio em itens de maior valor"

          ]

        },

        {

          "titulo": "Invent├írios f├¡sicos e rotativos",

          "definicao": "Invent├írio f├¡sico ├® a contagem total de todos os itens do estoque em uma data espec├¡fica. O invent├írio rotativo (ciclo de contagem) conta continuamente uma parcela do estoque ao longo do ano, classificada por valor (ABC), mantendo a acuracidade sem parar as opera├º├Áes.",

          "topicos": [

            "Contagem c├¡clica",

            "Acur├ícia de estoque",

            "Classifica├º├úo ABC para invent├írio",

            "Ajustes e diverg├¬ncias"

          ],

          "formula": "Acur├ícia = (N┬║ itens corretos / N┬║ itens contados) ├ù 100%",

          "aplicacoes": [

            "Contagem rotativa em CDs de grande porte",

            "Recontagem de itens classe A semanal",

            "Ajuste de diverg├¬ncias cont├íbeis de estoque"

          ]

        },

        {

          "titulo": "FIFO ÔÇö First In First Out",

          "definicao": "M├®todo de controle e avalia├º├úo de estoques no qual o primeiro item que entra no estoque ├® o primeiro a sair. ├ë amplamente utilizado para produtos perec├¡veis, itens com prazo de validade e materiais sujeitos a obsolesc├¬ncia, garantindo maior frescor e menor perda.",

          "topicos": [

            "PEPS (Portugu├¬s)",

            "Controle por lote",

            "Validade e shelf life",

            "Rastreabilidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de alimentos e bebidas",

            "Controle de medicamentos com data de validade",

            "Armazenagem de produtos qu├¡micos sens├¡veis"

          ]

        },

        {

          "titulo": "LIFO ÔÇö Last In First Out",

          "definicao": "M├®todo de avalia├º├úo de estoques em que o ├║ltimo item recebido ├® o primeiro a ser vendido ou consumido. Tem efeito fiscal em per├¡odos inflacion├írios (reduz lucro tribut├ível), mas n├úo ├® aceito pelo fisco brasileiro (Receita Federal) para fins de IRPJ e CSLL.",

          "topicos": [

            "UEPS (Portugu├¬s)",

            "Efeitos fiscais",

            "Infla├º├úo e custo",

            "N├úo permitido no Brasil"

          ],

          "formula": "",

          "aplicacoes": [

            "Avalia├º├úo de estoque para relat├│rios gerenciais",

            "An├ílise de impacto inflacion├írio",

            "Uso em pa├¡ses que permitem (EUA, IFRS)"

          ]

        },

        {

          "titulo": "FEFO ÔÇö First Expire First Out",

          "definicao": "M├®todo de movimenta├º├úo de estoques que prioriza a sa├¡da dos itens com prazo de validade mais pr├│ximo do vencimento, independentemente da data de entrada. Essencial para produtos farmac├¬uticos, alimentos perec├¡veis e itens com shelf life cr├¡tico.",

          "topicos": [

            "Controle por data de validade",

            "Shelf life",

            "Rastreabilidade por lote",

            "Redu├º├úo de perdas"

          ],

          "formula": "",

          "aplicacoes": [

            "Farm├ícias e distribuidoras de medicamentos",

            "Cadeia do frio de alimentos perec├¡veis",

            "Gest├úo de produtos sangu├¡neos e hemoderivados"

          ]

        },

        {

          "titulo": "EOQ ÔÇö Economic Order Quantity",

          "definicao": "Modelo matem├ítico desenvolvido por Ford W. Harris (1913) que determina a quantidade ideal de um pedido para minimizar os custos totais de estocagem e de pedido. Equilibra o custo de manter estoque com o custo de realizar pedidos, encontrando o lote ├│timo.",

          "topicos": [

            "Custo de pedir",

            "Custo de manter",

            "Demanda anual",

            "Modelo de Wilson"

          ],

          "formula": "Q* = ÔêÜ(2DS / H)",

          "aplicacoes": [

            "C├ílculo de lote de compra de mat├®rias-primas",

            "Defini├º├úo de lotes de ressuprimento em CDs",

            "Pol├¡tica de compras em ind├║strias de manufatura"

          ]

        },

        {

          "titulo": "Reposi├º├úo autom├ítica",

          "definicao": "Sistema que dispara ordens de compra automaticamente quando o estoque atinge o ponto de pedido, sem interven├º├úo manual. Integrado ao ERP, utiliza par├ómetros como lead time, estoque de seguran├ºa e lote econ├┤mico para definir quantidades e momentos de reposi├º├úo.",

          "topicos": [

            "Par├ómetros de reposi├º├úo",

            "Trigger de pedido",

            "Integra├º├úo com fornecedores",

            "Min-Max"

          ],

          "formula": "",

          "aplicacoes": [

            "Reposi├º├úo automatizada de materiais indiretos",

            "Abastecimento autom├ítico de linhas de produ├º├úo",

            "Sistemas VMI com fornecedores"

          ]

        },

        {

          "titulo": "Ponto de pedido",

          "definicao": "N├¡vel de estoque que dispara a emiss├úo de um novo pedido de compra ou produ├º├úo. ├ë calculado multiplicando o consumo m├®dio di├írio pelo lead time de reposi├º├úo, acrescido do estoque de seguran├ºa para cobrir varia├º├Áes.",

          "topicos": [

            "Lead time",

            "Consumo m├®dio di├írio",

            "Estoque de seguran├ºa",

            "Trigger de compra"

          ],

          "formula": "PP = (CMD ├ù TR) + ES",

          "aplicacoes": [

            "Parametriza├º├úo de sistemas de gest├úo de estoques",

            "Defini├º├úo de quando comprar cada insumo",

            "Controle de abastecimento just-in-time"

          ]

        },

        {

          "titulo": "Cobertura de estoque",

          "definicao": "Indicador que expressa o n├║mero de dias que o estoque atual ├® suficiente para atender ├á demanda m├®dia futura sem novos suprimentos. Quanto maior a cobertura, maior o capital empatado; quanto menor, maior o risco de ruptura.",

          "topicos": [

            "Dias de estoque",

            "Consumo m├®dio di├írio",

            "N├¡vel de servi├ºo",

            "Capital de giro"

          ],

          "formula": "Cobertura (dias) = Estoque Atual / Consumo M├®dio Di├írio",

          "aplicacoes": [

            "Monitoramento de n├¡vel de estoque por CD",

            "An├ílise de excesso de estoque",

            "Planejamento de ofertas e promo├º├Áes"

          ]

        },

        {

          "titulo": "N├¡vel de servi├ºo",

          "definicao": "M├®trica que mede a capacidade de atender ├á demanda dos clientes sem ruptura de estoque, expressa como percentual de itens ou pedidos atendidos no prazo. N├¡veis de servi├ºo mais altos exigem maiores estoques de seguran├ºa e implicam trade-off com custos.",

          "topicos": [

            "Fill rate",

            "OTIF (On Time In Full)",

            "Ciclo do pedido",

            "Custo da falta"

          ],

          "formula": "N├¡vel de Servi├ºo = (Pedidos Atendidos / Total de Pedidos) ├ù 100%",

          "aplicacoes": [

            "Defini├º├úo de meta de atendimento ao cliente",

            "Dimensionamento de estoque de seguran├ºa por n├¡vel de servi├ºo",

            "Avalia├º├úo de desempenho de CDs"

          ]

        },

        {

          "titulo": "Estoque pulm├úo",

          "definicao": "Estoque estrat├®gico mantido entre processos produtivos sequenciais para desacopl├í-los, absorvendo varia├º├Áes de ritmo e evitando que uma parada em uma etapa pare toda a linha ao mesmo tempo. ├ë um estoque intermedi├írio que protege o fluxo cont├¡nuo.",

          "topicos": [

            "Estoque em processo (WIP)",

            "Desacoplamento de processos",

            "Fluxo cont├¡nuo vs pulm├úo",

            "Gargalos produtivos"

          ],

          "formula": "",

          "aplicacoes": [

            "Buffers entre c├®lulas de usinagem",

            "Pulm├úo entre estamparia e montagem",

            "Prote├º├úo contra quebra de m├íquina a montante"

          ]

        },

        {

          "titulo": "Estoque sazonal",

          "definicao": "Estoque acumulado em per├¡odos de baixa demanda para atender picos sazonais futuros (Natal, Dia das M├úes, safra agr├¡cola). Permite nivelar a produ├º├úo ao longo do ano, evitando capacidade ociosa em per├¡odos baixos e sobrecarga em per├¡odos de pico.",

          "topicos": [

            "Sazonalidade de demanda",

            "Nivelamento da produ├º├úo",

            "Custo de armazenagem sazonal",

            "Previs├úo de demanda sazonal"

          ],

          "formula": "",

          "aplicacoes": [

            "Estoque de brinquedos para Natal",

            "Armazenagem de gr├úos p├│s-colheita",

            "Estoque de bebidas para ver├úo"

          ]

        },

        {

          "titulo": "Estoque especulativo",

          "definicao": "Estoque adquirido com objetivo de prote├º├úo contra aumentos esperados de pre├ºo, desabastecimento de mercado, greves ou mudan├ºas cambiais. ├ë uma decis├úo estrat├®gica de compra baseada em an├ílise de mercado, n├úo em necessidade imediata de produ├º├úo.",

          "topicos": [

            "Prote├º├úo cambial",

            "Aumento de pre├ºo previsto",

            "Escassez de mat├®ria-prima",

            "Risco de desabastecimento"

          ],

          "formula": "",

          "aplicacoes": [

            "Compra antecipada de a├ºo antes de reajuste",

            "Estoque de semicondutores em cen├írio de escassez",

            "Prote├º├úo contra greve de transportadoras"

          ]

        },

        {

          "titulo": "Estoque obsoleto",

          "definicao": "Itens que perderam total ou parcialmente seu valor de uso por altera├º├Áes tecnol├│gicas, descontinua├º├úo de produtos, vencimento, danos ou mudan├ºas nas especifica├º├Áes. Representa perda financeira direta e deve ser identificado, provisionado e descartado adequadamente.",

          "topicos": [

            "Obsolesc├¬ncia tecnol├│gica",

            "Validade vencida",

            "Provis├úo cont├íbil",

            "Descarte sustent├ível"

          ],

          "formula": "",

          "aplicacoes": [

            "Identifica├º├úo de itens obsoletos em almoxarifado",

            "Baixa cont├íbil de estoque sem giro",

            "Programas de reciclagem de materiais obsoletos"

          ]

        },

        {

          "titulo": "Custo de armazenagem",

          "definicao": "Custo total de manter itens em estoque, incluindo aluguel ou deprecia├º├úo do espa├ºo, m├úo de obra, seguros, impostos, perdas, obsolesc├¬ncia e custo de oportunidade do capital investido. Representa tipicamente 20-30% do valor do estoque ao ano.",

          "topicos": [

            "Custo de oportunidade",

            "Custo de espa├ºo",

            "Seguro, perdas e obsolesc├¬ncia",

            "Custo total de estocagem"

          ],

          "formula": "Custo Armazenagem Anual = Estoque M├®dio ├ù Taxa de Armazenagem (%)",

          "aplicacoes": [

            "C├ílculo do custo log├¡stico total",

            "Justificativa financeira para redu├º├úo de estoques",

            "Decis├úo entre produzir ou terceirizar armazenagem"

          ]

        },

        {

          "titulo": "Classifica├º├úo XYZ",

          "definicao": "Classifica├º├úo de materiais baseada na previsibilidade e variabilidade da demanda: X (demanda est├ível e previs├¡vel), Y (varia├º├úo moderada, sazonalidade) e Z (demanda irregular e imprevis├¡vel). Usada em conjunto com a curva ABC para definir pol├¡ticas de estoque refinadas.",

          "topicos": [

            "Classe X ÔÇö previs├¡vel",

            "Classe Y ÔÇö varia├º├úo moderada",

            "Classe Z ÔÇö imprevis├¡vel",

            "Matriz ABC/XYZ"

          ],

          "formula": "CV = ¤â / ╬╝ (Coeficiente de Varia├º├úo)",

          "aplicacoes": [

            "Pol├¡ticas de estoque combinadas ABC ├ù XYZ",

            "Estrat├®gias de ressuprimento por classe de demanda",

            "Aplica├º├úo de previs├úo estat├¡stica diferenciada"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Dias, M. A. P. Administração de Materiais: Uma Abordagem Logística. 7. ed. São Paulo: Atlas, 2019."},
      {"tipo": "Livro", "ref": "Martins, P. G.; Alt, P. R. C. Administração de Materiais e Recursos Patrimoniais. 4. ed. São Paulo: Saraiva, 2016."},
      {"tipo": "Livro", "ref": "Ching, H. Y. Gestão de Estoques na Cadeia de Logística Integrada. 4. ed. São Paulo: Atlas, 2018."},
      {"tipo": "Livro", "ref": "Ballou, R. H. Gerenciamento da Cadeia de Suprimentos/Logística Empresarial. Porto Alegre: Bookman, 2006."}
    ]},

    {

      "id": "ciencia-dados",

      "nome": "Ci├¬ncia de Dados",

      "icone": "database",

      "cor": "#6366f1",

      "descricao": "Ferramentas e t├®cnicas de an├ílise de dados aplicadas ├á ind├║stria.",

      "subtopicos": [

        "Power BI ÔÇö Dashboards",

        "Tableau",

        "Excel Avan├ºado",

        "Python para engenharia",

        "Pandas e NumPy",

        "R estat├¡stico",

        "SQL para consultas",

        "Machine Learning aplicado",

        "Dashboards e KPIs",

        "ETL e integra├º├úo de dados",

        "Big Data industrial",

        "Data Mining",

        "VBA para automa├º├úo",

        "DAX e M (Power BI)",

        "Web Scraping para dados",

        "An├ílise preditiva",

        "Visualiza├º├úo de dados",

        "Estat├¡stica com Python (SciPy)"

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Provost, F.; Fawcett, T. Data Science para Negócios. Rio de Janeiro: Alta Books, 2016."},
      {"tipo": "Livro", "ref": "Han, J.; Kamber, M.; Pei, J. Data Mining: Concepts and Techniques. 3. ed. Waltham: Morgan Kaufmann, 2011."},
      {"tipo": "Livro", "ref": "Mayer-Schönberger, V.; Cukier, K. Big Data: Como Extrair Volume, Variedade, Velocidade e Valor. Rio de Janeiro: Campus, 2013."}
    ]},

    {

      "id": "automacao",

      "nome": "Automa├º├úo Industrial",

      "icone": "cpu",

      "cor": "#e11d48",

      "descricao": "Sistemas automatizados, CLPs, rob├│tica e Ind├║stria 4.0.",

      "subtopicos": [

        {

          "titulo": "CLP ÔÇö Controlador L├│gico Program├ível",

          "definicao": "Equipamento eletr├┤nico digital program├ível que utiliza mem├│ria para armazenar instru├º├Áes e implementar fun├º├Áes de controle, como l├│gica combinat├│ria, sequenciamento, temporiza├º├úo e opera├º├Áes aritm├®ticas. Opera em ciclo de varredura (scan) cont├¡nuo, lendo entradas, executando o programa e atualizando sa├¡das em tempo real.",

          "topicos": [

            "Arquitetura de CLPs",

            "Linguagens de programa├º├úo (Ladder, FBD, SFC, ST, IL)",

            "Ciclo de scan",

            "M├│dulos de E/S digitais e anal├│gicos",

            "IEC 61131-3"

          ],

          "formula": "Tscan = Tleitura + Texecu├º├úo + Tescrita",

          "aplicacoes": [

            "Controle de linhas de montagem automotivas",

            "Automa├º├úo de m├íquinas injetoras e CNC",

            "Sistemas de bombeamento e saneamento",

            "Controle de processos discretos na ind├║stria aliment├¡cia"

          ]

        },

        {

          "titulo": "SCADA ÔÇö Supervisory Control and Data Acquisition",

          "definicao": "Sistema computacional que permite monitorar, controlar e adquirir dados de processos industriais em tempo real, integrando CLPs, RTUs e sensores em uma interface centralizada com IHM. Coleta dados de campo, processa alarmes, gera hist├│ricos e possibilita opera├º├úo remota.",

          "topicos": [

            "Arquitetura SCADA (monoposto, cliente-servidor, distribu├¡da)",

            "RTU ÔÇö Remote Terminal Unit",

            "IHM ÔÇö Interface Homem-M├íquina",

            "Protocolos OPC-UA, MQTT, Modbus",

            "Hist├│rico e banco de dados de processo"

          ],

          "formula": "",

          "aplicacoes": [

            "Supervis├úo de subesta├º├Áes el├®tricas",

            "Controle de oleodutos e gasodutos",

            "Gest├úo de esta├º├Áes de tratamento de ├ígua e efluentes",

            "Monitoramento de parques e├│licos e usinas solares"

          ]

        },

        {

          "titulo": "Sensores industriais",

          "definicao": "Dispositivos que convertem grandezas f├¡sicas (temperatura, press├úo, vaz├úo, n├¡vel, posi├º├úo) em sinais el├®tricos interpret├íveis por CLPs e sistemas de controle. S├úo o primeiro elo na cadeia de automa├º├úo, fornecendo dados cr├¡ticos para a tomada de decis├úo em tempo real.",

          "topicos": [

            "Sensores de temperatura (termopar, RTD, termistor)",

            "Sensores de press├úo e vaz├úo",

            "Sensores indutivos, capacitivos e ├│pticos",

            "Encoders e resolvers",

            "Transmissores 4-20 mA e protocolo HART"

          ],

          "formula": "",

          "aplicacoes": [

            "Monitoramento de vari├íveis de processo em refinarias",

            "Detec├º├úo de presen├ºa em esteiras transportadoras",

            "Medi├º├úo de n├¡vel em tanques e silos",

            "Controle de temperatura em fornos industriais"

          ]

        },

        {

          "titulo": "Atuadores e motores",

          "definicao": "Elementos finais de controle que convertem sinais el├®tricos do CLP em a├º├Áes f├¡sicas, como movimento rotativo, linear ou abertura de v├ílvulas. Incluem motores el├®tricos, servoacionamentos, cilindros pneum├íticos, hidr├íulicos e atuadores el├®tricos.",

          "topicos": [

            "Motores de indu├º├úo trif├ísicos",

            "Servomotores e motores de passo",

            "Cilindros pneum├íticos e hidr├íulicos",

            "V├ílvulas de controle (globo, borboleta, esfera)",

            "Inversores de frequ├¬ncia e soft-starters"

          ],

          "formula": "P = ÔêÜ3 ├ù V ├ù I ├ù cos(¤å) ├ù ╬À",

          "aplicacoes": [

            "Movimenta├º├úo de bra├ºos rob├│ticos",

            "Acionamento de bombas centr├¡fugas",

            "Atua├º├úo de v├ílvulas em processos qu├¡micos",

            "Posicionamento preciso em m├íquinas-ferramenta"

          ]

        },

        {

          "titulo": "Rob├│tica industrial",

          "definicao": "Ramo da automa├º├úo que utiliza manipuladores mec├ónicos program├íveis com m├║ltiplos graus de liberdade para executar tarefas repetitivas, precisas ou perigosas. Os rob├┤s industriais s├úo classificados por geometria (articulada, cartesiana, SCARA, paralela) e por capacidade de carga.",

          "topicos": [

            "Classifica├º├úo de rob├┤s por geometria e aplica├º├úo",

            "Controladores e linguagens de programa├º├úo rob├│tica",

            "Efetuadores finais (grippers, ferramentas)",

            "Sensores de for├ºa e vis├úo para rob├┤s",

            "Seguran├ºa em c├®lulas robotizadas (ISO 10218, ISO/TS 15066)"

          ],

          "formula": "",

          "aplicacoes": [

            "Soldagem a arco e ponto na ind├║stria automotiva",

            "Pintura e revestimento automatizados",

            "Paletiza├º├úo e embalagem",

            "Montagem de componentes eletr├┤nicos"

          ]

        },

        {

          "titulo": "IIoT ÔÇö Industrial Internet of Things",

          "definicao": "Extens├úo da Internet das Coisas para o ambiente industrial, conectando m├íquinas, sensores e sistemas por meio de redes de comunica├º├úo para coleta e troca de dados. Permite monitoramento remoto, manuten├º├úo preditiva e otimiza├º├úo de processos baseada em dados.",

          "topicos": [

            "Arquitetura IIoT (edge, fog, cloud)",

            "Protocolos MQTT, OPC-UA, AMQP",

            "Gateways industriais",

            "Digital twin alimentado por IIoT",

            "Ciberseguran├ºa em IIoT (IEC 62443)"

          ],

          "formula": "",

          "aplicacoes": [

            "Monitoramento de vibra├º├úo em motores",

            "Rastreabilidade de lotes na produ├º├úo",

            "Gest├úo energ├®tica de plantas industriais",

            "Manuten├º├úo preditiva de ativos cr├¡ticos"

          ]

        },

        {

          "titulo": "Ind├║stria 4.0",

          "definicao": "Conceito que representa a quarta revolu├º├úo industrial, caracterizada pela integra├º├úo de sistemas ciberf├¡sicos (CPS), IoT, intelig├¬ncia artificial e computa├º├úo em nuvem nos processos produtivos. Visa f├íbricas inteligentes com produ├º├úo flex├¡vel, aut├┤noma e orientada a dados.",

          "topicos": [

            "Pilares da Ind├║stria 4.0 (BCG)",

            "Sistemas ciberf├¡sicos (CPS)",

            "Integra├º├úo horizontal e vertical",

            "Manufatura ├ígil e mass customization",

            "Arquitetura RAMI 4.0"

          ],

          "formula": "",

          "aplicacoes": [

            "F├íbricas inteligentes com ch├úo de f├íbrica digitalizado",

            "Customiza├º├úo em massa de produtos",

            "Log├¡stica aut├┤noma com AGVs",

            "G├¬meos digitais de linhas de produ├º├úo"

          ]

        },

        {

          "titulo": "Sistemas embarcados",

          "definicao": "Sistemas computacionais dedicados a uma fun├º├úo espec├¡fica dentro de um sistema maior, com recursos limitados de processamento e mem├│ria. Em automa├º├úo, est├úo presentes em CLPs, IHMs, controladores de motores e dispositivos IoT industriais.",

          "topicos": [

            "Microcontroladores (ARM, AVR, PIC)",

            "Sistemas operacionais de tempo real (RTOS)",

            "Firmware e bootloaders",

            "Interfaces de comunica├º├úo (SPI, I2C, CAN, UART)",

            "Projeto de hardware embarcado"

          ],

          "formula": "",

          "aplicacoes": [

            "Controladores de acesso e catracas",

            "M├│dulos de aquisi├º├úo de dados",

            "Sistemas de rastreamento veicular",

            "Dispositivos wearable industriais"

          ]

        },

        {

          "titulo": "Vis├úo computacional",

          "definicao": "Campo da intelig├¬ncia artificial que capacita m├íquinas a interpretar e processar imagens do mundo real. Na ind├║stria, ├® usada para inspe├º├úo de qualidade, leitura de c├│digos, guiamento de rob├┤s e monitoramento de processos.",

          "topicos": [

            "C├ómeras industriais (├írea scan, line scan)",

            "Processamento de imagens (OpenCV, HALCON)",

            "Deep learning para detec├º├úo de defeitos",

            "Sistemas de ilumina├º├úo e ├│ptica",

            "Integra├º├úo com CLPs e rob├┤s"

          ],

          "formula": "",

          "aplicacoes": [

            "Inspe├º├úo ├│ptica de soldas",

            "Leitura de c├│digos Data Matrix e QR",

            "Identifica├º├úo de pe├ºas em esteiras",

            "Medi├º├úo dimensional automatizada"

          ]

        },

        {

          "titulo": "Redes industriais (Profibus, Ethernet/IP)",

          "definicao": "Protocolos de comunica├º├úo padronizados para interligar CLPs, sensores, atuadores e sistemas supervis├│rios no ambiente industrial. S├úo classificadas em redes de campo (fieldbus) e redes Ethernet industriais, cada qual com requisitos espec├¡ficos de determinismo e confiabilidade.",

          "topicos": [

            "Fieldbus: Profibus, DeviceNet, Foundation Fieldbus",

            "Ethernet industrial: EtherNet/IP, PROFINET, EtherCAT",

            "Redes de sensores sem fio (WirelessHART)",

            "Comuta├º├úo e roteamento industrial",

            "Seguran├ºa em redes industriais"

          ],

          "formula": "",

          "aplicacoes": [

            "Comunica├º├úo entre CLPs em c├®lulas de manufatura",

            "Controle de movimento sincronizado",

            "Integra├º├úo de sensores distribu├¡dos",

            "Redund├óncia de dados em sistemas cr├¡ticos"

          ]

        },

        {

          "titulo": "IHM ÔÇö Interface Homem-M├íquina",

          "definicao": "Interface gr├ífica que permite a intera├º├úo entre operadores e m├íquinas ou processos, exibindo dados em tempo real, alarmes, gr├íficos de tend├¬ncia e comandos de controle. Pode ser implementada como pain├®is dedicados ou software em PC.",

          "topicos": [

            "Pain├®is IHM touch screen",

            "Software supervis├│rio com IHM integrada",

            "Desenvolvimento de telas (tags, anima├º├Áes, receitas)",

            "Alarmes e eventos",

            "Usabilidade e design centrado no operador"

          ],

          "formula": "",

          "aplicacoes": [

            "Salas de controle de processos cont├¡nuos",

            "Pain├®is de m├íquina em c├®lulas de manufatura",

            "Supervis├úo de linhas de envase",

            "Monitoramento de utilidades industriais"

          ]

        },

        {

          "titulo": "Controladores PID",

          "definicao": "Algoritmo de controle realimentado que calcula o sinal de sa├¡da com base no erro entre o valor desejado (setpoint) e o valor medido, aplicando a├º├Áes proporcional (P), integral (I) e derivativa (D). ├ë o m├®todo mais difundido para controle cont├¡nuo de processos.",

          "topicos": [

            "A├º├Áes P, PI, PID e suas caracter├¡sticas",

            "Sintonia de controladores (Ziegler-Nichols, IMC)",

            "Controle cascata, feedforward e ratio",

            "PID digital e discretiza├º├úo",

            "Satua├º├úo e anti-windup"

          ],

          "formula": "u(t) = Kp ├ù e(t) + Ki ├ù Ôê½e(¤ä)d¤ä + Kd ├ù de(t)/dt",

          "aplicacoes": [

            "Controle de temperatura em reatores",

            "Regula├º├úo de vaz├úo e press├úo em tubula├º├Áes",

            "Controle de n├¡vel em tanques",

            "Malhas de velocidade em motores"

          ]

        },

        {

          "titulo": "Sistemas supervis├│rios",

          "definicao": "Plataformas de software que integram aquisi├º├úo, processamento e exibi├º├úo de dados de processo, permitindo supervis├úo centralizada e tomada de decis├úo em tempo real. Incluem funcionalidades de alarme, hist├│rico, relat├│rios e interface com sistemas corporativos.",

          "topicos": [

            "Configura├º├úo de tags e drivers de comunica├º├úo",

            "Telas de supervis├úo e navega├º├úo",

            "Relat├│rios e hist├│ricos",

            "Integra├º├úo com MES e ERP",

            "Redund├óncia e alta disponibilidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Central de opera├º├úo de plantas petroqu├¡micas",

            "Controle de sistemas de gera├º├úo de energia",

            "Automa├º├úo de edif├¡cios inteligentes",

            "Monitoramento de esta├º├Áes de tratamento"

          ]

        },

        {

          "titulo": "Acionamentos el├®tricos",

          "definicao": "Sistemas que controlam a partida, parada, velocidade, torque e sentido de rota├º├úo de motores el├®tricos. Incluem contatores, soft-starters, inversores de frequ├¬ncia e servoconversores, sendo essenciais para efici├¬ncia energ├®tica e automa├º├úo de m├íquinas.",

          "topicos": [

            "Partida direta, estrela-tri├óngulo e suave",

            "Inversores de frequ├¬ncia (VFD)",

            "Servoacionamentos com malha fechada",

            "Dimensionamento de cabos e prote├º├Áes",

            "Efici├¬ncia energ├®tica e normas IE3/IE4"

          ],

          "formula": "n(rpm) = 120 ├ù f / p",

          "aplicacoes": [

            "Acionamento de transportadores e elevadores",

            "Controle de bombas hidr├íulicas",

            "Posicionamento de eixos em centros de usinagem",

            "Ventiladores e compressores industriais"

          ]

        },

        {

          "titulo": "Pneum├ítica e hidr├íulica",

          "definicao": "Tecnologias de automa├º├úo que utilizam fluidos pressurizados (ar comprimido na pneum├ítica; ├│leo na hidr├íulica) para gerar movimento linear ou rotativo. A pneum├ítica ├® preferida para aplica├º├Áes de baixa a m├®dia for├ºa; a hidr├íulica para altas cargas e precis├úo de posicionamento.",

          "topicos": [

            "Cilindros de simples e dupla a├º├úo",

            "V├ílvulas direcionais, reguladoras e proporcionais",

            "Unidades de prepara├º├úo de ar (FRL)",

            "Bombas hidr├íulicas e atuadores",

            "Normas ISO 4414 e ISO 4413"

          ],

          "formula": "F = P ├ù A",

          "aplicacoes": [

            "Automa├º├úo de linhas de montagem (pneum├ítica)",

            "Prensas e injetoras hidr├íulicas",

            "Sistemas de fixa├º├úo e clamping",

            "Atua├º├úo de v├ílvulas em processos"

          ]

        },

        {

          "titulo": "Rob├┤s colaborativos (Cobots)",

          "definicao": "Rob├┤s projetados para operar em espa├ºo compartilhado com seres humanos, com sensores de for├ºa, limita├º├úo de pot├¬ncia e parada segura por contato. Diferem dos rob├┤s industriais tradicionais por dispensar cercas de seguran├ºa e facilitar a reprograma├º├úo.",

          "topicos": [

            "Norma ISO/TS 15066 para rob├┤s colaborativos",

            "Modos de opera├º├úo colaborativa",

            "Sensoriamento de torque e for├ºa",

            "Aplica├º├Áes pick-and-place e inspe├º├úo",

            "Compara├º├úo com rob├┤s industriais tradicionais"

          ],

          "formula": "",

          "aplicacoes": [

            "Alimenta├º├úo de m├íquinas CNC por operador + cobot",

            "Montagem assistida de componentes delicados",

            "Inspe├º├úo de qualidade colaborativa",

            "Embalagem e paletiza├º├úo em pequenas empresas"

          ]

        },

        {

          "titulo": "C├®lulas de manufatura flex├¡vel",

          "definicao": "Arranjo produtivo que integra m├íquinas CNC, rob├┤s, sistemas de armazenamento e transporte automatizado, capazes de fabricar fam├¡lias de pe├ºas com m├¡nima interven├º├úo manual. A flexibilidade permite alterar rapidamente a produ├º├úo entre modelos sem grandes reconfigura├º├Áes.",

          "topicos": [

            "Layout de c├®lulas flex├¡veis (U-shape, linear)",

            "Sistemas de paletes e magazines",

            "Controle centralizado e scheduling",

            "Mudan├ºa r├ípida de ferramentas (SMED)",

            "Indicadores OEE e flexibilidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Usinagem de fam├¡lias de pe├ºas automotivas",

            "Manufatura de componentes aeron├íuticos",

            "Produ├º├úo de dispositivos m├®dicos",

            "Fabrica├º├úo de pe├ºas por encomenda"

          ]

        },

        {

          "titulo": "Identifica├º├úo por RF (RFID)",

          "definicao": "Tecnologia de identifica├º├úo autom├ítica por radiofrequ├¬ncia que utiliza etiquetas (tags) passivas ou ativas para rastrear produtos, ferramentas e ativos ao longo da cadeia produtiva. Diferencia-se do c├│digo de barras por n├úo exigir linha de visada e permitir leitura em lote.",

          "topicos": [

            "Tags passivas, ativas e semi-passivas",

            "Frequ├¬ncias LF, HF, UHF e micro-ondas",

            "Leitores fixos e m├│veis",

            "Padr├Áes ISO 18000 e EPC Gen2",

            "Integra├º├úo com MES e WMS"

          ],

          "formula": "",

          "aplicacoes": [

            "Rastreabilidade de pe├ºas na montagem",

            "Controle de estoque automatizado",

            "Identifica├º├úo de ferramentas e dispositivos",

            "Log├¡stica reversa e cadeia de suprimentos"

          ]

        },

        {

          "titulo": "OPC-UA e MQTT",

          "definicao": "Protocolos de comunica├º├úo modernos para integra├º├úo de dados industriais. OPC-UA (Open Platform Communications ÔÇö Unified Architecture) padroniza a troca de dados entre diferentes fabricantes com seguran├ºa e modelagem de informa├º├Áes. MQTT (Message Queuing Telemetry Transport) ├® um protocolo leve de mensageria publish/subscribe ideal para IIoT.",

          "topicos": [

            "Arquitetura cliente-servidor OPC-UA",

            "Modelo de informa├º├úo e namespace",

            "MQTT brokers e t├│picos",

            "Qualidade de servi├ºo (QoS) em MQTT",

            "Seguran├ºa e certificados OPC-UA"

          ],

          "formula": "",

          "aplicacoes": [

            "Integra├º├úo de ch├úo de f├íbrica com sistemas cloud",

            "Coleta de dados de m├║ltiplos CLPs heterog├¬neos",

            "Telemetria de ativos remotos",

            "Plataformas de IIoT e Big Data industrial"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Moraes, C. C.; Castrucci, P. L. Engenharia de Automação Industrial. 2. ed. Rio de Janeiro: LTC, 2007."},
      {"tipo": "Livro", "ref": "Groover, M. P. Automação Industrial e Sistemas de Manufatura. 3. ed. São Paulo: Pearson, 2011."},
      {"tipo": "Norma", "ref": "IEC. IEC 61131-3: Programmable Controllers - Programming Languages. Genebra: IEC, 2013."}
    ]},

    {

      "id": "transf-digital",

      "nome": "Transforma├º├úo Digital",

      "icone": "zap",

      "cor": "#ea580c",

      "descricao": "Digitaliza├º├úo, IA, g├¬meo digital e tecnologias habilitadoras da Ind├║stria 5.0.",

      "subtopicos": [

        {

          "titulo": "Digitaliza├º├úo industrial",

          "definicao": "Processo de convers├úo de processos, documentos e opera├º├Áes anal├│gicas para formatos digitais, habilitando automa├º├úo, rastreabilidade e an├ílise de dados. Vai al├®m da simples digitaliza├º├úo de pap├®is, envolvendo a integra├º├úo de sistemas e a conectividade de ativos.",

          "topicos": [

            "Estrat├®gia de transforma├º├úo digital",

            "Digital twin e digital thread",

            "Elimina├º├úo de dados em papel",

            "Integra├º├úo OT/IT",

            "Indicadores de maturidade digital"

          ],

          "formula": "",

          "aplicacoes": [

            "Digitaliza├º├úo de ordens de servi├ºo e checklists",

            "Captura autom├ítica de dados de produ├º├úo",

            "Documenta├º├úo t├®cnica 100% digital",

            "Assinatura eletr├┤nica em processos industriais"

          ]

        },

        {

          "titulo": "Intelig├¬ncia Artificial na ind├║stria",

          "definicao": "Ramo da computa├º├úo que desenvolve sistemas capazes de executar tarefas que normalmente requerem intelig├¬ncia humana: aprendizado, racioc├¡nio, percep├º├úo e tomada de decis├úo. Na ind├║stria, ├® aplicada em controle de qualidade preditivo, otimiza├º├úo de processos e manuten├º├úo inteligente.",

          "topicos": [

            "Machine Learning (supervisionado, n├úo supervisionado, refor├ºo)",

            "Deep Learning para vis├úo computacional",

            "IA generativa para projeto e documenta├º├úo",

            "Sistemas especialistas e controle fuzzy",

            "MLOps industrial"

          ],

          "formula": "",

          "aplicacoes": [

            "Detec├º├úo de defeitos em tempo real com vis├úo IA",

            "Previs├úo de demanda e planejamento de produ├º├úo",

            "Otimiza├º├úo de par├ómetros de processo",

            "Chatbots para assist├¬ncia t├®cnica"

          ]

        },

        {

          "titulo": "Big Data e Analytics",

          "definicao": "Conjunto de t├®cnicas e tecnologias para capturar, armazenar, processar e analisar grandes volumes de dados estruturados e n├úo estruturados gerados por sistemas industriais. Permite extrair correla├º├Áes, padr├Áes e insights que orientam decis├Áes estrat├®gicas e operacionais.",

          "topicos": [

            "Arquitetura data lake e data warehouse",

            "Processamento batch e streaming",

            "Ferramentas (Hadoop, Spark, Kafka)",

            "An├ílise descritiva, diagn├│stica, preditiva e prescritiva",

            "Visualiza├º├úo de dados com dashboards"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise de causa raiz de falhas recorrentes",

            "Otimiza├º├úo de mix de produ├º├úo por margem",

            "Segmenta├º├úo de clientes e personaliza├º├úo",

            "Monitoramento de KPI em tempo real"

          ]

        },

        {

          "titulo": "Computa├º├úo em nuvem",

          "definicao": "Modelo de computa├º├úo que permite acesso on-demand a recursos computacionais compartilhados (servidores, armazenamento, bancos de dados, redes, software) pela internet. Na ind├║stria, viabiliza IIoT, an├ílise avan├ºada e sistemas de gest├úo escal├íveis com redu├º├úo de custos de infraestrutura.",

          "topicos": [

            "IaaS, PaaS, SaaS ÔÇö modelos de servi├ºo",

            "Nuvem p├║blica, privada e h├¡brida",

            "Cloud industrial (AWS Industry, Azure for Industry)",

            "Edge computing vs. Cloud computing",

            "Seguran├ºa e conformidade (LGPD) em nuvem"

          ],

          "formula": "",

          "aplicacoes": [

            "Plataformas de IIoT em nuvem (AWS IoT, Azure IoT)",

            "Sistemas ERP e MES em SaaS",

            "Armazenamento e an├ílise de dados hist├│ricos",

            "Machine Learning como servi├ºo (MLaaS)"

          ]

        },

        {

          "titulo": "G├¬meo Digital (Digital Twin)",

          "definicao": "R├®plica virtual de um sistema, produto ou processo que reflete seu estado em tempo real por meio de dados de sensores e simula├º├Áes. Permite prever comportamentos, testar cen├írios e otimizar opera├º├Áes sem intervir no sistema f├¡sico.",

          "topicos": [

            "G├¬meo digital de produto, processo e sistema",

            "Modelagem 3D e simula├º├úo multi-f├¡sica",

            "Sincroniza├º├úo em tempo real com dados IIoT",

            "G├¬meo digital de f├íbrica (Digital Factory)",

            "Ferramentas (Unity, Siemens Tecnomatix, Ansys Twin Builder)"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de fluxo produtivo antes da implementa├º├úo",

            "Monitoramento e predi├º├úo de desgaste de m├íquinas",

            "Otimiza├º├úo de efici├¬ncia energ├®tica",

            "Comissionamento virtual de linhas de produ├º├úo"

          ]

        },

        {

          "titulo": "IoT e IIoT",

          "definicao": "Rede de objetos f├¡sicos conectados ├á internet que coletam e trocam dados. A IoT industrial (IIoT) estende esse conceito ao ambiente fabril, conectando sensores, m├íquinas e sistemas para monitoramento, automa├º├úo e otimiza├º├úo baseada em dados.",

          "topicos": [

            "Arquitetura IoT: dispositivos, gateway, nuvem",

            "Protocolos (MQTT, CoAP, HTTP/2, LwM2M)",

            "Plataformas IoT (ThingsBoard, AWS IoT, Azure IoT)",

            "An├ílise de borda (edge analytics)",

            "Seguran├ºa em dispositivos IoT (TLS, PKI)"

          ],

          "formula": "",

          "aplicacoes": [

            "Cidades inteligentes e utilidades",

            "Agricultura de precis├úo",

            "Monitoramento de frota e log├¡stica",

            "Medi├º├úo inteligente de energia"

          ]

        },

        {

          "titulo": "Ind├║stria 5.0",

          "definicao": "Evolu├º├úo da Ind├║stria 4.0 que coloca o ser humano no centro da produ├º├úo, integrando tecnologias digitais com sustentabilidade, resili├¬ncia e bem-estar social. Valoriza a coopera├º├úo homem-m├íquina (cobots), personaliza├º├úo em massa e produ├º├úo regenerativa.",

          "topicos": [

            "Human-centricity (produ├º├úo centrada no humano)",

            "Resili├¬ncia de cadeias de suprimento",

            "Sustentabilidade e produ├º├úo regenerativa",

            "Tecnologias habilitadoras 5.0",

            "Diferen├ºas entre Ind├║stria 4.0 e 5.0"

          ],

          "formula": "",

          "aplicacoes": [

            "Linhas de produ├º├úo com rob├┤s colaborativos",

            "F├íbricas regenerativas com energia limpa",

            "Produ├º├úo customizada com participa├º├úo do cliente",

            "Modelos de neg├│cio baseados em servitiza├º├úo"

          ]

        },

        {

          "titulo": "Blockchain na ind├║stria",

          "definicao": "Tecnologia de registro distribu├¡do que garante imutabilidade, rastreabilidade e transpar├¬ncia em transa├º├Áes e dados compartilhados entre m├║ltiplos participantes. Na cadeia de suprimentos, assegura a origem e o hist├│rico de produtos e materiais.",

          "topicos": [

            "Estrutura de blocos, hash e consenso",

            "Blockchain p├║blica vs. privada vs. cons├│rcio",

            "Smart contracts para automa├º├úo de acordos",

            "Rastreabilidade na cadeia de suprimentos",

            "Plataformas (Hyperledger, Ethereum, Corda)"

          ],

          "formula": "",

          "aplicacoes": [

            "Rastreabilidade de alimentos da fazenda ├á mesa",

            "Certifica├º├úo de origem de materiais",

            "Contratos inteligentes para pagamentos autom├íticos",

            "Prote├º├úo de propriedade intelectual industrial"

          ]

        },

        {

          "titulo": "Realidade Aumentada (AR)",

          "definicao": "Tecnologia que sobrep├Áe elementos digitais (imagens, textos, anima├º├Áes) ao ambiente real em tempo real, visualizada por ├│culos inteligentes, tablets ou smartphones. Na ind├║stria, ├® usada para treinamento, assist├¬ncia remota e instru├º├Áes de montagem sobrepostas.",

          "topicos": [

            "Marcadores e tracking visual",

            "├ôculos AR (Microsoft HoloLens, Magic Leap)",

            "Desenvolvimento com Unity e AR Foundation",

            "AR para manuten├º├úo assistida",

            "Integra├º├úo com sistemas PLM e CMMS"

          ],

          "formula": "",

          "aplicacoes": [

            "Instru├º├Áes de montagem projetadas sobre o produto",

            "Manuten├º├úo remota com especialista via AR",

            "Inspe├º├úo visual com sobreposi├º├úo de dados",

            "Treinamento de operadores em ambiente seguro"

          ]

        },

        {

          "titulo": "Realidade Virtual (VR)",

          "definicao": "Ambiente digital imersivo gerado por computador, no qual o usu├írio interage por meio de ├│culos VR e controladores. Na engenharia, ├® usada para simula├º├úo de projetos, valida├º├úo de layout fabril e treinamento em situa├º├Áes de risco sem exposi├º├úo real.",

          "topicos": [

            "├ôculos VR (Meta Quest, HTC Vive, Pico)",

            "Desenvolvimento em Unity 3D e Unreal Engine",

            "Simula├º├úo de processos e ergonomia",

            "Treinamento de seguran├ºa em VR",

            "Revis├úo de projeto colaborativa em VR"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de layout de f├íbrica antes da constru├º├úo",

            "Treinamento de opera├º├úo de m├íquinas complexas",

            "Ergonomia virtual para projeto de postos",

            "Revis├úo de prot├│tipos 3D em escala real"

          ]

        },

        {

          "titulo": "Manufatura aditiva (3D Printing)",

          "definicao": "Processo de fabrica├º├úo por adi├º├úo sucessiva de camadas de material (pl├ístico, metal, cer├ómica) a partir de um modelo digital 3D. Permite geometrias complexas, redu├º├úo de peso, customiza├º├úo em massa e prototipagem r├ípida, com impacto direto na cadeia de suprimentos.",

          "topicos": [

            "FDM, SLA, SLS, DMLS, EBM ÔÇö tecnologias",

            "Materiais para impress├úo 3D industrial",

            "Design for Additive Manufacturing (DfAM)",

            "P├│s-processamento e acabamento",

            "Normas ASTM F42 e ISO 52900"

          ],

          "formula": "",

          "aplicacoes": [

            "Prototipagem r├ípida de componentes",

            "Produ├º├úo de pe├ºas de reposi├º├úo sob demanda",

            "Implantes m├®dicos personalizados",

            "Ferramentas e dispositivos de produ├º├úo leves"

          ]

        },

        {

          "titulo": "Ciberseguran├ºa industrial",

          "definicao": "Pr├íticas, tecnologias e processos para proteger sistemas de controle industrial (ICS), redes, dispositivos e dados contra ataques cibern├®ticos. Difere da seguran├ºa de TI por exigir disponibilidade cont├¡nua, baixa lat├¬ncia e prote├º├úo de sistemas legados.",

          "topicos": [

            "IEC 62443 ÔÇö normas para seguran├ºa ICS",

            "Segmenta├º├úo de redes OT e IT",

            "Firewalls industriais e DMZ",

            "Detec├º├úo de intrus├úo em redes industriais",

            "Gest├úo de vulnerabilidades e patch management"

          ],

          "formula": "",

          "aplicacoes": [

            "Prote├º├úo de subesta├º├Áes de energia contra ataques",

            "Seguran├ºa de redes SCADA",

            "Prote├º├úo de dados de propriedade intelectual industrial",

            "Conformidade com regulamenta├º├Áes de seguran├ºa digital"

          ]

        },

        {

          "titulo": "Edge Computing",

          "definicao": "Modelo computacional que processa dados pr├│ximo ├á fonte geradora (na borda da rede), reduzindo lat├¬ncia e tr├ífego para a nuvem. Cr├¡tico para aplica├º├Áes industriais que exigem resposta em tempo real, como controle de m├íquinas e an├ílise preditiva local.",

          "topicos": [

            "Arquitetura edge: dispositivos, gateways, micro-data centers",

            "Edge vs. Fog vs. Cloud",

            "Processamento de streaming em tempo real",

            "Orquestra├º├úo de containers no edge (K3s, Docker)",

            "Plataformas edge industriais (Siemens Industrial Edge, AWS Outposts)"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise de vibra├º├úo em tempo real na m├íquina",

            "Controle de qualidade com infer├¬ncia de IA local",

            "Redu├º├úo de tr├ífego de dados para a nuvem",

            "Opera├º├úo offline com sincroniza├º├úo posterior"

          ]

        },

        {

          "titulo": "5G industrial",

          "definicao": "Quinta gera├º├úo de redes m├│veis que oferece alta largura de banda, baix├¡ssima lat├¬ncia (1-10 ms) e suporte a massiva conex├úo de dispositivos. Na ind├║stria, viabiliza controle remoto de m├íquinas, rob├│tica colaborativa sem fio e f├íbricas totalmente m├│veis.",

          "topicos": [

            "Redes 5G privativas (NPN)",

            "Network slicing para aplica├º├Áes industriais",

            "URLLC, eMBB, mMTC ÔÇö categorias de servi├ºo",

            "Integra├º├úo 5G com TSN (Time-Sensitive Networking)",

            "Casos de uso 5G em manufatura"

          ],

          "formula": "",

          "aplicacoes": [

            "Controle remoto de guindastes e AGVs",

            "Realidade aumentada com streaming de v├¡deo 4K",

            "Comunica├º├úo machine-to-machine ultraconfi├ível",

            "Monitoramento por v├¡deo de alta resolu├º├úo"

          ]

        },

        {

          "titulo": "IA Generativa na manufatura",

          "definicao": "Ramo da intelig├¬ncia artificial focado na gera├º├úo de conte├║do novo (texto, imagens, c├│digo, modelos 3D) a partir de modelos treinados como GPT, DALL-E e Stable Diffusion. Na manufatura, acelera projeto de produto, documenta├º├úo t├®cnica e programa├º├úo de m├íquinas.",

          "topicos": [

            "LLMs aplicados ├á engenharia",

            "Gera├º├úo de c├│digo G-code e PLC",

            "Design generativo para manufatura aditiva",

            "Documenta├º├úo t├®cnica autom├ítica",

            "Assistentes virtuais para ch├úo de f├íbrica"

          ],

          "formula": "",

          "aplicacoes": [

            "Gera├º├úo autom├ítica de relat├│rios de qualidade",

            "Projeto generativo de pe├ºas otimizadas",

            "Assistente virtual para troubleshooting",

            "Tradu├º├úo e padroniza├º├úo de documenta├º├úo t├®cnica"

          ]

        },

        {

          "titulo": "Sistemas ciberf├¡sicos (CPS)",

          "definicao": "Integra├º├úo de componentes computacionais (software, redes) com processos f├¡sicos (sensores, atuadores, m├íquinas), onde o sistema digital monitora e controla o processo f├¡sico em malha fechada. Base da Ind├║stria 4.0, seguindo a arquitetura 5C (conex├úo, convers├úo, cyber, cogni├º├úo, configura├º├úo).",

          "topicos": [

            "Arquitetura 5C dos CPS",

            "Comunica├º├úo m├íquina a m├íquina (M2M)",

            "Modelagem e simula├º├úo de CPS",

            "CPS aplicados a manufatura e energia",

            "Desafios de seguran├ºa e interoperabilidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Controle aut├┤nomo de tr├ífego urbano",

            "Redes el├®tricas inteligentes (Smart Grid)",

            "Manufatura aut├┤noma com auto-configura├º├úo",

            "Ve├¡culos aut├┤nomos e sistemas de transporte"

          ]

        },

        {

          "titulo": "Digital Thread",

          "definicao": "Fluxo cont├¡nuo de dados integrados ao longo de todo o ciclo de vida do produto, desde o projeto conceitual at├® o descarte. Conecta PLM, ERP, MES, manufatura e servi├ºo de campo, garantindo rastreabilidade e consist├¬ncia da informa├º├úo.",

          "topicos": [

            "Conex├úo entre PLM, ERP, MES e SCADA",

            "Rastreabilidade de vers├Áes e mudan├ºas de engenharia",

            "Digital thread vs. Digital twin",

            "Padr├Áes (STEP AP242, QIF, MTConnect)",

            "Implementa├º├úo em arquiteturas de TI industriais"

          ],

          "formula": "",

          "aplicacoes": [

            "Rastreabilidade completa de lotes e mat├®rias-primas",

            "Gest├úo de mudan├ºas de engenharia em cascata",

            "Hist├│rico de manuten├º├úo vinculado ao serial number",

            "Conformidade regulat├│ria (FDA, INMETRO)"

          ]

        },

        {

          "titulo": "F├íbrica aut├┤noma",

          "definicao": "Conceito de manufatura onde a produ├º├úo opera com m├¡nima interven├º├úo humana, utilizando decis├Áes baseadas em IA, rob├┤s aut├┤nomos, sistemas de auto-otimiza├º├úo e log├¡stica intra-f├íbrica sem operador. Representa o est├ígio mais avan├ºado de maturidade da Ind├║stria 4.0.",

          "topicos": [

            "N├¡veis de autonomia na manufatura",

            "Sistemas de scheduling aut├┤nomo",

            "Log├¡stica com AGVs e drones",

            "Auto-otimiza├º├úo de par├ómetros de processo",

            "Manuten├º├úo aut├┤noma com IA"

          ],

          "formula": "",

          "aplicacoes": [

            "Linhas de montagem sem operadores (lights-out)",

            "Armaz├®ns totalmente automatizados",

            "Centros de usinagem n├úo tripulados",

            "F├íbricas de semicondutores com automa├º├úo total"

          ]

        },

        {

          "titulo": "G├¬meo digital de processo",

          "definicao": "R├®plica virtual de um processo produtivo espec├¡fico (n├úo do produto), usada para simular, monitorar e otimizar o comportamento din├ómico da produ├º├úo. Permite testar varia├º├Áes de par├ómetros, identificar gargalos e prever o impacto de mudan├ºas sem interromper a opera├º├úo real.",

          "topicos": [

            "Modelagem de processos cont├¡nuos e discretos",

            "Simula├º├úo de eventos discretos (DES)",

            "Calibra├º├úo com dados hist├│ricos e em tempo real",

            "Otimiza├º├úo de setpoints com g├¬meo digital",

            "Ferramentas (AnyLogic, Simulink, Aspen Plus)"

          ],

          "formula": "",

          "aplicacoes": [

            "Otimiza├º├úo de consumo energ├®tico de um forno",

            "Simula├º├úo de cen├írios de produ├º├úo futuros",

            "Detec├º├úo de desvios de processo em tempo real",

            "Treinamento de operadores em ambiente virtual de processo"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Schwab, K. A Quarta Revolução Industrial. São Paulo: Edipro, 2016."},
      {"tipo": "Livro", "ref": "Rogers, D. L. Transformação Digital: Repensando seu Negócio para a Era Digital. São Paulo: Autêntica Business, 2019."},
      {"tipo": "Livro", "ref": "Sacomano, J. B. et al. Indústria 4.0: Conceitos e Fundamentos. São Paulo: Blucher, 2018."},
      {"tipo": "Relatório", "ref": "Rüßmann, M. et al. Industry 4.0: The Future of Productivity and Growth in Manufacturing. Boston: BCG, 2015."}
    ]},

    {

      "id": "manutencao",

      "nome": "Gest├úo da Manuten├º├úo",

      "icone": "tool",

      "cor": "#a21caf",

      "descricao": "Estrat├®gias de manuten├º├úo, confiabilidade e disponibilidade de ativos.",

      "subtopicos": [

        {

          "titulo": "Manuten├º├úo preventiva",

          "definicao": "Estrat├®gia de manuten├º├úo baseada em interven├º├Áes programadas por tempo de opera├º├úo, calend├írio ou ciclos de uso. Tem como objetivo reduzir a probabilidade de falha e manter o equipamento em condi├º├Áes seguras e eficientes de opera├º├úo.",

          "topicos": [

            "Planos de manuten├º├úo preventiva",

            "Periodicidade baseada em tempo e uso",

            "Ordens de servi├ºo programadas",

            "Checklists e procedimentos de inspe├º├úo",

            "Indicadores de cumprimento do plano"

          ],

          "formula": "",

          "aplicacoes": [

            "Lubrifica├º├úo e troca de ├│leo programada",

            "Substitui├º├úo de correias e filtros por calend├írio",

            "Inspe├º├úo peri├│dica de sistemas el├®tricos",

            "Calibra├º├úo de sensores e instrumentos"

          ]

        },

        {

          "titulo": "Manuten├º├úo corretiva",

          "definicao": "Interven├º├úo realizada ap├│s a ocorr├¬ncia de falha, com o objetivo de restaurar o equipamento ├ás condi├º├Áes normais de opera├º├úo. Pode ser classificada como emergencial (falha cr├¡tica) ou programada (falha n├úo cr├¡tica com reparo agendado).",

          "topicos": [

            "Manuten├º├úo corretiva emergencial",

            "Manuten├º├úo corretiva programada",

            "An├ílise de criticidade para prioriza├º├úo",

            "Gest├úo de ordens de servi├ºo corretivas",

            "Registro de falhas e horas de reparo"

          ],

          "formula": "",

          "aplicacoes": [

            "Substitui├º├úo de motor queimado",

            "Reparo emergencial de vazamento em tubula├º├úo",

            "Troca de placa eletr├┤nica defeituosa",

            "Recupera├º├úo de m├íquina ap├│s parada s├║bita"

          ]

        },

        {

          "titulo": "Manuten├º├úo preditiva",

          "definicao": "Estrat├®gia baseada no monitoramento cont├¡nuo ou peri├│dico de par├ómetros de condi├º├úo (vibra├º├úo, temperatura, ├│leo, ultrassom) para prever falhas antes que ocorram. Permite intervir no momento ├│timo, maximizando a vida ├║til do componente.",

          "topicos": [

            "An├ílise de vibra├º├úo",

            "Termografia infravermelha",

            "An├ílise de ├│leo lubrificante",

            "Ultrassom industrial",

            "Monitoramento on-line com sensores IoT"

          ],

          "formula": "",

          "aplicacoes": [

            "Detec├º├úo precoce de falha em rolamentos",

            "Monitoramento de desgaste em engrenagens",

            "Identifica├º├úo de pontos quentes em pain├®is el├®tricos",

            "An├ílise de contamina├º├úo em ├│leo hidr├íulico"

          ]

        },

        {

          "titulo": "Manuten├º├úo detectiva",

          "definicao": "Estrat├®gia de busca ativa por falhas ocultas (n├úo evidentes em opera├º├úo normal), por meio de testes e inspe├º├Áes peri├│dicas. Comum em sistemas de prote├º├úo, seguran├ºa e emerg├¬ncia, onde a falha s├│ se revela no momento da demanda.",

          "topicos": [

            "Testes de sistemas de seguran├ºa",

            "Inspe├º├úo de dispositivos de prote├º├úo",

            "V├ílvulas de seguran├ºa e al├¡vio",

            "Sistemas de alarme e detec├º├úo de inc├¬ndio",

            "Periodicidade de teste baseada em risco"

          ],

          "formula": "",

          "aplicacoes": [

            "Teste funcional de SPDA e aterramento",

            "Verifica├º├úo de sensores de g├ís",

            "Teste de alarmes de pain├®is de controle",

            "Inspe├º├úo de rel├®s de prote├º├úo el├®trica"

          ]

        },

        {

          "titulo": "TPM ÔÇö Manuten├º├úo Produtiva Total",

          "definicao": "Metodologia de gest├úo originada no Jap├úo (JIPM) que busca zero falhas, zero defeitos e zero acidentes atrav├®s do envolvimento de todos os colaboradores. Estruturada em 8 pilares, integra manuten├º├úo aut├┤noma, planejada e melhoria focada.",

          "topicos": [

            "8 pilares do TPM",

            "Manuten├º├úo aut├┤noma (MA)",

            "Melhoria espec├¡fica (kaizen)",

            "Educa├º├úo e treinamento",

            "OEE ÔÇö Overall Equipment Effectiveness"

          ],

          "formula": "OEE = Disponibilidade ├ù Performance ├ù Qualidade",

          "aplicacoes": [

            "Programas TPM em montadoras automotivas",

            "Redu├º├úo de quebras em linhas de envase",

            "Aumento de OEE em c├®lulas de usinagem",

            "Cultura de manuten├º├úo aut├┤noma na produ├º├úo"

          ]

        },

        {

          "titulo": "PCM ÔÇö Planejamento e Controle da Manuten├º├úo",

          "definicao": "Fun├º├úo gerencial respons├ível por planejar, programar, controlar e analisar as atividades de manuten├º├úo. Envolve a gest├úo de ordens de servi├ºo, hist├│rico de equipamentos, planejamento de recursos e indicadores de desempenho da manuten├º├úo.",

          "topicos": [

            "Estrutura de um PCM",

            "Ordem de servi├ºo (OS) ÔÇö cria├º├úo e fluxo",

            "Planejamento de recursos: m├úo de obra, pe├ºas, ferramentas",

            "Programa├º├úo semanal e di├íria",

            "KPIs de manuten├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Implanta├º├úo de rotinas de planejamento em ind├║strias",

            "Controle de backlog de manuten├º├úo",

            "Gest├úo de estoque de sobressalentes cr├¡ticos",

            "An├ílise de custos de manuten├º├úo por equipamento"

          ]

        },

        {

          "titulo": "Confiabilidade (RAMS)",

          "definicao": "Disciplina da engenharia que estuda a capacidade de um sistema desempenhar sua fun├º├úo requerida sob condi├º├Áes espec├¡ficas por um per├¡odo determinado. RAMS integra confiabilidade (Reliability), disponibilidade (Availability), mantenabilidade (Maintainability) e seguran├ºa (Safety).",

          "topicos": [

            "Confiabilidade (Reliability)",

            "Disponibilidade (Availability)",

            "Mantenabilidade (Maintainability)",

            "Seguran├ºa (Safety)",

            "Engenharia de confiabilidade"

          ],

          "formula": "R(t) = e^(-╬╗t)",

          "aplicacoes": [

            "Garantia de confiabilidade em sistemas aeroespaciais",

            "Projeto de sistemas com redund├óncia",

            "An├ílise RAM de plantas petroqu├¡micas",

            "Metas contratuais de disponibilidade de ativos"

          ]

        },

        {

          "titulo": "Disponibilidade de equipamentos",

          "definicao": "Percentual de tempo em que um equipamento est├í apto a operar, considerando o tempo total e as paradas por manuten├º├úo. ├ë um dos principais indicadores de desempenho da gest├úo de ativos.",

          "topicos": [

            "Disponibilidade intr├¡nseca",

            "Disponibilidade operacional",

            "Disponibilidade global",

            "C├ílculo de disponibilidade",

            "Fatores que afetam a disponibilidade"

          ],

          "formula": "D = MTBF / (MTBF + MTTR)",

          "aplicacoes": [

            "Metas de disponibilidade em contratos de manuten├º├úo",

            "Compara├º├úo de desempenho entre linhas de produ├º├úo",

            "An├ílise de gargalos por indisponibilidade",

            "Dimensionamento de capacidade produtiva"

          ]

        },

        {

          "titulo": "MTBF ÔÇö Mean Time Between Failures",

          "definicao": "M├®trica de confiabilidade que representa o tempo m├®dio entre falhas consecutivas de um equipamento repar├ível. Quanto maior o MTBF, mais confi├ível ├® o ativo.",

          "topicos": [

            "C├ílculo do MTBF",

            "MTBF vs. MTTF (para itens n├úo repar├íveis)",

            "Coleta e valida├º├úo de dados de falha",

            "MTBF como entrada para dimensionamento de estoque",

            "Melhorias de MTBF por engenharia de confiabilidade"

          ],

          "formula": "MTBF = Tempo Total de Opera├º├úo / N├║mero de Falhas",

          "aplicacoes": [

            "Benchmarking de confiabilidade entre equipamentos similares",

            "Planejamento de manuten├º├úo preventiva",

            "Garantia de contratos de desempenho",

            "Projeto de sistemas com requisitos de confiabilidade"

          ]

        },

        {

          "titulo": "MTTR ÔÇö Mean Time To Repair",

          "definicao": "M├®trica de mantenabilidade que mede o tempo m├®dio necess├írio para reparar um equipamento ap├│s a ocorr├¬ncia de uma falha. Inclui diagn├│stico, desmontagem, reparo, montagem e teste.",

          "topicos": [

            "Componentes do MTTR",

            "Estrat├®gias para redu├º├úo do MTTR",

            "MTTR no c├ílculo de disponibilidade",

            "An├ílise de modos de falha que impactam reparo",

            "Treinamento e documenta├º├úo para redu├º├úo de MTTR"

          ],

          "formula": "MTTR = Tempo Total de Reparo / N├║mero de Falhas",

          "aplicacoes": [

            "Redu├º├úo de tempo de reparo em linhas cr├¡ticas",

            "Projeto para mantenabilidade (Design for Maintenance)",

            "Avalia├º├úo de desempenho da equipe de manuten├º├úo",

            "Dimensionamento de equipes de plant├úo"

          ]

        },

        {

          "titulo": "An├ílise de falhas (RCA)",

          "definicao": "Metodologia estruturada para identificar as causas raiz de falhas em equipamentos ou processos, utilizando ferramentas como diagrama de Ishikawa, 5 Porqu├¬s e ├írvore l├│gica de falhas. Permite implementar a├º├Áes corretivas efetivas e evitar recorr├¬ncia.",

          "topicos": [

            "M├®todo dos 5 Porqu├¬s",

            "Diagrama de Ishikawa (causa e efeito)",

            "├ürvore de falhas (FTA)",

            "An├ílise de modo e efeito de falha (FMEA)",

            "Plano de a├º├úo e valida├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Investiga├º├úo de falhas recorrentes em m├íquinas",

            "An├ílise de acidentes industriais",

            "Melhoria cont├¡nua baseada em dados de campo",

            "Redu├º├úo de custos com retrabalho de manuten├º├úo"

          ]

        },

        {

          "titulo": "Manuten├º├úo centrada em confiabilidade (MCC/RCM)",

          "definicao": "Metodologia sistem├ítica para determinar as estrat├®gias de manuten├º├úo mais adequadas para cada ativo, com base em suas fun├º├Áes, falhas funcionais e consequ├¬ncias. Utiliza diagrama de decis├úo para selecionar tarefas preventivas, preditivas ou corretivas aplic├íveis e efetivas.",

          "topicos": [

            "Diagrama de decis├úo RCM",

            "An├ílise de modos de falha e efeitos (FMEA)",

            "Sele├º├úo de tarefas de manuten├º├úo",

            "RCM vs. RCM2 vs. RCM3",

            "Implementa├º├úo RCM com softwares especializados"

          ],

          "formula": "",

          "aplicacoes": [

            "Defini├º├úo de planos de manuten├º├úo para ativos cr├¡ticos",

            "Otimiza├º├úo de custos de manuten├º├úo em refinarias",

            "Revis├úo de planos preventivos existentes",

            "Manuten├º├úo de sistemas aeron├íuticos"

          ]

        },

        {

          "titulo": "Manuten├º├úo aut├┤noma",

          "definicao": "Pilar do TPM onde os operadores de produ├º├úo realizam atividades b├ísicas de manuten├º├úo, como limpeza, lubrifica├º├úo, inspe├º├úo e pequenos ajustes. Desenvolve o senso de propriedade do equipamento e libera a equipe t├®cnica para manuten├º├Áes mais complexas.",

          "topicos": [

            "Etapas de implementa├º├úo da manuten├º├úo aut├┤noma",

            "Padr├Áes de limpeza e inspe├º├úo",

            "Treinamento de operadores",

            "Indicadores de manuten├º├úo aut├┤noma",

            "Integra├º├úo com manuten├º├úo planejada"

          ],

          "formula": "",

          "aplicacoes": [

            "Rotinas di├írias de limpeza e lubrifica├º├úo",

            "Inspe├º├úo sensorial (vis├úo, audi├º├úo, tato) por operadores",

            "Identifica├º├úo e corre├º├úo de anomalias menores",

            "Padroniza├º├úo de postos de trabalho (5S + MA)"

          ]

        },

        {

          "titulo": "Engenharia de confiabilidade",

          "definicao": "Disciplina que aplica princ├¡pios estat├¡sticos e de engenharia para garantir que um sistema ou equipamento opere sem falhas por um per├¡odo determinado. Utiliza ferramentas como distribui├º├úo de Weibull, testes de vida acelerada e an├ílise de dados de campo.",

          "topicos": [

            "Distribui├º├úo de Weibull e an├ílise de falhas",

            "Curva da banheira (infantil, aleat├│ria, desgaste)",

            "Testes de confiabilidade (ALT, HALT)",

            "Confiabilidade de sistemas: s├®rie, paralelo e k-out-of-n",

            "Predi├º├úo de confiabilidade e FMECA"

          ],

          "formula": "Rs = R1 ├ù R2 ├ù R3 (sistemas em s├®rie)",

          "aplicacoes": [

            "Previs├úo de vida ├║til de componentes cr├¡ticos",

            "Projeto de sistemas com requisitos de confiabilidade",

            "An├ílise de garantia e campo",

            "Suporte ├á decis├úo entre manuten├º├úo preventiva e corretiva"

          ]

        },

        {

          "titulo": "FMEA de equipamento",

          "definicao": "Ferramenta de an├ílise de riscos que identifica modos de falha potenciais de um equipamento, suas causas, efeitos e prioriza a├º├Áes preventivas pelo N├║mero de Prioridade de Risco (NPR). ├ë uma etapa essencial do RCM.",

          "topicos": [

            "Modo de falha, causa e efeito",

            "├ìndices de severidade, ocorr├¬ncia e detec├º├úo",

            "NPR (N├║mero de Prioridade de Risco)",

            "A├º├Áes preventivas e valida├º├úo",

            "FMEA de processo vs. FMEA de equipamento"

          ],

          "formula": "NPR = S ├ù O ├ù D",

          "aplicacoes": [

            "An├ílise de riscos em equipamentos de produ├º├úo",

            "Prioriza├º├úo de planos de manuten├º├úo",

            "Suporte ao RCM e ├á engenharia de confiabilidade",

            "Gest├úo de mudan├ºas (MOC) de equipamentos"

          ]

        },

        {

          "titulo": "An├ílise de ├│leo e vibra├º├úo",

          "definicao": "T├®cnicas preditivas complementares que monitoram a condi├º├úo de m├íquinas rotativas. A an├ílise de ├│leo identifica contamina├º├úo, desgaste e degrada├º├úo do lubrificante. A an├ílise de vibra├º├úo detecta desbalanceamento, desalinhamento e falhas de rolamentos.",

          "topicos": [

            "Espectroscopia e ferramentas de an├ílise de ├│leo",

            "An├ílise de tend├¬ncias de vibra├º├úo",

            "Espectro FFT e envelope",

            "Normas ISO 10816 (vibra├º├úo) e ISO 4406 (├│leo)",

            "Integra├º├úo com CMMS e sistemas de monitoramento on-line"

          ],

          "formula": "",

          "aplicacoes": [

            "Monitoramento de caixas de engrenagens",

            "Diagn├│stico de bombas centr├¡fugas",

            "Acompanhamento de compressores alternativos",

            "Programa de lubrifica├º├úo baseada em condi├º├úo"

          ]

        },

        {

          "titulo": "Termografia industrial",

          "definicao": "T├®cnica preditiva que utiliza c├ómeras infravermelhas para medir a temperatura superficial de equipamentos e componentes el├®tricos, identificando pontos quentes anormais que indicam falhas incipientes, como mau contato, sobrecarga e desgaste de isolamento.",

          "topicos": [

            "Princ├¡pios f├¡sicos da termografia",

            "C├ómeras t├®rmicas e configura├º├Áes",

            "Emissividade e corre├º├Áes",

            "Padr├Áes e normas (ABNT NBR 16214, ISO 18434)",

            "Categoriza├º├úo de anomalias t├®rmicas"

          ],

          "formula": "",

          "aplicacoes": [

            "Inspe├º├úo de pain├®is el├®tricos e subesta├º├Áes",

            "Detec├º├úo de falhas em isolamento t├®rmico",

            "Monitoramento de fornos e reatores",

            "An├ílise de motores e acoplamentos"

          ]

        },

        {

          "titulo": "Ultrassom industrial",

          "definicao": "T├®cnica preditiva que detecta ondas sonoras de alta frequ├¬ncia geradas por atrito, impacto, descargas el├®tricas e vazamentos. Permite identificar falhas em rolamentos, v├ílvulas, sistemas de v├ícuo e componentes el├®tricos em est├ígio inicial.",

          "topicos": [

            "F├¡sica do ultrassom aplicado ├á manuten├º├úo",

            "Detectores de ultrassom (modo heter├│dino)",

            "An├ílise de rolamentos com ultrassom",

            "Detec├º├úo de vazamentos em sistemas pressurizados",

            "Descargas parciais em equipamentos el├®tricos"

          ],

          "formula": "",

          "aplicacoes": [

            "Detec├º├úo de vazamentos em redes de ar comprimido",

            "Inspe├º├úo de rolamentos de motores",

            "Monitoramento de v├ílvulas de controle",

            "An├ílise de descargas parciais em cabos e transformadores"

          ]

        },

        {

          "titulo": "Manuten├º├úo baseada em condi├º├úo (CBM)",

          "definicao": "Estrat├®gia que recomenda a├º├Áes de manuten├º├úo com base na condi├º├úo real do equipamento, monitorada por t├®cnicas preditivas (vibra├º├úo, termografia, ├│leo, ultrassom). Substitui interven├º├Áes por tempo fixo por decis├Áes orientadas por dados de condi├º├úo.",

          "topicos": [

            "T├®cnicas de monitoramento de condi├º├úo",

            "Limites de alarme e tend├¬ncias",

            "Integra├º├úo CBM com sistemas CMMS",

            "An├ílise de custo-benef├¡cio do CBM",

            "CBM para m├íquinas rotativas e est├íticas"

          ],

          "formula": "",

          "aplicacoes": [

            "Manuten├º├úo de turbinas e geradores",

            "Monitoramento cont├¡nuo de bombas cr├¡ticas",

            "Programa CBM em frotas de caminh├Áes",

            "Gest├úo de ativos de utilidades industriais"

          ]

        },

        {

          "titulo": "Sistema de gest├úo de manuten├º├úo (CMMS/SGM)",

          "definicao": "Software integrado que gerencia todas as atividades de manuten├º├úo: ordens de servi├ºo, planejamento, hist├│rico de equipamentos, estoque de pe├ºas e indicadores. Automatiza rotinas, melhora a rastreabilidade e suporta a tomada de decis├úo baseada em dados.",

          "topicos": [

            "Funcionalidades de um CMMS",

            "Cadastro de equipamentos e ├írvore de ativos",

            "Gest├úo de ordens de servi├ºo (OS)",

            "Controle de estoque de sobressalentes",

            "Relat├│rios e KPIs automatizados"

          ],

          "formula": "",

          "aplicacoes": [

            "Implanta├º├úo de sistema CMMS em plantas industriais",

            "Gest├úo de manuten├º├úo de frotas",

            "Controle de ordens de servi├ºo em hospitais",

            "Manuten├º├úo predial e facilities management"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Kardec, A.; Nascif, J. Manutenção: Função Estratégica. 4. ed. Rio de Janeiro: Qualitymark, 2015."},
      {"tipo": "Livro", "ref": "Fogliatto, F. S.; Ribeiro, J. L. D. Confiabilidade e Manutenção Industrial. Rio de Janeiro: Elsevier, 2009."},
      {"tipo": "Livro", "ref": "Xenos, H. G. Gerenciando a Manutenção Produtiva. Nova Lima: Falconi, 2014."}
    ]},

    {

      "id": "ergonomia",

      "nome": "Engenharia do Trabalho",

      "icone": "users",

      "cor": "#0284c7",

      "descricao": "Ergonomia, seguran├ºa do trabalho e sa├║de ocupacional.",

      "subtopicos": [

        {

          "titulo": "Ergonomia f├¡sica",

          "definicao": "Ramo da ergonomia que estuda a intera├º├úo entre o corpo humano e os elementos do sistema de trabalho, incluindo posturas, movimentos repetitivos, aplica├º├úo de for├ºa e organiza├º├úo f├¡sica do posto. Busca prevenir les├Áes musculoesquel├®ticas (LER/DORT) e promover conforto.",

          "topicos": [

            "Posturas no trabalho",

            "Movimentos repetitivos",

            "Aplica├º├úo de for├ºa",

            "Antropometria est├ítica e din├ómica",

            "Biomec├ónica ocupacional"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de postos de trabalho em linhas de montagem",

            "Dimensionamento de mesas e cadeiras para escrit├│rios",

            "An├ílise de riscos biomec├ónicos em atividades manuais",

            "Adequa├º├úo de ferramentas manuais"

          ]

        },

        {

          "titulo": "Ergonomia cognitiva",

          "definicao": "Campo que estuda os processos mentais envolvidos no trabalho: percep├º├úo, mem├│ria, racioc├¡nio, tomada de decis├úo e carga mental. Preocupa-se com a usabilidade de interfaces, complexidade de tarefas e fatores que afetam o desempenho cognitivo do trabalhador.",

          "topicos": [

            "Carga mental e fadiga cognitiva",

            "Usabilidade de interfaces homem-m├íquina",

            "Tomada de decis├úo sob press├úo",

            "Sistemas de alarme e alerta",

            "Fatores humanos em salas de controle"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de IHMs de salas de controle",

            "Simplifica├º├úo de procedimentos operacionais",

            "Redu├º├úo de erros humanos em centros de distribui├º├úo",

            "Treinamento cognitivo para operadores"

          ]

        },

        {

          "titulo": "Ergonomia organizacional",

          "definicao": "Dimens├úo da ergonomia que trata da estrutura├º├úo dos sistemas de trabalho, incluindo turnos, ritmo, conte├║do das tarefas, comunica├º├úo e cultura organizacional. Visa otimizar a efici├¬ncia do sistema considerando o bem-estar e a satisfa├º├úo dos trabalhadores.",

          "topicos": [

            "Organiza├º├úo do trabalho e turnos",

            "Trabalho em equipe e comunica├º├úo",

            "Gest├úo participativa",

            "Conte├║do e enriquecimento de tarefas",

            "Cultura de seguran├ºa"

          ],

          "formula": "",

          "aplicacoes": [

            "Reestrutura├º├úo de escalas de turno",

            "Programas de trabalho em equipe autogerenciada",

            "An├ílise de carga de trabalho em call centers",

            "Implementa├º├úo de ciclos de melhoria participativa"

          ]

        },

        {

          "titulo": "Seguran├ºa do trabalho",

          "definicao": "Conjunto de medidas t├®cnicas, educacionais e administrativas para prevenir acidentes e doen├ºas ocupacionais. Engloba identifica├º├úo de riscos, implementa├º├úo de medidas de controle e promo├º├úo de uma cultura de seguran├ºa nas organiza├º├Áes.",

          "topicos": [

            "Preven├º├úo de acidentes",

            "An├ílise de riscos (APR)",

            "Inspe├º├Áes de seguran├ºa",

            "Treinamentos (NRs, CIPA)",

            "Indicadores de seguran├ºa (TAE, TTF)"

          ],

          "formula": "TAE = (N┬║ de acidentes ├ù 1.000.000) / Horas-homem trabalhadas",

          "aplicacoes": [

            "Programas de seguran├ºa comportamental",

            "An├ílise de riscos em atividades cr├¡ticas",

            "Investiga├º├úo de acidentes do trabalho",

            "Elabora├º├úo de planos de emerg├¬ncia"

          ]

        },

        {

          "titulo": "Higiene ocupacional",

          "definicao": "Ci├¬ncia que antecipa, reconhece, avalia e controla agentes ambientais (f├¡sicos, qu├¡micos e biol├│gicos) presentes nos locais de trabalho que podem causar doen├ºas ou desconforto. Fundamental para a preserva├º├úo da sa├║de do trabalhador.",

          "topicos": [

            "Agentes f├¡sicos (ru├¡do, calor, radia├º├úo, vibra├º├úo)",

            "Agentes qu├¡micos (gases, vapores, poeiras)",

            "Agentes biol├│gicos (fungos, bact├®rias, v├¡rus)",

            "Limites de exposi├º├úo ocupacional (LT, TWA, STEL)",

            "T├®cnicas de medi├º├úo e amostragem"

          ],

          "formula": "",

          "aplicacoes": [

            "Medi├º├úo de ru├¡do em ind├║strias metal├║rgicas",

            "Avalia├º├úo de exposi├º├úo a poeira de s├¡lica",

            "Controle de agentes biol├│gicos em hospitais",

            "Monitoramento de calor em fundi├º├Áes"

          ]

        },

        {

          "titulo": "NRs ÔÇö Normas Regulamentadoras",

          "definicao": "Conjunto de disposi├º├Áes legais complementares ├á Consolida├º├úo das Leis do Trabalho (CLT) que estabelecem obriga├º├Áes e requisitos m├¡nimos para a seguran├ºa e sa├║de no trabalho no Brasil. S├úo atualizadas pela Secretaria de Inspe├º├úo do Trabalho.",

          "topicos": [

            "NR-17 ÔÇö Ergonomia",

            "NR-12 ÔÇö Seguran├ºa em M├íquinas",

            "NR-35 ÔÇö Trabalho em Altura",

            "NR-33 ÔÇö Espa├ºo Confinado",

            "NR-06 ÔÇö EPI"

          ],

          "formula": "",

          "aplicacoes": [

            "Adequa├º├úo de m├íquinas ├á NR-12",

            "Elabora├º├úo de laudos ergon├┤micos (NR-17)",

            "Gest├úo de EPIs conforme NR-06",

            "Permiss├úo de trabalho conforme NR-35 e NR-33"

          ]

        },

        {

          "titulo": "An├ílise Ergon├┤mica do Trabalho (AET)",

          "definicao": "Metodologia de an├ílise aprofundada da situa├º├úo real de trabalho, que investiga a atividade do trabalhador, as condi├º├Áes de execu├º├úo e as exig├¬ncias f├¡sicas e cognitivas. Subsidia recomenda├º├Áes de melhoria para adequar o trabalho ao ser humano.",

          "topicos": [

            "Demanda, tarefa e atividade",

            "Observa├º├úo global e sistem├ítica",

            "Entrevistas e autoconfronta├º├úo",

            "An├ílise da atividade real vs. prescrita",

            "Recomenda├º├Áes ergon├┤micas"

          ],

          "formula": "",

          "aplicacoes": [

            "Diagn├│stico ergon├┤mico em montadoras",

            "Adequa├º├úo de postos administrativos",

            "Melhoria de processos com alto absente├¡smo",

            "AET como subs├¡dio para a├º├úo civil p├║blica"

          ]

        },

        {

          "titulo": "Redu├º├úo de acidentes",

          "definicao": "Conjunto de estrat├®gias e programas cont├¡nuos para diminuir a ocorr├¬ncia de acidentes do trabalho, combinando engenharia de seguran├ºa, treinamento, gest├úo comportamental e an├ílise de dados hist├│ricos para eliminar causas raiz.",

          "topicos": [

            "Programa de preven├º├úo de acidentes",

            "An├ílise de quase-acidentes",

            "Cultura de seguran├ºa",

            "Indicadores proativos e reativos",

            "C├¡rculos de seguran├ºa (kaizen de seguran├ºa)"

          ],

          "formula": "Taxa de Frequ├¬ncia (TF) = (N ├ù 1.000.000) / HHT",

          "aplicacoes": [

            "Programa de metas de seguran├ºa em obras",

            "Campanhas de seguran├ºa comportamental",

            "Sistema de reporte de quase-acidentes",

            "An├ílise de tend├¬ncias de acidentalidade"

          ]

        },

        {

          "titulo": "PPRA e PCMSO",

          "definicao": "Programas regulamentados pelas NRs brasileiras: PPRA (Programa de Preven├º├úo de Riscos Ambientais, substitu├¡do pelo PGR) e PCMSO (Programa de Controle M├®dico de Sa├║de Ocupacional). O PGR identifica e gerencia riscos ocupacionais; o PCMSO monitora a sa├║de dos trabalhadores por exames peri├│dicos.",

          "topicos": [

            "PGR ÔÇö Programa de Gerenciamento de Riscos",

            "Invent├írio de riscos ocupacionais",

            "Plano de a├º├úo do PGR",

            "PCMSO e exames m├®dicos (admissional, peri├│dico, demissional)",

            "ASO ÔÇö Atestado de Sa├║de Ocupacional"

          ],

          "formula": "",

          "aplicacoes": [

            "Elabora├º├úo de PGR para ind├║strias",

            "Gest├úo de ASO em empresas de grande porte",

            "Programa de exames peri├│dicos em mineradoras",

            "Monitoramento de exposi├º├úo a agentes nocivos"

          ]

        },

        {

          "titulo": "CIPA e SESMT",

          "definicao": "CIPA (Comiss├úo Interna de Preven├º├úo de Acidentes) ├® uma comiss├úo parit├íria de trabalhadores e empregados que promove a preven├º├úo. SESMT (Servi├ºos Especializados em Engenharia de Seguran├ºa e em Medicina do Trabalho) ├® a equipe t├®cnica multidisciplinar obrigat├│ria conforme grau de risco.",

          "topicos": [

            "Dimensionamento da CIPA (NR-05)",

            "Dimensionamento do SESMT (NR-04)",

            "Atribui├º├Áes e funcionamento da CIPA",

            "Engenheiro de seguran├ºa, t├®cnico, m├®dico e enfermeiro do trabalho",

            "Mapeamento de riscos pela CIPA"

          ],

          "formula": "",

          "aplicacoes": [

            "Reuni├Áes e inspe├º├Áes de CIPA em f├íbricas",

            "Elabora├º├úo de mapa de riscos",

            "Gest├úo do SESMT em canteiros de obras",

            "Treinamento de brigada de emerg├¬ncia"

          ]

        },

        {

          "titulo": "EPI e EPC",

          "definicao": "EPI (Equipamento de Prote├º├úo Individual) protege o trabalhador individualmente contra riscos espec├¡ficos (capacete, luva, ├│culos). EPC (Equipamento de Prote├º├úo Coletiva) protege um grupo (redes de prote├º├úo, enclausuramento, exaust├úo). Ambos regulados pela NR-06.",

          "topicos": [

            "Tipos de EPI (cabe├ºa, olhos, vias a├®reas, m├úos, p├®s)",

            "Certifica├º├úo e CA (Certificado de Aprova├º├úo)",

            "Exaust├úo e ventila├º├úo local (EPC)",

            "Enclausuramento de m├íquinas",

            "Treinamento e guarda de EPI"

          ],

          "formula": "",

          "aplicacoesacoes": [

            "Distribui├º├úo e controle de EPI em ind├║strias",

            "Instala├º├úo de sistema de exaust├úo em soldagem",

            "Prote├º├úo de m├íquinas com sensores de seguran├ºa",

            "Programa de conscientiza├º├úo de uso de EPI"

          ]

        },

        {

          "titulo": "LOTO ÔÇö Lockout Tagout",

          "definicao": "Procedimento de seguran├ºa que isola fontes de energia (el├®trica, mec├ónica, pneum├ítica, t├®rmica) de m├íquinas e equipamentos durante manuten├º├úo ou limpeza, utilizando cadeados e etiquetas de bloqueio. Previne acionamentos acidentais e protege a equipe.",

          "topicos": [

            "Procedimento de bloqueio e etiquetagem",

            "Identifica├º├úo de pontos de energia",

            "Cadeados, hasps e etiquetas",

            "Verifica├º├úo de zero energia",

            "Treinamento e auditoria LOTO"

          ],

          "formula": "",

          "aplicacoes": [

            "Bloqueio de pain├®is el├®tricos para manuten├º├úo",

            "Isolamento de bombas e v├ílvulas",

            "Manuten├º├úo de prensas e injetoras",

            "Procedimentos em refinarias e plantas qu├¡micas"

          ]

        },

        {

          "titulo": "Ergonomia de posto de trabalho",

          "definicao": "Aplica├º├úo de princ├¡pios ergon├┤micos ao design de esta├º├Áes de trabalho, considerando as dimens├Áes antropom├®tricas, alcances, ├óngulos de vis├úo e ajustabilidade dos m├│veis e equipamentos. Visa conforto, efici├¬ncia e preven├º├úo de les├Áes.",

          "topicos": [

            "Dimensionamento de bancadas e mesas",

            "Ajustabilidade de cadeiras e suportes",

            "Posicionamento de monitores e teclados",

            "Ilumina├º├úo e ofuscamento",

            "An├ílise de alcance e zonas de conforto"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de postos de trabalho administrativos",

            "Adega├º├úo de c├®lulas de produ├º├úo com esteiras",

            "Postos de checkout em supermercados",

            "Cabines de opera├º├úo de m├íquinas"

          ]

        },

        {

          "titulo": "Antropometria",

          "definicao": "Ci├¬ncia da medi├º├úo das dimens├Áes e propor├º├Áes do corpo humano, aplicada ao design de postos de trabalho, equipamentos e produtos. Considera vari├íveis como estatura, alcance e per├¡metros para projetar para a popula├º├úo usu├íria.",

          "topicos": [

            "Medidas antropom├®tricas est├íticas e din├ómicas",

            "Percentis e popula├º├úo-alvo",

            "Bases de dados antropom├®tricos brasileiros",

            "Aplica├º├úo: projeto para extremos vs. ajust├ível",

            "Diferen├ºas entre g├¬neros e etnias"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de cadeiras e assentos",

            "Dimensionamento de cabines de ve├¡culos",

            "Mobili├írio escolar",

            "Postos de trabalho em linhas de montagem"

          ]

        },

        {

          "titulo": "Biomec├ónica ocupacional",

          "definicao": "Estudo dos movimentos, for├ºas e momentos atuantes no corpo humano durante o trabalho, aplicando princ├¡pios da mec├ónica para analisar posturas, esfor├ºos e riscos de les├Áes. Auxilia no projeto de tarefas com menor exig├¬ncia f├¡sica.",

          "topicos": [

            "Cinem├ítica e cin├®tica do movimento humano",

            "Modelos biomec├ónicos (2D e 3D)",

            "An├ílise de levantamento de carga (NIOSH)",

            "Torque e compress├úo no disco lombar",

            "Ferramentas de an├ílise (3DSSPP, AnyBody)"

          ],

          "formula": "Equa├º├úo NIOSH: RWL = LC ├ù HM ├ù VM ├ù DM ├ù AM ├ù FM ├ù CM",

          "aplicacoes": [

            "An├ílise de riscos de les├úo em levantamento de carga",

            "Projeto de movimenta├º├úo de materiais",

            "Avalia├º├úo ergon├┤mica de ferramentas manuais",

            "Redu├º├úo de dist├║rbios osteomusculares"

          ]

        },

        {

          "titulo": "Fatores humanos (Human Factors)",

          "definicao": "Disciplina que estuda as capacidades e limita├º├Áes humanas no contexto de sistemas homem-m├íquina, integrando psicologia, engenharia e design. Busca otimizar o desempenho do sistema considerando os aspectos humanos, melhorando seguran├ºa e efici├¬ncia.",

          "topicos": [

            "Erro humano e confiabilidade humana",

            "Carga de trabalho e vigil├óncia",

            "Tomada de decis├úo em situa├º├Áes de emerg├¬ncia",

            "Sistemas de alarme e automa├º├úo",

            "Usabilidade e experi├¬ncia do usu├írio"

          ],

          "formula": "HEART: Probabilidade de erro humano (HEP) = NEP ├ù EPC ├ù APC",

          "aplicacoes": [

            "Projeto de salas de controle de usinas",

            "An├ílise de erros em procedimentos de manuten├º├úo",

            "Interfaces de sistemas cr├¡ticos (avia├º├úo, nuclear)",

            "Treinamento de equipes para situa├º├Áes de crise"

          ]

        },

        {

          "titulo": "An├ílise de riscos (APR)",

          "definicao": "Ferramenta de seguran├ºa que identifica, avalia e controla os riscos de cada etapa de uma atividade ou tarefa, antes de sua execu├º├úo. ├ë realizada por meio de formul├írio padronizado e discutida com a equipe envolvida.",

          "topicos": [

            "Etapas da APR: identifica├º├úo, avalia├º├úo, controle",

            "Hierarquia de controles (elimina├º├úo, substitui├º├úo, engenharia, administrativo, EPI)",

            "APR para trabalho em altura, el├®trico, espa├ºo confinado",

            "Permiss├úo de Trabalho (PT)",

            "An├ílise preliminar de riscos (APR) no projeto"

          ],

          "formula": "Risco = Probabilidade ├ù Severidade",

          "aplicacoes": [

            "APR para manuten├º├úo em altura",

            "APR para opera├º├úo de m├íquinas cr├¡ticas",

            "An├ílise de riscos em atividades de log├¡stica",

            "PT para trabalho a quente e escava├º├úo"

          ]

        },

        {

          "titulo": "Mapa de riscos",

          "definicao": "Representa├º├úo gr├ífica dos riscos existentes em cada setor ou posto de trabalho, utilizando c├¡rculos de tamanhos e cores diferentes para classificar a gravidade e tipo de risco (f├¡sico, qu├¡mico, biol├│gico, ergon├┤mico, de acidente). Exig├¬ncia da CIPA.",

          "topicos": [

            "Cores padr├úo dos riscos (verde, vermelho, marrom, amarelo, azul)",

            "Levantamento de riscos com os trabalhadores",

            "Representa├º├úo gr├ífica do layout",

            "Atualiza├º├úo peri├│dica",

            "Divulga├º├úo e treinamento sobre o mapa"

          ],

          "formula": "",

          "aplicacoes": [

            "Mapeamento de riscos em ind├║strias",

            "Mapa de riscos em canteiros de obra",

            "Identifica├º├úo participativa de perigos",

            "Comunica├º├úo visual de seguran├ºa"

          ]

        },

        {

          "titulo": "Preven├º├úo de acidentes",

          "definicao": "Conjunto integrado de medidas de engenharia, treinamento, gest├úo e cultura organizacional para eliminar ou reduzir a ocorr├¬ncia de acidentes do trabalho. Envolve identifica├º├úo de perigos, an├ílise de causas e implementa├º├úo de controles efetivos.",

          "topicos": [

            "Teoria dos domin├│s de Heinrich",

            "Modelo de Reason (queijo su├¡├ºo)",

            "Causas imediatas e b├ísicas de acidentes",

            "Investiga├º├úo de acidentes",

            "Indicadores de desempenho em seguran├ºa"

          ],

          "formula": "",

          "aplicacoes": [

            "Programa de seguran├ºa baseada em comportamento",

            "Sistema de gest├úo de seguran├ºa (ISO 45001)",

            "Auditorias de seguran├ºa em plantas industriais",

            "Campanhas de preven├º├úo sazonais"

          ]

        },

        {

          "titulo": "ERP e GRO (Gest├úo de Riscos Ocupacionais)",

          "definicao": "Conjunto de processos integrados para identificar, analisar, avaliar e controlar os riscos ocupacionais (GRO), conforme NR-01. O ERP (Exame de Riscos Profissionais) ├® uma abordagem estruturada de gest├úo sistem├ítica de riscos ├á sa├║de e seguran├ºa dos trabalhadores.",

          "topicos": [

            "Processo GRO segundo NR-01",

            "Invent├írio de riscos ocupacionais",

            "Plano de a├º├úo do PGR",

            "Monitoramento e revis├úo peri├│dica",

            "Integra├º├úo GRO com outros sistemas (SGI)"

          ],

          "formula": "",

          "aplicacoesacoes": [

            "Implanta├º├úo do GRO em ind├║strias",

            "Gest├úo integrada de riscos e seguran├ºa",

            "Auditoria interna de PGR",

            "Revis├úo anual de riscos ocupacionais"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Iida, I.; Guimarães, L. B. M. Ergonomia: Projeto e Produção. 3. ed. São Paulo: Blucher, 2016."},
      {"tipo": "Norma", "ref": "Brasil. NR-17: Ergonomia. Brasília: Ministério do Trabalho, 2020."},
      {"tipo": "Livro", "ref": "Dul, J.; Weerdmeester, B. Ergonomia Prática. 2. ed. São Paulo: Blucher, 1995."},
      {"tipo": "Livro", "ref": "Dejours, C. A Loucura do Trabalho. 5. ed. São Paulo: Cortez, 1988."}
    ]},

    {

      "id": "sustentabilidade",

      "nome": "Sustentabilidade",

      "icone": "leaf",

      "cor": "#22c55e",

      "descricao": "Pr├íticas sustent├íveis, ESG e economia circular na ind├║stria.",

      "subtopicos": [

        {

          "titulo": "ESG ÔÇö Environmental, Social and Governance",

          "definicao": "Conjunto de crit├®rios ambientais, sociais e de governan├ºa usados para avaliar o desempenho de sustentabilidade e a responsabilidade corporativa. Diferencia empresas comprometidas com pr├íticas ├®ticas e de baixo impacto, influenciando investidores e consumidores.",

          "topicos": [

            "Pilar Ambiental (E): emiss├Áes, res├¡duos, recursos",

            "Pilar Social (S): direitos humanos, diversidade, comunidade",

            "Pilar Governan├ºa (G): compliance, transpar├¬ncia, ├®tica",

            "ESG ratings e ag├¬ncias avaliadoras",

            "Relat├│rios ESG e frameworks (GRI, SASB, TCFD)"

          ],

          "formula": "",

          "aplicacoes": [

            "Estrutura├º├úo de comit├¬ ESG corporativo",

            "Reporte anual de sustentabilidade",

            "Sele├º├úo de fornecedores com crit├®rios ESG",

            "Acesso a linhas de cr├®dito verdes (green bonds)"

          ]

        },

        {

          "titulo": "Economia circular",

          "definicao": "Modelo econ├┤mico regenerativo que mant├®m produtos, materiais e recursos em uso pelo maior tempo poss├¡vel, eliminando res├¡duos e polui├º├úo. Baseia-se em tr├¬s princ├¡pios: eliminar res├¡duos e polui├º├úo, circular materiais em seu maior valor e regenerar a natureza.",

          "topicos": [

            "Princ├¡pios da economia circular (Ellen MacArthur Foundation)",

            "10 R's da circularidade (Recusar, Reduzir, Reusar, Reciclar...)",

            "Ciclos biol├│gicos e t├®cnicos",

            "Design para circularidade",

            "Modelos de neg├│cio circulares (PaaS, servitiza├º├úo)"

          ],

          "formula": "",

          "aplicacoes": [

            "Cadeias produtivas com res├¡duo zero",

            "Remanufatura de motores e componentes",

            "Produto como servi├ºo (lighting as a service)",

            "Log├¡stica reversa de eletr├┤nicos"

          ]

        },

        {

          "titulo": "Gest├úo ambiental",

          "definicao": "Sistema estruturado de pol├¡ticas, pr├íticas e procedimentos que uma organiza├º├úo adota para controlar seus impactos ambientais, cumprir regulamenta├º├Áes e melhorar continuamente seu desempenho ecol├│gico. Frequentemente alinhada ├á ISO 14001.",

          "topicos": [

            "Pol├¡tica ambiental e objetivos",

            "Aspectos e impactos ambientais",

            "Atendimento a requisitos legais",

            "SGA ÔÇö Sistema de Gest├úo Ambiental",

            "Auditoria ambiental (interna e externa)"

          ],

          "formula": "",

          "aplicacoes": [

            "Implementa├º├úo de SGA conforme ISO 14001",

            "Gest├úo de licenciamento ambiental",

            "Programa de redu├º├úo de consumo de ├ígua",

            "Monitoramento de efluentes e emiss├Áes"

          ]

        },

        {

          "titulo": "Efici├¬ncia energ├®tica",

          "definicao": "Uso otimizado de energia para realizar um trabalho, reduzindo o consumo sem comprometer a produtividade. Envolve substitui├º├úo de equipamentos, automa├º├úo de sistemas, recupera├º├úo de calor e ado├º├úo de fontes renov├íveis.",

          "topicos": [

            "Diagn├│stico energ├®tico e benchmarking",

            "Motores de alta efici├¬ncia (IE3/IE4)",

            "Sistemas de ilumina├º├úo LED com controle",

            "Recupera├º├úo de calor residual",

            "Cogera├º├úo e trigera├º├úo"

          ],

          "formula": "Efici├¬ncia (%) = Energia ├║til / Energia total consumida ├ù 100",

          "aplicacoes": [

            "Industrial ÔÇö otimiza├º├úo de utilidades",

            "Substitui├º├úo de motores el├®tricos antigos",

            "Gest├úo de demanda em hor├írio de ponta",

            "Certifica├º├úo Procel e etiquetagem energ├®tica"

          ]

        },

        {

          "titulo": "Gest├úo de res├¡duos s├│lidos",

          "definicao": "Conjunto de atividades de coleta, segrega├º├úo, armazenamento, transporte, tratamento e disposi├º├úo final de res├¡duos, seguindo a hierarquia: n├úo gera├º├úo, redu├º├úo, reuso, reciclagem, tratamento e disposi├º├úo final. Regida pela Pol├¡tica Nacional de Res├¡duos S├│lidos (PNRS).",

          "topicos": [

            "Classifica├º├úo de res├¡duos (perigosos e n├úo perigosos ÔÇö NBR 10004)",

            "Coleta seletiva e log├¡stica reversa",

            "Tratamento (incinera├º├úo, compostagem, aterro)",

            "MTR ÔÇö Manifesto de Transporte de Res├¡duos",

            "Indicadores de gest├úo de res├¡duos"

          ],

          "formula": "",

          "aplicacoes": [

            "Plano de gerenciamento de res├¡duos industriais",

            "Programa de reciclagem em f├íbricas",

            "Destina├º├úo de res├¡duos perigosos",

            "Coprocessamento em fornos de cimento"

          ]

        },

        {

          "titulo": "Pegada de carbono (Carbon Footprint)",

          "definicao": "Medida da quantidade total de gases de efeito estufa (GEE) emitidos direta ou indiretamente por uma atividade, produto, servi├ºo ou organiza├º├úo, expressa em toneladas de CO2 equivalente (tCO2e). Base para estrat├®gias de neutraliza├º├úo clim├ítica.",

          "topicos": [

            "Escopos 1, 2 e 3 de emiss├Áes (GHG Protocol)",

            "C├ílculo de emiss├Áes diretas e indiretas",

            "Fatores de emiss├úo por fonte energ├®tica",

            "Compensa├º├úo via cr├®ditos de carbono",

            "Declara├º├úo de pegada de carbono de produto"

          ],

          "formula": "Pegada de Carbono (tCOÔéée) = ╬ú (Dado de Atividade ├ù Fator de Emiss├úo)",

          "aplicacoes": [

            "Invent├írio corporativo de GEE",

            "Rotulagem de pegada de carbono em produtos",

            "Compensa├º├úo de viagens corporativas",

            "Relat├│rios CDP (Carbon Disclosure Project)"

          ]

        },

        {

          "titulo": "Produ├º├úo mais limpa (P+L)",

          "definicao": "Estrat├®gia ambiental preventiva aplicada a processos, produtos e servi├ºos para aumentar a ecoefici├¬ncia e reduzir riscos ├á sa├║de humana e ao meio ambiente. Atua na fonte, minimizando o uso de mat├®rias-primas e a gera├º├úo de res├¡duos.",

          "topicos": [

            "N├¡veis da P+L (fonte, reciclagem interna, externa)",

            "Ecoefici├¬ncia e indicadores",

            "Substitui├º├úo de insumos t├│xicos",

            "Otimiza├º├úo de processos",

            "Estudos de caso P+L em setores industriais"

          ],

          "formula": "",

          "aplicacoes": [

            "Redu├º├úo de solventes em pintura industrial",

            "Minimiza├º├úo de perdas em processos t├¬xteis",

            "Substitui├º├úo de combust├¡veis f├│sseis",

            "Programas P+L em curtumes e frigor├¡ficos"

          ]

        },

        {

          "titulo": "ISO 14001:2024",

          "definicao": "Norma internacional que especifica requisitos para um Sistema de Gest├úo Ambiental (SGA), permitindo que organiza├º├Áes melhorem seu desempenho ambiental, cumpram obriga├º├Áes legais e alcancem objetivos ambientais de forma sistem├ítica.",

          "topicos": [

            "Estrutura PDCA aplicada ao SGA",

            "Contexto da organiza├º├úo e partes interessadas",

            "Pol├¡tica ambiental e planejamento",

            "Avalia├º├úo de desempenho e auditoria",

            "Melhoria cont├¡nua e n├úo conformidades"

          ],

          "formula": "",

          "aplicacoes": [

            "Certifica├º├úo de SGA em ind├║strias",

            "Integra├º├úo com ISO 9001 e 45001",

            "Redu├º├úo de multas e passivos ambientais",

            "Diferencial competitivo em licita├º├Áes"

          ]

        },

        {

          "titulo": "Log├¡stica reversa",

          "definicao": "Processo de planejamento, implementa├º├úo e controle do fluxo reverso de produtos e materiais ap├│s o consumo, para reaproveitamento, reciclagem ou descarte adequado. Instrumento da PNRS que compartilha responsabilidade entre fabricantes, distribuidores e consumidores.",

          "topicos": [

            "Canais de distribui├º├úo reversos",

            "Acordos setoriais de log├¡stica reversa",

            "Centros de coleta e triagem",

            "Fluxos: embalagens, eletroeletr├┤nicos, pneus, ├│leo",

            "Indicadores de retorno e reciclagem"

          ],

          "formula": "",

          "aplicacoes": [

            "Sistema de log├¡stica reversa de embalagens",

            "Retorno de baterias e pilhas p├│s-consumo",

            "Reaproveitamento de res├¡duos eletr├┤nicos",

            "Programa de reciclagem de pneus inserv├¡veis"

          ]

        },

        {

          "titulo": "Relat├│rio de sustentabilidade (GRI)",

          "definicao": "Documento corporativo que divulga o desempenho econ├┤mico, ambiental e social de uma organiza├º├úo, seguindo padr├Áes da Global Reporting Initiative (GRI). Permite transpar├¬ncia e comparabilidade para stakeholders, incluindo investidores e sociedade.",

          "topicos": [

            "Padr├Áes GRI (Universal, Setoriais, Tem├íticos)",

            "Materialidade e engajamento de stakeholders",

            "Indicadores GRI por dimens├úo",

            "Verifica├º├úo externa e assurance",

            "Relato integrado (IIRC) e sinergia GRI"

          ],

          "formula": "",

          "aplicacoes": [

            "Elabora├º├úo de relat├│rio anual GRI",

            "Reporte de ODS nos relat├│rios",

            "Comunica├º├úo de progresso ESG",

            "Benchmarking setorial de sustentabilidade"

          ]

        },

        {

          "titulo": "An├ílise de ciclo de vida (ACV)",

          "definicao": "Metodologia padronizada (ISO 14040/14044) que quantifica os impactos ambientais de um produto, processo ou servi├ºo ao longo de todo seu ciclo de vida ÔÇö da extra├º├úo de mat├®rias-primas ao descarte final. Identifica hotspots e oportunidades de melhoria.",

          "topicos": [

            "Etapas da ACV: defini├º├úo de objetivo, ICV, AICV, interpreta├º├úo",

            "Categorias de impacto (aquecimento global, acidifica├º├úo, eutrofiza├º├úo)",

            "Softwares de ACV (SimaPro, GaBi, OpenLCA)",

            "Bancos de dados (Ecoinvent, ELCD)",

            "Declara├º├úo Ambiental de Produto (EPD)"

          ],

          "formula": "",

          "aplicacoes": [

            "Compara├º├úo de impacto entre embalagens",

            "Design ecol├│gico de produtos",

            "Rotulagem ambiental (Tipo I, II, III)",

            "Suporte a declara├º├Áes de produto neutro em carbono"

          ]

        },

        {

          "titulo": "Invent├írio de GEE",

          "definicao": "Documento que quantifica as emiss├Áes e remo├º├Áes de gases de efeito estufa de uma organiza├º├úo, seguindo metodologias como GHG Protocol e IPCC. Base para estrat├®gias de redu├º├úo, relat├│rios ESG e participa├º├úo em mercados de carbono.",

          "topicos": [

            "GHG Protocol ÔÇö Escopos 1, 2, 3",

            "Metodologia IPCC para c├ílculo",

            "Incerteza e garantia de qualidade",

            "Relat├│rio de invent├írio e verifica├º├úo",

            "Metas baseadas na ci├¬ncia (SBTi)"

          ],

          "formula": "Emiss├úo = Dado de Atividade ├ù Fator de Emiss├úo ├ù GWP",

          "aplicacoes": [

            "Invent├írio corporativo anual de GEE",

            "Registro p├║blico no Programa GHG Protocol",

            "Metas SBTi (Science Based Targets)",

            "Relat├│rio para bolsas de carbono"

          ]

        },

        {

          "titulo": "Cr├®dito de carbono",

          "definicao": "Certificado financeiro que representa a redu├º├úo ou remo├º├úo de uma tonelada de CO2 equivalente da atmosfera. Pode ser negociado em mercados regulados (MDL, ETS) ou volunt├írios (VCS, Gold Standard). Instrumento para financiar projetos clim├íticos.",

          "topicos": [

            "Mercado regulado (Sistema Brasileiro de Com├®rcio de Emiss├Áes ÔÇö SBCE)",

            "Mercado volunt├írio global",

            "Metodologias de projetos de cr├®dito",

            "Registros (Verra, Gold Standard, MDL)",

            "Compra e venda de cr├®ditos de carbono"

          ],

          "formula": "1 Cr├®dito = 1 tCOÔéée reduzida ou removida",

          "aplicacoes": [

            "Projetos de reflorestamento e REDD+",

            "Gera├º├úo de energia renov├ível",

            "Efici├¬ncia energ├®tica industrial",

            "Metas de carbono neutro corporativo"

          ]

        },

        {

          "titulo": "Indicadores de sustentabilidade",

          "definicao": "M├®tricas quantitativas e qualitativas usadas para medir e comunicar o desempenho de sustentabilidade de uma organiza├º├úo nas dimens├Áes ambiental, social e econ├┤mica. Permitem monitoramento de metas, benchmarking e transpar├¬ncia com stakeholders.",

          "topicos": [

            "Indicadores de press├úo, estado e resposta (PER)",

            "Indicadores ambientais: emiss├Áes, ├ígua, res├¡duos, energia",

            "Indicadores sociais: seguran├ºa, diversidade, treinamento",

            "Indicadores econ├┤micos: valor distribu├¡do, investimento socioambiental",

            "Painel de indicadores ESG integrados"

          ],

          "formula": "Intensidade de Carbono = tCOÔéée / Receita L├¡quida",

          "aplicacoes": [

            "Dashboard de sustentabilidade corporativa",

            "Relato anual de indicadores GRI",

            "Metas ESG e acompanhamento trimestral",

            "Benchmarking setorial de sustentabilidade"

          ]

        },

        {

          "titulo": "ODS ÔÇö Objetivos de Desenvolvimento Sustent├ível",

          "definicao": "Conjunto de 17 objetivos globais estabelecidos pela ONU na Agenda 2030, que abordam desafios como erradica├º├úo da pobreza, a├º├úo clim├ítica, consumo respons├ível e inova├º├úo industrial. As empresas mapeiam sua contribui├º├úo para os ODS como parte da estrat├®gia ESG.",

          "topicos": [

            "17 ODS e suas metas",

            "ODS 9 ÔÇö Ind├║stria, Inova├º├úo e Infraestrutura",

            "ODS 12 ÔÇö Consumo e Produ├º├úo Respons├íveis",

            "ODS 13 ÔÇö A├º├úo Clim├ítica",

            "Mapeamento de impacto nos ODS e relato"

          ],

          "formula": "",

          "aplicacoes": [

            "Alinhamento de estrat├®gia corporativa aos ODS",

            "Relato de contribui├º├úo aos ODS",

            "Inova├º├úo de produtos alinhada ao ODS 12",

            "Programas sociais alinhados ao ODS 1 e 10"

          ]

        },

        {

          "titulo": "Rotulagem ambiental",

          "definicao": "Sistema de certifica├º├úo que atesta o desempenho ambiental de produtos ou servi├ºos, permitindo que consumidores identifiquem op├º├Áes mais sustent├íveis. Divide-se em Tipo I (ISO 14024), Tipo II (autodeclara├º├Áes, ISO 14021) e Tipo III (EPD, ISO 14025).",

          "topicos": [

            "Selos ambientais no Brasil (ABNT, Procel, FSC, Ecolabel)",

            "Declara├º├Áes ambientais de produto (EPD)",

            "Crit├®rios de certifica├º├úo e verifica├º├úo",

            "Greenwashing e boas pr├íticas de comunica├º├úo",

            "Impacto na decis├úo de compra B2B e B2C"

          ],

          "formula": "",

          "aplicacoes": [

            "Certifica├º├úo FSC para produtos de papel",

            "Selos de efici├¬ncia energ├®tica (Procel/Energy Star)",

            "EPD para materiais de constru├º├úo",

            "Alega├º├Áes ambientais verificadas em embalagens"

          ]

        },

        {

          "titulo": "Green Supply Chain",

          "definicao": "Gest├úo da cadeia de suprimentos com crit├®rios ambientais em todas as etapas: sele├º├úo de fornecedores, transporte, armazenagem, produ├º├úo e distribui├º├úo. Busca reduzir a pegada ecol├│gica total, promovendo compras verdes, log├¡stica sustent├ível e parcerias circulares.",

          "topicos": [

            "Crit├®rios ambientais na sele├º├úo de fornecedores",

            "Transporte verde e otimiza├º├úo de rotas",

            "Embalagens retorn├íveis e recicl├íveis",

            "Auditoria ambiental em fornecedores",

            "Indicadores de desempenho de cadeia sustent├ível"

          ],

          "formula": "",

          "aplicacoes": [

            "Programa de avalia├º├úo de fornecedores ambientais",

            "Substitui├º├úo de frotas por ve├¡culos el├®tricos",

            "Otimiza├º├úo de carga e redu├º├úo de viagens",

            "Embalagens retorn├íveis na cadeia automotiva"

          ]

        },

        {

          "titulo": "Certifica├º├úo LEED e AQUA",

          "definicao": "Sistemas de certifica├º├úo de edifica├º├Áes sustent├íveis. LEED (Leadership in Energy and Environmental Design) ├® internacional e avalia efici├¬ncia energ├®tica, ├ígua, materiais e conforto. AQUA-HQE ├® a vers├úo adaptada ao Brasil com base na metodologia francesa HQE.",

          "topicos": [

            "Cr├®ditos LEED por categoria (SS, EA, WE, MR, IEQ)",

            "Processo AQUA: QAE e perfil ambiental",

            "Efici├¬ncia h├¡drica e energ├®tica em edifica├º├Áes",

            "Materiais sustent├íveis e res├¡duos na constru├º├úo",

            "Custo-benef├¡cio e payback de certifica├º├Áes"

          ],

          "formula": "",

          "aplicacoesacoes": [

            "Projeto e constru├º├úo de galp├Áes industriais verdes",

            "Edif├¡cios corporativos certificados LEED",

            "Obras com certifica├º├úo AQUA",

            "Adequa├º├úo de f├íbricas existentes para selos"

          ]

        },

        {

          "titulo": "ISO 50001 (Gest├úo de Energia)",

          "definicao": "Norma internacional para implementa├º├úo de um Sistema de Gest├úo de Energia (SGE), que ajuda organiza├º├Áes a melhorar efici├¬ncia, reduzir custos e diminuir emiss├Áes de GEE. Baseia-se no ciclo PDCA com foco em linha de base e indicadores de desempenho energ├®tico.",

          "topicos": [

            "Pol├¡tica energ├®tica e planejamento",

            "Revis├úo energ├®tica e linha de base (EnB)",

            "Indicadores de desempenho energ├®tico (EnPI)",

            "Projetos de melhoria e verifica├º├úo de economia",

            "Auditoria e certifica├º├úo ISO 50001"

          ],

          "formula": "EnPI = Consumo de energia / Vari├ível significativa",

          "aplicacoes": [

            "Estrutura├º├úo de SGE em ind├║strias intensivas em energia",

            "Gest├úo de energia em sider├║rgicas e cimenteiras",

            "Redu├º├úo de consumo em sistemas de utilidades",

            "Certifica├º├úo ISO 50001 para competitividade"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Norma", "ref": "ABNT. NBR ISO 14001:2015 - Sistema de Gestão Ambiental. Rio de Janeiro: ABNT, 2015."},
      {"tipo": "Livro", "ref": "Batalha, M. O. (Org.). Gestão Ambiental de Unidades Produtivas. Rio de Janeiro: Elsevier/ABEPRO, 2011."}
    ]},

    {

      "id": "projetos",

      "nome": "Gest├úo de Projetos",

      "icone": "folder-kanban",

      "cor": "#7c3aed",

      "descricao": "Metodologias, ferramentas e boas pr├íticas para gerenciamento de projetos.",

      "subtopicos": [

        {

          "titulo": "Cronogramas e Gr├ífico de Gantt",

          "definicao": "Ferramenta visual de planejamento que representa as atividades do projeto em barras horizontais dispostas ao longo de uma escala temporal. Permite visualizar dura├º├Áes, depend├¬ncias, respons├íveis e o progresso de cada tarefa.",

          "topicos": [

            "Estrutura├º├úo do cronograma: atividades, dura├º├Áes, preced├¬ncias",

            "Software: MS Project, Primavera, GanttPRO",

            "Depend├¬ncias: t├®rmino-in├¡cio, in├¡cio-in├¡cio",

            "Folga total e livre",

            "Curva S do cronograma"

          ],

          "formula": "",

          "aplicacoes": [

            "Planejamento de obras de constru├º├úo civil",

            "Cronograma de implanta├º├úo de ERP",

            "Projetos de P&D com marcos definidos",

            "Sequenciamento de atividades em manuten├º├Áes de parada"

          ]

        },

        {

          "titulo": "EAP ÔÇö Estrutura Anal├¡tica do Projeto (WBS)",

          "definicao": "Decomposi├º├úo hier├írquica do trabalho total do projeto em componentes menores e gerenci├íveis (pacotes de trabalho). Segue a regra 100%: deve representar todo o escopo do projeto. Base para cronograma, or├ºamento e aloca├º├úo de responsabilidades.",

          "topicos": [

            "N├¡veis da EAP (projeto, fases, pacotes de trabalho)",

            "Regra 100% da EAP",

            "Codifica├º├úo e dicion├írio da EAP",

            "Cria├º├úo por decomposi├º├úo ou modelo",

            "Rela├º├úo com WBS de custos e responsabilidade"

          ],

          "formula": "",

          "aplicacoes": [

            "EAP para projetos de engenharia e constru├º├úo",

            "Detalhamento de escopo em projetos de software",

            "Aloca├º├úo de pacotes de trabalho por equipe",

            "Integra├º├úo com curva S e EVM"

          ]

        },

        {

          "titulo": "Caminho cr├¡tico (CPM)",

          "definicao": "T├®cnica de an├ílise de rede que identifica a sequ├¬ncia mais longa de atividades dependentes em um cronograma, determinando a menor dura├º├úo poss├¡vel do projeto. Qualquer atraso em uma atividade de caminho cr├¡tico atrasa todo o projeto.",

          "topicos": [

            "Constru├º├úo da rede de preced├¬ncias",

            "C├ílculo forward e backward",

            "Folga total e folga livre",

            "Identifica├º├úo das atividades cr├¡ticas",

            "Compress├úo e crashing do cronograma"

          ],

          "formula": "Folga Total = LS - ES ou LF - EF",

          "aplicacoes": [

            "Planejamento de constru├º├úo de pontes e rodovias",

            "Cronograma de lan├ºamento de produto",

            "Projetos de obra industrial com prazo fixo",

            "Otimiza├º├úo de paradas de manuten├º├úo"

          ]

        },

        {

          "titulo": "PERT",

          "definicao": "T├®cnica de estimativa de dura├º├úo de atividades baseada em tr├¬s cen├írios: otimista (O), pessimista (P) e mais prov├ível (M). Calcula a dura├º├úo esperada ponderada e ├® ├║til quando h├í incerteza significativa sobre as dura├º├Áes das tarefas.",

          "topicos": [

            "Estimativa de 3 pontos (O, M, P)",

            "C├ílculo da dura├º├úo esperada (TE)",

            "Vari├óncia e desvio padr├úo do projeto",

            "Probabilidade de conclus├úo no prazo",

            "PERT vs. CPM"

          ],

          "formula": "TE = (O + 4M + P) / 6",

          "aplicacoes": [

            "Projetos de P&D e inova├º├úo",

            "Estimativas em projetos de TI com incerteza",

            "An├ílise de riscos de prazo em engenharia",

            "Planejamento de projetos complexos com novas tecnologias"

          ]

        },

        {

          "titulo": "Scrum e Agile",

          "definicao": "Framework ├ígil de gerenciamento de projetos que utiliza sprints (itera├º├Áes fixas) para entregar valor incremental. Baseado em pilares de transpar├¬ncia, inspe├º├úo e adapta├º├úo, com pap├®is definidos (Product Owner, Scrum Master, Time de Desenvolvimento).",

          "topicos": [

            "Pap├®is: PO, SM, Time",

            "Eventos: Sprint, Daily, Sprint Review, Retrospective",

            "Artefatos: Product Backlog, Sprint Backlog, Incremento",

            "Estimativas ├ígeis (Planning Poker, Story Points)",

            "Kanban como m├®todo complementar"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenvolvimento ├ígil de software",

            "Projetos de marketing e campanhas digitais",

            "Inova├º├úo e prototipagem r├ípida",

            "Gest├úo de produtos digitais"

          ]

        },

        {

          "titulo": "Kanban de projetos",

          "definicao": "M├®todo visual de gerenciamento de fluxo de trabalho baseado em cart├Áes (cards) organizados em colunas que representam etapas do processo. Limita o trabalho em andamento (WIP) para reduzir gargalos e melhorar a entrega cont├¡nua de valor.",

          "topicos": [

            "Quadro Kanban (To Do, Doing, Done)",

            "Limites de WIP (Work In Progress)",

            "Lead time e Cycle time",

            "Gerenciamento do fluxo e m├®tricas",

            "Kanban vs. Scrum: diferen├ºas e combina├º├Áes"

          ],

          "formula": "Throughput = Entregas / Per├¡odo",

          "aplicacoes": [

            "Acompanhamento de demandas de suporte",

            "Gest├úo de portf├│lio de projetos",

            "Processos de opera├º├Áes cont├¡nuas",

            "Projetos de melhoria com entregas frequentes"

          ]

        },

        {

          "titulo": "PMBOK ÔÇö Project Management Body of Knowledge",

          "definicao": "Guia de boas pr├íticas do Project Management Institute (PMI) que consolida conhecimentos, processos, entradas, ferramentas e sa├¡das para gerenciamento de projetos. Estruturado em 5 grupos de processos e 10 ├íreas de conhecimento (7┬¬ edi├º├úo: 12 princ├¡pios e 8 dom├¡nios).",

          "topicos": [

            "5 grupos de processos: inicia├º├úo, planejamento, execu├º├úo, controle, encerramento",

            "10 ├íreas de conhecimento (6┬¬ ed.)",

            "Princ├¡pios do PMBOK 7┬¬ ed.",

            "Adaptabilidade e tailoring",

            "Certifica├º├úo PMP"

          ],

          "formula": "",

          "aplicacoes": [

            "Padroniza├º├úo de processos de gest├úo de projetos",

            "Prepara├º├úo para certifica├º├úo PMP",

            "Projetos de constru├º├úo e engenharia de grande porte",

            "Implanta├º├úo de PMO baseado em PMBOK"

          ]

        },

        {

          "titulo": "Gest├úo de riscos em projetos",

          "definicao": "Processo sistem├ítico de identificar, analisar, priorizar e responder a incertezas que podem afetar os objetivos do projeto. Inclui riscos positivos (oportunidades) e negativos (amea├ºas), com estrat├®gias de mitiga├º├úo, transfer├¬ncia, aceita├º├úo e explora├º├úo.",

          "topicos": [

            "Identifica├º├úo de riscos (brainstorming, checklists, SWOT)",

            "An├ílise qualitativa (probabilidade ├ù impacto)",

            "An├ílise quantitativa (simula├º├úo de Monte Carlo)",

            "Estrat├®gias de resposta para amea├ºas e oportunidades",

            "Registro de riscos e reserva de conting├¬ncia"

          ],

          "formula": "Exposi├º├úo ao risco = Probabilidade ├ù Impacto",

          "aplicacoes": [

            "An├ílise de riscos em projetos de infraestrutura",

            "Projetos com alto grau de incerteza tecnol├│gica",

            "Gest├úo de riscos regulat├│rios em projetos",

            "Reserva de conting├¬ncia para varia├º├Áes de prazo"

          ]

        },

        {

          "titulo": "Gest├úo de custos em projetos",

          "definicao": "Processos de estimar, or├ºar e controlar custos para garantir que o projeto seja conclu├¡do dentro do or├ºamento aprovado. Envolve estimativas (bottom-up, param├®tricas), or├ºamenta├º├úo e monitoramento por meio de EVM e an├ílise de varia├º├úo.",

          "topicos": [

            "Estimativas de custo: an├íloga, param├®trica, bottom-up",

            "Linha de base de custos e reserva de conting├¬ncia",

            "Acompanhamento or├ºament├írio",

            "Varia├º├úo de custo (CV = EV - AC)",

            "Previs├úo de custo final (EAC)"

          ],

          "formula": "EAC = BAC / CPI",

          "aplicacoes": [

            "Or├ºamento de projetos de constru├º├úo civil",

            "Controle de custos em projetos de TI",

            "Estimativa de investimentos em plantas industriais",

            "Acompanhamento financeiro de projetos de P&D"

          ]

        },

        {

          "titulo": "├ügil vs. Tradicional",

          "definicao": "Compara├º├úo entre duas abordagens de gerenciamento de projetos: a tradicional (cascata, preditiva) ├® sequencial com escopo fixo; a ├ígil ├® iterativa com escopo adapt├ível. A escolha depende do n├¡vel de incerteza, complexidade e criticidade do projeto.",

          "topicos": [

            "Modelo cascata (waterfall) ÔÇö fases r├¡gidas",

            "Modelo ├ígil ÔÇö entregas iterativas e incrementais",

            "Quando usar cada abordagem",

            "Modelos h├¡bridos (├ígil + tradicional)",

            "Crit├®rios de decis├úo por tipo de projeto"

          ],

          "formula": "",

          "aplicacoes": [

            "Projetos de engenharia com escopo fixo: tradicional",

            "Projetos de software com requisitos incertos: ├ígil",

            "Obras de constru├º├úo com entregas parciais: h├¡brido",

            "Projetos regulat├│rios com documenta├º├úo obrigat├│ria: tradicional"

          ]

        },

        {

          "titulo": "MS Project e similares",

          "definicao": "Ferramentas de software para planejamento, programa├º├úo e controle de projetos. MS Project ├® a mais difundida, oferecendo Gantt, CPM, aloca├º├úo de recursos e EVM. Alternativas incluem Primavera, ProjectLibre, Jira, Trello, Monday.com e Asana.",

          "topicos": [

            "MS Project: cronograma, recursos e custos",

            "Primavera P6: projetos de grande porte e EPC",

            "Jira: gest├úo ├ígil de projetos de software",

            "Trello/Asana: gest├úo visual simples",

            "Integra├º├úo entre ferramentas de planejamento"

          ],

          "formula": "",

          "aplicacoes": [

            "Planejamento de cronograma de obras",

            "Acompanhamento de projetos de engenharia",

            "Gest├úo de sprint em equipes Scrum",

            "Portf├│lio de projetos com MS Project Server"

          ]

        },

        {

          "titulo": "Gest├úo de stakeholders",

          "definicao": "Processo de identificar todas as pessoas, grupos ou organiza├º├Áes que podem impactar ou serem impactados pelo projeto, analisar suas expectativas e influ├¬ncia, e desenvolver estrat├®gias de engajamento para garantir suporte e minimizar resist├¬ncias.",

          "topicos": [

            "Identifica├º├úo de stakeholders",

            "Matriz poder ├ù interesse (Salience)",

            "Plano de engajamento de stakeholders",

            "Canais de comunica├º├úo e frequ├¬ncia",

            "Gest├úo de conflitos e resist├¬ncia"

          ],

          "formula": "",

          "aplicacoes": [

            "Mapeamento de stakeholders em projetos de infraestrutura",

            "Engajamento de comunidades em projetos de minera├º├úo",

            "Comunica├º├úo com patrocinadores em projetos corporativos",

            "Gest├úo de equipes multifuncionais"

          ]

        },

        {

          "titulo": "Termo de abertura do projeto",

          "definicao": "Documento formal que autoriza o in├¡cio do projeto, nomeia o gerente de projetos e define a autoridade para alocar recursos organizacionais. Cont├®m objetivo, justificativa, requisitos de alto n├¡vel, marcos e or├ºamento preliminar.",

          "topicos": [

            "Elementos do Project Charter",

            "Objetivo, escopo preliminar e entregas",

            "Or├ºamento e prazos de alto n├¡vel",

            "Riscos iniciais e premissas",

            "Autoriza├º├úo e assinatura do patrocinador"

          ],

          "formula": "",

          "aplicacoes": [

            "Abertura formal de novos projetos",

            "Alinhamento entre patrocinador e equipe",

            "Deadline para aprova├º├úo de investimento",

            "Documento de refer├¬ncia para planejamento subsequente"

          ]

        },

        {

          "titulo": "Project Charter",

          "definicao": "Tamb├®m conhecido como Termo de Abertura, ├® o documento que formaliza a exist├¬ncia do projeto e concede ao gerente a autoridade necess├íria para mobilizar recursos da organiza├º├úo. Vincula o projeto ├á estrat├®gia organizacional.",

          "topicos": [

            "Conte├║do t├¡pico do Project Charter",

            "Caso de neg├│cio e justificativa",

            "Designa├º├úo do gerente de projetos",

            "Marcos principais e cronograma macro",

            "Aprova├º├úo e governan├ºa inicial"

          ],

          "formula": "",

          "aplicacoes": [

            "In├¡cio de projetos no portf├│lio corporativo",

            "Governan├ºa de projetos via PMO",

            "Comunica├º├úo da vis├úo do projeto ├á equipe",

            "Autoriza├º├úo formal em gate de abertura"

          ]

        },

        {

          "titulo": "Curva S do projeto",

          "definicao": "Gr├ífico que representa o valor acumulado (custo, horas ou percentual) ao longo do tempo, formando um formato de 'S' t├¡pico. Usada para comparar o planejado (baseline) com o realizado e identificar desvios de cronograma e or├ºamento.",

          "topicos": [

            "Constru├º├úo da curva S (planejado ├ù realizado)",

            "An├ílise de desvios (SV, CV)",

            "Previs├úo de tend├¬ncias com curva S",

            "Curva S na gest├úo de valor agregado (EVM)",

            "Aplica├º├úo em relat├│rios de status"

          ],

          "formula": "SV = EV - PV",

          "aplicacoes": [

            "Relat├│rios mensais de progresso de obra",

            "Acompanhamento de projetos EPC",

            "Indicador visual para patrocinadores",

            "An├ílise de desempenho em projetos de capital intensivo"

          ]

        },

        {

          "titulo": "Earned Value Management (EVM)",

          "definicao": "Metodologia integrada de gest├úo de projetos que combina medi├º├Áes de escopo, cronograma e custos para avaliar o desempenho e prever resultados futuros. Utiliza indicadores: PV (planned value), EV (earned value) e AC (actual cost).",

          "topicos": [

            "PV, EV, AC ÔÇö defini├º├úo e obten├º├úo",

            "Varia├º├Áes: SV (EV - PV), CV (EV - AC)",

            "├ìndices: SPI (EV/PV), CPI (EV/AC)",

            "Previs├Áes: EAC, ETC, VAC",

            "EVM em projetos de engenharia e constru├º├úo"

          ],

          "formula": "CPI = EV / AC; SPI = EV / PV",

          "aplicacoes": [

            "Controle de desempenho de grandes projetos",

            "Relat├│rios de progresso com indicadores objetivos",

            "Previs├úo de custo final de projetos",

            "An├ílise de efici├¬ncia de cronograma e custo"

          ]

        },

        {

          "titulo": "Metodologia ├ügil (Scrum, XP, Kanban)",

          "definicao": "Conjunto de m├®todos e pr├íticas para gerenciamento de projetos baseados no Manifesto ├ügil (indiv├¡duos, entregas, colabora├º├úo, resposta a mudan├ºas). Inclui Scrum (sprints, pap├®is), XP (pr├íticas de engenharia) e Kanban (fluxo cont├¡nuo).",

          "topicos": [

            "Manifesto ├ügil e seus 12 princ├¡pios",

            "Scrum: pap├®is, eventos e artefatos",

            "XP (Extreme Programming): TDD, pair programming, refactoring",

            "Kanban: fluxo visual e WIP",

            "Escalonamento ├ígil (SAFe, LeSS)"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenvolvimento de software em startups",

            "Projetos de inova├º├úo e prototipagem",

            "Manuten├º├úo e evolu├º├úo de produtos digitais",

            "Equipes de marketing e design ├ígeis"

          ]

        },

        {

          "titulo": "Prince 2",

          "definicao": "Metodologia estruturada de gerenciamento de projetos baseada em processos, originada no governo brit├ónico. Foca em justificativa cont├¡nua do neg├│cio, aprendizado, pap├®is definidos, gerenciamento por est├ígios, toler├óncias e exce├º├Áes.",

          "topicos": [

            "7 princ├¡pios: justificativa cont├¡nua, li├º├Áes aprendidas, pap├®is, est├ígios, toler├óncia, exce├º├úo, tailoring",

            "7 processos: starting up, directing, initiating, controlling, managing delivery, managing stage, closing",

            "7 temas: business case, organiza├º├úo, qualidade, planos, risco, mudan├ºa, progresso",

            "Prince 2 vs. PMBOK",

            "Certifica├º├úo Prince 2 Foundation e Practitioner"

          ],

          "formula": "",

          "aplicacoes": [

            "Projetos governamentais e p├║blicos",

            "Projetos com forte governan├ºa e compliance",

            "Grandes programas de transforma├º├úo",

            "Organiza├º├Áes que exigem certifica├º├úo Prince 2"

          ]

        },

        {

          "titulo": "Gest├úo de portf├│lio de projetos",

          "definicao": "Processo centralizado de gerenciamento de m├║ltiplos projetos e programas para maximizar o retorno sobre o investimento e alinhar a carteira de projetos ├á estrat├®gia organizacional. Inclui sele├º├úo, prioriza├º├úo, balanceamento e monitoramento do portf├│lio.",

          "topicos": [

            "Sele├º├úo de projetos: alinhamento estrat├®gico e ROI",

            "Prioriza├º├úo: scoring, AHP, diagrama de bolhas",

            "Balanceamento de riscos e recursos no portf├│lio",

            "KPIs de portf├│lio (valor, risco, alinhamento)",

            "Governan├ºa de portf├│lio e comit├¬s"

          ],

          "formula": "ROI = (Ganho do projeto - Investimento) / Investimento",

          "aplicacoes": [

            "Gest├úo da carteira de projetos de P&D",

            "PMO corporativo de portf├│lio",

            "Decis├úo de go/no-go em gates de investimento",

            "Aloca├º├úo de recursos entre projetos concorrentes"

          ]

        },

        {

          "titulo": "PMO ÔÇö Project Management Office",

          "definicao": "Estrutura organizacional que padroniza processos de gest├úo de projetos, fornece metodologias, ferramentas, treinamento e suporte, e pode exercer governan├ºa sobre projetos, programas e portf├│lio. Classifica-se em suporte, controle ou diretivo.",

          "topicos": [

            "Tipos de PMO: suporte, controle, diretivo",

            "Fun├º├Áes do PMO: metodologia, capacita├º├úo, auditoria",

            "Implanta├º├úo de PMO: maturidade e roadmap",

            "KPI de performance do PMO",

            "PMO ├ígil (Agile PMO)"

          ],

          "formula": "",

          "aplicacoes": [

            "Padroniza├º├úo de pr├íticas em grandes organiza├º├Áes",

            "Implanta├º├úo de escrit├│rio de projetos em empresas de engenharia",

            "Governan├ºa e compliance de projetos",

            "Desenvolvimento de compet├¬ncias em gest├úo de projetos"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Guia", "ref": "PMI. Guia PMBOK - Um Guia do Conjunto de Conhecimentos em Gerenciamento de Projetos. 7. ed. Newtown Square: PMI, 2021."},
      {"tipo": "Livro", "ref": "Kerzner, H. Gestão de Projetos: As Melhores Práticas. 3. ed. Porto Alegre: Bookman, 2016."},
      {"tipo": "Livro", "ref": "Carvalho, M. M.; Rabechini Jr., R. Gerenciamento de Projetos na Prática. 2. ed. São Paulo: Atlas, 2019."}
    ]},

    {

      "id": "rh",

      "nome": "Recursos Humanos",

      "icone": "briefcase",

      "cor": "#db2777",

      "descricao": "Lideran├ºa, desenvolvimento de equipes e gest├úo de pessoas na ind├║stria.",

      "subtopicos": [

        {

          "titulo": "Lideran├ºa industrial",

          "definicao": "Capacidade de influenciar e orientar equipes no ambiente fabril, promovendo engajamento, seguran├ºa e produtividade. Envolve estilos de lideran├ºa situacional, comunica├º├úo assertiva e tomada de decis├úo participativa para alcan├ºar metas operacionais e estrat├®gicas.",

          "topicos": [

            "Lideran├ºa situacional",

            "Comunica├º├úo n├úo-violenta",

            "Lideran├ºa lean"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de turnos e lideran├ºa de ch├úo de f├íbrica",

            "Programas de desenvolvimento de l├¡deres operacionais",

            "Mentoria e coaching industrial"

          ]

        },

        {

          "titulo": "Desenvolvimento de equipes",

          "definicao": "Processo cont├¡nuo de aprimoramento das habilidades t├®cnicas e comportamentais dos colaboradores, alinhado aos objetivos organizacionais. Baseia-se em diagn├│stico de compet├¬ncias, planos de desenvolvimento individual e indicadores de progresso.",

          "topicos": [

            "Mapeamento de compet├¬ncias",

            "PDI ÔÇö Plano de Desenvolvimento Individual",

            "Feedback estruturado"

          ],

          "formula": "",

          "aplicacoes": [

            "Programas de capacita├º├úo t├®cnica para operadores",

            "Forma├º├úo de equipes autogerenci├íveis",

            "Avalia├º├úo de efic├ícia de treinamentos (Kirkpatrick)"

          ]

        },

        {

          "titulo": "Treinamento e capacita├º├úo",

          "definicao": "Conjunto de a├º├Áes educacionais planejadas para suprir lacunas de compet├¬ncia e preparar colaboradores para fun├º├Áes espec├¡ficas. Inclui levantamento de necessidades, elabora├º├úo de conte├║do, execu├º├úo e medi├º├úo de resultados.",

          "topicos": [

            "TNA ÔÇö Treinamento e Necessidades de Aprendizagem",

            "EAD corporativo",

            "Onboarding t├®cnico"

          ],

          "formula": "ROI do treinamento = (Ganho obtido - Custo do treinamento) / Custo do treinamento",

          "aplicacoes": [

            "Treinamento de NRs (Normas Regulamentadoras)",

            "Capacita├º├úo em software ERP industrial",

            "Programa de forma├º├úo de multiplicadores internos"

          ]

        },

        {

          "titulo": "Avalia├º├úo de desempenho",

          "definicao": "Sistema estruturado para mensurar a contribui├º├úo individual e coletiva dos colaboradores em rela├º├úo ├ás metas organizacionais. Utiliza m├®todos como autoavalia├º├úo, avalia├º├úo do gestor, 360┬░ e an├ílise por compet├¬ncias.",

          "topicos": [

            "OKRs",

            "KPIs comportamentais",

            "Matriz de desempenho vs. potencial"

          ],

          "formula": "",

          "aplicacoes": [

            "Ciclo semestral de avalia├º├úo por compet├¬ncias",

            "Feedbacks orientados a dados",

            "Reconhecimento e meritocracia baseados em desempenho"

          ]

        },

        {

          "titulo": "Cultura organizacional",

          "definicao": "Conjunto de valores, cren├ºas, normas e pr├íticas compartilhadas que moldam o comportamento dos indiv├¡duos dentro da organiza├º├úo industrial. Influencia diretamente o clima, a reten├º├úo de talentos e a efici├¬ncia operacional.",

          "topicos": [

            "Cultura lean",

            "Cultura de seguran├ºa",

            "Cultura de inova├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Diagn├│stico cultural por meio de surveys",

            "Programas de reconhecimento e celebra├º├úo",

            "Integra├º├úo de valores organizacionais no dia a dia fabril"

          ]

        },

        {

          "titulo": "Gest├úo de conflitos",

          "definicao": "Processo de identifica├º├úo, media├º├úo e resolu├º├úo de diverg├¬ncias interpessoais ou interdepartamentais no ambiente de trabalho. Aplica t├®cnicas de comunica├º├úo, negocia├º├úo e media├º├úo para converter conflitos em oportunidades de melhoria.",

          "topicos": [

            "Media├º├úo de conflitos",

            "Negocia├º├úo colaborativa",

            "An├ílise de causas de conflito"

          ],

          "formula": "",

          "aplicacoes": [

            "Media├º├úo entre equipes de produ├º├úo e manuten├º├úo",

            "Resolu├º├úo de conflitos sindicais",

            "Treinamento em comunica├º├úo n├úo-violenta para gestores"

          ]

        },

        {

          "titulo": "Clima organizacional",

          "definicao": "Percep├º├úo coletiva dos colaboradores sobre o ambiente de trabalho, incluindo satisfa├º├úo, motiva├º├úo e bem-estar. Mensurado por pesquisas peri├│dicas, o clima ├® indicador preditivo de produtividade, absente├¡smo e rotatividade.",

          "topicos": [

            "Pesquisa de clima",

            "eNPS ÔÇö Employee Net Promoter Score",

            "├ìndice de satisfa├º├úo"

          ],

          "formula": "eNPS = (% Promotores - % Detratores) ├ù 100",

          "aplicacoes": [

            "Pesquisa de clima semestral com planos de a├º├úo",

            "Acompanhamento de indicadores de satisfa├º├úo por setor",

            "Programas de qualidade de vida no trabalho"

          ]

        },

        {

          "titulo": "Endomarketing",

          "definicao": "Conjunto de a├º├Áes de comunica├º├úo interna voltadas a engajar e motivar os colaboradores, alinhando-os ├á miss├úo, vis├úo e valores da empresa. Utiliza campanhas, eventos e canais internos para fortalecer o v├¡nculo organiza├º├úo-colaborador.",

          "topicos": [

            "Comunica├º├úo interna",

            "Campanhas de engajamento",

            "Eventos corporativos"

          ],

          "formula": "",

          "aplicacoes": [

            "Campanhas de seguran├ºa do trabalho",

            "Jornal mural e newsletter interna",

            "Programas de integra├º├úo de novos colaboradores"

          ]

        },

        {

          "titulo": "Onboarding",

          "definicao": "Processo estruturado de integra├º├úo de novos colaboradores ├á cultura, processos e ferramentas da organiza├º├úo. Onboarding eficaz reduz o tempo at├® a produtividade plena e aumenta a reten├º├úo nos primeiros meses.",

          "topicos": [

            "Integra├º├úo cultural",

            "Treinamento inicial",

            "Buddy program"

          ],

          "formula": "",

          "aplicacoes": [

            "Roteiro de integra├º├úo para novos operadores",

            "Checklists de onboarding por fun├º├úo",

            "Acompanhamento com mentor nos 90 dias iniciais"

          ]

        },

        {

          "titulo": "Avalia├º├úo 360┬░",

          "definicao": "M├®todo de avalia├º├úo de desempenho que coleta feedback de m├║ltiplas fontes ÔÇö gestores, pares, subordinados e clientes internos ÔÇö para formar uma vis├úo abrangente das compet├¬ncias do colaborador. Favorece o autoconhecimento e o desenvolvimento direcionado.",

          "topicos": [

            "Feedback multin├¡vel",

            "Autoavalia├º├úo",

            "Plano de desenvolvimento p├│s-360┬░"

          ],

          "formula": "",

          "aplicacoes": [

            "Avalia├º├úo anual de lideran├ºas",

            "Mapeamento de pontos fortes e ├íreas de melhoria",

            "Feedbacks 360┬░ para planos de sucess├úo"

          ]

        },

        {

          "titulo": "Gest├úo por compet├¬ncias",

          "definicao": "Modelo de gest├úo de pessoas que identifica, desenvolve e avalia as compet├¬ncias t├®cnicas e comportamentais necess├írias para cada fun├º├úo. Integra recrutamento, treinamento, avalia├º├úo e carreira em torno de um cat├ílogo de compet├¬ncias organizacionais.",

          "topicos": [

            "Mapeamento de compet├¬ncias",

            "Trilhas de aprendizagem",

            "Matriz de compet├¬ncias"

          ],

          "formula": "",

          "aplicacoes": [

            "Elabora├º├úo de matriz de compet├¬ncias por cargo",

            "Programas de certifica├º├úo interna",

            "Recrutamento baseado em compet├¬ncias"

          ]

        },

        {

          "titulo": "Recrutamento e sele├º├úo",

          "definicao": "Processo de atra├º├úo, triagem e escolha de candidatos para posi├º├Áes na organiza├º├úo. Envolve defini├º├úo de perfil, divulga├º├úo de vagas, entrevistas, testes e tomada de decis├úo alinhada ├ás necessidades t├®cnicas e culturais da empresa.",

          "topicos": [

            "Entrevista por compet├¬ncias",

            "Testes psicol├│gicos e t├®cnicos",

            "Assessment center"

          ],

          "formula": "",

          "aplicacoes": [

            "Processo seletivo para operadores de produ├º├úo",

            "Recrutamento de lideran├ºas industriais",

            "Bank de talentos e recrutamento interno"

          ]

        },

        {

          "titulo": "Cargos e sal├írios",

          "definicao": "Sistema de classifica├º├úo, hierarquiza├º├úo e remunera├º├úo dos cargos com base em crit├®rios objetivos como complexidade, responsabilidade e mercado. Visa garantir equidade interna e competitividade externa na pol├¡tica salarial.",

          "topicos": [

            "An├ílise e descri├º├úo de cargos",

            "Pesquisa salarial",

            "Faixas salariais"

          ],

          "formula": "",

          "aplicacoes": [

            "Elabora├º├úo de PCS ÔÇö Plano de Cargos e Sal├írios",

            "Revis├úo salarial anual",

            "Estrutura├º├úo de carreira em Y (t├®cnica e gerencial)"

          ]

        },

        {

          "titulo": "Benchmarking salarial",

          "definicao": "Compara├º├úo sistem├ítica das faixas salariais e benef├¡cios praticados pela organiza├º├úo com os praticados pelo mercado de refer├¬ncia. Subsidia decis├Áes de atratividade e reten├º├úo de talentos.",

          "topicos": [

            "Pesquisa salarial setorial",

            "An├ílise de benef├¡cios",

            "Posicionamento competitivo"

          ],

          "formula": "",

          "aplicacoes": [

            "Participa├º├úo em pesquisas salariais da FIESP ou sindicatos",

            "Adequa├º├úo de benef├¡cios ao mercado industrial",

            "Relat├│rio de competitividade salarial"

          ]

        },

        {

          "titulo": "Plano de carreira",

          "definicao": "Estrutura que define as trajet├│rias poss├¡veis de crescimento profissional dentro da organiza├º├úo, com crit├®rios claros de promo├º├úo, desenvolvimento e remunera├º├úo. Estimula o engajamento e a reten├º├úo ao oferecer perspectiva de evolu├º├úo.",

          "topicos": [

            "Carreira em Y",

            "Trilhas de sucess├úo",

            "Crit├®rios de promo├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Implementa├º├úo de carreira t├®cnica para operadores",

            "Programa de trainees e sucess├úo",

            "Mapeamento de sucess├úo para posi├º├Áes-chave"

          ]

        },

        {

          "titulo": "Engajamento e reten├º├úo de talentos",

          "definicao": "Estrat├®gias e pr├íticas voltadas a manter colaboradores motivados, produtivos e com baixa inten├º├úo de sa├¡da. Inclui reconhecimento, desenvolvimento, qualidade de vida e alinhamento de prop├│sito entre indiv├¡duo e organiza├º├úo.",

          "topicos": [

            "Pesquisa de engajamento",

            "Programas de reconhecimento",

            "Entrevista de desligamento"

          ],

          "formula": "Taxa de rotatividade = (Desligamentos / Efetivo m├®dio) ├ù 100",

          "aplicacoes": [

            "Programa de reconhecimento por tempo de casa",

            "Entrevistas de desligamento com plano de a├º├úo",

            "A├º├Áes de quality of work life (QWL)"

          ]

        },

        {

          "titulo": "Soft skills na ind├║stria",

          "definicao": "Compet├¬ncias comportamentais como comunica├º├úo, trabalho em equipe, resolu├º├úo de problemas e adaptabilidade, essenciais para o ambiente industrial moderno. Com a Ind├║stria 4.0, soft skills tornaram-se t├úo relevantes quanto habilidades t├®cnicas.",

          "topicos": [

            "Intelig├¬ncia emocional",

            "Comunica├º├úo efetiva",

            "Pensamento cr├¡tico"

          ],

          "formula": "",

          "aplicacoes": [

            "Treinamentos de comunica├º├úo para lideran├ºas",

            "Din├ómicas de team building",

            "Desenvolvimento de mentalidade lean e mejora cont├¡nua"

          ]

        },

        {

          "titulo": "HR Analytics",

          "definicao": "Aplica├º├úo de an├ílise de dados e estat├¡stica sobre informa├º├Áes de RH para embasar decis├Áes estrat├®gicas sobre pessoas. Inclui an├ílise de turnover, absente├¡smo, produtividade, clima e ROI de treinamentos.",

          "topicos": [

            "People analytics",

            "Dashboards de RH",

            "Modelagem preditiva de turnover"

          ],

          "formula": "",

          "aplicacoes": [

            "Painel de indicadores de RH em Power BI",

            "Modelo preditivo de risco de desligamento",

            "Correla├º├úo entre clima e produtividade"

          ]

        },

        {

          "titulo": "Folha de pagamento industrial",

          "definicao": "Processo mensal de c├ílculo e processamento dos sal├írios, encargos sociais, benef├¡cios e descontos dos colaboradores da ind├║stria. Deve estar em conformidade com a CLT, acordos sindicais e obriga├º├Áes acess├│rias como eSocial e FGTS.",

          "topicos": [

            "eSocial",

            "Encargos trabalhistas",

            "Acordos sindicais"

          ],

          "formula": "Sal├írio l├¡quido = Sal├írio bruto - INSS - IRRF - Benef├¡cios descontados + Vantagens",

          "aplicacoes": [

            "Processamento mensal da folha de 500+ colaboradores",

            "Integra├º├úo com sistema de ponto eletr├┤nico",

            "Gera├º├úo de arquivos eSocial e DCTFWeb"

          ]

        },

        {

          "titulo": "CLT e acordos sindicais",

          "definicao": "Conjunto de normas trabalhistas regidas pela Consolida├º├úo das Leis do Trabalho (CLT) e complementadas por acordos e conven├º├Áes coletivas negociadas com sindicatos. Definem direitos, deveres, pisos salariais, jornada e condi├º├Áes espec├¡ficas da categoria industrial.",

          "topicos": [

            "Negocia├º├úo coletiva",

            "Diss├¡dio",

            "CIPA e seguran├ºa"

          ],

          "formula": "",

          "aplicacoes": [

            "Negocia├º├úo de acordo coletivo anual",

            "C├ílculo de adicional de periculosidade e insalubridade",

            "Gest├úo de banco de horas e jornada 12├ù36"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Chiavenato, I. Gestão de Pessoas: e o Novo Papel dos Recursos Humanos nas Organizações. 3. ed. Rio de Janeiro: Elsevier, 2010."},
      {"tipo": "Livro", "ref": "Gil, A. C. Gestão de Pessoas: Enfoque nos Papéis Profissionais. São Paulo: Atlas, 2007."},
      {"tipo": "Livro", "ref": "Ulrich, D. Recursos Humanos Estratégicos. São Paulo: Futura, 2000."}
    ]},

    {

      "id": "desenv-produtos",

      "nome": "Desenvolvimento de Produtos",

      "icone": "ruler",

      "cor": "#0d9488",

      "descricao": "Processo de desenvolvimento, engenharia simult├ónea e gest├úo do ciclo de vida.",

      "subtopicos": [

        {

          "titulo": "Engenharia simult├ónea",

          "definicao": "Abordagem integrada de desenvolvimento de produtos onde atividades de projeto, manufatura, suprimentos e qualidade ocorrem em paralelo, n├úo sequencialmente. Reduz o time-to-market e melhora a comunica├º├úo entre equipes multidisciplinares.",

          "topicos": [

            "Desenvolvimento integrado",

            "Equipes multifuncionais",

            "Concorr├¬ncia de projetos"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto automotivo com equipes simult├óneas de engenharia e manufatura",

            "Redu├º├úo do ciclo de desenvolvimento de eletroeletr├┤nicos",

            "Integra├º├úo fornecedor-cliente no desenvolvimento"

          ]

        },

        {

          "titulo": "Engenharia de valor",

          "definicao": "Metodologia sistem├ítica para maximizar o valor funcional de um produto minimizando seus custos, sem comprometer qualidade ou desempenho. Analisa fun├º├Áes, identifica custos desnecess├írios e prop├Áe alternativas de projeto, materiais ou processos.",

          "topicos": [

            "An├ílise de valor",

            "Custo-alvo",

            "Value engineering workshop"

          ],

          "formula": "Valor = Fun├º├úo / Custo",

          "aplicacoes": [

            "Redesenho de componentes automotivos com redu├º├úo de 20% de custo",

            "Substitui├º├úo de materiais sem perda de desempenho",

            "Workshops de engenharia de valor em produtos existentes"

          ]

        },

        {

          "titulo": "DFMA ÔÇö Design for Manufacturing and Assembly",

          "definicao": "Metodologia de projeto que visa simplificar a manufatura e montagem de produtos desde as fases iniciais de concep├º├úo. Reduz n├║mero de pe├ºas, padroniza componentes e otimiza processos de fabrica├º├úo e montagem.",

          "topicos": [

            "Redu├º├úo de componentes",

            "Padroniza├º├úo",

            "Montagem simplificada"

          ],

          "formula": "Efici├¬ncia de montagem = (N┬║ m├¡nimo te├│rico de pe├ºas ├ù 3s) / Tempo real de montagem",

          "aplicacoes": [

            "Projeto de eletrodom├®sticos com 40% menos pe├ºas",

            "Redesenho de conjuntos mec├ónicos para montagem automatizada",

            "An├ílise DFMA em produtos da linha branca"

          ]

        },

        {

          "titulo": "QFD ÔÇö Quality Function Deployment",

          "definicao": "M├®todo estruturado para traduzir as necessidades e desejos do cliente (VOC ÔÇö Voice of Customer) em requisitos t├®cnicos de produto e processo. Utiliza a Matriz da Qualidade (House of Quality) para priorizar caracter├¡sticas cr├¡ticas.",

          "topicos": [

            "Matriz da qualidade",

            "VOC ÔÇö Voice of Customer",

            "Desdobramento da fun├º├úo qualidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenvolvimento de novos ve├¡culos com foco nas prefer├¬ncias do consumidor",

            "Prioriza├º├úo de especifica├º├Áes t├®cnicas em eletr├┤nicos",

            "Alinhamento entre marketing e engenharia em bens de consumo"

          ]

        },

        {

          "titulo": "PLM ÔÇö Product Lifecycle Management",

          "definicao": "Sistema estrat├®gico de gest├úo do ciclo de vida do produto, desde a concep├º├úo at├® o descarte. Integra dados, processos e pessoas ao longo de todas as fases ÔÇö projeto, fabrica├º├úo, uso e fim de vida ÔÇö garantindo rastreabilidade e conformidade.",

          "topicos": [

            "Gest├úo de ciclo de vida",

            "Integra├º├úo CAD/PLM",

            "Rastreabilidade de engenharia"

          ],

          "formula": "",

          "aplicacoes": [

            "Implementa├º├úo de plataforma PLM (Teamcenter, Windchill)",

            "Gest├úo centralizada de BOMs e documentos t├®cnicos",

            "Rastreabilidade de altera├º├Áes de engenharia (ECO/ECN)"

          ]

        },

        {

          "titulo": "Prot├│tipos r├ípidos",

          "definicao": "T├®cnica de fabrica├º├úo de modelos f├¡sicos funcionais ou conceituais em curto prazo, utilizando manufatura aditiva (3D), usinagem CNC ou ferramentais r├ípidos. Acelera valida├º├úo de design, testes de forma e ajuste (fit & form) e comunica├º├úo com stakeholders.",

          "topicos": [

            "Impress├úo 3D",

            "Usinagem r├ípida",

            "Mockups funcionais"

          ],

          "formula": "",

          "aplicacoes": [

            "Prot├│tipos de componentes pl├ísticos por FDM/SLA",

            "Modelos de apresenta├º├úo para aprova├º├úo de clientes",

            "Testes de ergonomia e usabilidade com prot├│tipos f├¡sicos"

          ]

        },

        {

          "titulo": "CAD/CAM/CAE",

          "definicao": "Conjunto integrado de ferramentas computacionais para projeto (CAD ÔÇö Computer-Aided Design), manufatura (CAM ÔÇö Computer-Aided Manufacturing) e engenharia assistida por computador (CAE ÔÇö Computer-Aided Engineering). Permite modelagem 3D, simula├º├úo e gera├º├úo de c├│digo CNC.",

          "topicos": [

            "Modelagem 3D",

            "Simula├º├úo estrutural",

            "Programa├º├úo CNC"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de moldes injetores com SolidWorks",

            "Simula├º├úo de elementos finitos em Autodesk Inventor",

            "Gera├º├úo de c├│digo CAM para usinagem 5 eixos"

          ]

        },

        {

          "titulo": "PDP ÔÇö Processo de Desenvolvimento de Produto",

          "definicao": "Modelo de refer├¬ncia que estrutura as etapas, atividades, decis├Áes e gates do desenvolvimento de produtos, desde o planejamento estrat├®gico at├® o acompanhamento p├│s-lan├ºamento. O PDP assegura consist├¬ncia, qualidade e governan├ºa no processo de inova├º├úo.",

          "topicos": [

            "Macrofases do PDP",

            "Gates de aprova├º├úo",

            "Documenta├º├úo do processo"

          ],

          "formula": "",

          "aplicacoes": [

            "Implanta├º├úo do PDP em ind├║stria de bens de capital",

            "Defini├º├úo de entreg├íveis por fase de desenvolvimento",

            "Auditoria de maturidade do PDP organizacional"

          ]

        },

        {

          "titulo": "Stage-Gate",

          "definicao": "Modelo de gest├úo de inova├º├úo que divide o processo de desenvolvimento em etapas (stages) separadas por pontos de decis├úo (gates). Cada gate avalia crit├®rios de qualidade, viabilidade t├®cnica e negocial antes de autorizar avan├ºo ├á etapa seguinte.",

          "topicos": [

            "Gates de decis├úo",

            "Crit├®rios de go/no-go",

            "Gest├úo de portf├│lio de projetos"

          ],

          "formula": "",

          "aplicacoes": [

            "Pipeline de inova├º├úo em ind├║stria farmac├¬utica",

            "Revis├Áes trimestrais de portf├│lio de P&D",

            "Stage-gate para lan├ºamento de novos produtos aliment├¡cios"

          ]

        },

        {

          "titulo": "DFMEA ÔÇö Design FMEA",

          "definicao": "Ferramenta de an├ílise de modos de falha e seus efeitos aplicada ao projeto do produto. Identifica potenciais falhas de design, suas causas e efeitos, e prioriza a├º├Áes preventivas com base no RPN (Risk Priority Number).",

          "topicos": [

            "An├ílise de risco",

            "RPN ÔÇö Risk Priority Number",

            "A├º├Áes preventivas"

          ],

          "formula": "RPN = Severidade ├ù Ocorr├¬ncia ├ù Detec├º├úo",

          "aplicacoes": [

            "DFMEA de sistema de freios automotivos",

            "An├ílise de falhas em produto eletr├┤nico antes do lan├ºamento",

            "Revis├úo DFMEA em mudan├ºas de engenharia"

          ]

        },

        {

          "titulo": "Engenharia reversa",

          "definicao": "Processo de desmontagem e an├ílise de um produto existente para compreender seu projeto, funcionamento e especifica├º├Áes. Utiliza scanner 3D, medi├º├Áes e testes para gerar documenta├º├úo t├®cnica ou identificar oportunidades de melhoria.",

          "topicos": [

            "Scanner 3D",

            "An├ílise dimensional",

            "Redesenho a partir de amostra"

          ],

          "formula": "",

          "aplicacoes": [

            "Digitaliza├º├úo e redesenho de pe├ºas sem CAD original",

            "An├ílise de concorr├¬ncia por engenharia reversa",

            "Reengenharia de componentes obsoletos"

          ]

        },

        {

          "titulo": "Manufatura aditiva (prototipagem)",

          "definicao": "Processo de fabrica├º├úo por adi├º├úo sucessiva de camadas de material (pl├ístico, metal, resina) a partir de modelo digital 3D. Utilizada para prototipagem r├ípida, ferramentas e at├® pe├ºas finais em pequena escala.",

          "topicos": [

            "FDM",

            "SLA",

            "SLM ÔÇö Selective Laser Melting"

          ],

          "formula": "",

          "aplicacoes": [

            "Prototipagem funcional de pe├ºas pl├ísticas",

            "Produ├º├úo de dispositivos de fixa├º├úo (jigs & fixtures)",

            "Fabrica├º├úo de pe├ºas met├ílicas sob medida"

          ]

        },

        {

          "titulo": "Gest├úo de requisitos",

          "definicao": "Processo sistem├ítico de elicita├º├úo, documenta├º├úo, an├ílise, valida├º├úo e gerenciamento de requisitos funcionais e n├úo-funcionais de um produto. Garante que o produto final atenda ├ás necessidades de clientes, normas e partes interessadas.",

          "topicos": [

            "Elicita├º├úo de requisitos",

            "Matriz de rastreabilidade",

            "Casos de uso"

          ],

          "formula": "",

          "aplicacoes": [

            "Documenta├º├úo de requisitos de sistema embarcado",

            "Rastreabilidade entre requisitos e testes de valida├º├úo",

            "Gest├úo de mudan├ºas de requisitos em projetos complexos"

          ]

        },

        {

          "titulo": "Design for X (DfX)",

          "definicao": "Conjunto de metodologias de projeto que consideram requisitos espec├¡ficos ao longo do desenvolvimento: manufatura (DfM), montagem (DfA), sustentabilidade (DfE), manuten├º├úo (DfS) e outros. Visa otimizar o produto para todo seu ciclo de vida.",

          "topicos": [

            "DfM/DfA",

            "DfE ÔÇö Design for Environment",

            "DfS ÔÇö Design for Serviceability"

          ],

          "formula": "",

          "aplicacoes": [

            "Produto projetado para reciclagem (DfE)",

            "Design de equipamentos para f├ícil manuten├º├úo em campo",

            "Projeto para desmontagem e fim de vida"

          ]

        },

        {

          "titulo": "An├ílise de valor",

          "definicao": "T├®cnica sistem├ítica de avalia├º├úo de produtos existentes para identificar e eliminar custos desnecess├írios sem comprometer fun├º├Áes essenciais. Foca na rela├º├úo fun├º├úo-custo e prop├Áe alternativas de projeto, materiais ou processos.",

          "topicos": [

            "An├ílise funcional",

            "Custo por fun├º├úo",

            "Alternativas de solu├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Redu├º├úo de custo de produto maduro em 15-30%",

            "Revis├úo anual de portf├│lio com an├ílise de valor",

            "Substitui├º├úo de materiais por alternativas de menor custo"

          ]

        },

        {

          "titulo": "Redesenho de produto",

          "definicao": "Processo de modifica├º├úo significativa de um produto existente para melhorar desempenho, reduzir custos, atualizar tecnologia ou atender novos requisitos regulat├│rios. Difere do desenvolvimento radical por partir de uma base j├í estabelecida.",

          "topicos": [

            "Melhoria incremental",

            "Atualiza├º├úo tecnol├│gica",

            "Adequa├º├úo normativa"

          ],

          "formula": "",

          "aplicacoes": [

            "Redesenho de embalagens para sustentabilidade",

            "Atualiza├º├úo de linha de produtos com novos componentes eletr├┤nicos",

            "Adequa├º├úo de produto a novas normas regulamentadoras"

          ]

        },

        {

          "titulo": "Desdobramento da fun├º├úo qualidade (QFD)",

          "definicao": "Desdobramento sistem├ítico dos requisitos do cliente em caracter├¡sticas de qualidade do produto, par├ómetros de processo e especifica├º├Áes de produ├º├úo. Garante que a voz do cliente seja traduzida tecnicamente em cada etapa do PDP.",

          "topicos": [

            "House of Quality",

            "Matriz de relacionamento",

            "Desdobramento em cascata"

          ],

          "formula": "",

          "aplicacoes": [

            "QFD completo para desenvolvimento de eletroport├ítil",

            "Tradu├º├úo de necessidades de clientes industriais em especifica├º├Áes t├®cnicas",

            "Prioriza├º├úo de engenharia baseada em importancia relativa"

          ]

        },

        {

          "titulo": "Metodologia de projeto de produto",

          "definicao": "Abordagem estruturada para conceber, desenvolver e detalhar produtos, abrangendo desde a identifica├º├úo de oportunidades at├® a especifica├º├úo final. Inclui m├®todos de criatividade, sele├º├úo de conceitos, projeto preliminar e detalhado.",

          "topicos": [

            "Projeto informacional",

            "Projeto conceitual",

            "Projeto detalhado"

          ],

          "formula": "",

          "aplicacoes": [

            "Aplica├º├úo da metodologia de Pahl & Beitz no desenvolvimento de m├íquinas",

            "Processo de design thinking combinado com engenharia",

            "Gera├º├úo e sele├º├úo de conceitos para novo produto"

          ]

        },

        {

          "titulo": "Lean Product Development",

          "definicao": "Abordagem que aplica princ├¡pios lean (elimina├º├úo de desperd├¡cios, fluxo cont├¡nuo, valor para o cliente) ao processo de desenvolvimento de produtos. Reduz lead time, retrabalho e retrabalho, aumentando a efici├¬ncia da engenharia.",

          "topicos": [

            "Set-based design",

            "A3 de projeto",

            "Obeya room"

          ],

          "formula": "",

          "aplicacoes": [

            "Implementa├º├úo de A3 para problemas de engenharia",

            "Sala Obeya para gest├úo visual de projetos complexos",

            "Redu├º├úo de desperd├¡cios no PDP com mapeamento de fluxo de valor"

          ]

        },

        {

          "titulo": "An├ílise de viabilidade t├®cnica",

          "definicao": "Estudo preliminar que avalia se um conceito de produto ├® exequ├¡vel do ponto de vista t├®cnico, considerando materiais, processos, tecnologia dispon├¡vel, prazos e or├ºamento. Subsidia a decis├úo de avan├ºar ou n├úo no desenvolvimento.",

          "topicos": [

            "Viabilidade de manufatura",

            "An├ílise de risco t├®cnico",

            "Estudo de make-or-buy"

          ],

          "formula": "",

          "aplicacoes": [

            "Estudo de viabilidade de nova linha de produtos qu├¡micos",

            "An├ílise de make-or-buy para componentes cr├¡ticos",

            "Avalia├º├úo de maturidade tecnol├│gica (TRL) antes do projeto"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Rozenfeld, H. et al. Gestão de Desenvolvimento de Produtos: Uma Referência para a Melhoria do Processo. São Paulo: Saraiva, 2006."},
      {"tipo": "Livro", "ref": "Baxter, M. Projeto de Produto: Guia Prático para o Design de Novos Produtos. 3. ed. São Paulo: Blucher, 2011."},
      {"tipo": "Livro", "ref": "Back, N. et al. Projeto Integrado de Produtos: Planejamento, Concepção e Modelagem. Barueri: Manole, 2008."}
    ]},

    {

      "id": "gestao-industrial",

      "nome": "Gest├úo Industrial",

      "icone": "factory",

      "cor": "#dc2626",

      "descricao": "Administra├º├úo industrial, planejamento estrat├®gico e governan├ºa corporativa.",

      "subtopicos": [

        {

          "titulo": "Administra├º├úo industrial",

          "definicao": "Conjunto de pr├íticas de gest├úo aplicadas ao ambiente fabril, envolvendo planejamento, organiza├º├úo, dire├º├úo e controle dos recursos produtivos. Integra ├íreas como produ├º├úo, manuten├º├úo, qualidade, suprimentos e finan├ºas para opera├º├úo eficiente da f├íbrica.",

          "topicos": [

            "Gest├úo da produ├º├úo",

            "Organiza├º├úo fabril",

            "Controle de processos"

          ],

          "formula": "",

          "aplicacoes": [

            "Reestrutura├º├úo administrativa de unidade industrial",

            "Implanta├º├úo de sistema de gest├úo integrado ERP",

            "Defini├º├úo de organograma e fluxos decis├│rios fabris"

          ]

        },

        {

          "titulo": "Planejamento estrat├®gico",

          "definicao": "Processo sistem├ítico de defini├º├úo da dire├º├úo estrat├®gica da organiza├º├úo industrial, estabelecendo miss├úo, vis├úo, valores, objetivos de longo prazo e planos de a├º├úo. Envolve an├ílise ambiental, formula├º├úo de estrat├®gias e aloca├º├úo de recursos.",

          "topicos": [

            "Miss├úo e vis├úo",

            "An├ílise ambiental",

            "Metas de longo prazo"

          ],

          "formula": "",

          "aplicacoes": [

            "Elabora├º├úo do planejamento estrat├®gico 5 anos da ind├║stria",

            "Desdobramento de metas estrat├®gicas em operacionais",

            "Revis├úo anual do plano estrat├®gico com stakeholders"

          ]

        },

        {

          "titulo": "Governan├ºa corporativa",

          "definicao": "Sistema de princ├¡pios, regras e estruturas que direcionam e controlam a gest├úo da empresa industrial, assegurando transpar├¬ncia, equidade, presta├º├úo de contas e responsabilidade corporativa. Fundamental para empresas de capital aberto e family offices.",

          "topicos": [

            "Conselho de administra├º├úo",

            "Comit├¬s de auditoria",

            "C├│digo de conduta"

          ],

          "formula": "",

          "aplicacoes": [

            "Estrutura├º├úo de conselho consultivo em ind├║stria familiar",

            "Implementa├º├úo de compliance e c├│digo de ├®tica",

            "Reporte de resultados com transpar├¬ncia a acionistas"

          ]

        },

        {

          "titulo": "Indicadores industriais (KPI)",

          "definicao": "M├®tricas quantitativas utilizadas para monitorar e avaliar o desempenho de processos industriais em tempo real. Incluem indicadores de produtividade, qualidade, efici├¬ncia, custo, seguran├ºa e entregas, alinhados aos objetivos estrat├®gicos da organiza├º├úo.",

          "topicos": [

            "OEE ÔÇö Overall Equipment Effectiveness",

            "Indicadores de produtividade",

            "Dashboard industrial"

          ],

          "formula": "OEE = Disponibilidade ├ù Performance ├ù Qualidade",

          "aplicacoes": [

            "Painel de indicadores OEE em tempo real no ch├úo de f├íbrica",

            "Metas trimestrais de KPI por centro de trabalho",

            "Desdobramento de indicadores estrat├®gicos (BSC) em KPIs operacionais"

          ]

        },

        {

          "titulo": "Compliance industrial",

          "definicao": "Conjunto de pol├¡ticas, procedimentos e controles para garantir que a opera├º├úo industrial esteja em conformidade com leis, regulamenta├º├Áes, normas t├®cnicas e padr├Áes ├®ticos. Abrange seguran├ºa do trabalho, meio ambiente, tribut├írio e anticorrup├º├úo.",

          "topicos": [

            "LGPD industrial",

            "Conformidade regulat├│ria",

            "Programa de integridade"

          ],

          "formula": "",

          "aplicacoes": [

            "Implanta├º├úo de programa de compliance industrial",

            "Auditoria de conformidade regulat├│ria (ANVISA, INMETRO)",

            "Treinamento de colaboradores em c├│digo de conduta"

          ]

        },

        {

          "titulo": "Gest├úo por resultados",

          "definicao": "Modelo de gest├úo focado no alcance de metas e resultados mensur├íveis, com avalia├º├úo peri├│dica de desempenho. Utiliza indicadores, contratos de gest├úo e sistemas de incentivo para alinhar esfor├ºos da organiza├º├úo aos objetivos estrat├®gicos.",

          "topicos": [

            "Metas SMART",

            "Contrato de gest├úo",

            "Remunera├º├úo vari├ível"

          ],

          "formula": "",

          "aplicacoes": [

            "Programa de b├┤nus atrelado a metas de produ├º├úo e qualidade",

            "Contratos de gest├úo com gerentes de planta",

            "Reuni├Áes mensais de an├ílise cr├¡tica de resultados"

          ]

        },

        {

          "titulo": "BSC ÔÇö Balanced Scorecard",

          "definicao": "Metodologia de gest├úo estrat├®gica que traduz a vis├úo e estrat├®gia da empresa em objetivos e indicadores em quatro perspectivas: financeira, clientes, processos internos e aprendizado/crescimento. Permite o alinhamento estrat├®gico em todos os n├¡veis.",

          "topicos": [

            "Perspectiva financeira",

            "Perspectiva de processos",

            "Mapa estrat├®gico"

          ],

          "formula": "",

          "aplicacoes": [

            "Constru├º├úo do BSC para unidade industrial",

            "Cascateamento de metas do BSC para indicadores setoriais",

            "Revis├úo trimestral do mapa estrat├®gico com diretoria"

          ]

        },

        {

          "titulo": "An├ílise SWOT/FOFA",

          "definicao": "Ferramenta de diagn├│stico estrat├®gico que avalia For├ºas, Fraquezas, Oportunidades e Amea├ºas (FOFA) do ambiente interno e externo da organiza├º├úo. Subsidia a formula├º├úo de estrat├®gias ao cruzar potenciais internos com condi├º├Áes de mercado.",

          "topicos": [

            "An├ílise interna",

            "An├ílise externa",

            "Estrat├®gias S/O, W/O, S/T, W/T"

          ],

          "formula": "",

          "aplicacoes": [

            "SWOT anual para revis├úo de estrat├®gia industrial",

            "An├ílise competitiva de lan├ºamento de nova planta",

            "Diagn├│stico situacional em projetos de consultoria"

          ]

        },

        {

          "titulo": "Plano de neg├│cios (Business Plan)",

          "definicao": "Documento estruturado que descreve o modelo de neg├│cio, mercado, opera├º├Áes, proje├º├Áes financeiras e estrat├®gia de uma empresa ou projeto industrial. Utilizado para capta├º├úo de recursos, aprova├º├úo de investimentos e direcionamento estrat├®gico.",

          "topicos": [

            "Sum├írio executivo",

            "Proje├º├Áes financeiras",

            "An├ílise de viabilidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Business plan para nova f├íbrica ou linha de produ├º├úo",

            "Capta├º├úo de investimento para startup industrial",

            "Plano de neg├│cios para expans├úo internacional"

          ]

        },

        {

          "titulo": "Matriz BCG",

          "definicao": "Ferramenta de an├ílise de portf├│lio que classifica produtos em quatro quadrantes ÔÇö Estrela, Vaca Leiteira, Interroga├º├úo e Abacaxi ÔÇö com base na participa├º├úo de mercado e taxa de crescimento. Auxilia decis├Áes de investimento, desinvestimento e prioriza├º├úo.",

          "topicos": [

            "Ciclo de vida do produto",

            "Participa├º├úo relativa de mercado",

            "Decis├Áes de portf├│lio"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise de portf├│lio de produtos industriais",

            "Decis├úo de descontinuar linhas de baixo desempenho",

            "Aloca├º├úo de investimentos entre categorias de produto"

          ]

        },

        {

          "titulo": "An├ílise de Porter (5 for├ºas)",

          "definicao": "Modelo de an├ílise setorial desenvolvido por Michael Porter que avalia cinco for├ºas competitivas: rivalidade entre concorrentes, amea├ºa de novos entrantes, poder de barganha de fornecedores e clientes, e amea├ºa de substitutos. Define a atratividade e lucratividade potencial de um setor.",

          "topicos": [

            "Rivalidade",

            "Barreiras de entrada",

            "Poder de barganha"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise setorial para entrada em novo mercado industrial",

            "Posicionamento competitivo de unidade de neg├│cios",

            "Estrat├®gia de diferencia├º├úo em setor commoditizado"

          ]

        },

        {

          "titulo": "Gest├úo da rotina",

          "definicao": "Pr├ítica de gerenciamento das atividades operacionais do dia a dia fabril com foco em padroniza├º├úo, disciplina e melhoria cont├¡nua. Utiliza ferramentas como 5S, reuni├Áes r├ípidas (daily huddle) e indicadores visuais para manter a estabilidade dos processos.",

          "topicos": [

            "5S",

            "Gest├úo ├á vista",

            "Reuni├úo di├íria de produ├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Implanta├º├úo do 5S em c├®lulas de produ├º├úo",

            "Quadros de gest├úo ├á vista com indicadores di├írios",

            "Ritual de reuni├úo matinal de produ├º├úo (daily huddle)"

          ]

        },

        {

          "titulo": "Diretrizes estrat├®gicas (Hoshin)",

          "definicao": "M├®todo japon├¬s de desdobramento de diretrizes estrat├®gicas (Hoshin Kanri) que alinha os objetivos estrat├®gicos da alta dire├º├úo com os planos de a├º├úo operacionais. Utiliza a matriz X e ciclo PDCA para garantir execu├º├úo e revis├úo cont├¡nua.",

          "topicos": [

            "Hoshin Kanri",

            "Matriz X",

            "Desdobramento de metas"

          ],

          "formula": "",

          "aplicacoes": [

            "Desdobramento de diretrizes anuais (policy deployment)",

            "Matriz X para alinhamento estrat├®gico-t├ítico-operacional",

            "Catchball process entre n├¡veis hier├írquicos"

          ]

        },

        {

          "titulo": "Or├ºamento estrat├®gico",

          "definicao": "Processo de planejamento financeiro de m├®dio e longo prazo que aloca recursos financeiros conforme as prioridades estrat├®gicas da organiza├º├úo industrial. Integra receitas, custos, investimentos e fluxo de caixa projetado ao plano estrat├®gico.",

          "topicos": [

            "Budget industrial",

            "CAPEX e OPEX",

            "Proje├º├úo de resultados"

          ],

          "formula": "",

          "aplicacoes": [

            "Elabora├º├úo do or├ºamento anual da planta industrial",

            "Avalia├º├úo de investimentos (VPL, TIR, Payback)",

            "Acompanhamento mensal do realizado vs. or├ºado"

          ]

        },

        {

          "titulo": "Reestrutura├º├úo industrial",

          "definicao": "Processo de transforma├º├úo organizacional e operacional de uma unidade industrial para recuperar competitividade, reduzir custos ou adequar-se a novo posicionamento estrat├®gico. Pode envolver redesenho de processos, layoff, fus├úo ou venda de ativos.",

          "topicos": [

            "Turnaround",

            "Downsizing",

            "Redesenho organizacional"

          ],

          "formula": "",

          "aplicacoes": [

            "Turnaround de planta industrial com resultados negativos",

            "Consolida├º├úo de m├║ltiplas plantas em centros de excel├¬ncia",

            "Reestrutura├º├úo de processos p├│s-fus├úo"

          ]

        },

        {

          "titulo": "Fus├Áes e aquisi├º├Áes na ind├║stria",

          "definicao": "Opera├º├Áes societ├írias de consolida├º├úo empresarial envolvendo compra, venda ou uni├úo de empresas industriais. Inclui due diligence, valuation, integra├º├úo p├│s-fus├úo (PMI) e gest├úo da mudan├ºa cultural entre organiza├º├Áes.",

          "topicos": [

            "Due diligence",

            "Valuation industrial",

            "PMI ÔÇö Post Merger Integration"

          ],

          "formula": "",

          "aplicacoes": [

            "Due diligence t├®cnica e financeira em aquisi├º├úo industrial",

            "Integra├º├úo de sistemas e cultura p├│s-M&A",

            "Sinergias operacionais em fus├úo de empresas do mesmo setor"

          ]

        },

        {

          "titulo": "An├ílise de cen├írios industriais",

          "definicao": "T├®cnica prospectiva que constr├│i e analisa m├║ltiplos futuros poss├¡veis para o ambiente industrial, considerando vari├íveis econ├┤micas, tecnol├│gicas, pol├¡ticas e sociais. Apoia a tomada de decis├úo estrat├®gica em contextos de alta incerteza.",

          "topicos": [

            "Prospec├º├úo estrat├®gica",

            "Simula├º├úo de cen├írios",

            "Planejamento por cen├írios"

          ],

          "formula": "",

          "aplicacoes": [

            "Constru├º├úo de cen├írios macroecon├┤micos para planejamento quinquenal",

            "An├ílise de sensibilidade em projetos de expans├úo",

            "Estrat├®gias de mitiga├º├úo para cen├írios adversos"

          ]

        },

        {

          "titulo": "Gest├úo de riscos corporativos",

          "definicao": "Processo estruturado de identifica├º├úo, avalia├º├úo, tratamento e monitoramento de riscos que podem impactar o alcance dos objetivos organizacionais. Segue frameworks como COSO ERM e ISO 31000 para integrar riscos estrat├®gicos, operacionais e financeiros.",

          "topicos": [

            "COSO ERM",

            "ISO 31000",

            "Matriz de riscos"

          ],

          "formula": "N├¡vel de risco = Probabilidade ├ù Impacto",

          "aplicacoes": [

            "Mapeamento de riscos operacionais em planta industrial",

            "Plano de continuidade de neg├│cios (BCP) para f├íbrica",

            "Comit├¬ de riscos corporativos trimestral"

          ]

        },

        {

          "titulo": "Relacionamento com investidores",

          "definicao": "Fun├º├úo estrat├®gica de comunica├º├úo entre a empresa industrial e seus acionistas, investidores e analistas de mercado. Inclui divulga├º├úo de resultados, roadshows, assembleias e relat├│rios anuais conforme exig├¬ncias da CVM e boas pr├íticas de mercado.",

          "topicos": [

            "RI ÔÇö Rela├º├Áes com Investidores",

            "Release de resultados",

            "Apresenta├º├Áes para analistas"

          ],

          "formula": "",

          "aplicacoes": [

            "Prepara├º├úo do relat├│rio anual e agenda de RI",

            "Roadshow com investidores institucionais",

            "Teleconfer├¬ncia de resultados trimestrais"

          ]

        },

        {

          "titulo": "Avalia├º├úo de empresas",

          "definicao": "Conjunto de metodologias para estimar o valor econ├┤mico de uma empresa industrial, incluindo fluxo de caixa descontado (DCF), m├║ltiplos de mercado e valor patrimonial. Essencial para processos de M&A, abertura de capital e planejamento sucess├│rio.",

          "topicos": [

            "DCF ÔÇö Fluxo de Caixa Descontado",

            "M├║ltiplos (EV/EBITDA, P/L)",

            "Laudo de avalia├º├úo"

          ],

          "formula": "VPL = ╬ú FCt / (1 + k)^t",

          "aplicacoes": [

            "Valuation de empresa industrial para venda",

            "Avalia├º├úo para planejamento sucess├│rio familiar",

            "Laudo de avalia├º├úo para transa├º├Áes societ├írias"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Goldratt, E.; Cox, J. A Meta. 3. ed. São Paulo: Nobel, 2002."},
      {"tipo": "Livro", "ref": "Corrêa, H. L.; Corrêa, C. A. Administração de Produção e Operações. 4. ed. São Paulo: Atlas, 2017."},
      {"tipo": "Livro", "ref": "Slack, N.; Brandon-Jones, A.; Johnston, R. Administração da Produção. 8. ed. São Paulo: Atlas, 2018."}
    ]},

    {

      "id": "eng-metodos",

      "nome": "Engenharia de M├®todos",

      "icone": "stopwatch",

      "cor": "#9333ea",

      "descricao": "Estudos de tempos, movimentos e padroniza├º├úo operacional.",

      "subtopicos": [

        {

          "titulo": "Estudo de tempos e movimentos",

          "definicao": "T├®cnica cl├íssica da engenharia industrial que analisa detalhadamente as opera├º├Áes de trabalho, dividindo-as em movimentos elementares, medindo seus tempos e identificando oportunidades de simplifica├º├úo e padroniza├º├úo. Originada dos trabalhos de Taylor e Gilbreth.",

          "topicos": [

            "An├ílise de movimentos",

            "Simplifica├º├úo do trabalho",

            "Princ├¡pios de economia de movimentos"

          ],

          "formula": "Tempo padr├úo = Tempo normal ├ù (1 + Toler├óncias)",

          "aplicacoes": [

            "Estudo de tempos em linha de montagem",

            "An├ílise de movimentos em posto de trabalho repetitivo",

            "Redu├º├úo de cycle time em opera├º├Áes manuais"

          ]

        },

        {

          "titulo": "Cronoan├ílise",

          "definicao": "T├®cnica de medi├º├úo do tempo de trabalho por meio de cronometragem direta das opera├º├Áes, com avalia├º├úo do ritmo do operador (velocidade). Os tempos cronometrados s├úo ajustados por fatores de ritmo e toler├óncias para obter o tempo padr├úo.",

          "topicos": [

            "Cronometragem",

            "Avalia├º├úo de ritmo",

            "Toler├óncias"

          ],

          "formula": "Tempo normal = Tempo cronometrado ├ù Fator de ritmo",

          "aplicacoes": [

            "Defini├º├úo de tempo padr├úo para novas opera├º├Áes",

            "Cronoan├ílise para c├ílculo de capacidade produtiva",

            "Tempo padr├úo para remunera├º├úo por produ├º├úo"

          ]

        },

        {

          "titulo": "Tempo normal e tempo padr├úo",

          "definicao": "Tempo normal ├® o tempo necess├írio para executar uma tarefa sob condi├º├Áes normais, sem toler├óncias, considerando o ritmo do operador. Tempo padr├úo ├® o tempo normal acrescido de toler├óncias (fadiga, necessidades pessoais, esperas) e serve de base para planejamento e remunera├º├úo.",

          "topicos": [

            "Fator de ritmo",

            "Toler├óncias fixas e vari├íveis",

            "Tempo padr├úo como refer├¬ncia"

          ],

          "formula": "Tempo padr├úo = Tempo normal ├ù (1 + Toler├óncias)",

          "aplicacoes": [

            "Base para planejamento e controle da produ├º├úo (PCP)",

            "C├ílculo de custo de m├úo de obra direta",

            "Sistema de remunera├º├úo por produ├º├úo (pr├¬mio)"

          ]

        },

        {

          "titulo": "Cronometragem",

          "definicao": "Processo sistem├ítico de medi├º├úo do tempo de execu├º├úo de opera├º├Áes produtivas utilizando cron├┤metro, dividindo a tarefa em elementos e registrando m├║ltiplas amostras para garantir representatividade estat├¡stica.",

          "topicos": [

            "Amostragem de tempos",

            "Divis├úo em elementos",

            "N├║mero de ciclos"

          ],

          "formula": "N┬║ de ciclos = (z ├ù s / e ├ù x╠ä)┬▓",

          "aplicacoes": [

            "Levantamento de tempos para novo produto em produ├º├úo",

            "Valida├º├úo de tempo padr├úo em opera├º├Áes existentes",

            "Estudo de tempos para balanceamento de linha"

          ]

        },

        {

          "titulo": "Layout industrial",

          "definicao": "Projeto do arranjo f├¡sico de m├íquinas, equipamentos e postos de trabalho dentro da f├íbrica para otimizar o fluxo de materiais, pessoas e informa├º├Áes. Tipos principais: layout por produto, por processo, celular e posicional.",

          "topicos": [

            "Arranjo f├¡sico",

            "Fluxo de materiais",

            "Layout por produto vs. processo"

          ],

          "formula": "",

          "aplicacoes": [

            "Redesenho de layout para reduzir deslocamentos em 30%",

            "Convers├úo de layout funcional para celular",

            "Projeto de nova linha de produ├º├úo com fluxo cont├¡nuo"

          ]

        },

        {

          "titulo": "Balanceamento de linhas",

          "definicao": "T├®cnica de distribui├º├úo equilibrada das tarefas entre postos de trabalho em uma linha de produ├º├úo para minimizar o tempo ocioso e maximizar a efici├¬ncia. Busca igualar os tempos de ciclo de cada esta├º├úo ao takt time.",

          "topicos": [

            "Takt time",

            "Tempo de ciclo",

            "Efici├¬ncia da linha"

          ],

          "formula": "Takt time = Tempo dispon├¡vel / Demanda do cliente\nEfici├¬ncia = ╬ú(Tempos de tarefa) / (N┬║ de postos ├ù Tempo de ciclo)",

          "aplicacoes": [

            "Balanceamento de linha de montagem automotiva",

            "Re-balanceamento ap├│s mudan├ºa de mix de produ├º├úo",

            "Yamazumi chart para balanceamento visual"

          ]

        },

        {

          "titulo": "Capacidade produtiva",

          "definicao": "Volume m├íximo de produ├º├úo que uma unidade fabril pode realizar em condi├º├Áes normais de opera├º├úo, considerando recursos dispon├¡veis, turnos e n├¡vel de efici├¬ncia. Pode ser expressa em unidades, horas ou toneladas por per├¡odo.",

          "topicos": [

            "Capacidade instalada",

            "Capacidade efetiva",

            "Ociosidade"

          ],

          "formula": "Capacidade dispon├¡vel = (Horas totais ├ù Efici├¬ncia ├ù Utiliza├º├úo)",

          "aplicacoes": [

            "Dimensionamento de capacidade para nova linha",

            "An├ílise de gargalos e expans├Áes",

            "Plano de capacidade para atender crescimento de demanda"

          ]

        },

        {

          "titulo": "Gargalos de produ├º├úo",

          "definicao": "Recurso ou etapa do processo produtivo cuja capacidade ├® inferior ├á demanda, limitando o fluxo total de produ├º├úo. Identificar e gerenciar gargalos ├® essencial para aumentar a produtividade sem grandes investimentos.",

          "topicos": [

            "Identifica├º├úo de gargalos",

            "TOC ÔÇö Teoria das Restri├º├Áes",

            "Eleva├º├úo da restri├º├úo"

          ],

          "formula": "Throughput = 1 / Tempo do gargalo",

          "aplicacoes": [

            "Mapeamento de gargalos em manufatura de alto volume",

            "Plano de eleva├º├úo de gargalo com horas extras e setups",

            "An├ílise de restri├º├Áes em processo qu├¡mico cont├¡nuo"

          ]

        },

        {

          "titulo": "Teoria das Restri├º├Áes (TOC)",

          "definicao": "Filosofia de gest├úo desenvolvida por Eliyahu Goldratt baseada no princ├¡pio de que todo sistema tem pelo menos uma restri├º├úo que limita seu desempenho. O processo de melhoria cont├¡nua segue cinco passos: identificar, explorar, subordinar, elevar e repetir.",

          "topicos": [

            "Processo de 5 passos",

            "Tambor-Pulm├úo-Corda (Drum-Buffer-Rope)",

            "M├®trica de throughput"

          ],

          "formula": "Ganho l├¡quido = Throughput - Despesas operacionais",

          "aplicacoes": [

            "Gest├úo de produ├º├úo com Tambor-Pulm├úo-Corda",

            "Projeto de melhoria em f├íbrica com m├║ltiplos gargalos",

            "TOC aplicada a gest├úo de projetos (Critical Chain)"

          ]

        },

        {

          "titulo": "Produtividade industrial",

          "definicao": "Medida da efici├¬ncia com que os recursos produtivos (m├úo de obra, materiais, m├íquinas) s├úo convertidos em produtos acabados. A produtividade ├® calculada pela rela├º├úo entre outputs (produ├º├úo) e inputs (recursos consumidos).",

          "topicos": [

            "Produtividade da m├úo de obra",

            "Produtividade total dos fatores",

            "├ìndices de produtividade"

          ],

          "formula": "Produtividade = Output / Input\n(Ex: pe├ºas / homem-hora)",

          "aplicacoes": [

            "Acompanhamento mensal de produtividade por centro de trabalho",

            "Programa de aumento de produtividade com lean manufacturing",

            "Compara├º├úo de produtividade entre plantas"

          ]

        },

        {

          "titulo": "Gr├ífico de homem-m├íquina",

          "definicao": "Ferramenta de an├ílise que registra simultaneamente as atividades de um operador e de uma ou mais m├íquinas ao longo do tempo. Permite identificar per├¡odos ociosos do operador ou da m├íquina e otimizar o atendimento homem-m├íquina.",

          "topicos": [

            "Ciclo homem-m├íquina",

            "Atividades simult├óneas",

            "Ociosidade do operador"

          ],

          "formula": "",

          "aplicacoes": [

            "Otimiza├º├úo da rela├º├úo homem-m├íquina em c├®lulas de usinagem",

            "Estudo de viabilidade de operador polivalente",

            "An├ílise de m├║ltiplas m├íquinas por operador"

          ]

        },

        {

          "titulo": "Diagrama de fluxo de processo",

          "definicao": "Representa├º├úo gr├ífica das etapas de um processo produtivo utilizando s├¡mbolos padronizados (opera├º├úo, transporte, inspe├º├úo, espera e armazenagem). Permite visualizar o fluxo completo e identificar desperd├¡cios e oportunidades de melhoria.",

          "topicos": [

            "Simbologia ASME",

            "Mapeamento do fluxo",

            "Identifica├º├úo de desperd├¡cios"

          ],

          "formula": "",

          "aplicacoes": [

            "Mapeamento de processo produtivo para padroniza├º├úo",

            "An├ílise de fluxo para redu├º├úo de transportes",

            "Documenta├º├úo de procedimentos operacionais"

          ]

        },

        {

          "titulo": "Diagrama de espaguete",

          "definicao": "Ferramenta visual que tra├ºa o caminho percorrido por materiais, pessoas ou informa├º├Áes dentro do layout fabril. O tra├ºado resultante, semelhante a um prato de espaguete, revela deslocamentos excessivos e oportunidades de otimiza├º├úo do layout.",

          "topicos": [

            "An├ílise de fluxo",

            "Dist├óncia percorrida",

            "Layout otimizado"

          ],

          "formula": "",

          "aplicacoes": [

            "Mapeamento de deslocamentos em almoxarifado",

            "Redu├º├úo de transporte entre opera├º├Áes em 50%",

            "Redesenho de layout baseado em diagrama de espaguete"

          ]

        },

        {

          "titulo": "Gr├ífico de atividades simult├óneas",

          "definicao": "Ferramenta que registra as atividades de m├║ltiplos operadores ou operador e m├íquina no mesmo eixo temporal, permitindo identificar depend├¬ncias e balancear a carga de trabalho entre membros de uma equipe ou c├®lula.",

          "topicos": [

            "Atividades em paralelo",

            "Carga de trabalho",

            "Balanceamento de equipe"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise de equipe de montagem para balanceamento",

            "Redistribui├º├úo de tarefas entre operadores",

            "Otimiza├º├úo de opera├º├úo em c├®lula de manufatura"

          ]

        },

        {

          "titulo": "Sistema de toler├óncias",

          "definicao": "Conjunto de percentuais de tempo adicionados ao tempo normal para compensar fadiga, necessidades pessoais, esperas e condi├º├Áes ambientais. As toler├óncias podem ser fixas (constantes) ou vari├íveis (dependentes das condi├º├Áes de trabalho).",

          "topicos": [

            "Toler├óncias fixas",

            "Toler├óncias vari├íveis",

            "Suplementos de descanso"

          ],

          "formula": "FTD = (Trabalho energ├®tico + Postura + Movimentos + ...)",

          "aplicacoes": [

            "Defini├º├úo de toler├óncias para opera├º├Áes pesadas na siderurgia",

            "Tabela de toler├óncias por tipo de opera├º├úo",

            "C├ílculo de tempo padr├úo com allowances realistas"

          ]

        },

        {

          "titulo": "Tempos sint├®ticos (MTM, MOST)",

          "definicao": "Sistemas de tempos pr├®-determinados (Predetermined Motion Time Systems) que atribuem valores de tempo a movimentos humanos b├ísicos (alcan├ºar, pegar, posicionar) sem necessidade de cronometragem. MTM e MOST s├úo os sistemas mais difundidos na ind├║stria.",

          "topicos": [

            "MTM-1, MTM-2, MTM-UAS",

            "MOST ÔÇö Maynard Operation Sequence Technique",

            "Tempos sint├®ticos para estimativa r├ípida"

          ],

          "formula": "",

          "aplicacoes": [

            "Estimativa de tempos para novos produtos sem prot├│tipo f├¡sico",

            "Padroniza├º├úo de tempos em opera├º├Áes de montagem",

            "Estudo de m├®todos com MTM para redu├º├úo de movimentos"

          ]

        },

        {

          "titulo": "Amostragem do trabalho",

          "definicao": "T├®cnica estat├¡stica de medi├º├úo indireta do trabalho baseada em observa├º├Áes instant├óneas aleat├│rias ao longo da jornada. Permite estimar a propor├º├úo de tempo gasto em cada atividade sem necessidade de cronometragem cont├¡nua.",

          "topicos": [

            "Observa├º├Áes instant├óneas",

            "Intervalo de confian├ºa",

            "Estimativa de utiliza├º├úo"

          ],

          "formula": "n = z┬▓ ├ù p ├ù (1-p) / e┬▓",

          "aplicacoes": [

            "Levantamento de utiliza├º├úo de m├íquinas na f├íbrica",

            "An├ílise de atividades improdutivas em equipes administrativas",

            "Estudo de tempos em opera├º├Áes de manuten├º├úo"

          ]

        },

        {

          "titulo": "Yamazumi",

          "definicao": "Ferramenta visual japonesa (literalmente 'empilhamento') que representa graficamente a carga de trabalho de cada posto em uma linha de produ├º├úo. Cada tarefa ├® empilhada como uma barra colorida, permitindo identificar desbalanceamento entre postos.",

          "topicos": [

            "Gr├ífico de empilhamento",

            "Balanceamento visual",

            "Redistribui├º├úo de carga"

          ],

          "formula": "",

          "aplicacoes": [

            "Yamazumi chart para balanceamento de linha de produ├º├úo",

            "Padroniza├º├úo de trabalho visualizada em cada posto",

            "Redu├º├úo de gargalos com redistribui├º├úo de elementos de trabalho"

          ]

        },

        {

          "titulo": "Layout por produto",

          "definicao": "Arranjo f├¡sico onde m├íquinas e equipamentos s├úo dispostos sequencialmente conforme a rota de fabrica├º├úo de um produto espec├¡fico. Adequado para produ├º├úo em massa de alto volume e baixa variedade, pois minimiza transporte e estoques intermedi├írios.",

          "topicos": [

            "Linha de produ├º├úo",

            "Fluxo cont├¡nuo",

            "Produ├º├úo em massa"

          ],

          "formula": "",

          "aplicacoes": [

            "Linha de montagem de ve├¡culos",

            "Linha de envase de bebidas",

            "Produ├º├úo cont├¡nua de eletrodom├®sticos"

          ]

        },

        {

          "titulo": "Layout celular",

          "definicao": "Arranjo f├¡sico que agrupa m├íquinas e operadores dedicados a fam├¡lias de produtos com processos similares, formando c├®lulas de manufatura. Combina flexibilidade do layout por processo com efici├¬ncia do layout por produto, reduzindo lead times e WIP.",

          "topicos": [

            "Tecnologia de grupo",

            "C├®lula de manufatura",

            "Fam├¡lias de produtos"

          ],

          "formula": "",

          "aplicacoes": [

            "Implementa├º├úo de c├®lulas de usinagem para fam├¡lias de pe├ºas",

            "C├®lula de montagem em U com operador multitarefa",

            "Convers├úo de layout funcional para celular"

          ]

        },

        {

          "titulo": "An├ílise de valor agregado",

          "definicao": "T├®cnica que classifica cada atividade do processo produtivo como agregadora de valor (AV), necess├íria mas n├úo agregadora (NNA) ou puro desperd├¡cio. Permite focar esfor├ºos de melhoria na elimina├º├úo de desperd├¡cios e na simplifica├º├úo de atividades.",

          "topicos": [

            "Atividades AV e NAV",

            "Mapeamento de fluxo de valor (VSM)",

            "Desperd├¡cios lean"

          ],

          "formula": "%AV = Tempo de atividades AV / Tempo total de atravessamento",

          "aplicacoes": [

            "VSM de processo produtivo com classifica├º├úo AV",

            "Projeto de melhoria para reduzir NAV em 50%",

            "An├ílise de valor agregado em processo administrativo"

          ]

        },

        {

          "titulo": "Tempo de atravessamento",

          "definicao": "Lead time total desde a entrada da mat├®ria-prima at├® a libera├º├úo do produto acabado, incluindo processamento, espera, movimenta├º├úo e inspe├º├úo. A redu├º├úo do tempo de atravessamento ├® objetivo central da manufatura enxuta.",

          "topicos": [

            "Lead time",

            "Tempo de processo vs. tempo total",

            "Redu├º├úo de atravessamento"

          ],

          "formula": "Tempo de atravessamento = ╬ú(Tempo de processamento + Esperas + Transportes + Inspe├º├Áes)",

          "aplicacoes": [

            "Redu├º├úo de lead time de 15 para 5 dias em linha de produ├º├úo",

            "An├ílise de atravessamento para identifica├º├úo de desperd├¡cios",

            "Impacto da redu├º├úo de lote no tempo de atravessamento"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Barnes, R. M. Estudo de Movimentos e de Tempos: Projeto e Medida do Trabalho. 6. ed. São Paulo: Blucher, 1977."},
      {"tipo": "Livro", "ref": "Freivalds, A.; Niebel, B. W. Niebel's Methods, Standards, and Work Design. 13. ed. Nova York: McGraw-Hill, 2013."},
      {"tipo": "Livro", "ref": "Martins, P. G.; Laugeni, F. P. Administração da Produção. 3. ed. São Paulo: Saraiva, 2015."}
    ]},

    {

      "id": "simulacao",

      "nome": "Simula├º├úo e Modelagem",

      "icone": "monitor",

      "cor": "#2563eb",

      "descricao": "Simula├º├úo computacional de processos e sistemas produtivos.",

      "subtopicos": [

        {

          "titulo": "Simula├º├úo de processos",

          "definicao": "T├®cnica de representa├º├úo computacional de processos produtivos para analisar seu comportamento sob diferentes condi├º├Áes operacionais. Permite testar cen├írios, identificar gargalos, avaliar alternativas de layout e otimizar recursos sem interromper a opera├º├úo real.",

          "topicos": [

            "Modelagem de sistemas",

            "Experimenta├º├úo computacional",

            "An├ílise de cen├írios"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de nova linha de produ├º├úo para validar capacidade",

            "Teste de diferentes pol├¡ticas de manuten├º├úo em ambiente virtual",

            "An├ílise de impacto de varia├º├úo de demanda no sistema produtivo"

          ]

        },

        {

          "titulo": "Eventos discretos",

          "definicao": "Paradigma de simula├º├úo onde o sistema muda de estado apenas em momentos discretos no tempo, correspondentes ├á ocorr├¬ncia de eventos (chegada de pedido, in├¡cio de opera├º├úo, falha de m├íquina). ├ë o m├®todo mais utilizado para simular sistemas de manufatura e log├¡stica.",

          "topicos": [

            "Entidades, recursos e filas",

            "Eventos e estados",

            "Rel├│gio da simula├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo discreta de linha de montagem com falhas aleat├│rias",

            "Modelagem de centro de distribui├º├úo com m├║ltiplos recursos",

            "An├ílise de filas em sistema de atendimento"

          ]

        },

        {

          "titulo": "Simula├º├úo computacional",

          "definicao": "Uso de software especializado para criar modelos digitais de sistemas reais e realizar experimentos controlados. Permite avaliar desempenho, testar hip├│teses e otimizar decis├Áes em ambiente livre de riscos e com custos reduzidos.",

          "topicos": [

            "Modelos digitais",

            "Experimenta├º├úo in silico",

            "Ferramentas computacionais"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de throughput de f├íbrica antes de investimento em equipamentos",

            "Valida├º├úo de l├│gica operacional de sistema de manuseio de materiais",

            "Redu├º├úo de riscos em projetos de expans├úo fabril"

          ]

        },

        {

          "titulo": "Arena Simulation",

          "definicao": "Software l├¡der de simula├º├úo de eventos discretos desenvolvido pela Rockwell Automation, amplamente utilizado na ind├║stria e academia. Interface gr├ífica com blocos de modelagem permite construir modelos de processos complexos de forma intuitiva.",

          "topicos": [

            "Modelagem com blocos Arena",

            "Anima├º├úo 3D",

            "An├ílise de resultados"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de sistema produtivo com Arena para otimiza├º├úo de layout",

            "Modelagem de processo log├¡stico com m├║ltiplos cen├írios",

            "An├ílise de gargalos em planta fabril usando Process Analyzer"

          ]

        },

        {

          "titulo": "FlexSim",

          "definicao": "Software de simula├º├úo 3D de eventos discretos focado em manufatura, log├¡stica e supply chain. Diferencia-se pela modelagem tridimensional em tempo real, permitindo visualiza├º├úo intuitiva de fluxos e intera├º├Áes entre recursos.",

          "topicos": [

            "Modelagem 3D",

            "Simula├º├úo de manufatura",

            "An├ílise de throughput"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo 3D de centro de distribui├º├úo automatizado",

            "Otimiza├º├úo de fluxo de materiais em f├íbrica de bens de consumo",

            "Modelagem de sistema de transportadores e AGVs"

          ]

        },

        {

          "titulo": "AnyLogic",

          "definicao": "Plataforma de simula├º├úo multim├®todo que suporta modelagem por eventos discretos, din├ómica de sistemas e agentes (agent-based) em um ├║nico ambiente. Utilizada para problemas complexos que exigem diferentes abordagens de modelagem.",

          "topicos": [

            "Multim├®todo",

            "Modelagem baseada em agentes",

            "Din├ómica de sistemas"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de cadeia de suprimentos com AnyLogic",

            "Modelagem de fluxo de pedestres em esta├º├Áes",

            "Simula├º├úo de ado├º├úo de novos produtos no mercado"

          ]

        },

        {

          "titulo": "Modelagem de sistemas",

          "definicao": "Processo de constru├º├úo de representa├º├Áes abstratas de sistemas reais para fins de an├ílise, previs├úo e otimiza├º├úo. Envolve defini├º├úo de limites, vari├íveis, rela├º├Áes causais, par├ómetros e regras de comportamento do sistema modelado.",

          "topicos": [

            "Abstra├º├úo e simplifica├º├úo",

            "Valida├º├úo conceitual",

            "Par├ómetros e vari├íveis de decis├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Modelagem conceitual de sistema produtivo para Simula├º├úo",

            "Constru├º├úo de modelo de din├ómica de sistemas para supply chain",

            "Modelagem de filas em sistema de servi├ºos"

          ]

        },

        {

          "titulo": "Otimiza├º├úo via simula├º├úo",

          "definicao": "Abordagem que combina simula├º├úo com algoritmos de otimiza├º├úo para encontrar a melhor configura├º├úo de par├ómetros de um sistema complexo. A simula├º├úo avalia o desempenho de cada configura├º├úo candidata, guiando a busca pela solu├º├úo ├│tima.",

          "topicos": [

            "Algoritmos gen├®ticos",

            "Simulated annealing",

            "Otimiza├º├úo heur├¡stica"

          ],

          "formula": "",

          "aplicacoes": [

            "Otimiza├º├úo de n├║mero de operadores em linha de produ├º├úo via simula├º├úo",

            "Minimiza├º├úo de custo log├¡stico com otimiza├º├úo-simula├º├úo",

            "Dimensionamento ├│timo de frota com algoritmo gen├®tico + simula├º├úo"

          ]

        },

        {

          "titulo": "An├ílise de cen├írios",

          "definicao": "T├®cnica de avalia├º├úo do comportamento do sistema sob diferentes conjuntos de condi├º├Áes pr├®-definidas (cen├írios). Permite comparar alternativas operacionais, testar robustez de decis├Áes e preparar a organiza├º├úo para diferentes futuros poss├¡veis.",

          "topicos": [

            "Cen├írios operacionais",

            "An├ílise comparativa",

            "├ürvore de decis├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Compara├º├úo de 5 cen├írios de layout fabril com simula├º├úo",

            "An├ílise de cen├írios de demanda vs. capacidade produtiva",

            "Teste de pol├¡ticas de estoque em diferentes cen├írios de lead time"

          ]

        },

        {

          "titulo": "Simula├º├úo Monte Carlo",

          "definicao": "M├®todo estat├¡stico que utiliza amostragem aleat├│ria repetida para estimar resultados de sistemas com incerteza. Amplamente usado para an├ílise de risco financeiro, previs├úo de prazos, estimativas de custo e dimensionamento de capacidade.",

          "topicos": [

            "Amostragem aleat├│ria",

            "Distribui├º├Áes de probabilidade",

            "An├ílise de risco"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de VPL de projeto com incerteza em receitas e custos",

            "Estimativa de prazo de projeto com PERT + Monte Carlo",

            "An├ílise de risco em investimento industrial"

          ]

        },

        {

          "titulo": "Valida├º├úo de modelos",

          "definicao": "Processo de verificar se o modelo computacional representa adequadamente o sistema real para os prop├│sitos do estudo. Inclui valida├º├úo conceitual (especialistas) e operacional (compara├º├úo de outputs simulados vs. dados reais).",

          "topicos": [

            "Valida├º├úo conceitual",

            "Valida├º├úo operacional",

            "An├ílise de sensibilidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Compara├º├úo de dados simulados vs. hist├│ricos de produ├º├úo",

            "Valida├º├úo de modelo com especialistas de ch├úo de f├íbrica",

            "Teste de sensibilidade para confirmar comportamento esperado"

          ]

        },

        {

          "titulo": "An├ílise de sensibilidade",

          "definicao": "T├®cnica que avalia como a varia├º├úo dos par├ómetros de entrada do modelo afeta os resultados simulados. Identifica quais vari├íveis t├¬m maior impacto no desempenho do sistema, direcionando esfor├ºos de coleta de dados e melhoria.",

          "topicos": [

            "Par├ómetros cr├¡ticos",

            "Gr├ífico de tornado",

            "Impacto nas sa├¡das"

          ],

          "formula": "",

          "aplicacoes": [

            "Identifica├º├úo de vari├íveis cr├¡ticas em modelo de produ├º├úo",

            "An├ílise de sensibilidade de par├ómetros de manuten├º├úo no OEE",

            "Prioriza├º├úo de fatores de melhoria baseada em impacto simulado"

          ]

        },

        {

          "titulo": "Simula├º├úo de manufatura",

          "definicao": "Aplica├º├úo espec├¡fica de simula├º├úo computacional a sistemas de manufatura para analisar throughput, utiliza├º├úo de recursos, lead times, forma├º├úo de filas e gargalos. Essencial para projeto e melhoria de sistemas produtivos complexos.",

          "topicos": [

            "Manufatura discreta",

            "Manufatura cont├¡nua",

            "Sistemas flex├¡veis de manufatura"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de sistema de manufatura flex├¡vel (FMS)",

            "An├ílise de capacidade de planta antes de novos contratos",

            "Estudo de pol├¡ticas de programa├º├úo da produ├º├úo (scheduling)"

          ]

        },

        {

          "titulo": "Simula├º├úo log├¡stica",

          "definicao": "Aplica├º├úo de simula├º├úo a sistemas log├¡sticos e de supply chain para otimizar transportes, armazenagem, distribui├º├úo e gest├úo de estoques. Permite avaliar pol├¡ticas de reposi├º├úo, roteiriza├º├úo e dimensionamento de frota.",

          "topicos": [

            "Cadeia de suprimentos",

            "Centro de distribui├º├úo",

            "Roteiriza├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de opera├º├úo de centro de distribui├º├úo (CD)",

            "Modelagem de cadeia log├¡stica multicamadas",

            "Dimensionamento de frota com simula├º├úo de rotas"

          ]

        },

        {

          "titulo": "Simula├º├úo de servi├ºos",

          "definicao": "Aplica├º├úo de t├®cnicas de simula├º├úo a sistemas de servi├ºos como hospitais, bancos, restaurantes, call centers e aeroportos. Diferencia-se da simula├º├úo de manufatura pela predomin├óncia do fator humano e variabilidade dos processos.",

          "topicos": [

            "Hospitais e sa├║de",

            "Atendimento ao cliente",

            "Sistemas de fila"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de fluxo de pacientes em pronto-socorro",

            "Dimensionamento de equipe de call center com simula├º├úo",

            "Otimiza├º├úo de atendimento em ag├¬ncia banc├íria"

          ]

        },

        {

          "titulo": "G├¬meo digital vs. simula├º├úo",

          "definicao": "G├¬meo digital ├® uma r├®plica virtual de um sistema real conectada em tempo real a sensores e dados operacionais, evoluindo com o sistema f├¡sico. Difere da simula├º├úo tradicional, que ├® pontual e offline, por sua natureza cont├¡nua e bidirecional.",

          "topicos": [

            "R├®plica digital",

            "Tempo real e IoT",

            "Manuten├º├úo preditiva"

          ],

          "formula": "",

          "aplicacoes": [

            "G├¬meo digital de linha de produ├º├úo para monitoramento em tempo real",

            "Integra├º├úo de simula├º├úo com sistemas MES e SCADA",

            "Compara├º├úo entre abordagens para tomada de decis├úo"

          ]

        },

        {

          "titulo": "Tecnologia Plant Simulation",

          "definicao": "Software da Siemens (antigo Tecnomatix Plant Simulation) para simula├º├úo, visualiza├º├úo e otimiza├º├úo de sistemas produtivos e log├¡sticos. Permite modelar, analisar e otimizar fluxos de materiais e opera├º├Áes em ambiente virtual 3D.",

          "topicos": [

            "Siemens Tecnomatix",

            "Otimiza├º├úo de fluxo",

            "G├¬meo digital de f├íbrica"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de f├íbrica completa com Plant Simulation",

            "Otimiza├º├úo de layout e fluxo de materiais em planta automotiva",

            "An├ílise de cen├írios de produ├º├úo integrada com ERP"

          ]

        },

        {

          "titulo": "Simul8",

          "definicao": "Software de simula├º├úo de eventos discretos com interface visual intuitiva, focado em aplica├º├Áes de manufatura, servi├ºos e sa├║de. Destaca-se pela facilidade de uso e r├ípida prototipagem de modelos.",

          "topicos": [

            "Interface visual",

            "Simula├º├úo de filas",

            "Aplica├º├Áes em sa├║de"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo r├ípida de processo produtivo para suporte ├á decis├úo",

            "Modelagem de fluxo de pacientes em unidade de sa├║de",

            "An├ílise de capacidade em opera├º├Áes de servi├ºos"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Chwif, L.; Medina, A. C. Modelagem e Simulação de Eventos Discretos: Teoria e Prática. 4. ed. São Paulo: Elsevier, 2010."},
      {"tipo": "Livro", "ref": "Law, A. M. Simulation Modeling and Analysis. 5. ed. Nova York: McGraw-Hill, 2015."},
      {"tipo": "Livro", "ref": "Kelton, W. D.; Sadowski, R. P.; Zupick, N. B. Simulation with Arena. 6. ed. Nova York: McGraw-Hill, 2015."}
    ]},

    {

      "id": "inovacao",

      "nome": "Gest├úo da Inova├º├úo",

      "icone": "lightbulb",

      "cor": "#ca8a04",

      "descricao": "P&D, open innovation, design thinking e cultura de inova├º├úo industrial.",

      "subtopicos": [

        {

          "titulo": "P&D ÔÇö Pesquisa e Desenvolvimento",

          "definicao": "Conjunto de atividades sistem├íticas e criativas para aumentar o conhecimento dispon├¡vel e gerar novas aplica├º├Áes tecnol├│gicas. Divide-se em pesquisa b├ísica, pesquisa aplicada e desenvolvimento experimental, sendo motor da inova├º├úo tecnol├│gica industrial.",

          "topicos": [

            "Pesquisa b├ísica",

            "Pesquisa aplicada",

            "Desenvolvimento experimental"

          ],

          "formula": "",

          "aplicacoes": [

            "Laborat├│rio de P&D para novos materiais",

            "Projetos de pesquisa em parceria universidade-empresa",

            "Gest├úo de portf├│lio de P&D com crit├®rios de prioriza├º├úo"

          ]

        },

        {

          "titulo": "Gest├úo da inova├º├úo",

          "definicao": "Processo estruturado de planejar, organizar, dirigir e controlar as iniciativas de inova├º├úo dentro da organiza├º├úo, desde a gera├º├úo de ideias at├® a implementa├º├úo e difus├úo. Envolve gest├úo de portf├│lio, m├®tricas de inova├º├úo e alinhamento estrat├®gico.",

          "topicos": [

            "Processo de inova├º├úo",

            "Portf├│lio de inova├º├úo",

            "M├®tricas de inova├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Estrutura├º├úo de departamento de gest├úo da inova├º├úo",

            "Implanta├º├úo de sistema de gest├úo de ideias (sugest├Áes)",

            "Relat├│rio de inova├º├úo com indicadores de resultado"

          ]

        },

        {

          "titulo": "Design Thinking",

          "definicao": "Abordagem centrada no ser humano para resolu├º├úo de problemas complexos utilizando a mentalidade do designer. Segue etapas de empatia, defini├º├úo, idea├º├úo, prototipa├º├úo e teste, combinando pensamento divergente e convergente.",

          "topicos": [

            "Empatia e pesquisa com usu├írios",

            "Idea├º├úo",

            "Prototipa├º├úo r├ípida"

          ],

          "formula": "",

          "aplicacoes": [

            "Workshop de design thinking para inova├º├úo em produto",

            "Cocria├º├úo com clientes para novo servi├ºo industrial",

            "Resolu├º├úo de problemas complexos com metodologia double diamond"

          ]

        },

        {

          "titulo": "Open Innovation",

          "definicao": "Paradigma de inova├º├úo que defende o uso de fluxos de conhecimento internos e externos para acelerar a inova├º├úo interna e expandir mercados. Combina tecnologias internas com parcerias externas, startups, universidades e laborat├│rios de pesquisa.",

          "topicos": [

            "Inova├º├úo aberta inbound e outbound",

            "Corporate venture",

            "Plataformas de inova├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Programa de aproxima├º├úo com startups (corporate venture)",

            "Licenciamento de tecnologia desenvolvida internamente",

            "Desafios de inova├º├úo abertos ao ecossistema"

          ]

        },

        {

          "titulo": "Transforma├º├úo organizacional",

          "definicao": "Processo profundo de mudan├ºa na estrutura, cultura, processos e modelo de neg├│cio da organiza├º├úo para responder a disrup├º├Áes tecnol├│gicas, de mercado ou regulat├│rias. Requer lideran├ºa, comunica├º├úo e gest├úo da mudan├ºa estruturada.",

          "topicos": [

            "Gest├úo da mudan├ºa",

            "Transforma├º├úo digital",

            "Reestrutura├º├úo cultural"

          ],

          "formula": "",

          "aplicacoes": [

            "Transforma├º├úo digital de ind├║stria tradicional para Ind├║stria 4.0",

            "Programa de transforma├º├úo cultural lean",

            "Reestrutura├º├úo organizacional para agilidade e inova├º├úo"

          ]

        },

        {

          "titulo": "Propriedade intelectual e patentes",

          "definicao": "Conjunto de direitos legais que protegem cria├º├Áes intelectuais, incluindo patentes de inven├º├úo, modelos de utilidade, desenhos industriais e marcas. As patentes conferem exclusividade tempor├íria (20 anos no Brasil) e s├úo indicadores-chave de inova├º├úo tecnol├│gica.",

          "topicos": [

            "Patentes de inven├º├úo",

            "Marcas e desenhos industriais",

            "INPI e PCT"

          ],

          "formula": "",

          "aplicacoes": [

            "Dep├│sito de patente de nova tecnologia de processo",

            "Mapeamento de patentes para intelig├¬ncia competitiva",

            "Estrat├®gia de portf├│lio de PI para startup industrial"

          ]

        },

        {

          "titulo": "Inova├º├úo incremental vs. radical",

          "definicao": "Inova├º├úo incremental consiste em melhorias cont├¡nuas em produtos, processos ou servi├ºos existentes (ex.: nova vers├úo de software). Inova├º├úo radical introduz algo completamente novo, rompendo com paradigmas estabelecidos e criando novos mercados (ex.: impress├úo 3D).",

          "topicos": [

            "Inova├º├úo sustentadora",

            "Inova├º├úo disruptiva",

            "Curva S tecnol├│gica"

          ],

          "formula": "",

          "aplicacoes": [

            "Programa de melhorias incrementais cont├¡nuas (kaizen)",

            "Projeto de inova├º├úo radical com laborat├│rio dedicado",

            "Equil├¡brio de portf├│lio entre incremental e radical (ambidestria)"

          ]

        },

        {

          "titulo": "H├®lice Tr├¡plice",

          "definicao": "Modelo de inova├º├úo que prop├Áe a intera├º├úo sin├®rgica entre universidade, empresa e governo para fomentar o desenvolvimento econ├┤mico e social baseado em conhecimento. Cada h├®lice assume pap├®is que se sobrep├Áem e complementam na gera├º├úo de inova├º├úo.",

          "topicos": [

            "Universidade-empresa",

            "Governo e pol├¡ticas p├║blicas",

            "Parques tecnol├│gicos"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto cooperativo universidade-ind├║stria para P&D",

            "Estrutura├º├úo de parque tecnol├│gico com governan├ºa tr├¡plice",

            "Programa de incentivos fiscais (Lei do Bem) para inova├º├úo"

          ]

        },

        {

          "titulo": "Inova├º├úo disruptiva",

          "definicao": "Conceito de Clayton Christensen que descreve inova├º├Áes que inicialmente atendem mercados nicho ou desprezados por incumbentes, mas que gradualmente deslocam concorrentes estabelecidos ao melhorar desempenho e acessibilidade.",

          "topicos": [

            "Disrup├º├úo de mercado",

            "Baixo custo inicial",

            "Deslocamento de incumbentes"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise de amea├ºa disruptiva em setor industrial consolidado",

            "Estrat├®gia de inova├º├úo disruptiva para novo entrante",

            "Antecipa├º├úo de disrup├º├úo tecnol├│gica em planejamento estrat├®gico"

          ]

        },

        {

          "titulo": "Ecossistemas de inova├º├úo",

          "definicao": "Redes de organiza├º├Áes interconectadas ÔÇö startups, universidades, centros de pesquisa, investidores, governo e grandes empresas ÔÇö que coevoluem e geram inova├º├úo coletivamente. A for├ºa do ecossistema est├í na diversidade e nas conex├Áes entre seus agentes.",

          "topicos": [

            "Startups e scale-ups",

            "Aceleradoras e incubadoras",

            "Redes de inova├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Mapeamento de ecossistema de inova├º├úo regional",

            "Programa de acelera├º├úo corporativa para startups industriais",

            "Conex├úo com hubs de inova├º├úo (Cubo, InovaUTC)"

          ]

        },

        {

          "titulo": "Corporate Venture",

          "definicao": "Pr├ítica de grandes corpora├º├Áes investirem em startups externas por meio de fundos de venture capital (CVC) ou parcerias estrat├®gicas. Permite acesso a tecnologias emergentes, novos modelos de neg├│cio e talentos inovadores sem desenvolvimento interno.",

          "topicos": [

            "CVC ÔÇö Corporate Venture Capital",

            "Venture client",

            "Spin-off corporativo"

          ],

          "formula": "",

          "aplicacoes": [

            "Cria├º├úo de fundo CVC para investimento em deep techs",

            "Programa de venture client para testar solu├º├Áes de startups",

            "Spin-off de tecnologia interna em nova empresa"

          ]

        },

        {

          "titulo": "Intraempreendedorismo",

          "definicao": "Pr├ítica de estimular colaboradores a agir como empreendedores dentro da organiza├º├úo, desenvolvendo novos produtos, servi├ºos ou processos. Empresas com cultura intraempreendedora ret├¬m talentos e geram inova├º├úo org├ónica cont├¡nua.",

          "topicos": [

            "Cultura intraempreendedora",

            "Programa de intraempreendedorismo",

            "Inova├º├úo interna"

          ],

          "formula": "",

          "aplicacoes": [

            "Programa de intraempreendedorismo com pitch para diretoria",

            "Hackathons internos para solu├º├úo de desafios de produ├º├úo",

            "Sistema de incentivo para colaboradores inovadores"

          ]

        },

        {

          "titulo": "Lean Startup",

          "definicao": "Metodologia de desenvolvimento de novos produtos e neg├│cios baseada no ciclo construir-medir-aprender, MVP e pivotagem. Reduz riscos e desperd├¡cios ao testar hip├│teses de neg├│cio com clientes reais antes de investir em escala.",

          "topicos": [

            "MVP ÔÇö Minimum Viable Product",

            "Ciclo construir-medir-aprender",

            "Pivotagem"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenvolvimento de novo produto com lean startup",

            "Valida├º├úo de modelo de neg├│cio com MVP em 3 meses",

            "Testes A/B para valida├º├úo de funcionalidades"

          ]

        },

        {

          "titulo": "MVP ÔÇö Minimum Viable Product",

          "definicao": "Vers├úo simplificada de um novo produto que cont├®m apenas funcionalidades essenciais para ser lan├ºada e testada com clientes reais. O feedback do MVP orienta decis├Áes de pivotar, perseverar ou escalar, minimizando investimento inicial.",

          "topicos": [

            "Produto m├¡nimo vi├ível",

            "Teste com clientes",

            "Valida├º├úo de hip├│teses"

          ],

          "formula": "",

          "aplicacoes": [

            "MVP de plataforma digital para testar aceita├º├úo de mercado",

            "Prot├│tipo funcional de equipamento para valida├º├úo t├®cnica",

            "Campanha de pr├®-venda para validar demanda antes de produzir"

          ]

        },

        {

          "titulo": "Inova├º├úo aberta",

          "definicao": "Modelo complementar ao open innovation que enfatiza a colabora├º├úo com agentes externos (startups, fornecedores, clientes, universidades) para co-criar solu├º├Áes inovadoras. Utiliza plataformas de idea├º├úo, desafios abertos e hackathons como mecanismos.",

          "topicos": [

            "Plataformas de idea├º├úo aberta",

            "Desafios de inova├º├úo",

            "Crowdsourcing"

          ],

          "formula": "",

          "aplicacoes": [

            "Desafio aberto de inova├º├úo para fornecedores",

            "Plataforma de idea├º├úo colaborativa com comunidade externa",

            "Parcerias de codesenvolvimento com startups"

          ]

        },

        {

          "titulo": "Crowdsourcing",

          "definicao": "Pr├ítica de externalizar tarefas ou problemas para uma multid├úo (crowd) de contribuidores externos, geralmente por meio de plataformas digitais. Utilizado para gera├º├úo de ideias, resolu├º├úo de problemas t├®cnicos e desenvolvimento de solu├º├Áes inovadoras.",

          "topicos": [

            "Multid├úo de solucionadores",

            "Plataformas de crowdsourcing",

            "Concursos de inova├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Desafio global de engenharia com premia├º├úo",

            "Coleta de ideias de clientes para melhoria de produto",

            "Plataforma InnoCentive para problemas t├®cnicos complexos"

          ]

        },

        {

          "titulo": "Inova├º├úo frugal",

          "definicao": "Abordagem de inova├º├úo que busca criar solu├º├Áes de alto valor com recursos limitados, simplificando produtos e processos para atender mercados de baixa renda ou contextos de restri├º├úo. Tamb├®m conhecida como 'doing more with less' (fazer mais com menos).",

          "topicos": [

            "Inova├º├úo reversa",

            "Produtos de baixo custo",

            "Engenharia frugal"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenvolvimento de equipamentos m├®dicos de baixo custo",

            "Produtos adaptados para base da pir├ómide",

            "Reengenharia frugal de produto para mercados emergentes"

          ]

        },

        {

          "titulo": "M├®trica de inova├º├úo (ROI┬▓)",

          "definicao": "Indicador que mede o retorno sobre o investimento em inova├º├úo (ROI┬▓ = Return on Innovation Investment). Considera n├úo apenas o retorno financeiro dos projetos de inova├º├úo, mas tamb├®m os benef├¡cios intang├¡veis como aprendizado e posicionamento estrat├®gico.",

          "topicos": [

            "Indicadores de P&D",

            "ROI de inova├º├úo",

            "Balanced scorecard de inova├º├úo"

          ],

          "formula": "ROI┬▓ = (Receita de inova├º├úo - Investimento em inova├º├úo) / Investimento em inova├º├úo",

          "aplicacoes": [

            "Relat├│rio anual de ROI de inova├º├úo",

            "Avalia├º├úo de portf├│lio de projetos de P&D",

            "Dashboard de m├®tricas de inova├º├úo para board"

          ]

        },

        {

          "titulo": "Technology Readiness Level (TRL)",

          "definicao": "Escala de 1 a 9 desenvolvida pela NASA para medir a maturidade de uma tecnologia, desde a pesquisa b├ísica (TRL 1) at├® a opera├º├úo comprovada em ambiente real (TRL 9). Amplamente adotada por ag├¬ncias de fomento e programas de P&D industrial.",

          "topicos": [

            "TRL 1-3: Pesquisa",

            "TRL 4-6: Desenvolvimento",

            "TRL 7-9: Implanta├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Classifica├º├úo TRL de tecnologia em processo de P&D",

            "Gate de aprova├º├úo baseado em TRL para avan├ºo de projeto",

            "Crit├®rio TRL para sele├º├úo de projetos de inova├º├úo"

          ]

        },

        {

          "titulo": "Vig├¡lia tecnol├│gica (Technology Watch)",

          "definicao": "Processo sistem├ítico de monitoramento e an├ílise de tend├¬ncias tecnol├│gicas, patentes, publica├º├Áes cient├¡ficas e movimentos de concorrentes para antecipar mudan├ºas e identificar oportunidades de inova├º├úo. Integra a intelig├¬ncia competitiva da organiza├º├úo.",

          "topicos": [

            "Intelig├¬ncia competitiva",

            "Monitoramento de patentes",

            "Roadmapping tecnol├│gico"

          ],

          "formula": "",

          "aplicacoes": [

            "Boletim trimestral de vigil├óncia tecnol├│gica",

            "Mapeamento de patentes para identifica├º├úo de white spaces",

            "Constru├º├úo de technology roadmap para planejamento de P&D"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Tidd, J.; Bessant, J. Gestão da Inovação. 5. ed. Porto Alegre: Bookman, 2015."},
      {"tipo": "Livro", "ref": "Schwab, K. A Quarta Revolução Industrial. São Paulo: Edipro, 2016."},
      {"tipo": "Manual", "ref": "OECD. Manual de Oslo: Diretrizes para Coleta e Interpretação de Dados sobre Inovação. 3. ed. Paris: OECD, 2005."},
      {"tipo": "Livro", "ref": "Chesbrough, H. Inovação Aberta: Como Criar e Lucrar com a Tecnologia. Porto Alegre: Bookman, 2012."}
    ]},

    {

      "id": "indicadores",

      "nome": "Indicadores Industriais",

      "icone": "gauge",

      "cor": "#0891b2",

      "descricao": "M├®tricas de desempenho, produtividade e efici├¬ncia industrial.",

      "subtopicos": [

        {

          "titulo": "OEE ÔÇö Overall Equipment Effectiveness",

          "definicao": "Indicador criado por Seiichi Nakajima no contexto do TPM para medir a efici├¬ncia global de equipamentos industriais. Composto por tr├¬s fatores ÔÇö disponibilidade, performance e qualidade ÔÇö que juntos revelam o percentual do tempo planejado que efetivamente gerou produtos conformes.",

          "topicos": [

            "Disponibilidade",

            "Performance",

            "Qualidade",

            "TPM"

          ],

          "formula": "OEE = Disponibilidade ├ù Performance ├ù Qualidade",

          "aplicacoes": [

            "Monitoramento de m├íquinas em plantas fabris",

            "Identifica├º├úo de gargalos produtivos",

            "Benchmarking de classe mundial (85%)"

          ]

        },

        {

          "titulo": "Lead Time",

          "definicao": "Tempo total decorrido desde o recebimento do pedido at├® a entrega final do produto ao cliente. Engloba processamento, espera, transporte e inspe├º├úo, sendo um dos principais indicadores de efici├¬ncia log├¡stica e produtiva.",

          "topicos": [

            "Tempo de atravessamento",

            "Ciclo produtivo",

            "Log├¡stica"

          ],

          "formula": "Lead Time = Data de entrega ÔêÆ Data do pedido",

          "aplicacoes": [

            "Gest├úo de prazos em manufatura",

            "Avalia├º├úo de desempenho log├¡stico",

            "Melhoria cont├¡nua em fluxos de valor"

          ]

        },

        {

          "titulo": "Throughput",

          "definicao": "Taxa na qual o sistema produtivo gera produtos acabados em um intervalo de tempo. Reflete a capacidade real de produ├º├úo e ├® usado para dimensionar recursos e identificar restri├º├Áes do sistema.",

          "topicos": [

            "Capacidade produtiva",

            "Gargalos",

            "TOC"

          ],

          "formula": "Throughput = Unidades produzidas / Per├¡odo de tempo",

          "aplicacoes": [

            "Dimensionamento de linhas de produ├º├úo",

            "Planejamento de capacidade",

            "An├ílise de restri├º├Áes (TOC)"

          ]

        },

        {

          "titulo": "Efici├¬ncia global da planta",

          "definicao": "M├®trica agregada que avalia o rendimento integrado de todos os setores de uma planta industrial, combinando utiliza├º├úo de recursos, produtividade e qualidade. Difere do OEE por considerar a planta como um todo, n├úo equipamentos isolados.",

          "topicos": [

            "Produtividade total",

            "Utiliza├º├úo de recursos",

            "Rendimento global"

          ],

          "formula": "Efici├¬ncia Global = (Produ├º├úo real / Capacidade nominal) ├ù 100",

          "aplicacoes": [

            "Avalia├º├úo de performance corporativa",

            "Compara├º├úo entre unidades fabris",

            "Meta estrat├®gica de produ├º├úo"

          ]

        },

        {

          "titulo": "Produtividade da m├úo de obra",

          "definicao": "Rela├º├úo entre a quantidade produzida e o total de horas trabalhadas ou n├║mero de colaboradores alocados. Indica a efici├¬ncia do fator trabalho no processo produtivo.",

          "topicos": [

            "Horas-homem",

            "Efici├¬ncia laboral",

            "Rendimento operacional"

          ],

          "formula": "Produtividade = Unidades produzidas / Homens-hora trabalhados",

          "aplicacoes": [

            "C├ílculo de custo unit├írio de m├úo de obra",

            "Benchmarking entre turnos",

            "Plano de incentivos salariais"

          ]

        },

        {

          "titulo": "Refugo e retrabalho",

          "definicao": "Indicadores de qualidade que medem, respectivamente, a propor├º├úo de pe├ºas descartadas por n├úo conformidade e a propor├º├úo de pe├ºas que necessitam de corre├º├úo. Impactam diretamente o custo operacional e a efici├¬ncia global.",

          "topicos": [

            "Custo da qualidade",

            "N├úo conformidade",

            "Sucata"

          ],

          "formula": "Taxa de Refugo = (Pe├ºas refugadas / Total produzido) ├ù 100",

          "aplicacoes": [

            "Controle estat├¡stico da qualidade",

            "Redu├º├úo de desperd├¡cios",

            "Programas Six Sigma"

          ]

        },

        {

          "titulo": "OTIF ÔÇö On Time In Full",

          "definicao": "Indicador log├¡stico que mede o percentual de pedidos entregues no prazo acordado e com a quantidade completa solicitada. Considerado uma m├®trica cr├¡tica de desempenho da cadeia de suprimentos.",

          "topicos": [

            "N├¡vel de servi├ºo",

            "Entregas no prazo",

            "Completeza de pedidos"

          ],

          "formula": "OTIF = (Pedidos entregues no prazo e completos / Total de pedidos) ├ù 100",

          "aplicacoes": [

            "Avalia├º├úo de fornecedores",

            "Gest├úo de transporte e distribui├º├úo",

            "Acordo de n├¡vel de servi├ºo (SLA)"

          ]

        },

        {

          "titulo": "Fill Rate",

          "definicao": "Percentual da demanda do cliente que ├® atendida imediatamente com estoque dispon├¡vel sem necessidade de backorder. Reflete a efic├ícia da gest├úo de estoques e da reposi├º├úo.",

          "topicos": [

            "N├¡vel de atendimento",

            "Disponibilidade de estoque",

            "Backorder"

          ],

          "formula": "Fill Rate = (Unidades atendidas / Unidades demandadas) ├ù 100",

          "aplicacoes": [

            "Gest├úo de centros de distribui├º├úo",

            "Pol├¡tica de estoque de seguran├ºa",

            "Planejamento de vendas e opera├º├Áes"

          ]

        },

        {

          "titulo": "Takt Rate",

          "definicao": "Ritmo de produ├º├úo necess├írio para atender ├á demanda do cliente no tempo dispon├¡vel. Sincroniza o fluxo produtivo com o consumo, sendo um conceito central do Sistema Toyota de Produ├º├úo.",

          "topicos": [

            "Takt Time",

            "Ritmo de produ├º├úo",

            "Demanda",

            "JIT"

          ],

          "formula": "Takt Rate = Tempo dispon├¡vel / Demanda do per├¡odo",

          "aplicacoes": [

            "Balanceamento de linhas de montagem",

            "Dimensionamento de equipes",

            "Produ├º├úo puxada (pull system)"

          ]

        },

        {

          "titulo": "DPO ÔÇö Days Payable Outstanding",

          "definicao": "Indicador financeiro que mede o prazo m├®dio em dias que a empresa leva para pagar seus fornecedores. ├ë um componente do ciclo financeiro e impacta diretamente o capital de giro.",

          "topicos": [

            "Ciclo financeiro",

            "Prazo m├®dio de pagamento",

            "Capital de giro"

          ],

          "formula": "DPO = (Fornecedores m├®dios / Custo das vendas) ├ù Dias do per├¡odo",

          "aplicacoes": [

            "Gest├úo de fluxo de caixa",

            "Negocia├º├úo com fornecedores",

            "An├ílise de liquidez"

          ]

        },

        {

          "titulo": "Rendimento operacional (Yield)",

          "definicao": "Propor├º├úo de produtos ou servi├ºos que atendem aos crit├®rios de qualidade na primeira passagem, sem necessidade de retrabalho ou reparo. ├ë uma m├®trica-chave da qualidade industrial.",

          "topicos": [

            "First Pass Yield",

            "Qualidade na fonte",

            "Six Sigma"

          ],

          "formula": "Yield = (Unidades conformes na 1┬¬ passagem / Total processado) ├ù 100",

          "aplicacoes": [

            "Controle de qualidade estat├¡stico",

            "C├ílculo de capacidade efetiva",

            "Melhoria de processos produtivos"

          ]

        },

        {

          "titulo": "Custo por unidade produzida",

          "definicao": "Valor total dos insumos (mat├®ria-prima, m├úo de obra direta, energia e custos indiretos) dividido pela quantidade de unidades fabricadas. Permite avaliar a competitividade e a margem de contribui├º├úo.",

          "topicos": [

            "Custeio industrial",

            "Custo vari├ível",

            "Margem de contribui├º├úo"

          ],

          "formula": "Custo unit├írio = Custo total de produ├º├úo / Quantidade produzida",

          "aplicacoes": [

            "Forma├º├úo de pre├ºo de venda",

            "An├ílise de rentabilidade por produto",

            "Decis├Áes de make or buy"

          ]

        },

        {

          "titulo": "Horas trabalhadas sem acidente",

          "definicao": "Indicador de seguran├ºa do trabalho que contabiliza o total de horas expostas a risco sem ocorr├¬ncia de acidentes com ou sem afastamento. Reflete a efic├ícia do sistema de gest├úo de SST.",

          "topicos": [

            "Seguran├ºa do trabalho",

            "SST",

            "Acidentes",

            "NRs"

          ],

          "formula": "",

          "aplicacoes": [

            "Programas de seguran├ºa comportamental",

            "Auditorias de SST",

            "Certifica├º├Áes OHSAS/ISO 45001"

          ]

        },

        {

          "titulo": "Consumo energ├®tico por unidade",

          "definicao": "Rela├º├úo entre a energia el├®trica (ou t├®rmica) consumida no processo produtivo e a quantidade de unidades produzidas. Indicador cr├¡tico para efici├¬ncia energ├®tica e sustentabilidade industrial.",

          "topicos": [

            "Efici├¬ncia energ├®tica",

            "Sustentabilidade",

            "Custo de energia"

          ],

          "formula": "Consumo espec├¡fico = kWh consumidos / Unidades produzidas",

          "aplicacoes": [

            "Programas de efici├¬ncia energ├®tica",

            "Certifica├º├úo ISO 50001",

            "Redu├º├úo de custos fixos industriais"

          ]

        },

        {

          "titulo": "Indicador de manuten├º├úo (MMF)",

          "definicao": "Conjunto de m├®tricas de gest├úo da manuten├º├úo, incluindo MTBF (tempo m├®dio entre falhas) e MTTR (tempo m├®dio de reparo). Apoiam o planejamento de manuten├º├úo preventiva e preditiva.",

          "topicos": [

            "MTBF",

            "MTTR",

            "Manuten├º├úo preventiva",

            "Confiabilidade"

          ],

          "formula": "MTBF = Tempo total de opera├º├úo / N├║mero de falhas",

          "aplicacoes": [

            "Plano de manuten├º├úo preventiva",

            "C├ílculo de disponibilidade de equipamentos",

            "Gest├úo de ativos industriais"

          ]

        },

        {

          "titulo": "Overall Labor Effectiveness (OLE)",

          "definicao": "Vers├úo do OEE aplicada ├á m├úo de obra direta. Mede a efic├ícia da for├ºa de trabalho combinando disponibilidade, desempenho e qualidade do trabalho humano.",

          "topicos": [

            "Produtividade laboral",

            "Efici├¬ncia humana",

            "Trabalho padronizado"

          ],

          "formula": "OLE = Disponibilidade ├ù Desempenho ├ù Qualidade (m├úo de obra)",

          "aplicacoes": [

            "Avalia├º├úo de linhas manuais",

            "Dimensionamento de equipes",

            "Melhoria de m├®todos de trabalho"

          ]

        },

        {

          "titulo": "Indicador de entregas no prazo",

          "definicao": "Percentual de pedidos ou itens entregues aos clientes dentro do prazo prometido. ├ë um reflexo direto da confiabilidade do sistema produtivo e log├¡stico.",

          "topicos": [

            "On Time Delivery",

            "N├¡vel de servi├ºo",

            "Pontualidade"

          ],

          "formula": "Entregas no prazo = (Pedidos entregues na data / Total de pedidos) ├ù 100",

          "aplicacoes": [

            "Acompanhamento de SLA",

            "Avalia├º├úo de desempenho log├¡stico",

            "Indicador estrat├®gico de opera├º├Áes"

          ]

        },

        {

          "titulo": "Performance/Qualidade/Disponibilidade",

          "definicao": "Os tr├¬s pilares do OEE que decomp├Áem as perdas produtivas: disponibilidade (paradas), performance (velocidade reduzida) e qualidade (defeitos). A an├ílise individual de cada pilar permite direcionar a├º├Áes corretivas espec├¡ficas.",

          "topicos": [

            "Perdas produtivas",

            "6 Grandes Perdas",

            "TPM"

          ],

          "formula": "Disponibilidade = (Tempo operacional / Tempo planejado) ├ù 100",

          "aplicacoes": [

            "Diagn├│stico de perdas na produ├º├úo",

            "Melhoria cont├¡nua direcionada",

            "Metas setoriais de f├íbrica"

          ]

        },

        {

          "titulo": "Indicador de qualidade (FTT)",

          "definicao": "First Time Through (FTT) mede a porcentagem de produtos que passam por todo o processo produtivo sem qualquer defeito ou retrabalho na primeira tentativa. ├ë um indicador mais rigoroso que o yield simples.",

          "topicos": [

            "First Time Through",

            "Qualidade na fonte",

            "Zero defeitos"

          ],

          "formula": "FTT = (Total sem defeitos na 1┬¬ vez / Total processado) ├ù 100",

          "aplicacoes": [

            "Monitoramento de linhas multietapas",

            "Programas de qualidade Six Sigma",

            "Redu├º├úo de retrabalho"

          ]

        },

        {

          "titulo": "Ciclo PDCA para indicadores",

          "definicao": "Metodologia de gest├úo da melhoria cont├¡nua aplicada aos indicadores de desempenho. O ciclo Planejar-Executar-Checar-Agir permite definir metas, coletar dados, analisar resultados e implementar a├º├Áes corretivas de forma estruturada.",

          "topicos": [

            "Melhoria cont├¡nua",

            "Kaizen",

            "Gest├úo ├á vista"

          ],

          "formula": "",

          "aplicacoes": [

            "Revis├úo peri├│dica de KPIs",

            "Programas de melhoria cont├¡nua",

            "Rotinas de gest├úo da produ├º├úo"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Kaplan, R. S.; Norton, D. P. A Estratégia em Ação: Balanced Scorecard. Rio de Janeiro: Campus, 1997."},
      {"tipo": "Livro", "ref": "Neely, A. (Ed.). Business Performance Measurement. 2. ed. Cambridge: Cambridge University Press, 2007."},
      {"tipo": "Livro", "ref": "Paladini, E. P. Gestão da Qualidade: Teoria e Prática. 4. ed. São Paulo: Atlas, 2019."}
    ]},

    {

      "id": "legislacao",

      "nome": "Legisla├º├úo e Normas",

      "icone": "book-open",

      "cor": "#64748b",

      "descricao": "Normas t├®cnicas, regulamenta├º├Áes e compliance industrial.",

      "subtopicos": [

        {

          "titulo": "Normas t├®cnicas ABNT",

          "definicao": "Conjunto de regras e especifica├º├Áes t├®cnicas estabelecidas pela Associa├º├úo Brasileira de Normas T├®cnicas para padronizar produtos, processos e servi├ºos no Brasil. As normas ABNT s├úo volunt├írias, mas frequentemente referenciadas por regulamenta├º├Áes oficiais.",

          "topicos": [

            "NBR",

            "Normaliza├º├úo",

            "Padroniza├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Elabora├º├úo de projetos t├®cnicos",

            "Controle de qualidade industrial",

            "Certifica├º├úo de produtos e sistemas"

          ]

        },

        {

          "titulo": "Regulamenta├º├Áes industriais",

          "definicao": "Conjunto de atos normativos (decretos, portarias, resolu├º├Áes) emitidos por ├│rg├úos governamentais que estabelecem exig├¬ncias obrigat├│rias para a opera├º├úo industrial. Incluem requisitos de seguran├ºa, ambientais, sanit├írios e fiscais.",

          "topicos": [

            "├ôrg├úos reguladores",

            "Conformidade legal",

            "Licenciamento industrial"

          ],

          "formula": "",

          "aplicacoes": [

            "Licenciamento ambiental de f├íbricas",

            "Alvar├í de funcionamento",

            "Adequa├º├úo a requisitos setoriais"

          ]

        },

        {

          "titulo": "Legisla├º├úo ambiental",

          "definicao": "Conjunto de leis, decretos e resolu├º├Áes que regulam a intera├º├úo da atividade industrial com o meio ambiente, abrangendo licenciamento, emiss├Áes, res├¡duos s├│lidos, recursos h├¡dricos e responsabilidade ambiental.",

          "topicos": [

            "Licenciamento ambiental",

            "Res├¡duos",

            "Pol├¡tica Nacional do Meio Ambiente"

          ],

          "formula": "",

          "aplicacoesoes": [

            "Licenciamento ambiental de empreendimentos",

            "Gest├úo de res├¡duos industriais",

            "Programas de compliance ambiental"

          ]

        },

        {

          "titulo": "Legisla├º├úo trabalhista",

          "definicao": "Corpo legal que regula as rela├º├Áes entre empregadores e empregados, incluindo a Consolida├º├úo das Leis do Trabalho (CLT), jornada de trabalho, remunera├º├úo, f├®rias, seguran├ºa e medicina do trabalho.",

          "topicos": [

            "CLT",

            "Direitos trabalhistas",

            "Jornada de trabalho",

            "Acordo coletivo"

          ],

          "formula": "",

          "aplicacoes": [

            "Elabora├º├úo de folha de pagamento",

            "Gest├úo de jornada e ponto eletr├┤nico",

            "Defesa em reclama├º├Áes trabalhistas"

          ]

        },

        {

          "titulo": "Compliance regulat├│rio",

          "definicao": "Conjunto de pr├íticas e controles adotados para garantir que a organiza├º├úo cumpra todas as leis, normas e regulamentos aplic├íveis ao seu setor. Envolve mapeamento de riscos legais, pol├¡ticas internas e programas de integridade.",

          "topicos": [

            "Governan├ºa",

            "LGPD",

            "Programa de integridade"

          ],

          "formula": "",

          "aplicacoes": [

            "Implementa├º├úo de programa de compliance",

            "Auditoria de conformidade legal",

            "Due diligence de fornecedores"

          ]

        },

        {

          "titulo": "Auditorias regulat├│rias",

          "definicao": "Processo sistem├ítico e documentado de verifica├º├úo da conformidade de processos, produtos e sistemas com requisitos legais e normativos. Podem ser internas (1┬¬ parte), de fornecedores (2┬¬ parte) ou de certifica├º├úo (3┬¬ parte).",

          "topicos": [

            "Auditoria interna",

            "Auditoria de certifica├º├úo",

            "N├úo conformidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Certifica├º├úo ISO 9001",

            "Auditoria fiscal e trabalhista",

            "Manuten├º├úo de selos de conformidade"

          ]

        },

        {

          "titulo": "NRs ÔÇö Normas Regulamentadoras",

          "definicao": "Disposi├º├Áes complementares ├á CLT expedidas pelo Minist├®rio do Trabalho e Emprego que estabelecem obriga├º├Áes de empregadores e trabalhadores para garantir condi├º├Áes seguras e saud├íveis no ambiente laboral. Atualmente existem 37 NRs em vigor.",

          "topicos": [

            "NR-12",

            "NR-33",

            "SST",

            "Inspe├º├úo do trabalho"

          ],

          "formula": "",

          "aplicacoes": [

            "Elabora├º├úo de PCMSO e PPRA/PGR",

            "Prote├º├úo de m├íquinas (NR-12)",

            "Trabalho em altura (NR-35)"

          ]

        },

        {

          "titulo": "INMETRO",

          "definicao": "Instituto Nacional de Metrologia, Qualidade e Tecnologia, autarquia federal respons├ível pela metrologia legal, certifica├º├úo compuls├│ria e volunt├íria, acredita├º├úo de laborat├│rios e fiscaliza├º├úo de produtos regulamentados.",

          "topicos": [

            "Metrologia",

            "Certifica├º├úo compuls├│ria",

            "Produtos regulamentados"

          ],

          "formula": "",

          "aplicacoes": [

            "Certifica├º├úo de produtos el├®tricos e eletr├┤nicos",

            "Verifica├º├úo de instrumentos de medi├º├úo",

            "Fiscaliza├º├úo de conformidade"

          ]

        },

        {

          "titulo": "ISO e certifica├º├Áes",

          "definicao": "Conjunto de normas internacionais emitidas pela International Organization for Standardization (ISO) que estabelecem requisitos para sistemas de gest├úo da qualidade (ISO 9001), ambiental (ISO 14001), seguran├ºa (ISO 45001) e outras.",

          "topicos": [

            "ISO 9001",

            "ISO 14001",

            "ISO 45001",

            "Sistema de gest├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Implementa├º├úo de SGQ",

            "Certifica├º├úo de sistemas de gest├úo",

            "Requisitos de cliente e mercado"

          ]

        },

        {

          "titulo": "IATF 16949",

          "definicao": "Norma t├®cnica internacional de sistema de gest├úo da qualidade especificamente desenvolvida para a ind├║stria automotiva. Substitui a ISO/TS 16949 e integra os requisitos da ISO 9001 com requisitos espec├¡ficos do setor automotivo.",

          "topicos": [

            "Automotivo",

            "APQP",

            "PPAP",

            "FMEA"

          ],

          "formula": "",

          "aplicacoes": [

            "Homologa├º├úo de fornecedores automotivos",

            "Controle de qualidade na cadeia OEM",

            "Desenvolvimento de novos produtos automotivos"

          ]

        },

        {

          "titulo": "ANVISA (BPF)",

          "definicao": "Ag├¬ncia Nacional de Vigil├óncia Sanit├íria que regula e fiscaliza produtos e servi├ºos que impactam a sa├║de p├║blica. As Boas Pr├íticas de Fabrica├º├úo (BPF) s├úo requisitos obrigat├│rios para ind├║strias de alimentos, medicamentos, cosm├®ticos e dispositivos m├®dicos.",

          "topicos": [

            "Vigil├óncia sanit├íria",

            "Boas Pr├íticas de Fabrica├º├úo",

            "Registro de produtos"

          ],

          "formula": "",

          "aplicacoes": [

            "Registro de medicamentos e alimentos",

            "Inspe├º├úo sanit├íria em f├íbricas",

            "Controle de qualidade farmac├¬utico"

          ]

        },

        {

          "titulo": "Legisla├º├úo de importa├º├úo/exporta├º├úo",

          "definicao": "Conjunto de normas aduaneiras, tribut├írias e administrativas que regulam o com├®rcio exterior brasileiro, incluindo classifica├º├úo fiscal (NCM), licenciamento de importa├º├úo, drawback, regimes aduaneiros especiais e acordos internacionais.",

          "topicos": [

            "Com├®rcio exterior",

            "Aduana",

            "NCM",

            "Drawback"

          ],

          "formula": "",

          "aplicacoes": [

            "Classifica├º├úo fiscal de mercadorias",

            "Licenciamento de importa├º├úo",

            "Opera├º├Áes de drawback"

          ]

        },

        {

          "titulo": "C├│digo de Defesa do Consumidor",

          "definicao": "Lei n┬║ 8.078/1990 que estabelece normas de prote├º├úo e defesa do consumidor, regulando rela├º├Áes de consumo, responsabilidade por v├¡cios e defeitos, pr├íticas abusivas, publicidade e garantias. Impacta diretamente a qualidade e a seguran├ºa dos produtos industriais.",

          "topicos": [

            "CDC",

            "Rela├º├úo de consumo",

            "Responsabilidade civil",

            "Garantia"

          ],

          "formula": "",

          "aplicacoes": [

            "Pol├¡tica de garantia de produtos",

            "Atendimento a reclama├º├Áes de clientes",

            "Responsabilidade por defeitos de fabrica├º├úo"

          ]

        },

        {

          "titulo": "LGPD na ind├║stria",

          "definicao": "Lei Geral de Prote├º├úo de Dados (Lei n┬║ 13.709/2018) que regula o tratamento de dados pessoais por organiza├º├Áes p├║blicas e privadas. Na ind├║stria, impacta o RH, dados de clientes, fornecedores e sistemas de monitoramento de colaboradores.",

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

            "Pol├¡tica de privacidade para clientes e fornecedores"

          ]

        },

        {

          "titulo": "Conven├º├Áes coletivas",

          "definicao": "Acordos normativos firmados entre sindicatos de trabalhadores e empregadores que estabelecem condi├º├Áes de trabalho, remunera├º├úo, jornada, benef├¡cios e direitos espec├¡ficos para uma categoria profissional em determinada base territorial.",

          "topicos": [

            "Acordo coletivo",

            "Diss├¡dio",

            "Sindicato",

            "CCT"

          ],

          "formula": "",

          "aplicacoes": [

            "C├ílculo de sal├írios e benef├¡cios",

            "Escala de trabalho e horas extras",

            "Participa├º├úo nos lucros (PLR)"

          ]

        },

        {

          "titulo": "Acordo sindical",

          "definicao": "Instrumento de negocia├º├úo coletiva entre empresa e sindicato representativo dos trabalhadores que estabelece condi├º├Áes espec├¡ficas de trabalho aplic├íveis ├áquela empresa. Tem for├ºa de lei no ├ómbito das rela├º├Áes laborais pactuadas.",

          "topicos": [

            "Negocia├º├úo coletiva",

            "Acordo coletivo de trabalho",

            "CCT"

          ],

          "formula": "",

          "aplicacoes": [

            "Implementa├º├úo de banco de horas",

            "Jornada diferenciada de trabalho",

            "Programas de participa├º├úo nos resultados"

          ]

        },

        {

          "titulo": "Normas regulamentadoras rurais (NRs)",

          "definicao": "Conjunto de Normas Regulamentadoras espec├¡ficas para o trabalho no campo, incluindo NR-31 (agricultura, pecu├íria e silvicultura), que estabelece requisitos de seguran├ºa e sa├║de para trabalhadores rurais.",

          "topicos": [

            "NR-31",

            "Trabalho rural",

            "Seguran├ºa no campo"

          ],

          "formula": "",

          "aplicacoes": [

            "Seguran├ºa na opera├º├úo de m├íquinas agr├¡colas",

            "Uso de agrot├│xicos",

            "Alojamentos e instala├º├Áes rurais"

          ]

        },

        {

          "titulo": "Regulamento t├®cnico de produto",

          "definicao": "Documento de car├íter obrigat├│rio emitido por ├│rg├úo regulamentador que estabelece caracter├¡sticas t├®cnicas, requisitos de seguran├ºa, desempenho, rotulagem e procedimentos de avalia├º├úo da conformidade para produtos espec├¡ficos.",

          "topicos": [

            "RTQ",

            "INMETRO",

            "ANVISA",

            "Especifica├º├úo t├®cnica"

          ],

          "formula": "",

          "aplicacoes": [

            "Aprova├º├úo de produtos regulamentados",

            "Rotulagem e instru├º├Áes de uso",

            "Ensaios de conformidade"

          ]

        },

        {

          "titulo": "Certifica├º├úo compuls├│ria",

          "definicao": "Processo obrigat├│rio de avalia├º├úo da conformidade de produtos que apresentam riscos ├á seguran├ºa, sa├║de ou meio ambiente, exigido por regulamenta├º├úo federal e executado por organismos acreditados pelo INMETRO.",

          "topicos": [

            "INMETRO",

            "Produtos certificados",

            "Selo de conformidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Certifica├º├úo de brinquedos e materiais el├®tricos",

            "Equipamentos de prote├º├úo individual (EPIs)",

            "Componentes automotivos de seguran├ºa"

          ]

        },

        {

          "titulo": "Selo de conformidade",

          "definicao": "Marca de certifica├º├úo aposta em produtos, processos ou servi├ºos que atestam sua conformidade com normas t├®cnicas ou regulamentos espec├¡ficos. Pode ser compuls├│rio (INMETRO) ou volunt├írio (selos setoriais).",

          "topicos": [

            "Marca├º├úo",

            "Conformidade",

            "ABNT",

            "Certifica├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Identifica├º├úo de produtos certificados",

            "Diferencia├º├úo competitiva no mercado",

            "Atendimento a requisitos de licita├º├úo"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Legislação", "ref": "Brasil. Portaria MTb nº 3.214, de 08 de junho de 1978 - Normas Regulamentadoras de Segurança e Saúde no Trabalho."},
      {"tipo": "Legislação", "ref": "Brasil. Decreto-Lei nº 5.452, de 1º de maio de 1943 - Consolidação das Leis do Trabalho (CLT)."},
      {"tipo": "Livro", "ref": "Saliba, T. M.; Pagano, S. R. S. Legislação de Segurança, Acidente do Trabalho e Saúde do Trabalhador. São Paulo: LTR, 2013."}
    ]},

    {

      "id": "fundamentos",

      "nome": "Fundamentos da Engenharia de Produ├º├úo",

      "icone": "book",

      "cor": "#1e293b",

      "descricao": "Hist├│ria, evolu├º├úo e conceitos fundamentais da engenharia de produ├º├úo.",

      "subtopicos": [

        {

          "titulo": "Evolu├º├úo hist├│rica da produ├º├úo",

          "definicao": "Trajet├│ria de transforma├º├úo dos sistemas produtivos desde o artesanato at├® a manufatura enxuta e a Ind├║stria 4.0. Cada fase hist├│rica introduziu novas formas de organiza├º├úo do trabalho, tecnologias e paradigmas de gest├úo.",

          "topicos": [

            "Artesanato",

            "Manufatura",

            "Industrializa├º├úo",

            "Ind├║stria 4.0"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise comparativa de sistemas produtivos",

            "Compreens├úo das revolu├º├Áes industriais",

            "Planejamento estrat├®gico de transforma├º├úo digital"

          ]

        },

        {

          "titulo": "Revolu├º├úo Industrial",

          "definicao": "Per├¡odo hist├│rico iniciado na Inglaterra no s├®culo XVIII que marcou a transi├º├úo da produ├º├úo artesanal para a produ├º├úo mecanizada com o uso de m├íquinas a vapor, ferro e carv├úo. Dividida em tr├¬s fases, cada uma com inova├º├Áes tecnol├│gicas e organizacionais profundas.",

          "topicos": [

            "1┬¬ Revolu├º├úo Industrial",

            "2┬¬ Revolu├º├úo Industrial",

            "3┬¬ Revolu├º├úo Industrial",

            "Ind├║stria 4.0"

          ],

          "formula": "",

          "aplicacoes": [

            "Contextualiza├º├úo hist├│rica da produ├º├úo",

            "Entendimento da evolu├º├úo tecnol├│gica",

            "Referencial para inova├º├úo industrial"

          ]

        },

        {

          "titulo": "Taylorismo (Administra├º├úo Cient├¡fica)",

          "definicao": "Sistema de gest├úo da produ├º├úo desenvolvido por Frederick W. Taylor no final do s├®culo XIX, baseado na racionaliza├º├úo do trabalho, divis├úo entre planejamento e execu├º├úo, estudo de tempos e movimentos e incentivos salariais por produtividade.",

          "topicos": [

            "Frederick Taylor",

            "Estudo de tempos e movimentos",

            "Racionaliza├º├úo do trabalho"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenho de cargos e tarefas",

            "Padroniza├º├úo de m├®todos de trabalho",

            "Sistemas de remunera├º├úo por desempenho"

          ]

        },

        {

          "titulo": "Fordismo",

          "definicao": "Modelo de produ├º├úo em massa criado por Henry Ford que combinou a linha de montagem cont├¡nua com a padroniza├º├úo completa do produto (Ford Modelo T) e altos sal├írios para os oper├írios. Caracterizou a produ├º├úo industrial do s├®culo XX.",

          "topicos": [

            "Henry Ford",

            "Linha de montagem",

            "Produ├º├úo em massa",

            "Ford Modelo T"

          ],

          "formula": "",

          "aplicacoes": [

            "Produ├º├úo em larga escala de autom├│veis",

            "Eletrodom├®sticos e bens de consumo",

            "Montagem de produtos complexos"

          ]

        },

        {

          "titulo": "Sistema Toyota de Produ├º├úo (STP)",

          "definicao": "Sistema de manufatura enxuta desenvolvido pela Toyota no Jap├úo p├│s-guerra, baseado nos pilares do Just-in-Time (JIT) e Jidoka, com o objetivo de eliminar desperd├¡cios e produzir apenas o necess├írio, no momento necess├írio, com a qualidade necess├íria.",

          "topicos": [

            "Lean Manufacturing",

            "JIT",

            "Jidoka",

            "Kaizen",

            "Taiichi Ohno"

          ],

          "formula": "",

          "aplicacoes": [

            "Redu├º├úo de estoques e lead times",

            "Melhoria cont├¡nua em processos",

            "Manufatura enxuta em diversos setores"

          ]

        },

        {

          "titulo": "Tipos de sistemas produtivos",

          "definicao": "Classifica├º├úo dos sistemas de produ├º├úo de acordo com o fluxo do produto e o volume de produ├º├úo. A escolha do tipo adequado impacta o layout, a gest├úo de estoques, o planejamento e o controle da produ├º├úo.",

          "topicos": [

            "Sistemas de produ├º├úo",

            "Fluxo produtivo",

            "Classifica├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de sistemas de manufatura",

            "Estrat├®gia de produ├º├úo",

            "Planejamento de capacidade"

          ]

        },

        {

          "titulo": "Produ├º├úo cont├¡nua",

          "definicao": "Sistema produtivo caracterizado pelo fluxo ininterrupto de materiais ao longo do processo, t├¡pico de ind├║strias de processo qu├¡mico, petroqu├¡mico, sider├║rgico e de papel e celulose. Opera 24 horas com alta intensidade de capital.",

          "topicos": [

            "Processo cont├¡nuo",

            "Ind├║stria de processo",

            "Fluxo ininterrupto"

          ],

          "formula": "",

          "aplicacoes": [

            "Refinarias de petr├│leo",

            "Plantas qu├¡micas",

            "Siderurgia integrada"

          ]

        },

        {

          "titulo": "Produ├º├úo em massa",

          "definicao": "Sistema de alto volume e baixa variedade que utiliza linhas de montagem e pe├ºas padronizadas para produzir grandes quantidades de produtos id├¬nticos a baixo custo unit├írio. Foi o paradigma dominante da ind├║stria do s├®culo XX.",

          "topicos": [

            "Linha de montagem",

            "Alto volume",

            "Padroniza├º├úo",

            "Fordismo"

          ],

          "formula": "",

          "aplicacoes": [

            "Montagem de ve├¡culos",

            "Eletr├┤nicos de consumo",

            "Eletrodom├®sticos"

          ]

        },

        {

          "titulo": "Produ├º├úo por projeto",

          "definicao": "Sistema produtivo orientado ├á fabrica├º├úo de um produto ├║nico e customizado, com in├¡cio e fim definidos, equipe dedicada e or├ºamento espec├¡fico. Cada projeto ├® tratado como um empreendimento singular, t├¡pico de constru├º├úo naval, aeron├íutica e grandes obras.",

          "topicos": [

            "Gest├úo de projetos",

            "Produto ├║nico",

            "Customiza├º├úo",

            "PMBOK"

          ],

          "formula": "",

          "aplicacoes": [

            "Constru├º├úo de navios e plataformas",

            "Grandes empreendimentos de infraestrutura",

            "Projetos de engenharia sob encomenda"

          ]

        },

        {

          "titulo": "Produ├º├úo em lotes",

          "definicao": "Sistema produtivo intermedi├írio entre a produ├º├úo cont├¡nua e a sob encomenda, no qual diferentes produtos s├úo fabricados em quantidades definidas (lotes) com setup entre as trocas. Comum em ind├║strias de m├®dio volume e m├®dia variedade.",

          "topicos": [

            "Lote econ├┤mico",

            "Setup",

            "M├®dio volume",

            "Variedade m├®dia"

          ],

          "formula": "Lote Econ├┤mico = ÔêÜ(2 ├ù Demanda ├ù Custo de setup / Custo de armazenagem)",

          "aplicacoes": [

            "Ind├║stria de alimentos e bebidas",

            "Fabrica├º├úo de m├│veis",

            "Confec├º├úo t├¬xtil"

          ]

        },

        {

          "titulo": "Customiza├º├úo em massa",

          "definicao": "Estrat├®gia produtiva que combina a efici├¬ncia da produ├º├úo em massa com a flexibilidade para atender necessidades individuais dos clientes. Utiliza plataformas modulares, posterga├º├úo (postponement) e configura├º├úo sob pedido.",

          "topicos": [

            "Modularidade",

            "Postponement",

            "Configurador de produto"

          ],

          "formula": "",

          "aplicacoes": [

            "Montagem de computadores sob pedido (Dell)",

            "Ve├¡culos com opcionais configur├íveis",

            "M├│veis planejados modulares"

          ]

        },

        {

          "titulo": "Arranjo f├¡sico (Layout Industrial)",

          "definicao": "Disposi├º├úo espacial dos recursos produtivos (m├íquinas, equipamentos, esta├º├Áes de trabalho, estoques) dentro da planta fabril. O layout adequado minimiza movimenta├º├Áes, reduz lead times e melhora o fluxo de materiais e pessoas.",

          "topicos": [

            "Layout",

            "Fluxo de materiais",

            "Movimenta├º├úo interna",

            "Planejamento fabril"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de novas f├íbricas",

            "Rearranjo de linhas existentes",

            "Redu├º├úo de movimenta├º├úo e transporte"

          ]

        },

        {

          "titulo": "Layout por produto",

          "definicao": "Arranjo f├¡sico no qual m├íquinas e esta├º├Áes de trabalho s├úo dispostas sequencialmente conforme a rota de fabrica├º├úo de um produto espec├¡fico. Adequado para produ├º├úo em massa e fluxo cont├¡nuo com alto volume e baixa variedade.",

          "topicos": [

            "Linha de montagem",

            "Fluxo cont├¡nuo",

            "Alto volume"

          ],

          "formula": "",

          "aplicacoes": [

            "Linhas de montagem automotiva",

            "Envasamento de bebidas",

            "Processos qu├¡micos cont├¡nuos"

          ]

        },

        {

          "titulo": "Layout por processo",

          "definicao": "Arranjo f├¡sico no qual m├íquinas e equipamentos similares s├úo agrupados em centros de trabalho funcionais (tornos, fresas, solda, pintura). Adequado para produ├º├úo em lotes com m├®dia variedade e volume moderado.",

          "topicos": [

            "Layout funcional",

            "Centros de trabalho",

            "Manufatura por lotes"

          ],

          "formula": "",

          "aplicacoes": [

            "Usinagem geral",

            "Oficinas mec├ónicas",

            "Ind├║stria de bens de capital"

          ]

        },

        {

          "titulo": "Layout celular",

          "definicao": "Arranjo f├¡sico que organiza m├íquinas e operadores em c├®lulas de manufatura dedicadas a fam├¡lias de pe├ºas com roteiros similares (Tecnologia de Grupo). Combina a flexibilidade do layout por processo com a efici├¬ncia do layout por produto.",

          "topicos": [

            "C├®lula de manufatura",

            "Tecnologia de Grupo",

            "Manufatura enxuta"

          ],

          "formula": "",

          "aplicacoes": [

            "Manufatura de componentes automotivos",

            "Ind├║stria metalmec├ónica",

            "Produ├º├úo de pe├ºas para aeronaves"

          ]

        },

        {

          "titulo": "Layout posicional fixo",

          "definicao": "Arranjo f├¡sico no qual o produto permanece em uma posi├º├úo fixa e os recursos produtivos (materiais, ferramentas, equipes) se deslocam at├® ele. Utilizado para produtos muito grandes, pesados ou complexos que n├úo podem ser movimentados.",

          "topicos": [

            "Projeto fixo",

            "Grandes estruturas",

            "Constru├º├úo pesada"

          ],

          "formula": "",

          "aplicacoes": [

            "Constru├º├úo naval",

            "Montagem de aeronaves",

            "Obras de infraestrutura (pontes, barragens)"

          ]

        },

        {

          "titulo": "Layout h├¡brido",

          "definicao": "Combina├º├úo de dois ou mais tipos de arranjo f├¡sico (produto, processo, celular, posicional fixo) em uma mesma planta industrial para atender diferentes etapas do processo ou diferentes fam├¡lias de produtos com caracter├¡sticas distintas.",

          "topicos": [

            "Layout combinado",

            "Planta flex├¡vel",

            "Mix de produ├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "F├íbricas com setores de fabrica├º├úo e montagem",

            "Plantas multiproduto",

            "Ind├║stria com etapas produtivas heterog├¬neas"

          ]

        },

        {

          "titulo": "Linha de montagem",

          "definicao": "Sistema de produ├º├úo no qual o produto em fabrica├º├úo se desloca ao longo de uma sequ├¬ncia de esta├º├Áes de trabalho, cada uma realizando uma opera├º├úo espec├¡fica at├® a conclus├úo final. Pode ser manual, automatizada ou semiautomatizada.",

          "topicos": [

            "Balanceamento de linha",

            "Takt time",

            "Esta├º├úo de trabalho"

          ],

          "formula": "N├║mero m├¡nimo de esta├º├Áes = ╬ú Tempos das tarefas / Takt time",

          "aplicacoes": [

            "Montagem de ve├¡culos e motores",

            "Montagem de eletr├┤nicos",

            "Linhas de embalagem de alimentos"

          ]

        },

        {

          "titulo": "C├®lula de manufatura",

          "definicao": "Agrupamento dedicado de m├íquinas e operadores dispostos em U, L ou linha reta para processar uma fam├¡lia de pe├ºas com roteiros semelhantes. Reduz movimenta├º├úo, WIP e lead time, sendo um elemento central da manufatura enxuta.",

          "topicos": [

            "Tecnologia de Grupo",

            "Manufatura enxuta",

            "Layout em U"

          ],

          "formula": "",

          "aplicacoes": [

            "Usinagem de fam├¡lias de componentes",

            "Montagem de subconjuntos",

            "Manufatura de precis├úo"

          ]

        },

        {

          "titulo": "Lean Startup na produ├º├úo",

          "definicao": "Adapta├º├úo dos princ├¡pios do Lean Manufacturing (MVP, piv├┤, aprendizado validado, ciclo construir-medir-aprender) para o desenvolvimento de novos produtos e modelos de neg├│cio em ambientes de alta incerteza. Aplica o pensamento enxuto ├á inova├º├úo.",

          "topicos": [

            "MVP",

            "Eric Ries",

            "Startup enxuta",

            "Inova├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenvolvimento ├ígil de novos produtos",

            "Valida├º├úo de mercado antes da produ├º├úo em escala",

            "Redu├º├úo de desperd├¡cios em P&D"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Batalha, M. O. (Org.). Introdução à Engenharia de Produção. 2. ed. Rio de Janeiro: Elsevier/ABEPRO, 2008."},
      {"tipo": "Livro", "ref": "Slack, N.; Brandon-Jones, A.; Johnston, R. Administração da Produção. 8. ed. São Paulo: Atlas, 2018."},
      {"tipo": "Livro", "ref": "Corrêa, H. L.; Corrêa, C. A. Administração de Produção e Operações. 4. ed. São Paulo: Atlas, 2017."},
      {"tipo": "Livro", "ref": "Bazzo, W. A.; Pereira, L. T. V. Introdução à Engenharia: Conceitos, Ferramentas e Comportamentos. 3. ed. Florianópolis: UFSC, 2013."}
    ]},

    {

      "id": "metalurgica",

      "nome": "Ind├║stria Metal├║rgica",

      "icone": "hammer",

      "cor": "#78716c",

      "descricao": "Processos metal├║rgicos, siderurgia, fundi├º├úo e tratamentos t├®rmicos.",

      "subtopicos": [

        {

          "titulo": "Metalurgia f├¡sica",

          "definicao": "Ramo da metalurgia que estuda a estrutura cristalina dos metais, defeitos cristalinos, mecanismos de deforma├º├úo, difus├úo, transforma├º├Áes de fase e a rela├º├úo entre microestrutura e propriedades mec├ónicas. Fundamenta todos os processos de transforma├º├úo e tratamento t├®rmico.",

          "topicos": [

            "Estrutura cristalina",

            "Defeitos",

            "Difus├úo",

            "Microestrutura"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenvolvimento de novas ligas",

            "Controle de qualidade metal├║rgico",

            "Sele├º├úo de materiais para engenharia"

          ]

        },

        {

          "titulo": "Diagrama Ferro-Carbono",

          "definicao": "Diagrama de equil├¡brio de fases do sistema ferro-carbono que relaciona temperatura e composi├º├úo, mostrando as fases est├íveis (ferrita, austenita, cementita) e as transforma├º├Áes eut├®tica e eutet├│ide. ├ë a base para tratamentos t├®rmicos de a├ºos e ferros fundidos.",

          "topicos": [

            "Ferrita ╬▒",

            "Austenita ╬│",

            "Cementita FeÔéâC",

            "Perlita",

            "Ponto eutet├│ide 727┬░C"

          ],

          "formula": "A├ºos: teor de C < 2,11% | Ferros fundidos: 2,11% < C < 6,67%",

          "aplicacoes": [

            "Classifica├º├úo de a├ºos e ferros fundidos",

            "Defini├º├úo de temperaturas de tratamento t├®rmico",

            "Previs├úo de microestruturas e propriedades"

          ]

        },

        {

          "titulo": "Classifica├º├úo dos a├ºos",

          "definicao": "Sistema de categoriza├º├úo dos a├ºos conforme sua composi├º├úo qu├¡mica, aplica├º├úo e propriedades mec├ónicas. Inclui a├ºos-carbono (baixo, m├®dio, alto teor), a├ºos-liga (baixa, m├®dia, alta liga), a├ºos ferramenta, a├ºos inoxid├íveis e a├ºos especiais.",

          "topicos": [

            "SAE/AISI",

            "ABNT",

            "A├ºos-carbono",

            "A├ºos-liga",

            "A├ºos inoxid├íveis"

          ],

          "formula": "",

          "aplicacoes": [

            "Especifica├º├úo de materiais em projetos",

            "Sele├º├úo de a├ºos para componentes mec├ónicos",

            "Compras t├®cnicas e recebimento de materiais"

          ]

        },

        {

          "titulo": "Ferros fundidos",

          "definicao": "Ligas ferro-carbono com teor de carbono entre 2,11% e 6,67%, caracterizadas pela solidifica├º├úo com rea├º├úo eut├®tica. Classificam-se em cinzento, nodular, branco, male├ível e ADI, cada um com microestrutura e propriedades distintas.",

          "topicos": [

            "Ferro fundido cinzento",

            "Ferro fundido nodular",

            "Ferro fundido branco",

            "ADI"

          ],

          "formula": "",

          "aplicacoes": [

            "Blocos de motor automotivo",

            "Tubula├º├Áes e conex├Áes",

            "Componentes de m├íquinas e matrizes"

          ]

        },

        {

          "titulo": "Conforma├º├úo mec├ónica",

          "definicao": "Conjunto de processos de fabrica├º├úo que alteram a forma do metal por deforma├º├úo pl├ística, sem remo├º├úo de material. Inclui lamina├º├úo, forjamento, extrus├úo, trefila├º├úo e estampagem. Modifica a microestrutura e pode melhorar propriedades mec├ónicas.",

          "topicos": [

            "Deforma├º├úo pl├ística",

            "Encruamento",

            "Recristaliza├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Produ├º├úo de chapas e perfis laminados",

            "Forjamento de componentes estruturais",

            "Fabrica├º├úo de arames e tubos"

          ]

        },

        {

          "titulo": "Usinagem",

          "definicao": "Processo de fabrica├º├úo por remo├º├úo de material (cavaco) utilizando ferramentas de corte para obter pe├ºas com geometria, dimens├Áes e acabamento especificados. Inclui torneamento, fresamento, fura├º├úo, retifica├º├úo e eletroeros├úo.",

          "topicos": [

            "Torneamento",

            "Fresamento",

            "Fura├º├úo",

            "Retifica├º├úo",

            "Cavaco"

          ],

          "formula": "Velocidade de corte Vc = ¤Ç ├ù D ├ù n / 1000 (m/min)",

          "aplicacoes": [

            "Fabrica├º├úo de moldes e matrizes",

            "Usinagem de componentes automotivos",

            "Pe├ºas de precis├úo para aeron├íutica"

          ]

        },

        {

          "titulo": "Soldagem e metalurgia da soldagem",

          "definicao": "Processo de uni├úo de materiais por fus├úo ou press├úo, com ou sem adi├º├úo de metal de solda. A metalurgia da soldagem estuda as transforma├º├Áes microestruturais na zona fundida e na zona termicamente afetada (ZTA).",

          "topicos": [

            "ZTA",

            "Arco el├®trico",

            "MIG/MAG",

            "TIG",

            "Eletrodo revestido"

          ],

          "formula": "",

          "aplicacoes": [

            "Fabrica├º├úo de estruturas met├ílicas",

            "Caldeiraria e vasos de press├úo",

            "Reparo e recupera├º├úo de componentes"

          ]

        },

        {

          "titulo": "Qualifica├º├úo de soldadores",

          "definicao": "Processo de certifica├º├úo de profissionais de soldagem conforme normas t├®cnicas (como ASME IX, AWS D1.1, NR-13), envolvendo testes pr├íticos e te├│ricos que comprovam a habilidade do soldador em executir juntas soldadas com qualidade e seguran├ºa.",

          "topicos": [

            "Certifica├º├úo",

            "NR-13",

            "ASME IX",

            "AWS",

            "Ensaio de qualifica├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Ind├║stria de petr├│leo e g├ís",

            "Constru├º├úo naval",

            "Caldeiraria pesada e vasos de press├úo"

          ]

        },

        {

          "titulo": "Metalurgia do p├│",

          "definicao": "Processo de fabrica├º├úo de componentes met├ílicos a partir de p├│s met├ílicos prensados e sinterizados. Permite obter pe├ºas com geometrias complexas, porosidade controlada e propriedades customizadas sem usinagem posterior.",

          "topicos": [

            "Sinteriza├º├úo",

            "Prensagem",

            "P├│ met├ílico",

            "Metalurgia do p├│"

          ],

          "formula": "",

          "aplicacoes": [

            "Engrenagens e componentes automotivos",

            "Filtros met├ílicos porosos",

            "Ferramentas de metal duro (carbeto de tungst├¬nio)"

          ]

        },

        {

          "titulo": "Corros├úo e prote├º├úo anticorrosiva",

          "definicao": "Estudo dos mecanismos de deteriora├º├úo dos metais por a├º├úo qu├¡mica ou eletroqu├¡mica do meio ambiente. A prote├º├úo anticorrosiva inclui revestimentos, inibidores, prote├º├úo cat├│dica e sele├º├úo adequada de materiais.",

          "topicos": [

            "Corros├úo eletroqu├¡mica",

            "Oxida├º├úo",

            "Pintura industrial",

            "Galvaniza├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Prote├º├úo de dutos e tubula├º├Áes",

            "Revestimentos anticorrosivos em estruturas",

            "Sele├º├úo de materiais para ambientes agressivos"

          ]

        },

        {

          "titulo": "Ensaios mec├ónicos",

          "definicao": "Conjunto de testes padronizados para determinar propriedades mec├ónicas dos materiais, como resist├¬ncia, dureza, tenacidade, ductilidade e resist├¬ncia ├á fadiga. Incluem ensaio de tra├º├úo, compress├úo, flex├úo, impacto e fadiga.",

          "topicos": [

            "Tra├º├úo",

            "Dureza",

            "Impacto",

            "Fadiga",

            "Flu├¬ncia"

          ],

          "formula": "¤â = F/A (Tens├úo de tra├º├úo)",

          "aplicacoes": [

            "Controle de qualidade de materiais",

            "Homologa├º├úo de fornecedores",

            "Desenvolvimento de novos materiais"

          ]

        },

        {

          "titulo": "Ensaios n├úo destrutivos (END)",

          "definicao": "T├®cnicas de inspe├º├úo que avaliam a integridade de materiais e componentes sem causar danos. Incluem ultrassom, radiografia, l├¡quidos penetrantes, part├¡culas magn├®ticas, correntes parasitas e inspe├º├úo visual.",

          "topicos": [

            "Ultrassom",

            "Radiografia industrial",

            "L├¡quidos penetrantes",

            "Part├¡culas magn├®ticas"

          ],

          "formula": "",

          "aplicacoes": [

            "Inspe├º├úo de soldas",

            "Controle de qualidade de tubula├º├Áes e vasos",

            "Manuten├º├úo preditiva de equipamentos"

          ]

        },

        {

          "titulo": "Metalografia",

          "definicao": "T├®cnica de an├ílise microestrutural de metais e ligas por meio de microscopia ├│ptica ou eletr├┤nica. Envolve prepara├º├úo metalogr├ífica (corte, embutimento, lixamento, polimento e ataque qu├¡mico) para revelar a microestrutura do material.",

          "topicos": [

            "Microscopia",

            "Ataque qu├¡mico",

            "Microestrutura",

            "An├ílise de falhas"

          ],

          "formula": "",

          "aplicacoes": [

            "Verifica├º├úo de tratamentos t├®rmicos",

            "An├ílise de falhas de componentes",

            "Controle de qualidade de mat├®rias-primas"

          ]

        },

        {

          "titulo": "Siderurgia",

          "definicao": "Ramo da metalurgia dedicado ├á produ├º├úo de ferro-gusa e a├ºo a partir do min├®rio de ferro. Engloba as etapas de beneficiamento do min├®rio, redu├º├úo em alto-forno, refino em aciaria (conversor LD, forno el├®trico) e lingotamento cont├¡nuo.",

          "topicos": [

            "Alto-forno",

            "Aciaria",

            "Lingotamento cont├¡nuo",

            "Gusa",

            "Lamina├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Produ├º├úo de a├ºos planos e longos",

            "Fabrica├º├úo de tarugos, blocos e placas",

            "Ind├║stria automotiva, constru├º├úo civil e naval"

          ]

        },

        {

          "titulo": "Ligas n├úo ferrosas",

          "definicao": "Ligas met├ílicas cujo elemento base n├úo ├® o ferro. As principais fam├¡lias incluem ligas de alum├¡nio, cobre, tit├ónio, n├¡quel, magn├®sio e zinco. S├úo selecionadas por propriedades espec├¡ficas como baixa densidade, resist├¬ncia ├á corros├úo ou condutividade.",

          "topicos": [

            "Alum├¡nio",

            "Cobre",

            "Tit├ónio",

            "N├¡quel",

            "Superligas"

          ],

          "formula": "",

          "aplicacoes": [

            "Estruturas aeron├íuticas (Al e Ti)",

            "Cabos el├®tricos e tubula├º├Áes (Cu)",

            "Turbinas a g├ís e motores (ligas de Ni)"

          ]

        },

        {

          "titulo": "Vasos de press├úo e caldeiras",

          "definicao": "Equipamentos projetados para conter fluidos a press├Áes internas superiores ├á atmosf├®rica. S├úo regulamentados pela NR-13 e fabricados conforme c├│digos como ASME VIII, com requisitos rigorosos de projeto, materiais, soldagem e inspe├º├úo.",

          "topicos": [

            "NR-13",

            "ASME VIII",

            "Caldeiraria",

            "Inspe├º├úo de vasos"

          ],

          "formula": "Espessura da parede: t = P ├ù R / (S ├ù E - 0,6 ├ù P)",

          "aplicacoes": [

            "Ind├║stria qu├¡mica e petroqu├¡mica",

            "Gera├º├úo de vapor e energia",

            "Refino de petr├│leo"

          ]

        },

        {

          "titulo": "Fundi├º├úo e processos de fundi├º├úo",

          "definicao": "Processo de fabrica├º├úo no qual metal l├¡quido ├® vazado em um molde com a cavidade da geometria desejada e solidifica. As principais t├®cnicas incluem fundi├º├úo em areia, em cera perdida, sob press├úo (die casting) e em casca (shell molding).",

          "topicos": [

            "Moldagem",

            "Vazamento",

            "Solidifica├º├úo",

            "Macharia"

          ],

          "formula": "",

          "aplicacoes": [

            "Blocos de motores e cabe├ºotes",

            "Componentes de m├íquinas",

            "Pe├ºas art├¡sticas e ornamentais"

          ]

        },

        {

          "titulo": "Moldagem e machos",

          "definicao": "Processo de confec├º├úo de moldes (cavidade onde o metal l├¡quido ├® vazado) e machos (n├║cleos que formam cavidades internas na pe├ºa fundida). A moldagem pode ser manual, mecanizada ou automatizada, em areia verde, areia qu├¡mica ou casca.",

          "topicos": [

            "Molde de areia",

            "Macharia",

            "Areia de fundi├º├úo",

            "Modelo"

          ],

          "formula": "",

          "aplicacoes": [

            "Fundi├º├úo de ferro e a├ºo",

            "Produ├º├úo de pe├ºas com geometrias complexas",

            "Fundi├º├úo de grande e m├®dio porte"

          ]

        },

        {

          "titulo": "Ferro fundido cinzento e nodular",

          "definicao": "Ferro fundido cinzento: possui grafita em lamelas, conferindo boa usinabilidade, amortecimento vibrat├│rio e baixo custo. Ferro fundido nodular: grafita em n├│dulos esferoidais, resultando em maior resist├¬ncia, ductilidade e tenacidade que o cinzento.",

          "topicos": [

            "Grafita lamelar",

            "Grafita esferoidal",

            "Usinabilidade",

            "Resist├¬ncia mec├ónica"

          ],

          "formula": "",

          "aplicacoes": [

            "Blocos de motor, discos de freio (cinzento)",

            "Virabrequins, engrenagens (nodular)",

            "Tubos e conex├Áes (nodular)"

          ]

        },

        {

          "titulo": "Noduliza├º├úo e inocula├º├úo",

          "definicao": "Tratamentos no metal l├¡quido anteriores ao vazamento na fabrica├º├úo de ferros fundidos. A noduliza├º├úo adiciona magn├®sio ou c├®rio para formar grafita esferoidal, enquanto a inocula├º├úo adiciona sil├¡cio para controlar a nuclea├º├úo e o tamanho da grafita.",

          "topicos": [

            "Magn├®sio",

            "Ferro-sil├¡cio",

            "Grafita esferoidal",

            "Nuclea├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Produ├º├úo de ferro nodular de alta resist├¬ncia",

            "Controle microestrutural em fundi├º├úo",

            "Componentes automotivos fundidos"

          ]

        },

        {

          "titulo": "ADI ÔÇö Austempered Ductile Iron",

          "definicao": "Ferro fundido nodular submetido a tratamento t├®rmico de aust├¬mpera (austenitiza├º├úo + resfriamento r├ípido + isot├®rmico em banho de sal ou ├│leo a ~300-400┬░C). Resulta em microestrutura de ausferrita, combinando alta resist├¬ncia, tenacidade e resist├¬ncia ao desgaste.",

          "topicos": [

            "Aust├¬mpera",

            "Ausferrita",

            "Alta resist├¬ncia",

            "Ferro nodular"

          ],

          "formula": "",

          "aplicacoes": [

            "Engrenagens de alta performance",

            "Componentes de suspens├úo automotiva",

            "Pe├ºas de desgaste na minera├º├úo"

          ]

        },

        {

          "titulo": "Tratamentos t├®rmicos",

          "definicao": "Processos controlados de aquecimento e resfriamento de metais no estado s├│lido para modificar suas propriedades mec├ónicas, f├¡sicas ou qu├¡micas. Incluem recozimento, normaliza├º├úo, t├¬mpera, revenimento, aust├¬mpera e mart├¬mpera.",

          "topicos": [

            "T├¬mpera",

            "Recozimento",

            "Normaliza├º├úo",

            "Revenimento"

          ],

          "formula": "",

          "aplicacoes": [

            "Aumento de dureza de ferramentas",

            "Al├¡vio de tens├Áes em soldas",

            "Melhoria de usinabilidade"

          ]

        },

        {

          "titulo": "Diagramas TTT e CCT",

          "definicao": "Diagramas Tempo-Temperatura-Transforma├º├úo (TTT ÔÇö resfriamento isot├®rmico) e Resfriamento Cont├¡nuo (CCT) que mostram as curvas de transforma├º├úo da austenita em perlita, bainita e martensita em fun├º├úo da taxa de resfriamento. Essenciais para projetar tratamentos t├®rmicos.",

          "topicos": [

            "Perlita",

            "Bainita",

            "Martensita",

            "Resfriamento cont├¡nuo"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de t├¬mpera e revenimento",

            "Sele├º├úo de meios de resfriamento",

            "Controle de microestrutura final"

          ]

        },

        {

          "titulo": "Recozimento, normaliza├º├úo, t├¬mpera",

          "definicao": "Recozimento: aquecimento seguido de resfriamento lento para al├¡vio de tens├Áes e redu├º├úo de dureza. Normaliza├º├úo: resfriamento ao ar para refinar gr├úo e homogeneizar estrutura. T├¬mpera: resfriamento brusco para formar martensita e maximizar dureza.",

          "topicos": [

            "Al├¡vio de tens├Áes",

            "Refino de gr├úo",

            "Martensita",

            "Meio de resfriamento"

          ],

          "formula": "",

          "aplicacoes": [

            "Recozimento de a├ºos laminados",

            "Normaliza├º├úo de pe├ºas fundidas",

            "T├¬mpera de ferramentas e matrizes"

          ]

        },

        {

          "titulo": "Revenimento e aust├¬mpera",

          "definicao": "Revenimento: reaquecimento da martensita a temperaturas abaixo de A1 para reduzir fragilidade e ajustar dureza/resist├¬ncia. Aust├¬mpera: tratamento isot├®rmico para formar bainita, aplicado em a├ºos e ferros nodulares (ADI).",

          "topicos": [

            "Martensita revenida",

            "Bainita",

            "Fragilidade",

            "Tenacidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Revenimento de a├ºos temperados",

            "Produ├º├úo de ADI",

            "Pe├ºas que exigem tenacidade e resist├¬ncia ao desgaste"

          ]

        },

        {

          "titulo": "Cementa├º├úo e nitreta├º├úo",

          "definicao": "Tratamentos termoqu├¡micos que enriquecem a superf├¡cie do a├ºo com carbono (cementa├º├úo) ou nitrog├¬nio (nitreta├º├úo) para formar uma camada superficial dura e resistente ao desgaste, mantendo um n├║cleo tenaz. A cementa├º├úo ├® seguida de t├¬mpera; a nitreta├º├úo n├úo requer t├¬mpera.",

          "topicos": [

            "Cementa├º├úo",

            "Nitreta├º├úo",

            "Camada superficial",

            "T├¬mpera superficial"

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

          "definicao": "Ensaio padronizado que mede a temperabilidade de um a├ºo ÔÇö sua capacidade de endurecer em profundidade. Uma amostra padronizada ├® austenitizada e resfriada por jato d'├ígua em uma extremidade; a dureza ├® medida ao longo do comprimento para gerar a curva Jominy.",

          "topicos": [

            "Temperabilidade",

            "Curva Jominy",

            "Profundidade de endurecimento"

          ],

          "formula": "",

          "aplicacoes": [

            "Sele├º├úo de a├ºos para tratamento t├®rmico",

            "Previs├úo de dureza em se├º├Áes espessas",

            "Controle de qualidade de a├ºos-liga"

          ]

        },

        {

          "titulo": "Tens├Áes residuais",

          "definicao": "Tens├Áes que permanecem no material ap├│s a remo├º├úo das cargas externas, decorrentes de tratamentos t├®rmicos, conforma├º├úo mec├ónica, soldagem ou usinagem. Podem ser ben├®ficas (compress├úo superficial) ou prejudiciais (trincas e distor├º├Áes).",

          "topicos": [

            "Tens├úo de compress├úo",

            "Tens├úo de tra├º├úo",

            "Al├¡vio de tens├Áes",

            "Distor├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Controle de distor├º├úo ap├│s t├¬mpera",

            "An├ílise de falhas por fadiga",

            "Shot peening para introduzir compress├úo superficial"

          ]

        },

        {

          "titulo": "Ensaios de dureza",

          "definicao": "M├®todos padronizados para medir a resist├¬ncia do material ├á deforma├º├úo pl├ística superficial. Principais escalas: Brinell (esfera de a├ºo), Rockwell (penetrador c├┤nico ou esf├®rico) e Vickers (pir├ómide de diamante), cada uma adequada a diferentes faixas e materiais.",

          "topicos": [

            "Dureza Brinell HB",

            "Dureza Rockwell HRC",

            "Dureza Vickers HV"

          ],

          "formula": "",

          "aplicacoes": [

            "Controle de qualidade de tratamentos t├®rmicos",

            "Classifica├º├úo de materiais",

            "Ensaios r├ípidos de resist├¬ncia mec├ónica"

          ]

        },

        {

          "titulo": "Forjamento e estampagem",

          "definicao": "Forjamento: conforma├º├úo por martelamento ou prensagem do metal aquecido para obter a forma desejada com gr├úo orientado. Estampagem: conforma├º├úo de chapas met├ílicas por prensagem em matrizes, incluindo corte, dobra, embutimento e repuxo.",

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

          "titulo": "Extrus├úo e trefila├º├úo",

          "definicao": "Extrus├úo: processo de conforma├º├úo no qual o metal ├® for├ºado atrav├®s de uma matriz com a se├º├úo transversal desejada, produzindo perfis e barras. Trefila├º├úo: redu├º├úo de se├º├úo por tra├º├úo atrav├®s de fieiras, usada para produzir arames, fios e tubos de precis├úo.",

          "topicos": [

            "Extrus├úo direta",

            "Extrus├úo indireta",

            "Fieira",

            "Redu├º├úo de se├º├úo"

          ],

          "formula": "Redu├º├úo % = (A0 - Af) / A0 ├ù 100",

          "aplicacoes": [

            "Perfis de alum├¡nio para constru├º├úo",

            "Arames de a├ºo para cabos e molas",

            "Tubos sem costura"

          ]

        },

        {

          "titulo": "Lamina├º├úo",

          "definicao": "Processo de conforma├º├úo no qual o metal passa entre cilindros rotativos para reduzir a espessura ou alterar a se├º├úo transversal. Pode ser a quente (chapas grossas, perfis estruturais) ou a frio (chapas finas, folhas met├ílicas com acabamento superficial).",

          "topicos": [

            "Lamina├º├úo a quente",

            "Lamina├º├úo a frio",

            "Cilindro laminador",

            "Perfil estrutural"

          ],

          "formula": "",

          "aplicacoes": [

            "Produ├º├úo de chapas grossas (naval, constru├º├úo)",

            "Bobinas de a├ºo para ind├║stria automotiva",

            "Vigas, trilhos e perfis estruturais"

          ]

        },

        {

          "titulo": "Trefila├º├úo de arames",

          "definicao": "Processo espec├¡fico de trefila├º├úo para redu├º├úo do di├ómetro de arames met├ílicos por passagem sucessiva atrav├®s de fieiras de carbeto de tungst├¬nio ou diamante. Produz arames com alta precis├úo dimensional e propriedades mec├ónicas controladas.",

          "topicos": [

            "Fieira de trefila├º├úo",

            "Arame de a├ºo",

            "Encruamento",

            "Lubrifica├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Cabos de a├ºo para eleva├º├úo",

            "Molas helicoidais e molas planas",

            "Eletrodos para soldagem e telas"

          ]

        },

        {

          "titulo": "Metalurgia extrativa",

          "definicao": "Ramo da metalurgia que estuda e desenvolve processos para extrair metais de seus min├®rios, incluindo etapas de cominui├º├úo, concentra├º├úo, fundi├º├úo, refino e hidrometalurgia. Visa obter metais com pureza comercial a partir de recursos minerais.",

          "topicos": [

            "Pirometalurgia",

            "Hidrometalurgia",

            "Eletrometalurgia",

            "Beneficiamento de min├®rios"

          ],

          "formula": "",

          "aplicacoes": [

            "Extra├º├úo de ferro, cobre, alum├¡nio do min├®rio",

            "Refino de metais preciosos",

            "Reciclagem e refino de sucata met├ílica"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Groover, M. P. Fundamentals of Modern Manufacturing. 4. ed. Hoboken: Wiley, 2010."},
      {"tipo": "Livro", "ref": "Kalpakjian, S.; Schmid, S. R. Manufacturing Engineering and Technology. 6. ed. Upper Saddle River: Prentice Hall, 2009."},
      {"tipo": "Livro", "ref": "Machado, A. R. et al. Teoria da Usinagem dos Materiais. 2. ed. São Paulo: Blucher, 2009."}
    ]},

    {

      "id": "soft-skills",

      "nome": "Compet├¬ncias Comportamentais",

      "icone": "heart-handshake",

      "cor": "#db2777",

      "descricao": "Habilidades interpessoais para lideran├ºa e gest├úo industrial.",

      "subtopicos": [

        {

          "titulo": "Lideran├ºa transformacional",

          "definicao": "Estilo de lideran├ºa que inspira e motiva os liderados a superar interesses individuais em prol de objetivos coletivos, estimulando a inova├º├úo e a mudan├ºa organizacional por meio de vis├úo compartilhada, est├¡mulo intelectual e considera├º├úo individualizada.",

          "topicos": [

            "Inspira├º├úo",

            "Vis├úo estrat├®gica",

            "Motiva├º├úo",

            "Mudan├ºa organizacional"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de equipes industriais",

            "Implementa├º├úo de programas de melhoria cont├¡nua",

            "Transforma├º├úo cultural lean"

          ]

        },

        {

          "titulo": "Comunica├º├úo eficaz",

          "definicao": "Capacidade de transmitir informa├º├Áes, ideias e instru├º├Áes de forma clara, objetiva e assertiva, adaptando-se ao p├║blico e ao contexto. No ambiente industrial, ├® essencial para alinhamento de equipes, lideran├ºa e preven├º├úo de falhas operacionais.",

          "topicos": [

            "Comunica├º├úo verbal",

            "Comunica├º├úo escrita",

            "Feedback",

            "Assertividade"

          ],

          "formula": "",

          "aplicacoes": [

            "Reuni├Áes de kick-off e daily huddle",

            "Instru├º├Áes de trabalho (IT) claras",

            "Comunica├º├úo de indicadores e resultados"

          ]

        },

        {

          "titulo": "Negocia├º├úo empresarial",

          "definicao": "Processo de di├ílogo entre partes com interesses convergentes e divergentes para alcan├ºar um acordo mutuamente ben├®fico. Engloba t├®cnicas de persuas├úo, concess├Áes estrat├®gicas, constru├º├úo de rapport e gest├úo de impasses.",

          "topicos": [

            "Persuas├úo",

            "Concess├úo",

            "Acordo ganha-ganha",

            "Impasses"

          ],

          "formula": "",

          "aplicacoes": [

            "Negocia├º├úo com fornecedores e clientes",

            "Acordos sindicais e conven├º├Áes coletivas",

            "Contratos de presta├º├úo de servi├ºos"

          ]

        },

        {

          "titulo": "Gest├úo do tempo",

          "definicao": "Habilidade de planejar e organizar o uso do tempo de forma produtiva, priorizando tarefas conforme urg├¬ncia e import├óncia (Matriz de Eisenhower), evitando procrastina├º├úo e otimizando a aloca├º├úo de esfor├ºo em atividades de alto impacto.",

          "topicos": [

            "Prioriza├º├úo",

            "Matriz de Eisenhower",

            "Planejamento",

            "Produtividade pessoal"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de m├║ltiplos projetos simult├óneos",

            "Rotina de gest├úo industrial",

            "Cumprimento de prazos de entrega"

          ]

        },

        {

          "titulo": "Pensamento anal├¡tico",

          "definicao": "Capacidade de decompor problemas complexos em partes menores, identificar padr├Áes, rela├º├Áes de causa e efeito e tomar decis├Áes baseadas em dados e evid├¬ncias. Fundamental para a resolu├º├úo estruturada de problemas na engenharia.",

          "topicos": [

            "Racioc├¡nio l├│gico",

            "An├ílise de dados",

            "Solu├º├úo de problemas",

            "Pensamento cr├¡tico"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise de causa raiz (RCA)",

            "Diagn├│stico de falhas de produ├º├úo",

            "Otimiza├º├úo de processos"

          ]

        },

        {

          "titulo": "Resolu├º├úo de problemas complexos",

          "definicao": "Compet├¬ncia para lidar com problemas mal estruturados e multifatoriais, caracter├¡sticos do ambiente industrial, por meio de metodologias estruturadas como PDCA, DMAIC, A3 e an├ílise de causa raiz, combinando an├ílise t├®cnica e pensamento cr├¡tico.",

          "topicos": [

            "PDCA",

            "DMAIC",

            "A3",

            "Causa raiz"

          ],

          "formula": "",

          "aplicacoes": [

            "Redu├º├úo de refugo em linhas de produ├º├úo",

            "Melhoria de indicadores de qualidade",

            "Projetos Seis Sigma"

          ]

        },

        {

          "titulo": "Tomada de decis├úo sob incerteza",

          "definicao": "Capacidade de decidir com informa├º├Áes incompletas ou amb├¡guas, avaliando riscos, probabilidades e cen├írios alternativos. Utiliza ferramentas como ├írvores de decis├úo, an├ílise de sensibilidade e simula├º├úo de Monte Carlo.",

          "topicos": [

            "Risco",

            "An├ílise de cen├írios",

            "Probabilidade",

            "Incerteza"

          ],

          "formula": "",

          "aplicacoes": [

            "Decis├Áes de investimento em capacidade",

            "Lan├ºamento de novos produtos",

            "Gest├úo de supply chain em cen├írios vol├íteis"

          ]

        },

        {

          "titulo": "Intelig├¬ncia emocional",

          "definicao": "Capacidade de reconhecer, compreender e gerenciar as pr├│prias emo├º├Áes e as dos outros, composta por autoconhecimento, autocontrole, empatia, habilidades sociais e motiva├º├úo. Essencial para lideran├ºa, trabalho em equipe e gest├úo de conflitos.",

          "topicos": [

            "Autoconhecimento",

            "Empatia",

            "Autocontrole",

            "Habilidades sociais"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de conflitos em equipe",

            "Lideran├ºa de turnos e equipes operacionais",

            "Ambientes de alta press├úo na produ├º├úo"

          ]

        },

        {

          "titulo": "Trabalho em equipe multidisciplinar",

          "definicao": "Habilidade de colaborar eficazmente com profissionais de diferentes ├íreas e forma├º├Áes (engenharia, qualidade, manuten├º├úo, RH, TI) em prol de objetivos comuns. Requer comunica├º├úo clara, respeito ├á diversidade t├®cnica e coopera├º├úo.",

          "topicos": [

            "Colabora├º├úo",

            "Diversidade",

            "Times multifuncionais",

            "Sinergia"

          ],

          "formula": "",

          "aplicacoes": [

            "Projetos de melhoria cont├¡nua integrados",

            "Comit├¬s de seguran├ºa e qualidade",

            "Desenvolvimento de novos produtos"

          ]

        },

        {

          "titulo": "Vis├úo estrat├®gica",

          "definicao": "Capacidade de enxergar o neg├│cio em sua totalidade, compreendendo cen├írios de longo prazo, tend├¬ncias de mercado, movimentos da concorr├¬ncia e impactos das decis├Áes t├®cnicas na estrat├®gia corporativa. Permite alinhar opera├º├Áes aos objetivos organizacionais.",

          "topicos": [

            "Planejamento estrat├®gico",

            "Vis├úo sist├¬mica",

            "Longo prazo",

            "Neg├│cio"

          ],

          "formula": "",

          "aplicacoes": [

            "Planejamento mestre da produ├º├úo",

            "Estrat├®gia de capacidade fabril",

            "Decis├Áes de make or buy"

          ]

        },

        {

          "titulo": "Adaptabilidade e resili├¬ncia",

          "definicao": "Capacidade de se ajustar rapidamente a mudan├ºas, imprevistos e adversidades sem perder a efic├ícia profissional. Na ind├║stria, manifesta-se na flexibilidade para alterar prioridades, aprender novas tecnologias e manter a performance sob press├úo.",

          "topicos": [

            "Flexibilidade",

            "Mudan├ºa",

            "Press├úo",

            "Aprendizado cont├¡nuo"

          ],

          "formula": "",

          "aplicacoes": [

            "Absor├º├úo de varia├º├Áes de demanda",

            "Implata├º├úo de novas tecnologias",

            "Gest├úo de crises operacionais"

          ]

        },

        {

          "titulo": "Gest├úo de conflitos",

          "definicao": "Habilidade de identificar, mediar e resolver diverg├¬ncias interpessoais ou interdepartamentais de forma construtiva. Utiliza t├®cnicas de escuta ativa, negocia├º├úo, comunica├º├úo n├úo violenta e busca de solu├º├Áes que preservem o relacionamento.",

          "topicos": [

            "Media├º├úo",

            "Escuta ativa",

            "Consenso",

            "Clima organizacional"

          ],

          "formula": "",

          "aplicacoes": [

            "Conflitos entre turnos de produ├º├úo",

            "Diverg├¬ncias entre qualidade e produ├º├úo",

            "Rela├º├Áes com sindicatos e representantes de trabalhadores"

          ]

        },

        {

          "titulo": "Empatia corporativa",

          "definicao": "Capacidade de se colocar no lugar do outro no ambiente profissional, compreendendo suas necessidades, motiva├º├Áes e limita├º├Áes. Essa compet├¬ncia fortalece o clima organizacional, a coopera├º├úo interdepartamental e a reten├º├úo de talentos.",

          "topicos": [

            "Escuta ativa",

            "Compreens├úo",

            "Clima organizacional",

            "Rela├º├Áes interpessoais"

          ],

          "formula": "",

          "aplicacoes": [

            "Lideran├ºa humanizada na produ├º├úo",

            "Atendimento ao cliente interno e externo",

            "Reten├º├úo de operadores e t├®cnicos"

          ]

        },

        {

          "titulo": "Orat├│ria e apresenta├º├úo",

          "definicao": "Habilidade de falar em p├║blico de forma clara, persuasiva e envolvente, utilizando recursos como storytelling, linguagem corporal, slides e exemplos pr├íticos. Fundamental para apresentar resultados, propor projetos e liderar reuni├Áes.",

          "topicos": [

            "Falar em p├║blico",

            "Storytelling",

            "Apresenta├º├úo de resultados",

            "Orat├│ria"

          ],

          "formula": "",

          "aplicacoes": [

            "Apresenta├º├úo de KPIs ├á diretoria",

            "Treinamentos e capacita├º├úo de equipes",

            "Pitches de projetos de melhoria"

          ]

        },

        {

          "titulo": "Feedback construtivo",

          "definicao": "T├®cnica de comunica├º├úo que oferece retorno sobre o desempenho de forma objetiva, espec├¡fica e focada em comportamentos observ├íveis, visando ao desenvolvimento profissional. Deve equilibrar reconhecimento e pontos de melhoria.",

          "topicos": [

            "Feedback",

            "Avalia├º├úo de desempenho",

            "Comunica├º├úo n├úo violenta",

            "Desenvolvimento"

          ],

          "formula": "",

          "aplicacoes": [

            "Avalia├º├Áes de desempenho peri├│dicas",

            "Gest├úo de operadores e l├¡deres de turno",

            "Programas de est├ígio e trainee"

          ]

        },

        {

          "titulo": "Mentoring e coaching",

          "definicao": "Mentoring: rela├º├úo de desenvolvimento profissional na qual um profissional experiente orienta um mais jovem, compartilhando conhecimento e experi├¬ncia. Coaching: processo estruturado de desenvolvimento de compet├¬ncias por meio de perguntas, metas e planos de a├º├úo.",

          "topicos": [

            "Mentoria",

            "Coaching",

            "Desenvolvimento de carreira",

            "Aprendizagem"

          ],

          "formula": "",

          "aplicacoes": [

            "Programas de onboarding de engenheiros",

            "Desenvolvimento de l├¡deres operacionais",

            "Sucess├úo em cargos de gest├úo industrial"

          ]

        },

        {

          "titulo": "Lideran├ºa situacional",

          "definicao": "Modelo de lideran├ºa desenvolvido por Hersey e Blanchard segundo o qual o l├¡der deve adaptar seu estilo (determinar, persuadir, compartilhar, delegar) conforme o n├¡vel de maturidade e compet├¬ncia dos liderados em cada tarefa ou situa├º├úo.",

          "topicos": [

            "Estilos de lideran├ºa",

            "Maturidade da equipe",

            "Delega├º├úo",

            "Flexibilidade gerencial"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de equipes heterog├¬neas",

            "Dire├º├úo de operadores novatos vs. experientes",

            "Lideran├ºa em projetos de melhoria"

          ]

        },

        {

          "titulo": "Comunica├º├úo n├úo violenta (CNV)",

          "definicao": "M├®todo de comunica├º├úo desenvolvido por Marshall Rosenberg baseado em observa├º├úo, sentimento, necessidade e pedido. Visa estabelecer conex├úo e coopera├º├úo, reduzindo conflitos e mal-entendidos no ambiente profissional.",

          "topicos": [

            "CNV",

            "Escuta emp├ítica",

            "Resolu├º├úo pac├¡fica",

            "Di├ílogo"

          ],

          "formula": "",

          "aplicacoes": [

            "Media├º├úo de conflitos interpessoais",

            "Reuni├Áes de equipe construtivas",

            "Relacionamento com fornecedores e clientes"

          ]

        },

        {

          "titulo": "Storytelling para gest├úo",

          "definicao": "T├®cnica de comunica├º├úo que utiliza narrativas estruturadas para transmitir mensagens, engajar audi├¬ncias e inspirar a├º├úo. Na gest├úo industrial, ├® usada para comunicar vis├úo, compartilhar li├º├Áes aprendidas e motivar equipes.",

          "topicos": [

            "Narrativa",

            "Engajamento",

            "Comunica├º├úo persuasiva",

            "Cultura organizacional"

          ],

          "formula": "",

          "aplicacoes": [

            "Comunica├º├úo de resultados e metas",

            "Treinamentos de seguran├ºa",

            "Compartilhamento de casos de sucesso"

          ]

        },

        {

          "titulo": "Criatividade e inova├º├úo",

          "definicao": "Capacidade de gerar ideias originais e solu├º├Áes n├úo convencionais para desafios produtivos e organizacionais. No engenheiro de produ├º├úo, manifesta-se na proposi├º├úo de novos m├®todos, arranjos, produtos ou tecnologias que geram valor competitivo.",

          "topicos": [

            "Pensamento divergente",

            "Inova├º├úo incremental",

            "Design thinking",

            "Idea├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Desenvolvimento de novos processos produtivos",

            "Melhoria cont├¡nua (Kaizen criativo)",

            "Projetos de inova├º├úo em produtos e servi├ºos"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Goleman, D. Inteligência Emocional. Rio de Janeiro: Objetiva, 1995."},
      {"tipo": "Relatório", "ref": "World Economic Forum. The Future of Jobs Report. Genebra: WEF, 2016."},
      {"tipo": "Artigo", "ref": "Cimatti, B. Definition, Development, Assessment of Soft Skills. International Journal for Quality Research, 2016."}
    ]},

    {

      "id": "tecnicas",

      "nome": "Compet├¬ncias T├®cnicas",

      "icone": "brain",

      "cor": "#4f46e5",

      "descricao": "Habilidades t├®cnicas essenciais para o engenheiro de produ├º├úo moderno.",

      "subtopicos": [

        {

          "titulo": "Excel avan├ºado e VBA",

          "definicao": "Dom├¡nio de funcionalidades avan├ºadas do Microsoft Excel incluindo tabelas din├ómicas, Power Query, fun├º├Áes matriciais, an├ílise de dados, gr├íficos din├ómicos e automa├º├úo com VBA (Macros). ├ë a ferramenta mais universal de an├ílise e modelagem no ambiente industrial.",

          "topicos": [

            "Tabela din├ómica",

            "Power Query",

            "Macros VBA",

            "Dashboard",

            "Fun├º├Áes matriciais"

          ],

          "formula": "",

          "aplicacoes": [

            "Controle de indicadores de produ├º├úo",

            "Relat├│rios gerenciais",

            "Automa├º├úo de rotinas de PCP"

          ]

        },

        {

          "titulo": "SQL para an├ílise de dados",

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

            "Extra├º├úo de dados de ERPs",

            "An├ílise de hist├│ricos de qualidade",

            "Relat├│rios de performance de produ├º├úo"

          ]

        },

        {

          "titulo": "Python industrial",

          "definicao": "Uso da linguagem Python para automa├º├úo de processos, an├ílise estat├¡stica, visualiza├º├úo de dados, machine learning e integra├º├úo de sistemas no ambiente industrial. Bibliotecas como Pandas, NumPy, Matplotlib e scikit-learn s├úo amplamente utilizadas.",

          "topicos": [

            "Pandas",

            "NumPy",

            "Matplotlib",

            "Automa├º├úo",

            "Machine Learning"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise de dados de sensores IoT",

            "Previs├úo de demanda e manuten├º├úo preditiva",

            "Automa├º├úo de relat├│rios de indicadores"

          ]

        },

        {

          "titulo": "Power BI avan├ºado",

          "definicao": "Ferramenta de Business Intelligence da Microsoft para cria├º├úo de dashboards interativos e relat├│rios anal├¡ticos. O n├¡vel avan├ºado inclui modelagem dimensional, linguagem DAX, Power Query, RLS e integra├º├úo com fontes de dados industriais.",

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

            "An├ílise de desempenho de fornecedores",

            "Monitoramento de metas de produ├º├úo"

          ]

        },

        {

          "titulo": "SAP m├│dulo PP e MM",

          "definicao": "M├│dulos do ERP SAP para Planejamento da Produ├º├úo (PP) e Gest├úo de Materiais (MM). O PP gerencia ordens de produ├º├úo, MRP, roteiros e capacidade; o MM controla compras, estoques, movimenta├º├Áes e avalia├º├úo de materiais.",

          "topicos": [

            "MRP",

            "Ordem de produ├º├úo",

            "Roteiro",

            "Estoque",

            "Compras"

          ],

          "formula": "",

          "aplicacoesoes": [

            "Planejamento de necessidades de materiais",

            "Controle de ordens de produ├º├úo",

            "Gest├úo de compras e suprimentos"

          ]

        },

        {

          "titulo": "Oracle Industrial (EBS, JDE)",

          "definicao": "Su├¡tes de ERP da Oracle para gest├úo industrial. Oracle E-Business Suite (EBS) e JD Edwards (JDE) cobrem manufatura, supply chain, finan├ºas e projetos, com m├│dulos para PCP, qualidade, manuten├º├úo e custos.",

          "topicos": [

            "Oracle EBS",

            "JD Edwards",

            "Manufatura",

            "Supply Chain",

            "ERP industrial"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo integrada da manufatura",

            "Planejamento e controle da produ├º├úo",

            "Rastreabilidade e qualidade"

          ]

        },

        {

          "titulo": "MES ÔÇö Manufacturing Execution Systems",

          "definicao": "Sistemas de execu├º├úo da manufatura que monitoram e controlam a produ├º├úo em tempo real no ch├úo de f├íbrica, conectando o planejamento (ERP) ao processo produtivo. Gerenciam ordens, apontamento, rastreabilidade, OEE e qualidade.",

          "topicos": [

            "Ch├úo de f├íbrica",

            "Tempo real",

            "Apontamento",

            "Rastreabilidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Apontamento eletr├┤nico de produ├º├úo",

            "Rastreabilidade de lotes",

            "C├ílculo autom├ítico de OEE"

          ]

        },

        {

          "titulo": "WMS ÔÇö Warehouse Management Systems",

          "definicao": "Sistemas de gest├úo de armaz├®ns que controlam recebimento, estocagem, movimenta├º├úo, separa├º├úo (picking) e expedi├º├úo de materiais. Integrados ao ERP, otimizam endere├ºamento, invent├írio e utiliza├º├úo do espa├ºo de armazenagem.",

          "topicos": [

            "Armaz├®m",

            "Picking",

            "Endere├ºamento",

            "Invent├írio",

            "Expedi├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de centros de distribui├º├úo",

            "Otimiza├º├úo de rotas de separa├º├úo",

            "Controle de invent├írio c├¡clico"

          ]

        },

        {

          "titulo": "TMS ÔÇö Transport Management Systems",

          "definicao": "Sistemas de gest├úo de transporte que planejam, executam e monitoram opera├º├Áes log├¡sticas de fretes, roteiriza├º├úo, rastreamento de cargas, gest├úo de fretes e auditoria de freteiras. Integrados ao ERP e WMS para visibilidade log├¡stica.",

          "topicos": [

            "Roteiriza├º├úo",

            "Frete",

            "Rastreamento",

            "Gest├úo de transportadoras"

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

          "definicao": "Software CAD (Computer-Aided Design) da Autodesk para desenho t├®cnico 2D e modelagem 3D de pe├ºas, equipamentos e layouts industriais. Largamente utilizado na engenharia para projeto de produtos, arranjos f├¡sicos e documenta├º├úo t├®cnica.",

          "topicos": [

            "Desenho t├®cnico",

            "Layout",

            "CAD",

            "Projeto mec├ónico"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto de layout fabril",

            "Desenho de componentes e conjuntos",

            "Documenta├º├úo t├®cnica e engenharia"

          ]

        },

        {

          "titulo": "SolidWorks 3D",

          "definicao": "Software CAD 3D param├®trico para projeto mec├ónico, modelagem s├│lida, montagens e gera├º├úo de desenhos t├®cnicos. Inclui ferramentas de simula├º├úo, an├ílise de interfer├¬ncia, renderiza├º├úo e integra├º├úo com manufatura (CAM).",

          "topicos": [

            "Modelagem 3D",

            "Montagem",

            "Desenho t├®cnico",

            "Simula├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Projeto detalhado de equipamentos",

            "Desenvolvimento de produtos",

            "Prototipagem virtual e simula├º├úo"

          ]

        },

        {

          "titulo": "Minitab para estat├¡stica",

          "definicao": "Software estat├¡stico amplamente utilizado em projetos Six Sigma e controle de qualidade para an├ílise de dados, testes de hip├│teses, DOE (projeto de experimentos), CEP (controle estat├¡stico de processo), an├ílise de capacidade e regress├úo.",

          "topicos": [

            "Six Sigma",

            "DOE",

            "CEP",

            "Teste de hip├│teses",

            "Capabilidade"

          ],

          "formula": "",

          "aplicacoes": [

            "Projetos DMAIC",

            "An├ílise de capabilidade de processos",

            "Otimiza├º├úo de par├ómetros de produ├º├úo"

          ]

        },

        {

          "titulo": "Arena Simulation",

          "definicao": "Software de simula├º├úo de processos industriais e log├¡sticos desenvolvido pela Rockwell Automation. Permite modelar sistemas produtivos complexos, realizar an├ílises de capacidade, gargalos, cen├írios alternativos e otimiza├º├úo de recursos.",

          "topicos": [

            "Simula├º├úo",

            "Modelagem",

            "Gargalos",

            "Capacidade",

            "Otimiza├º├úo"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de linhas de produ├º├úo",

            "An├ílise de gargalos e capacidade",

            "Projeto de novos sistemas produtivos"

          ]

        },

        {

          "titulo": "ERP industrial (Totvs, SAP, Oracle)",

          "definicao": "Sistemas integrados de gest├úo empresarial adaptados ├á ind├║stria que cobrem desde o planejamento at├® a distribui├º├úo. No Brasil, os principais s├úo Totvs Protheus (market share nacional), SAP (global), Oracle e Sankhya.",

          "topicos": [

            "Totvs Protheus",

            "SAP",

            "Oracle",

            "MRP II",

            "Gest├úo industrial"

          ],

          "formula": "",

          "aplicacoes": [

            "Gest├úo de ordens de produ├º├úo e MRP",

            "Controle de custos industriais",

            "Integra├º├úo financeira, fiscal e log├¡stica"

          ]

        },

        {

          "titulo": "Linguagem R",

          "definicao": "Linguagem de programa├º├úo e ambiente computacional voltado ├á an├ílise estat├¡stica, minera├º├úo de dados e visualiza├º├úo gr├ífica. Ampla utiliza├º├úo em projetos de data science, controle estat├¡stico da qualidade e modelagem preditiva industrial.",

          "topicos": [

            "RStudio",

            "dplyr",

            "ggplot2",

            "Estat├¡stica",

            "Data Science"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise estat├¡stica de processos",

            "Modelagem de s├®ries temporais de produ├º├úo",

            "Dashboards estat├¡sticos"

          ]

        },

        {

          "titulo": "Tableau",

          "definicao": "Plataforma de visualiza├º├úo de dados e Business Intelligence que permite criar dashboards interativos e an├ílises visuais a partir de m├║ltiplas fontes de dados. Conhecido por sua facilidade de uso e capacidade de lidar com grandes volumes.",

          "topicos": [

            "Visualiza├º├úo de dados",

            "Dashboard",

            "BI",

            "Storytelling com dados"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise visual de indicadores de produ├º├úo",

            "Monitoramento de supply chain",

            "Reporting executivo"

          ]

        },

        {

          "titulo": "QlikView e Qlik Sense",

          "definicao": "Plataformas de Business Intelligence da Qlik que utilizam modelo associativo em mem├│ria para an├ílise de dados. QlikView ├® focado em dashboards guiados; Qlik Sense oferece autosservi├ºo com visualiza├º├Áes interativas e intelig├¬ncia artificial.",

          "topicos": [

            "Modelo associativo",

            "Dashboard",

            "Data storytelling",

            "BI"

          ],

          "formula": "",

          "aplicacoes": [

            "An├ílise associativa de dados de produ├º├úo",

            "Relat├│rios de qualidade com m├║ltiplas dimens├Áes",

            "Descoberta de padr├Áes em dados industriais"

          ]

        },

        {

          "titulo": "Matlab/Octave",

          "definicao": "Ambientes de computa├º├úo num├®rica para an├ílise matem├ítica, simula├º├úo, otimiza├º├úo e processamento de sinais. Matlab (MathWorks) ├® a ferramenta padr├úo na academia e ind├║stria; Octave ├® sua alternativa livre e de c├│digo aberto.",

          "topicos": [

            "Simula├º├úo num├®rica",

            "Otimiza├º├úo",

            "Controle",

            "Processamento de sinais"

          ],

          "formula": "",

          "aplicacoes": [

            "Modelagem matem├ítica de processos",

            "Otimiza├º├úo de sistemas produtivos",

            "Controle de qualidade estat├¡stico avan├ºado"

          ]

        },

        {

          "titulo": "Scilab",

          "definicao": "Software de c├│digo aberto para computa├º├úo num├®rica, similar ao Matlab, desenvolvido pelo INRIA. Oferece ferramentas para ├ílgebra linear, otimiza├º├úo, simula├º├úo de sistemas din├ómicos, processamento de sinais e gr├íficos cient├¡ficos.",

          "topicos": [

            "Computa├º├úo num├®rica",

            "C├│digo aberto",

            "Simula├º├úo",

            "Matem├ítica aplicada"

          ],

          "formula": "",

          "aplicacoes": [

            "Simula├º├úo de sistemas de controle",

            "An├ílise num├®rica na engenharia",

            "Ambiente acad├¬mico de baixo custo"

          ]

        },

        {

          "titulo": "Ferramentas CAD/CAM (Fusion 360, Inventor)",

          "definicao": "Softwares integrados de projeto (CAD) e manufatura (CAM) que permitem projetar pe├ºas 3D e gerar automaticamente programas de usinagem para m├íquinas CNC. Fusion 360 (Autodesk) ├® baseado em nuvem; Inventor ├® focado em projeto mec├ónico profissional.",

          "topicos": [

            "CAD/CAM",

            "CNC",

            "Usinagem",

            "Fabrica├º├úo digital"

          ],

          "formula": "",

          "aplicacoes": [

            "Programa├º├úo CNC automatizada",

            "Projeto e fabrica├º├úo de moldes e matrizes",

            "Prototipagem r├ípida e manufatura aditiva"

          ]

        }

      ]

    ,
    "referencias": [
      {"tipo": "Livro", "ref": "Lakatos, E. M.; Marconi, M. A. Fundamentos de Metodologia Científica. 7. ed. São Paulo: Atlas, 2010."},
      {"tipo": "Livro", "ref": "Severino, A. J. Metodologia do Trabalho Científico. 23. ed. São Paulo: Cortez, 2007."},
      {"tipo": "Livro", "ref": "Gil, A. C. Como Elaborar Projetos de Pesquisa. 4. ed. São Paulo: Atlas, 2002."},
      {"tipo": "Livro", "ref": "Miguel, P. A. C. (Org.). Metodologia de Pesquisa em Engenharia de Produção. 2. ed. Rio de Janeiro: Elsevier, 2011."}
    ]}

  ],

  "modelosCAD": [

    {

      "nome": "Conjunto Mec├ónico ÔÇö Prensa Manual",

      "tipo": "SolidWorks",

      "arquivo": "prensa-manual.sldasm",

      "tamanho": "4.2 MB",

      "descricao": "Projeto completo de prensa manual para oficina mec├ónica. Inclui molde, base, guias e sistema de alavanca."

    },

    {

      "nome": "Redutor de Velocidades ÔÇö Engrenagens Helicoidais",

      "tipo": "AutoCAD",

      "arquivo": "redutor-helical.dwg",

      "tamanho": "2.8 MB",

      "descricao": "Conjunto de redutor com engrenagens helicoidais, carca├ºa bipartida e eixos. Desenho t├®cnico completo com cotas."

    },

    {

      "nome": "Suporte para M├íquina CNC",

      "tipo": "NanoCAD",

      "arquivo": "suporte-cnc.dwg",

      "tamanho": "1.5 MB",

      "descricao": "Base estrutural para fresadora CNC de pequeno porte. Inclui detalhamento de solda e fura├º├úo."

    },

    {

      "nome": "Cilindro Pneum├ítico ISO 6432",

      "tipo": "SolidWorks",

      "arquivo": "cilindro-pneumatico.sldprt",

      "tamanho": "3.1 MB",

      "descricao": "Modelo param├®trico de cilindro pneum├ítico conforme norma ISO 6432. ├èmoblo, camisa, tampas e veda├º├úo."

    },

    {

      "nome": "Esteira Transportadora ÔÇö Perfil U",

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

      "descricao": "Morsa funcional para bancada de usinagem. Inclui castelo, parafuso, base e garras em a├ºo."

    },

    {

      "nome": "Torre de Ilumina├º├úo Industrial",

      "tipo": "SolidWorks",

      "arquivo": "torre-iluminacao.sldasm",

      "tamanho": "6.3 MB",

      "descricao": "Torre met├ílica treli├ºada para ilumina├º├úo de p├ítio industrial com 12 m de altura. Memorial de c├ílculo incluso."

    },

    {

      "nome": "Caldeira Flamotubular Vertical",

      "tipo": "AutoCAD",

      "arquivo": "caldeira-flamotubular.dwg",

      "tamanho": "3.9 MB",

      "descricao": "Caldeira flamotubular vertical para gera├º├úo de vapor. Inclui tubos, fornalha, espelho e isolamento t├®rmico."

    },

    {

      "nome": "Ponte Rolante 10t",

      "tipo": "SolidWorks",

      "arquivo": "ponte-rolante.sldasm",

      "tamanho": "8.2 MB",

      "descricao": "Ponte rolante biapoiada com capacidade de 10 toneladas. Inclui viga principal, finais, trolley e motorredures."

    },

    {

      "nome": "Bra├ºo Rob├│tico 6 Eixos",

      "tipo": "AutoCAD",

      "arquivo": "braco-robotico.dwg",

      "tamanho": "4.5 MB",

      "descricao": "Modelo conceitual de bra├ºo rob├│tico articulado com 6 graus de liberdade para c├®lula de manufatura."

    }

  ],

  "cursosGratuitos": [

    {

      "nome": "Gest├úo da Qualidade Total",

      "plataforma": "SENAI",

      "url": "https://www.senai.br/cursos",

      "carga": "40h",

      "tipo": "Curso Livre",

      "descricao": "Fundamentos do TQM, ferramentas da qualidade, ISO 9001 e melhoria cont├¡nua."

    },

    {

      "nome": "Lean Manufacturing",

      "plataforma": "Funda├º├úo Bradesco",

      "url": "https://www.ev.org.br/cursos",

      "carga": "20h",

      "tipo": "Curso Livre",

      "descricao": "Conceitos de produ├º├úo enxuta, ferramentas Lean, Kaizen e elimina├º├úo de desperd├¡cios."

    },

    {

      "nome": "Log├¡stica Empresarial",

      "plataforma": "SEBRAE",

      "url": "https://www.sebrae.com.br/cursosonline",

      "carga": "16h",

      "tipo": "Curso Livre",

      "descricao": "Gest├úo log├¡stica, modais, armazenagem, distribui├º├úo e indicadores log├¡sticos."

    },

    {

      "nome": "Introdu├º├úo ao Supply Chain Management",

      "plataforma": "Coursera ÔÇö Rutgers",

      "url": "https://www.coursera.org/learn/supply-chain-management",

      "carga": "20h",

      "tipo": "Curso (Auditoria)",

      "descricao": "Cadeia de suprimentos integrada, gest├úo de fornecedores, compras e S&OP."

    },

    {

      "nome": "Excel Aplicado ├á Engenharia",

      "plataforma": "Funda├º├úo Bradesco",

      "url": "https://www.ev.org.br/cursos",

      "carga": "30h",

      "tipo": "Curso Livre",

      "descricao": "Excel intermedi├írio e avan├ºado para an├ílise de dados, tabelas din├ómicas e dashboards."

    },

    {

      "nome": "Python para An├ílise de Dados (IBM)",

      "plataforma": "Coursera (IBM)",

      "url": "https://www.coursera.org/professional-certificates/ibm-data-analyst",

      "carga": "40h",

      "tipo": "Curso (Auditoria)",

      "descricao": "Python com pandas, NumPy e visualiza├º├úo de dados para an├ílise industrial."

    },

    {

      "nome": "Gest├úo de Projetos (PMBOK)",

      "plataforma": "SEBRAE",

      "url": "https://www.sebrae.com.br/cursosonline",

      "carga": "24h",

      "tipo": "Curso Livre",

      "descricao": "Fundamentos do PMBOK, cronogramas, EAP, riscos e custos em projetos."

    },

    {

      "nome": "Seguran├ºa do Trabalho (NRs)",

      "plataforma": "SENAI",

      "url": "https://www.senai.br/cursos",

      "carga": "20h",

      "tipo": "Curso Livre",

      "descricao": "Normas Regulamentadoras, EPI/EPC, CIPA, mapa de riscos e preven├º├úo de acidentes."

    },

    {

      "nome": "Power BI (Microsoft Learn)",

      "plataforma": "Microsoft Learn",

      "url": "https://learn.microsoft.com/pt-br/training/powerplatform/power-bi",

      "carga": "16h",

      "tipo": "Trilha",

      "descricao": "Dashboards, DAX, modelagem de dados e visualiza├º├úo para KPIs industriais."

    },

    {

      "nome": "Six Sigma ÔÇö White Belt",

      "plataforma": "Funda├º├úo Bradesco",

      "url": "https://www.ev.org.br/cursos",

      "carga": "10h",

      "tipo": "Curso Livre",

      "descricao": "Introdu├º├úo ao Seis Sigma, DMAIC, estat├¡stica b├ísica e redu├º├úo de varia├º├úo."

    },

    {

      "nome": "Ind├║stria 4.0 (SENAI)",

      "plataforma": "SENAI",

      "url": "https://www.senai.br/cursos",

      "carga": "20h",

      "tipo": "Curso Livre",

      "descricao": "IoT industrial, g├¬meo digital, manufatura aditiva, IA e sistemas ciberf├¡sicos."

    },

    {

      "nome": "AutoCAD B├ísico (SENAI)",

      "plataforma": "SENAI",

      "url": "https://www.senai.br/cursos",

      "carga": "40h",

      "tipo": "Curso Livre",

      "descricao": "Desenho t├®cnico auxiliado por computador, cotagem, layers e plotagem."

    },

    {

      "nome": "Fundamentos da Gest├úo Log├¡stica (FM2S)",

      "plataforma": "FM2S",

      "url": "https://www.fm2s.com.br/cursos/fundamentos-da-gestao-logistica",

      "carga": "15h",

      "tipo": "Curso Livre",

      "descricao": "Princ├¡pios da gest├úo log├¡stica, estoques, transporte e indicadores."

    },

    {

      "nome": "Programa├º├úo Linear (Udemy)",

      "plataforma": "Udemy",

      "url": "https://www.udemy.com/user/nilo-guimaraes/",

      "carga": "5h",

      "tipo": "Curso Gratuito",

      "descricao": "Introdu├º├úo ├á programa├º├úo linear, m├®todo simplex e otimiza├º├úo de recursos."

    },

    {

      "nome": "SQL B├ísico (Kaggle)",

      "plataforma": "Kaggle",

      "url": "https://www.kaggle.com/learn/intro-to-sql",

      "carga": "5h",

      "tipo": "Curso Interativo",

      "descricao": "Consultas SQL para an├ílise de dados estruturados com bancos relacionais."

    },

    {

      "nome": "PCP (Planejamento e Controle da Produ├º├úo)",

      "plataforma": "Nomus",

      "url": "https://material.nomus.com.br/pcp",

      "carga": "2h",

      "tipo": "E-book",

      "descricao": "Guia completo sobre PCP, MRP, sequenciamento e programa├º├úo da produ├º├úo."

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

      "nome": "Gest├úo Ambiental ISO 14001",

      "plataforma": "Funda├º├úo Bradesco",

      "url": "https://www.ev.org.br/cursos",

      "carga": "12h",

      "tipo": "Curso Livre",

      "descricao": "Sistema de gest├úo ambiental, requisitos da ISO 14001 e auditoria ambiental."

    }

  ],

  "formularios": [

    {

      "id": "fmea",

      "nome": "Planilha FMEA (An├ílise de Modos de Falha)",

      "descricao": "Formul├írio completo de FMEA de processo com campos para fun├º├úo, modo de falha, causa, efeito, NRP e a├º├Áes recomendadas."

    },

    {

      "id": "ppap",

      "nome": "PPAP ÔÇö Production Part Approval Process",

      "descricao": "Checklist completo de PPAP n├¡vel 3 conforme AIAG, com 18 itens de submiss├úo."

    },

    {

      "id": "8d",

      "nome": "Relat├│rio 8D (Oito Disciplinas)",

      "descricao": "Template de relat├│rio 8D para an├ílise de n├úo conformidades com campos de D1 a D8."

    },

    {

      "id": "mapeamento",

      "nome": "Mapeamento de Processos ÔÇö SIPOC",

      "descricao": "Template de mapeamento SIPOC com Suppliers, Inputs, Process, Outputs e Customers."

    },

    {

      "id": "5s",

      "nome": "Checklist 5S",

      "descricao": "Checklist de auditoria 5S com crit├®rios para cada S e pontua├º├úo de 0 a 5."

    },

    {

      "id": "vsm",

      "nome": "Value Stream Mapping (VSM)",

      "descricao": "Template de Mapeamento de Fluxo de Valor com simbologia completa e campos para m├®tricas."

    },

    {

      "id": "diagrama-ishikawa",

      "nome": "Diagrama de Ishikawa (Espinha de Peixe)",

      "descricao": "Template edit├ível do diagrama causa-efeito com os 6Ms: M├®todo, M├úo de Obra, M├íquina, Material, Medida, Meio Ambiente."

    },

    {

      "id": "poka-yoke",

      "nome": "Planilha de Poka-Yoke",

      "descricao": "Registro de dispositivos ├á prova de erro com campos para tipo, local e efic├ícia."

    },

    {

      "id": "5w2h",

      "nome": "Plano de A├º├úo 5W2H",

      "descricao": "Template de plano de a├º├úo What, Why, Where, When, Who, How, How Much."

    },

    {

      "id": "auditoria",

      "nome": "Checklist de Auditoria ISO 9001",

      "descricao": "Checklist baseado na ISO 19011 com requisitos da ISO 9001:2025."

    },

    {

      "id": "treinamento",

      "nome": "Registro de Treinamento",

      "descricao": "Planilha de controle de treinamentos com carga hor├íria, instrutor e avalia├º├úo."

    },

    {

      "id": "indicadores",

      "nome": "Dashboard de Indicadores (KPI)",

      "descricao": "Template de dashboard com OEE, Lead Time, Produtividade, Refugo e OTIF."

    },

    {

      "id": "analise-capacidade",

      "nome": "An├ílise de Capacidade Produtiva",

      "descricao": "Formul├írio para c├ílculo de capacidade instalada, dispon├¡vel e efetiva com indicadores de ociosidade."

    },

    {

      "id": "sequenciamento",

      "nome": "Planilha de Sequenciamento de Ordens",

      "descricao": "Template para sequenciamento de produ├º├úo com regras EDD, SPT, FCFS e CR."

    },

    {

      "id": "custos",

      "nome": "Planilha de Custeio ABC",

      "descricao": "Planilha de custeio baseado em atividades com direcionadores de custos e rateio."

    },

    {

      "id": "riscos",

      "nome": "Matriz de Riscos (Probabilidade x Impacto)",

      "descricao": "Template de matriz de riscos com classifica├º├úo P x I e planos de a├º├úo de resposta."

    }

  ]

};

