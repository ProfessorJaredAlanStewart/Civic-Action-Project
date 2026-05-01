/* Civic Action Project — Service Worker
   Caches the app shell so it works offline after first visit.
   Drop this file alongside CAP_Mobile_App.html and register from the page. */

const CACHE_NAME = 'cap-app-v1';
const APP_SHELL = [
  './CAP_Mobile_App.html',
  './'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  // Cache-first for app shell, network-first for everything else (e.g., fonts)
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // Cache same-origin responses opportunistically
        try {
          const url = new URL(req.url);
          if (url.origin === self.location.origin && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          }
        } catch (e) { /* ignore */ }
        return res;
      }).catch(() => cached);
    })
  );
});
