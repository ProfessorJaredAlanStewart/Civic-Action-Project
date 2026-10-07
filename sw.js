/* Civic Action Project — Service Worker
   Caches the app shell so it works offline after first visit.
   Drop this file alongside CAP_Mobile_App.html and register from the page.

   Pages (HTML) are fetched from the network first, so students always get
   the current version of the app and the planner. The cached copy is used
   only when the device is offline. Bump CACHE_NAME whenever you want every
   device to throw away what it has stored. */

const CACHE_NAME = 'cap-app-v2';
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

function storeCopy(req, res) {
  try {
    const url = new URL(req.url);
    if (url.origin === self.location.origin && res.status === 200) {
      const clone = res.clone();
      caches.open(CACHE_NAME).then((c) => c.put(req, clone));
    }
  } catch (e) { /* ignore */ }
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const accept = req.headers.get('accept') || '';
  const isPage = req.mode === 'navigate' || accept.includes('text/html');

  if (isPage) {
    // Network-first for pages: newest version when online, cached copy offline.
    // 'no-cache' makes the browser check with the server instead of reusing
    // its own stored copy, so an updated page shows up on the next visit.
    event.respondWith(
      fetch(req, { cache: 'no-cache' }).then((res) => {
        storeCopy(req, res);
        return res;
      }).catch(() => caches.match(req).then((cached) => cached || Response.error()))
    );
    return;
  }

  // Cache-first for everything else (icons, images, fonts).
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        storeCopy(req, res);
        return res;
      }).catch(() => cached);
    })
  );
});
