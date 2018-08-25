import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <section id="contact" className="section has-text-centered">
    <div data-aos="fade-up" className="container">
      <h1 data-aos="zoom-in" className="title">Contact me</h1>
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-narrow">
          <a href="https://www.linkedin.com/in/danielfr90/" target="_blank"><FontAwesomeIcon className="fab linkedin" icon={['fab', 'linkedin-in']} size="2x" /></a>
        </div>
        <div className="column is-narrow">
          <a href="https://github.com/boxton90" target="_blank"><FontAwesomeIcon className="fab github" icon={['fab', 'github']} size="2x" /></a>
        </div>
      </div>
    </div>
  </section>
);