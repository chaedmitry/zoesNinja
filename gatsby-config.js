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
        ignoredPaths: [
          `${__dirname}/src/pages/chapters`,
          `${__dirname}/src/templates/blog-post.js`
        ],
        // option to fallback to the defined language instead of the `defaultLanguage` if the user langauge is not in the list
        fallbackLanguage: `en`,
      },
    },
    
    /* This plugin is used to fetch the markdown files for pages*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chapters`,
<<<<<<< HEAD
        path: `${__dirname}/content/chapters`,
=======
        path: `${__dirname}/src/pages/chapters`,
>>>>>>> lang-switch
      },
    },
    
    /* This plugin is used to transform markdown files to HTML */
    'gatsby-transformer-remark',

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     */
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,

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
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        langKeyForNull: '',
        prefixDefault: false,
        useLangKeyLayout: false,
        pagesPaths: [
          'src/pages/index',
          'content/'
        ],
      }
    },

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
        icon: `content/assets/gatsby-icon.png`,
      },
    },
  ],
  siteMetadata: {
    contact: `https://forms.gle/4jVrUdu7TSTtFoVy5`,
    title: `Zoe's Ninja Cancer Journey`,
    description: `TBD`,
  }
}