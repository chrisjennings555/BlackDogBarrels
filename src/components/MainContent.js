import React, {Component} from 'react';
import ExampleProduct from './ExampleProduct.js';

class MainContent extends Component {
  render () {
    return (
      <div className="main-content">

          <h1>Welcome to Black Dog Barrels</h1>

          <h2>High quality, hand crafted furniture made from the finest Scottish Whisky Barrels</h2>

          <h3>Our Master Craftsman, Alastair Wright, has more than 1 weeks experience making stuff out of old whisky barrels. He drinks the whisky himself, so he can be satisfied the casks themselves genuinely held the finest Whisky known to man. A former pharmacist, Alistair has turned his hand to carpentry because literally anything is better than being a pharmacist.</h3>

          <ExampleProduct />
          <ExampleProduct />
          <ExampleProduct />
          <ExampleProduct />

      </div>
    )
  }
}

export default MainContent;
