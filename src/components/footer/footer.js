import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery query={graphql`
  query FooterQuery {
    contentfulFooter{
      content{
        content
      }
    }  
  }
  `} render={data => (
    <footer className="footer">
      <div className="content has-text-centered" dangerouslySetInnerHTML={{ __html: data.contentfulFooter.content.content }}></div>
    </footer>
    )} />
);