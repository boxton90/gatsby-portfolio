import React, { Component } from 'react'
import Box from '../../components/box/box'
import { StaticQuery, graphql } from "gatsby"

class Skills extends Component {

  constructor(props) {
    super(props);
    this.frontendInfo = {
      emoji: '👨‍💻',
      title: 'Front-end Development',
      desc: `British shorthair malkin and egyptian mau for siamese balinese,
      for donskoy,burmese.Havana brown sphynx lynx singapura or egyptian mau
      for norwegian forest.Malkin himalayan siamese but turkish angora manx.`,
      langTitle: 'Languages I speak:',
      langList: ['HTML', 'CSS'],
      toolsTitle: 'Dev Tools:',
      toolsList: ['Bulma', 'GIT', 'SourceTree']
    }
  }

  render() {
    return (
      <StaticQuery query={graphql`
      query SkillsQuery {
        contentfulSkills{
          title
          desc{
            internal{
              content
            }
          }
        }
        allContentfulSkill {
          edges {
            node {
              emoji
              title
              desc {
                internal {
                  content
                }
              }
              skillList {
                title
                items
              }
            }
          }
        }
      }
    `} render={data => (
          <section id="skills" className="section">
            <div className="container">
              <h1 data-aos="zoom-out" className="title">{data.contentfulSkills.title}</h1>
              <div className="columns">
                <div data-aos="fade-up" className="column">
                  <p>{data.contentfulSkills.desc.internal.content}</p>
                </div>
                {data.allContentfulSkill.edges.map((skill, index) => {
                  return (<div key={index} data-aos="zoom-in-left" className="column"><Box contentData={skill.node}></Box></div>);
                })}
              </div>
            </div>
          </section>
        )} />
    );
  }
}

export default Skills;