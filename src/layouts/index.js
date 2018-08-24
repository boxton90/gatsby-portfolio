import React from 'react'
// Styles
import './styles.scss'
// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTerminal, faHeart, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faTerminal, faHeart, faAngleDoubleDown)
// Components
import Navigation from './navigation/navigation'
import Header from './header/header'
import Skills from './skills/skills'
import Work from './work/work'
import About from './about/about'
import Contact from './contact/contact'
import Footer from './footer/footer'

export default () => (
  <div>
    <Navigation></Navigation>
    <Header></Header>
    <Skills></Skills>
    <Work></Work>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>
  </div>
);