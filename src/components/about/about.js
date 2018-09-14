import React from 'react'
import Button from '../../components/button/button'
import Emoji from '../../components/emoji/emoji'
import { StaticQuery, graphql } from 'gatsby'

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
          file{
            url
          }
        }
      }
    }    
  `}
    render={data => (
      <section id="about" className="section has-text-centered">
        <div data-aos="fade-up" className="container">
          <h1 data-aos="zoom-in" className="title">{data.contentfulAbout.title}</h1>
          <figure className="image avatar is-128x128">
            <img className="is-rounded" src={data.contentfulAbout.avatar.file.url} alt="avatar"></img>
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

