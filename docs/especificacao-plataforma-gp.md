# Especificação — Plataforma de Gestão de Projetos Gerett

Área: **Ferramenta Organizacional** (`ferramentas.html`) · Aba "Gestão de Projetos"
Versão do documento: 1.0 · Ago/2026 · Estado: **v1 em produção** (estática, offline-first)

---

## 1. Conceito

| Papel | Descrição |
|---|---|
| **Entrada** | Uma ideia ou necessidade da organização (nome, patrocinador, gerente, orçamento e prazo preliminares). |
| **Processamento** | A plataforma conduz o usuário por 18 módulos que cobrem todo o ciclo PMBOK — iniciação, diagnóstico, planejamento, execução, controle e encerramento. |
| **Saída** | Projeto estruturado, documentado, planejado, executável e monitorável — exportável em Markdown (TAP e Plano Completo) e imprimível (relatório final). |

Princípios: dados 100% locais no navegador (sem servidor, sem login), um projeto por vez no contexto ativo, múltiplos projetos cadastrados, coerência visual com o design system Gerett.

## 2. Metodologia de gestão adotada

- **Base:** PMBOK (grupos de processos Iniciação → Planejamento → Execução → Monitoramento & Controle → Encerramento).
- **Técnicas incorporadas:** EAP/WBS (níveis 1–3), Método do Caminho Crítico (CPM com folgas), Gantt com linha-base, Valor Agregado (EVM completo), Matriz Probabilidade × Impacto (5×5), RACI, SWOT, Matriz Poder × Interesse, Kanban de execução, fluxo formal de Solicitação de Mudança.
- **Filosofia:** o usuário não precisa saber previamente qual instrumento usar; os módulos são apresentados na ordem do ciclo e o Dashboard indica os próximos passos automaticamente (`nextSteps`).

## 3. Arquitetura

```
ferramentas.html
├── Tab switcher (GP ⇄ PDP, persistido em localStorage 'gerett_tool')
├── #tool-gp  ──> #gpRoot          (app GP renderizado aqui)
├── #tool-pdp ──> #pdpRoot         (app PDP existente, intacto)
├── #gpModalRoot / #gpToastRoot    (modais e toasts do GP)
└── #gpPrintRoot                   (documento de impressão)
     ↑
assets/js/gp.js   (IIFE única, ~108 KB, sem dependências)
assets/css/ferramentas.css  (camada .gp-ui compartilhada com PDP)
```

- **Renderização:** template strings + re-render total por estado; delegação de eventos (clique, submit, change) nas raízes.
- **Persistência:** `localStorage` chave `gerett_gp_v1` — JSON `{ projects: [...], curId }`, gravado a cada mutação.
- **Sem backend.** Fase 2 contempla sincronização opcional (ver §10).

## 4. Módulos (18 implementados × proposta de 15)

| # Proposta | Módulo implementado (id) | Grupo na navegação |
|---|---|---|
| Dashboard executivo | `dashboard` — saúde semafórica, KPIs, próximos passos, top riscos | Visão geral |
| 1 Cadastro/configuração | `cadastro` — projetos múltiplos, renomear, excluir (com confirmação) | Iniciação |
| 2 Iniciação | `tap` — TAP completo (justificativa, problema/oportunidade, objetivos gerais e específicos, benefícios, premissas, restrições, requisitos iniciais, stakeholders iniciais, critérios de sucesso, gate de aprovação) | Iniciação |
| 3 Diagnóstico organizacional | `diagnostico` — ambiente interno/externo, fatores organizacionais, SWOT 4 quadrantes | Planejamento |
| 4 Stakeholders | `stakeholders` — registro + matriz Poder × Interesse (Gerenciar de perto / Manter satisfeito / Manter informado / Monitorar), expectativas e estratégia por stakeholder | Planejamento |
| 5 Escopo e requisitos | `escopo` — declaração, entregáveis, critérios de aceitação, exclusões, requisitos | Planejamento |
| 6 EAP/WBS | `eap` — árvore níveis 1–3 (promover/rebaixar/remover), export; botão "criar atividades a partir dos pacotes" | Planejamento |
| 7 Cronograma | `cronograma` — atividades, dependências, marcos, duração, CPM (ES/EF/LS/LF/folga/caminho crítico), Gantt com linha-base, baseline | Planejamento |
| 8 Custos | `custos` — estimativas por categoria, BAC, reserva de contingência, linha-base de custos | Planejamento |
| 9 Recursos | `recursos` — pessoas/equipamentos/materiais/serviços com custo unitário e responsabilidade | Planejamento |
| (4) Matriz de responsabilidades | `raci` — atividades × papéis, select R/A/C/I por célula | Planejamento |
| 10 Riscos | `riscos` — causa/evento/consequência, P×I→severidade, responsável, estratégia, contingência, gatilho, status; matriz de calor 5×5 | Planejamento |
| 11 Qualidade | `qualidade` — padrões, indicadores, checklists, inspeções/testes, não conformidades, ações corretivas/preventivas | Planejamento |
| 12 Comunicação | `comunicacao` — quem, o quê, quando, frequência, canal, remetente, destinatário | Planejamento |
| 12 Aquisições | `aquisicoes` — necessidade, especificação, fornecedor, cotações, critérios, contrato, SLA, acompanhamento | Planejamento |
| 13 Execução | `execucao` — Kanban 5 colunas (Não iniciada / Em andamento / Concluída / Atrasada / Bloqueada), responsável, prazo, evidência, aprovação | Execução & Controle |
| 14 Controle & mudanças | `controle` — PV/EV/AC/CPI/SPI/EAC/ETC/VAC/CV/SV, registro de solicitações de mudança com análise de impacto (escopo/prazo/custo/recursos/qualidade/riscos/benefícios) e decisão | Execução & Controle |
| 15 Encerramento & conhecimento | `encerramento` — aceite final, encerramento contratual/financeiro, liberação da equipe, arquivamento, lições aprendidas, avaliação de benefícios, relatório final | Encerramento |
| Governança (acima dos 15) | Parcialmente embutida: gates de aprovação do TAP, fluxo de mudanças, confirmações destrutivas, auditoria leve via `updatedAt`. Permissões/versões/auditoria formal → Fase 2 (§10). | transversal |

