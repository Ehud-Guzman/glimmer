/* eslint-disable no-restricted-globals */
const CACHE_NAME = "glimmerink-cache-v2";

// Keep this list small and stable.
// Everything else will be runtime-cached when fetched.
const PRECACHE_URLS = [
  "/", // SPA entry
  "/index.html",
  "/favicon.svg",
  "/favicon_io/android-chrome-192x192.png",
  "/favicon_io/android-chrome-512x512.png",
  "/images/Glimmer-OG.jpg",
  "/manifest.webmanifest",
];

// INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Helpers
const isHttp = (url) => url.protocol === "http:" || url.protocol === "https:";
const isSameOrigin = (url) => url.origin === self.location.origin;

const isAnalytics = (url) =>
  url.hostname.includes("google-analytics.com") ||
  url.hostname.includes("googletagmanager.com") ||
  url.hostname.includes("region1.google-analytics.com");

const isNavRequest = (request) => request.mode === "navigate";

// FETCH
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only GET
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Only http(s)
  if (!isHttp(url)) return;

  // Skip analytics/tracking
  if (isAnalytics(url)) return;

  // Only cache same-origin to avoid weird CDN/cache issues
  if (!isSameOrigin(url)) return;

  // Strategy:
  // - Navigation (HTML): network-first, fallback to cached index.html
  // - Static assets: cache-first, then network, then fallback
  if (isNavRequest(request)) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          // Optionally cache latest index.html for offline
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("/index.html", clone));
          return res;
        })
        .catch(() => caches.match("/index.html"))
    );
    return;
  }

  // Static/runtime assets
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          // Only cache valid responses
          if (!response || !response.ok) return response;

          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => {
          // Optional: fallback for images
          if (request.destination === "image") {
            return caches.match("/images/Glimmer-OG.jpg");
          }
        });
    })
  );
});
