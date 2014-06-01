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

// Chrome 33
var CR33_WIN7 = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/33.0.1750.154 Safari/537.36";
var CR33_WIN7_64 = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/33.0.1750.154 Safari/537.36";
var CR33_WIN8 = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/33.0.1750.154 Safari/537.36";
var CR33_WIN81 = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/33.0.1750.154 Safari/537.36";
var CR33_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 1092) AppleWebKit/537.36 (KHTML like Gecko) Chrome/33.0.1750.152 Safari/537.36";
var CR33_LINUX = "Mozilla/5.0 (X11; Linux x8664) AppleWebKit/537.36 (KHTML like Gecko) Chrome/33.0.1750.152 Safari/537.36";
var CR33_CROS = "Mozilla/5.0 (X11; CrOS armv7l 5116.115.5) AppleWebKit/537.36 (KHTML like Gecko) Chrome/33.0.1750.152 Safari/537.36";
var CR33_ANDROID = "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 7 Build/KOT49H) AppleWebKit/537.36 (KHTML like Gecko) Chrome/33.0.1750.136 Safari/537.36";
var CR33_CROS_x64 = "Mozilla/5.0 (X11; CrOS x8664 5116.88.0) AppleWebKit/537.36 (KHTML like Gecko) Chrome/33.0.1750.124 Safari/537.36";

// Chrome 34
var CR34_WIN7 = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/34.0.1847.116 Safari/537.36";
var CR34_WIN8 = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1788.0 Safari/537.36";
var CR34_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 1093) AppleWebKit/537.36 (KHTML like Gecko) Chrome/34.0.1847.131 Safari/537.36";
var CR34_LINUX = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1795.0 Safari/537.36";
var CR34_CROS = "Mozilla/5.0 (X11; CrOS x86_64 5500.130.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.134 Safari/537.36";
var CR34_ANDROID = "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36";

// Chrome 35
var CR35_WIN7 = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.114 Safari/537.36";
var CR35_WIN7_64 = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.114 Safari/537.36";
var CR35_WIN8 = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.114 Safari/537.36";
var CR35_WIN81 = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.114 Safari/537.36";
var CR35_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 1093) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.114 Safari/537.36";
var CR35_LINUX = "Mozilla/5.0 (X11; Linux x8664) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.114 Safari/537.36";
var CR35_ANDROID = "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 7 Build/KOT49H) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.122 Safari/537.36";
var CR35_CROS = "Mozilla/5.0 (X11; CrOS x86_64 5712.49.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.99 Safari/537.36";
var CR35_CROS_update = "Mozilla/5.0 (X11; CrOS x86_64 5712.61.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.116 Safari/537.36";

// Chrome 36
// TODO


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
var FF17_WIN7 = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0";
var FF18_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:18.0) Gecko/20100101 Firefox/18.0";

// FF 28
var FF28_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:28.0) Gecko/20100101 Firefox/28.0";
var FF28_WIN7 = "Mozilla/5.0 (Windows NT 6.1; rv:28.0) Gecko/20100101 Firefox/28.0";
var FF28_XP = "Mozilla/5.0 (Windows NT 5.1; rv:28.0) Gecko/20100101 Firefox/28.0";
var FF28_ANDROID = "Mozilla/5.0 (Android; Mobile; rv:28.0) Gecko/28.0 Firefox/28.0";
var FF28_LINUX = "Mozilla/5.0 (X11; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0";

// FF 29
var FF29_XP = "Mozilla/5.0 (Windows NT 5.1; rv:29.0) Gecko/20100101 Firefox/29.0";
var FF29_WIN7 = "Mozilla/5.0 (Windows NT 6.1; rv:29.0) Gecko/20100101 Firefox/29.0";
var FF29_WIN7_64 = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:29.0) Gecko/20100101 Firefox/29.0";
var FF29_WIN8 = "Mozilla/5.0 (Windows NT 6.2; rv:29.0) Gecko/20100101 Firefox/29.0";
var FF29_WIN81 = "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:29.0) Gecko/20100101 Firefox/29.0";
var FF29_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:29.0) Gecko/20100101 Firefox/29.0";
var FF29_LINUX = "Mozilla/5.0 (X11; Ubuntu; Linux x8664; rv:29.0) Gecko/20100101 Firefox/29.0";
var FF29_ANDROID = "Mozilla/5.0 (Android; Mobile; rv:29.0) Gecko/29.0 Firefox/29.0";

