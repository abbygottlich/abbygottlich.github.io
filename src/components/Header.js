import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="logo"></Link>
                <div className="nav">
                    <Link to="/" className="nav-text">Home</Link>
                    <Link to="/about" className="nav-text">About</Link>
                    <Link to="/contact" className="nav-text">Contact</Link>
                </div>
            </div>
        );
    }
}

export default Header;