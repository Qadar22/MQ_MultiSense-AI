// const CACHE_NAME = 'mq-multisense-cache-v1';
// const urlsToCache = [
//   '/Users/hp/Desktop/MQ_MultiSense AI', // root or home page
//   '/index.html',
//   '/about.html',
//   '/blog.html',
//   '/careers.html',
//   '/Privacy Policy.html',
//   '/product-details.html',
//   '/products.html',
//   '/release.html',
//   '/scripts.js',
//   '/services.html',
//   '/styles.css',
//   '/manifest.json',
//   '/service-worker.js',
//   '/Terms of Service.html',
//   '/others/MQ_AI.ico',
//   '/others/MQ_AI.png',
//   '/others/WhatsApp Image 2024-07-02 at 15.27.37.jpeg',
//   '/others/WhatsApp Image 2024-07-02 at 15.32.38.jpeg',
//   '/others/WhatsApp Image 2024-07-02 at 15.32.39 (1).jpeg',
//   '/others/WhatsApp Image 2024-07-02 at 15.32.39 (2).jpeg',
//   '/others/WhatsApp Image 2024-07-02 at 15.32.39.jpeg',
//   '/others/WhatsApp Image 2024-07-02 at 15.46.19.jpeg',
//   '/others/WhatsApp Image 2024-07-02 at 16.01.50.jpeg',
//   '/others/WhatsApp Image 2024-07-02 at 16.02.50.jpeg', 
//   '/others/WhatsApp Image 2024-07-03 at 01.28.22.jpeg',
//   '/others/34znOeyMZrqEp38rJXw6glPj-image-maker.jpg',
//   '/others/download (1).png', 
//   '/others/download (2).png',
//   '/others/download.png'
// ];

// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       })
//   );
// });

// self.addEventListener('activate', function(event) {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener('push', function(event) {
//     const data = event.data.json();
//     const options = {
//       body: data.body,
//       icon: '/icons/icon-192x192.png',
//       badge: '/icons/icon-192x192.png'
//     };
//     event.waitUntil(
//       self.registration.showNotification(data.title, options)
//     );
//   });
  
const CACHE_NAME = 'mq-multisense-cache-v1';
const urlsToCache = [
  '/', // root or home page
  '/index.html',
  '/about.html',
  '/blog.html',
  '/careers.html',
  '/Privacy Policy.html',
  '/product-details.html',
  '/products.html',
  '/release.html',
  '/scripts.js',
  '/services.html',
  '/styles.css',
  '/manifest.json',
  '/service-worker.js',
  '/Terms of Service.html',
  '/others/MQ_AI.ico',
  '/others/MQ_AI.png',
  '/others/WhatsApp Image 2024-07-02 at 15.27.37.jpeg',
  '/others/WhatsApp Image 2024-07-02 at 15.32.38.jpeg',
  '/others/WhatsApp Image 2024-07-02 at 15.32.39 (1).jpeg',
  '/others/WhatsApp Image 2024-07-02 at 15.32.39 (2).jpeg',
  '/others/WhatsApp Image 2024-07-02 at 15.32.39.jpeg',
  '/others/WhatsApp Image 2024-07-02 at 15.46.19.jpeg',
  '/others/WhatsApp Image 2024-07-02 at 16.01.50.jpeg',
  '/others/WhatsApp Image 2024-07-02 at 16.02.50.jpeg', 
  '/others/WhatsApp Image 2024-07-03 at 01.28.22.jpeg',
  '/others/34znOeyMZrqEp38rJXw6glPj-image-maker.jpg',
  '/others/download (1).png', 
  '/others/download (2).png',
  '/others/download.png'
];

self.addEventListener('install', function(event) {
   event.waitUntil(
       caches.open(CACHE_NAME)
           .then(function(cache) {
               console.log('Opened cache');
               return cache.addAll(urlsToCache);
           })
   );
});

self.addEventListener('fetch', function(event) {
   event.respondWith(
       caches.match(event.request)
           .then(function(response) {
               if (response) {
                   return response;
               }
               return fetch(event.request);
           })
   );
});

self.addEventListener('activate', function(event) {
   const cacheWhitelist = [CACHE_NAME];
   event.waitUntil(
       caches.keys().then(function(cacheNames) {
           return Promise.all(
               cacheNames.map(function(cacheName) {
                   if (cacheWhitelist.indexOf(cacheName) === -1) {
                       return caches.delete(cacheName);
                   }
               })
           );
       })
   );
});
