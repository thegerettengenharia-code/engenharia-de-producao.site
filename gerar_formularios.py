#!/usr/bin/env python3
"""
Gerador de Formulários Técnicos — Engenharia de Produção
Padrão ABNT | Gerett — Biblioteca Organizacional
Gera 15 formulários HTML prontos para impressão/conversão em PDF.
"""

import os
import datetime

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "assets", "downloads", "formularios")
TODAY = datetime.date.today().strftime("%d/%m/%Y")

# ─── CSS ABNT BASE ───
ABNT_CSS = """
@page {
  size: A4 portrait;
  margin: 3cm 2cm 2cm 2cm;
}
@media print {
  body { margin: 0; padding: 0; }
  .no-print { display: none !important; }
  .page-break { page-break-before: always; }
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-size: 11pt;
  line-height: 1.5;
  color: #1a1a1a;
  background: #fff;
  padding: 30px;
  max-width: 210mm;
  margin: 0 auto;
}
.header {
  border-bottom: 2px solid #003366;
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.header-left h2 {
  font-size: 13pt;
  color: #003366;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.header-left p {
  font-size: 9pt;
  color: #555;
}
.header-right {
  text-align: right;
  font-size: 9pt;
  color: #555;
}
.doc-title {
  text-align: center;
  margin: 30px 0 10px;
}
.doc-title h1 {
  font-size: 16pt;
  color: #003366;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border-bottom: 3px solid #003366;
  padding-bottom: 8px;
  display: inline-block;
}
.doc-subtitle {
  text-align: center;
  font-size: 10pt;
  color: #666;
  margin-bottom: 25px;
}
.doc-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 20px;
  font-size: 9.5pt;
  margin-bottom: 20px;
  padding: 12px 16px;
  background: #f5f7fa;
  border-left: 3px solid #003366;
  border-radius: 0 4px 4px 0;
}
.doc-info span { color: #333; }
.doc-info strong { color: #003366; }
table {
  width: 100%;
  border-collapse: collapse;
  margin: 12px 0;
  font-size: 9.5pt;
}
th, td {
  border: 1px solid #999;
  padding: 7px 10px;
  text-align: left;
  vertical-align: top;
}
th {
  background: #003366;
  color: #fff;
  font-weight: 700;
  font-size: 9pt;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
tr:nth-child(even) { background: #f8f9fb; }
tr:hover { background: #eef1f6; }
.field-blank {
  border-bottom: 1px solid #999;
  min-height: 22px;
  display: inline-block;
  min-width: 120px;
}
.section-title {
  font-size: 11pt;
  font-weight: 700;
  color: #003366;
  margin: 18px 0 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid #ccc;
}
.footer-doc {
  margin-top: 30px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  font-size: 8pt;
  color: #888;
  display: flex;
  justify-content: space-between;
}
.signature-block {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.signature-line {
  text-align: center;
  padding-top: 50px;
  border-top: 1px solid #333;
  font-size: 9.5pt;
}
.signature-line .name { font-weight: 700; }
.signature-line .role { font-size: 8.5pt; color: #666; }
.note {
  font-size: 8.5pt;
  color: #666;
  font-style: italic;
  margin: 8px 0;
  padding: 8px 12px;
  background: #fffde7;
  border-left: 3px solid #f9a825;
  border-radius: 0 3px 3px 0;
}
.checklist-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.checklist-item input[type="checkbox"] {
  width: 14px;
  height: 14px;
  accent-color: #003366;
}
.priority-high { color: #c62828; font-weight: 700; }
.priority-med { color: #e65100; font-weight: 600; }
.priority-low { color: #2e7d32; }
.rating-bar {
  display: flex;
  gap: 2px;
}
.rating-dot {
  width: 16px;
  height: 16px;
  border: 1px solid #999;
  border-radius: 50%;
  display: inline-block;
}
"""

HTML_WRAPPER = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Gerett</title>
  <style>{css}</style>
</head>
<body>
{content}
  <div class="footer-doc">
    <span>Gerett — Biblioteca Organizacional</span>
    <span>Documento elaborado em {date}</span>
    <span>Página 1 de 1</span>
  </div>
</body>
</html>"""


def wrap(title, content):
    return HTML_WRAPPER.format(title=title, css=ABNT_CSS, content=content, date=TODAY)


# ══════════════════════════════════════════════════════════════
#  1. FMEA — Análise de Modos de Falha
# ══════════════════════════════════════════════════════════════
def gen_fMEA():
    content = """
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Controle de Qualidade</p>
  </div>
  <div class="header-right">
    <p>Documento: FMEA-PRO-001</p>
    <p>Rev.: 00 | """ + TODAY + """</p>
  </div>
</div>

<div class="doc-title"><h1>Análise de Modos e Efeitos de Falha — FMEA de Processo</h1></div>
<div class="doc-subtitle">Failure Mode and Effects Analysis — AIAG FMEA Handbook, 4ª Edição</div>

<div class="doc-info">
  <span><strong>Produto/Componente:</strong> <span class="field-blank"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Número da Peça:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Elaboração:</strong> """ + TODAY + """</span>
  <span><strong>Revisão do Desenho:</strong> <span class="field-blank"></span></span>
  <span><strong>Equipe FMEA:</strong> <span class="field-blank"></span></span>
  <span><strong>Fabricante:</strong> <span class="field-blank"></span></span>
  <span><strong>Nº de Página:</strong> 1 de ___</span>
</div>

<div class="note">Classificação de Severidade (S): 1–10 | Ocorrência (O): 1–10 | Detecção (D): 1–10. NRP = S × O × D. Ação recomendada para NRP ≥ 100 (ação urgente) ou S ≥ 8.</div>

<table>
  <thead>
    <tr>
      <th style="width:3%">#</th>
      <th style="width:10%">Função / Requisito do Processo</th>
      <th style="width:10%">Modo de Falha Potencial</th>
      <th style="width:10%">Efeito(s) da Falha</th>
      <th style="width:3%">S</th>
      <th style="width:8%">Causa(s) / Mecanismo(s) da Falha</th>
      <th style="width:3%">O</th>
      <th style="width:8%">Controles Atuais de Prevenção</th>
      <th style="width:8%">Controles Atuais de Detecção</th>
      <th style="width:3%">D</th>
      <th style="width:4%">NRP</th>
      <th style="width:5%">Class.</th>
      <th style="width:8%">Ação Recomendada</th>
      <th style="width:6%">Responsável / Prazo</th>
      <th style="width:3%">S₂</th>
      <th style="width:3%">O₂</th>
      <th style="width:3%">D₂</th>
      <th style="width:4%">NRP₂</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>4</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>5</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>6</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>7</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>8</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>9</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>10</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="section-title">Legenda de Classificação (AP — Action Priority)</div>
<table>
  <thead><tr><th>NRP</th><th>Classificação</th><th>Ação Necessária</th></tr></thead>
  <tbody>
    <tr><td class="priority-high">≥ 200</td><td>Alta</td><td>Ação corretiva urgente. Revisão imediata do processo.</td></tr>
    <tr><td class="priority-med">100 – 199</td><td>Média</td><td>Ação corretiva necessária. Definir plano de ação com prazo.</td></tr>
    <tr><td class="priority-low">＜ 100</td><td>Baixa</td><td>Ação opcional. Monitorar e reavaliar na próxima revisão.</td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Responsável pela Análise FMEA</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Aprovador / Gerente de Qualidade</div></div>
</div>
"""
    return wrap("FMEA — Análise de Modos e Efeitos de Falha", content)


# ══════════════════════════════════════════════════════════════
#  2. PPAP — Production Part Approval Process
# ══════════════════════════════════════════════════════════════
def gen_PPAP():
    items = [
        ("1", "Registro de Solicitação de Registro (2.1)", "Carta de solicitação do cliente"),
        ("2", "Aprovação de Desenho (2.2)", "Desenho revisado com todas as alterações incorporadas"),
        ("3", "Aprovação de Alteração de Desenho (2.3)", "Documentação de todas as alterações não incorporadas"),
        ("4", "Diagrama de Fluxo do Processo (3.1)", "Mapa do fluxo do processo com inspeções e controle"),
        ("5", "Diagrama de Ishikawa / Análise de Causa-Raiz (3.2)", "Análise dos potenciais modos de falha do processo"),
        ("6", "Plano de Controle (3.3)", "Plano de controle da fase de pré-lote e de produção"),
        ("7", "Estudo de Capacidade do Processo (3.4)", "Cp, Cpk, Pp, Ppk paracaracterísticas críticas (≥1.67)"),
        ("8", "Análise de Medição (3.5)", "Estudo R&R para equipamentos de medição utilizados"),
        ("9", "Estudo de Análise de Dimensional (3.6)", "Relatório de medição dimensional (balizas, CMM)"),
        ("10", "Relatório de Ensaios / Testes de Materiais (3.7)", "Resultados de laboratório conforme especificação"),
        ("11", "Processo de Aprovação Inicial (3.8)", "Evidência de aprovação da fase inicial de produção"),
        ("12", "Partes Produzidas (3.9)", "Amostras da produção inicial para avaliação do cliente"),
        ("13", "Registro de Amostra (3.10)", "Etiquetas e rastreabilidade das amostras enviadas"),
        ("14", "Requisitos Específicos do Cliente (3.11", "Atender a requisitos documentados no manual do cliente"),
        ("15", "Registro de Demonstração de Habilidade (3.12)", "Evidência de capacidade do processo nas características-chave"),
        ("16", "Análise de Material de Embalagem (3.13)", "Relatório de desempenho de embalagem de transporte"),
        ("17", "Relatório de Conformidade (3.14)", "Declaração formal de atendimento a todos os requisitos"),
        ("18", "Submissão de Ficheiro Mestre (3.15)", "Ficheiro mestre com toda a documentação PPAP"),
    ]
    rows = ""
    for num, item, desc in items:
        rows += f"""
    <tr>
      <td style="text-align:center;width:5%">{num}</td>
      <td style="width:8%"><input type="checkbox" style="width:14px;height:14px;accent-color:#003366"></td>
      <td style="width:8%"><input type="checkbox" style="width:14px;height:14px;accent-color:#003366"></td>
      <td style="width:8%"><input type="checkbox" style="width:14px;height:14px;accent-color:#003366"></td>
      <td style="width:8%"><input type="checkbox" style="width:14px;height:14px;accent-color:#003366"></td>
      <td style="width:25%">{item}</td>
      <td style="width:38%">{desc}</td>
    </tr>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Qualidade</p>
  </div>
  <div class="header-right">
    <p>Documento: PPAP-CHK-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>PPAP — Nível 3 — Checklist de Submissão</h1></div>
