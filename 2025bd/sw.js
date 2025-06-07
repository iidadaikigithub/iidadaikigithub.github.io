const CACHE_NAME = 'cake-app-v1';
const urlsToCache = [
  './s2.html',
  './cake.jpg',
  './1.gif', './2.gif', './3.gif',
  './1.png','./2.png','./3.png','./4.png','./5.png','./6.png','./7.png','./8.png','./9.png','./10.png','./11.png','./12.png','./13.png','./14.png','./15.png','./16.png','./17.png','./18.png','./19.png','./20.png',
  './h1.png','./h2.png','./h3.png','./h4.png','./h5.png',
  './trash.png',
  './oiwai.png',
  './omedetou.gif', './omedetou.png',
  './wind.gif',
  './choko.mp3', './wind.mp3', './omedetou.mp3',
  './m1.mp3', './m2.mp3', './m3.mp3',
  './manifest.json',
  './sw.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
