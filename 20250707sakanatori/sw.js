const CACHE_NAME = 'sakana-pwa-v1';
const urlsToCache = [
  './s1.html',
  './manifest.json',
  './sw.js',
  './icon-192.png',
  './icon-512.png',
  './ami1.png', './ami2.png', './ami3.png', './ami4.png',
  './sakana.gif', './sakana2.gif', './sakana1.png', './sakana2.png', './sakana3.png',
  './sakana4.png', './sakana5.png', './sakana6.png', './sakana7.png',
  './haikei.png', './haikei2.png', './suisou.png', './suisou2.png'
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});
