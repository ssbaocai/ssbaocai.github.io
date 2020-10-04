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

var precacheConfig = [["D:/Program Files/blog/hexo/public/2020/10/04/JavaWeb/index.html","3bc392772a0bdcd4a13aa5eb83249096"],["D:/Program Files/blog/hexo/public/2020/10/04/MyBatis/index.html","2cdb8ae706fb462b400dc7f22d9e6157"],["D:/Program Files/blog/hexo/public/2020/10/04/MySQL/index.html","e507d35ad280570ce60f479b49986222"],["D:/Program Files/blog/hexo/public/2020/10/04/Spring/index.html","e782134daa8ed9e2681ad51c4d30de0f"],["D:/Program Files/blog/hexo/public/2020/10/04/基础/index.html","02f8f3980d5e2aa4b8b263a0277ed92f"],["D:/Program Files/blog/hexo/public/2020/10/04/多线程/index.html","f94f818136757d9ea55580d097e26d2e"],["D:/Program Files/blog/hexo/public/2020/10/04/容器（集合）/index.html","4c92aba0aa5dc07451b41171b46fd2e0"],["D:/Program Files/blog/hexo/public/2020/10/04/设计模式/index.html","bf278f02b06abb9437270004c9ad4332"],["D:/Program Files/blog/hexo/public/404.html","24d14254b635d657cfec97c30a713f7d"],["D:/Program Files/blog/hexo/public/about/index.html","ee407673e931648423b5cb8df4e46dfc"],["D:/Program Files/blog/hexo/public/archives/2020/10/index.html","acb0c106c2afdecac12bf0d8b1a7dcb6"],["D:/Program Files/blog/hexo/public/archives/2020/index.html","d5e8319aa4c1c37b557c66a4de5b9fe9"],["D:/Program Files/blog/hexo/public/archives/index.html","f898bedfe83fcafb1d40bcdefa306bf4"],["D:/Program Files/blog/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Program Files/blog/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Program Files/blog/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Program Files/blog/hexo/public/categories/Java/index.html","7cd7253a47df4e9c41d075728cfa6d64"],["D:/Program Files/blog/hexo/public/categories/JavaWeb/index.html","06b220e2d0172cfbebe19132eaa55d0f"],["D:/Program Files/blog/hexo/public/categories/MySQL/index.html","a231409effa31c47639795970ebab644"],["D:/Program Files/blog/hexo/public/categories/index.html","11cad625bd292c2e8dbd9a1a4e92eba0"],["D:/Program Files/blog/hexo/public/categories/框架/index.html","7630243bba23e6609d77c82c95aa627d"],["D:/Program Files/blog/hexo/public/categories/线程/index.html","c0deca9299a7c91a6fbe83c7465daae6"],["D:/Program Files/blog/hexo/public/categories/设计模式/index.html","d81f3b67688f7b3608bb50bd9ecfd574"],["D:/Program Files/blog/hexo/public/contact/index.html","6fbe91caa7ef06b1a1e9c3ae8ae22c02"],["D:/Program Files/blog/hexo/public/css/app.css","c2c082da448be4541c4550f808f6d704"],["D:/Program Files/blog/hexo/public/css/comment.css","9ef55c7e23179cb4712dbb073b336fcd"],["D:/Program Files/blog/hexo/public/css/mermaid.css","aa23f51cb8d5d4396eafb2dab1a65566"],["D:/Program Files/blog/hexo/public/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["D:/Program Files/blog/hexo/public/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["D:/Program Files/blog/hexo/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Program Files/blog/hexo/public/images/alipay.png","9eaa6a54dfa33173e1d58684999f71c0"],["D:/Program Files/blog/hexo/public/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["D:/Program Files/blog/hexo/public/images/avatar.jpg","49d55f172017f2e181119170717c211f"],["D:/Program Files/blog/hexo/public/images/logo.svg","e67639a80e9511587a08359bc7740624"],["D:/Program Files/blog/hexo/public/images/paypal.png","0986db629960e3333415b103fa7663be"],["D:/Program Files/blog/hexo/public/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["D:/Program Files/blog/hexo/public/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["D:/Program Files/blog/hexo/public/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["D:/Program Files/blog/hexo/public/images/wechatpay.png","ed2cbc96f1a6602caf4fe7ccfef71e08"],["D:/Program Files/blog/hexo/public/index.html","ed33f2ef5d2860b1d904a17dfea46440"],["D:/Program Files/blog/hexo/public/js/app.js","18f526b122db3f728ade9a3304462663"],["D:/Program Files/blog/hexo/public/tags/Java/index.html","500deba6ee72e24b004ab7597f4f73e8"],["D:/Program Files/blog/hexo/public/tags/JavaWeb/index.html","801e820bcc954f186767c3a207935717"],["D:/Program Files/blog/hexo/public/tags/MyBatis/index.html","74c7acb77be0761a86206557ddc7d104"],["D:/Program Files/blog/hexo/public/tags/MySQL/index.html","38d3fa76525f675dc867c28521a9a9de"],["D:/Program Files/blog/hexo/public/tags/Spring/index.html","22ccb673a570b72b97dadee222da496f"],["D:/Program Files/blog/hexo/public/tags/index.html","5935b140e1a35a5d21e0ec35656f01c9"],["D:/Program Files/blog/hexo/public/tags/多线程/index.html","8069084c591896e69d4117ac3eaf675d"],["D:/Program Files/blog/hexo/public/tags/容器/index.html","74f76670dcd03c64b346ca78bc155f5c"],["D:/Program Files/blog/hexo/public/tags/设计模式/index.html","16681b5ca0e81db39814bd573c2b7ff8"]];
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







