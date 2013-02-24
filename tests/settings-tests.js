/**
 * @preserve
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

(function() {
"use strict";

var defaults = {
  foo: true,
  bar: false,
  baz: 0,
  thud: 1,

  mixedArr: [ true, "thinger" ],
  stringArr: [ "howdy" ],
  functionArr: [],
  emptyArr: [],
  nullValue: null,
  stringValue: "howdy",
};
defaults.stringArr.test = function(v) { return (typeof v == "string"); };
defaults.functionArr.test = function(v) { return (v instanceof Function); };

doh.add("Configuration merging", [

  function defaultsAreSane(t) {
    var o = suchi._mergeOptions({}, defaults);
    t.is(o.foo, true);
    t.is(o.bar, false);
    t.is(o.baz, 0);
    t.is(o.thud, 1);
    t.is(o.undef, undefined);
    t.is(o.nullValue, null);
  },

  function booleans(t) {
    var o = suchi._mergeOptions({
      foo: false,
      bar: true,
    }, defaults);

    t.is(o.foo, false);
    t.is(o.bar, true);
  },

  function strings(t) {
    var o = suchi._mergeOptions({
      stringValue: [ "pardner" ],
      nullValue: ""
    }, defaults);

    t.is(o.stringValue, defaults.stringValue);
    t.is(o.nullValue, null);
  },

  function arrays(t) {
    var o = suchi._mergeOptions({
      stringArr: [ "pardner" ]
    }, defaults);
    t.is(o.mixedArr, [ true, "thinger" ]);
    t.is(o.stringArr, [ "howdy", "pardner" ]);
  },

  function typedArrays(t) {
    var o = suchi._mergeOptions({
      functionArr: function(v) { return v+1; },
      stringArr: [ "thinger", "blarg", false, null ],
    }, defaults);

    t.is(defaults.functionArr.length, 0);
    t.is(o.functionArr.length, 1);
    t.is(o.functionArr.reduce(function(r, func) { return func(r); }, 1), 2);

    t.is(defaults.stringArr.length, 1);
    t.is(o.stringArr.length, 3);
  },

]);

})();

