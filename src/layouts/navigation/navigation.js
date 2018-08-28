import React, { Component } from 'react'

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.transparencyBreakpoint = 400;
        this.navItemsList = ['skills', 'work', 'about', 'contact'];
        this.state = {
            isNavTransparent: true,
            isMenuActive: false,
            isCTAVisible: false
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
                this.setState({ isNavTransparent: true,
                                isCTAVisible: false});
            }
            else {
                this.setState({ isNavTransparent: false,
                                isCTAVisible: true});
            }
        }
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuActive: !prevState.isMenuActive
        }));
        if (window.scrollY < this.transparencyBreakpoint) {
            this.setState(prevState => ({
                isNavTransparent: !prevState.isNavTransparent
            }));
        }
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
            <nav className={`navbar ${(this.state.isNavTransparent) ? "is-transparent" : ''} is-fixed-top`}>
                <div className="navbar-brand">
                    <a data-view="#home" className="navbar-item logo" onClick={this.doScrollIntoView}>DFR</a>
                    <div className={`navbar-burger burger ${(this.state.isMenuActive) ? "is-active" : ''}`} onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`navbar-menu ${(this.state.isMenuActive) ? "is-active" : ''}`}>
                    <div className="navbar-end">
                        {this.navItemsList.map((item, index) => {
                            return <div className="navbar-item"><a key={index} data-view={'#' + item} className="navbar-item" onClick={this.doScrollIntoView}>{item}</a></div>
                        })}
                        <div data-aos="fade-left" className={`navbar-item cta ${(this.state.isCTAVisible) ? '' : 'is-hidden'}`}>
                            <a className="button is-primary"><span>Say Hello 👋</span></a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;