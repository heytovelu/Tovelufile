/**
 * TOVELU PWA SERVICE WORKER V1.0
 * Provides offline resilience, instant cache-first asset loading, and PWA installation support.
 */

const CACHE_NAME = 'tovelu-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './app.html',
  './index.html',
  './survey.html',
  './mobile-survey.html',
  './desktop-survey.html',
  './thais.html',
  './thais_engine.js',
  './survey-data.js',
  './tovelu-design-system.css',
  './manifest.json',
  './tovelu-icon-color.svg'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./app.html');
        }
      });
    })
  );
});