> PESTEL formal como checklist dedicado e "fluxo de desembolso" por período estão no backlog (§10).

## 5. Banco de dados (schema `gerett_gp_v1`)

```jsonc
{
  "projects": [ { /* Project */ } ],
  "curId": "p_xxxxxxxx"
}
```

### Project (chaves reais do código)

| Chave | Conteúdo |
|---|---|
| `id, name, sponsor, manager, idea, status, createdAt, updatedAt` | identificação e ciclo de vida |
| `budgetPrelim, deadlinePrelim` | preliminares da iniciação |
| `tap` | justificativa, problema, objGeral, objEsp[], beneficios[], premissas[], restricoes[], reqsIniciais[], stkhIniciais[], criteriosSucesso[], aprovado |
| `amb` | interno[], externo[], fatores[], swot `{ s[], w[], o[], t[] }` |
| `stkh[]` | nome, papel, poder(1-5), interesse(1-5), expectativas, estrategia, responsavel |
| `scope` | declaracao, entregaveis[], criterios[], exclusoes[], requisitos[] |
| `eap[]` | `{ id, label, lvl(1-3) }` |
| `sched` | `acts[] { id, nome, dur, deps[], marco, resp, baselineStart/End?, status, pct }`, `baseline` (snapshot ES/EF), `blDate` |
| `costs` | items[] (categoria, descrição, valor), contingency % |
| `res[]` | tipo, nome, unidade, custoUnit, qtd, obs |
| `raci` | rows[] (atividade) × cols[] (papel) com valores R/A/C/I |
| `risks[]` | causa, evento, consequencia, prob(1-5), imp(1-5), resp, estrategia, contingencia, gatilho, status |
| `qual` | padroes[], indicadores[], checklists[], inspecoes[], nc[] (não conformidades + ações corretiva/preventiva) |
| `comms[]` | informacao, de, para, frequencia, canal |
| `proc[]` | necessidade, especificacao, fornecedor, cotacao, criterios, contrato, sla, status, avaliacao |
| `chg[]` | descricao, impactos{escopo,prazo,custo,recursos,qualidade,riscos,beneficios}, decisao |
| `evm` | pv, ev, ac (entrada manual; derivados calculados) |
| `lessons[]`, `closing` | lições aprendidas e aceite/encerramentos |

## 6. Telas e fluxos

**Shell:** sidebar sticky com grupos (Visão geral / Iniciação / Planejamento / Execução & Controle / Encerramento); cabeçalho com seletor de projeto + mini-semafórico de saúde + ações (exportar plano .md, imprimir, encerrar); título do módulo; conteúdo em cards.

**Fluxo primário (ideia → projeto):**
1. Estado vazio → "Criar primeiro projeto" → modal de configuração (nome*, patrocinador, gerente, orçamento, prazo).
2. TAP → preencher listas via editor inline → marcar gate "Aprovado".
3. Diagnóstico → SWOT → Stakeholders → Escopo → EAP (botão gera rascunho do cronograma) → Cronograma (dependências + CPM + baseline) → Custos → Recursos → RACI → Riscos → Qualidade → Comunicação → Aquisições.
4. Execução → arrastar atividade entre status (botões ◀ ▶) → pct automático (concluída=100, bloqueada mantém, não iniciada=0).
5. Controle → lançar PV/EV/AC mensalmente; registrar mudanças.
6. Dashboard → acompanhar saúde; Encerramento → lições + aceite → exportar relatório final (.md/impressão).

**Padrões de UI:** modais para formulários compostos (atividade, risco, mudança); toasts para feedback; confirmação em destruição; empty states orientados à ação; tabelas com scroll horizontal em mobile; alvos ≥40px.