<div class="doc-subtitle">Production Part Approval Process — Conforme AIAG PPAP Manual, 4ª Edição</div>

<div class="doc-info">
  <span><strong>Fornecedor:</strong> <span class="field-blank"></span></span>
  <span><strong>Cliente:</strong> <span class="field-blank"></span></span>
  <span><strong>Nº da Peça:</strong> <span class="field-blank"></span></span>
  <span><strong>Revisão:</strong> <span class="field-blank"></span></span>
  <span><strong>Descrição:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Submissão:</strong> {TODAY}</span>
  <span><strong>Nº da Solicitação:</strong> <span class="field-blank"></span></span>
  <span><strong>Nível de Submissão:</strong> Nível 3</span>
</div>

<div class="note">Nível 3: Amostras representativas do lote de produção + toda a documentação completa conforme itens abaixo.</div>

<table>
  <thead>
    <tr>
      <th style="width:5%">#</th>
      <th style="width:8%">A</th>
      <th style="width:8%">R</th>
      <th style="width:8%">N/A</th>
      <th style="width:8%">S</th>
      <th style="width:25%">Item de Submissão</th>
      <th style="width:38%">Descrição / Observação</th>
    </tr>
  </thead>
  <tbody>{rows}
  </tbody>
</table>

<div class="section-title">Legenda</div>
<table>
  <thead><tr><th>Sigla</th><th>Significado</th></tr></thead>
  <tbody>
    <tr><td><strong>A</strong></td><td>Aprovado — o item atende aos requisitos</td></tr>
    <tr><td><strong>R</strong></td><td>Rejeitado — o item não atende; ação corretiva necessária</td></tr>
    <tr><td><strong>N/A</strong></td><td>Não Aplicável — o item não se aplica a esta submissão</td></tr>
    <tr><td><strong>S</strong></td><td>Suplementar — item em processo de conclusão; será entregue posteriormente</td></tr>
  </tbody>
</table>

<div class="section-title">Decisão de Aprovação</div>
<div class="doc-info">
  <span><strong>☐ APROVADO</strong> — Todos os itens atendidos. Peças aprovadas para fornecimento.</span>
  <span><strong>☐ APROVADO CONDICIONAL</strong> — Aprovado com ressalvas conforme anexo.</span>
  <span><strong>☐ REJEITADO</strong> — Ação corretiva obrigatória antes da nova submissão.</span>
</div>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Coordenador de Qualidade — Fornecedor</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Engenheiro de Qualidade — Cliente</div></div>
</div>
"""
    return wrap("PPAP — Checklist de Submissão Nível 3", content)


# ══════════════════════════════════════════════════════════════
#  3. Relatório 8D
# ══════════════════════════════════════════════════════════════
def gen_8D():
    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Controle de Qualidade</p>
  </div>
  <div class="header-right">
    <p>Documento: 8D-REL-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Relatório 8D — Oito Disciplinas para Resolução de Problemas</h1></div>
<div class="doc-subtitle">Conforme methodology 8D — AIAG</div>

<div class="doc-info">
  <span><strong>Nº do Relatório:</strong> 8D-____-</span>
  <span><strong>Data de Abertura:</strong> {TODAY}</span>
  <span><strong>Cliente:</strong> <span class="field-blank"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Produto/Peça:</strong> <span class="field-blank"></span></span>
  <span><strong>Nº da NC:</strong> <span class="field-blank"></span></span>
  <span><strong>Lote/Série:</strong> <span class="field-blank"></span></span>
  <span><strong>Prazo para Resposta:</strong> <span class="field-blank"></span></span>
</div>

<table>
  <tbody>
    <tr>
      <th style="width:18%;background:#003366;color:#fff">D1 — Formação da Equipe</th>
      <td>
        <strong>Objetivo:</strong> Montar uma equipe multifuncional com autoridade para resolver o problema.<br><br>
        <table>
          <thead><tr><th>Nome</th><th>Departamento</th><th>Função na Equipe</th><th>Telefone/E-mail</th></tr></thead>
          <tbody>
            <tr><td></td><td></td><td>Líder do time</td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th style="background:#003366;color:#fff">D2 — Descrição do Problema</th>
      <td>
        <strong>Objetivo:</strong> Descrever o problema de forma clara e mensurável usando o método 5W2H.<br><br>
        <strong>O quê (What):</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Onde (Where):</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Quando (When):</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Quem (Who):</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Por quê (Why):</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Como (How):</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Quanto (How much):</strong> <span class="field-blank" style="min-width:400px"></span>
      </td>
    </tr>
    <tr>
      <th style="background:#003366;color:#fff">D3 — Ações Imediatas de Contenção</th>
      <td>
        <strong>Objetivo:</strong> Implementar ações para conter o problema e proteger o cliente até a solução definitiva.<br><br>
        <table>
          <thead><tr><th>Ação</th><th>Responsável</th><th>Prazo</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
        <br><strong>Efetividade das ações de contenção:</strong> <span class="field-blank" style="min-width:300px"></span>
      </td>
    </tr>
    <tr>
      <th style="background:#003366;color:#fff">D4 — Análise de Causa-Raiz</th>
      <td>
        <strong>Objetivo:</strong> Identificar a causa raiz usando 5 Porquês, Ishikawa e/ou A3.<br><br>
        <strong>Causa Raiz Confirmada:</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Evidência / Verificação:</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Método utilizado:</strong> ☐ 5 Porquês ☐ Ishikawa ☐ A3 ☐ Outro: ____________
      </td>
    </tr>
    <tr>
      <th style="background:#003366;color:#fff">D5 — Escolha da Solução Permanente</th>
      <td>
        <strong>Objetivo:</strong> Selecionar a melhor solução para eliminar a causa raiz.<br><br>
        <strong>Solução escolhida:</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Justificativa:</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Como a solução elimina a causa raiz:</strong> <span class="field-blank" style="min-width:400px"></span>
      </td>
    </tr>
    <tr>
      <th style="background:#003366;color:#fff">D6 — Implementação e Validação</th>
      <td>
        <strong>Objetivo:</strong> Implementar a solução e validar sua efetividade.<br><br>
        <table>
          <thead><tr><th>Ação</th><th>Responsável</th><th>Prazo</th><th>Status</th><th>Evidência</th></tr></thead>
          <tbody>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
        <br><strong>Resultados da validação:</strong> <span class="field-blank" style="min-width:400px"></span>
      </td>
    </tr>
    <tr>
      <th style="background:#003366;color:#fff">D7 — Prevenção da Recorrência</th>
      <td>
        <strong>Objetivo:</strong> Implementar ações sistêmicas para evitar que o problema volte a ocorrer.<br><br>
        <table>
          <thead><tr><th>Ação Preventiva</th><th>Responsável</th><th>Prazo</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Atualizar FMEA</td><td></td><td></td><td></td></tr>
            <tr><td>Atualizar plano de controle</td><td></td><td></td><td></td></tr>
            <tr><td>Atualizar instrução de trabalho</td><td></td><td></td><td></td></tr>
            <tr><td>Propagar para outras linhas/processos</td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th style="background:#003366;color:#fff">D8 — Reconhecimento da Equipe</th>
      <td>
        <strong>Objetivo:</strong> Reconhecer a contribuição da equipe e documentar lições aprendidas.<br><br>
        <strong>Lições aprendidas:</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Reconhecimento formal:</strong> <span class="field-blank" style="min-width:400px"></span><br><br>
        <strong>Data de encerramento:</strong> <span class="field-blank"></span>
      </td>
    </tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Líder da Equipe 8D</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Gerente de Qualidade</div></div>
</div>
"""
    return wrap("Relatório 8D — Oito Disciplinas", content)


# ══════════════════════════════════════════════════════════════
#  4. SIPOC
# ══════════════════════════════════════════════════════════════
def gen_SIPOC():
    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Mapeamento de Processos</p>
  </div>
  <div class="header-right">
    <p>Documento: SIPOC-MAP-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Mapeamento de Processos — SIPOC</h1></div>
<div class="doc-subtitle">Suppliers, Inputs, Process, Outputs, Customers</div>

<div class="doc-info">
  <span><strong>Nome do Processo:</strong> <span class="field-blank" style="min-width:350px"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Nº do Processo:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Elaboração:</strong> {TODAY}</span>
  <span><strong>Área:</strong> <span class="field-blank"></span></span>
  <span><strong>Versão:</strong> 00</span>
</div>

<div class="note">O diagrama SIPOC é uma ferramenta de visão de alto nível que identifica os elementos-chave de um processo antes de detalhá-lo. Preencha cada coluna da esquerda para a direita.</div>

