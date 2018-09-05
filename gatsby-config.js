const dotenv = require('dotenv').config({
  path: `.env`,
});

module.exports = {
    plugins: [{
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: dotenv.parsed.CONTENTFUL_SPACE_ID,
        accessToken: dotenv.parsed.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass'],
  }