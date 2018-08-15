import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>This website was handcrafted with<br></br><FontAwesomeIcon icon="heart" size="1x" color="red"/><br></br> by Daniel Fernandez Rabal</p>
        </div>
      </footer>
    );
  }
}

export default Footer;