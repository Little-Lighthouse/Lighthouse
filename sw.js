const staticCacheName = 'site-static-v-7_15_23-2';
const dynamicCacheName = 'site-dynamic-v-7_15_23-2';
const assets = [
  '/Lighthouse/',
  '/Lighthouse/index.html',
  '/Lighthouse/assets/css/colors.css',
  '/Lighthouse/assets/css/main.css',
  '/Lighthouse/assets/images/Logo.jpg',
  '/Lighthouse/assets/images/low-poly-grid-haikei.svg',
  '/Lighthouse/assets/js/script.js',
  '/Lighthouse/assets/js/time.js',
  'https://code.jquery.com/jquery-3.7.0.min.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      if (cacheRes) {
        // Resource is already cached in site-static-v1, return it
        return cacheRes;
      } else {
        // Resource is not cached, fetch it and cache in site-dynamic-v1
        return fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            // check cached items size
            limitCacheSize(dynamicCacheName, 30);
            return fetchRes;
          });
        }).catch(() => {
          if (evt.request.url.indexOf('.html') > -1) {
            return caches.match('/Lighthouse/assets/pages/fallback.html');
          }
        });
      }
    })
  );
});
