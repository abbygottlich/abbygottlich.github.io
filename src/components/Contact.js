import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-content">
                    <div className="contact-intro">Let's create something!</div>
                    <div className="contact-info-wrapper">
                        <div className="contact-info">972.948.0392</div>
                        <div className="contact-info">abby.gottlich@gmail.com</div>
                        <a href="https://www.linkedin.com/in/abbygottlich/" className="menu-link" target="blank">
                            <div className="contact-info linked-in">LinkedIn</div>
                        </a>
                        <a href="https://github.com/abbygottlich" className="menu-link" target="blank">
                            <div className="contact-info github">GitHub</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;