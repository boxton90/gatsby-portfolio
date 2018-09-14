import React, { Component } from 'react'
import Button from '../../components/button/button'
import Emoji from '../../components/emoji/emoji'
import { StaticQuery, graphql } from "gatsby"

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
                this.setState({
                    isNavTransparent: true,
                    isCTAVisible: false
                });
            }
            else {
                this.setState({
                    isNavTransparent: false,
                    isCTAVisible: true
                });
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
            <StaticQuery query={graphql`
            query NavigationQuery {
              contentfulNavigation{
                logo
                items
              }
            }
          `} render={data => (
                    <nav className={`navbar ${(this.state.isNavTransparent) ? "is-transparent" : ''} is-fixed-top`}>
                        <div className="navbar-brand">
                            <a data-view="#home" href="#home" className="navbar-item logo" onClick={this.doScrollIntoView}>{data.contentfulNavigation.logo}</a>
                            <div className={`navbar-burger burger ${(this.state.isMenuActive) ? "is-active" : ''}`} onClick={this.toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className={`navbar-menu ${(this.state.isMenuActive) ? "is-active" : ''}`}>
                            <div className="navbar-end">
                                {data.contentfulNavigation.items.map((item, index) => {
                                    return <div className="navbar-item" key={index}><a data-view={'#' + item} href={'#' + item} className="navbar-item" onClick={this.doScrollIntoView}>{item}</a></div>
                                })}
                                <div data-aos="fade-left" className={`navbar-item cta ${(this.state.isCTAVisible) ? '' : 'is-hidden'}`}>
                                    <Button href="mailto:boxton.da@gmail.com" type="primary">Say Hello <Emoji emoji="👋"/></Button>
                                </div>
                            </div>
                        </div>
                    </nav>
                )} />
        );
    }
}

export default Navigation;