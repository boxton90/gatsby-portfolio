import React from 'react'
import { Link } from 'gatsby'
import Emoji from '../components/emoji/emoji'
import { StaticQuery, graphql } from 'gatsby'
import './404.scss'

export default () => (
    <StaticQuery
    query={graphql`
    query ErrorPageQuery {
        contentfulErrorPage{
          error{
            type
            desc
          }
          link{
            link
            content
          }
        }
      }
  `}
    render={data => (
        <section className="hero is-primary is-fullheight has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-1">{data.contentfulErrorPage.error.type}</h1>
                    <h2 className="subtitle is-2">{data.contentfulErrorPage.error.desc}</h2>
                    <Link to={data.contentfulErrorPage.link.link}>{data.contentfulErrorPage.link.content} <Emoji emoji="🏡"/></Link>
                </div>
            </div>
        </section>
    )}
  />
)