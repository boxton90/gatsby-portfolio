import React, { Component } from 'react'
import Card from '../../components/card/card'
import { StaticQuery, graphql } from "gatsby"


class Work extends Component {

  render() {
    return (
      <StaticQuery query={graphql`
      query WorkQuery {
        contentfulWork {
          title
          desc {
            internal {
              content
            }
          }
        }
        allContentfulProject {
          edges {
            node {
              title
              desc {
                internal {
                  content
                }
              }
              tags
              image {
                sizes {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }
      `} render={data => (
          <section id="work" className="section">
            <div className="container">
              <h1 data-aos="zoom-out" className="title">{data.contentfulWork.title}</h1>
              <div className="columns">
                <div data-aos="fade-up" className="column">
                  <p>{data.contentfulWork.desc.internal.content}</p>
                </div>
                {data.allContentfulProject.edges.map((project, key) => {
                  return (<div key={key} data-aos="zoom-in-left" className="column"><Card contentData={project.node}></Card></div>);
                })}
              </div>
            </div>
          </section >
        )} />
    );
  }
}

export default Work;