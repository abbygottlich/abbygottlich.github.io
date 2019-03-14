import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="header">
            <div className="logo"></div>
            <div class="nav">
              <div className="nav-text">Home</div>
              <div className="nav-text">About</div>
              <div className="nav-text">Contact</div>
            </div>
          </div>
          <div className="development">
            <div className="development-text">&lt;Development /&gt;</div>
          </div>
          <div className="design">
            <div className="design-text"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
