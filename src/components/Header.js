import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {

    state = {
        menuIcon: "menu",
        toggle: false
    }

    toggleHandler() {
        if (this.state.toggle === false) {
            this.setState({
                toggle: true,
                menuIcon: "x"
            })
        } else {
            this.setState({
                toggle: false,
                menuIcon: "menu"
            })
        }
    }

    showMenu() {
        if (this.state.toggle === true) {
            return (
                <div className="menu-block">
                    <Link to="/" className="menu-home">
                        <div className="menu-text">Home</div>
                    </Link>
                    <Link to="/about" className="menu-about">
                        <div className="menu-text">About</div>
                    </Link>
                    <Link to="/contact" className="menu-contact">
                        <div className="menu-text">Contact</div>
                    </Link>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="header">
                <Link to="/" className="logo"></Link>
                <div className="nav">
                    <Link to="/" className="nav-text">Home</Link>
                    <Link to="/about" className="nav-text">About</Link>
                    <Link to="/contact" className="nav-text">Contact</Link>
                </div>
                <button className={this.state.menuIcon} onClick={this.toggleHandler}></button>
                <div>{this.showMenu()}</div>
            </div>
        );
    }
}

export default Header;