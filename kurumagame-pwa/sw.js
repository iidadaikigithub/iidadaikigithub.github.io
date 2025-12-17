const CACHE_NAME = 'kurumagame-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './01.gif',
  './01.mp3',
  './02.gif',
  './02.mp3',
  './03.gif',
  './03.mp3',
  './04.gif',
  './04.mp3',
  './05.gif',
  './05.mp3',
  './06.gif',
  './06.mp3',
  './07.gif',
  './07.mp3',
  './08.gif',
  './08.mp3',
  './09.gif',
  './09.mp3',
  './10.gif',
  './10.mp3',
  './11.gif',
  './11.mp3',
  './12.gif',
  './12.mp3',
  './13.gif',
  './13.mp3',
  './14.gif',
  './14.mp3',
  './15.gif',
  './15.mp3',
  './BGM.mp3',
  './BGM2.mp3',
  './BGM3.mp3',
  './haikei1.jpg',
  './haikei2.jpg',
  './haikei3.jpg',
  './haikei4.jpg',
  './haikei5.jpg',
  './road1.png',
  './road2.png',
  './road3.png',
  './road4.png',
  './s1.html',
  './s2.html',
  './けいじどうしゃ.gif'
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
