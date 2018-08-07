import React from 'react'
import './styles.scss'
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