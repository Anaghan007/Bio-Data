const CACHE_NAME = 'anaghan-profile-v2';
const ASSETS = [
  './',
  './index.html',
  './avatar.png',
  'https://fonts.googleapis.com/css2?family=Pacifico&family=Noto+Sans+Gujarati:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});