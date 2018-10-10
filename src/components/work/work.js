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
              link{
                link
              }
              image {
                sizes {
                  ...GatsbyContentfulSizes
                }
              }
            }
          }
        }
      }
      `} render={data => (
          <section id="work" className="section">
            <div className="container is-fullhd">
              <div className="columns">
                <div data-aos="fade-up" className="column">
                  <h1 data-aos="zoom-out" className="title">{data.contentfulWork.title}</h1>
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