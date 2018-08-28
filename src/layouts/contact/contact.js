import React from 'react'
import SocialButton from '../../components/socialButton/socialButton';

export default () => (
  <section id="contact" className="section has-text-centered">
    <div data-aos="fade-up" className="container">
      <h1 data-aos="zoom-in" className="title">Let's get social</h1>
      <div className="buttons is-centered">
        {/* <a href="https://www.linkedin.com/in/danielfr90/" target="_blank" className="button is-linkedin">
          <span className="icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="1x" /></span>
          <span>Linkedin</span>
        </a>
        <a href="https://www.linkedin.com/in/danielfr90/" target="_blank" className="button is-github">
          <span className="icon"><FontAwesomeIcon icon={['fab', 'github']} size="1x" /></span>
          <span>Github</span>
        </a> */}
        <SocialButton content={'twitter'} fabIcon={'twitter'} href={'https://twitter.com/chicolisto90'}></SocialButton>
        <SocialButton content={'linkedin'} fabIcon={'linkedin-in'} href={'https://www.linkedin.com/in/danielfr90/'}></SocialButton>
        <SocialButton content={'github'} fabIcon={'github'} href={'https://github.com/boxton90'}></SocialButton>
      </div>
    </div>
  </section>
);