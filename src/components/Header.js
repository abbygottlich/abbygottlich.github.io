
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo"></div>
                <div className="nav">
                    <div className="nav-text">Home</div>
                    <div className="nav-text">About</div>
                    <div className="nav-text">Contact</div>
                </div>
            </div>
        );
    }
}

export default Header;