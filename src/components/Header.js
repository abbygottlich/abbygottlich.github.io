import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {

    state = {
        menuIcon: "menu",
        toggle: false
    }

    toggleHandler = () => {
        if (this.state.toggle === false) {
            this.setState({
                toggle: true,
                menuIcon: "menu-x"
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
                    <div className="menu-x" onClick={this.toggleHandler}></div>
                    <div className="menu-links">
                        <Link to="/" className="menu-link">
                            <div className="menu-text" onClick={this.toggleHandler}>Home</div>
                        </Link>
                        <Link to="/about" className="menu-link">
                            <div className="menu-text" onClick={this.toggleHandler}>About</div>
                        </Link>
                        <Link to="/contact" className="menu-link">
                            <div className="menu-text" onClick={this.toggleHandler}>Contact</div>
                        </Link>
                        <a href="https://www.linkedin.com/in/abbygottlich/" className="menu-link" target="blank">
                            <div className="menu-text">LinkedIn</div>
                        </a>
                        <a href="https://github.com/abbygottlich" className="menu-link" target="blank">
                            <div className="menu-text">GitHub</div>
                        </a>
                    </div>
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
                <div className="nav-and-menu">
                    <div className="nav">
                        <Link to="/" className="nav-text">Home</Link>
                        <Link to="/about" className="nav-text">About</Link>
                        <Link to="/contact" className="nav-text">Contact</Link>
                    </div>
                    <div className={this.state.menuIcon} onClick={this.toggleHandler}></div>
                </div>
                <div>{this.showMenu()}</div>
            </div>
        );
    }
}

export default Header;