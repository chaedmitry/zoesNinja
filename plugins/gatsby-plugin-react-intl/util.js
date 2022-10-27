"use strict";

var picomatch = require("picomatch");
function isMatch(patterns, currentPath) {
  var isMatched = picomatch.isMatch(currentPath, patterns);
  return isMatched;
}
exports.isMatch = isMatch;