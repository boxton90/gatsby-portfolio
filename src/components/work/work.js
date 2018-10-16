import React, { Component } from 'react'
import Card from '../../components/card/card'
import HighlightedTitle from '../../components/highlightedTitle/highlightedTitle'
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
        allContentfulProject (sort: {fields: [date], order: DESC}) {
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
                  <HighlightedTitle color="red">{data.contentfulWork.title}</HighlightedTitle>
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