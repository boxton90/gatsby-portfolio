import React from 'react'
import OutboundButton from '../buttons/outboundButton'
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
        button{
          content
          emoji
        }
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
            <Img fluid={data.contentfulAbout.avatar.sizes} className="is-rounded" alt="avatar" />
          </figure>
          <p className="content">{data.contentfulAbout.desc.internal.content}</p>
          <OutboundButton href="https://www.visualcv.com/daniel-fernandez-rabal" target="_blank" type="primary" shape="rounded" size="medium">{data.contentfulAbout.button.content} <Emoji emoji={data.contentfulAbout.button.emoji} /></OutboundButton>
        </div>
      </section>
    )}
  />
);

