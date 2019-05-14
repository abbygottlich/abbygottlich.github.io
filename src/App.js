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
    hideHeader: false
  }

  hideHeader = () => {
    if (this.state.hideHeader === false) {
      this.setState({
        hideHeader: true
      })
    } else {
      this.setState({
        hideHeader: false
      })
    }
  }

  renderHome = () => {
    return <Home hideHeader={this.hideHeader} />
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.hideHeader === false ? <Header /> : null}
        <Route exact path="/" component={this.renderHome} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