<table>
  <thead>
    <tr>
      <th style="width:20%;background:#003366;color:#fff;text-align:center;font-size:12pt">S — FORNECEDORES</th>
      <th style="width:20%;background:#1565c0;color:#fff;text-align:center;font-size:12pt">I — INSUMOS</th>
      <th style="width:20%;background:#2e7d32;color:#fff;text-align:center;font-size:12pt">P — PROCESSO</th>
      <th style="width:20%;background:#e65100;color:#fff;text-align:center;font-size:12pt">O — SAÍDAS</th>
      <th style="width:20%;background:#6a1b9a;color:#fff;text-align:center;font-size:12pt">C — CLIENTES</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="height:80px"></td><td style="height:80px"></td><td style="height:80px;text-align:center;vertical-align:middle"><strong>1.</strong> <span class="field-blank" style="min-width:100px"></span></td><td style="height:80px"></td><td style="height:80px"></td></tr>
    <tr><td style="height:80px"></td><td style="height:80px"></td><td style="height:80px;text-align:center;vertical-align:middle"><strong>2.</strong> <span class="field-blank" style="min-width:100px"></span></td><td style="height:80px"></td><td style="height:80px"></td></tr>
    <tr><td style="height:80px"></td><td style="height:80px"></td><td style="height:80px;text-align:center;vertical-align:middle"><strong>3.</strong> <span class="field-blank" style="min-width:100px"></span></td><td style="height:80px"></td><td style="height:80px"></td></tr>
    <tr><td style="height:80px"></td><td style="height:80px"></td><td style="height:80px;text-align:center;vertical-align:middle"><strong>4.</strong> <span class="field-blank" style="min-width:100px"></span></td><td style="height:80px"></td><td style="height:80px"></td></tr>
    <tr><td style="height:80px"></td><td style="height:80px"></td><td style="height:80px;text-align:center;vertical-align:middle"><strong>5.</strong> <span class="field-blank" style="min-width:100px"></span></td><td style="height:80px"></td><td style="height:80px"></td></tr>
    <tr><td style="height:80px"></td><td style="height:80px"></td><td style="height:80px;text-align:center;vertical-align:middle"><strong>6.</strong> <span class="field-blank" style="min-width:100px"></span></td><td style="height:80px"></td><td style="height:80px"></td></tr>
  </tbody>
</table>

<div class="section-title">Requisitos de Saída do Processo</div>
<table>
  <thead><tr><th>Saída</th><th>Requisito / Especificação</th><th>Indicador de Medição</th><th>Meta</th></tr></thead>
  <tbody>
    <tr><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Responsável pelo Mapeamento</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Gerente de Processos</div></div>
</div>
"""
    return wrap("SIPOC — Mapeamento de Processos", content)


# ══════════════════════════════════════════════════════════════
#  5. Checklist 5S
# ══════════════════════════════════════════════════════════════
def gen_5S():
    s_data = [
        ("SEIRI — Senso de Utilização", [
            "Itens desnecessários foram removidos do local de trabalho?",
            "Ferramentas e materiais em excesso foram eliminados?",
            "Itens foram classificados como necessários / ocasionais / desnecessários?",
            "Área de armazenamento foi reorganizada após a limpeza?",
            "Etiquetas e identificações estão corretas e atualizadas?",
        ]),
        ("SEITON — Senso de Organização", [
            "Cada item possui um local definido e marcado?",
            "Locais de guarda são adequados ao tamanho e formato dos itens?",
            "Pontos de estoque máximo e mínimo estão definidos?",
            "Fluxo de movimentação está sinalizado no piso?",
            "Itens de uso frequente estão ao alcance do operador?",
        ]),
        ("SEISO — Senso de Limpeza", [
            "Área está livre de poeira, resíduos e detritos?",
            "Equipamentos estão limpos e sem manchas de óleo/graxa?",
            "Quadros de indicadores estão limpos e atualizados?",
            "Lixeiras estão posicionadas corretamente e esvaziadas?",
            "Ferramentas de limpeza estão organizadas e em boas condições?",
        ]),
        ("SEIKETSU — Senso de Padronização", [
            "Procedimentos de limpeza e organização estão documentados?",
            "Responsáveis por cada área estão definidos e identificados?",
            "Cronograma de limpeza está em vigor e sendo cumprido?",
            "Padrões visuais (cores, etiquetas, linhas) estão padronizados?",
            "Auditorias internas de 5S estão sendo realizadas?",
        ]),
        ("SHITSUKE — Senso de Autodisciplina", [
            "Equipe demonstra comprometimento com os 5S?",
            "Reuniões de 5S estão sendo realizadas periodicamente?",
            "Treinamentos sobre 5S foram realizados nos últimos 90 dias?",
            "Plano de ação das auditorias anteriores foi concluído?",
            "Melhorias contínuas estão sendo implementadas pela equipe?",
        ]),
    ]

    rows = ""
    for s_name, items in s_data:
        rows += f'<tr><td colspan="5" style="background:#e3f2fd;font-weight:700;color:#003366">{s_name}</td></tr>\n'
        for i, item in enumerate(items, 1):
            rows += f"""
    <tr>
      <td style="width:5%;text-align:center">{i}</td>
      <td style="width:45%">{item}</td>
      <td style="width:12%;text-align:center">
        <div style="display:flex;gap:3px;justify-content:center">
          <span style="display:inline-block;width:14px;height:14px;border:1px solid #999;border-radius:2px" title="0"></span>
          <span style="display:inline-block;width:14px;height:14px;border:1px solid #999;border-radius:2px" title="1"></span>
          <span style="display:inline-block;width:14px;height:14px;border:1px solid #999;border-radius:2px" title="2"></span>
          <span style="display:inline-block;width:14px;height:14px;border:1px solid #999;border-radius:2px" title="3"></span>
          <span style="display:inline-block;width:14px;height:14px;border:1px solid #999;border-radius:2px" title="4"></span>
          <span style="display:inline-block;width:14px;height:14px;border:1px solid #999;border-radius:2px" title="5"></span>
        </div>
      </td>
      <td style="width:18%"></td>
      <td style="width:20%"></td>
    </tr>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Gestão da Qualidade</p>
  </div>
  <div class="header-right">
    <p>Documento: 5S-AUD-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Checklist de Auditoria 5S</h1></div>
<div class="doc-subtitle">Método 5S — Seiri, Seiton, Seiso, Seiketsu, Shitsuke</div>

<div class="doc-info">
  <span><strong>Área Auditada:</strong> <span class="field-blank"></span></span>
  <span><strong>Auditor:</strong> <span class="field-blank"></span></span>
  <span><strong>Data da Auditoria:</strong> {TODAY}</span>
  <span><strong>Turno:</strong> <span class="field-blank"></span></span>
  <span><strong>Responsável da Área:</strong> <span class="field-blank"></span></span>
  <span><strong>Nº da Auditoria:</strong> <span class="field-blank"></span></span>
</div>

<div class="note">Escala de pontuação: 0 — Não implementado | 1 — Iniciando | 2 — Parcialmente implementado | 3 — Implementado | 4 — Bem implementado | 5 — Excelência. Pontuação mínima para aprovação: 3,0 por S (média).</div>

<table>
  <thead>
    <tr>
      <th style="width:5%">#</th>
      <th style="width:45%">Critério de Avaliação</th>
      <th style="width:12%">Pontuação (0–5)</th>
      <th style="width:18%">Observações</th>
      <th style="width:20%">Ação Corretiva</th>
    </tr>
  </thead>
  <tbody>
    {rows}
  </tbody>
</table>

<div class="section-title">Resumo da Auditoria</div>
<div class="doc-info">
  <span><strong>Seiri (Utilização):</strong> <span class="field-blank"></span> / 5,0</span>
  <span><strong>Seiton (Organização):</strong> <span class="field-blank"></span> / 5,0</span>
  <span><strong>Seiso (Limpeza):</strong> <span class="field-blank"></span> / 5,0</span>
  <span><strong>Seiketsu (Padronização):</strong> <span class="field-blank"></span> / 5,0</span>
  <span><strong>Shitsuke (Autodisciplina):</strong> <span class="field-blank"></span> / 5,0</span>
  <span><strong>MÉDIA GERAL:</strong> <span class="field-blank"></span> / 5,0</span>
</div>

<div class="section-title">Classificação do Grau de Maturidade</div>
<table>
  <thead><tr><th>Pontuação</th><th>Grau</th><th>Descrição</th></tr></thead>
  <tbody>
    <tr><td>4,5 – 5,0</td><td style="color:#2e7d32;font-weight:700">Excelência</td><td>Práticas exemplares, modelo para outras áreas</td></tr>
    <tr><td>3,5 – 4,4</td><td style="color:#1565c0;font-weight:700">Bom</td><td>Bom nível de implantação, melhorias pontuais necessárias</td></tr>
    <tr><td>2,5 – 3,4</td><td style="color:#e65100;font-weight:700">Regular</td><td>Implantação parcial, plano de ação prioritário</td></tr>
    <tr><td>1,5 – 2,4</td><td style="color:#c62828;font-weight:700">Insuficiente</td><td>Implantação incipiente, intervenção urgente</td></tr>
    <tr><td>0,0 – 1,4</td><td style="color:#b71c1c;font-weight:700">Crítico</td><td>Não implementado, retrabalho do programa</td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Auditor 5S</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Responsável pela Área</div></div>
