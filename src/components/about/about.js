import React from 'react'
import avatar from "../../assets/avatar.jpg"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
    query AboutQuery {
      contentfulAbout{
        title
        desc{
          internal{
            content
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
            <img className="is-rounded" src={avatar} alt="avatar"></img>
          </figure>
          <p>{data.contentfulAbout.desc.internal.content}</p>
        </div>
      </section>
    )}
  />
);

