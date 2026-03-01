const CACHE_NAME = "travelbuddy-cache-v1";
const urlsToCache = [
  "/index.html",
  "/styles/style1.css",
  "/styles/style2.css",
  "/styles/style3.css",
  "/pages/day-trips.html",
  "/pages/Explore.html",
  "/pages/Mytips.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Caching main pages and styles...");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
