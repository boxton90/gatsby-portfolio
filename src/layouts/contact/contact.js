import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends Component {
  render() {
    return (
      <div>
        <section className="section has-text-centered">
          <div className="container">
            <h1 className="title">Contact me</h1>
            <div className="columns is-mobile is-multiline is-centered">
              <div className="column is-narrow">
                <FontAwesomeIcon className="fab linkedin" icon={['fab', 'linkedin-in']} size="2x"/>
              </div>
              <div className="column is-narrow">
                <FontAwesomeIcon className="fab github" icon={['fab', 'github']} size="2x"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;