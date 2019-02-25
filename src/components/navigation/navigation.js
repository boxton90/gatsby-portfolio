import React, { Component } from 'react'
import OutboundButton from '../../components/buttons/outboundButton'
import Emoji from '../../components/emoji/emoji'
import { StaticQuery, graphql } from "gatsby"

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavTransparent: true,
            isMenuActive: false,
            isCTAVisible: false
        };
    }

    componentDidMount() {
        this.transparencyBreakpoint = window.innerHeight / 2;
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
        else {
            if (window.scrollY < this.transparencyBreakpoint) {
                this.setState({
                    isCTAVisible: false
                });
            }
            else {
                this.setState({
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

    onClickLink = (e) => {
        this.doScrollIntoView(e);
        this.toggleMenu();
        this.handleScroll();
    }

    onClickLogo = (e) => {
        this.doScrollIntoView(e);
        this.handleScroll();
    }

    render() {
        return (
            <StaticQuery query={graphql`
            query NavigationQuery {
                contentfulNavigation {
                  title
                  items
                  button{
                    content
                    emoji
                  }
                  favicon{
                    file{
                      url
                    }
                  }
                }
              }
          `} render={data => (
                    <nav className={`navbar ${(this.state.isNavTransparent) ? "is-transparent" : ''} is-fixed-top`}>
                        <div className="navbar-brand">
                            <a data-view="#home" className="navbar-item logo" onClick={this.onClickLogo}>
                                <img src={data.contentfulNavigation.favicon.file.url} alt="favicon" width="30" height="30"></img><b>{data.contentfulNavigation.title}</b>
                            </a>
                            <div className={`navbar-burger burger ${(this.state.isMenuActive) ? "is-active" : ''}`} onClick={this.toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className={`navbar-menu ${(this.state.isMenuActive) ? "is-active" : ''}`}>
                            <div className="navbar-end">
                                {data.contentfulNavigation.items.map((item, index) => {
                                    return <div className="navbar-item" key={index}><a data-view={'#' + item} className="navbar-item" onClick={this.onClickLink}>{item}</a></div>
                                })}
                                <div data-aos="fade-left" className={`navbar-item cta ${(this.state.isCTAVisible) ? '' : 'is-hidden'}`}>
                                    <OutboundButton href="mailto:boxton.da@gmail.com" type="primary">{data.contentfulNavigation.button.content} <Emoji emoji={data.contentfulNavigation.button.emoji} /></OutboundButton>
                                </div>
                            </div>
                        </div>
                    </nav>
                )} />
        );
    }
}

export default Navigation;