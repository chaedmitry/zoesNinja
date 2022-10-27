"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
var _exportNames = {
  Link: true,
  withIntl: true,
  navigate: true,
  changeLocale: true,
  IntlContextProvider: true,
  IntlContextConsumer: true
};
exports.withIntl = exports.navigate = exports.changeLocale = exports.Link = exports.IntlContextProvider = exports.IntlContextConsumer = void 0;
var _reactIntl = require("react-intl");
Object.keys(_reactIntl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _reactIntl[key]) return;
  exports[key] = _reactIntl[key];
});
var _link = _interopRequireWildcard(require("./link"));
exports.Link = _link.default;
exports.navigate = _link.navigate;
exports.changeLocale = _link.changeLocale;
var _withIntl = _interopRequireDefault(require("./with-intl"));
exports.withIntl = _withIntl.default;
var _intlContext = require("./intl-context");
exports.IntlContextProvider = _intlContext.IntlContextProvider;
exports.IntlContextConsumer = _intlContext.IntlContextConsumer;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }