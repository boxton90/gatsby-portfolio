import React, { Component } from 'react'

class Navigation extends Component {
    
    toggleMenu(e) {
        const navBurger = e.target;
        const navMenu = document.querySelector('.navbar-menu');
        navBurger.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
    }

    render() {
        return (
            <div>
              <nav className="navbar is-transparent">
                  <div className="navbar-brand">
                      <div className="navbar-burger burger" onClick={this.toggleMenu}>
                      <span></span>
                      <span></span>
                      <span></span>
                      </div>
                  </div>
          
                  <div className="navbar-menu">
                      <div className="navbar-start">
                      <a className="navbar-item">Home</a>
                      <a className="navbar-item">About</a>
                      <a className="navbar-item">Work</a>
                      </div>
                  </div>
              </nav>
            </div>
          );
    }
}

export default Navigation;