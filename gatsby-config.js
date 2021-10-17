/**
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
*/

module.exports = {
  /**
   * More plugins: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    /* This plugin is used to fetch the markdown files for pages*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chapters`,
        path: `${__dirname}/content/chapters`,
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