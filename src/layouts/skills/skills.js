import React, { Component } from 'react'
import Box from '../../components/box/box'

class Skills extends Component {

  constructor(props) {
    super(props);
    this.frontendInfo = {
      icon : 'terminal',
      title : 'Front-end Development',
      desc: `British shorthair malkin and egyptian mau for siamese balinese,
      for donskoy,burmese.Havana brown sphynx lynx singapura or egyptian mau
      for norwegian forest.Malkin himalayan siamese but turkish angora manx.`,
      langTitle: 'Languages I speak:',
      langList : ['HTML', 'CSS'],
      toolsTitle: 'Dev Tools:',
      toolsList : ['Bulma', 'GIT','SourceTree']
    }
  }

  render() {
    return (
      <section id="skills" className="section">
        <div className="container">
          <h1 className="title">Skills</h1>
          <div className="columns">
            <div className="column">
              <p>American bobtail tiger but bengal sphynx egyptian mau or burmese lion.
                Devonshire rex. Puma ragdoll, and mouser yet panther bombay yet malkin for panther.
                Kitten. Kitten norwegian forest for tom for grimalkin so puma so siberian.
                Russian blue russian blue scottish fold for kitten. Devonshire rex grimalkin. Cheetah kitten.
                Jaguar tom for russian blue lynx. Puma cornish rex so egyptian mau and jaguar so mouser.
                Havana brown thai for devonshire rex birman yet bobcat or balinese.</p>
            </div>
            <div className="column">
              <Box contentData={this.frontendInfo}></Box>
            </div>
        </div>
        </div>
      </section>
    );
  }
}

export default Skills;