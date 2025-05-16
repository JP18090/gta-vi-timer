const CACHE_NAME = "Contagem GTA VI";
const urlsToCache = ["index.html", "manifest.json", "icons/LogoGTA6.png", "icons/LogoGTA6.png"];

// Instala e adiciona ao cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Responde com cache se estiver offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
