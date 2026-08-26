// v2 — deliberately does NOT cache the app shell.
// The v1 worker cached index.html once and served that same stale copy forever,
// which was the real reason updates never appeared no matter what was re-uploaded.
// This version wipes that old cache on activation and then gets out of the way,
// letting every request go straight to the network like a normal website —
// while still satisfying the "has a service worker" requirement for installability.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

// No fetch handler logic — requests pass straight through to the network as normal.// v2 — deliberately does NOT cache the app shell.
// The v1 worker cached index.html once and served that same stale copy forever,
// which was the real reason updates never appeared no matter what was re-uploaded.
// This version wipes that old cache on activation and then gets out of the way,
// letting every request go straight to the network like a normal website —
// while still satisfying the "has a service worker" requirement for installability.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

// No fetch handler logic — requests pass straight through to the network as normal.