</div>
"""
    return wrap("Checklist de Auditoria 5S", content)


# ══════════════════════════════════════════════════════════════
#  6. VSM — Value Stream Mapping
# ══════════════════════════════════════════════════════════════
def gen_VSM():
    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Lean Manufacturing</p>
  </div>
  <div class="header-right">
    <p>Documento: VSM-MAP-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Mapeamento de Fluxo de Valor — VSM</h1></div>
<div class="doc-subtitle">Value Stream Mapping — Conforme Rother & Shook, Learning to See</div>

<div class="doc-info">
  <span><strong>Família de Produtos:</strong> <span class="field-blank"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Período de Análise:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Elaboração:</strong> {TODAY}</span>
  <span><strong>Linha de Produto:</strong> <span class="field-blank"></span></span>
  <span><strong>Versão:</strong> 00</span>
</div>

<div class="section-title">1. Dados do Cliente</div>
<div class="doc-info">
  <span><strong>Cliente(s):</strong> <span class="field-blank" style="min-width:400px"></span></span>
  <span><strong>Demanda Mensal:</strong> <span class="field-blank"></span> unidades</span>
  <span><strong>Dias Úteis / Mês:</strong> <span class="field-blank"></span></span>
  <span><strong>Takt Time:</strong> <span class="field-blank"></span> seg/unid</span>
</div>

<div class="section-title">2. Fluxo de Informação</div>
<table>
  <thead><tr><th>Etapa</th><th>Fornecimento de Dados</th><th>Frequência</th><th>Metodologia</th><th>Lead Time de Informação</th></tr></thead>
  <tbody>
    <tr><td>Pedido do Cliente</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Previsão de Demanda</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Programação da Produção</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Ordem de Compra</td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="section-title">3. Fluxo de Material (Current State Map)</div>
<table>
  <thead>
    <tr>
      <th style="width:14%">Processo</th>
      <th style="width:10%">Ciclo (s)</th>
      <th style="width:10%">Troca (min)</th>
      <th style="width:10%">Uptime (%)</th>
      <th style="width:10%">Lotes</th>
      <th style="width:10%">Nº Operadores</th>
      <th style="width:10%">Estoque (dias)</th>
      <th style="width:12%">Disponibilidade</th>
      <th style="width:14%">Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Fornecedor</td><td></td><td>—</td><td>—</td><td>—</td><td>—</td><td></td><td></td><td></td></tr>
    <tr><td>Processo 1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Processo 2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Processo 3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Processo 4</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Expedição</td><td></td><td>—</td><td>—</td><td>—</td><td>—</td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="section-title">4. Timeline do Fluxo de Valor</div>
<table>
  <thead><tr><th>Métrica</th><th>Valor Atual</th><th>Valor Futuro (Meta)</th><th>% Melhoria</th></tr></thead>
  <tbody>
    <tr><td><strong>Lead Time Total</strong> (dias)</td><td></td><td></td><td></td></tr>
    <tr><td><strong>Tempo de Processamento</strong> (seg)</td><td></td><td></td><td></td></tr>
    <tr><td><strong>Valor Adicionado</strong> (%)</td><td></td><td></td><td></td></tr>
    <tr><td><strong>First Pass Yield</strong> (%)</td><td></td><td></td><td></td></tr>
    <tr><td><strong>Produção em Processo</strong> (unid)</td><td></td><td></td><td></td></tr>
    <tr><td><strong>Redução de Estoques</strong> (%)</td><td>—</td><td></td><td></td></tr>
  </tbody>
</table>

<div class="section-title">5. Ícones de Simbologia VSM</div>
<table>
  <thead><tr><th>Ícone</th><th>Descrição</th><th>Uso</th></tr></thead>
  <tbody>
    <tr><td>⬛ Caixa de estoque</td><td>Estoque entre processos</td><td>Quantidade e dias de estoque</td></tr>
    <tr><td>▶ Triângulo</td><td>Processo de manufatura</td><td>Ciclo, troca, operadores</td></tr>
    <tr><td>🔀 Dados de controle</td><td>Bloco de informações do processo</td><td>CQA, freq., batch size</td></tr>
    <tr><td>⚡ Seta de puxada</td><td>Fluxo de puxada (Kanban)</td><td>Freqüência e quantidade</td></tr>
    <tr><td>📦 Supermercado</td><td>Estoque tipo supermercado</td><td>Capacidade e reabastecimento</td></tr>
    <tr><td>⏰ Timeline</td><td>Linha do tempo (VA/NVA)</td><td>Tempo de ciclo vs Lead time</td></tr>
  </tbody>
</table>

<div class="section-title">6. Oportunidades de Melhoria</div>
<table>
  <thead><tr><th>#</th><th>Oportunidade</th><th>Impacto</th><th>Responsável</th><th>Prazo</th></tr></thead>
  <tbody>
    <tr><td>1</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>2</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>3</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>4</td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Responsável pelo VSM</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Coordenador Lean</div></div>
</div>
"""
    return wrap("VSM — Mapeamento de Fluxo de Valor", content)


# ══════════════════════════════════════════════════════════════
#  7. Diagrama de Ishikawa
# ══════════════════════════════════════════════════════════════
def gen_Ishikawa():
    ms = [
        ("MÉTODO", "#1565c0", [
            "Procedimento não padronizado", "Instrução de trabalho desatualizada",
            "Sequência de operações incorreta", "Falta de procedimento documentado",
            "Parâmetros de processo não definidos"
        ]),
        ("MÃO DE OBRA", "#2e7d32", [
            "Falta de treinamento", "Fadiga /ergonomia inadequada",
            "Falta de qualificação", "Erro humano por distração",
            "Comunicação deficiente entre turnos"
        ]),
        ("MÁQUINA", "#e65100", [
            "Manutenção preventiva inadequada", "Desgaste de componentes",
            "Calibração fora de especificação", "Projeto inadequado do equipamento",
            "Falta de peças de reposição"
        ]),
        ("MATERIAL", "#6a1b9a", [
            "Matéria-prima fora de especificação", "Fornecedor não aprovado",
            "Material danificado no transporte", "Variabilidade de lote",
            "Defeito latente no insumo"
        ]),
        ("MEDIÇÃO", "#00695c", [
            "Equipamento de medição impreciso", "Método de medição inadequado",
            "Amostragem não representativa", "Calibração vencida",
            "Subjetividade na leitura"
        ]),
        ("MEIO AMBIENTE", "#4e342e", [
            "Temperatura fora de faixa", "Umidade relativa inadequada",
            "Iluminação insuficiente", "Ruído excessivo",
            "Contaminação do ambiente"
        ]),
    ]

    cards = ""
    for name, color, causes in ms:
        items = "".join(f"<li>{c}</li>" for c in causes)
        cards += f"""
    <div style="background:#f8f9fb;border:1px solid #ddd;border-radius:6px;padding:12px;border-top:3px solid {color}">
      <h4 style="color:{color};font-size:10pt;margin-bottom:8px;text-align:center">{name}</h4>
      <ul style="list-style:disc inside;font-size:9pt;line-height:1.7;color:#333">
        {items}
        <li style="border-bottom:1px dashed #ccc;padding-bottom:4px;margin-top:4px;color:#888"><em>Preencha...</em></li>
      </ul>
    </div>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Ferramentas de Qualidade</p>
  </div>
  <div class="header-right">
    <p>Documento: ISHI-DIA-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Diagrama de Ishikawa — Causa e Efeito</h1></div>
<div class="doc-subtitle">Diagrama Espinha de Peixe — Seis Ms (6M)</div>

<div class="doc-info">
  <span><strong>Problema / Efeito:</strong> <span class="field-blank" style="min-width:400px"></span></span>
  <span><strong>Data:</strong> {TODAY}</span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Equipe:</strong> <span class="field-blank"></span></span>
</div>

<div class="note">Preencha as causas potenciais para cada uma das 6 categorias (6M). Use a técnica dos 5 Porquês para aprofundar até a causa raiz. Marcas como <em>Preencha...</em> são apenas exemplos para orientação.</div>

<div style="text-align:center;margin:20px 0 10px">
  <div style="display:inline-block;background:#c62828;color:#fff;padding:10px 30px;border-radius:6px;font-weight:700;font-size:12pt;letter-spacing:0.05em">
    PROBLEMA / EFEITO: <span class="field-blank" style="min-width:250px;border-color:#fff"></span>
  </div>
  <div style="width:3px;height:20px;background:#333;margin:0 auto"></div>
  <div style="width:80%;height:3px;background:linear-gradient(90deg,#333,#999);margin:0 auto;border-radius:2px"></div>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:20px 0">
  {cards}
</div>

<div class="section-title">Ação Prioritária Identificada</div>
<table>
  <thead><tr><th>Causa Raiz Identificada</th><th>Responsável</th><th>Ação Corretiva</th><th>Prazo</th></tr></thead>
  <tbody>
    <tr><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Facilitador da Sessão</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Responsável pelo Projeto</div></div>
</div>
"""
    return wrap("Diagrama de Ishikawa — Causa e Efeito", content)


# ══════════════════════════════════════════════════════════════
#  8. Poka-Yoke
# ══════════════════════════════════════════════════════════════
def gen_PokaYoke():
    rows = ""
    for i in range(1, 11):
        rows += f"""
    <tr>
      <td style="text-align:center">{i}</td>
      <td></td>
      <td></td>
      <td>
        <span style="font-size:8pt">☐ Prevenção</span><br>
        <span style="font-size:8pt">☐ Detecção</span>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Poka-Yoke</p>
  </div>
  <div class="header-right">
    <p>Documento: PYO-REG-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Registro de Dispositivos à Prova de Erro — Poka-Yoke</h1></div>
<div class="doc-subtitle">Mistake Proofing — Conforme Toyota Production System / Shigeo Shingo</div>

<div class="doc-info">
  <span><strong>Processo / Linha:</strong> <span class="field-blank" style="min-width:350px"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Seção / Área:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Elaboração:</strong> {TODAY}</span>
</div>

<div class="note">Poka-Yoke é um mecanismo de erro-proofing que previne ou detecta defeitos antes que atinjam o cliente. Classifique cada dispositivo como Prevenção (impede o erro) ou Detecção (identifica o erro após ocorrência).</div>

<table>
  <thead>
    <tr>
      <th style="width:3%">#</th>
      <th style="width:10%">Processo / Estação</th>
      <th style="width:12%">Modo de Falha</th>
      <th style="width:9%">Tipo de PYK</th>
      <th style="width:12%">Descrição do Dispositivo</th>
      <th style="width:12%">Mecanismo de Funcionamento</th>
      <th style="width:10%">Eficiência (%)</th>
      <th style="width:8%">Custo (R$)</th>
      <th style="width:12%">Responsável</th>
      <th style="width:12%">Status</th>
    </tr>
  </thead>
  <tbody>{rows}
  </tbody>
</table>

<div class="section-title">Classificação dos Tipos de Poka-Yoke</div>
<table>
  <thead><tr><th>Tipo</th><th>Descrição</th><th>Exemplo</th></tr></thead>
  <tbody>
    <tr><td><strong>Prevenção</strong></td><td>Impede que o erro ocorra fisicamente</td><td>Pin de guia que só permite montagem em uma orientação</td></tr>
    <tr><td><strong>Detecção</strong></td><td>Identifica o erro imediatamente após a ocorrência</td><td>Sensor que detecta peça faltante e para a linha</td></tr>
    <tr><td><strong>Alerta</strong></td><td>Avisa visual ou sonoramente sobre condição anormal</td><td>Luz de aviso quando torque está fora da faixa</td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Responsável pela Implementação</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Engenheiro de Processo</div></div>
</div>
"""
    return wrap("Poka-Yoke — Dispositivos à Prova de Erro", content)


