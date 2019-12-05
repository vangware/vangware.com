/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "fd2d4816625933c94912bf25191fce9d"
  },
  {
    "url": "images/192.png",
    "revision": "3816e77760a7d827c70f0286f186d3e1"
  },
  {
    "url": "images/512.png",
    "revision": "39054b06414d37d31feb42c1b69f4004"
  },
  {
    "url": "images/logo.big.mono.negative.svg",
    "revision": "b86c364ed49f51ed861445dc637b79f9"
  },
  {
    "url": "images/logo.big.mono.svg",
    "revision": "9dc8db6595b7d6661e774129bf67c4fb"
  },
  {
    "url": "images/logo.big.negative.svg",
    "revision": "1139b56e1be2ebff965c34622f1218c5"
  },
  {
    "url": "images/logo.big.svg",
    "revision": "29cf21a3edcc79b611b574605646f982"
  },
  {
    "url": "images/logo.small.svg",
    "revision": "d15730d3c02433c8dd63cda6652358f8"
  },
  {
    "url": "images/thumb.png",
    "revision": "bf65aae6a386640c7f8a1291178ea5a2"
  },
  {
    "url": "images/tile.large.png",
    "revision": "645446737ff8142dfb68fab76b9c4483"
  },
  {
    "url": "images/tile.medium.png",
    "revision": "08ce69f10bbcaa3a2ca3ca6d64fb101f"
  },
  {
    "url": "images/tile.small.png",
    "revision": "b1923ecf1d135766570fd591f6be33da"
  },
  {
    "url": "images/tile.wide.png",
    "revision": "7589da726f70ced6c42b9b112ee46588"
  },
  {
    "url": "index.html",
    "revision": "330e74db3b8406a89d0df2e3563dfb6e"
  },
  {
    "url": "load-sw.js",
    "revision": "851b831a2ff8c3a9a2a2c50433360227"
  },
  {
    "url": "manifest.json",
    "revision": "bee37fe428598d3cd318361fc37c1864"
  },
  {
    "url": "package.json",
    "revision": "547fd38f3b7b2acf769a4abfb4b15f46"
  },
  {
    "url": "style.css",
    "revision": "00a913d313a789ff498bb8e4f888ac09"
  },
  {
    "url": "workbox-config.js",
    "revision": "4f64d6785e0f42875b7956d3efccf1ba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
