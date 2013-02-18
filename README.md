<h1><code>suchi.js</code></h1>

Become part of the solution.

[TOC]

# What's All This Then?

Suchi is a client-side library to help your lagging users adopt
[Evergreen](http://goo.gl/Qe8EA) browsers by unobtrusively presenting them with
context-appropriate options for how to upgrade to a browser that won't ever need
prompting again.

# Sign Me Up! How Do I Use It?

It's simple! The following snippet loads and configures `suchi.js`. On the 3rd
page loaded by an IE7 user of a site with this snippet, they'll see the upgrade
message.

```html
<div id="promptId"></div>
<script>
  var suchiConfig = suchiConfig || [];
  suchiConfig.push({"promptAt": "promptId"});

  (function() {
    var se = document.createElement("script");
    se.async = true;
    se.src = "//suchijs.org/suchi.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(se, s);
  })();
</script>
```

# How Does It Work?

Suchi [does tight-fit UA testing](http://infrequently.org/2011/02/on-
performance-innumeracy-false-positives/) to determine if a user is visting your
site with one of the worst-offending legacy browsers; i.e., a non-auto-updating
browser with relatively high market share. Users on up-to-date Evergreen
browsers will never be prompted, while users who are on dead-end browser (e.g.,
IE 8 for XP, Safari for Windows, or the legacy Android Browser) will be
presented with choices that enable them to move to a better, auto-updating
world.

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

As of Spring 2013, users of the following browsers are considered "left behind"

# Why are IE9, Firefox 3.6, and Safari for Windows In That List?

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

TODOC