# ══════════════════════════════════════════════════════════════
#  9. Plano de Ação 5W2H
# ══════════════════════════════════════════════════════════════
def gen_5W2H():
    rows = ""
    for i in range(1, 11):
        rows += f"""
    <tr>
      <td style="text-align:center">{i}</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Gestão por Ações</p>
  </div>
  <div class="header-right">
    <p>Documento: 5W2H-PLA-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Plano de Ação — 5W2H</h1></div>
<div class="doc-subtitle">What, Why, Where, When, Who, How, How Much</div>

<div class="doc-info">
  <span><strong>Origem / Problema:</strong> <span class="field-blank" style="min-width:400px"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Elaboração:</strong> {TODAY}</span>
  <span><strong>Referência:</strong> <span class="field-blank"></span></span>
</div>

<div class="note">O método 5W2H é uma ferramenta de planejamento que responde a sete perguntas essenciais para garantir que toda ação seja clara, responsável e mensurável.</div>

<table>
  <thead>
    <tr>
      <th style="width:3%">#</th>
      <th style="width:22%">What — O quê?</th>
      <th style="width:14%">Why — Por quê?</th>
      <th style="width:10%">Where — Onde?</th>
      <th style="width:10%">When — Quando?</th>
      <th style="width:12%">Who — Quem?</th>
      <th style="width:14%">How — Como?</th>
      <th style="width:10%">How Much — Quanto custa?</th>
      <th style="width:5%">Prior.</th>
    </tr>
  </thead>
  <tbody>{rows}
  </tbody>
</table>

<div class="section-title">Acompanhamento das Ações</div>
<table>
  <thead><tr><th>#</th><th>Ação</th><th>Responsável</th><th>Prazo</th><th>% Concluído</th><th>Status</th><th>Observações</th></tr></thead>
  <tbody>
    <tr><td>1</td><td></td><td></td><td></td><td></td><td>☐ Concluído ☐ Em andamento ☐ Atrasado</td><td></td></tr>
    <tr><td>2</td><td></td><td></td><td></td><td></td><td>☐ Concluído ☐ Em andamento ☐ Atrasado</td><td></td></tr>
    <tr><td>3</td><td></td><td></td><td></td><td></td><td>☐ Concluído ☐ Em andamento ☐ Atrasado</td><td></td></tr>
    <tr><td>4</td><td></td><td></td><td></td><td></td><td>☐ Concluído ☐ Em andamento ☐ Atrasado</td><td></td></tr>
    <tr><td>5</td><td></td><td></td><td></td><td></td><td>☐ Concluído ☐ Em andamento ☐ Atrasado</td><td></td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Responsável pela Ação</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Gestor / Aprovador</div></div>
</div>
"""
    return wrap("Plano de Ação 5W2H", content)


# ══════════════════════════════════════════════════════════════
# 10. Auditoria ISO 9001
# ══════════════════════════════════════════════════════════════
def gen_ISO9001():
    clauses = [
        ("4", "Contexto da Organização", [
            ("4.1", "Compreensão da organização e seu contexto"),
            ("4.2", "Compreensão das partes interessadas"),
            ("4.3", "Determinação do escopo do sistema de gestão"),
            ("4.4", "Sistema de gestão da qualidade e seus processos"),
        ]),
        ("5", "Liderança", [
            ("5.1", "Liderança e comprometimento"),
            ("5.1.1.2", "Foco no cliente"),
            ("5.2", "Política de qualidade"),
            ("5.3", "Papéis, responsabilidades e autoridades na organização"),
        ]),
        ("6", "Planejamento", [
            ("6.1", "Ações para abordar riscos e oportunidades"),
            ("6.2", "Objetivos de qualidade e planejamento para alcançá-los"),
            ("6.3", "Planejamento de mudanças"),
        ]),
        ("7", "Suporte", [
            ("7.1", "Recursos — Geral, pessoas, infraestrutura, ambiente"),
            ("7.1.6", "Conhecimento organizacional"),
            ("7.2", "Competência"),
            ("7.3", "Consciência"),
            ("7.4", "Comunicação"),
            ("7.5", "Informação documentada"),
        ]),
        ("8", "Execução", [
            ("8.1", "Planejamento e controle operacionais"),
            ("8.2", "Requisitos para produtos e serviços"),
            ("8.3", "Projeto e desenvolvimento de produtos e serviços"),
            ("8.4", "Controle de processos, produtos e serviços fornecidos externamente"),
            ("8.5", "Produção e prestação de serviço"),
            ("8.6", "Liberação de produtos e serviços"),
            ("8.7", "Controle de saídas não conformes"),
        ]),
        ("9", "Avaliação de Desempenho", [
            ("9.1", "Monitoramento, medição, análise e avaliação"),
            ("9.1.2", "Satisfação do cliente"),
            ("9.2", "Auditoria interna"),
            ("9.3", "Análise crítica pela direção"),
        ]),
        ("10", "Melhoria", [
            ("10.1", "Melhoria — Geral"),
            ("10.2", "Não conformidade e ação corretiva"),
            ("10.3", "Melhoria contínua"),
        ]),
    ]

    rows = ""
    for sec, sec_name, items in clauses:
        rows += f'<tr><td colspan="5" style="background:#e3f2fd;font-weight:700;color:#003366">Seção {sec} — {sec_name}</td></tr>\n'
        for code, desc in items:
            rows += f"""
    <tr>
      <td style="width:8%;text-align:center">{code}</td>
      <td style="width:35%">{desc}</td>
      <td style="width:12%;text-align:center">
        <span style="font-size:8pt">☐ C</span> <span style="font-size:8pt">☐ NC</span> <span style="font-size:8pt">☐ NA</span>
      </td>
      <td style="width:25%"></td>
      <td style="width:20%"></td>
    </tr>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Sistemas de Gestão</p>
  </div>
  <div class="header-right">
    <p>Documento: ISO-AUD-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Checklist de Auditoria Interna — ISO 9001:2015</h1></div>
<div class="doc-subtitle">Conforme ISO 19011:2018 — Diretrizes para Auditorias de Sistemas de Gestão</div>

<div class="doc-info">
  <span><strong>Organização Auditada:</strong> <span class="field-blank"></span></span>
  <span><strong>Auditor Líder:</strong> <span class="field-blank"></span></span>
  <span><strong>Data(s) da Auditoria:</strong> {TODAY}</span>
  <span><strong>Equipe de Auditoria:</strong> <span class="field-blank"></span></span>
  <span><strong>Escopo:</strong> <span class="field-blank" style="min-width:400px"></span></span>
  <span><strong>Nº do Relatório:</strong> <span class="field-blank"></span></span>
</div>

<div class="note">Legenda: C = Conforme | NC = Não Conforme | NA = Não Aplicável. Registrar evidências e observações para cada item. NC maior: ausência total do requisito. NC menor: implementação parcial ou inconsistente.</div>

<table>
  <thead>
    <tr>
      <th style="width:8%">Cláusula</th>
      <th style="width:35%">Requisito</th>
      <th style="width:12%">Resultado</th>
      <th style="width:25%">Evidências / Observações</th>
      <th style="width:20%">Ação Corretiva</th>
    </tr>
  </thead>
  <tbody>{rows}
  </tbody>
</table>

<div class="section-title">Resumo da Auditoria</div>
<div class="doc-info">
  <span><strong>Total de Itens Auditados:</strong> <span class="field-blank"></span></span>
  <span><strong>Conformes (C):</strong> <span class="field-blank"></span></span>
  <span><strong>Não Conformes (NC):</strong> <span class="field-blank"></span></span>
  <span><strong>Não Aplicáveis (NA):</strong> <span class="field-blank"></span></span>
  <span><strong>Índice de Conformidade:</strong> <span class="field-blank"></span>%</span>
  <span><strong>Classificação:</strong> ☐ Aprovado ☐ Aprovado com NCs ☐ Reprovado</span>
</div>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Auditor Líder</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Representante da Direção</div></div>
</div>
"""
    return wrap("Checklist de Auditoria ISO 9001:2015", content)


# ══════════════════════════════════════════════════════════════
# 11. Registro de Treinamento
# ══════════════════════════════════════════════════════════════
def gen_Treinamento():
    rows = ""
    for i in range(1, 13):
        rows += f"""
    <tr>
      <td style="text-align:center">{i}</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Gestão de Pessoas</p>
  </div>
  <div class="header-right">
    <p>Documento: TRE-REG-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Registro e Controle de Treinamentos</h1></div>
<div class="doc-subtitle">Conforme ISO 9001:2015, Cláusula 7.2 — Competência</div>

<div class="doc-info">
  <span><strong>Departamento:</strong> <span class="field-blank"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Período:</strong> <span class="field-blank"></span></span>
  <span><strong>Nº do Documento:</strong> <span class="field-blank"></span></span>
</div>

<table>
  <thead>
    <tr>
      <th style="width:3%">#</th>
      <th style="width:12%">Nome do Funcionário</th>
      <th style="width:10%">Matrícula</th>
      <th style="width:12%">Treinamento</th>
      <th style="width:10%">Carga Horária</th>
      <th style="width:10%">Data</th>
      <th style="width:10%">Instrutor</th>
      <th style="width:10%">Nota / Avaliação</th>
      <th style="width:10%">Assinatura</th>
      <th style="width:13%">Status</th>
    </tr>
  </thead>
  <tbody>{rows}
  </tbody>
</table>

<div class="section-title">Critérios de Avaliação</div>
<table>
  <thead><tr><th>Nota</th><th>Classificação</th><th>Descrição</th></tr></thead>
  <tbody>
    <tr><td>9,0 – 10,0</td><td style="color:#2e7d32;font-weight:700">Excelente</td><td>Domínio completo do conteúdo; apto para aplicação imediata</td></tr>
    <tr><td>7,0 – 8,9</td><td style="color:#1565c0;font-weight:700">Bom</td><td>Bom aproveitamento; pequenas lacunas que podem ser sanadas com supervisão</td></tr>
    <tr><td>5,0 – 6,9</td><td style="color:#e65100;font-weight:700">Regular</td><td>Aproveitamento parcial; necessário reforço ou novo treinamento</td></tr>
    <tr><td>0,0 – 4,9</td><td style="color:#c62828;font-weight:700">Insuficiente</td><td>Não atingiu o mínimo; re-treinamento obrigatório</td></tr>
  </tbody>
</table>

<div class="section-title">Legenda de Status</div>
<div class="doc-info">
  <span><strong>AP</strong> = Aprovado | <strong>RA</strong> = Reprovado | <strong>EP</strong> = Em andamento | <strong>DI</strong> = Dispensado</span>
</div>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Responsável pelo Treinamento</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Gerente de RH / DP</div></div>
</div>
"""
    return wrap("Registro de Treinamento", content)


