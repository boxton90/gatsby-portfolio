import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet';

export default () => (
  <StaticQuery
    query={graphql`
    query helmetQuery{
      site{
        siteMetadata {
          title
          description
          keywords
        }
      }
      contentfulNavigation {
        favicon{
          file{
            url
          }
        }
      }    
    }
  `}
    render={data => (
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <link rel="shortcut icon" type="image/png" href={data.contentfulNavigation.favicon.file.url}/>
        <title>{data.site.siteMetadata.title}</title>
        <html lang="en" class="has-navbar-fixed-top"/>
      </Helmet>
    )}
  />
);

