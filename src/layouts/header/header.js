import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {

  constructor(props) {
    super(props);
  }

  doScrollIntoView = (e) => {
    const view = e.currentTarget.dataset.view;
    document.querySelector(`${view}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  render() {
    return (
      <header>
        <section id="home" className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h2 className="subtitle">Hello</h2>
              <h1 className="title is-1">I'm Daniel</h1>
              <h2 className="subtitle is-2">a Front-end Developer</h2>
              <a className="button is-primary is-rounded is-medium">Say Hello 👋</a>
            </div>
          </div>
          <div className="header-bg"></div>
          <FontAwesomeIcon className="scrollDownIcon" icon="angle-double-down" size="2x" data-view="#skills" onClick={this.doScrollIntoView}/>
        </section>
      </header>
    );
  }
}

export default Header;