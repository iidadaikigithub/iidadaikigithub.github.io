self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('degiriha-v1').then(function(cache) {
      return cache.addAll([
        './s1.html',
        './manifest.json',
        './01.png',
        './02.png',
        './03.png',
        './04.png',
        './05.png',
        './kouka.mp3',
        './yattane.jpg',
        './yattane.mp3',
        // 必要に応じて他のリソースも追加
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
