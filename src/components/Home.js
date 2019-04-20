import React, { Component } from 'react';
import Development from "./Development";
import Design from "./Design";

class About extends Component {
    render() {
        return (
            <div className="App">
                <div className="main">
                    <Development />
                    <Design />
                </div>
            </div>
        );
    }
}

export default About;