// FF 30
var FF30_XP = "Mozilla/5.0 (Windows NT 5.1; rv:30.0) Gecko/20100101 Firefox/30.0";
var FF30_WIN7 = "Mozilla/5.0 (Windows NT 6.1; rv:30.0) Gecko/20100101 Firefox/30.0";
var FF30_WIN7_64 = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:30.0) Gecko/20100101 Firefox/30.0";
var FF30_WIN8 = "Mozilla/5.0 (windows nt 6.2; rv:30.0) Gecko/20100101 Firefox/30.0";
var FF30_WIN81 = "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:30.0) Gecko/20100101 Firefox/30.0";
var FF30_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:30.0) Gecko/20100101 Firefox/30.0";
var FF30_LINUX = "Mozilla/5.0 (X11; Ubuntu; Linux x8664; rv:30.0) Gecko/20100101 Firefox/30.0";
var FF30_ANDROID = "Mozilla/5.0 (Android; Mobile; rv:30.0) Gecko/30.0 Firefox/30.0";

// Safari 5.1
var SAF51_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2";
// Quite the yak-shave to get this one.
var SAF51_XP = "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2";
var SAF51_WIN7 = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2";

// Safari 6.0
var SAF60_IOS_iphone = "Mozilla/5.0 (iPhone; CPU iPhone OS 614 like Mac OS X) AppleWebKit/536.26 (KHTML like Gecko) Version/6.0 Mobile/10B350 Safari/8536.25";
var SAF60_IOS_ipad = "Mozilla/5.0 (iPad; CPU OS 601 like Mac OS X) AppleWebKit/536.26 (KHTML like Gecko) Version/6.0 Mobile/10A523 Safari/8536.25";
var SAF60_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 1084) AppleWebKit/536.30.1 (KHTML like Gecko) Version/6.0.5 Safari/536.30.1";

// Safari 6.1
var SAF61_IOS_iphone = "Mozilla/5.0 (iPhone; CPU iPhone OS 613 like Mac OS X) AppleWebKit/536.26 (KHTML like Gecko) Version/6.1 Mobile/10B329 Safari/8536.25";
var SAF61_IOS_ipad = "Mozilla/5.0 (iPad; CPU OS 613 like Mac OS X) AppleWebKit/536.26 (KHTML like Gecko) Mobile/10B329 Version/6.1 Safari/8536.25";
var SAF61_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 1085) AppleWebKit/537.71 (KHTML like Gecko) Version/6.1 Safari/537.71";

// Safari 7.0
var SAF70_IOS_iphone = "Mozilla/5.0 (iPhone; CPU iPhone OS 711 like Mac OS X) AppleWebKit/537.51.2 (KHTML like Gecko) Version/7.0 Mobile/11D201 Safari/6EA193E";
var SAF70_IOS_ipad = "Mozilla/5.0 (iPad; CPU OS 711 like Mac OS X) AppleWebKit/537.51.2 (KHTML like Gecko) Version/7.0 Mobile/11D201 Safari/9537.53";
var SAF70_OSX = "Mozilla/5.0 (Macintosh; Intel Mac OS X 1091) AppleWebKit/537.73.11 (KHTML like Gecko) Version/7.0.1 Safari/537.73.11";

// Android Browser 4.0-4.3. Chrome is default on 4.4 and auto-updates.
var ANDROID_WEBKIT_40 = "Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-P3100 Build/IMM76D) AppleWebKit/534.30 (KHTML like Gecko) Version/4.0 Safari/534.30";
var ANDROID_WEBKIT_41 = "Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; SGH-T999 Build/JZO54K) AppleWebKit/534.30 (KHTML like Gecko) Version/4.0 Mobile Safari/534.30";
var ANDROID_WEBKIT_42 = "Mozilla/5.0 (Linux; U; Android 4.2.2; ar-ae; GT-I9082 Build/JDQ39) AppleWebKit/534.30 (KHTML like Gecko) Version/4.0 Mobile Safari/534.30";
var ANDROID_WEBKIT_43 = "Mozilla/5.0 (Linux; U; Android 4.3; tr-tr; GT-I9300 Build/JSS15J) AppleWebKit/534.30 (KHTML like Gecko) Version/4.0 Mobile Safari/534.30";


