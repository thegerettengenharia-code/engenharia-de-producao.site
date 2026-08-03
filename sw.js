var CACHE = 'eng-producao-site-v1';

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    var keys = await caches.keys();
    await Promise.all(keys.map(function (key) {
      if (key !== CACHE) return caches.delete(key);
    }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', function (event) {
  if (event.request.mode !== 'navigate') return;
  event.respondWith((async function () {
    try {
      return await fetch(event.request, { cache: 'no-store' });
    } catch (err) {
      var cached = await caches.match(event.request);
      if (cached) return cached;
      var root = await caches.match('/');
      if (root) return root;
      throw err;
    }
  })());
});
