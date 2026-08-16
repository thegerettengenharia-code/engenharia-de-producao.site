#!/usr/bin/env node
/* =========================================================
   validate-links.js — Verifica integridade do acervo da
   Biblioteca Digital (dados + links externos + páginas locais).

   Uso: node scripts/validate-links.js [--skip-network]
   Saída: relatório em reports/link-check.md
   Exit:  0 (ok) | 1 (erro de schema ou link quebrado)
   ========================================================= */
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const { URL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'assets', 'data', 'biblioteca.js');
const REPORT_DIR = path.join(ROOT, 'reports');
const REPORT_FILE = path.join(REPORT_DIR, 'link-check.md');
const SKIP_NETWORK = process.argv.includes('--skip-network');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const TIMEOUT = 15000;
const MAX_REDIRECTS = 5;
const CONCURRENCY = 4;

const VALID_TYPES = ['livro', 'e-book', 'apostila', 'dissertacao', 'tese', 'artigo', 'cartilha', 'norma', 'guia', 'curso', 'manual', 'lei', 'periodico', 'revista', 'documento', 'portal'];

const issues = [];
const broken = [];
const blocked = [];

/* ---------- Carrega os dados ---------- */
function loadData() {
  global.window = {};
  const code = fs.readFileSync(DATA_FILE, 'utf8');
  eval(code);
  return global.window.SITE_BIBLIOTECA;
}