# ══════════════════════════════════════════════════════════════
# 12. Dashboard de KPIs
# ══════════════════════════════════════════════════════════════
def gen_KPI():
    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Gestão por Indicadores</p>
  </div>
  <div class="header-right">
    <p>Documento: KPI-DASH-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Dashboard de Indicadores de Desempenho — KPI</h1></div>
<div class="doc-subtitle">Key Performance Indicators — Indicadores-Chave de Desempenho</div>

<div class="doc-info">
  <span><strong>Departamento / Linha:</strong> <span class="field-blank" style="min-width:350px"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Período de Referência:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Compilação:</strong> {TODAY}</span>
</div>

<div class="section-title">1. OEE — Overall Equipment Effectiveness</div>
<div class="doc-info">
  <span><strong>Fórmula:</strong> OEE = Disponibilidade × Performance × Qualidade</span>
</div>
<table>
  <thead><tr><th>Componente</th><th>Fórmula</th><th>Meta</th><th>Realizado</th><th>% Atingido</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td><strong>Disponibilidade</strong></td><td>Tempo Operacional / Tempo Planejado</td><td>≥ 90%</td><td></td><td></td><td></td></tr>
    <tr><td><strong>Performance</strong></td><td>(Produção Real × Ciclo Ideal) / Tempo Operacional</td><td>≥ 95%</td><td></td><td></td><td></td></tr>
    <tr><td><strong>Qualidade</strong></td><td>Produção Boa / Produção Total</td><td>≥ 99%</td><td></td><td></td><td></td></tr>
    <tr style="background:#e3f2fd"><td><strong>OEE Total</strong></td><td colspan="2">Dispon. × Perf. × Qual.</td><td><strong>≥ 85%</strong></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="section-title">2. Lead Time</div>
<table>
  <thead><tr><th>Métrica</th><th>Unidade</th><th>Meta</th><th>Realizado</th><th>Desvio</th><th>Ação</th></tr></thead>
  <tbody>
    <tr><td>Lead Time Total (pedido → entrega)</td><td>dias</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Lead Time de Fabricação</td><td>dias</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Lead Time de Compras</td><td>dias</td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Lead Time de Expedição</td><td>dias</td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="section-title">3. Produtividade</div>
<table>
  <thead><tr><th>Métrica</th><th>Fórmula</th><th>Meta</th><th>Realizado</th><th>Unidade</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td>Produtividade Geral</td><td>Produção Total / Horas Homem</td><td></td><td></td><td>unid/hora</td><td></td></tr>
    <tr><td>Produtividade por Máquina</td><td>Produção / Nº de Máquinas</td><td></td><td></td><td>unid/máq/dia</td><td></td></tr>
    <tr><td>Grau de Eficiência (GE)</td><td>Tempo Efetivo / Tempo Disponível</td><td>≥ 85%</td><td></td><td>%</td><td></td></tr>
  </tbody>
</table>

<div class="section-title">4. Refugo e Perdas</div>
<table>
  <thead><tr><th>Métrica</th><th>Fórmula</th><th>Meta</th><th>Realizado</th><th>Causa Principal</th><th>Ação</th></tr></thead>
  <tbody>
    <tr><td>Taxa de Refugo</td><td>(Qtd. Refugo / Produção Total) × 100</td><td>< 2%</td><td></td><td></td><td></td></tr>
    <tr><td>Índice de Retrabalho</td><td>(Qtd. Retrabalho / Produção Total) × 100</td><td>< 3%</td><td></td><td></td><td></td></tr>
    <tr><td>Custo da Não Qualidade</td><td>Somatório de custos de NC</td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="section-title">5. OTIF — On Time In Full</div>
<table>
  <thead><tr><th>Métrica</th><th>Fórmula</th><th>Meta</th><th>Realizado</th><th>Desvio</th><th>Ação Corretiva</th></tr></thead>
  <tbody>
    <tr><td>OTIF</td><td>Pedidos Entregues no Prazo e Completo / Total de Pedidos × 100</td><td>≥ 95%</td><td></td><td></td><td></td></tr>
    <tr><td>Atraso Médio de Entrega</td><td>Somatório de dias de atraso / Nº de pedidos</td><td>< 2 dias</td><td></td><td></td><td></td></tr>
    <tr><td>Nível de Serviço ao Cliente</td><td>Pedidos Atendidos / Total de Pedidos</td><td>≥ 98%</td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="section-title">6. Resumo Visual (Painel Mensal)</div>
<table>
  <thead><tr><th>Indicador</th><th>Janeiro</th><th>Fevereiro</th><th>Março</th><th>Abril</th><th>Maio</th><th>Junho</th><th>Média</th></tr></thead>
  <tbody>
    <tr><td>OEE (%)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Lead Time (dias)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Produtividade</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>Refugo (%)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>OTIF (%)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Responsável pelo Acompanhamento</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Gerente de Operações</div></div>
</div>
"""
    return wrap("Dashboard de Indicadores — KPI", content)


# ══════════════════════════════════════════════════════════════
# 13. Capacidade Produtiva
# ══════════════════════════════════════════════════════════════
def gen_Capacidade():
    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Planejamento e Controle da Produção</p>
  </div>
  <div class="header-right">
    <p>Documento: CAP-FRM-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Análise de Capacidade Produtiva</h1></div>
<div class="doc-subtitle">Cálculo de Capacidade Instalada, Disponível, Efetiva e Índices de Ociosidade</div>

<div class="doc-info">
  <span><strong>Processo / Centro de Trabalho:</strong> <span class="field-blank" style="min-width:350px"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Período de Análise:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Elaboração:</strong> {TODAY}</span>
</div>

<div class="section-title">1. Dados de Entrada</div>
<table>
  <thead><tr><th>Parâmetro</th><th>Descrição</th><th>Valor</th><th>Unidade</th></tr></thead>
  <tbody>
    <tr><td><strong>Nº de Máquinas/Postos</strong></td><td>Quantidade total de equipamentos no centro</td><td></td><td>unid.</td></tr>
    <tr><td><strong>Turnos por Dia</strong></td><td>Número de turnos de trabalho</td><td></td><td>turnos</td></tr>
    <tr><td><strong>Horas por Turno</strong></td><td>Duração nominal de cada turno</td><td></td><td>horas</td></tr>
    <tr><td><strong>Dias Úteis no Período</strong></td><td>Dias de trabalho no mês/mês</td><td></td><td>dias</td></tr>
    <tr><td><strong>Tempo Padrão por Unidade</strong></td><td>Tempo ciclo padronizado para o produto</td><td></td><td>horas/unid.</td></tr>
    <tr><td><strong>Demanda Prevista</strong></td><td>Volume demandado no período</td><td></td><td>unid.</td></tr>
    <tr><td><strong>Perdas Planejadas (%)</strong></td><td>Manutenção preventiva, reuniões, treinamento</td><td></td><td>%</td></tr>
    <tr><td><strong>Perdas Não Planejadas (%)</strong></td><td>Quebras, ajustes, faltas de material</td><td></td><td>%</td></tr>
  </tbody>
</table>

<div class="section-title">2. Cálculos de Capacidade</div>
<table>
  <thead><tr><th>Tipo de Capacidade</th><th>Fórmula</th><th>Cálculo</th><th>Resultado</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Capacidade Instalada (CI)</strong></td>
      <td>Nº Máq. × Turnos × Horas/Turno × Dias Úteis</td>
      <td><span class="field-blank" style="min-width:250px"></span></td>
      <td><span class="field-blank"></span> horas</td>
    </tr>
    <tr>
      <td><strong>Capacidade Disponível (CD)</strong></td>
      <td>CI × (1 − Perdas Planejadas)</td>
      <td><span class="field-blank" style="min-width:250px"></span></td>
      <td><span class="field-blank"></span> horas</td>
    </tr>
    <tr>
      <td><strong>Capacidade Efetiva (CE)</strong></td>
      <td>CD × (1 − Perdas Não Planejadas)</td>
      <td><span class="field-blank" style="min-width:250px"></span></td>
      <td><span class="field-blank"></span> horas</td>
    </tr>
    <tr>
      <td><strong>Capacidade Necessária (CN)</strong></td>
      <td>Demanda × Tempo Padrão</td>
      <td><span class="field-blank" style="min-width:250px"></span></td>
      <td><span class="field-blank"></span> horas</td>
    </tr>
    <tr>
      <td><strong>Utilização (%)</strong></td>
      <td>(CN / CI) × 100</td>
      <td><span class="field-blank" style="min-width:250px"></span></td>
      <td><span class="field-blank"></span> %</td>
    </tr>
    <tr>
      <td><strong>Eficiência (%)</strong></td>
      <td>(CN / CE) × 100</td>
      <td><span class="field-blank" style="min-width:250px"></span></td>
      <td><span class="field-blank"></span> %</td>
    </tr>
  </tbody>
</table>

<div class="section-title">3. Índices de Ociosidade e Sobra de Capacidade</div>
<table>
  <thead><tr><th>Indicador</th><th>Fórmula</th><th>Resultado</th><th>Interpretação</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Ociosidade Instalada</strong></td>
      <td>1 − (CN / CI)</td>
      <td><span class="field-blank"></span> %</td>
      <td>% de capacidade ociosa sem considerar perdas</td>
    </tr>
    <tr>
      <td><strong>Ociosidade Efetiva</strong></td>
      <td>1 − (CN / CE)</td>
      <td><span class="field-blank"></span> %</td>
      <td>% de capacidade ociosa real disponível</td>
    </tr>
    <tr>
      <td><strong>Sobra de Capacidade</strong></td>
      <td>CE − CN</td>
      <td><span class="field-blank"></span> horas</td>
      <td>Horas ociosas disponíveis para nova demanda</td>
    </tr>
    <tr>
      <td><strong>Excesso de Capacidade</strong></td>
      <td>CE − CN (se negativo = déficit)</td>
      <td><span class="field-blank"></span> horas</td>
      <td>Se negativo: horas extras ou subcontratação necessárias</td>
    </tr>
  </tbody>
</table>

<div class="section-title">4. Classificação do Grau de Capacidade</div>
<table>
  <thead><tr><th>Utilização</th><th>Classificação</th><th>Situação</th><th>Ação Recomendada</th></tr></thead>
  <tbody>
    <tr><td>≥ 90%</td><td style="color:#c62828;font-weight:700">Crítico</td><td>Saturado</td><td>Horas extras, subcontratação ou expansão de capacidade</td></tr>
    <tr><td>75% – 89%</td><td style="color:#e65100;font-weight:700">Alto</td><td>Pouca folga</td><td>Monitorar; planejar absorção de picos</td></tr>
    <tr><td>50% – 74%</td><td style="color:#2e7d32;font-weight:700">Adequado</td><td>Equilibrado</td><td>Manter; buscar novos pedidos para otimizar</td></tr>
    <tr><td>＜ 50%</td><td style="color:#1565c0;font-weight:700">Baixo</td><td>Ocioso</td><td>Avaliar realocação, redução de turnos ou diversificação</td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Engenheiro de Produção</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Gerente de Operações</div></div>
</div>
"""
    return wrap("Análise de Capacidade Produtiva", content)


