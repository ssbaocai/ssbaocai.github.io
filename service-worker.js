/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Program Files/blog/hexo/public/2020/10/10/JAVA基础语法/index.html","e36c90623b11234f1eded04d5368e683"],["D:/Program Files/blog/hexo/public/2020/10/10/面向对象/index.html","6f5df439823289e241c9d45554c075f0"],["D:/Program Files/blog/hexo/public/2020/10/13/JavaWeb/index.html","791aac7548c6f3b244f2f922d46f0188"],["D:/Program Files/blog/hexo/public/2020/10/13/MyBatis/index.html","9e6b80a2c4b6f2ef1f811b716dcdbaf7"],["D:/Program Files/blog/hexo/public/2020/10/13/MySQL/index.html","59db70cb6c8d7ff6055c22e541f11c90"],["D:/Program Files/blog/hexo/public/2020/10/13/Spring/index.html","46ee4eb4463dada785ed4a4521cb7e55"],["D:/Program Files/blog/hexo/public/2020/10/13/SpringBoot/index.html","92212e4a098406ec0e14a6a47dd91101"],["D:/Program Files/blog/hexo/public/2020/10/13/SpringMVC/index.html","22359b2d3ae228338523e071e1266e3d"],["D:/Program Files/blog/hexo/public/2020/10/27/XML和JSON/index.html","f52cc204fd7b0b27f1ca47ddc7e7c73c"],["D:/Program Files/blog/hexo/public/2020/10/30/html常用标签/index.html","ddd6d387ed33bc365cac8fe7a0b6b5da"],["D:/Program Files/blog/hexo/public/2020/11/08/Java中的常用算法/index.html","a281e14969a28b4262d8a1c78090b647"],["D:/Program Files/blog/hexo/public/404.html","0ad4081de6b625729c8db6b49bac9a2e"],["D:/Program Files/blog/hexo/public/about/index.html","c34fd969caaafb7dcd24d7fec0e15540"],["D:/Program Files/blog/hexo/public/archives/2020/10/index.html","245a51c4b7c6d802eb1de98a06b2e23c"],["D:/Program Files/blog/hexo/public/archives/2020/11/index.html","ac8d2622c28079d599c1b0ba55e730e1"],["D:/Program Files/blog/hexo/public/archives/2020/index.html","42f959e9127cad75bf361a1924642b96"],["D:/Program Files/blog/hexo/public/archives/2020/page/2/index.html","b30c1c246bda1748580e0885a84c5c88"],["D:/Program Files/blog/hexo/public/archives/index.html","99b5655784579b652acc8cf434ebdf2d"],["D:/Program Files/blog/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Program Files/blog/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Program Files/blog/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Program Files/blog/hexo/public/categories/Java/index.html","be414c1a321569069d65b970087a9891"],["D:/Program Files/blog/hexo/public/categories/Java核心类/index.html","4838f7a72bb8a3a7ad590cb9ceb26b8a"],["D:/Program Files/blog/hexo/public/categories/MyBatis/index.html","791d5b3dab5f0014e3bd96c70c5a1e87"],["D:/Program Files/blog/hexo/public/categories/MySQL/index.html","5e8416fd0bd7b57dbc3a59ea664447e1"],["D:/Program Files/blog/hexo/public/categories/Spring/index.html","b817bfb4e69da94c8720b2bcea82f62b"],["D:/Program Files/blog/hexo/public/categories/SpringBoot/index.html","8239309e1d11ca33dd945dd7fedb52c2"],["D:/Program Files/blog/hexo/public/categories/SpringMVC/index.html","037c6a16c7911a093e35907a0ec4dc81"],["D:/Program Files/blog/hexo/public/categories/index.html","f0d848faf38c7f3f26804b74a8453ee6"],["D:/Program Files/blog/hexo/public/categories/前端/index.html","a4c3a65cd3c78696dda72a5709dc652e"],["D:/Program Files/blog/hexo/public/contact/index.html","21369ed271ed1d883972d62c54ec9ead"],["D:/Program Files/blog/hexo/public/css/app.css","c2c082da448be4541c4550f808f6d704"],["D:/Program Files/blog/hexo/public/css/comment.css","9ef55c7e23179cb4712dbb073b336fcd"],["D:/Program Files/blog/hexo/public/css/mermaid.css","aa23f51cb8d5d4396eafb2dab1a65566"],["D:/Program Files/blog/hexo/public/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["D:/Program Files/blog/hexo/public/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["D:/Program Files/blog/hexo/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Program Files/blog/hexo/public/images/alipay.png","9eaa6a54dfa33173e1d58684999f71c0"],["D:/Program Files/blog/hexo/public/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["D:/Program Files/blog/hexo/public/images/avatar.jpg","49d55f172017f2e181119170717c211f"],["D:/Program Files/blog/hexo/public/images/charu.jpg","02a8579c97286735d8da269e527d9eb7"],["D:/Program Files/blog/hexo/public/images/kuaisu.jpg","9f25503a92521b77efcda52675888761"],["D:/Program Files/blog/hexo/public/images/logo.svg","e67639a80e9511587a08359bc7740624"],["D:/Program Files/blog/hexo/public/images/maopao.jpg","4cce83206baa88b899b8fe4a0da779e5"],["D:/Program Files/blog/hexo/public/images/paypal.png","0986db629960e3333415b103fa7663be"],["D:/Program Files/blog/hexo/public/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["D:/Program Files/blog/hexo/public/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["D:/Program Files/blog/hexo/public/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["D:/Program Files/blog/hexo/public/images/wechatpay.png","ed2cbc96f1a6602caf4fe7ccfef71e08"],["D:/Program Files/blog/hexo/public/images/xuanze.jpg","07bbee4f32f61203faf0e528bbe676cb"],["D:/Program Files/blog/hexo/public/index.html","dda34628a0c60fba6050d90175a2cd8d"],["D:/Program Files/blog/hexo/public/js/app.js","18f526b122db3f728ade9a3304462663"],["D:/Program Files/blog/hexo/public/tags/Java基础/index.html","a22b3e13867f4ec14e0bed5df16f9cb9"],["D:/Program Files/blog/hexo/public/tags/Java应用/index.html","1c1f9ddcde7f7576038d73898ba18e20"],["D:/Program Files/blog/hexo/public/tags/XML，JSON/index.html","2d72a03528568c30aaab5c2079415467"],["D:/Program Files/blog/hexo/public/tags/html/index.html","b0d6e1eb5375483d560175b7adc2bad7"],["D:/Program Files/blog/hexo/public/tags/index.html","c5ebe67c9f274e5fd977f509acdc9834"],["D:/Program Files/blog/hexo/public/tags/数据库/index.html","35ef8968929862b06d0517c7f039c808"],["D:/Program Files/blog/hexo/public/tags/框架/index.html","4284fff1f2107dd0ca485f64a2b38829"],["D:/Program Files/blog/hexo/public/tags/面向对象/index.html","6086155b4e369f5a26ad852d37c4c388"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







