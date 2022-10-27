"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _default = function _default(Component) {
  return function (props) {
    console.warn("withIntl is deprecated. Please use injectIntl instead.");
    return /*#__PURE__*/_react.default.createElement((0, _reactIntl.injectIntl)(Component), props);
  };
};
exports.default = _default;