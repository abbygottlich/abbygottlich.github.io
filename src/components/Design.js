import React, { Component } from 'react';

class Design extends Component {

    state = {
        toggle: false
    }

    toggleHandler() {
        if (this.state.toggle === false) {
            this.setState({
                toggle: true
            })
        } else {
            this.setState({
                toggle: false
            })
        }
    }

    showDesignLinks() {
        if (this.state.toggle === true) {
            return (
                <div className="design-projects">
                    <div className="single-project">
                        <div className="design-links">NakedTravel</div>
                        <div className="cover-image"></div>
                    </div>
                    <div className="single-project">
                        <div className="design-links">NakedTravel</div>
                        <div className="cover-image"></div>
                    </div>
                    <div className="single-project">
                        <div className="design-links">NakedTravel</div>
                        <div className="cover-image"></div>
                    </div>
                    <div className="single-project">
                        <div className="design-links">NakedTravel</div>
                        <div className="cover-image"></div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="design">
                <div className="design-content">
                    <div className="design-title" onClick={() => { this.toggleHandler() }} ></div>
                    <div className="design-links">{this.showDesignLinks()}</div>
                </div>
            </div>
        );
    }
}

export default Design;