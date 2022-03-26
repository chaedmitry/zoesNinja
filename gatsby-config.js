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
        ignoredPaths: [
          "**/chapters/01-the-first-encounter-en",
          "**/chapters/04-the-tsunami-en",
          "**/chapters/01-the-first-encounter-zh",
          "**/chapters/03-half-of-my-face-zh",
          "**/chapters/05-the-ninja-zh",
          "**/chapters/04-the-tsunami-zh",
          "**/chapters/02-out-of-the-blue-zh",
          "**/chapters/02-out-of-the-blue-en",
          "**/chapters/06-covid-19-struck-zh",
          "**/chapters/05-the-ninja-en",
          "**/chapters/03-half-of-my-face-en",
          "**/chapters/08-getting-ready-zh",
          "**/chapters/09-the-expert-en",
          "**/chapters/07-four-long-months-zh",
          "**/chapters/10-the-final-résumé-en",
          "**/chapters/06-covid-19-struck-en",
          "**/chapters/10-the-final-résumé-zh",
          "**/chapters/07-four-long-months-en",
          "**/chapters/09-the-expert-zh",
          "**/chapters/12-doron-zh",
          "**/chapters/08-getting-ready-en",
          "**/chapters/13-an-imposter-zh",
          "**/chapters/14-vocation-zh",
          "**/chapters/11-knife-on-the-neck-en",
          "**/chapters/12-doron-en",
          "**/chapters/15-discharged-zh",
          "**/chapters/16-fine-and-dry-zh",
          "**/chapters/13-an-imposter-en",
          "**/chapters/15-discharged-en",
          "**/chapters/14-vocation-en",
          "**/chapters/16-fine-and-dry-en",
          "**/chapters/18-as-clear-as-mud-zh",
          "**/chapters/17-non-old-school-zh",
          "**/chapters/19-resignation-zh",
          "**/chapters/19-resignation-en",
          "**/chapters/11-knife-on-the-neck-zh",
          "**/chapters/18-as-clear-as-mud-en",
          "**/chapters/21-the-first-side-effect-zh",
          "**/chapters/20-tsunami-warning-2.0-en",
          "**/chapters/20-tsunami-warning-2.0-zh",
          "**/chapters/22-a-sharp-downturn-zh",
          "**/chapters/17-non-old-school-en",
          "**/chapters/23-you-will-definitely-get-better-zh",
          "**/chapters/25-awaiting-dawn-zh",
          "**/chapters/21-the-first-side-effect-en",
          "**/chapters/23-you-will-definitely-get-better-en",
          "**/chapters/26-the-joy-of-living-zh",
          "**/chapters/24-survival-mode-zh",
          "**/chapters/24-survival-mode-en",
          "**/chapters/27-day-30-zh",
          "**/chapters/26-the-joy-of-living-en",
          "**/chapters/28-the-aftermath-zh",
          "**/chapters/29-the-long-road-ahead-en",
          "**/chapters/28-the-aftermath-en",
          "**/chapters/29-the-long-road-ahead-zh",
          "**/chapters/31-battle-zh",
          "**/chapters/30-cancer-free-zh",
          "**/chapters/25-awaiting-dawn-en",
          "**/chapters/32-festivities-en",
          "**/chapters/22-a-sharp-downturn-en",
          "**/chapters/31-battle-en",
          "**/chapters/33-magnolia-zh",
          "**/chapters/34-rebirth-zh",
          "**/chapters/33-magnolia-en",
          "**/chapters/35-a-love-letter-to-myself-en",
          "**/chapters/30-cancer-free-en",
          "**/chapters/35-a-love-letter-to-myself-zh",
          "**/chapters/34-rebirth-en",
          "**/chapters/27-day-30-en",
          "**/chapters/32-festivities-zh"
        ],
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