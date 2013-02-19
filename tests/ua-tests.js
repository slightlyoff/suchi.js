/**
 * @preserve
 *
 * Suchi.js -- No user left behind.
 *
 * Copyright 2012:
 *      Alex Russell <slightlyoff@chromium.org>
 *      Frances Berriman <phaeness@gmail.com>
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

(function() {
"use strict";

// FIXME(slightlyoff): need UA's for all of CR16-23!
// Chrome 17
var CR17_XP = "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.66 Safari/535.11";
var CR17_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.66 Safari/535.11";

// Chrome 18
var CR18_VISTA = "Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.45 Safari/535.19";
var CR18_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.45 Safari/535.19";

// Chrome 24
var CR24_WIN8 = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.15 (KHTML, like Gecko) Chrome/24.0.1295.0 Safari/537.15";
var CR24_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1309.0 Safari/537.17";

// FF 3.6
var FF36_OSX = "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6;en-US; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9";
var FF36_WIN7_crufty = "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729; .NET4.0C)";
var FF36_VISTA = "Mozilla/5.0 (Windows; U; Windows NT 6.0; fr; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28";

// Largely borrowed from:
//  http://www.zytrax.com/tech/web/firefox-history.html
// FIXME: need FF9!
var FF10_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0";
var FF10_WIN7 = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:10.0) Gecko/20100101 Firefox/10.0";
var FF11_WIN7 = "Mozilla/5.0 (Windows NT 6.1; rv:11.0) Gecko/20100101 Firefox/11.0";
var FF12_WIN7 = "Mozilla/5.0 (Windows NT 6.1; rv:11.0) Gecko/20100101 Firefox/11.0";
var FF13_LINUX = "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:13.0) Gecko/20100101 Firefox/13.0";
var FF13_XP = "Mozilla/5.0 (Windows NT 5.1; rv:13.0) Gecko/20100101 Firefox/13.0";
var FF13_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:13.0) Gecko/20100101 Firefox/13.0.1";
var FF14_WIN7 = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:14.0) Gecko/20100101 Firefox/14.0.1";
var FF15_XP = "Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0";
var FF16_WIN7 = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:16.0) Gecko/20100101 Firefox/16.0";

// Safari 5.1
var SAF51_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2";
// Quite the yak-shave to get this one.
var SAF51_XP = "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2";
var SAF51_WIN7 = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2";

var FF17_WIN7 = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0";
var FF18_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:18.0) Gecko/20100101 Firefox/18.0";

// IE 10
var IE10_generic = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)";
var IE10_WIN8 = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Touch)";
var IE10_WIN7 = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)";

// IE 9
var IE9_generic = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)";
var IE9_WIN7 = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)";
var IE9_WIN72 = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; Zune 4.0; InfoPath.3; MS-RTC LM 8; .NET4.0C; .NET4.0E)";
var IE9_WIN7_GCF = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; chromeframe/13.0.782.215)";

  // IE 8
var IE8_WIN7 = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0)";
var IE8_WIN7_MC =  "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; Media Center PC 6.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C)";
var IE8_WIN7_crufty = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; InfoPath.3; .NET4.0C; .NET4.0E; .NET CLR 3.5.30729; .NET CLR 3.0.30729; MS-RTC LM 8)";
var IE8_WIN_VISTA = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; InfoPath.1; SV1; .NET CLR 3.8.36217; WOW64; en-US)";
var IE8_WIN_XP_64 = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; Trident/4.0; Media Center PC 4.0; SLCC1; .NET CLR 3.0.04320)";
var IE8_WIN_XP = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; SLCC1; .NET CLR 1.1.4322)";
var IE8_WIN_XP_crufty = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MS-RTC LM 8; InfoPath.3; .NET4.0C; .NET4.0E; chromeframe/13.0.782.215)";

// IE 7
var IE7_WIN_XP = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)";
var IE7_VISTA = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; en-US)";
var IE7_WIN2K3 = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; .NET CLR 1.1.4322)";
var IE7_WIN_XP_Avant = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser; .NET CLR 2.0.50727; Creative ZENcast v1.02.12; .NET CLR 3.0.04506.30)";
var IE7_WIN_XP_Toolbar = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 2.0.50727; MEGAUPLOAD 1.0)"

// IE 6
var IE6_WIN2K = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)";
var IE6_XP = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Q312461)";
var IE6_XP_SP2 = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.0.3705; .NET CLR 1.1.4322; .NET CLR 2.0.40607)";
var IE6_WIN_XP_64 = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)";
var IE6_XP_NeoPlanet = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; NeosBrowser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)";

var current = [
  CR24_WIN8,
  CR24_OSX,

  IE10_generic,
  IE10_WIN8,
  IE10_WIN7,

  // FIXME: FF18, Safari 6, etc.
  FF17_WIN7,
  FF18_OSX,
];

var laggards = [
  // Chrome 16-23
  // FIXME(slightlyoff)
  CR17_XP,
  CR17_OSX,
  CR18_VISTA,
  CR18_OSX,

  // FF 3.6
  FF36_OSX,
  FF36_WIN7_crufty,
  FF36_VISTA,

  // FF 9-16
  // FIXME(slightlyoff)
  FF10_OSX,
  FF10_WIN7,
  FF11_WIN7,
  FF12_WIN7,
  // FF13_LINUX,
  FF13_XP,
  FF13_OSX,
  FF14_WIN7,
  FF15_XP,
  FF16_WIN7,

  // Safari 5.1
  SAF51_OSX,
  SAF51_XP,
  SAF51_WIN7,

  // IE 9
  IE9_WIN7,
  IE9_WIN72,
  IE9_WIN7_GCF,

  // IE 8
  IE8_WIN7,
  IE8_WIN7_MC,
  IE8_WIN7_crufty,
  IE8_WIN_VISTA,
  IE8_WIN_XP_64,
  IE8_WIN_XP,
  IE8_WIN_XP_crufty,

  // IE 7
  IE7_WIN_XP,
  IE7_VISTA,
  IE7_WIN2K3,
  IE7_WIN_XP_Avant,
  IE7_WIN_XP_Toolbar,

  // IE 6
  IE6_XP,
  IE6_XP_SP2,
  IE6_WIN_XP_64,
  IE6_XP_NeoPlanet,
];

current.forEach(function(c) {
  doh.add("User Agent", "t.f(suchi.isOld(\n  \"" + c + "\"\n));");
});

laggards.forEach(function(c) {
  doh.add("User Agent", "t.t(suchi.isOld(\n  \"" + c + "\"\n));");
});

/*
doh.add("User Agent", [

  function options(t) {
  },

]);
*/

})();

