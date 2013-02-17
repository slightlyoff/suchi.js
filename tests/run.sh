#!/bin/bash

# Copyright 2013:
#      Alex Russell <slightlyoff@chromium.org>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

DOH='../util/doh/runner.js'
JSCPATH='/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Resources/jsc'
D8PATH=$(type -P d8)
JPATH=$(type -P java)
RUNNER=''

# FIXME(slightlyoff): Add option parsing to support explicit runtime selection.

if   [ $D8PATH ]  && [ -x $D8PATH ]; then
  RUNNER='d8 --harmony';
elif [ $JSCPATH ] && [ -x $JSCPATH ]; then
  RUNNER=$JSCPATH;
elif [ $JPATH ]   && [ -x $JPATH ]; then
  RUNNER='$JPATH -classpath ../util/js.jar org.mozilla.javascript.tools.shell.Main';
else
  echo "FAILED: No JavaScript Runtime Found! Please install Java or the V8 Shell (d8) and add them to your \$PATH"
  exit 1;
fi

echo "===================================================================="
echo "= Using runtime: $RUNNER"
echo "=-------------------------------------------------------------------"
echo "= Unit Tests"
echo "===================================================================="
echo ""
$RUNNER test.js
