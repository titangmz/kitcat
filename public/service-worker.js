/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

if (workbox) {
    console.log(`Workbox is loaded`);
    workbox.precaching.precacheAndRoute(self.__precacheManifest);
    console.log(workbox)

    /*self.addEventListener('fetch',event=>{
        event.responseWith(caches.match(event.request).then(cachedResponse=>{
            return cachedResponse || fetch(event.request)
        }))
    })*/


} 
else {
    console.log(`Workbox didn't load`);
}