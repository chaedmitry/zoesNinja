const webpack = require("webpack")
const { isMatch } = require("./util")
const reporter = require("gatsby-cli/lib/reporter")

function flattenMessages(nestedMessages, prefix = "") {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key]
    let prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === "string") {
      messages[prefixedKey] = value
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

exports.onCreateWebpackConfig = ({ actions, plugins }, pluginOptions) => {
  const { redirectComponent = null, languages, defaultLanguage } = pluginOptions
  if (!languages.includes(defaultLanguage)) {
    languages.push(defaultLanguage)
  }
  const regex = new RegExp(
    "(" + languages.map(l => l.split("-")[0]).join("|") + ")$"
  )
  actions.setWebpackConfig({
    resolve: { fallback: { path: require.resolve("path-browserify") } },
    plugins: [
      plugins.define({
        GATSBY_INTL_REDIRECT_COMPONENT_PATH: JSON.stringify(redirectComponent),
        "process.platform": JSON.stringify("linux"),
      }),
      new webpack.ContextReplacementPlugin(
        /@formatjs[/\\]intl-relativetimeformat[/\\]locale-data$/,
        regex
      ),
      new webpack.ContextReplacementPlugin(
        /@formatjs[/\\]intl-pluralrules[/\\]locale-data$/,
        regex
      ),
    ],
  })
}

exports.onCreatePage = async ({ page, actions }, pluginOptions) => {
  //Exit if the page has already been processed.
  if (typeof page.context.intl === "object") {
    return
  }

  const { createPage, deletePage } = actions
  const {
    path = ".",
    languages = ["en"],
    defaultLanguage = "en",
    fallbackLanguage = "",
    redirect = false,
    removeOriginalPages = false,
    ignoredPaths = [],
    redirectDefaultLanguageToRoot = false,
  } = pluginOptions

  const getMessages = (path, language) => {
    try {
      // TODO load yaml here
      const messages = require(`${path}/${language}.json`)

      return flattenMessages(messages)
    } catch (error) {
      if (error.code === "MODULE_NOT_FOUND") {
        process.env.NODE_ENV !== "test" &&
          console.error(
            `[gatsby-plugin-intl] couldn't find file "${path}/${language}.json"`
          )
      }

      throw error
    }
  }

  const generatePage = (routed, language) => {
    const messages = getMessages(path, language)
    const newPath = routed ? `/${language}${page.path}` : page.path

    /*
      Improve compatibility with Gatsby Content Sync. We need to ensure that
      `ownerNodeId` is always unique, so we append the locale if it's a routed
      page and not the default language.
      See also https://www.gatsbyjs.com/docs/conceptual/content-sync/
    */
    const ownerNodeId = page.ownerNodeId
      ? !routed || language === defaultLanguage
        ? page.ownerNodeId
        : `${page.ownerNodeId}${language}`
      : undefined

    return {
      ...page,
      ownerNodeId,
      path: newPath,
      context: {
        ...page.context,
        id: page.context.id || ownerNodeId, // preserve context.id if that's already set
        language,
        originalPath: page.path,
        intl: {
          language,
          languages,
          messages,
          routed,
          originalPath: page.path,
          redirect,
          redirectDefaultLanguageToRoot,
          defaultLanguage,
          fallbackLanguage,
          ignoredPaths,
        },
      },
    }
  }

  deletePage(page)

  if (
    redirectDefaultLanguageToRoot ||
    isMatch(ignoredPaths, page.path) ||
    page.path.match(/404/) ||
    !removeOriginalPages
  ) {
    const language = page.context.language || defaultLanguage
    reporter.info(`page` + page.path + ` assumes [` + language +`] language`)
    const newPage = generatePage(false, language)
    createPage(newPage)
  }

  languages.forEach(language => {
    // check ignore paths, if matched then don't generate locale page
    if (!isMatch(ignoredPaths, page.path)) {
      if (
        redirectDefaultLanguageToRoot === true &&
        language === defaultLanguage
      ) {
        // default language will redirect to root, so there is no need to generate default langauge pages
        // do nothing
      } else {
        const localePage = generatePage(true, language)
        const regexp = new RegExp("/404/?$")
        if (regexp.test(localePage.path)) {
          localePage.matchPath = `/${language}/*`
        }
        createPage(localePage)
      }
    }
  })
}
