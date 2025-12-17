const CACHE_NAME = 'hanabi-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './h1.jpg',
  './h2.jpg',
  './h3.jpg',
  './h4.jpg',
  './h5.jpg',
  './hana4.mp3',
  './hanabi.mp3',
  './hanabi1.gif',
  './hanabi1.mp3',
  './hanabi2.gif',
  './hanabi2.mp3',
  './hanabi3.gif',
  './hanabi3.mp3',
  './hanabi4.gif',
  './hanabi4.mp3',
  './hanabi5.gif',
  './hanabi5.mp3',
  './hanabi6.gif',
  './hanabi6.mp3',
  './hanabi7.gif',
  './hanabi7.mp3',
  './hanabi8.gif',
  './hanabi8.mp3',
  './hanabi9.mp3',
  './hyu.mp3',
  './keisankaisi.png',
  './keisanshuuryou.png',
  './main_img.jpg',
  './randam.png',
  './s1.html',
  './s1-pwa.html',
  './s6.html',
  './s7.html',
  './s8.html',
  './s9.html',
  './tokudai.png',
  './打ち上げ花火1.mp3',
  './爆竹.mp3'
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