# ══════════════════════════════════════════════════════════════
# 14. Sequenciamento de Ordens
# ══════════════════════════════════════════════════════════════
def gen_Sequenciamento():
    rows = ""
    for i in range(1, 11):
        rows += f"""
    <tr>
      <td style="text-align:center">{i}</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | PCP</p>
  </div>
  <div class="header-right">
    <p>Documento: SEQ-PLA-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Planilha de Sequenciamento de Ordens de Produção</h1></div>
<div class="doc-subtitle">Regras: FCFS, EDD, SPT, CR — Conforme Tubino (2015)</div>

<div class="doc-info">
  <span><strong>Centro de Trabalho:</strong> <span class="field-blank"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Referência:</strong> {TODAY}</span>
  <span><strong>Turno:</strong> <span class="field-blank"></span></span>
</div>

<div class="note">FCFS = First Come, First Served (quem chega primeiro é processado primeiro). EDD = Earliest Due Date (menor data de vencimento primeiro). SPT = Shortest Processing Time (menor tempo de processamento primeiro). CR = Critical Ratio (razão crítica = tempo restante / tempo de processamento restante).</div>

<table>
  <thead>
    <tr>
      <th style="width:4%">#</th>
      <th style="width:10%">Nº da Ordem</th>
      <th style="width:12%">Produto</th>
      <th style="width:6%">Qtd.</th>
      <th style="width:8%">Data de Emissão</th>
      <th style="width:8%">Data de Vencimento</th>
      <th style="width:8%">Tempo Proc. (h)</th>
      <th style="width:6%">Prioridade</th>
      <th style="width:10%">Seq. FCFS</th>
      <th style="width:10%">Seq. EDD</th>
      <th style="width:10%">Seq. SPT</th>
      <th style="width:10%">Seq. CR</th>
    </tr>
  </thead>
  <tbody>{rows}
  </tbody>
</table>

<div class="section-title">Cálculo da Razão Crítica (CR)</div>
<div class="doc-info">
  <span><strong>CR</strong> = (Data de Vencimento − Data Atual) / Tempo de Processamento Restante</span>
</div>
<table>
  <thead><tr><th>Valor do CR</th><th>Classificação</th><th>Interpretação</th><th>Ação</th></tr></thead>
  <tbody>
    <tr><td><strong>CR ＜ 1</strong></td><td style="color:#c62828;font-weight:700">Atrasado</td><td>A ordem já está com atraso</td><td>Prioridade máxima — processar imediatamente</td></tr>
    <tr><td><strong>CR = 1</strong></td><td style="color:#e65100;font-weight:700">No prazo</td><td>A ordem está exatamente no prazo</td><td>Manter sequência atual</td></tr>
    <tr><td><strong>CR ＞ 1</strong></td><td style="color:#2e7d32;font-weight:700">Adiantado</td><td>A ordem tem folga de tempo</td><td>Pode ser postergada se necessário</td></tr>
  </tbody>
</table>

<div class="section-title">Comparativo dos Sequenciamentos</div>
<table>
  <thead><tr><th>Método</th><th>Critério</th><th>Vantagem</th><th>Desvantagem</th></tr></thead>
  <tbody>
    <tr><td><strong>FCFS</strong></td><td>Ordem de chegada</td><td>Justo e simples</td><td>Não otimiza prazos nem produtividade</td></tr>
    <tr><td><strong>EDD</strong></td><td>Menor data de vencimento</td><td>Minimiza atraso máximo</td><td>Pode aumentar tempo médio de fluxo</td></tr>
    <tr><td><strong>SPT</strong></td><td>Menor tempo de processamento</td><td>Minimiza tempo médio de fluxo e estoque</td><td>Pode causar atraso em ordens longas</td></tr>
    <tr><td><strong>CR</strong></td><td>Razão entre folga e processamento</td><td>Equilibra prazos e capacidade</td><td>Requer atualização constante</td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Planejador da Produção</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Supervisor de Produção</div></div>
</div>
"""
    return wrap("Sequenciamento de Ordens de Produção", content)


# ══════════════════════════════════════════════════════════════
# 15. Custeio ABC
# ══════════════════════════════════════════════════════════════
def gen_ABC():
    rows = ""
    for i in range(1, 16):
        rows += f"""
    <tr>
      <td style="text-align:center">{i}</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Custeio e Gestão Financeira</p>
  </div>
  <div class="header-right">
    <p>Documento: ABC-PLA-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Planilha de Custeio ABC — Activity Based Costing</h1></div>
<div class="doc-subtitle">Custeio Baseado em Atividades — Conforme Kaplan & Cooper (1998)</div>

<div class="doc-info">
  <span><strong>Centro de Custo:</strong> <span class="field-blank" style="min-width:350px"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Período:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Elaboração:</strong> {TODAY}</span>
</div>

<div class="section-title">1. Cadastro de Atividades e Direcionadores de Custos</div>
<table>
  <thead>
    <tr>
      <th style="width:4%">#</th>
      <th style="width:16%">Atividade</th>
      <th style="width:14%">Direcionador de Custo</th>
      <th style="width:12%">Centro de Custo</th>
      <th style="width:10%">Custo Total (R$)</th>
      <th style="width:10%">Qtd. do Direcionador</th>
      <th style="width:10%">Custo por Unidade (R$)</th>
      <th style="width:14%">Produto/Serviço A</th>
      <th style="width:14%">Produto/Serviço B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center">1</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
      <td style="text-align:center">2</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
      <td style="text-align:center">3</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
      <td style="text-align:center">4</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
      <td style="text-align:center">5</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#e3f2fd">
      <td colspan="4"><strong>TOTAL</strong></td>
      <td><strong></strong></td>
      <td>—</td>
      <td>—</td>
      <td><strong></strong></td>
      <td><strong></strong></td>
    </tr>
  </tbody>
</table>

<div class="section-title">2. Exemplos de Direcionadores de Custos</div>
<table>
  <thead><tr><th>Atividade</th><th>Direcionador Sugerido</th><th>Unidade de Medida</th></tr></thead>
  <tbody>
    <tr><td>Compras de materiais</td><td>Nº de pedidos de compra emitidos</td><td>pedidos</td></tr>
    <tr><td>Controle de qualidade</td><td>Nº de inspeções realizadas</td><td>inspeções</td></tr>
    <tr><td>Programação da produção</td><td>Nº de ordens de produção geradas</td><td>ordens</td></tr>
    <tr><td>Logística interna</td><td>Nº de movimentações de material</td><td>movimentações</td></tr>
    <tr><td>Manutenção de equipamentos</td><td>Horas-máquina de manutenção</td><td>horas</td></tr>
    <tr><td>Atendimento ao cliente</td><td>Nº de atendimentos realizados</td><td>atendimentos</td></tr>
    <tr><td>Expedição</td><td>Nº de notas fiscais emitidas</td><td>NFs</td></tr>
  </tbody>
</table>

<div class="section-title">3. Rateio por Produto</div>
<table>
  <thead>
    <tr>
      <th>Produto / Serviço</th>
      <th>Qtd. Produzida</th>
      <th>Consumo Dir. 1</th>
      <th>Consumo Dir. 2</th>
      <th>Consumo Dir. 3</th>
      <th>Custo Total Atribuído (R$)</th>
      <th>Custo Unitário (R$)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>

<div class="section-title">4. Classificação ABC de Itens / Clientes</div>
<table>
  <thead><tr><th>Classe</th><th>% Itens</th><th>% Valor Acumulado</th><th>Tratamento</th></tr></thead>
  <tbody>
    <tr><td><strong>A</strong></td><td>~20%</td><td>~80%</td><td>Controle rigoroso, inventário contínuo, negociação direta</td></tr>
    <tr><td><strong>B</strong></td><td>~30%</td><td>~15%</td><td>Controle moderado, inventário periódico</td></tr>
    <tr><td><strong>C</strong></td><td>~50%</td><td>~5%</td><td>Controle simples, estoque máximo, compra em lote</td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Analista de Custos</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Controller Financeiro</div></div>
</div>
"""
    return wrap("Custeio ABC — Activity Based Costing", content)


