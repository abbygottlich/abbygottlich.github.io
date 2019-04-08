import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Header />
          <div className="development">
            <div exact className="development-text" to="/development">&lt;Development /&gt; </div>
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
