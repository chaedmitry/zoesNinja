"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.navigate = exports.default = exports.changeLocale = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _gatsby = require("gatsby");
var _intlContext = require("./intl-context");
var _util = require("./util");
var _excluded = ["to", "language", "children", "onClick"];
var Link = function Link(_ref) {
  var to = _ref.to,
    language = _ref.language,
    children = _ref.children,
    onClick = _ref.onClick,
    rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_intlContext.IntlContextConsumer, null, function (intl) {
    var languageLink = language || intl.language;
    var isMatchedIgnoredPaths = (0, _util.isMatch)(intl.ignoredPaths, to);
    var link = (intl.routed || language) && !isMatchedIgnoredPaths ? "/" + languageLink + to : "" + to;
    var handleClick = function handleClick(e) {
      if (language) {
        localStorage.setItem("gatsby-intl-language", language);
      }
      if (onClick) {
        onClick(e);
      }
    };
    return /*#__PURE__*/_react.default.createElement(_gatsby.Link, (0, _extends2.default)({}, rest, {
      to: link,
      onClick: handleClick
    }), children);
  });
};
Link.propTypes = {
  children: _propTypes.default.node.isRequired,
  to: _propTypes.default.string,
  language: _propTypes.default.string
};
Link.defaultProps = {
  to: ""
};
var _default = Link;
exports.default = _default;
var navigate = function navigate(to, options) {
  if (typeof window === "undefined") {
    return;
  }
  var _window$___gatsbyIntl = window.___gatsbyIntl,
    language = _window$___gatsbyIntl.language,
    routed = _window$___gatsbyIntl.routed,
    ignoredPaths = _window$___gatsbyIntl.ignoredPaths;
  var isMatchedIgnoredPaths = (0, _util.isMatch)(ignoredPaths, to);
  var link = routed && !isMatchedIgnoredPaths ? "/" + language + to : "" + to;
  (0, _gatsby.navigate)(link, options);
};
exports.navigate = navigate;
var changeLocale = function changeLocale(language, to) {
  if (typeof window === "undefined") {
    return;
  }
  var _window$___gatsbyIntl2 = window.___gatsbyIntl,
    routed = _window$___gatsbyIntl2.routed,
    redirectDefaultLanguageToRoot = _window$___gatsbyIntl2.redirectDefaultLanguageToRoot,
    defaultLanguage = _window$___gatsbyIntl2.defaultLanguage,
    ignoredPaths = _window$___gatsbyIntl2.ignoredPaths;
  var removePrefix = function removePrefix(pathname) {
    var base = typeof __BASE_PATH__ !== "undefined" ? __BASE_PATH__ : __PATH_PREFIX__;
    if (base && pathname.indexOf(base) === 0) {
      pathname = pathname.slice(base.length);
    }
    return pathname;
  };
  var removeLocalePart = function removeLocalePart(pathname) {
    if (!routed) {
      return pathname;
    }
    var i = pathname.indexOf("/", 1);
    return pathname.substring(i);
  };
  var pathname = to || removeLocalePart(removePrefix(window.location.pathname));
  // TODO: check slash
  var isMatchedIgnoredPaths = (0, _util.isMatch)(ignoredPaths, pathname);
  var languageLink = redirectDefaultLanguageToRoot && defaultLanguage === language || isMatchedIgnoredPaths ? "" : "/" + language;
  var link = "" + languageLink + pathname + window.location.search;
  localStorage.setItem("gatsby-intl-language", language);
  (0, _gatsby.navigate)(link);
};
exports.changeLocale = changeLocale;