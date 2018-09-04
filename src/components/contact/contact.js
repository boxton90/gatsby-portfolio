import React from 'react'
import SocialButton from '../../components/socialButton/socialButton';

export default () => (
  <section id="contact" className="section has-text-centered">
    <div data-aos="fade-up" className="container">
      <h1 data-aos="zoom-in" className="title">Let's get social</h1>
      <div className="buttons is-centered">
        <SocialButton fabIcon="twitter" href="https://twitter.com/chicolisto90">twitter</SocialButton>
        <SocialButton fabIcon="linkedin-in" href="https://www.linkedin.com/in/danielfr90/">linkedin</SocialButton>
        <SocialButton fabIcon="github" href="https://github.com/boxton90">github</SocialButton>
      </div>
    </div>
  </section>
);