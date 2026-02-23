/**
 * ゴルフ規則 PWA - Service Worker
 * 完全オフライン対応
 */

const CACHE_NAME = 'golf-rules-v5';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/quickguide.js',
  './js/search.js',
  './js/app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install - cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app assets');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - cache-first strategy (strip query params for cache matching)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  url.search = ''; // Strip query params for cache matching
  const cleanRequest = new Request(url.toString(), { headers: event.request.headers });

  event.respondWith(
    caches.match(cleanRequest)
      .then(cached => {
        if (cached) {
          return cached;
        }
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || event.request.method !== 'GET') {
            return response;
          }
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(cleanRequest, clone);
          });
          return response;
        });
      })
      .catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
});
