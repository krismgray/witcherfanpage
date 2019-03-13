import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import '../Home.css';


class Home extends Component {
  render() {
    return (
      <div>
        <div className="landingZone">
          <h1>Witcher Fan Site!</h1>
          <p>Full of witcher wiki info and stunning images!</p>
        </div>
        <div className="infoBar">
          <button>Lands</button>
          <button>Characters</button>
          <button>Witcher Gear sets</button>
          <button>Witcher Schools</button>
          <button>Witcher Lovers</button>
        </div>
        <div className="mapback">

        </div>
      </div>
    );
  }
}

export default Home;
