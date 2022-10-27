"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var webpack = require("webpack");
var _require = require("./util"),
  isMatch = _require.isMatch;
var reporter = require("gatsby-cli/lib/reporter");
function flattenMessages(nestedMessages, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return Object.keys(nestedMessages).reduce(function (messages, key) {
    var value = nestedMessages[key];
    var prefixedKey = prefix ? prefix + "." + key : key;
    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});
}
exports.onCreateWebpackConfig = function (_ref, pluginOptions) {
  var actions = _ref.actions,
    plugins = _ref.plugins;
  var _pluginOptions$redire = pluginOptions.redirectComponent,
    redirectComponent = _pluginOptions$redire === void 0 ? null : _pluginOptions$redire,
    languages = pluginOptions.languages,
    defaultLanguage = pluginOptions.defaultLanguage;
  if (!languages.includes(defaultLanguage)) {
    languages.push(defaultLanguage);
  }
  var regex = new RegExp("(" + languages.map(function (l) {
    return l.split("-")[0];
  }).join("|") + ")$");
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve("path-browserify")
      }
    },
    plugins: [plugins.define({
      GATSBY_INTL_REDIRECT_COMPONENT_PATH: JSON.stringify(redirectComponent),
      "process.platform": JSON.stringify("linux")
    }), new webpack.ContextReplacementPlugin(/@formatjs[/\\]intl-relativetimeformat[/\\]locale-data$/, regex), new webpack.ContextReplacementPlugin(/@formatjs[/\\]intl-pluralrules[/\\]locale-data$/, regex)]
  });
};
exports.onCreatePage = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref2, pluginOptions) {
    var page, actions, createPage, deletePage, _pluginOptions$path, path, _pluginOptions$langua, languages, _pluginOptions$defaul, defaultLanguage, _pluginOptions$fallba, fallbackLanguage, _pluginOptions$redire2, redirect, _pluginOptions$remove, removeOriginalPages, _pluginOptions$ignore, ignoredPaths, _pluginOptions$redire3, redirectDefaultLanguageToRoot, getMessages, generatePage, language, newPage;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _ref2.page, actions = _ref2.actions;
            if (!(typeof page.context.intl === "object")) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            createPage = actions.createPage, deletePage = actions.deletePage;
            _pluginOptions$path = pluginOptions.path, path = _pluginOptions$path === void 0 ? "." : _pluginOptions$path, _pluginOptions$langua = pluginOptions.languages, languages = _pluginOptions$langua === void 0 ? ["en"] : _pluginOptions$langua, _pluginOptions$defaul = pluginOptions.defaultLanguage, defaultLanguage = _pluginOptions$defaul === void 0 ? "en" : _pluginOptions$defaul, _pluginOptions$fallba = pluginOptions.fallbackLanguage, fallbackLanguage = _pluginOptions$fallba === void 0 ? "" : _pluginOptions$fallba, _pluginOptions$redire2 = pluginOptions.redirect, redirect = _pluginOptions$redire2 === void 0 ? false : _pluginOptions$redire2, _pluginOptions$remove = pluginOptions.removeOriginalPages, removeOriginalPages = _pluginOptions$remove === void 0 ? false : _pluginOptions$remove, _pluginOptions$ignore = pluginOptions.ignoredPaths, ignoredPaths = _pluginOptions$ignore === void 0 ? [] : _pluginOptions$ignore, _pluginOptions$redire3 = pluginOptions.redirectDefaultLanguageToRoot, redirectDefaultLanguageToRoot = _pluginOptions$redire3 === void 0 ? false : _pluginOptions$redire3;
            getMessages = function getMessages(path, language) {
              try {
                // TODO load yaml here
                var messages = require(path + "/" + language + ".json");
                return flattenMessages(messages);
              } catch (error) {
                if (error.code === "MODULE_NOT_FOUND") {
                  process.env.NODE_ENV !== "test" && console.error("[gatsby-plugin-intl] couldn't find file \"" + path + "/" + language + ".json\"");
                }
                throw error;
              }
            };
            generatePage = function generatePage(routed, language) {
              var messages = getMessages(path, language);
              var newPath = routed ? "/" + language + page.path : page.path;

              /*
                Improve compatibility with Gatsby Content Sync. We need to ensure that
                `ownerNodeId` is always unique, so we append the locale if it's a routed
                page and not the default language.
                See also https://www.gatsbyjs.com/docs/conceptual/content-sync/
              */
              var ownerNodeId = page.ownerNodeId ? !routed || language === defaultLanguage ? page.ownerNodeId : "" + page.ownerNodeId + language : undefined;
              return (0, _extends2.default)({}, page, {
                ownerNodeId: ownerNodeId,
                path: newPath,
                context: (0, _extends2.default)({}, page.context, {
                  id: page.context.id || ownerNodeId,
                  // preserve context.id if that's already set
                  language: language,
                  originalPath: page.path,
                  intl: {
                    language: language,
                    languages: languages,
                    messages: messages,
                    routed: routed,
                    originalPath: page.path,
                    redirect: redirect,
                    redirectDefaultLanguageToRoot: redirectDefaultLanguageToRoot,
                    defaultLanguage: defaultLanguage,
                    fallbackLanguage: fallbackLanguage,
                    ignoredPaths: ignoredPaths
                  }
                })
              });
            };
            deletePage(page);
            if (redirectDefaultLanguageToRoot || isMatch(ignoredPaths, page.path) || page.path.match(/404/) || !removeOriginalPages) {
              language = page.context.language || defaultLanguage;
              reporter.info("page" + page.path + " assumes [" + language + "] language");
              newPage = generatePage(false, language);
              createPage(newPage);
            }
            languages.forEach(function (language) {
              // check ignore paths, if matched then don't generate locale page
              if (!isMatch(ignoredPaths, page.path)) {
                if (redirectDefaultLanguageToRoot === true && language === defaultLanguage) {
                  // default language will redirect to root, so there is no need to generate default langauge pages
                  // do nothing
                } else {
                  var localePage = generatePage(true, language);
                  var regexp = new RegExp("/404/?$");
                  if (regexp.test(localePage.path)) {
                    localePage.matchPath = "/" + language + "/*";
                  }
                  createPage(localePage);
                }
              }
            });
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();