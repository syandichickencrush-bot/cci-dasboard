const CACHE_NAME='cci-v6-0-3-team-20260915';
const STATIC_FILES=['./','./index.html','./manifest.webmanifest','./cc-logo.png','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(STATIC_FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  if(u.hostname.includes('script.google.com')||u.hostname.includes('script.googleusercontent.com')){e.respondWith(fetch(r,{cache:'no-store'}));return}
  if(r.mode==='navigate'){e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{const cp=res.clone();caches.open(CACHE_NAME).then(c=>c.put(r,cp)).catch(()=>{});return res}).catch(()=>caches.match(r).then(x=>x||caches.match('./index.html'))));return}
  e.respondWith(caches.match(r).then(x=>x||fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE_NAME).then(c=>c.put(r,cp)).catch(()=>{})}return res})));
});
