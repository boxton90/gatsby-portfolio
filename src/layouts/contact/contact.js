import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends Component {
  render() {
    return (
      <section className="section has-text-centered">
        <div className="container">
          <h1 className="title">Contact me</h1>
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
  }
}

export default Contact;