/* IE sure is a cheeky bastard sometimes. From:

  https://iecvlist.microsoft.com/IE11/1375395130872/iecompatviewlist.xml

<?xml version="1.0" encoding="utf-8" ?>
<iecompatlistdescription>
    <version>1152921505002015229</version>
    <ttl>1</ttl>
    <ua id="Chrome 19">Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.52 Safari/536.5</ua>
    <ua id="Chrome 28">Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36</ua>
    <ua id="FireFox 12">Mozilla/5.0 (Windows NT 6.2; rv:12.0) Gecko/20100101 Firefox/12.0</ua>
    <ua id="FireFox Token">Mozilla/5.0 ($PLATFORM; Trident/7.0; rv:11.0) like Gecko/20100101 Firefox/12.0</ua>
    <ua id="FireFox 22 Token">Mozilla/5.0 ($PLATFORM; Trident/7.0; rv:11.0) like Gecko/20100101 Firefox/22.0</ua>
    <ua id="IE 10">Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)</ua>
    <ua id="IE9Win7">Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)</ua>
    <ua id="IE10 Trident 7.0 Token">Mozilla/5.0 (compatible; MSIE 10.0; $PLATFORM; Trident/7.0)</ua>
    <ua id="IE10 Trident 6.0 Token">Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)</ua>
    <ua id="IE11">Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko</ua>
    <f12ua category="desktop" name="Internet Explorer 10">Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)</f12ua>
    <f12ua category="desktop" name="Internet Explorer 9">Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)</f12ua>
    <f12ua category="desktop" name="Internet Explorer 8">Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)</f12ua>
    <f12ua category="desktop" name="Internet Explorer 7">Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)</f12ua>
    <f12ua category="desktop" name="Internet Explorer 6">Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)</f12ua>
    <f12ua category="non-desktop" name="IE10 - Windows Phone 8">Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch)</f12ua>
    <f12ua category="non-desktop" name="IE9 - Windows Phone 7">Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)</f12ua>
    <f12ua category="non-desktop" name="IE - Xbox One">Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)</f12ua>
    <f12ua category="non-desktop" name="IE - Xbox 360">Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; Xbox)</f12ua>
    <f12ua category="other" name="Google Chrome">Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36</f12ua>
    <f12ua category="other" name="Mozilla Firefox">Mozilla/5.0 (Windows NT 6.2; rv:12.0) Gecko/20100101 Firefox/23.0</f12ua>
    <f12ua category="other" name="Opera">Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36 OPR/15.0.1147.153</f12ua>
    <f12ua category="other" name="Apple Safari (iPad)">Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25</f12ua>
    <f12ua category="other" name="Bing Bot">Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)</f12ua>
    ...
*/

// IE 11
var IE11_generic = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C)";
var IE11_compatibility = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C)";


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
var IE8_WIN_XP = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)";
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
  // IE
  IE10_generic,
  IE10_WIN8,
  IE10_WIN7,

  // FF 29
  FF29_XP,
  FF29_WIN7,
  FF29_WIN7_64,
  FF29_WIN8,
  FF29_WIN81,
  FF29_OSX,
  FF29_LINUX,
  FF29_ANDROID,

  // FF 30
  FF30_XP,
  FF30_WIN7,
  FF30_WIN7_64,
  FF30_WIN8,
  FF30_WIN81,
  FF30_OSX,
  FF30_LINUX,
  FF30_ANDROID,

  // Safari 6.1
  SAF61_IOS_iphone,
  SAF61_IOS_ipad,
  SAF61_OSX,

  // Safari 7.0
  SAF70_IOS_iphone,
  SAF70_IOS_ipad,
  SAF70_OSX,

  // Chrome 35
  CR35_WIN7,
  CR35_WIN7_64,
  CR35_WIN8,
  CR35_WIN81,
  CR35_OSX,
  CR35_LINUX,
  CR35_ANDROID,
  CR35_CROS,
  CR35_CROS_update,
];

