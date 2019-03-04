import React, {Component} from 'react';
import TitleBanner from '../components/TitleBanner.js';
import MainContent from '../components/MainContent.js';
import FooterBar from '../components/FooterBar.js';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <TitleBanner />
        <MainContent />
        <FooterBar />
      </div>
    )
  }
}


export default MainContainer;
