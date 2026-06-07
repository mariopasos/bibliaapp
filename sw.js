const CACHE_NAME = 'biblia-app-v8';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon.svg',
  './logo-hosanna.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first strategy: try network, fall back to cache
self.addEventListener('fetch', e => {
  // Only handle HTTP/HTTPS requests (ignore browser extensions, chrome-extension, etc.)
  if (!e.request.url.startsWith('http')) return;

  e.respondWith(
    fetch(e.request)
      .then(response => {
        // If we got a good response, clone it and update the cache
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(e.request, { ignoreSearch: true }).then(cached => {
          if (cached) return cached;
          
          // Only return index.html for navigation requests (HTML pages)
          if (e.request.mode === 'navigate' || (e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html'))) {
            return caches.match('./index.html');
          }
          
          // Return a 404 for missing assets when offline, avoiding serving index.html as JS/CSS
          return new Response('Not found', { status: 404, statusText: 'Not Found' });
        });
      })
  );
});