var laggards = [
  FF17_WIN7,
  FF18_OSX,

  CR24_WIN8,
  CR24_OSX,

  // Chrome 16-34
  CR17_XP,
  CR17_OSX,
  CR18_VISTA,
  CR18_OSX,
  CR33_WIN7,
  CR33_WIN7_64,
  CR33_WIN8,
  CR33_WIN81,
  CR33_OSX,
  CR33_LINUX,
  CR33_CROS,
  CR33_ANDROID,
  CR33_CROS_x64,
  CR34_WIN7,
  CR34_WIN8,
  CR34_OSX,
  CR34_LINUX,
  CR34_CROS,
  CR34_ANDROID,

  // FF 3.6
  FF36_OSX,
  FF36_WIN7_crufty,
  FF36_VISTA,

  // FF 9-28
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
  // FIXME(slightlyoff): coverage for 17-27?
  FF28_OSX,
  FF28_WIN7,
  FF28_XP,
  FF28_ANDROID,
  FF28_LINUX,
  // FIXME(slightlyoff): what about FF LTS?

  // Safari 5.1-6.0
  SAF51_OSX,
  SAF51_XP,
  SAF51_WIN7,

  SAF60_IOS_iphone,
  SAF60_IOS_ipad,
  SAF60_OSX,

  // IE 6-9
  IE6_XP,
  IE6_XP_SP2,
  IE6_WIN_XP_64,
  IE6_XP_NeoPlanet,
  IE7_WIN_XP,
  IE7_VISTA,
  IE7_WIN2K3,
  IE7_WIN_XP_Avant,
  IE7_WIN_XP_Toolbar,
  IE8_WIN7,
  IE8_WIN7_MC,
  IE8_WIN7_crufty,
  IE8_WIN_VISTA,
  IE8_WIN_XP_64,
  IE8_WIN_XP,
  IE8_WIN_XP_crufty,
  IE9_WIN7,
  IE9_WIN72,
  IE9_WIN7_GCF,
];

current.forEach(function(c) {
  doh.add("User Agent", "t.f(suchi.isOld(\n  \"" + c + "\"\n));");
});

laggards.forEach(function(c) {
  doh.add("User Agent", "t.t(suchi.isOld(\n  \"" + c + "\"\n));");
});

// FIXME(slightlyoff): update
var win8 = [
  IE10_WIN8,
  CR24_WIN8,
];

var win7 = [
  IE10_generic,
  IE10_WIN7,
  FF17_WIN7,
  FF36_WIN7_crufty,
  FF10_WIN7,
  FF11_WIN7,
  FF12_WIN7,
  FF14_WIN7,
  FF16_WIN7,
  SAF51_WIN7,
  IE9_WIN7,
  IE9_WIN72,
  IE9_WIN7_GCF,
  IE8_WIN7,
  IE8_WIN7_MC,
  IE8_WIN7_crufty,
];

var winVista = [
  CR18_VISTA,
  FF36_VISTA,
  IE8_WIN_VISTA,
  IE7_VISTA,
];

var winXP = [
  CR17_XP,
  FF13_XP,
  FF15_XP,
  SAF51_XP,
  IE8_WIN_XP_64,
  IE8_WIN_XP,
  IE8_WIN_XP_crufty,
  IE7_WIN_XP,
  IE7_WIN_XP_Avant,
  IE7_WIN_XP_Toolbar,
  IE6_XP,
  IE6_XP_SP2,
  IE6_WIN_XP_64,
  IE6_XP_NeoPlanet,
  IE7_WIN2K3,
];

var snowLeopard = [
  FF36_OSX,
  SAF51_OSX,
];

var lion = [
  FF13_OSX,
  CR18_OSX,
  CR17_OSX,
];

var mountainLion = [
  CR24_OSX,
  FF18_OSX,
  FF10_OSX,
];

win8.forEach(function(c) {
  doh.add("User Agent", "t.is(\"win8\", suchi.fingerprintOS(\n  \"" + c + "\"\n));");
});

win7.forEach(function(c) {
  doh.add("User Agent", "t.is(\"win7\", suchi.fingerprintOS(\n  \"" + c + "\"\n));");
});

winVista.forEach(function(c) {
  doh.add("User Agent", "t.is(\"vista\", suchi.fingerprintOS(\n  \"" + c + "\"\n));");
});

snowLeopard.forEach(function(c) {
  doh.add("User Agent", "t.is(\"snowleopard\", suchi.fingerprintOS(\n  \"" + c + "\"\n));");
});

lion.forEach(function(c) {
  doh.add("User Agent", "t.is(\"lion\", suchi.fingerprintOS(\n  \"" + c + "\"\n));");
});

mountainLion.forEach(function(c) {
  doh.add("User Agent", "t.is(\"mountainlion\", suchi.fingerprintOS(\n  \"" + c + "\"\n));");
});
})();

