/**
 * @preserve
 *
 * Suchi.js -- No user left behind.
 *
 * Copyright 2012-2013:
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
  var suchi = global.suchi = global.suchi || {};

  // FIXME: assert here that suchi.isOld exists!

  //
  // Utility Functions
  //
  var forEach = (typeof [].forEach == "function") ?
                  function(a, cb, scope) { return a.forEach(cb, scope); } :
                  function(a, cb, scope) {
                    var i = 0, l = a.length || 0;
                    for(; i < l; ++i){
                      cb.call(scope||global, a[i], i, a);
                    }
                  };

  var isArray = (typeof Array.isArray == "function") ?
                  Array.isArray.bind(Array) :
                  function(o) {
                    return Object.prototype.toString.call(o) == "[object Array]";
                  };

  //
  // Maps of upgrade options, (lagging browser) -> (appropriate evergreen set)
  //


  var CHROME    = "CHROME",
      GCF       = "GCF",
      FF        = "FF",
      SAFARI    = "SAFARI",
      IE        = "IE",
      OPERA     = "OPERA",
      OPERAMINI = "OPERAMINI";

  // FIXME: need to add mobile dead-ends/options here!
  // Mobile dead-enders that we care about:
  //  Android Browser
  //  Safari on devices that won't get updates
  //    - only evergreen iOS option is a proxy-browser, e.g. Opera Mini
  // Mobile evergreen options:
  //  Opera
  //  Chrome (For ICS+ Android users)
  //  FF: for ARMv7+ devices (see: http://goo.gl/PhQs9)

  // Our options only really make sense by OS; we don't need to worry about what
  // browser the users is on once we know they're lagging, we can just present
  // them with OS-appropriate sets of choices.
  suchi.evergreenOptions = {
    "xp":              [     GCF, CHROME, FF, OPERA ],
    "vista":           [     GCF, CHROME, FF, OPERA ],
    "win7":            [ IE, GCF, CHROME, FF, OPERA ],
    "win8":            [ IE, GCF, CHROME, FF, OPERA ],
    "leopard":         [  SAFARI, CHROME, FF, OPERA ],
    "snowleopard":     [  SAFARI, CHROME, FF, OPERA ],
    "gingerbread":     [                  FF, OPERA ],
    "ics":             [          CHROME, FF, OPERA ],
    "jellybean":       [          CHROME, FF, OPERA ],
    "ios5":            [                  OPERAMINI ]
  };

  /*
  suchi.prompts = {

  };
  */

  // Handle configuration.
  var defaultOptionList = {
    treatGCFAsLagging: false,
    onlagging: [],
    onload: [],
    prompt: false,
    promptLocales: [], // FIXME: default locale?
    promptAt: "",
    allowCookies: true,
    pageviewsTillPrompt: 3,
    rePromptDelay: 4
  };
  defaultOptionList.onload.test =
  defaultOptionList.onlagging.test =
      function(v) { return (v instanceof Function); };
  /*
  function(v) {
    return typeof v == "function";
  };
  */

  suchi._mergeOptions = function(optionsObject, defaults) {
    // Merge all of the options based on a prototype of the supported options
    // Make an options object that treats "defaults" as its prototype. My
    // kingdom for __proto__!
    var OC = function() {};
    OC.prototype = defaults || {};
    var options = new OC();

    // FIXME: log an error here?
    if (!optionsObject) { return options; }

    for (var name in optionsObject) {
      (function(default_v,
                default_t,
                value,
                value_t) {

        if (default_t == "undefined") {
          return;
        }

        if ((default_t == "boolean" && value_t == "boolean") ||
            (default_t == "string"  && value_t == "string")) {
          options[name] = value;
          return;
        }

        if (isArray(default_v)) {
          var optionsValue = options[name].slice(0);
          var test = (default_v["test"] || function() { return true; });
          var valueArray = isArray(value) ? value : [ value ];

          for (var y = 0; y < valueArray.length; y++) {
            if (test(valueArray[y])) { optionsValue.push(valueArray[y]); }
          }
          options[name] = optionsValue;
          return;
        }

      })(defaults[name],      typeof defaults[name],
         optionsObject[name], typeof optionsObject[name]);
    }
    return options;
  };

  var ua = (global.navigator) ? global.navigator.userAgent : "";

  suchi._parseOptions = function(options) {
    options = suchi._mergeOptions(options, defaultOptionList);

    if (ua && suchi.isOld(ua)) {

      forEach(options.onlagging, function(cb) {
        try { cb(); } catch(e) { /* squelch */ }
      });

    }
  };

  forEach((global["suchiConfig"] || []), suchi._parseOptions);

  // TODO(slightlyoff):
  //  * attach to load event and place the promo
  //  * parse and respect the config
  //  * i18n infrastructure

  // TODO(slightlyoff): Determine our current locale!
})(this);
