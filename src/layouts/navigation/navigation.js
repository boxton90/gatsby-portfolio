import React, { Component } from 'react'

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTransparent: true
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const breakpoint = 400
        if (window.scrollY < breakpoint) {
            this.setState({ isTransparent: true });
        }
        else{
            this.setState({ isTransparent: false }); 
        }
    }

    toggleMenu(e) {
        const navBurger = e.target;
        const navMenu = document.querySelector('.navbar-menu');
        navBurger.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
    }

    render() {
        return (
            <nav className={`navbar ${(this.state.isTransparent) ? "is-transparent" : ''} is-fixed-top`}>
                <div className="navbar-brand">
                    <p className="navbar-item logo" href="https://bulma.io">DFR</p>
                    <div className="navbar-burger burger" onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item">Home</a>
                        <a className="navbar-item">Skills</a>
                        <a className="navbar-item">Work</a>
                        <a className="navbar-item">About</a>
                        <a className="navbar-item">Contact</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;