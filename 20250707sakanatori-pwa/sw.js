const CACHE_NAME = 'sakanatori-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './ami1.png',
  './ami2.png',
  './ami3.png',
  './ami4.png',
  './haikei.png',
  './haikei2.png',
  './mizu1.wav',
  './mizu2.wav',
  './s1.html',
  './s2.html',
  './s3.html',
  './s4.html',
  './saisou2.png',
  './sakana.gif',
  './sakana1.png',
  './sakana2.gif',
  './sakana2.png',
  './sakana3.png',
  './sakana4.png',
  './sakana5.png',
  './sakana6.png',
  './sakana7.png',
  './shuukei.wav',
  './suisou.png',
  './suisouwaku.png',
  './waku.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
