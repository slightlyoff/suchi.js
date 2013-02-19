<h1><code>suchi.js</code></h1>

Become part of the solution.

<!--
[toc]
-->

# What's All This Then?

Suchi is a client-side library to help your lagging users adopt
[Evergreen](http://goo.gl/Qe8EA) browsers by unobtrusively presenting them with
context-appropriate options for how to upgrade to a browser that won't ever need
prompting again.

# Sign Me Up! How Do I Use It?

Suchi comes in a couple of "styles": the super-lightweight `isOld.js` for folks
who are rolling their own prompts, or the full-featured `suchi.js` for a full-
service prompt. For minified copies of both scripts, see the `build/` directory.

## `isOld.js`

The core of Suchi is a tiny helper function to tell you if a browser is modern
or ancient. It can be used in a stand-alone way, although is part of the larger
`suchi.js` outlined below as well:

```html
<script defer src="//suchijs.org/isOld.min.js"></script>
<script defer>
  if ( suchi.isOld(navigator.userAgent) ) {
    // Do something about it.
  }
</script>
```

## `suchi.js`

It's simple! The following snippet loads and configures `suchi.js`. On the 3rd
page loaded by an IE7 user of a site with this snippet, they'll see the upgrade
message.

```html
<div id="promptId"></div>
<script>
  var suchiConfig = suchiConfig || [];
  suchiConfig.push({
    onlagging: function() {
      // Callback that's fired when Suchi detects as
    }
  });

  (function(src) {
    var se = document.createElement("script");
    se.async = true;
    se.src = src;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(se, s);
  })("//suchijs.org/suchi.min.js");
</script>
```

# How Does It Work?

Suchi [does tight-fit UA testing](http://goo.gl/hJ98J) to determine if a user is
visting your site with one of the worst-offending legacy browsers; i.e., a non-
auto-updating browser with relatively high market share. Users on up-to-date
Evergreen browsers will never be prompted, while users who are on dead-end
browser (e.g., IE 8 for XP, Safari for Windows, or the legacy Android Browser)
will be presented with choices that enable them to move to a better, auto-
updating world.

Future versions will optionally present users of OSes for which there are _no_
Evergreen options with information on how to update to a modern OS.

# Won't Some Users Fall Through The Cracks?

Yep, but that's OK. Suchi isn't trying to prompt everyone who _might_ be
sporting a legacy browser, instead it takes a more pragmatic approach, prompting
only users of the worst "polluters" in our collective browser environment. Sure,
there might be some classics on the roads, but our primary concern is making
sure that _most people_ are doing better than browser equivalents of a ['84 Olds
Cutlass Supreme](http://goo.gl/GRNHo); modern at the time, yes, and popular to
boot -- but missing the safety, efficiency, and reliability features that are
the hallmark of the ever- improving bits of today's (and tomorrow's) best
browsers.

# Define "Unobstrusive"

Suchi uses a cookie to determine that a user has visited a few pages on your
site before ever getting in their face. This is, of course, configurable (see
below), but the general idea is that Suchi isn't competing with your brand or
site; it's not the primary bit of the experience you're trying to provide, but
if it can do something to help improve a user's experience (by obtaining a
better browser), everyone can win.

If your site requires user consent for cookies, see the configuration options
below for hooks that allow you to control when and how Suchi sets cookies.

# What Users Will Be Prompted By Default?

As of Spring 2013, users of the following desktop browsers are considered "left
behind" and dangerous enough (in terms of [market reach](http://goo.gl/nO6mG))
to warrant a gentle nudge in the right direction:

  * IE 6-9
  * Firefox 3.6, 9-16
  * Safari for Windows (all versions, and 5.1 in particular)
  * Chrome 16-23

Mobile browsers that need the nudge are:

  * iOS Safari 5.0-5.1
  * Android Browser (all versions)

# Why are IE8, IE9, Firefox 3.6, and Safari 5.1 On That List?

Aren't they sort of modern? Or at least the most modern you can get on some
versions of the OSes they run on?

Perhaps in terms of absolute vintage, yes they're "modern", but the biggest
determinant of how much of a pollutant a popular browser will become is how long
it lives on after its replacement is released.

Said another way, when Browser X Version 18 is released, how long, on average,
do we all have to wait until all the users of Version 17 are either upgraded or
moved onto a competing (auto-updating) browser? How long until 90% of those
users are upgraded? _*That*_ is our key metric for browser progress, and recent
experience shows that it's a more telling indicator of overall improvements than
any other point-feature improvement.

Think about what has gone down over the past couple of years in JS performance:
sure, some browsers might have been slower in one release than their
competitors, but to a one they all caught up in the next release. Indeed, the
only reason we can't all assume JIT'd JS performance as our baseline today is
because the replacement rates amongst some of those browsers has been incredibly
low. Their latest versions might be great, but it's not helping us, practically
speaking.

So back to those browsers...why are some relatively modern browsers getting
prompted? Because they're dead-browsers-walking. They've been replaced, they
just don't know it yet. Suchi is here to help speed their journey from "legacy"
to "museum piece", recommending browsers that auto-update so those users will
never be left-behind again.

# Wait...I Read "UA Testing" Back There...

Yes, yes you did. Aka: "UA sniffing". But it's not what you think it is, for two
reasons:

  1. The goal isn't to find out "can I use a feature based on some correlation
     with UA string?", it's "is this a browser that is left-behind?". Using UA
     detection to determien feature support is fraught because it tests
     something _other_ than the actual presenece or abscense of the features
     themselves. But we're not doing that; instead, Suchi is trying to figure
     out if the browser claims to be one of the worst-offending legacy browsers.
     If it does, we prompt. If not...well...nothing, actually. Sites can't
     "break" due to this testing because there's little or no chance of a
     browser _wanting_ to lie about this.
  2. This isn't your older brother's UA sniffing. No shonky `indexOf` here.
     Isntead, Suchi uses tight-fitting regexes that "shrink wrap" around
     matching UA strings, meaning that slight variations and "liar" UAs don't
     match. This is a _good_ thing, since the failure scenario we're worried
     about is prompting users who are on good browsers, not incorrectly
     prompting users who are on legacy browsers. The matching is written in such
     a way as to ensure that unknown or unanticipated browsers don't trigger a
     prompt, so when Chrome 54 and IE 18 are releases, you can rest easy that
     your un-maintained sites that still include Suchi won't be caught off-
     guard, suddenly spamming your best users with upgrade information.

# Configuration Options

```html
<div id="promptId"></div>
<script>
  var suchiConfig = suchiConfig || [];
  suchiConfig.push({
    //
    // Basic configuration
    //

    // NOTIMPLEMENTED
    treatGCFAsLagging: true, // Detect IE with GCF installed as lagging
    // NOTIMPLEMENTED
    onlagging: function() {
      // Callback that's fired when Suchi finds the current browser is wanting
    },
    // NOTIMPLEMENTED
    onload: function() {
      // Called when suchi.js loads and finishes processing options.
    },

    //
    // Prompt configuration
    //

    // NOTIMPLEMENTED
    // By default, only the detection script is loaded, not the resources needed
    // to prompt. Set this to true to load localized prompt UI.
    prompt: true,
    // NOTIMPLEMENTED
    // Localized prompt languages to use in order of preference.
    promptLocales: ["en-GB", "en-US", "en" /*...*/ ],
    // NOTIMPLEMENTED
    promptAt: "promptId", // id of the element to put the prompt in
    // NOTIMPLEMENTED
    allowCookies: false,
    // NOTIMPLEMENTED
    pageviewsTillPrompt: 0, // Always prompt
    // NOTIMPLEMENTED
    rePromptDelay: 4 // Days to wait before re-prompting after dismissal
  });

  // Asynchronously load suchi.js
  (function(src) {
    var se = document.createElement("script");
    se.async = true;
    se.src = src;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(se, s);
  })(
    // If using a custom build or your own CDN, replace this with the location
    // of your copy of suchi.js
    "//suchijs.org/suchi.js"
  );
</script>
```

