// キャッシュ名とキャッシュするファイル
const CACHE_NAME = 'hanabi-touch-v1';
const urlsToCache = [
  './s6.html',
  './manifest.json',
  './tokudai.png',
  './randam.png',
  './h1.jpg',
  './h2.jpg',
  './h3.jpg',
  './h4.jpg',
  './h5.jpg',
  './hanabi1.gif',
  './hanabi2.gif',
  './hanabi3.gif',
  './hanabi4.gif',
  './hanabi5.gif',
  './hanabi6.gif',
  './hanabi7.gif',
  './hanabi8.gif',
  './hanabi1.mp3',
  './hanabi2.mp3',
  './hanabi3.mp3',
  './hanabi4.mp3',
  './hanabi5.mp3',
  './hanabi6.mp3',
  './hanabi7.mp3',
  './hanabi8.mp3',
  './hanabi.mp3',
  './hana4.mp3',
  './main_img.jpg',
  './打ち上げ花火1.mp3',
  './爆竹.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // クエリを除いたパスでキャッシュを検索
  event.respondWith(
    caches.match(new Request(url.pathname)).then(response => {
      return response || fetch(event.request);
    })
  );
});