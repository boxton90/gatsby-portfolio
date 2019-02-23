import React, { Component } from 'React'
import Card from '../components/card/card'
import HighlightedTitle from '../components/highlightedTitle/highlightedTitle'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import AOS from 'aos'
import 'aos/dist/aos.css'

class Projects extends Component {

  componentDidMount() {
    AOS.init({
      // Global settings
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

      // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 450, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }

  render() {
    return (
      <StaticQuery query={graphql`
      query ProjectsQuery {
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
          <div>
            <section className="section">
              <div className="container is-fullhd">
                <div className="level is-mobile">
                  <div className="level-item level-left">
                    <Link to="/" className="material-icons arrow-back">arrow_back</Link>
                    <HighlightedTitle color="purple">Projects</HighlightedTitle>
                  </div>
                </div>
              </div>
            </section>
            <section className="section has-content-centered">
              <div className="container is-fullhd">
                <div className="columns">
                  {data.allContentfulProject.edges.map((project, key) => {
                    return (<div key={key} data-aos="zoom-in" className="column"><Card contentData={project.node}></Card></div>);
                  })}
                </div>
              </div>
            </section >
          </div>
        )} />
    )
  }
}

export default Projects

