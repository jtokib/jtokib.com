var CACHE_NAME = 'jtokib-cache-v2';
var urlsToCache = [
    '/',
    '/files/js/bundle.js',
    '/files/css/styles.css'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if(response) {
                return response;
            }
            return fetch(event.request).then(
                (response) => {
                    if(!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    var responseToCache = response.clone();

                    cache.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(event.request, responseToCache)
                    });
                    return response;
                }
            );
        })
    );
});

self.addEventListener('activate', (event) => {
    var cacheWhitelist = ['jtokib-cache-v1'];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if(cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});