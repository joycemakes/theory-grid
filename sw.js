// Offline support: serve from cache, refresh the cache in the background.
const CACHE = "theory-grid-v4";
const CORE = ["./", "index.html", "questions.js", "manifest.webmanifest", "icon-192.png", "icon-512.png",
  "fonts/orbitron-latin-wght-normal.woff2", "fonts/rajdhani-latin-500-normal.woff2",
  "fonts/rajdhani-latin-600-normal.woff2", "fonts/rajdhani-latin-700-normal.woff2"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request);
    const net = fetch(e.request).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
// Tapping a reminder brings the game to the front, or opens it.
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow("./")));
});
