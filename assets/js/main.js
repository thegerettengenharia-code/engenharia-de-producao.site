/* ==========================================================================
   ENGPRO — MAIN JAVASCRIPT
   GSAP ScrollTrigger, micro-interactions, search, theme toggle
   ========================================================================== */

(function() {
  'use strict';

  /* =========================================================================
     TOPICS DATA — 5 chapters with subtrees
     ========================================================================= */
  var T = [
    {d:1,n:"221",t:"Cidades Inteligentes",g:"Smart Cities e Indústria",s:"Integração de tecnologias da informação, IoT, automação e infraestrutura inteligente para gestão urbana eficiente, conectando zonas industriais inteligentes a sistemas urbanos sustentáveis.",k:["Cidades Inteligentes","Smart Cities","IoT Urbano","Indústria 4.0","Infraestrutura Inteligente"],b:[{ti:"Conceito e Infraestrutura de Smart Cities no Brasil",c:"<p>O Brasil possui <strong>127 cidades</strong> com projetos estruturados de <strong>cidades inteligentes</strong> (Connected Smart Cities 2024), com investimentos de <strong>R$ 14,3 bilhões</strong> em infraestrutura inteligente. <strong>Curitiba/PR</strong> (1º no ranking CSC 2024) investiu <strong>R$ 680 milhões</strong> em sistemas inteligentes de mobilidade, com semáforos adaptativos que reduziram congestionamentos em <strong>28%</strong>. <strong>Campinas/SP</strong> (4ª colocada) abriga o <strong>Parque Tecnológico de Campinas</strong> com <strong>48 empresas</strong> focadas em Internet das Coisas (IoT) industrial, incluindo a <strong>CPQD</strong>. <strong>Belo Horizonte/MG</strong> possui o <strong>Centro de Operações e Controle Inteligente</strong> que integra dados de <strong>380 câmeras</strong>, <strong>1.200 sensores</strong> e sistemas de <strong>12 órgãos municipais</strong>. A <strong>ABNT NBR ISO 37122:2022</strong> padroniza indicadores para cidades inteligentes no Brasil. A <strong>Lei 14.129/2021</strong> (Governo Digital) estabelece diretrizes para transformação digital urbana e integração com zonas industriais inteligentes.</p>"},{ti:"IoT Industrial e Sensoriamento Urbano",c:"<p>O mercado de <strong>IoT industrial urbano</strong> no Brasil movimentou <strong>R$ 4,6 bilhões</strong> em 2024, com <strong>28 milhões de dispositivos</strong> conectados (ABINEE 2024). A <strong>Siemens Brasil</strong> implementou o sistema <strong>MindSphere</strong> em <strong>14 cidades</strong> brasileiras, gerenciando <strong>1,2 milhão de sensores</strong> urbanos. Em <strong>Campinas/SP</strong>, a <strong>CPQD</strong> desenvolve rede <strong>LoRaWAN</strong> municipal com <strong>420 gateways</strong> cobrindo <strong>100%</strong> do perímetro urbano e conectando <strong>18.000 sensores</strong> industriais. A <strong>WEG</strong> fornece sistemas de <strong>iluminação pública inteligente</strong> para <strong>32 municípios</strong>, com <strong>240.000 luminárias LED</strong> conectadas que geram economia de energia de <strong>58%</strong>. A <strong>Vale</strong> fornece soluções de sensoriamento para mineração urbana em áreas de expansão industrial. A <strong>NR 10</strong> (Instalações Elétricas) estabelece requisitos para redes de sensores IoT em zonas urbanas industriais. A <strong>ABNT NBR 14565:2021</strong> padroniza cabeamento estruturado para redes IoT urbanas, alinhada à <strong>ISO/IEC 30141:2018</strong> (IoT Reference Architecture).</p>"},{ti:"Mobilidade Urbana Inteligente e Logística Industrial",c:"<p>O investimento em <strong>mobilidade inteligente</strong> no Brasil foi de <strong>R$ 5,2 bilhões</strong> em 2024 (ANTP 2024). A <strong>Volkswagen do Brasil</strong> participa do projeto <strong>VW Urban Mobility</strong> em São Paulo, com <strong>48 ônibus elétricos</strong> equipados com sensores que transmitem dados de fluxo para o centro de controle municipal. A <strong>Ambev</strong> opera <strong>320 veículos elétricos</strong> para distribuição urbana em <strong>12 capitais</strong>, com sistema de roteirização inteligente que reduziu emissões em <strong>42%</strong> e custos logísticos em <strong>R$ 28 milhões</strong> ao ano. O <strong>Porto de Santos/SP</strong> implementou sistema <strong>Port Community System</strong>, integrando <strong>180 empresas</strong> e reduzindo tempo médio de caminhões no porto de <strong>4,2h</strong> para <strong>1,3h</strong>. A <strong>Mercedes-Benz do Brasil</strong> desenvolve caminhões autônomos para corredores logísticos urbanos em parceria com <strong>8 municípios</strong>. A <strong>NR 29</strong> (Segurança Portuária) estabelece requisitos para automação e segurança em zonas portuárias integradas a smart cities. A <strong>ISO 37154:2017</strong> padroniza indicadores de mobilidade inteligente para cidades com polos industriais.</p>"},{ti:"Eficiência Energética e Redes Inteligentes (Smart Grids)",c:"<p>As <strong>redes inteligentes (smart grids)</strong> no Brasil receberam investimentos de <strong>R$ 18,3 bilhões</strong> até 2024 (ANEEL 2024), com <strong>12,8 milhões de medidores inteligentes</strong> instalados. A <strong>WEG</strong> fornece equipamentos para smart grids para <strong>38 concessionárias</strong>, incluindo transformadores inteligentes que reduzem perdas em <strong>15%</strong>. A <strong>Siemens Brasil</strong> implementou sistema de <strong>micro-redes inteligentes</strong> em <strong>6 parques industriais</strong> (Camaçari/BA, Betim/MG, etc.), integrando fontes solares (capacidade total de <strong>380 MWp</strong>), eólicas e baterias de lítio com capacidade de <strong>120 MWh</strong>. A <strong>CPFL Energia</strong> (Campinas/SP) opera a maior smart grid da América Latina, com <strong>2,4 milhões de medidores</strong> inteligentes e redução de perdas não técnicas de <strong>34%</strong>. A <strong>Petrobras</strong> desenvolve microrredes inteligentes para comunidades industriais remotas. A <strong>NR 10</strong> (SEC - Sistema Elétrico de Potência) e a <strong>ABNT NBR 15920:2021</strong> padronizam smart grids no Brasil. A <strong>ISO 50001:2018</strong> certifica sistemas de gestão de energia em smart cities industriais.</p>"},{ti:"Gestão Inteligente de Resíduos e Saneamento",c:"<p>O mercado de <strong>gestão inteligente de resíduos</strong> nas cidades brasileiras movimentou <strong>R$ 1,6 bilhão</strong> em 2024 (ABRELPE 2024). A <strong>Suzano</strong> implementou sistema de <strong>coleta inteligente</strong> em <strong>8 municípios</strong> do interior de SP, com <strong>12.000 lixeiras</strong> com sensores de capacidade que otimizaram rotas de coleta, reduzindo custos em <strong>37%</strong>. A <strong>Braskem</strong> mantém <strong>48 ecopontos inteligentes</strong> em São Paulo e Curitiba para coleta de resíduos plásticos, com sistema de reconhecimento por IA e recompensa por reciclagem, reciclando <strong>14.000 toneladas</strong> em 2024. A <strong>Klabin</strong> fornece embalagens inteligentes com QR code para rastreabilidade de resíduos em <strong>22 municípios</strong>. A <strong>Sabesp</strong> (São Paulo/SP) opera sistema inteligente de saneamento com <strong>4.800 sensores</strong> de vazão e qualidade da água, reduzindo perdas de <strong>38%</strong> para <strong>24%</strong>. A <strong>ABNT NBR 15849:2021</strong> padroniza sistemas de gestão inteligente de resíduos urbanos. A <strong>NR 25</strong> (Resíduos Industriais) estabelece requisitos para disposição final integrada a sistemas de cidades inteligentes.</p>"},{ti:"Segurança Pública e Monitoramento Inteligente nas Cidades",c:"<p>O investimento em <strong>segurança inteligente</strong> nas cidades brasileiras atingiu <strong>R$ 3,4 bilhões</strong> em 2024 (ABESE 2024). <strong>Curitiba/PR</strong> possui o maior sistema de <strong>videomonitoramento inteligente</strong> do país, com <strong>4.800 câmeras</strong> com análise de vídeo por IA que reduziram furtos em áreas industriais em <strong>42%</strong>. <strong>Campinas/SP</strong> implantou sistema de <strong>reconhecimento de placas (LPR)</strong> com <strong>340 câmeras</strong> nos acessos ao polo industrial, integrado ao sistema municipal de segurança. A <strong>Siemens Brasil</strong> fornece o <strong>Desigo CC</strong> (plataforma integrada de segurança predial) para <strong>28 centros empresariais</strong> e <strong>6 distritos industriais inteligentes</strong>. A <strong>Embraer</strong> desenvolve sensores de monitoramento aéreo com drones para segurança de perímetros industriais urbanos. A <strong>NR 23</strong> (Proteção Contra Incêndios) estabelece requisitos integrados de segurança predial em smart cities. A <strong>Lei 13.675/2018</strong> (Sistema Único de Segurança Pública) e a <strong>ABNT NBR ISO 22301:2020</strong> (Sistemas de Gestão de Continuidade de Negócios) padronizam a resiliência e segurança em zonas industriais de cidades inteligentes brasileiras.</p>"}]},
    {d:2,n:"222",t:"Economia Digital",g:"Transformação Digital Industrial",s:"Transformação dos modelos de negócio, processos produtivos e cadeias de valor da indústria através de tecnologias digitais, plataformas online, dados massivos e inteligência artificial.",k:["Economia Digital","Indústria 4.0","Transformação Digital","Plataformas Digitais","Data-Driven"],b:[{ti:"Panorama da Economia Digital Industrial Brasileira",c:"<p>A <strong>economia digital</strong> industrial brasileira movimentou <strong>R$ 382 bilhões</strong> em 2024, representando <strong>14,6%</strong> do PIB industrial (FGV/IBGE 2024). O Brasil ocupa a <strong>4ª posição</strong> no ranking global de economia digital industrial, atrás de EUA, China e Alemanha. Mais de <strong>68.000 indústrias</strong> brasileiras adotaram ao menos uma tecnologia digital em seus processos produtivos, com investimento médio de <strong>R$ 2,8 milhões</strong> por grande empresa. A <strong>WEG</strong> destinou <strong>R$ 420 milhões</strong> em 2024 para transformação digital, com implantação de plataforma IoT que conecta <strong>180.000 equipamentos</strong> de clientes em <strong>72 países</strong>. A <strong>Embraer</strong> digitalizou <strong>100%</strong> de seus processos de engenharia com a plataforma <strong>Embraer Digital Twin</strong>, reduzindo custos de desenvolvimento em <strong>23%</strong>. A <strong>ABNT NBR ISO 56000:2021</strong> padroniza a gestão da inovação digital. A <strong>Estratégia Brasileira de Transformação Digital (E-Digital)</strong>, Decreto 9.319/2018, estabelece diretrizes para a economia digital industrial.</p>"},{ti:"Plataformas Digitais Industriais e Marketplaces B2B",c:"<p>O mercado de <strong>plataformas digitais industriais B2B</strong> no Brasil atingiu <strong>R$ 48 bilhões</strong> em transações em 2024, com crescimento de <strong>42%</strong> ao ano (ABCOMM 2024). A <strong>Siemens Brasil</strong> opera o <strong>Siemens Xcelerator</strong>, plataforma digital que integra <strong>1.800 parceiros</strong> e <strong>4.200 soluções</strong> industriais, gerando receita de <strong>R$ 1,2 bilhão</strong> no Brasil em 2024. A <strong>Ambev</strong> lançou o <strong>BEES</strong>, marketplace B2B que conecta a indústria a <strong>800.000 pontos de venda</strong> no Brasil, com transações de <strong>R$ 18 bilhões</strong> em 2024. A <strong>Gerdau</strong> opera o <strong>Gerdau Digital</strong>, plataforma de venda de aço online com <strong>12.000 clientes</strong> ativos e faturamento digital de <strong>R$ 2,8 bilhões</strong>. A <strong>Braskem</strong> lançou o <strong>Braskem Digital Hub</strong> para comercialização de resinas, com <strong>3.400 clientes</strong> cadastrados. A <strong>ABNT NBR 16333:2021</strong> padroniza plataformas de comércio eletrônico industrial. A <strong>LGPD</strong> (Lei 13.709/2018) regula o tratamento de dados em plataformas B2B industriais.</p>"},{ti:"Big Data e Analytics na Indústria",c:"<p>O mercado de <strong>Big Data industrial</strong> no Brasil movimentou <strong>R$ 5,6 bilhões</strong> em 2024 (ABRADATA 2024), com <strong>72%</strong> das grandes indústrias utilizando análises avançadas. A <strong>Petrobras</strong> processa <strong>18 petabytes</strong> de dados por ano do pré-sal, utilizando análise preditiva para otimização de perfuração com economia de <strong>US$ 240 milhões</strong> anuais. A <strong>Vale</strong> opera o <strong>Centro de Excelência em Dados</strong> que analisa <strong>12 terabytes/dia</strong> de sensores de mineração, reduzindo paradas não programadas em <strong>34%</strong>. A <strong>WEG</strong> implementou plataforma de <strong>data lake</strong> que integra dados de <strong>280.000 motores</strong> conectados, gerando insights de manutenção preditiva com acurácia de <strong>94%</strong>. A <strong>Ambev</strong> utiliza machine learning para prever demanda com precisão de <strong>97%</strong>, otimizando produção em <strong>18 fábricas</strong>. A <strong>NR 34</strong> (Segurança em Plataformas de Dados) estabelece diretrizes para proteção de dados operacionais industriais. A <strong>ISO 8000-100:2016</strong> padroniza qualidade de dados industriais. A <strong>ABNT NBR ISO 55000:2014</strong> (Gestão de Ativos) orienta a utilização de analytics para gestão de ativos industriais.</p>"},{ti:"Inteligência Artificial na Produção Industrial",c:"<p>O investimento em <strong>Inteligência Artificial</strong> na indústria brasileira atingiu <strong>R$ 7,8 bilhões</strong> em 2024 (ABRIA 2024), com <strong>58%</strong> das empresas industriais utilizando alguma forma de IA. A <strong>Embraer</strong> desenvolveu sistema de <strong>IA generativa</strong> para projeto aerodinâmico, reduzindo tempo de simulação em <strong>85%</strong> e gerando designs com eficiência <strong>14% superior</strong>. A <strong>Siemens Brasil</strong> implantou <strong>IA preditiva</strong> em <strong>12 plantas</strong> industriais, com redução de paradas de linha em <strong>56%</strong>. A <strong>Vale</strong> utiliza visão computacional baseada em deep learning para classificação de minério em tempo real nas correias transportadoras de Carajás/PA, com precisão de <strong>99,2%</strong>. A <strong>Natura &Co</strong> utiliza IA generativa para desenvolvimento de fragrâncias, reduzindo o ciclo de P&D de <strong>18 meses</strong> para <strong>5 meses</strong>. A <strong>Petrobras</strong> treinou modelos de IA com <strong>2,8 milhões de imagens</strong> de dutos para detecção automática de anomalias. A <strong>Resolução ANPD 01/2024</strong> estabelece requisitos de ética e transparência para IA industrial. A <strong>ABNT NBR ISO/IEC 42001:2024</strong> padroniza sistemas de gestão de IA na indústria.</p>"},{ti:"Gêmeos Digitais (Digital Twins) Industriais",c:"<p>O mercado de <strong>gêmeos digitais</strong> na indústria brasileira cresceu <strong>68%</strong> em 2024, atingindo <strong>R$ 1,8 bilhão</strong> (ABIMA 2024). A <strong>Embraer</strong> opera gêmeos digitais de <strong>100%</strong> de seus modelos de aeronaves, com simulações que reduziram testes físicos em <strong>40%</strong> e economia estimada de <strong>R$ 480 milhões</strong> desde 2022. A <strong>Petrobras</strong> implementou gêmeos digitais em <strong>14 plataformas</strong> de petróleo, incluindo a <strong>P-78</strong> (Campo de Búzios), com simulação em tempo real de processos de separação óleo-gás, otimizando produção em <strong>8,5%</strong>. A <strong>WEG</strong> criou gêmeos digitais de motores elétricos para teste de desempenho virtual, reduzindo prototipagem em <strong>60%</strong>. A <strong>VW do Brasil</strong> utiliza gêmeo digital da fábrica de São Bernardo do Campo/SP para simular layout de produção, aumentando eficiência em <strong>22%</strong>. A <strong>ABNT NBR 17020:2024</strong> padroniza a implementação de gêmeos digitais industriais. A <strong>NR 12</strong> estabelece requisitos de segurança cibernética para gêmeos digitais conectados a máquinas e equipamentos industriais.</p>"},{ti:"Inclusão Digital e Capacitação para Economia Digital",c:"<p>O Brasil investiu <strong>R$ 2,4 bilhões</strong> em capacitação digital industrial em 2024 (MEC/MCTI 2024), formando <strong>240.000 profissionais</strong> em habilidades digitais. O <strong>SENAI</strong> formou <strong>85.000 alunos</strong> em cursos de transformação digital, com programas como <strong>SENAI 4.0</strong> presente em <strong>186 unidades</strong>. A <strong>WEG</strong> treinou internamente <strong>3.500 funcionários</strong> em competências digitais através da <strong>WEG Digital Academy</strong>, com investimento de <strong>R$ 18 milhões</strong>. A <strong>Ambev</strong> formou <strong>2.800 analistas</strong> de dados através do <strong>Ambev Data Academy</strong>. A <strong>Vale</strong> implantou o <strong>Vale Tech Program</strong> capacitando <strong>4.200 mineiros</strong> em operação remota e análise de dados. O programa <strong>Capacita Indústria 4.0</strong> do <strong>BNDES</strong> apoiou <strong>1.800 PMEs</strong> industriais com subsídios de até <strong>R$ 80.000</strong> para capacitação digital. A <strong>NR 01</strong> estabelece requisitos de capacitação continuada em tecnologias digitais para trabalhadores industriais. A <strong>ABNT NBR ISO 23005:2024</strong> padroniza competências digitais para a indústria 4.0/5.0, alinhada à <strong>ISO/IEC 27001:2022</strong> para segurança digital.</p>"}]},
    {d:3,n:"223",t:"Blockchain na Indústria",g:"Rastreabilidade e Contratos",s:"Aplicação de tecnologia de registro distribuído (DLT) e blockchain para rastreabilidade de cadeias produtivas, contratos inteligentes, certificação digital e transações seguras na indústria.",k:["Blockchain","Rastreabilidade","Contratos Inteligentes","Supply Chain","DLT"],b:[{ti:"Fundamentos de Blockchain Industrial",c:"<p>O mercado brasileiro de <strong>blockchain industrial</strong> movimentou <strong>R$ 890 milhões</strong> em 2024, com crescimento de <strong>64%</strong> ao ano (ABBC 2024). O Brasil possui <strong>187 empresas</strong> desenvolvendo soluções blockchain para indústria e <strong>48 projetos-piloto</strong> em operação. A <strong>Petrobras</strong> implementou blockchain para gestão de contratos de fornecedores do pré-sal, processando <strong>12.800 transações/mês</strong> na rede Hyperledger Fabric, com redução de custos administrativos de <strong>R$ 38 milhões</strong> ao ano. A <strong>Vale</strong> desenvolveu plataforma blockchain para rastreabilidade de minério de ferro, registrando <strong>2,4 milhões de toneladas</strong> rastreadas em 2024. O <strong>Banco Central do Brasil</strong> lançou o <strong>Real Digital (DREX)</strong> em 2024, com contratos inteligentes para transações industriais. A <strong>ABNT NBR ISO 22739:2023</strong> padroniza terminologia e conceitos de blockchain. A <strong>Lei 14.478/2022</strong> (Marco Legal dos Criptoativos) estabelece o arcabouço legal para blockchain industrial no Brasil.</p>"},{ti:"Rastreabilidade na Cadeia de Suprimentos",c:"<p>A <strong>rastreabilidade baseada em blockchain</strong> na indústria brasileira movimentou <strong>R$ 340 milhões</strong> em 2024 (CNI 2024). A <strong>JBS</strong> (São Paulo/SP) utiliza blockchain para rastrear <strong>100%</strong> da cadeia da carne bovina, do pasto ao ponto de venda, com <strong>4,8 milhões de animais</strong> rastreados em 2024 e certificação de origem em <strong>22 países</strong>. A <strong>Suzano</strong> implementou blockchain para certificação de celulose de florestas plantadas, com <strong>1,8 milhão de toneladas</strong> rastreadas e redução de fraudes de certificação em <strong>97%</strong>. A <strong>Klabin</strong> rastreia <strong>100%</strong> de sua produção de papel-cartão via blockchain, garantindo origem sustentável para clientes globais como <strong>Natura</strong> e <strong>Ambev</strong>. A <strong>Braskem</strong> rastreia resinas recicladas via blockchain para certificação de conteúdo reciclado, totalizando <strong>120.000 toneladas</strong> em 2024. A <strong>ABNT NBR ISO 22095:2021</strong> (Cadeia de Custódia) padroniza a rastreabilidade blockchain industrial. A <strong>NR 36</strong> estabelece requisitos de rastreabilidade de processos na indústria alimentícia com blockchain.</p>"},{ti:"Contratos Inteligentes (Smart Contracts) Industriais",c:"<p>O mercado de <strong>contratos inteligentes</strong> industriais no Brasil cresceu <strong>87%</strong> em 2024, com <strong>48.000 contratos</strong> executados via blockchain (ABBC/DREX 2024). A <strong>Vale</strong> implementou smart contracts para negociação de minério de ferro com <strong>14 siderúrgicas</strong> chinesas, automatizando pagamentos baseados em qualidade (teor de Fe, impurezas), processando <strong>US$ 2,8 bilhões</strong> em transações. A <strong>Petrobras</strong> utiliza contratos inteligentes para <strong>pagamentos automáticos</strong> a fornecedores de serviços offshore, com liquidação em <strong>D+0</strong> contra <strong>D+45</strong> do processo tradicional. A <strong>WEG</strong> desenvolveu smart contracts para contratos de manutenção de motores como serviço (MaaS), com <strong>1.200 contratos</strong> ativos e faturamento de <strong>R$ 65 milhões</strong>. A <strong>Gerdau</strong> utiliza contratos inteligentes para vendas de aço com precificação dinâmica baseada em índices de commodities. O <strong>Real Digital (DREX)</strong> do Banco Central processou <strong>R$ 180 milhões</strong> em smart contracts industriais em 2024. A <strong>Resolução BCB 310/2024</strong> estabelece diretrizes para contratos inteligentes no sistema financeiro industrial. A <strong>ABNT NBR ISO 23257:2022</strong> padroniza arquitetura de referência para contratos inteligentes.</p>"},{ti:"Tokenização de Ativos Industriais",c:"<p>A <strong>tokenização de ativos</strong> industriais no Brasil movimentou <strong>R$ 2,4 bilhões</strong> em 2024 (B3 2024). A <strong>Vale</strong> tokenizou <strong>US$ 340 milhões</strong> em recebíveis de exportação de minério via blockchain, com fracionamento para investidores institucionais. A <strong>Petrobras</strong> emitiu <strong>R$ 480 milhões</strong> em tokens de recebíveis de petróleo na plataforma <strong>Liqi</strong>, com liquidação em <strong>D+1</strong>. A <strong>Suzano</strong> realizou tokenização de <strong>créditos de carbono</strong> florestais, emitindo <strong>1,2 milhão de tokens</strong> equivalentes a toneladas de CO₂ na blockchain <strong>Polygon</strong>, com vendas de <strong>R$ 85 milhões</strong>. A <strong>Braskem</strong> tokenizou ativos de reciclagem química, permitindo rastreabilidade financeira de resíduos plásticos reciclados. A <strong>B3</strong> (Bolsa de Valores brasileira) lançou plataforma de tokenização de ativos do agronegócio industrial. A <strong>Resolução CVM 175/2022</strong> estabelece regras para ofertas públicas de tokens industriais. A <strong>ABNT NBR ISO 22739:2023</strong> padroniza a tokenização como ativo digital industrial.</p>"},{ti:"Certificação Digital e Procedência na Indústria",c:"<p>O mercado de <strong>certificação digital blockchain</strong> na indústria brasileira atingiu <strong>R$ 180 milhões</strong> em 2024. A <strong>Natura &Co</strong> emitiu <strong>28 milhões</strong> de certificados digitais blockchain para produtos cosméticos, garantindo autenticidade e rastreabilidade de ingredientes amazônicos, reduzindo falsificações em <strong>76%</strong>. A <strong>Ambev</strong> certificou <strong>1,8 bilhão</strong> de unidades de bebidas com QR codes blockchain, permitindo verificação de procedência por consumidores. A <strong>Embraer</strong> desenvolveu sistema de certificação digital para peças aeronáuticas, registrando <strong>340.000 componentes</strong> na blockchain para garantir procedência e histórico de manutenção. A <strong>Petrobras</strong> certifica combustíveis via blockchain, com <strong>12 bilhões de litros</strong> certificados digitalmente em 2024. A <strong>INMETRO</strong> reconhece certificações digitais blockchain para produtos industriais desde 2023 (Portaria 487/2023). A <strong>ABNT NBR ISO 17067:2022</strong> padroniza certificação digital de produtos. A <strong>NR 13</strong> estabelece requisitos para certificação digital blockchain de vasos de pressão e caldeiras na indústria.</p>"},{ti:"Regulação, Compliance e Privacidade em Blockchain Industrial",c:"<p>O arcabouço regulatório brasileiro para <strong>blockchain industrial</strong> inclui <strong>8 leis</strong> e <strong>14 resoluções</strong> específicas (2024). A <strong>LGPD</strong> (Lei 13.709/2018) estabelece requisitos de privacidade para blockchains públicos com dados pessoais, exigindo técnicas de anonimização e contratos inteligentes privacy-by-design. A <strong>ANPD</strong> emitiu a <strong>Resolução 02/2024</strong> com diretrizes para DLTs na indústria. A <strong>Petrobras</strong> implementou blockchain permissionada (Hyperledger Fabric) com <strong>14 nós</strong> validadores e criptografia AES-256, atendendo à <strong>LGPD</strong> e <strong>NR 37</strong>. A <strong>Vale</strong> utiliza blockchain com provas de conhecimento zero (zk-SNARKs) para transações confidenciais de minério, protegendo dados comerciais sensíveis. O <strong>Banco Central</strong> regula stablecoins usadas em transações industriais via <strong>Circular BCB 4.028/2024</strong>. A <strong>ABNT NBR ISO 22739:2023</strong> padroniza requisitos de governança e compliance para sistemas blockchain industriais. A <strong>ISO/IEC 27001:2022</strong> certifica a segurança da informação em plataformas blockchain industriais brasileiras.</p>"}]},
    {d:4,n:"224",t:"5G Industrial",g:"Conectividade Avançada",s:"Implementação de redes móveis de quinta geração (5G) para aplicações industriais, viabilizando comunicação ultra-rápida, baixa latência, massive IoT e fatiamento de rede para fábricas inteligentes.",k:["5G Industrial","Conectividade","IoT","Latência","Redes Privativas"],b:[{ti:"Panorama do 5G Industrial no Brasil",c:"<p>O Brasil atingiu <strong>28,4 milhões</strong> de acessos 5G em 2024 (ANATEL 2024), com <strong>5.420 municípios</strong> com cobertura. A <strong>faixa de 3,5 GHz</strong> (principal espectro 5G) está disponível em <strong>100%</strong> das capitais brasileiras. O <strong>5G industrial</strong> movimentou <strong>R$ 1,9 bilhão</strong> em 2024, com <strong>47 projetos-piloto</strong> em fábricas inteligentes. A <strong>WEG</strong> implementou a primeira <strong>rede 5G privativa</strong> industrial do Brasil em Jaraguá do Sul/SC, com <strong>12 small cells</strong> e latência de <strong>8 ms</strong>, conectando <strong>480 equipamentos</strong> industriais. A <strong>Embraer</strong> ativou rede 5G privativa em São José dos Campos/SP com <strong>18 estações</strong> internas para manufatura avançada, cobrindo <strong>240.000 m²</strong>. A <strong>ABNT NBR 17000:2024</strong> padroniza requisitos de redes 5G privativas para aplicações industriais. A <strong>Resolução ANATEL 740/2024</strong> estabelece regras para uso de espectro em redes privativas 5G industriais, com autorização para <strong>28 empresas</strong> em 2024.</p>"},{ti:"Redes Privativas 5G (NPN) na Indústria",c:"<p>O Brasil possui <strong>38 redes privativas 5G</strong> industriais ativas em 2024 (ABRASAT 2024), com investimento médio de <strong>R$ 4,2 milhões</strong> por implantação. A <strong>Vale</strong> implementou rede <strong>5G privativa</strong> na mina de Carajás/PA, com <strong>24 estações</strong> cobrindo <strong>200 km²</strong> para operação remota de caminhões autônomos (<strong>13 unidades</strong>), com latência de <strong>12 ms</strong> e throughput de <strong>1,2 Gbps</strong>. A <strong>Petrobras</strong> ativou rede 5G na <strong>P-77</strong> (Bacia de Santos), primeira plataforma de petróleo com 5G privativo, conectando <strong>3.800 sensores</strong> de monitoramento estrutural. A <strong>Volkswagen do Brasil</strong> implantou 5G privativo em <strong>3 fábricas</strong> (São Bernardo do Campo/SP, São Carlos/SP, Taubaté/SP), com <strong>42 estações</strong> 5G mmWave (26 GHz) para inspeção visual por IA. A <strong>Siemens Brasil</strong> fornece infraestrutura 5G para <strong>12 clientes</strong> industriais com plataforma <strong>Siemens 5G Industrial</strong>. A <strong>NR 10</strong> estabelece requisitos de compatibilidade eletromagnética para redes 5G privativas em ambientes industriais. A <strong>3GPP Release 17</strong> padroniza NR-U (5G em espectro não licenciado) para redes privativas industriais no Brasil.</p>"},{ti:"URLLC e Latência Ultrabaixa na Automação Industrial",c:"<p>O <strong>URLLC (Ultra-Reliable Low-Latency Communications)</strong> do 5G possibilita latências de <strong>1-5 ms</strong> em aplicações industriais críticas. A <strong>WEG</strong> implantou controle em malha fechada de motores elétricos via 5G URLLC em sua fábrica de Jaraguá do Sul/SC, com latência de <strong>3,2 ms</strong> e confiabilidade de <strong>99,9998%</strong>, substituindo cabeamento industrial e reduzindo custos de instalação em <strong>R$ 2,8 milhões</strong>. A <strong>Embraer</strong> utiliza 5G URLLC para soldagem robótica colaborativa, com sincronização de <strong>6 robôs</strong> com precisão de <strong>±0,1 mm</strong>. A <strong>Siemens Brasil</strong> desenvolveu sistema de controle de turbinas eólicas via 5G URLLC com tempo de ciclo de <strong>2 ms</strong> para ajuste de pitch das pás. A <strong>Mercedes-Benz do Brasil</strong> testa 5G URLLC para segurança funcional de AGVs (veículos guiados autônomos) com tempo de parada de emergência de <strong>5 ms</strong>. A <strong>ABNT NBR 17030:2024</strong> padroniza requisitos de latência para aplicações 5G industriais críticas. A <strong>NR 12</strong> foi atualizada (2024) para incluir requisitos de segurança funcional em sistemas controlados por 5G URLLC.</p>"},{ti:"Massive IoT e Sensoriamento 5G na Fábrica Inteligente",c:"<p>O <strong>5G massive IoT (mMTC)</strong> industrial brasileiro conectou <strong>2,8 milhões de dispositivos</strong> em 2024 (ABINEE 2024). A <strong>Ambev</strong> utiliza rede 5G mMTC em <strong>14 fábricas</strong> para monitoramento de <strong>24.000 sensores</strong> de temperatura, pressão e vibração em tanques de fermentação, com densidade de <strong>250.000 dispositivos/km²</strong>. A <strong>Braskem</strong> implementou sensoriamento 5G mMTC no Polo de Camaçari/BA, com <strong>12.800 sensores</strong> de emissões atmosféricas conectados em tempo real. A <strong>WEG</strong> desenvolveu plataforma de monitoramento de motores via 5G mMTC com <strong>180.000 dispositivos</strong> conectados, transmitindo dados de vibração e temperatura a cada <strong>100 ms</strong>. A <strong>Suzano</strong> utiliza 5G mMTC para monitoramento florestal com <strong>6.000 sensores</strong> de umidade e temperatura em plantios de eucalipto. A <strong>ABNT NBR 17045:2024</strong> padroniza requisitos de densidade de dispositivos mMTC para zonas industriais 5G. A <strong>NR 15</strong> estabelece limites de exposição a radiofrequência 5G em ambientes industriais, com máximo de <strong>10 W/m²</strong> para frequências acima de 6 GHz. A <strong>3GPP Release 17</strong> padroniza mMTC com densidade de <strong>1 milhão de dispositivos/km²</strong>.</p>"},{ti:"Fatiamento de Rede (Network Slicing) Industrial",c:"<p>O <strong>fatiamento de rede (network slicing)</strong> 5G permite múltiplas redes virtuais sobre a mesma infraestrutura física, com garantias de desempenho específicas. A <strong>Embraer</strong> implementou <strong>4 slices</strong> 5G em sua fábrica de São José dos Campos/SP: slice eMBB para AR/VR (<strong>1 Gbps</strong>), slice URLLC para robótica (<strong>3 ms</strong>), slice mMTC para sensoriamento (<strong>200.000 dispositivos/km²</strong>) e slice empresarial para escritórios. A <strong>Petrobras</strong> opera <strong>3 slices</strong> 5G na P-77, segregando tráfego crítico de segurança operacional do tráfego administrativo. A <strong>VW do Brasil</strong> utiliza slicing para separar redes de produção, logística e escritório na fábrica de Taubaté/SP, com orquestração automatizada via tecnologia <strong>NFV (Network Functions Virtualization)</strong>. A <strong>ABNT NBR 17060:2024</strong> padroniza a configuração de slices 5G para aplicações industriais. A <strong>NR 10</strong> estabelece requisitos de isolamento elétrico entre slices 5G em ambientes industriais classificados. A <strong>3GPP Release 18</strong> (2024) padroniza enhanced network slicing para indústria 5G com <strong>8 slices simultâneos</strong> por estação rádio base.</p>"},{ti:"Segurança Cibernética em Redes 5G Industriais",c:"<p>O Brasil investiu <strong>R$ 680 milhões</strong> em segurança cibernética 5G industrial em 2024 (ABRASAT 2024). A <strong>Petrobras</strong> implementou <strong>Security Operations Center (SOC) 5G</strong> no CENPES, monitorando <strong>28.000 eventos/segundo</strong> em redes 5G industriais, com detecção de ameaças em <strong>2,4 segundos</strong>. A <strong>Vale</strong> utiliza criptografia pós-quântica (<strong>CRYSTALS-Kyber</strong>) em sua rede 5G privativa de Carajás/PA, protegendo dados de operação remota de equipamentos. A <strong>Siemens Brasil</strong> desenvolveu o <strong>Siemens 5G Security Framework</strong>, implementado em <strong>12 clientes</strong> industriais, com firewalls 5G específicos para cada slice de rede. A <strong>WEG</strong> certificou sua rede 5G industrial conforme <strong>IEC 62443</strong> (Segurança Cibernética para Automação Industrial). O <strong>Centro de Defesa Cibernética (CDCiber)</strong> do Exército Brasileiro emitiu diretrizes para proteção de infraestruturas 5G industriais críticas. A <strong>NR 12</strong> (Anexo XII - Segurança Cibernética em Máquinas) estabelece requisitos de criptografia e autenticação para dispositivos conectados via 5G. A <strong>ISO/IEC 27001:2022</strong> certifica a gestão de segurança da informação em ambientes 5G industriais no Brasil.</p>"}]},
    {d:5,n:"225",t:"Realidade Aumentada e Virtual",g:"RA e RV Industrial",s:"Aplicações de Realidade Aumentada (RA), Realidade Virtual (RV) e Realidade Mista (RM) em processos industriais, incluindo treinamento imersivo, manutenção assistida, projeto colaborativo e inspeção remota.",k:["Realidade Aumentada","Realidade Virtual","Indústria 4.0","Treinamento Imersivo","Manutenção Assistida"],b:[{ti:"Panorama da RA e RV Industrial no Brasil",c:"<p>O mercado brasileiro de <strong>Realidade Aumentada e Virtual industrial</strong> movimentou <strong>R$ 1,2 bilhão</strong> em 2024, com crescimento de <strong>52%</strong> ao ano (ABRAV 2024). O Brasil possui <strong>186 empresas</strong> desenvolvendo soluções de RA/RV para indústria, empregando <strong>4.800 profissionais</strong> especializados. A <strong>Embraer</strong> lidera a adoção na América Latina, com <strong>14 aplicações</strong> imersivas em produção, engenharia e manutenção, gerando economia de <strong>R$ 38 milhões</strong> anuais. A <strong>WEG</strong> implementou RA em <strong>8 fábricas</strong> para assistência remota a manutenção de motores, reduzindo tempo de reparo em <strong>40%</strong>. A <strong>Siemens Brasil</strong> opera o <strong>Siemens Immersive Engineering Lab</strong> em São Paulo/SP, que desenvolve soluções de RV para <strong>24 clientes</strong> industriais. A <strong>ABNT NBR 17070:2024</strong> padroniza requisitos de sistemas de RA/RV para aplicações industriais. A <strong>NR 06</strong> estabelece requisitos de EPIs para uso de dispositivos de RA/RV em ambientes fabris, incluindo capacetes de segurança compatíveis.</p>"},{ti:"Treinamento Imersivo e Capacitação Industrial",c:"<p>O <strong>treinamento imersivo</strong> industrial no Brasil atendeu <strong>84.000 trabalhadores</strong> em 2024, com redução de tempo de treinamento em <strong>55%</strong> e retenção de conhecimento <strong>4x maior</strong> em comparação com métodos tradicionais (SENAI 2024). A <strong>Petrobras</strong> treinou <strong>12.000 operadores</strong> em VR para plataformas de petróleo no <strong>Centro de Treinamento Imersivo do CENPES</strong>, com simulação de <strong>48 cenários</strong> de emergência, reduzindo acidentes reais em <strong>67%</strong>. A <strong>Vale</strong> capacitou <strong>4.800 operadores</strong> de equipamentos de mineração em simuladores VR em Carajás/PA, com redução de danos a equipamentos em <strong>52%</strong>. A <strong>Embraer</strong> desenvolveu programa de treinamento em RV para montagem de fuselagem do <strong>E195-E2</strong>, com <strong>2.400 horas</strong> de simulação em 2024. O <strong>SENAI</strong> formou <strong>18.000 alunos</strong> em cursos com componentes de RV em <strong>86 laboratórios</strong> imersivos. A <strong>NR 12</strong> estabelece requisitos de segurança para treinamentos em VR que simulam operação de máquinas. A <strong>ISO 9241-391:2016</strong> padroniza requisitos ergonômicos de sistemas de realidade virtual para treinamento industrial.</p>"},{ti:"Manutenção Assistida por Realidade Aumentada",c:"<p>A <strong>manutenção assistida por RA</strong> gerou economia de <strong>R$ 320 milhões</strong> na indústria brasileira em 2024 (ABRAMAN 2024). A <strong>Petrobras</strong> implementou sistema de RA em <strong>14 plataformas</strong> para manutenção de equipamentos submarinos, com especialistas remotos orientando técnicos via óculos HoloLens 2, reduzindo deslocamentos em <strong>78%</strong> e tempo de reparo em <strong>45%</strong>. A <strong>WEG</strong> fornece assistência remota por RA para manutenção de transformadores em <strong>38 países</strong>, com <strong>1.200 chamados</strong> atendidos em 2024 e economia de <strong>R$ 8,5 milhões</strong> em viagens técnicas. A <strong>Embraer</strong> utiliza RA para inspeção de aeronaves, sobrepondo dados de sensores e históricos de manutenção na visão do inspetor, com detecção de anomalias <strong>34% mais rápida</strong>. A <strong>Gerdau</strong> treinou <strong>280 mantenedores</strong> em RA para manutenção de laminadores, reduzindo paradas não programadas em <strong>28%</strong>. A <strong>ABNT NBR 17080:2024</strong> padroniza sistemas de RA para manutenção industrial. A <strong>NR 13</strong> estabelece requisitos para uso de RA em inspeção de caldeiras e vasos de pressão.</p>"},{ti:"Projeto e Engenharia com Realidade Virtual",c:"<p>O uso de <strong>RV em engenharia</strong> no Brasil cresceu <strong>64%</strong> em 2024, com <strong>48 empresas</strong> utilizando design reviews imersivos (ABIMA 2024). A <strong>Embraer</strong> realiza <strong>100%</strong> dos design reviews de cabines de aeronaves em RV, reduzindo o número de protótipos físicos em <strong>72%</strong> e economizando <strong>R$ 24 milhões</strong> ao ano. A <strong>VW do Brasil</strong> desenvolve novos modelos em RV no <strong>Centro de Design Imersivo</strong> de São Bernardo do Campo/SP, com equipes colaborativas em <strong>6 países</strong> revisando modelos em tempo real. A <strong>WEG</strong> projeta motores elétricos em RV, permitindo visualização de fluxos magnéticos e térmicos em 3D imersivo, com redução de ciclo de design em <strong>35%</strong>. A <strong>Braskem</strong> utiliza RV para projeto de plantas petroquímicas, integrando modelos de engenharia 3D com simulações de processo. A <strong>ABNT NBR ISO 16739:2021</strong> (IFC - Industry Foundation Classes) padroniza modelos de engenharia para visualização em RV. A <strong>NR 18</strong> estabelece requisitos para uso de RV em projetos de segurança de plantas industriais, incluindo simulação de rotas de fuga e zonas de risco.</p>"},{ti:"Inspeção Remota e Controle de Qualidade com RA/RV",c:"<p>O mercado de <strong>inspeção remota com RA</strong> no Brasil movimentou <strong>R$ 180 milhões</strong> em 2024 (ABENDI 2024). A <strong>Petrobras</strong> utiliza RA para inspeção de dutos submarinos, com mergulhadores equipados com óculos RA que exibem dados de espessura e corrosão em tempo real, inspecionando <strong>1.200 km</strong> de dutos em 2024. A <strong>Embraer</strong> implementou sistema de inspeção por RA para controle de qualidade de pintura de aeronaves, com câmeras espectrais e sobreposição de padrões de tolerância, detectando defeitos de <strong>0,1 mm</strong>. A <strong>Vale</strong> utiliza drones com transmissão de vídeo 360° para inspeção remota de taludes de minas, com georreferenciamento em RA que mapeia <strong>380 km²</strong> por ano. A <strong>WEG</strong> desenvolveu RA para inspeção de enrolamentos de motores elétricos, com visão computacional que identifica falhas de isolamento com <strong>97%</strong> de precisão. A <strong>ABNT NBR 17090:2024</strong> padroniza sistemas de inspeção remota com RA na indústria. A <strong>NR 22</strong> (Segurança na Mineração) estabelece requisitos para uso de drones com RA em inspeção de frentes de lavra e taludes.</p>"},{ti:"Realidade Mista na Manufatura e Montagem",c:"<p>A <strong>realidade mista (RM)</strong> na manufatura brasileira movimentou <strong>R$ 240 milhões</strong> em 2024, com <strong>64 projetos</strong> implantados (ABRAV 2024). A <strong>Volkswagen do Brasil</strong> utiliza Microsoft HoloLens 2 em <strong>6 estações</strong> de montagem do <strong>Polo Track</strong>, projetando instruções de montagem sobre as peças físicas, reduzindo erros em <strong>76%</strong> e tempo de setup em <strong>32%</strong>. A <strong>Ambev</strong> implementou RM para comissionamento de linhas de envase, com operadores visualizando parâmetros de produção sobrepostos aos equipamentos reais, reduzindo tempo de start-up em <strong>40%</strong>. A <strong>Embraer</strong> desenvolveu sistema de RM para montagem de asas do <strong>E190-E2</strong>, com hologramas indicando sequência de parafusos e torques, eliminando <strong>100%</strong> dos erros de montagem. A <strong>Siemens Brasil</strong> utiliza RM para manufatura de painéis elétricos, com instruções holográficas que se adaptam ao nível de experiência do operador. A <strong>ABNT NBR 17100:2024</strong> padroniza interfaces de realidade mista para instruções de montagem industrial. A <strong>NR 17</strong> estabelece requisitos ergonômicos para uso prolongado de dispositivos de RM na linha de produção, com limite de <strong>4 horas</strong> contínuas de uso.</p>"}]}
  ];

  /* =========================================================================
     UTILITIES
     ========================================================================= */

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function debounce(fn, delay) {
    var timer;
    return function() {
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() { fn.apply(null, args); }, delay);
    };
  }

  /* =========================================================================
     THEME TOGGLE
     ========================================================================= */

  var themeToggle = document.getElementById('themeToggle');
  var mobileThemeToggle = document.getElementById('mobileThemeToggle');
  var html = document.documentElement;

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    var toggles = [themeToggle, mobileThemeToggle];
    toggles.forEach(function(t) {
      if (t) {
        t.setAttribute('aria-pressed', theme === 'dark');
        t.setAttribute('title', theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
      }
    });
    var metaTheme = document.querySelector('meta[name="theme-color"]:not([media])');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.setAttribute('name', 'theme-color');
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute('content', theme === 'dark' ? '#1A1512' : '#FDFBF7');
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('engpro-theme'); } catch(e) {}
    var theme = saved || getSystemTheme();
    applyTheme(theme);
  }

  function toggleTheme() {
    var current = html.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('engpro-theme', next); } catch(e) {}
  }

  initTheme();
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

  // Keyboard shortcut: T
  document.addEventListener('keydown', function(e) {
    if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      toggleTheme();
    }
  });

  /* =========================================================================
     NAVBAR — Scroll behavior + Mobile menu
     ========================================================================= */

  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var mobileNavOverlay = document.getElementById('mobileNavOverlay');
  var progressBar = document.getElementById('progressBar');

  function handleScroll() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 80);

    var h = document.documentElement;
    var pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (progressBar) progressBar.style.width = pct + '%';

    var scrollTop = document.getElementById('scrollTop');
    if (scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 600);

    // Active section
    var current = 'inicio';
    var sections = document.querySelectorAll('section[id]');
    sections.forEach(function(s) {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    document.querySelectorAll('.nav-link').forEach(function(a) {
      a.classList.toggle('active', a.getAttribute('data-section') === current);
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile nav
  function openMobileNav() {
    if (!mobileNavOverlay) return;
    mobileNavOverlay.hidden = false;
    mobileNavOverlay.offsetHeight; // force reflow
    mobileNavOverlay.classList.add('open');
    if (navToggle) {
      navToggle.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileNavOverlay) return;
    mobileNavOverlay.classList.remove('open');
    if (navToggle) {
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
    setTimeout(function() { mobileNavOverlay.hidden = true; }, 300);
  }

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      if (mobileNavOverlay.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(function(link) {
    link.addEventListener('click', closeMobileNav);
  });

  // Close mobile nav on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNavOverlay && mobileNavOverlay.classList.contains('open')) {
      closeMobileNav();
    }
  });

  /* =========================================================================
     SCROLL TO TOP
     ========================================================================= */

  var scrollTop = document.getElementById('scrollTop');
  if (scrollTop) {
    scrollTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =========================================================================
     SMOOTH SCROLL — Button with data-href
     ========================================================================= */

  document.querySelectorAll('[data-href]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = btn.getAttribute('data-href');
      var el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      var el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* =========================================================================
     COUNTER ANIMATION — Stats count-up
     ========================================================================= */

  function animateCounters() {
    document.querySelectorAll('.stat-num[data-count]').forEach(function(el) {
      var target = parseInt(el.dataset.count, 10);
      if (el.dataset.animated) return;
      el.dataset.animated = 'true';

      if (reduceMotion) {
        el.textContent = target;
        return;
      }

      var current = 0;
      var duration = 1500;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.floor(eased * target);
        el.textContent = value;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }
      requestAnimationFrame(step);
    });
  }

  /* =========================================================================
     TOPICS RENDERING — Bento Grid
     ========================================================================= */

  var topicsGrid = document.getElementById('topicsGrid');
  var searchInput = document.getElementById('searchInput');
  var searchClear = document.getElementById('searchClear');
  var searchEmpty = document.getElementById('searchEmpty');
  var searchHint = document.getElementById('searchHint');

  function renderTopics(filter) {
    if (!topicsGrid) return;
    filter = filter || '';
    topicsGrid.innerHTML = '';
    var q = normalize(filter);
    var found = 0;

    T.forEach(function(t) {
      var match = !filter ||
        normalize(t.t).indexOf(q) > -1 ||
        normalize(t.s).indexOf(q) > -1 ||
        normalize(t.g).indexOf(q) > -1 ||
        t.k.some(function(k) { return normalize(k).indexOf(q) > -1; }) ||
        t.n === q;

      if (filter && !match) return;
      found++;

      var card = document.createElement('div');
      card.className = 'topic-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('tabindex', '0');

      var title = t.d + '. ' + t.t;
      var desc = t.s;

      if (filter) {
        var re = new RegExp('(' + escapeRegex(q) + ')', 'gi');
        title = title.replace(re, '<span class="search-highlight">$1</span>');
        desc = desc.replace(re, '<span class="search-highlight">$1</span>');
      }

      card.innerHTML =
        '<div class="topic-card-inner">' +
          '<div class="card-num">Capítulo ' + t.n + '</div>' +
          '<h3>' + title + '</h3>' +
          '<p>' + desc + '</p>' +
          '<div class="card-topics">' +
            t.k.map(function(k) {
              var kk = k;
              if (filter) {
                var re2 = new RegExp('(' + escapeRegex(q) + ')', 'gi');
                kk = k.replace(re2, '<span class="search-highlight">$1</span>');
              }
              return '<span>' + kk + '</span>';
            }).join('') +
          '</div>' +
        '</div>';

      card.addEventListener('click', function() { openDetail(t.d); });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDetail(t.d);
        }
      });

      topicsGrid.appendChild(card);
    });

    if (searchEmpty) searchEmpty.hidden = found > 0 || !filter;
    if (searchHint) searchHint.textContent = filter ? found + ' resultado(s) encontrado(s)' : '';

    // Re-observe new cards for reveal animation
    if (!reduceMotion && window.gsap && window.ScrollTrigger) {
      gsap.fromTo('.topic-card:not(.animated)',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.topics-grid', start: 'top 85%' },
          onComplete: function() { document.querySelectorAll('.topic-card').forEach(function(c) { c.classList.add('animated'); }); }
        }
      );
    } else {
      document.querySelectorAll('.topic-card').forEach(function(c) { c.classList.add('animated'); });
    }
  }

  /* =========================================================================
     TOPIC DETAIL — Slide-over panel
     ========================================================================= */

  var topicDetail = document.getElementById('topicDetail');
  var detailTag = document.getElementById('detailTag');
  var detailTitle = document.getElementById('detailTitle');
  var detailDesc = document.getElementById('detailDesc');
  var detailContent = document.getElementById('detailContent');
  var detailClose = document.getElementById('detailClose');
  var topicDetailBackdrop = document.getElementById('topicDetailBackdrop');

  function openDetail(id) {
    var topic = null;
    for (var i = 0; i < T.length; i++) {
      if (T[i].d === id) { topic = T[i]; break; }
    }
    if (!topic || !topicDetail) return;

    detailTag.textContent = 'Capítulo ' + topic.n;
    detailTitle.textContent = topic.d + '. ' + topic.t;
    detailDesc.textContent = topic.s;

    var html = '';
    for (var j = 0; j < topic.b.length; j++) {
      html +=
        '<article class="detail-block">' +
          '<h4><span class="h-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></span> ' + topic.b[j].ti + '</h4>' +
          topic.b[j].c +
        '</article>';
    }
    detailContent.innerHTML = html;

    topicDetail.hidden = false;
    topicDetail.offsetHeight; // force reflow
    topicDetail.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Scroll to top of panel
    var panel = topicDetail.querySelector('.topic-detail-panel');
    if (panel) panel.scrollTop = 0;

    // Focus close button
    if (detailClose) detailClose.focus();
  }

  function closeDetail() {
    if (!topicDetail) return;
    topicDetail.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function() { topicDetail.hidden = true; }, 500);
  }

  if (detailClose) detailClose.addEventListener('click', closeDetail);
  if (topicDetailBackdrop) topicDetailBackdrop.addEventListener('click', closeDetail);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && topicDetail && topicDetail.classList.contains('open')) {
      closeDetail();
    }
  });

  /* =========================================================================
     SEARCH
     ========================================================================= */

  var searchTimer;
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      var v = this.value;
      if (searchClear) searchClear.hidden = v.length === 0;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function() { renderTopics(v); }, 200);
    });

    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        this.value = '';
        if (searchClear) searchClear.hidden = true;
        renderTopics('');
        this.blur();
      }
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', function() {
      if (searchInput) {
        searchInput.value = '';
        searchClear.hidden = true;
        renderTopics('');
        searchInput.focus();
      }
    });
  }

  /* =========================================================================
     FOOTER TOPIC LINKS
     ========================================================================= */

  document.querySelectorAll('[data-topic]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var id = parseInt(link.getAttribute('data-topic'), 10);
      // Map original n to d
      var topicMap = { 221: 1, 222: 2, 223: 3, 224: 4, 225: 5 };
      var d = topicMap[id] || id;
      openDetail(d);
    });
  });

  /* =========================================================================
     GSAP SCROLL ANIMATIONS
     ========================================================================= */

  function initGSAP() {
    if (!window.gsap || !window.ScrollTrigger || reduceMotion) {
      // Fallback: reveal everything immediately
      document.querySelectorAll('[data-reveal], [data-reveal-item]').forEach(function(el) {
        el.classList.add('revealed');
      });
      animateCounters();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Reveal animations
    document.querySelectorAll('[data-reveal]').forEach(function(el) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: function() { el.classList.add('revealed'); }
      });
    });

    // Stagger reveal items
    document.querySelectorAll('[data-reveal-item]').forEach(function(el, i) {
      el.style.setProperty('--stagger-index', i);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: function() { el.classList.add('revealed'); }
      });
    });

    // Hero parallax cards
    if (canHover) {
      document.querySelectorAll('[data-parallax]').forEach(function(el) {
        var depth = parseFloat(el.getAttribute('data-parallax'));
        gsap.to(el, {
          yPercent: -depth * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      });
    }

    // Hero stats counter trigger
    ScrollTrigger.create({
      trigger: '.hero-stats',
      start: 'top 85%',
      once: true,
      onEnter: animateCounters
    });

    // Hero gradient orbs float
    if (!reduceMotion) {
      gsap.to('.orb-1', {
        x: 50, y: 30, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut'
      });
      gsap.to('.orb-2', {
        x: -40, y: -20, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut'
      });
    }

    // Section header parallax
    document.querySelectorAll('.section-header').forEach(function(el) {
      gsap.from(el, {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });

    // Topic cards stagger
    gsap.fromTo('.topic-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.topics-grid', start: 'top 80%', once: true }
      }
    );

    // About cards
    gsap.fromTo('.about-card',
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-grid', start: 'top 80%', once: true }
      }
    );

    // Contact items
    gsap.fromTo('.contact-item',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-info', start: 'top 85%', once: true }
      }
    );

    // Hero entrance animation
    var heroTL = gsap.timeline();
    heroTL
      .from('.hero .eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
      .from('.hero-title', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .from('.hero-stats .stat', { opacity: 0, y: 20, duration: 0.5, stagger: 0.08, ease: 'power2.out' }, '-=0.3')
      .from('.hero-cta .btn', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.2')
      .from('.hero-visual .visual-card', { opacity: 0, scale: 0.9, rotation: -2, duration: 0.7, stagger: 0.15, ease: 'power3.out' }, '-=0.8');

    // ScrollTrigger refresh after fonts load
    if (document.fonts) {
      document.fonts.ready.then(function() {
        ScrollTrigger.refresh();
      });
    }
  }

  // Wait for GSAP to load (defer)
  window.addEventListener('load', function() {
    setTimeout(initGSAP, 100);
  });

  /* =========================================================================
     INIT
     ========================================================================= */

  renderTopics();

  // Contact form (prevent default, show success)
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var originalHTML = btn.innerHTML;
      btn.innerHTML = '<span>Mensagem Enviada!</span><span class="btn-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>';
      btn.style.background = 'var(--color-success)';
      setTimeout(function() {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // Magnetic button effect (hover only, fine pointer)
  if (canHover && !reduceMotion) {
    document.querySelectorAll('.btn-primary').forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px) scale(1.02)';
      });
      btn.addEventListener('mouseleave', function() {
        btn.style.transform = '';
      });
    });
  }

  // Cleanup temp files
  try {
    if (window.__originalIndex) delete window.__originalIndex;
  } catch(e) {}

})();
