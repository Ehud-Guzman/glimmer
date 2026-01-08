const CACHE_NAME = "glimmerink-cache-v1";

const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/favicon_io/android-chrome-192x192.png",
  "/favicon_io/android-chrome-512x512.png",
  "/images/Glimmer-OG.jpg",
];

// INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only GET
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Skip unsupported schemes
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return;
  }

  // Skip analytics & tracking
  if (
    url.hostname.includes("google-analytics.com") ||
    url.hostname.includes("googletagmanager.com")
  ) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          // Only cache valid responses
          if (!response || !response.ok || response.type === "opaque") {
            return response;
          }

          const responseClone = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });

          return response;
        })
        .catch(() => {
          // Offline fallback
          if (request.destination === "document") {
            return caches.match("/index.html");
          }
        });
    })
  );
});
