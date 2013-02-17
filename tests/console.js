/**
 * @preserve
 *
 * Copyright 2012-2013:
 *      Alex Russell <slightlyoff@chromium.org>
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
  if (typeof global.console != "undefined") {
    return;
  }

  var toString = function(item) {
    var t = (typeof item);
    if (t == "undefined") {
      return "undefined";
    } else if (t == "string") {
      return item;
    } else if (t == "number") {
      return item + "";
    } else if (item instanceof Array) {
      return item + "";
    }
    return item + "";
  }

  // A minimal console
  var log = function(hint, args){
    var r = "";
    var al = args.length;
    r += ((hint ? hint + ":" : "") + (args[0] ? toString(args[0]) : ""));
    for(var i = 1; i < al; i++){
      r += (" " + toString(args[i]));
    }
    print(r);
  };

  var makeLogger = function(hint) {
    return function() {
      log(hint, Array.prototype.slice.call(arguments, 0));
    };
  }

  // Intentionally define console in the global namespace
  global.console = {
    log:        makeLogger(""),
    error:      makeLogger("ERROR"),
    warn:       makeLogger("WARN"),
    trace:      makeLogger("TRACE"),
    time:       function() {},
    timeEnd:    function() {},
    profile:    function() {},
    profileEnd: function() {},
  };

})(this);
