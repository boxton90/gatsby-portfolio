import React from 'react'
import Button from '../../components/button/button'
import Emoji from '../../components/emoji/emoji'
import HighlightedTitle from '../../components/highlightedTitle/highlightedTitle'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
    query AboutQuery {
      contentfulAbout {
        title
        cta
        desc {
          internal {
            content
          }
        }
        avatar{
          sizes {
            ...GatsbyContentfulSizes
          }
        }
      }
    }    
  `}
    render={data => (
      <section id="about" className="section has-text-centered">
        <div data-aos="fade-up" className="container">
          <HighlightedTitle color="purple">{data.contentfulAbout.title}</HighlightedTitle>
          <figure className="image avatar is-128x128">
            <Img fluid={data.contentfulAbout.avatar.sizes} className="is-rounded" alt="avatar"/>
          </figure>
          <p>{data.contentfulAbout.desc.internal.content}</p>
          <div className="section">
            <Button href="https://www.visualcv.com/daniel-fernandez-rabal" target="_blank" type="primary" shape="rounded" size="medium">{data.contentfulAbout.cta} <Emoji emoji="👨🏻‍🎓"/></Button>
          </div>
        </div>
      </section>
    )}
  />
);

