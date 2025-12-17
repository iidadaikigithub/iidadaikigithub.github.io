const CACHE_NAME = 'hensintunnel-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './01.html',
  './01.jpg',
  './02.html',
  './02.jpg',
  './03.gif',
  './03.html',
  './03.jpg',
  './03.png',
  './03m.gif',
  './04.gif',
  './04.html',
  './04.jpg',
  './04.png',
  './04m.gif',
  './05.gif',
  './05.html',
  './05.jpg',
  './05.png',
  './05m.gif',
  './06.gif',
  './06.html',
  './06.jpg',
  './06.png',
  './06m.gif',
  './07.gif',
  './07.html',
  './07.jpg',
  './07.png',
  './07m.gif',
  './08.gif',
  './08.html',
  './08.jpg',
  './08.png',
  './08m.gif',
  './09.gif',
  './09.html',
  './09.jpg',
  './09.png',
  './09m.gif',
  './10.gif',
  './10.html',
  './10.jpg',
  './10.png',
  './10m.gif',
  './11.gif',
  './11.html',
  './11.jpg',
  './11.png',
  './11m.gif',
  './12.gif',
  './12.html',
  './12.jpg',
  './12.png',
  './12a.png',
  './12m.gif',
  './13.gif',
  './13.html',
  './13.jpg',
  './13.png',
  './13m.gif',
  './14.gif',
  './14.html',
  './14.jpg',
  './14.png',
  './14m.gif',
  './15.gif',
  './15.html',
  './15.jpg',
  './15.png',
  './15m.gif',
  './16.gif',
  './16.html',
  './16.jpg',
  './16.png',
  './16m.gif',
  './17.gif',
  './17.html',
  './17.jpg',
  './17.png',
  './17m.gif',
  './18.gif',
  './18.html',
  './18.jpg',
  './18.png',
  './18m.gif',
  './19.gif',
  './19.html',
  './19.jpg',
  './19.png',
  './19m.gif',
  './20.gif',
  './20.html',
  './20.jpg',
  './20.png',
  './201.gif',
  './20251210tokutengame/2025y12m09d_213102545.jpg',
  './20251210tokutengame/2025y12m09d_213106195.jpg',
  './20251210tokutengame/karaokedancetou.png',
  './20251210tokutengame/kouka.wav',
  './20251210tokutengame/s1.html',
  './20251210tokutengame/undoutou.png',
  './20m.gif',
  './21.html',
  './21.jpg',
  './tougou.html'
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
