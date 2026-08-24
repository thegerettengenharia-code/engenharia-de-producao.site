/* GerettPDF — motor compartilhado de exportação PDF (GP & PDP)
   Carrega html2canvas + jsPDF sob demanda e converte HTML em PDF A4 multipáginas. */
(function () {
  'use strict';

  var CDN_H2C = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
  var CDN_JSPDF = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  var pending = null;

  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = res;
      s.onerror = function () { rej(new Error('cdn:' + src)); };
      document.head.appendChild(s);
    });
  }

  function ensureLibs() {
    if (window.html2canvas && window.jspdf && window.jspdf.jsPDF) return Promise.resolve();
    if (!pending) {
      pending = loadScript(CDN_H2C)
        .then(function () { return loadScript(CDN_JSPDF); })
        .then(function () {
          if (!(window.html2canvas && window.jspdf && window.jspdf.jsPDF)) throw new Error('libs');
        })
        .catch(function (e) { pending = null; throw e; });
    }
    return pending;
  }

  function hostStyles() {
    var st = document.createElement('style');
    st.id = 'gerett-pdf-style';
    st.textContent =
      '#gerett-pdf-host{position:fixed;left:-12000px;top:0;width:794px;background:#fff;color:#111;z-index:-1}' +
      '#gerett-pdf-host .gpx{font-family:Georgia,serif;padding:36px;line-height:1.55}' +
      '#gerett-pdf-host h1{font-size:21pt;border-bottom:2.5px solid #222;padding-bottom:6px;margin:0 0 4px;font-family:Georgia,serif}' +
      '#gerett-pdf-host h2{font-size:13pt;margin:18px 0 6px;color:#003;font-family:Arial,sans-serif}' +
      '#gerett-pdf-host h3{font-size:11.5pt;margin:12px 0 4px;font-family:Arial,sans-serif}' +
      '#gerett-pdf-host .pr-meta{color:#666;font-size:9pt;margin:0 0 14px}' +
      '#gerett-pdf-host p,#gerett-pdf-host li{font-size:10.5pt;line-height:1.55}' +
      '#gerett-pdf-host table{border-collapse:collapse;width:100%;margin:8px 0;font-family:Arial,sans-serif}' +
      '#gerett-pdf-host th,#gerett-pdf-host td{border:1px solid #888;padding:5px 8px;font-size:9.5pt;text-align:left;vertical-align:top}' +
      '#gerett-pdf-host th{background:#ececec;font-weight:700}';
    return st;
  }

  /* bodyHtml já deve vir escapado/seguro pelos chamadores */
  function fromHTML(title, bodyHtml, filename) {
    return ensureLibs().then(function () {
      var st = hostStyles();
      document.head.appendChild(st);
      var host = document.createElement('div');
      host.id = 'gerett-pdf-host';
      host.setAttribute('aria-hidden', 'true');
      host.innerHTML =
        '<div class="gpx"><h1>' + title + '</h1>' +
        '<p class="pr-meta">Gerett — Engenharia de Produção · gerado em ' +
        new Date().toLocaleDateString('pt-BR') + '</p>' + bodyHtml + '</div>';
      document.body.appendChild(host);
      return window.html2canvas(host.firstElementChild, { scale: 2, backgroundColor: '#ffffff', logging: false })
        .then(function (canvas) {
          var jsPDF = window.jspdf.jsPDF;
          var pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
          var pageW = 210, pageH = 297, m = 12;
          var iw = pageW - 2 * m;
          var pxPerMm = canvas.width / iw;
          var pageHpx = Math.floor((pageH - 2 * m) * pxPerMm);
          var y = 0, page = 0;
          while (y < canvas.height - 2) {
            var sliceH = Math.min(pageHpx, canvas.height - y);
            var slice = document.createElement('canvas');
            slice.width = canvas.width;
            slice.height = sliceH;
            var ctx = slice.getContext('2d');
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, slice.width, slice.height);
            ctx.drawImage(canvas, 0, y, canvas.width, sliceH, 0, 0, canvas.width, sliceH);
            if (page > 0) pdf.addPage();
            pdf.addImage(slice.toDataURL('image/jpeg', 0.92), 'JPEG', m, m, iw, sliceH / pxPerMm, undefined, 'FAST');
            y += sliceH;
            page++;
          }
          pdf.save(filename);
          host.remove();
          st.remove();
        })
        .catch(function (e) {
          host.remove();
          st.remove();
          throw e;
        });
    });
  }

  window.GerettPDF = { fromHTML: fromHTML };
})();
