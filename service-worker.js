importScripts("/zoiex/precache-manifest.06848cbcd38bb5628715b70697e0369e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-undef */

self.addEventListener('message', (e) => {
    if (!e.data) {
      return
    }
  
    if (e.data === 'skipWaiting') {
      self.skipWaiting()
    }
  
    if (e.data && e.data.type === 'LOGOUT') {
      // Select who we want to respond to
      console.log('logout')
      caches.delete('fz-runtime')
    }
  })
  
  self.addEventListener('push', function (event) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
      return
    }
    if (event.data) {
      const message = event.data.text()
      event.waitUntil(sendNotification(message))
    }
  })
  
  self.addEventListener('notificationclick', function (event) {
    event.notification.close()
    if (!event.action) {
      // Was a normal notification click
      const urlToOpen = new URL(self.location.origin).href
  
      const promiseChain = clients.matchAll({
        type: 'window',
        includeUncontrolled: true
      })
        .then((windowClients) => {
          let matchingClient = null
  
          for (let i = 0; i < windowClients.length; i++) {
            const windowClient = windowClients[i]
            if (windowClient.url === urlToOpen) {
              matchingClient = windowClient
              break
            }
          }
  
          if (matchingClient) {
            return matchingClient.focus()
          } else {
            return clients.openWindow(urlToOpen)
          }
        })
  
      event.waitUntil(promiseChain)
    }
  })
  
  const sendNotification = message => {
    // you could refresh a notification badge here with postMessage API
    let notification = JSON.parse(message)
    notification.options.badge = '/ferz_badge.png'
    notification.options.icon = '/icon-512x512.png'
  
    return self.registration.showNotification(notification.title, notification.options)
  }
  console.log('workbox', workbox);
  if (workbox) {
    workbox.setConfig({
      debug: false
    })
  
    workbox.core.clientsClaim()
  
    workbox.core.setCacheNameDetails({
      prefix: 'fz',
      precache: 'static',
      runtime: 'runtime'
    })
  
    self.__precacheManifest = [].concat(self.__precacheManifest || [])
  
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
  
    workbox.routing.registerRoute(
      new RegExp('https:\\/\\/(api|dex|assets|chaosnet-midgard|sochain|cloudflare-eth|mainnet|eth-mainnet)\\' +
        '.(ferz|2charge|github|binance|coingecko|exchangeratesapi|bepswap|com|etherscan|infura|alchemyapi|gateway)'),
      new workbox.strategies.NetworkFirst({
        cacheName: 'fz-runtime',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200, 404]
          })
        ]
      })
    )
  
    workbox.routing.registerNavigationRoute('/zoiex/')
  } else {
    console.log('Workbox didn\'t load')
  }
  
