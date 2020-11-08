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

var precacheConfig = [["D:/Program Files/blog/hexo/public/2020/10/10/JAVA基础语法/index.html","116541f68acbebbd8ca705603a7a22dd"],["D:/Program Files/blog/hexo/public/2020/10/10/面向对象/index.html","7f17a80289277a07e4a45ae0e7529e51"],["D:/Program Files/blog/hexo/public/2020/10/13/JavaWeb/index.html","3d23e1b1ae30327da7baf048c88624d0"],["D:/Program Files/blog/hexo/public/2020/10/13/MyBatis/index.html","3cfc694a6ef2382fc53fb49ecfed9446"],["D:/Program Files/blog/hexo/public/2020/10/13/MySQL/index.html","1d749c9bfcd98f5f08f082780c890b47"],["D:/Program Files/blog/hexo/public/2020/10/13/Spring/index.html","09d27f096b73aa24c86147b3d6bf7cca"],["D:/Program Files/blog/hexo/public/2020/10/13/SpringBoot/index.html","27e3739ff18918e127191b287e442469"],["D:/Program Files/blog/hexo/public/2020/10/13/SpringMVC/index.html","d1d34a35bfda4878eb3cc034a78a3615"],["D:/Program Files/blog/hexo/public/2020/10/27/XML和JSON/index.html","a3d6c7390c0d27127dac4ddcec504915"],["D:/Program Files/blog/hexo/public/2020/10/30/html常用标签/index.html","ab92e092f8f58f3c6039e073827ea8f6"],["D:/Program Files/blog/hexo/public/2020/11/08/Java中的常用算法/index.html","f31f4bcf4c066678a936edf161899789"],["D:/Program Files/blog/hexo/public/404.html","7a25feaf76206972ce6e7c7777cc2274"],["D:/Program Files/blog/hexo/public/about/index.html","8e8575f5258aa57e8d230f8012633e9a"],["D:/Program Files/blog/hexo/public/archives/2020/10/index.html","0c69816e74ab2d921156793246baad5d"],["D:/Program Files/blog/hexo/public/archives/2020/11/index.html","cd50705f71f0107d0e606580fd8965d1"],["D:/Program Files/blog/hexo/public/archives/2020/index.html","f40d081b2c6d1d994316172dd04cc1bf"],["D:/Program Files/blog/hexo/public/archives/2020/page/2/index.html","51e3735403603fa722e6abeb2cd9493a"],["D:/Program Files/blog/hexo/public/archives/index.html","19b7ea7dbd478479b9b704ad964c5295"],["D:/Program Files/blog/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Program Files/blog/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Program Files/blog/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Program Files/blog/hexo/public/categories/Java/index.html","f149efed897922ae0ea313d47adf4eea"],["D:/Program Files/blog/hexo/public/categories/Java核心类/index.html","9f7a4daa097f634e14f9845986ffa2c1"],["D:/Program Files/blog/hexo/public/categories/MyBatis/index.html","29f7e59a4022c6ca883f7e6ff9dd138e"],["D:/Program Files/blog/hexo/public/categories/MySQL/index.html","458e56dda0151cc267d12f1e68c8e4fc"],["D:/Program Files/blog/hexo/public/categories/Spring/index.html","3c019f617718308f52e508c089b81cfc"],["D:/Program Files/blog/hexo/public/categories/SpringBoot/index.html","1d9be4f0eaf5248bdd28f793d3de28b3"],["D:/Program Files/blog/hexo/public/categories/SpringMVC/index.html","fbe59854a42af7d45bc81366e548d7bd"],["D:/Program Files/blog/hexo/public/categories/index.html","d4cf1e74376d323d75cce5d6f5ee0792"],["D:/Program Files/blog/hexo/public/categories/前端/index.html","37771884e79e4ff27561e1233088f0de"],["D:/Program Files/blog/hexo/public/contact/index.html","16c6b6b5eba8400ba1c75f37d0eb2bb8"],["D:/Program Files/blog/hexo/public/css/app.css","c2c082da448be4541c4550f808f6d704"],["D:/Program Files/blog/hexo/public/css/comment.css","9ef55c7e23179cb4712dbb073b336fcd"],["D:/Program Files/blog/hexo/public/css/mermaid.css","aa23f51cb8d5d4396eafb2dab1a65566"],["D:/Program Files/blog/hexo/public/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["D:/Program Files/blog/hexo/public/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["D:/Program Files/blog/hexo/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Program Files/blog/hexo/public/images/alipay.png","9eaa6a54dfa33173e1d58684999f71c0"],["D:/Program Files/blog/hexo/public/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["D:/Program Files/blog/hexo/public/images/avatar.jpg","49d55f172017f2e181119170717c211f"],["D:/Program Files/blog/hexo/public/images/charu.jpg","02a8579c97286735d8da269e527d9eb7"],["D:/Program Files/blog/hexo/public/images/kuaisu.jpg","9f25503a92521b77efcda52675888761"],["D:/Program Files/blog/hexo/public/images/logo.svg","e67639a80e9511587a08359bc7740624"],["D:/Program Files/blog/hexo/public/images/maopao.jpg","4cce83206baa88b899b8fe4a0da779e5"],["D:/Program Files/blog/hexo/public/images/paypal.png","0986db629960e3333415b103fa7663be"],["D:/Program Files/blog/hexo/public/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["D:/Program Files/blog/hexo/public/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["D:/Program Files/blog/hexo/public/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["D:/Program Files/blog/hexo/public/images/wechatpay.png","ed2cbc96f1a6602caf4fe7ccfef71e08"],["D:/Program Files/blog/hexo/public/images/xuanze.jpg","07bbee4f32f61203faf0e528bbe676cb"],["D:/Program Files/blog/hexo/public/index.html","7603822c7928a3e585b2d311e4e4f451"],["D:/Program Files/blog/hexo/public/js/app.js","18f526b122db3f728ade9a3304462663"],["D:/Program Files/blog/hexo/public/tags/Java基础/index.html","44cadddd4ba156e24d6f33480c02b344"],["D:/Program Files/blog/hexo/public/tags/Java应用/index.html","4ac291b5c673593e1ffe2e5346d9edb9"],["D:/Program Files/blog/hexo/public/tags/XML，JSON/index.html","750534c45412fc2a085a8e2db3153119"],["D:/Program Files/blog/hexo/public/tags/html/index.html","b93d5ceac1131d22f465850aae7fe6ae"],["D:/Program Files/blog/hexo/public/tags/index.html","4c09e9fa1e0e5a28eead85064e2d5fc8"],["D:/Program Files/blog/hexo/public/tags/数据库/index.html","a4cc66ee04b5060c744abd5b1bd14ac3"],["D:/Program Files/blog/hexo/public/tags/框架/index.html","0ddd137baf905a039bb682d148645f30"],["D:/Program Files/blog/hexo/public/tags/面向对象/index.html","2c0ec2ceb5857bf84de0685752381381"]];
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







