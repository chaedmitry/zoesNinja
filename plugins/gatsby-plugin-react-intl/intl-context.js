"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.IntlContextProvider = exports.IntlContextConsumer = void 0;
var _react = _interopRequireDefault(require("react"));
var IntlContext = /*#__PURE__*/_react.default.createContext();
var IntlContextProvider = IntlContext.Provider;
exports.IntlContextProvider = IntlContextProvider;
var IntlContextConsumer = IntlContext.Consumer;
exports.IntlContextConsumer = IntlContextConsumer;