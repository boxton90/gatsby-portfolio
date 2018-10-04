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
  'gatsby-plugin-sass',
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`],
}