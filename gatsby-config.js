/**
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
*/

module.exports = {
  /**
   * More plugins: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    `gatsby-plugin-preload-fonts`,
    
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `zh`],
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: false,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: true,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: [],
        // option to fallback to the defined language instead of the `defaultLanguage` if the user langauge is not in the list
        fallbackLanguage: `en`,
      },
    },
    
    /* Fetch the markdown files for pages*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chapters`,
        path: `${__dirname}/src/pages/chapters`,
      },
    },
    /* Fetch md images */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chapters`,
        path: `${__dirname}/src/pages/chapters/images`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     */
     `gatsby-plugin-image`,
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
    
    /* This plugin is used to transform markdown files to HTML */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zoe's Ninja Cancer Journey`,
        short_name: `Zoe's Ninja`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#D1E3E6`, //color of the browser header
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-EN3SM85SWR", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
  siteMetadata: {
    title: `Zoe's Ninja · 難言之隱`,
    description: `A real-life story of a geneticist navigating her cancer journey. Chance. Life. Love. Science. 一個遺傳學家面對癌病的真人真事。無常、科學。愛、人生。`,
  }
}