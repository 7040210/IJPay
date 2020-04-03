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
    "url": "404.html",
    "revision": "0f53642e4ae82d3645e15f6143690b32"
  },
  {
    "url": "assets/css/0.styles.a7c1ccb7.css",
    "revision": "02a0cdff8c18b7d0120be8aee6fcf10b"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ae54015c.js",
    "revision": "e6730d606fee4b952f085a7b9fa8ce48"
  },
  {
    "url": "assets/js/11.f9e5cf48.js",
    "revision": "c08b3b516ff1eb8c36b6cc1209297133"
  },
  {
    "url": "assets/js/12.a2ea36db.js",
    "revision": "f7f7a50c330f7436c023c51afdda8988"
  },
  {
    "url": "assets/js/13.2c1f6e09.js",
    "revision": "5f4b0b2ec7edfa02be386b266e9a0d22"
  },
  {
    "url": "assets/js/14.2dab5431.js",
    "revision": "c00d865fb248bb5f802fe0ab61424406"
  },
  {
    "url": "assets/js/15.c9e5aec9.js",
    "revision": "34fb87a9c3883d4898c23f7d9addc72c"
  },
  {
    "url": "assets/js/16.61532ba1.js",
    "revision": "c7f010138a24e6beed4b373a072eb87e"
  },
  {
    "url": "assets/js/17.2b93c100.js",
    "revision": "c942d64399aaee116074ca5028bd21c1"
  },
  {
    "url": "assets/js/18.753aa5dc.js",
    "revision": "82620d0fb0804c03c89cc70f4f79b429"
  },
  {
    "url": "assets/js/19.1249ccc0.js",
    "revision": "939400963454b1f5099d08a3b8197e60"
  },
  {
    "url": "assets/js/20.c29711bf.js",
    "revision": "fe7baf877879db7601bd78dfbece7b13"
  },
  {
    "url": "assets/js/21.21010749.js",
    "revision": "38f0972c63b8774e8cc1f227fdc2368b"
  },
  {
    "url": "assets/js/22.93d2ec68.js",
    "revision": "a8b40d28eab1e4338a99a5f9c4a1ded9"
  },
  {
    "url": "assets/js/23.e2485fa7.js",
    "revision": "d2d3a4c25402bd0b74f495f4c75686c1"
  },
  {
    "url": "assets/js/24.46947aec.js",
    "revision": "6f49ab1c34230da03eb4770b6e3d6d53"
  },
  {
    "url": "assets/js/25.cb651e53.js",
    "revision": "695afda993a3d71b66d8e732555e3a41"
  },
  {
    "url": "assets/js/26.4bd7829a.js",
    "revision": "362a57aecb93495bd787da0100d1137c"
  },
  {
    "url": "assets/js/27.9e74fa80.js",
    "revision": "4c63d0e14d5365b84192a17f1c62e663"
  },
  {
    "url": "assets/js/28.262bcb59.js",
    "revision": "56b17b13b49735780fbf1fbcf8cb041d"
  },
  {
    "url": "assets/js/29.7bff6d79.js",
    "revision": "271a4351e5a828a1844f946855d77f45"
  },
  {
    "url": "assets/js/3.8eed32b7.js",
    "revision": "ff78f5ac518e1ea924b339393b89e18b"
  },
  {
    "url": "assets/js/30.3a16227c.js",
    "revision": "148ba067c274873352fc048d27c36bc1"
  },
  {
    "url": "assets/js/4.a0e75a3d.js",
    "revision": "b1930a3b89ce0a7f3b4734465641522d"
  },
  {
    "url": "assets/js/5.c4a8ee42.js",
    "revision": "ec850af706321bd26fc85ad096194a1f"
  },
  {
    "url": "assets/js/6.efbc9fd3.js",
    "revision": "c0488d6d506b37e2e1f468750604e8ea"
  },
  {
    "url": "assets/js/7.a091a6f6.js",
    "revision": "f3e1fb0250fc4d47681d1e3150493e8c"
  },
  {
    "url": "assets/js/8.307cced7.js",
    "revision": "e2d360f479d4e4357a8b3e19f7ef422e"
  },
  {
    "url": "assets/js/9.0a723ff3.js",
    "revision": "d79a08486b08391e67d82dae3c0b9c0c"
  },
  {
    "url": "assets/js/app.d688652c.js",
    "revision": "2801df6af3934dd1b114e7cea1e16b4c"
  },
  {
    "url": "assets/js/vendors~notification.241402c3.js",
    "revision": "805674791258660334e65e8dacf35a0f"
  },
  {
    "url": "guide/alipay/extension.html",
    "revision": "1e8cb05ffdac2927c191bd88d0cbeb14"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "ab77a2874e812fba4ec207f8367be401"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "37e2f7ac232d3b91076142e645f34186"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "c5cb6a9764e5dfc9f6392f24380db6f7"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "8326df65c1bed658fdf565f6eac54f2f"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "d6704037a2768b1e8a09af67084b1724"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "269d34903b3d1c2fc8c3108092d6bb06"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "7005b27e9b8d829b5ce8c89c5af01b59"
  },
  {
    "url": "guide/http.html",
    "revision": "2c2e1dc82fa3fef03f5cc65bec8edcc6"
  },
  {
    "url": "guide/index.html",
    "revision": "ee2ad75f3930ac690e0056404c4b4c6d"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "ee61e2e6a722aa4925572f8f0f47f985"
  },
  {
    "url": "guide/maven.html",
    "revision": "b0a63f3fdbf1b1acdb8c69719ba0eacb"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "841e229599399de87b0e8ae4d106adbc"
  },
  {
    "url": "guide/resource.html",
    "revision": "768b13e6e4593021e708322317fca5ff"
  },
  {
    "url": "guide/tools/frp/index.html",
    "revision": "49b2c8df4c145f525a34cdd824a277c8"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "8cedad134ee40c1698273382a4babf9d"
  },
  {
    "url": "guide/weixin/tnwx.html",
    "revision": "6f175ecc674f47d9d3d7a775f5c57f7a"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "f94f9f590f1824035a2972413378c5bc"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "9b36bb4c99f70977a5a2b19eb9745d4f"
  },
  {
    "url": "guide/wxpay/external.html",
    "revision": "ad599103c7f0a4ccc1b07b778e68b0ff"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "53de998dd03e0bb69aaf4e9989b8c9ba"
  },
  {
    "url": "guide/wxpay/question.html",
    "revision": "860ca5132046037be7b653f3a91ae7f0"
  },
  {
    "url": "index.html",
    "revision": "0c2aa89d00f2394aad7e041263b3419e"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "311a9f9b98f805954aeb9711c2b7959f"
  },
  {
    "url": "wxpay.png",
    "revision": "f8f237b08107f485bcb03b3937ec6a08"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
