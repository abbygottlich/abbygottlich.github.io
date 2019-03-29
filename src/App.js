import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Development from "./components/Development"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
              <Route path="/development" component={Development} />
            </div>
            <div className="design">
              <div className="design-text"></div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
