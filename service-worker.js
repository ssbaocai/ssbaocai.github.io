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

var precacheConfig = [["D:/Program Files/blog/hexo/public/2020/10/10/JAVA基础语法/index.html","8280c5a3515971aa8e179e96689e30ee"],["D:/Program Files/blog/hexo/public/2020/10/10/面向对象/index.html","2fed419d4165ed7356217b1d6deaf664"],["D:/Program Files/blog/hexo/public/2020/10/13/JavaWeb/index.html","ef6d353af8e2fdf55a2398b137e9c99e"],["D:/Program Files/blog/hexo/public/2020/10/13/MyBatis/index.html","50e523315e12f573a8e76e1adfb47cff"],["D:/Program Files/blog/hexo/public/2020/10/13/MySQL/index.html","4e9123e9e7ff54591c560cb9c0e88b2b"],["D:/Program Files/blog/hexo/public/2020/10/13/Spring/index.html","7e54a293ecf21885ae39df125527b02c"],["D:/Program Files/blog/hexo/public/2020/10/13/SpringBoot/index.html","d34afd57f0b596de0b18e6d5983b3c61"],["D:/Program Files/blog/hexo/public/2020/10/13/SpringMVC/index.html","bb11aa0347361dc37eef29979fb47423"],["D:/Program Files/blog/hexo/public/2020/10/27/XML和JSON/index.html","49353844b6e69d9aa13a8ef67523dab3"],["D:/Program Files/blog/hexo/public/2020/10/30/html常用标签/index.html","306e71d2cc5689305c5226b50898fb5f"],["D:/Program Files/blog/hexo/public/2020/11/08/Java中的常用算法/index.html","43cb4e2c29b4270bf944f3f57b24a726"],["D:/Program Files/blog/hexo/public/2020/11/14/MySQL基础课堂笔记/index.html","99579fe6e2ef42dbb8ab03a7b6320d03"],["D:/Program Files/blog/hexo/public/404.html","6392ea5f519f2e79111b9797f1b73ed0"],["D:/Program Files/blog/hexo/public/about/index.html","8a32420243553515b137cff999d9d9f6"],["D:/Program Files/blog/hexo/public/archives/2020/10/index.html","b5819172fcf712bc46aa4e2d1972263b"],["D:/Program Files/blog/hexo/public/archives/2020/11/index.html","2768262fc3802043923c08f72565bfda"],["D:/Program Files/blog/hexo/public/archives/2020/index.html","4d1840645a782508219c203a5f439633"],["D:/Program Files/blog/hexo/public/archives/2020/page/2/index.html","31394f4a345a51c64491b5369efdf575"],["D:/Program Files/blog/hexo/public/archives/index.html","f4aeab40f387fd250baccaa2b9d65580"],["D:/Program Files/blog/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Program Files/blog/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Program Files/blog/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Program Files/blog/hexo/public/categories/Java/index.html","666e54d864b6b4cfc5555ff44704d46a"],["D:/Program Files/blog/hexo/public/categories/Java核心类/index.html","a9ed2f6ec852b4f1ce3702c2b2e6dc1f"],["D:/Program Files/blog/hexo/public/categories/MyBatis/index.html","beaba031a1e4801a4d63a300b8e18d7a"],["D:/Program Files/blog/hexo/public/categories/MySQL/index.html","c1a0e9210793f476a8e6d2e8de6abdd9"],["D:/Program Files/blog/hexo/public/categories/Spring/index.html","b6bd3a3d58d4d404f666f804fa52383f"],["D:/Program Files/blog/hexo/public/categories/SpringBoot/index.html","27eb1498a5e9267eb165b735ddf01419"],["D:/Program Files/blog/hexo/public/categories/SpringMVC/index.html","e5eecab6d8d02a7062ae743aebcd6910"],["D:/Program Files/blog/hexo/public/categories/index.html","423d1a4c3844da31e6a1ba92387bc23f"],["D:/Program Files/blog/hexo/public/categories/前端/index.html","d6eaabbbc9eefa029eca5ed2d88f9120"],["D:/Program Files/blog/hexo/public/contact/index.html","7906b92b20dbb0551e0e1072d1c229d1"],["D:/Program Files/blog/hexo/public/css/app.css","c2c082da448be4541c4550f808f6d704"],["D:/Program Files/blog/hexo/public/css/comment.css","9ef55c7e23179cb4712dbb073b336fcd"],["D:/Program Files/blog/hexo/public/css/mermaid.css","aa23f51cb8d5d4396eafb2dab1a65566"],["D:/Program Files/blog/hexo/public/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["D:/Program Files/blog/hexo/public/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["D:/Program Files/blog/hexo/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Program Files/blog/hexo/public/images/alipay.png","9eaa6a54dfa33173e1d58684999f71c0"],["D:/Program Files/blog/hexo/public/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["D:/Program Files/blog/hexo/public/images/avatar.jpg","49d55f172017f2e181119170717c211f"],["D:/Program Files/blog/hexo/public/images/charu.jpg","02a8579c97286735d8da269e527d9eb7"],["D:/Program Files/blog/hexo/public/images/kuaisu.jpg","9f25503a92521b77efcda52675888761"],["D:/Program Files/blog/hexo/public/images/logo.svg","e67639a80e9511587a08359bc7740624"],["D:/Program Files/blog/hexo/public/images/maopao.jpg","4cce83206baa88b899b8fe4a0da779e5"],["D:/Program Files/blog/hexo/public/images/paypal.png","0986db629960e3333415b103fa7663be"],["D:/Program Files/blog/hexo/public/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["D:/Program Files/blog/hexo/public/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["D:/Program Files/blog/hexo/public/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["D:/Program Files/blog/hexo/public/images/wechatpay.png","ed2cbc96f1a6602caf4fe7ccfef71e08"],["D:/Program Files/blog/hexo/public/images/xuanze.jpg","07bbee4f32f61203faf0e528bbe676cb"],["D:/Program Files/blog/hexo/public/index.html","fab02c5151247fb1382df5ceb9f7ef14"],["D:/Program Files/blog/hexo/public/js/app.js","18f526b122db3f728ade9a3304462663"],["D:/Program Files/blog/hexo/public/tags/Java基础/index.html","b9f0665ed1e87bd6f0c45e8873bb037a"],["D:/Program Files/blog/hexo/public/tags/Java应用/index.html","4568fb20b8130e205f6c1af84d18a5b5"],["D:/Program Files/blog/hexo/public/tags/XML，JSON/index.html","a61b04b973443d58adb4a4218ba59183"],["D:/Program Files/blog/hexo/public/tags/html/index.html","ea7c8eda1e2c30224f0662a375bb5fe1"],["D:/Program Files/blog/hexo/public/tags/index.html","cac6aa995bdea025026fe6d53f0bd747"],["D:/Program Files/blog/hexo/public/tags/数据库/index.html","02bd53bce814ddf760fb9f116cdbe631"],["D:/Program Files/blog/hexo/public/tags/框架/index.html","b2ad8b66937a2543dfe39a92ad910687"],["D:/Program Files/blog/hexo/public/tags/面向对象/index.html","047233ab40c130c43acf3e2db16e2b2a"]];
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







