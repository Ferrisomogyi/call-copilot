// Minimale service worker voor installeerbaarheid.
// Bewust GEEN caching: de app haalt altijd de nieuwste versie op,
// zodat updates via GitHub direct doorkomen.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* passthrough: netwerk zoals normaal */ });
