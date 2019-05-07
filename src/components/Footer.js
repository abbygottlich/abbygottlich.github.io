import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/abbygottlich" target="blank">
                        <div className="linkedin-icon"></div>
                    </a>
                    <a href="https://github.com/abbygottlich" target="blank">
                        <div className="github-icon"></div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;