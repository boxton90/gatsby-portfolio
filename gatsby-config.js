const dotenv = require('dotenv').config({
  path: `.env`,
});


module.exports = {
  siteMetadata: {
    title: 'Front-End Developer | Daniel Fernandez Rabal',
    description: 'Front-End Developer | Daniel Fernandez Rabal',
    keywords: `Daniel Fernandez Rabal, Daniel, Fernandez, Rabal, Web developer, Web, Developer, CSS, HTML, JS, Javascript, Front End Developer, CSS3, HTML5`
  },
  plugins: [{
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: dotenv.parsed.CONTENTFUL_SPACE_ID,
      accessToken: dotenv.parsed.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/src/assets/`
    }
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: dotenv.parsed.GA_TRACKING_ID,
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `DFR`,
      short_name: `DFR`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#ffffff`,
      display: `standalone`,
      icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      orientation: `portrait`
    },
  },
  `gatsby-plugin-offline`, // Should be included after gatsby-plugin-manifest
  'gatsby-plugin-sass',
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`],
}