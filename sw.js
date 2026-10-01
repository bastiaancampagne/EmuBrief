const CACHE='emubrief-v2';const ASSETS=['./','index.html','styles.css','app.js','config.js','manifest.webmanifest','icon-192.png','icon-512.png','assets/scene-home.png','assets/scene-mail.png','assets/scene-agenda.png','assets/scene-paie.png','assets/scene-linkedin.png','assets/scene-history.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(fetch(e.request).then(r=>{let x=r.clone();caches.open(CACHE).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)))})