# ══════════════════════════════════════════════════════════════
# 16. Matriz de Riscos
# ══════════════════════════════════════════════════════════════
def gen_MatrizRiscos():
    rows = ""
    for i in range(1, 11):
        rows += f"""
    <tr>
      <td style="text-align:center">{i}</td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>"""

    content = f"""
<div class="header">
  <div class="header-left">
    <h2>GERETT — BIBLIOTECA ORGANIZACIONAL</h2>
    <p>Engenharia de Produção | Gestão de Riscos</p>
  </div>
  <div class="header-right">
    <p>Documento: RISCO-MAT-001</p>
    <p>Rev.: 00 | {TODAY}</p>
  </div>
</div>

<div class="doc-title"><h1>Matriz de Riscos — Probabilidade × Impacto</h1></div>
<div class="doc-subtitle">Conforme ISO 31000:2018 — Gestão de Riscos</div>

<div class="doc-info">
  <span><strong>Processo / Projeto:</strong> <span class="field-blank" style="min-width:350px"></span></span>
  <span><strong>Responsável:</strong> <span class="field-blank"></span></span>
  <span><strong>Data de Elaboração:</strong> {TODAY}</span>
  <span><strong>Revisão:</strong> <span class="field-blank"></span></span>
</div>

<div class="section-title">1. Escala de Classificação</div>
<table>
  <thead>
    <tr>
      <th style="width:15%">Nível</th>
      <th style="width:20%">Probabilidade (P)</th>
      <th style="width:20%">Impacto (I)</th>
      <th style="width:45%">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>Muito Baixa (&lt;10%)</td><td style="color:#2e7d32">Insignificante</td><td>Sem perda significativa; impacto desprezível nos objetivos</td></tr>
    <tr><td><strong>2</strong></td><td>Baixa (10%–30%)</td><td style="color:#2e7d32">Menor</td><td>Pequenas perdas; atrasos inferiores a 1 semana; custo adicional &lt;2%</td></tr>
    <tr><td><strong>3</strong></td><td>Média (30%–50%)</td><td style="color:#e65100">Moderado</td><td>Perdas moderadas; atrasos de 1–4 semanas; custo adicional 2%–5%</td></tr>
    <tr><td><strong>4</strong></td><td>Alta (50%–70%)</td><td style="color:#c62828">Maior</td><td>Perdas significativas; atrasos de 1–3 meses; custo adicional 5%–15%</td></tr>
    <tr><td><strong>5</strong></td><td>Muito Alta (&gt;70%)</td><td style="color:#b71c1c">Catstrófico</td><td>Perdas severas; atrasos &gt;3 meses; custo &gt;15%; risco de inviabilidade</td></tr>
  </tbody>
</table>

<div class="section-title">2. Matriz de Risco (P × I)</div>
<div style="text-align:center;margin:15px 0">
<table style="display:inline-table;width:auto;border:2px solid #333">
  <thead>
    <tr>
      <th style="background:#333;color:#fff;padding:10px 14px">P × I →</th>
      <th style="background:#2e7d32;color:#fff;padding:10px">I = 1</th>
      <th style="background:#2e7d32;color:#fff;padding:10px">I = 2</th>
      <th style="background:#e65100;color:#fff;padding:10px">I = 3</th>
      <th style="background:#c62828;color:#fff;padding:10px">I = 4</th>
      <th style="background:#b71c1c;color:#fff;padding:10px">I = 5</th>
    </tr>
  </thead>
  <tbody>
    <tr><th style="background:#333;color:#fff;padding:8px">P = 5</th><td style="background:#fff3e0;padding:8px;text-align:center;font-weight:700">5</td><td style="background:#fff3e0;padding:8px;text-align:center;font-weight:700">10</td><td style="background:#ffe0b2;padding:8px;text-align:center;font-weight:700">15</td><td style="background:#ffccbc;padding:8px;text-align:center;font-weight:700;color:#c62828">20</td><td style="background:#ffcdd2;padding:8px;text-align:center;font-weight:700;color:#b71c1c">25</td></tr>
    <tr><th style="background:#333;color:#fff;padding:8px">P = 4</th><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">4</td><td style="background:#fff3e0;padding:8px;text-align:center;font-weight:700">8</td><td style="background:#ffe0b2;padding:8px;text-align:center;font-weight:700">12</td><td style="background:#ffccbc;padding:8px;text-align:center;font-weight:700;color:#c62828">16</td><td style="background:#ffcdd2;padding:8px;text-align:center;font-weight:700;color:#b71c1c">20</td></tr>
    <tr><th style="background:#333;color:#fff;padding:8px">P = 3</th><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">3</td><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">6</td><td style="background:#fff3e0;padding:8px;text-align:center;font-weight:700">9</td><td style="background:#ffe0b2;padding:8px;text-align:center;font-weight:700">12</td><td style="background:#ffccbc;padding:8px;text-align:center;font-weight:700;color:#c62828">15</td></tr>
    <tr><th style="background:#333;color:#fff;padding:8px">P = 2</th><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">2</td><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">4</td><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">6</td><td style="background:#fff3e0;padding:8px;text-align:center;font-weight:700">8</td><td style="background:#ffe0b2;padding:8px;text-align:center;font-weight:700">10</td></tr>
    <tr><th style="background:#333;color:#fff;padding:8px">P = 1</th><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">1</td><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">2</td><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">3</td><td style="background:#e8f5e9;padding:8px;text-align:center;font-weight:700">4</td><td style="background:#fff3e0;padding:8px;text-align:center;font-weight:700">5</td></tr>
  </tbody>
</table>
</div>
<div style="text-align:center;font-size:8.5pt;color:#666;margin-bottom:20px">
  <span style="color:#2e7d32;font-weight:700">■ Baixo (1–4)</span> &nbsp;
  <span style="color:#e65100;font-weight:700">■ Moderado (5–9)</span> &nbsp;
  <span style="color:#c62828;font-weight:700">■ Alto (10–16)</span> &nbsp;
  <span style="color:#b71c1c;font-weight:700">■ Crítico (17–25)</span>
</div>

<div class="section-title">3. Registro de Riscos</div>
<table>
  <thead>
    <tr>
      <th style="width:3%">#</th>
      <th style="width:15%">Risco Identificado</th>
      <th style="width:12%">Categoria</th>
      <th style="width:5%">P</th>
      <th style="width:5%">I</th>
      <th style="width:5%">P×I</th>
      <th style="width:10%">Classificação</th>
      <th style="width:15%">Plano de Resposta</th>
      <th style="width:12%">Responsável</th>
      <th style="width:8%">Prazo</th>
      <th style="width:10%">Status</th>
    </tr>
  </thead>
  <tbody>{rows}
  </tbody>
</table>

<div class="section-title">4. Estratégias de Resposta a Riscos</div>
<table>
  <thead><tr><th>Estratégia</th><th>Descrição</th><th>Quando Aplicar</th></tr></thead>
  <tbody>
    <tr><td><strong>Mitigação</strong></td><td>Reduzir a probabilidade ou o impacto</td><td>Risco alto ou crítico com ação possível</td></tr>
    <tr><td><strong>Transferência</strong></td><td>Transferir para terceiro (seguro, contrato)</td><td>Risco financeiro significativo</td></tr>
    <tr><td><strong>Evitação</strong></td><td>Eliminar a causa do risco</td><td>Risco inaceitável; cambio de plano</td></tr>
    <tr><td><strong>Aceitação</strong></td><td>Aceitar o risco sem ação adicional</td><td>Risco baixo; custo da ação superior ao impacto</td></tr>
  </tbody>
</table>

<div class="signature-block">
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Gestor de Riscos</div></div>
  <div class="signature-line"><div class="name"><span class="field-blank" style="min-width:200px"></span></div><div class="role">Diretor / Sponsor</div></div>
</div>
"""
    return wrap("Matriz de Riscos — Probabilidade × Impacto", content)


# ══════════════════════════════════════════════════════════════
# MAIN — Gerar todos os formulários
# ══════════════════════════════════════════════════════════════
def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    forms = [
        ("01-fmea-processo.html", gen_fMEA),
        ("02-ppap-checklist.html", gen_PPAP),
        ("03-relatorio-8d.html", gen_8D),
        ("04-sipoc.html", gen_SIPOC),
        ("05-checklist-5s.html", gen_5S),
        ("06-vsm.html", gen_VSM),
        ("07-ishikawa.html", gen_Ishikawa),
        ("08-poka-yoke.html", gen_PokaYoke),
        ("09-plano-acao-5w2h.html", gen_5W2H),
        ("10-auditoria-iso9001.html", gen_ISO9001),
        ("11-registro-treinamento.html", gen_Treinamento),
        ("12-dashboard-kpi.html", gen_KPI),
        ("13-capacidade-produtiva.html", gen_Capacidade),
        ("14-sequenciamento-ordens.html", gen_Sequenciamento),
        ("15-custeio-abc.html", gen_ABC),
        ("16-matriz-riscos.html", gen_MatrizRiscos),
    ]

    print("=" * 60)
    print("  GERETT — Gerador de Formulários Técnicos")
    print("  Engenharia de Produção | Padrão ABNT")
    print("=" * 60)

    for filename, gen_func in forms:
        filepath = os.path.join(OUTPUT_DIR, filename)
        html = gen_func()
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"  [OK] {filename}")

    print(f"\n  Total: {len(forms)} formulários gerados em:")
    print(f"  {OUTPUT_DIR}")
    print("=" * 60)


if __name__ == "__main__":
    main()
