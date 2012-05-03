/**
 * @preserve
 *
 * Suchi.js -- No browser left behind.
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

(function(global) {
  // Somebody's already on it. Bail.
  if (typeof global["suchi"] != "undefined") { return; }

  var suchi = global.suchi = {};

  /*
   * There is no feature test for staleness.
   * 
   * Tight regular expressions to test for the most prevalant stale browsers as
   * reported by:
   *  http://marketshare.hitslink.com/browser-market-share.aspx?qprid=2&qpcustomd=0
   *
   * This list will be actively maintained. I.e., as IE 10 is launched, IE 9
   * goes into the list; when Chrome 19 goes to stable, Chrome 18 goes in the
   * list, etc.
   *
   * Browsers are removed from the list as they fall below 1% global share.
   */
  suchi.laggards = {
    // IE 8:     26%
    IE80: /^Mozilla\/4\.0 \(compatible; MSIE 8\.0; Windows NT \d\.\d(.*)\)$/g,

    // IE 7:      4%
    IE70: /^Mozilla\/4\.0 \(compatible; MSIE 7\.0; Windows NT \d\.\d(.*)\)$/g,

    // IE 6:      7%
    IE60: /^Mozilla\/4\.0 \(compatible; MSIE 6\.0; Windows NT \d\.\d(.*)\)$/g,
    
    // FF 3.6:    2%
    // Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6;en-US; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9
    FF36: /^Mozilla\/5\.0 \((Windows NT|Macintosh); U;(.*)rv\:1\.9\.2.(\d{1,2})\)( Gecko\/(\d{8}))? Firefox\/3\.6(\.\d{1,2})?( \(.+\))?$/g,

    // Chrome 17: 2%
    // Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.66 Safari/535.11
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.66 Safari/535.11
    CR17: /^Mozilla\/5\.0 \((Windows NT|Macintosh)(;)?( .*)\) AppleWebKit\/535\.11 \(KHTML, like Gecko\) Chrome\/17\.0\.\d{3}\.\d{1,2} Safari\/535\.11$/g,

    // FF 10:     1%
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:10.0) Gecko/20100101 Firefox/10.0
    FF10: /^Mozilla\/5\.0 \((Windows NT|Macintosh); (.*)rv\:10\.0(\.\d{1,2})?\) Gecko\/\d{8} Firefox\/10\.0(\.\d{1,2})?$/g,
    // FF 11: (no stats yet, but for good measure)
    FF11: /^Mozilla\/5\.0 \((Windows NT|Macintosh); (.*)rv\:11\.0(\.\d{1,2})?\) Gecko\/\d{8} Firefox\/11\.0(\.\d{1,2})?$/g
  };

  /**
   * Tests a string to see if it matches one of the current most frequently
   * used "left behind" browsers.
   * @param {string} ua The UA String to test.
   * @return {boolean}
   */
  suchi.isBehind = function(ua) {
    if (typeof ua != "string") { return false; }

    for (var x in this.laggards) {
      if (ua.match(this.laggards[x])) {
        return true;
      }
    }
    return false;
  };

  var ua = (global.navigator) ? global.navigator.userAgent : "";

  // TODO(slightlyoff):
  //  * attach to load event and place the promo
  //  * parse and respect the config
  //  * i18n infrastructure

  // TODO(slightlyoff):
  // Determine our current locale, if possible. If not, grab it from the
  // configuration. If all else fails, fall back to en-GB.

})(this);
