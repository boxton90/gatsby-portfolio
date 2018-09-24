const dotenv = require('dotenv').config({
  path: `.env`,
});


module.exports = {
  siteMetadata: {
    title: `Daniel Fernandez Rabal | Front-End Developer`,
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
  'gatsby-plugin-sass',
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`],
}