import React from 'react'
import SocialButton from '../../components/buttons/socialButton';
import HighlightedTitle from '../../components/highlightedTitle/highlightedTitle'
import { StaticQuery, graphql } from 'gatsby'
import ContactForm from '../contactForm/contactForm'

export default () => (

  <StaticQuery query={graphql`
  query ContactQuery{
    contentfulContact{
      title
      socialButton{
        content
        icon
        url
      }
    }
  }
  `} render={data => (
      <div id="contact">
        <section className="section has-text-centered">
          <div data-aos="fade-up" className="container">
            <HighlightedTitle color="turquoise">contact me</HighlightedTitle>
            <div className="columns is-centered">
              <div className="column is-half">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <h5 data-aos="fade-down" className="is-size-5 has-text-centered">Or</h5>
        <section className="section has-text-centered">
          <div data-aos="fade-up" className="container">
            <HighlightedTitle color="yellow">{data.contentfulContact.title}</HighlightedTitle>
            <div className="buttons is-centered">
              {data.contentfulContact.socialButton.map(((button, index) => {
                return (
                  <SocialButton fabIcon={button.icon} href={button.url} key={index}>{button.content}</SocialButton>
                );
              }))}
            </div>
          </div>
        </section>
      </div>
    )} />
);