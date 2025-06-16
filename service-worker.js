self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('markentry-cache').then(function(cache) {
      return cache.addAll([
        'MarkEntryApp_PWA_WithDisplay.html',
        'manifest.json',
        'icon.png'
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
