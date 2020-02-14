var CACHE_NAME = 'jtokib-cache-v1';
var urlsToCache = [
    '/',
    '/files/js/bundle.js',
    '/files/css/styles.css',
    '/files/images/favicon-32x32.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
        .catch((e) => {console.error(e) })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request).then(
                (response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache)
                        })
                        .catch((e) => {
                            console.error(e)
                        })
                    return response;
                }
            )
            .catch((e) => {
                console.error(e)
            })
        })
        .catch((e) => {
            console.error(e)
        })
    );
});

self.addEventListener('activate', (event) => {
    var cacheWhitelist = ['jtokib-cache-v1'];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .catch((e) => {
            console.error(e)
        })
    );
});