import React from 'react'
import SocialButton from '../../components/buttons/socialButton';
import HighlightedTitle from '../../components/highlightedTitle/highlightedTitle'
import { StaticQuery, graphql } from 'gatsby'

export default () => (

    <StaticQuery query={graphql`
  query ContributeQuery{
    contentfulContribute{
      title
      desc{
        desc
      }
      socialButton{
        content
        icon
        url
      }
    }
  }
  `} render={data => (
            <div id="contribute">
                <section className="section has-text-centered">
                    <div data-aos="fade-up" className="container">
                        <HighlightedTitle color="yellow">{data.contentfulContribute.title}</HighlightedTitle>
                        <p className="content">{data.contentfulContribute.desc.desc}</p>
                        <div className="buttons is-centered">
                            <SocialButton fabIcon={data.contentfulContribute.socialButton.icon} href={data.contentfulContribute.socialButton.url} >{data.contentfulContribute.socialButton.content}</SocialButton>
                        </div>
                    </div>
                </section>
            </div>
        )} />
);