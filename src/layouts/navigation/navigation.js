import React, { Component } from 'react'

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.transparencyBreakpoint = 400;
        this.state = {
            isTransparent: true,
            isMenuActive: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (!this.state.isMenuActive) {
            if (window.scrollY < this.transparencyBreakpoint) {
                this.setState({ isTransparent: true });
            }
            else {
                this.setState({ isTransparent: false });
            }
        }
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuActive: !prevState.isMenuActive
        }));
        if (window.scrollY < this.transparencyBreakpoint) {
            this.setState(prevState => ({
                isTransparent: !prevState.isTransparent
            }));
        }
    }

    render() {
        return (
            <nav className={`navbar ${(this.state.isTransparent) ? "is-transparent" : ''} is-fixed-top`}>
                <div className="navbar-brand">
                    <p className="navbar-item logo">DFR</p>
                    <div className={`navbar-burger burger ${(this.state.isMenuActive) ? "is-active" : ''}`} onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`navbar-menu ${(this.state.isMenuActive) ? "is-active" : ''}`}>
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