self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('3shu-cache-v1').then(function(cache) {
      return cache.addAll([
        './3shu.html',
        './aka.mp3',
        './ki.mp3',
        './ao.mp3',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
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