/* ---------- Checagens de schema ---------- */
function schemaCheck(db) {
  if (!db || !Array.isArray(db.materiais) || !Array.isArray(db.categorias)) {
    issues.push('Estrutura inválida: esperado SITE_BIBLIOTECA com "materiais" e "categorias"');
    return;
  }
  const catIds = new Set(db.categorias.map((c) => c.id));
  const seen = new Set();
  db.materiais.forEach((m, i) => {
    const label = `[${i}] ${m.id || m.title || '(sem id)'}`;
    if (!m.id) issues.push(`${label}: campo "id" ausente`);
    else if (seen.has(m.id)) issues.push(`${label}: id duplicado`);
    else seen.add(m.id);

    if (!m.title) issues.push(`${label}: campo "title" ausente`);
    if (!m.category) issues.push(`${label}: campo "category" ausente`);
    else if (!catIds.has(m.category)) issues.push(`${label}: categoria "${m.category}" não declarada`);
    if (!m.type) issues.push(`${label}: campo "type" ausente`);
    else if (!VALID_TYPES.includes(m.type)) issues.push(`${label}: tipo "${m.type}" inválido`);
    if (!m.url) issues.push(`${label}: campo "url" ausente`);
    if (m.url && !/^https?:\/\//i.test(m.url)) issues.push(`${label}: "url" não é HTTP(S)`);
    if (m.pdf_url && !/^https?:\/\//i.test(m.pdf_url)) issues.push(`${label}: "pdf_url" não é HTTP(S)`);
    if (m.verified === true && !m.last_verified) issues.push(`${label}: verified sem "last_verified"`);
    if (m.last_verified && !/^\d{4}-\d{2}-\d{2}$/.test(m.last_verified)) issues.push(`${label}: "last_verified" inválido`);
    if (m.open_access === undefined && m.verified) issues.push(`${label}: faltando "open_access"`);
    if (m.open_access !== true && m.has_pdf) issues.push(`${label}: has_pdf mas open_access != true`);
  });
  db.categorias.forEach((c, i) => {
    if (!c.id || !c.nome) issues.push(`[categoria ${i}]: "id"/"nome" ausentes`);
  });
}

/* ---------- Checagem de páginas locais ---------- */
function localPagesCheck() {
  const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html'));
  const linkRe = /href="([^"#][^"]*)"/g;
  htmlFiles.forEach((f) => {
    let content = fs.readFileSync(path.join(ROOT, f), 'utf8');
    // Remove blocos <script> para não capturar template strings do JS
    content = content.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
    let m;
    while ((m = linkRe.exec(content)) !== null) {
      const href = m[1];
      if (/^[a-z]+:/i.test(href) || href.startsWith('//')) continue;
      const clean = href.split(/[?#]/)[0];
      if (!clean) continue;
      const target = path.join(ROOT, clean);
      if (!fs.existsSync(target)) {
        issues.push(`Link interno quebrado: ${f} -> ${clean}`);
      }
    }
  });
}

/* ---------- Requisição HTTP ---------- */
function httpReq(rawUrl, { method = 'HEAD', redirects = 0, timeout = TIMEOUT } = {}) {
  return new Promise((resolve) => {
    let u;
    try { u = new URL(rawUrl); } catch { return resolve({ status: 0, error: 'URL_INVALIDA' }); }
    const lib = u.protocol === 'https:' ? https : http;
    const req = lib.request(u, {
      method,
      headers: {
        'User-Agent': UA,
        'Accept': '*/*',
        'Accept-Encoding': 'identity'
      }
    }, (res) => {
      const status = res.statusCode || 0;
      if (status >= 300 && status < 400 && res.headers.location && redirects < MAX_REDIRECTS) {
        res.resume();
        let next;
        try { next = new URL(res.headers.location, rawUrl).toString(); } catch { return resolve({ status, error: 'REDIRECT_INVALIDO' }); }
        return httpReq(next, { method, redirects: redirects + 1 }).then(resolve);
      }
      // Consome (ou aborta) o corpo para liberar o socket
      let bytes = 0;
      res.on('data', (chunk) => {
        bytes += chunk.length;
        if (bytes > 524288) req.destroy(); // 512KB é suficiente
      });
      res.on('end', () => resolve({ status, finalUrl: res.headers.location ? undefined : rawUrl }));
      res.on('error', () => resolve({ status, error: 'CONN' }));
    });
    req.setTimeout(timeout, () => { req.destroy(new Error('timeout')); });
    req.on('error', (e) => resolve({ status: 0, error: e.code || e.message }));
    req.end();
  });
}

async function checkUrl(rawUrl) {
  let r = await httpReq(rawUrl, { method: 'HEAD' });
  // Alguns servidores rejeitam HEAD; tenta GET
  if (r.status === 0 || [400, 405, 501].includes(r.status)) {
    r = await httpReq(rawUrl, { method: 'GET' });
  }
  return r;
}

function classify(status) {
  if (status >= 200 && status < 300) return 'ok';
  if (status >= 300 && status < 400) return 'redirect';
  if (status === 0) return 'blocked'; // timeout/sem conexão — pode ser bloqueio de IP do runner
  if (status === 401 || status === 403) return 'blocked';
  if ([404, 410].includes(status)) return 'broken';
  if (status === 429 || status === 503) return 'blocked';
  if (status >= 500) return 'blocked';
  return 'unknown';
}

/* ---------- Worker pool ---------- */
async function runPool(items, worker) {
  const results = [];
  let i = 0;
  async function next() {
    const idx = i++;
    if (idx >= items.length) return;
    results.push(await worker(items[idx], idx));
    await next();
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, next));
  return results;
}

/* ---------- Main ---------- */
async function main() {
  const db = loadData();
  schemaCheck(db);

  if (!SKIP_NETWORK) {
    const targets = [];
    db.materiais.forEach((m) => {
      targets.push({ kind: 'url', label: m.id, url: m.url });
      if (m.pdf_url) targets.push({ kind: 'pdf_url', label: m.id, url: m.pdf_url });
    });

    const results = await runPool(targets, async (t) => {
      const r = await checkUrl(t.url);
      const cls = classify(r.status);
      return { ...t, status: r.status, cls, error: r.error || '' };
    });

    results.forEach((res) => {
      if (res.cls === 'broken') broken.push(res);
      else if (res.cls === 'blocked') blocked.push(res);
      else if (res.cls === 'unknown') issues.push(`[${res.label}/${res.kind}] status ${res.status} inesperado para ${res.url}`);
    });
  }

  localPagesCheck();

  /* ---------- Relatório ---------- */
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const now = new Date();
  const lines = [];
  lines.push('# Relatório de Verificação de Links — Biblioteca Digital');
  lines.push('');
  lines.push(`> Gerado em: ${now.toISOString().replace('T', ' ').slice(0, 16)} UTC · ` +
    `Network: ${SKIP_NETWORK ? 'desativada' : 'ativada'}`);
  lines.push('');
  lines.push(`- **Materiais**: ${db.materiais ? db.materiais.length : 0}`);
  lines.push(`- **Categorias**: ${db.categorias ? db.categorias.length : 0}`);
  lines.push(`- **Problemas de schema/estrutura**: ${issues.length}`);
  lines.push(`- **Links quebrados (404/410)**: ${broken.length}`);
  lines.push(`- **Links suspeitos (bloqueado/erro de servidor)**: ${blocked.length}`);
  lines.push('');

  lines.push('## Problemas de schema/estrutura');
  lines.push('');
  if (issues.length) issues.forEach((i) => lines.push(`- :x: ${i}`));
  else lines.push('Nenhum problema encontrado. :white_check_mark:');
  lines.push('');

  lines.push('## Links quebrados');
  lines.push('');
  if (broken.length) {
    broken.forEach((b) => lines.push(`- :x: [${b.label}](#) — ${b.kind} → \`${b.url}\` (HTTP ${b.status})`));
  } else {
    lines.push('Nenhum link quebrado. :white_check_mark:');
  }
  lines.push('');

  lines.push('## Links suspeitos (podem bloquear robôs)');
  lines.push('');
  if (blocked.length) {
    blocked.forEach((b) => lines.push(`- :warning: [${b.label}](javascript:void(0)) — ${b.kind} → \`${b.url}\` (HTTP ${b.status})`));
  } else {
    lines.push('Nenhum link suspeito.');
  }
  lines.push('');

  fs.writeFileSync(REPORT_FILE, lines.join('\n') + '\n', 'utf8');
  console.log(lines.join('\n'));

  const fail = issues.length > 0 || broken.length > 0;
  process.exit(fail ? 1 : 0);
}

main().catch((e) => {
  console.error('Falha na execução do script:', e);
  process.exit(2);
});
