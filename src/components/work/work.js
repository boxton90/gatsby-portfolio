import React, { Component } from 'react'
import Card from '../../components/card/card'
import LinkButton from '../../components/buttons/linkButton'
import HighlightedTitle from '../../components/highlightedTitle/highlightedTitle'
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'

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
          button{
            content
          }
        }
        allContentfulProject (sort: {fields: [date], order: DESC}, limit:3) {
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
                  <p className="content">{data.contentfulWork.desc.internal.content}</p>
                  <LinkButton to="/projects" type="primary" size="medium" border="outlined">
                    {data.contentfulWork.button.content}
                  </LinkButton>
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