import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Development from "./components/Development"

class App extends Component {
  render() {
    const blank = {}
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
              <Route exact path="/" component={blank}>
                <Link exact className="development-text" to="/development">&lt;Development /&gt; </Link>
              </Route>
              <Route exact path="/development" component={Development} />
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
