import React, {Component} from 'react';

class TitleBanner extends Component {
  render () {
    return (
      <div className="title-banner">

        <div className="banner-button">
          <p>SHOP</p>
        </div>

        <div className="banner-button">
          <p>ABOUT</p>
        </div>

        <div className="title-logo">
          <h1>BLACK DOG BARRELS</h1>
        </div>

        <div className="banner-button">
          <p>SOCIAL</p>
        </div>

        <div className="banner-button">
          <p>CONTACT</p>
        </div>

      </div>
    )
  }
}

export default TitleBanner;
