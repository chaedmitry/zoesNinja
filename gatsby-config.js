/**
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
*/

module.exports = {
  /**
   * More plugins: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
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
    /* Fetch md images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chapters`,
        path: `${__dirname}/src/pages/chapters/images`,
      },
    },
    */

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     */
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

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
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
  ],
  siteMetadata: {
    contact: `https://forms.gle/4jVrUdu7TSTtFoVy5`,
    title: `Zoe's Ninja`,
    description: `2020 had just begun when I was hit by an unexpected diagnosis of a very rare cancer of the salivary gland. It jolted the hectic life of this forty-something years old into a sudden halt as surgery, radiotherapy and a long recovery phase ensued.`,
  }
}