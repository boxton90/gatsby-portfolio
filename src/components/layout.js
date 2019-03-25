import React, { Component } from 'react'
// Styles
import './styles.scss'
// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
// AOS
import AOS from 'aos'
// SEO
import Helmet from "./helmet/helmet";
// Components
import Navigation from './navigation/navigation'
import Header from './header/header'
import Announcement from './announcement/announcement'
import Skills from './skills/skills'
import Work from './work/work'
import About from './about/about'
import Contact from './contact/contact'
import Footer from './footer/footer'
import Contribute from './contribute/contribute'

library.add(fab, faAngleDoubleDown)
class Layout extends Component {

  componentDidMount() {
    AOS.init({
      // Global settings
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

      // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 450, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }

  render() {
    return (
      <div>
        <Helmet></Helmet>
        <Navigation></Navigation>
        <Header></Header>
        <Announcement></Announcement>
        <Skills></Skills>
        <Work></Work>
        <About></About>
        <Contribute></Contribute>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default Layout;