## 7. Regras de negócio (motor de cálculo)

### CPM (cronograma)
- Ordenação topológica (Kahn); ciclo detectado ⇒ aviso, sem cálculo.
- ES = máx(EF dos predecessores); EF = ES + duração. Passo inverso: LF = mín(LS sucessores); LS = LF − duração. Folga = LS − ES. Crítico = folga 0. Duração total = máx(EF).

### EVM (controle)
`BAC = Σ custos + reserva` · `CPI = EV/AC` · `SPI = EV/PV` · `EAC = BAC·(AC/EV)` · `ETC = EAC−AC` · `VAC = BAC−EAC` · `CV = EV−AC` · `SV = EV−PV`. Divisões por zero ⇒ indicador indisponível (NaN tratado na UI).

### Saúde (dashboard, semáforo g/y/r)
- **Prazo:** atrasadas⇒vermelho; bloqueadas⇒amarelo; senão verde.
- **Custo:** CPI<0,95⇒vermelho; <1⇒amarelo; AC>BAC⇒amarelo; senão verde.
- **Escopo:** mudanças pendentes de decisão⇒amarelo.
- **Riscos:** algum severidade≥20⇒vermelho; ≥12⇒amarelo.
- **Qualidade:** NC abertas⇒amarelo.
- **Recursos:** recursos sem responsável vinculado⇒amarelo.
- **Progresso:** média ponderada pela duração das atividades.

### Riscos
`severidade = prob × impacto`; faixas: ≤6 verde · 8–12 amarelo · ≥15 vermelho; célula da matriz 5×5 colorida pelas mesmas faixas.

### Execução (Kanban)
Transição concluída⇒100% · não iniciada⇒0% · em andamento/atrasada/bloqueada⇒50% se anterior era 0/100 (editável). Dependências deduplicadas no salvamento.

### Mudanças
Fluxo: Solicitação → Análise de impacto (7 dimensões) → Decisão (aplicada/rejeitada) → comunicação via toast + atualização de `updatedAt`.

### Governança embutida
Confirmação explícita antes de excluir projeto/itens críticos; baseline de escopo/prazo/custos só é sobrescrita por ação consciente ("rebaseline"); gate do TAP registra aprovação.

## 8. Exportação, impressão e PDF

- `Exportar TAP (.md)` e `.md` do plano — tabelas Markdown geradas por `mdTable`.
- **PDF direto (botão "PDF")** — motor compartilhado `assets/js/export-pdf.js` (`GerettPDF.fromHTML`): carrega html2canvas + jsPDF sob demanda (cdnjs), renderiza o documento off-screen em estilo A4 tipográfico e fatia em páginas; disponível para **Plano completo** (cabeçalho do app) e **Relatório final** (Encerramento). Sem conexão ⇒ fallback com aviso.
- **Imprimir** — GP: `printContent` constrói o documento em `#gpPrintRoot` + classe `html.gp-printing` (TAP, Diagnóstico, Plano completo e Relatório final). PDP: cada documento gerável tem botões `.md`, **PDF (download real)** e Imprimir (popup formatado); no editor há "Baixar PDF" que converte o Markdown (títulos, tabelas, listas) via `mdToHtml`.
- CSS de impressão escopado não interfere entre os dois apps.

## 9. Critérios de aceitação v1 (todos atendidos)

Funciona offline · múltiplos projetos · CPM com detecção de ciclo · Gantt + baseline · EVM com 7 índices · matriz de calor · RACI editável · Kanban 5 estados · mudanças com impacto 7D · exportações .md · impressão isolada · tema claro/escuro · responsivo (sidebar → chips <900px) · acessibilidade (roles tablist/tabpanel, aria-live, labels).

## 10. Roadmap Fase 2

| Item | Descrição | Prioridade |
|---|---|---|
| **Assistente de Projeto** | Wizard guiado por perguntas ("Quero implantar X em N meses"): responde → pré-preenche TAP, sugere EAP típica do domínio, riscos comuns e marcos; nunca inventa dados — pergunta quando faltar informação. | Alta |
| **Governança formal** | Perfis/permissões (sponsor, PM, equipe), log de auditoria por campo, versionamento/snapshot restaurável do projeto. | Alta |
| **PESTEL dedicado** | Checklist político/econômico/social/tecnológico/legal/ambiental dentro do Diagnóstico. | Média |
| **Fluxo de desembolso** | Curva S e distribuição do orçamento por período. | Média |
| **Aquisições avançadas** | Comparação lado a lado de cotações, avaliação pós-compra do fornecedor. | Média |
| **Multiusuário/sync** | Export/import JSON por projeto; depois, backend opcional (Supabase) com conflito last-write-wins. | Média |
| **Notificações/gatilhos** | Alertas de gatilho de risco vencido e atividade atrasada ao abrir a página. | Baixa |

---
*Implementação de referência: `assets/js/gp.js` · estilos `.gp-ui` em `assets/css/ferramentas.css` · shell em `ferramentas.html`.*
