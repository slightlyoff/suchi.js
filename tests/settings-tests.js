/**
 * @preserve
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

doh.add("Settings parsing", [

  function booleans(t) {
    var defaults = {
      foo: true,
      bar: false,
      baz: 0,
      thud: 1,
    };
    var o = suchi._parseOptions([
      {
        foo: true,
      },
      {
        foo: false,
        bar: true,
        baz: true,
      },
    ], defaults);

    t.is(o.foo, false);
    t.is(o.bar, true);
    t.is(o.baz, 0);
  },

  function arrays(t) {
    var defaults = {
      foo: [ true, "thinger" ],
      bar: [],
      baz: null,
    };
    var o = suchi._parseOptions([
      {
        bar: [ "howdy" ],
      },
      {
        bar: [ "pardner" ],
        baz: [],
      },
    ], defaults);

    t.is(o.foo, [ true, "thinger" ]);
    t.is(o.bar, [ "howdy", "pardner" ]);
    t.is(o.baz, null);
  },

  function strings(t) {
    var defaults = {
      foo: "howdy",
      bar: null,
    };
    var o = suchi._parseOptions([
      {
        foo: "pardner",
      },
      {
        foo: [ "pardner" ],
        bar: ""
      },
    ], defaults);

    t.is(o.foo, "pardner");
    t.is(o.bar, null);
  },

  function arrayOfFunctions(t) {
    var defaults = {
      foo: [],
    };
    defaults.foo.test = function(v) { return (v instanceof Function); };
    var o = suchi._parseOptions([
      {
        foo: "pardner",
      },
      {
        foo: [ "pardner" ],
      },
      {
        foo: function(v) { return v+1; }
      },
      {
        foo: function(v) { return v+3; }
      },
    ], defaults);

    t.is(o.foo.length, 2);
    t.is(o.foo.reduce(function(r, func) { return func(r); }, 1), 5);
  },

]);

})();

