import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {

  state = {
    hideHeaderFooter: false
  }

  hideHeaderFooter = () => {
    if (this.state.hideHeaderFooter === false) {
      this.setState({
        hideHeaderFooter: true
      })
    } else {
      this.setState({
        hideHeaderFooter: false
      })
    }
  }

  renderHome = () => {
    return <Home hideHeaderFooter={this.hideHeaderFooter} headerFooterState={this.state.hideHeaderFooter} />
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.hideHeaderFooter === false ? <Header /> : null}
        <Route exact path="/" component={this.renderHome} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {this.state.hideHeaderFooter === false ? <Footer /> : null}
      </BrowserRouter>
    );
  }
}

export default App;
